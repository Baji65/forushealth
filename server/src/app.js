const express = require('express');
const mongoose = require('mongoose');
const vehicleRoutes = require('./routes/vehicle');
const bookingRoutes = require('./routes/booking');
const seed=require('../seed/seed');

require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(express.json());

app.use(cors());
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/bookings', bookingRoutes);

mongoose.connect(process.env.mongodb)
.then((response) => {
console.log("Connected to mongo DB successfully!");
})
.catch( err => {
    console.log("Connection to DB failed!", err);
});

module.exports = app;
