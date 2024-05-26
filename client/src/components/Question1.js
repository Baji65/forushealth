import React from 'react';

const Question1 = ({ formData, setFormData, nextStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (formData.firstName && formData.lastName) {
      nextStep();
    } else {
      alert('Please fill in both first and last name.');
    }
  };

  return (
    <div className="container">
      <h2>What is your name?</h2>
      <div className="row">
        <div className="col">
          <input
            type="text"
            name="firstName"
            value={formData.firstName || ''}
            onChange={handleChange}
            className="form-control"
            placeholder="First Name"
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="lastName"
            value={formData.lastName || ''}
            onChange={handleChange}
            className="form-control"
            placeholder="Last Name"
          />
        </div>
      </div>
      <button className="btn btn-primary mt-3" onClick={handleNext}>Next</button>
    </div>
  );
};

export default Question1;
