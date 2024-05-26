import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div className="container">
      <h2>Specific Model</h2>
      {vehicleModels.map(model => (
        <div key={model._id} className="form-check">
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
      <button className="btn btn-secondary mr-2" onClick={prevStep}>Back</button>
      <button className="btn btn-primary" onClick={handleNext}>Next</button>
    </div>
  );
};

export default Question4;
