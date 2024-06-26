const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  vehicleModel: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
