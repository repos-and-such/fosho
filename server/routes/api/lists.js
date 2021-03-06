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

router.get(`/`, checkJwt, async (req,res) => {
  res.send(
    await (async () => {
      const client = await pool.connect()
      try {
        const res = await client.query("select id, name, user_id, created_on, (select count(*) from item where list_id = l.id) as item_count " + 
          "from list l where user_id = $1", [req.user.sub.split('|')[1]])
        return ['SUCCESS', res.rows];
      } finally {
        client.release()
      }
    })().catch(err => {
      console.log(err.stack);
      return [ 'ERROR', err.stack ];
    }))
});

router.post('/', checkJwt, async (req,res) => {
  res.send(await (async () => {
    const client = await pool.connect()
    try {
      const res = await client.query("insert into list (name, user_id, created_on) values (null, $1, now()) returning id, name, user_id, created_on",
      [req.user.sub.split('|')[1]]);
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
      const res = await client.query("update list set name = $1 where id = $2 and user_id = $3 returning id, name, user_id, created_on",
      [req.body.name, req.body.list_id, req.user.sub.split('|')[1]]);
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
        const res = await client.query("with deletedItems as (delete from item where list_id = $1 returning *) delete from list where id = $1 and user_id = $2 returning id, name", [req.params.id, req.user.sub.split('|')[1]]);
        return ['SUCCESS', res.rows[0]];
     } finally {
        client.release()
    }
    })().catch(err => {
      console.log(err.stack);
      return [ 'ERROR', err.stack ];
    }))
});

module.exports = router;
