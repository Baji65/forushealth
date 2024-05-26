


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="card p-4" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="text-primary mb-4">Type of vehicle</h2>
        {vehicleTypes.map(type => (
          <div key={type} className="form-check mb-3">
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
        <div className="d-flex justify-content-between">
          <button className="btn btn-secondary" onClick={prevStep} style={{ borderRadius: '5px' }}>Back</button>
          <button className="btn btn-primary" onClick={handleNext} style={{ borderRadius: '5px' }}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Question3;



