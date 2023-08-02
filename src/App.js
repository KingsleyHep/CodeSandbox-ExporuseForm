import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import "./styles.css";
import NameAndDob from "./forms/NameAndDob";
import ContactDetails from "./forms/ContactDetails";
import ShowSubmission from "./forms/ShowSubmission";

export default function App() {
  const [step, setStep] = useState(2);
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
  };
  //needs if/catch statements
  function handleNext() {
    setStep(step + 1);
  }
  function handleBack() {
    setStep(step - 1);
  }
  console.log(formData);
  const renderStep = () => {
    switch (step) {
      case 1:
        return <NameAndDob onSubmit={handleFormSubmit} />
        ;
       case 2:
        return <ContactDetails onSubmit={handleFormSubmit} />;
       case 3:
        return <ShowSubmission formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <nav>
        <h1>Title On Main App</h1>
        <text style={{ color: "white" }}>Current step is: {step}</text>
      </nav>
      {renderStep()}
      <div className="navigation-buttons">
        <button type="submit" onClick={handleBack}>
          Back
        </button>
        <button type="submit" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
