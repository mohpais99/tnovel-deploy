const express = require('express');
const router = express.Router();
const novel = require('./novel-router');
const genre = require('./genre-router');
const chapter = require('./chapter-router');

router.get('/', function(req, res, next) {
    res.json({'test': 'yeah'})
});

router.use('/novel', novel)
router.use('/chapter', chapter)
router.use('/genre', genre)

module.exports = router;