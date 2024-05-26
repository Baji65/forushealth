



import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="card p-4" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="text-primary mb-4">What is your name?</h2>
        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              name="firstName"
              value={formData.firstName || ''}
              onChange={handleChange}
              className="form-control border-primary"
              placeholder="First Name"
              style={{ borderRadius: '5px' }}
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="lastName"
              value={formData.lastName || ''}
              onChange={handleChange}
              className="form-control border-primary"
              placeholder="Last Name"
              style={{ borderRadius: '5px' }}
            />
          </div>
        </div>
        <button className="btn btn-primary w-100" onClick={handleNext} style={{ borderRadius: '5px' }}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Question1;
