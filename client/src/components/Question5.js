


import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Question5 = ({ formData, setFormData, prevStep, submitForm }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleNext = () => {
    if (startDate && endDate) {
      setFormData({ ...formData, startDate, endDate });
      submitForm();
    } else {
      alert('Please select a date range.');
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="card p-4" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="text-primary mb-4">Select date range</h2>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          className="form-control mb-3"
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          className="form-control mb-3"
        />
        <div className="d-flex justify-content-between">
          <button className="btn btn-secondary" onClick={prevStep} style={{ borderRadius: '5px' }}>Back</button>
          <button className="btn btn-primary" onClick={handleNext} style={{ borderRadius: '5px' }}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Question5;




