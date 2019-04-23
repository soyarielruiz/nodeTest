var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var LectorJson = require('../src/utils/lectorJson').utils.LectorJson;
var Laberinto = require('../src/models/Laberinto').models.Laberinto;

describe("Laberinto", function () {

    before(function () {
        // runs before all tests in this block
    });

    after(function () {
        // runs after all tests in this block
    });

    beforeEach(function () {
        // runs before each test in this block
    });

    afterEach(function () {
        // runs after each test in this block
    });

    describe('Looking Walls', function () {

        it('should validate wall.....', function () {
            let data = {
                "cells": [
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 1, 1, 1, 1, 0],
                    [0, 1, 2, 1, 2, 1, 0],
                    [0, 1, 1, 1, 1, 1, 0],
                    [0, 1, 1, 1, 1, 1, 0],
                    [0, 1, 1, 1, 1, 1, 0],
                    [0, 0, 0, 0, 0, 0, 0]
                ],
                "impassableTypes": [
                    0,
                    2
                ]
            };

            let laberinto = new Laberinto(data);
            let exist_wall = laberinto.validarPared();

            assert.equal(exist_wall, true);
        });
    });

    describe('Looking Route', function () {

        it('should validate route.....', function () {
            let data = {
                "cells": [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 1, 1, 2, 1, 1, 1, 0],
                    [0, 1, 2, 1, 1, 1, 2, 1, 0],
                    [0, 1, 2, 1, 2, 1, 2, 1, 0],
                    [0, 1, 1, 1, 1, 1, 1, 1, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0]
                ],
                "impassableTypes": [
                    0,
                    2
                ]
            };
            let laberinto = new Laberinto(data);
            let exist_route = laberinto.validarAdyacencias();
            assert.equal(exist_route.success, true);
        });

        it('should validate all paths...', function () {
            let data = {"cells" : [
                    [0,0,0,0,0,0,0,0,0],
                    [0,1,1,1,2,1,1,1,0],
                    [0,1,2,1,2,1,2,1,0],
                    [0,1,2,1,1,1,2,1,0],
                    [0,1,2,1,2,1,2,1,0],
                    [0,1,1,1,2,1,1,1,0],
                    [0,0,0,0,0,0,0,0,0]
                ],
                "impassableTypes": [
                    0,
                    2
                ]};

            let laberinto   = new Laberinto(data);
            let exist_route = laberinto.validarAdyacencias();
            assert.equal(exist_route.success, true);
        });
    });

    describe('Looking Invalid Route', function () {

        it('should cant return route.....', function () {
                let data = {"cells" : [
                        [0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0],
                        [0,1,1,1,1,1,0],
                        [0,1,2,2,2,0,0],
                        [0,1,1,1,1,1,0],
                        [0,0,0,0,0,0,0]
                    ],
                    "impassableTypes": [
                        0,
                        2
                    ]};

                let laberinto   = new Laberinto(data);
                let exist_route = laberinto.validarAdyacencias();
                assert.equal(exist_route.success, false);
        });

        it('should cant return route for big square..', function () {
                let data = {"cells" : [
                        [0,0,0,0,0],
                        [0,1,1,1,0],
                        [0,1,1,1,0],
                        [0,0,0,0,0]
                    ],
                    "impassableTypes": [
                        0,
                        2
                    ]};
                //let data_array = JSON.stringify(data)
                let laberinto   = new Laberinto(data);
                let exist_route = laberinto.validarAdyacencias();
                assert.equal(exist_route.success, false);
        });

        it('should cant return path with adjacent..', function () {
            let data = {"cells" : [
                    [0,0,0,0,0],
                    [0,1,0,1,0],
                    [0,1,1,1,0],
                    [0,0,0,0,0]
                ],
                "impassableTypes": [
                    0,
                    2
                ]};

            let laberinto   = new Laberinto(data);
            let exist_route = laberinto.validarAdyacencias();
            assert.equal(exist_route.success, false);
        });

        it('should cant return path with only a path..', function () {
            let data = {"cells" : [
                    [0,0,0,0,0],
                    [0,1,1,1,0],
                    [0,0,0,0,0],
                    [0,0,0,0,0]
                ],
                "impassableTypes": [
                    0,
                    2
                ]};

            let laberinto   = new Laberinto(data);
            let exist_route = laberinto.validarAdyacencias();
            assert.equal(exist_route.success, false);
        });

        it('should cant return path by only one cell..', function () {
            let data = {"cells" : [
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,1,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0]
                ],
                "impassableTypes": [
                    0,
                    2
                ]};

            let laberinto   = new Laberinto(data);
            let exist_route = laberinto.validarAdyacencias();
            assert.equal(exist_route.success, false);
        });

        it('should cant return path cause no have more than 2 adjacent cells...', function () {
            let data = {"cells" : [
                    [0,0,0,0,0,0,0],
                    [0,1,1,0,0,0,0],
                    [0,0,1,1,0,0,0],
                    [0,0,0,1,1,0,0],
                    [0,0,0,0,0,0,0]
                ],
                "impassableTypes": [
                    0,
                    2
                ]};

            let laberinto   = new Laberinto(data);
            let exist_route = laberinto.validarAdyacencias();
            assert.equal(exist_route.success, false);
        });

        it('should cant return path cause not have path between all the cells...', function () {
            let data = {"cells" : [
                    [0,0,0,0,2,0,0,0,0],
                    [0,1,1,1,2,1,1,1,0],
                    [0,1,2,1,2,1,2,1,0],
                    [0,1,2,1,2,1,2,1,0],
                    [0,1,2,1,2,1,2,1,0],
                    [0,1,1,1,2,1,1,1,0],
                    [0,0,0,0,0,0,0,0,0]
                ],
                "impassableTypes": [
                    0,
                    2
                ]};

            let laberinto   = new Laberinto(data);
            let exist_route = laberinto.validarAdyacencias();
            assert.equal(exist_route.success, false);
        });
    });
});