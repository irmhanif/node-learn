const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const aboutRoutes = require('./routes/about');
const errorHandler = require('./controllers/error')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(aboutRoutes);

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorHandler.get404);

app.listen(3000);
