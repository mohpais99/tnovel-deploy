const express = require('express');
const router = express.Router();
const genre = require('./genre-router');
const novel = require('./novel-router');

router.get('/', function(req, res, next) {
    res.json({'test': 'yeah'})
});

router.use('/genre', genre)
router.use('/novel', novel)

module.exports = router;