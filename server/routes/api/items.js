const express = require('express');
const { Pool } = require('pg');
const checkJwt = require('../../config/checkJwt');

require('dotenv').config();

const connectionString = process.env.DATABASE_URL || process.env.CONNECTION_STRING 
const pool = new Pool({
  connectionString: connectionString,
  ssl: { rejectUnauthorized: false } 
})

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

const router = express.Router();

router.get('/:id', checkJwt, async (req,res) => {
  res.send(
    await (async () => {
      const client = await pool.connect()
      try {
        const res = await client.query(`
        select id, name, list_id, user_id, bought, created_on, 
        (
          select name from category c where lower(i.name) like '%' || lower(c.item) || '%' and (user_id = 'admin' or user_id = $1) 
          order by global_category, character_length(item) desc limit 1
        ) 
        as category from item i where list_id = any ($2) and user_id = $1
        `, [req.user.sub.split('|')[1], `{${req.params.id}}`])
        return ['SUCCESS', res.rows];
      } finally {
        client.release()
      }
    })().catch(err => {
      return [ 'ERROR', err.stack ];
    }))
});

router.post('/', checkJwt, async (req,res) => {
  res.send(await (async () => {
    const client = await pool.connect()
    try {
      const res = await client.query(`
      insert into item as i (name, list_id, user_id, bought, created_on) values ($1, $2, $3, false, $4) 
      returning id, name, list_id, user_id, 
      (
        select name from category c where lower(i.name) like '%' || lower(c.item) || '%' and (user_id = 'admin' or user_id = $3) 
        order by global_category, character_length(item) desc limit 1
      )
      as category, bought, created_on
      `, [req.body.name, req.body.list_id, req.user.sub.split('|')[1], req.body.localTimeStamp]);
      return ['SUCCESS', res.rows[0]];

    } finally {
      client.release()
    }
  })().catch(err => {
    console.log(err.stack);
    return [ 'ERROR', err.stack ];

  }))
});

router.put('/', checkJwt, async (req,res) => {
  res.send(await (async () => {
    const client = await pool.connect()
    try {
      const res = await client.query(`
      update item as i set name = $1, bought = $2 where id = $3 and user_id = $4 
      returning id, name, list_id, user_id, 
      (
        select name from category c where lower(i.name) like '%' || lower(c.item) || '%' and (user_id = 'admin' or user_id = $4)
        order by global_category, character_length(item) desc limit 1
      )
      as category, bought, created_on
      `, [req.body.name, req.body.bought, req.body.id, req.user.sub.split('|')[1]]);
      return ['SUCCESS', res.rows[0]];

    } finally {
      client.release()
    }
  })().catch(err => {
    console.log(err.stack);
    return [ 'ERROR', err.stack ];

  }))
});

router.delete('/:id', checkJwt, async (req, res) => {
  res.send(await (async () => {
    const client = await pool.connect()
    try {
        const res = await client.query("delete from item where id = $1 and user_id = $2 returning id, name", 
        [req.params.id, req.user.sub.split('|')[1]]);
        return ['SUCCESS', res.rows[0]];
     } finally {
        client.release()
    }
    })().catch(err => {
      console.log(err.stack);
      return [ 'ERROR', err.stack ];
    }))
});

router.post('/category', checkJwt, async (req,res) => {
  res.send(await (async () => {
    const client = await pool.connect();

    let queryAndParams = prepareQueryAndParams(req);
    let query = queryAndParams.query;
    let params = queryAndParams.params;
    try {
      const res = await client.query(query, params);
      return ['SUCCESS', res.rows];
    } finally {
      client.release()
    }
  })().catch(err => {
    return ['ERROR', err.stack];
    console.log(err.stack);
  }))
});

function prepareQueryAndParams(req) {
  let itemsArray = prepareItemsArray(req.body.items);

  let user = req.user.sub.split('|')[1];
  let isAdmin = user === process.env.ADMIN_ID;
  if (isAdmin) {
    user = 'admin';
  }

  let params = [req.body.category, user, isAdmin];
  
  let query = "insert into category (name, item, user_id, global_category, created_on) values ";

  for (let i = 0; i < itemsArray.length; i++) {
    query = query.concat(`($1, $${ (i + 4) }, $2, $3, now()), `);
    params.push(itemsArray[i])
  }
  query = query.slice(0, query.length - 2);
  query = query.concat(` on conflict (item, user_id) do update set name = $1, created_on = now() returning *`);

  return { query: query, params: params };
}

function prepareItemsArray(items) {
  let rawItemsArray = items.split(/\r?,/);
  let itemsArray = [];
  rawItemsArray.forEach(item => {
    item = item.replace(/ +(?= )/g,'');

    if (item.length > 1 && item !== ' ') {
      item = item.trim();
      item = item.toLowerCase();
      item = item.replace(/\.|\,/g, '');
      itemsArray.includes(item) || itemsArray.push(item);
    }
  });
  return itemsArray;
}

module.exports = router;
