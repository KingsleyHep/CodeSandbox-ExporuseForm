import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactDetails({ telephone, address }) {
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
    setFormData(data);
    //!setFormData updates the state of formData to use the data from the form
  };

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
