

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Question4 = ({ formData, setFormData, nextStep, prevStep }) => {
  const [vehicleModels, setVehicleModels] = useState([]);

  useEffect(() => {
    const fetchVehicleModels = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/vehicles/models?type=${formData.vehicleType}`);
        setVehicleModels(response.data);
      } catch (error) {
        console.error('Error fetching vehicle models:', error);
      }
    };

    if (formData.vehicleType) {
      fetchVehicleModels();
    }
  }, [formData.vehicleType]);

  const handleChange = (e) => {
    setFormData({ ...formData, vehicleModel: e.target.value });
  };

  const handleNext = () => {
    if (formData.vehicleModel) {
      nextStep();
    } else {
      alert('Please select a vehicle model.');
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="card p-4" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="text-primary mb-4">Specific Model</h2>
        {vehicleModels.map(model => (
          <div key={model._id} className="form-check mb-3">
            <input
              className="form-check-input"
              type="radio"
              value={model.model}
              checked={formData.vehicleModel === model.model}
              onChange={handleChange}
              id={`vehicleModel_${model._id}`}
            />
            <label className="form-check-label" htmlFor={`vehicleModel_${model._id}`}>
              {model.model}
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

export default Question4;

