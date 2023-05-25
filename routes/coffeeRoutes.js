const express = require('express');
const router = express.Router();

// Import the Coffee model from the models folder
const Coffee = require('../models/coffee');

// GET route to get all coffees
router.get('/coffees', async (req, res) => {
    const coffees = await Coffee.find({});
    res.json(coffees);
});

// POST route to add a new coffee
router.post('/coffees', async (req, res) => {
    const newCoffee = new Coffee(req.body);
    const savedCoffee = await newCoffee.save();
    res.json(savedCoffee);
});

module.exports = router;
