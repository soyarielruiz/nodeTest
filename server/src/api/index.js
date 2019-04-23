let createError = require('http-errors');
const bodyParser = require('body-parser');
const express   = require('express');
let app         = express();
var routes      = require('./router');

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.listen(app.get('port'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app); //register the route