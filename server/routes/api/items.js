const express = require('express')
const { Pool } = require('pg')
require('dotenv').config()

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

router.get('/:listId', async (req,res) => {
  res.send(
    await (async () => {
      const client = await pool.connect()
      try {
        const res = await client.query("select * from item where list_id = $1", [req.params.listId])
        return res.rows
      } finally {
        client.release()
      }
    })().catch(err => {
      console.log(err.stack);
      return err.stack;
    }))
});

router.post('/', async (req,res) => {
  console.log(req.body)
  res.send(await (async () => {
    const client = await pool.connect()
    try {
      const res = await client.query("insert into item (name, list_id, created_on) values ($1, $2, NOW()) returning id, name, list_id, category, created_on",
      [req.body.name, req.body.list_id]);
      console.log(res.rows);
      return res.rows
    } finally {
      client.release()
    }
  })().catch(err => {
    console.log(err.stack);
    return err.stack;
  }))
});

router.delete('/:id', async (req, res) => {
  res.send(await (async () => {
    const client = await pool.connect()
    try {
        const res = await client.query(`delete from item where id = ${req.params.id} returning id, name;`);
        return res.rows
     } finally {
        client.release()
    }
    })().catch(err => {
      console.log(err.stack);
      return err.stack;
    }))
});

module.exports = router;
