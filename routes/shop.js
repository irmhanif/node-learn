const express = require('express');


const productHandler = require('../controllers/products')
const router = express.Router();

router.get('/', productHandler.getProduct);

module.exports = router;
