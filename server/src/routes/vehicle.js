const express = require('express');
const Vehicle = require('../models/Vehicle');
const router = express.Router();




router.get('/types', async (req, res) => {
  const { wheels } = req.query;

 

  if (!wheels) {
    return res.status(400).json({ message: 'Number of wheels is required' });
  }

  try {
    const vehicleTypes = await Vehicle.distinct('type', { wheels: parseInt(wheels, 10) });
    res.json(vehicleTypes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get('/models', async (req, res) => {
  const { type } = req.query;

  if (!type) {
    return res.status(400).json({ message: 'Vehicle type is required' });
  }

  try {
    const models = await Vehicle.find({ type });
    res.json(models);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});





module.exports = router;
