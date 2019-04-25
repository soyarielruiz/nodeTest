let createError = require('http-errors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const routes = require('./routes/router');

// all environments
app.set('port', process.env.PORT || 4005);
app.use(express.json());
app.listen(app.get('port'));
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());

// register the route
routes(app);
