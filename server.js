const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');  // Import user routes
const coffeeRoutes = require('./routes/coffeeRoutes');

// express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// Use user routes under the /api path
app.use('/api', userRoutes);
app.use('/api', coffeeRoutes);

// database connection
mongoose.connect("mongodb+srv://jakobcamposjc:w1mfBvnU5bEhDPRR@coffeedb.hbhnxga.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));

// default route
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

// server listener
app.listen(3000, () => console.log('Server running on port 3000'));
