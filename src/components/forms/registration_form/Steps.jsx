import React from "react";
import NameAndDob from "./NameAndDob";
import ContactDetails from "./ContactDetails";
import ShowSubmission from "./ShowSubmission";

const Steps = ({ step, onSubmit, formData }) => {
  if (step === 2) {
    return <ContactDetails onSubmit={onSubmit} formData={formData} />;
  }

  if (step === 3) {
    return (
      <ShowSubmission
        onSubmit={onSubmit}
        formData={formData}
        title={formData.title}
        forename={formData.forename}
        surname={formData.surname}
        dob={formData.dob}
        telephone={formData.telephone}
        address={formData.address}
      />
    );
  }

  return <NameAndDob onSubmit={onSubmit} formData={formData} />;
};

export default Steps;
