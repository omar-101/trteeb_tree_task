const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');


router.get('/',  [foodController.getMany]);

router.get('/:id',  [foodController.getOne]);

router.post('/',  [foodController.insertOne]);

module.exports = router;