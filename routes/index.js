const express = require('express');
const router = express.Router();
const genre = require('./genre-router');

router.get('/', function(req, res, next) {
    res.json({'test': 'yeah'})
});

router.use('/genre', genre)

module.exports = router;