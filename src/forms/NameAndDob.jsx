import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../styles.css";

export default function NameAndDob() {
  const [formData, setFormData] = useState(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: { title: "", forename: "", surname: "", dob: "" },
  });

  const onSubmit = (data) => {
    // Send data to show submission useCallback or any other action
    console.log("name and dob are: ");
    console.log(data);
    //!setFormData updates the state of formData to use the data from the form
    setFormData(data);
  };
  //?errors not displayed on screen when required fields are not filled in
  console.log("errors", errors);
  return (
    <div className="App">
      <nav>
        <h1>Name And DOB</h1>
      </nav>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Title:
            <select name="title" {...register("title", { required: true })}>
              <option value="">Select a title</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Ms">Ms</option>
              <option value="Dr">Dr</option>
              <option value="Rev">Rev</option>
              <option value="RH">RH</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Forename:
            <input
              type="text"
              name="forename"
              {...register("forename", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
          </label>
        </div>

        <div>
          <label>
            Surname:
            <input
              type="text"
              name="surname"
              {...register("surname", {
                required: true,
                pattern: /^[A-Za-z]+$/,
              })}
            />
          </label>
        </div>
        <div>
          <label>
            Date of Birth:
            <input type="date" {...register("dob", { required: true })} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {formData && (
        <div className="object-display">
          <text>Current data stored in the object is:</text>
          <br />
          <text>{JSON.stringify(formData)}</text>
        </div>
      )}
    </div>
  );
}
