import React from "react";
import { useState } from "react";
import Steps from "./Steps";

// todo change when final splash page added
const maxSteps = 3;

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    if (step === maxSteps) {
      // Send to API
      alert("Form submitted!");
      return;
    }

    updateFormData(data);
    nextStep();
    return;
  };

  const updateFormData = (newFormData) => {
    setFormData((prevFormData) => ({ ...prevFormData, ...newFormData }));
  };

  function nextStep() {
    handleNext();
  }

  function handleNext() {
    setStep((prevStep) => {
      const nextStep = prevStep + 1;
      if (nextStep > maxSteps) {
        return prevStep;
      }

      return nextStep;
    });
  }
  function handleBack() {
    setStep((prevStep) => {
      const nextStep = prevStep - 1;
      if (nextStep < 1) {
        return prevStep;
      }

      return nextStep;
    });
  }

  return (
    <div>
      <div style={{ backgroundColor: "#491224", color: "white" }}>
        <h3>Registration Form</h3>
        <div>Current step is: {step}</div>
      </div>
      <Steps
        step={step}
        onSubmit={handleFormSubmit}
        formData={formData}
        onChangeFormData={updateFormData}
      />
      <div className="navigation-buttons">
        <button type="submit" onClick={handleBack}>
          Back
        </button>
        <button type="submit" onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
