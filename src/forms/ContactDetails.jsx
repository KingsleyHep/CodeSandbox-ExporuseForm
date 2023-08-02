import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../styles.css";

export default function ContactDetails() {
  const [formData, setFormData] = useState(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: { telephone: "", address: "" },
  });

  const onSubmit = (data) => {
    // Send data to show submission useCallback or any other action
    console.log("contact details are ");
    console.log(data);
    //!setFormData updates the state of formData to use the data from the form
    setFormData(data);
  };
  //? errors ARE displayed on screen when required fields are not filled in
  console.log("errors", errors);
  return (
    <div className="App">
      <nav>
        <h1>ContactDetails</h1>
      </nav>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Telephone Number:
            <input
              type="text"
              name="telephone"
              {...register("telephone", {
                required: true,
                pattern: /^[0-9]+$/i,
              })}
            />
          </label>
          {errors.telephone && <p>This field is required</p>}
        </div>
        <div>
          <label>
            Address (UK Format):
            <input
              name="address"
              {...register("address", { required: true })}
            />
          </label>
          {errors.address && <p>This field is required</p>}
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
