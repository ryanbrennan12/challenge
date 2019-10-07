const path = require('path')
const express = require('express');
const router = express.Router();
const utils = require('../utils/index.js');

router.get('/all', (req, res) => {
  utils.getAll((error, response) => {
    res.status(200).json(response.data);
  })
})

module.exports = router;