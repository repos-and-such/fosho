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

// Get all shopping lists for loggd in user
router.get(`/:email`, async (req,res) => {
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
    })().catch(err => console.log(err.stack)))
});

module.exports = router;