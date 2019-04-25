'use strict';
module.exports = function(app) {
  // Routes
  // define the home page route
  app.get('/', function(req, res) {
    res.send('Servidor Levantado');
  });
  app.post('/api/item', (req, res, next)=>{
    console.log('Request URL:', req.originalUrl);
    next();
  }, (req, res, next)=>{
    console.log('Request Type:', req.method);
    next();
  }, (req, res)=>{
    res.json({
      status: true,
      id: req.params.id,
    });
  });
};
