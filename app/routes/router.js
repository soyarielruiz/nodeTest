'use strict';
const express = require('express');
const route = express.Router();
const mime = require('mime');

const validateItem = require('../modules/itemValidator');
const contentFile = require('../modules/contentFile');
var blogController = require('../controllers/blogController');


// Item
route.post('/api/item', async (req, res) => {
  try {
    const item = await validateItem(req.body);
    res.json({id: item.id, name: item.name, keywords: item.keywords});
  } catch (error) {
    res.status(400).json({error: true, message: 'Invalid JSON'});
  }
  res.end();
});

// File
route.get('/api/file/:filename', async (req, res) => {
  try {
    const filename = req.params.filename;
    const type = mime.getType(filename);
    const stream = await contentFile(filename);
    res.contentType(type);
    stream.pipe(res);
  } catch (error) {
    if (error.code === 'ENOENT') {
      res.status(404).json({error: 'Archivo NO Encontrado'});
    } else {
      res.status(400).json({error});
    }
  }
});

// Blog
route.get('/api/blog/post/:id', async (req, res) => {
  try {
    blogController.get;
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});

route.post('/api/blog/post', async (req, res) => {
  try {
    blogController.add;
  } catch (error) {
    res.status(400).json({error: true, message: error.message});
  }
});

module.exports = route;
