import React from "react";

//! wasted time with NeDB
//todo - create write out to text file locally

//todo - create test output on hardrive - then separate into storage component

//todo - create a new database
//todo - fetch data from NameAndDob and ContactDetails stored in database
//todo - display data from database in another component
export default function ShowSubmission({
  title,
  forename,
  surname,
  dob,
  telephone,
  address,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Output to json file
  };

  return (
    <div className="App">
      <text>Please confirm the following</text>
      <form onSubmit={handleSubmit}>
        <div>Your title is: {title} </div>
        <div>Your forename is: {forename}</div>
        <div>Your surname is: {surname} </div>
        <div>Your date of birth is: {dob} </div>
        <div>Your telephone number is: {telephone} </div>
        <div>Your address is: {address} </div>
        <button type="submit" onSubmit={handleSubmit}>
          All good!
        </button>
      </form>
    </div>
  );
}
