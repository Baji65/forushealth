import React, { useState } from 'react';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import Question5 from './Question5';
import axios from 'axios';

const FormNavigation = () => {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const resetForm = () => {
    setFormData({});
    setStep(1);
  };

  const submitForm = async () => {
    try {
      console.log('Submitting form data:', formData);
      await axios.post('http://localhost:5000/api/bookings/book', formData);
      alert('Booking submitted successfully!');
      resetForm();  
    } catch (error) {
      console.error('Error submitting booking:', error.response?.data?.message || error.message);
      alert('Vehicle already booked on the same dates: ' + (error.response?.data?.message || error.message));
    }
  };

  switch (step) {
    case 1:
      return <Question1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
    case 2:
      return <Question2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <Question3 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
    case 4:
      return <Question4 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
    case 5:
      return <Question5 formData={formData} setFormData={setFormData} prevStep={prevStep} submitForm={submitForm} />;
    default:
      return <div>Invalid step</div>;
  }
};

export default FormNavigation;
