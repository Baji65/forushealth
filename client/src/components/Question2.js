


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Question2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, wheels: e.target.value });
  };

  const handleNext = () => {
    if (formData.wheels) {
      nextStep();
    } else {
      alert('Please select the number of wheels.');
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="card p-4" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="text-primary mb-4">Number of wheels</h2>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="radio"
            value="2"
            checked={formData.wheels === '2'}
            onChange={handleChange}
            id="wheels2"
          />
          <label className="form-check-label" htmlFor="wheels2">
            2
          </label>
        </div>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="radio"
            value="4"
            checked={formData.wheels === '4'}
            onChange={handleChange}
            id="wheels4"
          />
          <label className="form-check-label" htmlFor="wheels4">
            4
          </label>
        </div>
        <div className="d-flex justify-content-between">
          <button className="btn btn-secondary" onClick={prevStep} style={{ borderRadius: '5px' }}>Back</button>
          <button className="btn btn-primary" onClick={handleNext} style={{ borderRadius: '5px' }}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Question2;

