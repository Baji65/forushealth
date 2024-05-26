const mongoose = require('mongoose');
const Vehicle = require('../src/models/Vehicle');
require('dotenv').config();

const seedData = async () => {
  

  const vehicles = [
    { type: 'hatchback', model: 'Hatchback Model 1', wheels: 4 },
    { type: 'hatchback', model: 'Hatchback Model 2', wheels: 4 },
    { type: 'suv', model: 'SUV Model 1', wheels: 4 },
    { type: 'suv', model: 'SUV Model 2', wheels: 4 },
    { type: 'sedan', model: 'Sedan Model 1', wheels: 4 },
    { type: 'sedan', model: 'Sedan Model 2', wheels: 4 },
    { type: 'cruiser', model: 'Cruiser Bike Model 1', wheels: 2 },
    { type: 'sports', model: 'Sports Bike Model 1', wheels: 2 }
  ];

  await Vehicle.deleteMany({});
  await Vehicle.insertMany(vehicles);

  console.log('Database seeded!');
  
};

seedData().catch(err => {
  console.error('Error seeding database:', err);
  
});



