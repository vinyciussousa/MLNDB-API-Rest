const express = require('express');
const router = express.Router();

const readingListController = require('../controllers/readingListController');

router.get('/users/:username/readinglists', readingListController.getAllReadingLists);
router.get('/users/:username/readinglists/:listId', readingListController.getReadingListById);
router.post('/users/:username/readinglists', readingListController.createReadingList);
router.put('/readingList/:readingListId/novel/:novelId', readingListController.insertLightNovelInsideReadingList);

module.exports = router;
