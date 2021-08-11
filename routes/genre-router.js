const express = require('express');
const router = express.Router();

const controller = require('../controllers/genre-controller')

router.get('/', controller.allGenre);
// router.post('/create', controller.createGenre);

module.exports = router;
