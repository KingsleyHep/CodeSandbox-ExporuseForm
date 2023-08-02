import React, { useState } from "react";
import "../styles.css";

export default function ContactDetails() {
  const [formData, setFormData] = useState({
    telephone: "",
    address: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //send data to show submission
    console.log("The contact details are: ");
    console.log(formData);
  };

  return (
    <div className="App">
      <nav>
        <h1>ContactDetails</h1>
      </nav>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Telephone Number:
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Address (UK Format):
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
