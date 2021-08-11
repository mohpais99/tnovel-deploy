const express = require('express');
const router = express.Router();

const controller = require('../controllers/novel-controller')

router.get('/', controller.listNovel);
router.post('/create', controller.createNovel);
router.put('/:slug', controller.getNovelBySlug);
// router.put('/get-all/:slug', controller.getNovelAndChapterBySlug);
// router.put('/update/:slug', controller.updateNovelBySlug);

module.exports = router;