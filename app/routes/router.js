'use strict';
const express = require('express');
const route = express.Router();
const validateItem = require('../modules/itemValidator');

// Routes
route.post('/api/item', async (req, res) => {
  try {
    const item = await validateItem(req.body);
    res.json({id: item.id, name: item.name, keywords: item.keywords });
  } catch (error) {
    res.status(400).json({error: true, message: 'Invalid JSON' });
  }
});

module.exports = route;
