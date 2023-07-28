const express = require('express');
const lightNovelController = require('../controllers/lightNovelController');

const router = express.Router();

router.get('/lightnovels', lightNovelController.getAllLightNovels);
router.get('/lightnovels/:id', lightNovelController.getLightNovelById);
router.post('/lightnovels', lightNovelController.createLightNovel);
router.put('/lightnovels/:id', lightNovelController.updateLightNovel);
router.delete('/lightnovels/:id', lightNovelController.deleteLightNovel);

module.exports = router;
