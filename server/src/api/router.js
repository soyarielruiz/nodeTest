'use strict';
module.exports = function(app) {
    let Laberinto   = require('../models/Laberinto').models.Laberinto;

    // Routes
    // define the home page route
    app.get('/', function(req, res) {
        res.send('Servidor Levantado');
    });

    // define the about route
    app.post('/v.1/maze', function(req, res) {
        let laberinto   = new Laberinto(req.body);
        let resultado   = laberinto.validarAdyacencias();

        if ( resultado.success === false ) {
            res.status(422);
            res.json({"message":resultado.message});
        } else {
            res.status(200);
            res.json({});
        }
        res.end();
    });
};