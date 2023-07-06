const express = require('express');

const router = express.Router();

const productHandler = require('../controllers/products')

// /admin/add-product => GET
router.get('/add-product', productHandler.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productHandler.postAddProduct);

module.exports = router;
