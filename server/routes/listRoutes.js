const express = require('express');
const router = express.Router();
const listController = require('../controllers/listController')

router.get('/getLists', listController.getLists);
router.post('/createList', listController.createList);
router.get('/search', listController.search)
router.get('/getListVideos/:listId', listController.getListVideos)

module.exports = router;