const express = require('express')
const router = express.Router();

// Get all shopping items
router.get('/', async (req,res) => {
  res.send('food food food')
});

module.exports = router;
