import React from 'react';

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
    <div className="container">
      <h2>Number of wheels</h2>
      <div className="form-check">
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
      <div className="form-check">
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
      <button className="btn btn-secondary mr-2" onClick={prevStep}>Back</button>
      <button className="btn btn-primary" onClick={handleNext}>Next</button>
    </div>
  );
};

export default Question2;
