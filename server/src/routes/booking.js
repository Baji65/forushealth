const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Vehicle = require('../models/Vehicle');


router.post('/book', async (req, res) => {
  const { vehicleModel, startDate, endDate } = req.body;

  try {
   
    const existingBooking = await Booking.findOne({
      vehicleModel: vehicleModel,
      $or: [
        { startDate: { $lte: startDate }, endDate: { $gte: startDate } },
        { startDate: { $lte: endDate }, endDate: { $gte: endDate } },
        { startDate: { $gte: startDate }, endDate: { $lte: endDate } }
      ]
    });

    if (existingBooking) {
      
      return res.status(409).json({ message: 'Booking conflict! This vehicle is already booked for the selected dates.' });
    }

    
    const newBooking = new Booking({
      vehicleModel: vehicleModel,
      startDate: startDate,
      endDate: endDate
    });

    
    await newBooking.save();

    
    res.status(201).json({ message: 'Booking successful!', booking: newBooking });
  } catch (error) {
  
    console.error('Error booking vehicle:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
