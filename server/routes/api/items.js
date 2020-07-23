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
        const res = await client.query("select * from item where list_id = $1 and user_id = $2", [req.params.id, req.user.sub.split('|')[1]])
        return res.rows
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
    console.log(req.header('Authorization'));
    const client = await pool.connect()
    try {
      const res = await client.query("insert into item (name, list_id, user_id, bought, created_on) values ($1, $2, $3, false, NOW()) returning id, name, list_id, category, created_on",
      [req.body.name, req.body.list_id, req.user.sub.split('|')[1]]);
      return res.rows
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
        const res = await client.query("delete from item where id = $1 and user_id = $2 returning id, name", [req.params.id, req.user.sub.split('|')[1]]);
        return res.rows
     } finally {
        client.release()
    }
    })().catch(err => {
      console.log(err.stack);
      return [ 'ERROR', err.stack ];
    }))
});

module.exports = router;
