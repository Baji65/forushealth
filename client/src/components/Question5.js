import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
    <div className="container">
      <h2>Select date range</h2>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        className="form-control"
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        className="form-control mt-3"
      />
      <button className="btn btn-secondary mr-2" onClick={prevStep}>Back</button>
      <button className="btn btn-primary" onClick={handleNext}>Submit</button>
    </div>
  );
};

export default Question5;
