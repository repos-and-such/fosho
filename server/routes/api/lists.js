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

// Get all shopping lists for loggd in user
router.get(`/:email`, checkJwt, async (req,res) => {
  console.log('server received call');
  res.send(
    await (async () => {
      const client = await pool.connect()
      try {
        const res = await client.query("select * from list where user_email = $1", [req.params.email])
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
    const client = await pool.connect()
    try {
      const res = await client.query("insert into list (name, user_email, created_on) values (null, $1, NOW()) returning id, name, user_email, created_on",
      [req.body.email]);
      console.log(res.rows);
      return res.rows
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
      const res = await client.query("update list set name = $1 where id = $2 returning id, name, user_email, created_on",
      [req.body.name, req.body.list_id]);
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
