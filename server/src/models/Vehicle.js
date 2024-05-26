const mongoose = require('mongoose');



const vehicleSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  wheels: {
    type: Number,
    required: true
  },
  
  available: {
    type: Boolean,
    required: true,
    default: true
  }
});


module.exports = mongoose.model('Vehicle', vehicleSchema);
