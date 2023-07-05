const express = require('express');

const router = express.Router();


router.use('/add-product', (req, res, next) => {
    res.send(`<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>`)
});

router.post('/product', (req, res)=> {
    const method = req.method;
    console.log(req.body)
    res.send(req.body.title)
    res.redirect('/');
})

module.exports = router;