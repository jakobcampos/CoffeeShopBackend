
const mongoose = require('mongoose');

// Define the schema for the Coffee model
const coffeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String
    }
});

// Create and export the Coffee model
module.exports = mongoose.model('Coffee', coffeeSchema);
