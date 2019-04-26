const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const routes = require('./routes/router');
const port = process.env.PORT || 4005;

// all environments
app.set('port', port);
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());

// register the route
app.use('/', routes);

app.listen(app.get('port'), () => console.log(`Server listen in por ${port}`));
