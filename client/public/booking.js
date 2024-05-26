const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Vehicle = require('../models/Vehicle');

// Submit API endpoint for booking a vehicle
router.post('/book', async (req, res) => {
  const { vehicleModel, startDate, endDate } = req.body;



try {
    // Create a new instance of Booking model with the data from the request body
    const newBooking = new Booking({
      vehicleModel: vehicleModel,
      startDate: startDate,
      endDate: endDate
    });

    // Save the new booking to the database
    await newBooking.save();

    
    // Return success response
    res.status(201).json({ message: 'Booking successful!', booking: newBooking });
  } catch (error) {
    // Handle errors
    console.error('Error booking vehicle:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;


