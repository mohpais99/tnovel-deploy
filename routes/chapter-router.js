const express = require('express');
const router = express.Router();

const controller = require('../controllers/chapter-controller')

router.put('/:id', controller.getChapterById);
router.put('/get/:slug', controller.getChapterBySlug);
router.put('/read/:slug', controller.viewsChapterBySlug);
// router.put('/edit/:slug', controller.getChapterBySlug);
router.put('/update/:slug', controller.updateChapterBySlug);
router.post('/create', controller.createChapter);
router.delete('/delete/:id', controller.delChapterById);
router.put('/publish/:id', controller.publishChapterById);

module.exports = router;
