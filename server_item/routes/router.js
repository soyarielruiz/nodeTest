'use strict';
module.exports = function(app) {
  // Routes
  // define the home page route
  app.get('/', function(req, res) {
    res.send('Servidor Levantado');
  });
};
