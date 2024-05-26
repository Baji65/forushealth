import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Question3 = ({ formData, setFormData, nextStep, prevStep }) => {
  const [vehicleTypes, setVehicleTypes] = useState([]);

  useEffect(() => {
    const fetchVehicleTypes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/vehicles/types', {
          params: { wheels: formData.wheels }
        });
        setVehicleTypes(response.data);
      } catch (error) {
        console.error('Error fetching vehicle types:', error);
      }
    };

    if (formData.wheels) {
      fetchVehicleTypes();
    }
  }, [formData.wheels]);

  const handleChange = (e) => {
    setFormData({ ...formData, vehicleType: e.target.value });
  };

  const handleNext = () => {
    if (formData.vehicleType) {
      nextStep();
    } else {
      alert('Please select a vehicle type.');
    }
  };

  return (
    <div className="container">
      <h2>Type of vehicle</h2>
      {vehicleTypes.map(type => (
        <div key={type} className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value={type}
            checked={formData.vehicleType === type}
            onChange={handleChange}
            id={`vehicleType_${type}`}
          />
          <label className="form-check-label" htmlFor={`vehicleType_${type}`}>
            {type}
          </label>
        </div>
      ))}
      <button className="btn btn-secondary mr-2" onClick={prevStep}>Back</button>
      <button className="btn btn-primary" onClick={handleNext}>Next</button>
    </div>
  );
};

export default Question3;
