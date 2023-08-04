import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export default function NameAndDob({ onSubmit, formData }) {
  const [toggleShow, setToggleShow] = useState(false);
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      title: formData.title ?? "",
      forename: formData.forename ?? "",
      surname: formData.surname ?? "",
      dob: formData.dob ?? "",
    },
  });

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
          {errors.title && <p>This field is required</p>}
        </div>
        <div>
          <label>
            Forename:
            <input
              type="text"
              name="forename"
              {...register("forename", {
                required: true,
                pattern: /^[a-z]+$/i,
              })}
            />
          </label>
          {errors.forename && <p>This field is required</p>}
        </div>

        <div>
          <label>
            Surname:
            <input
              type="text"
              name="surname"
              {...register("surname", {
                required: true,
                pattern: /^[a-z]+$/i,
              })}
            />
          </label>
          {errors.surname && <p>This field is required</p>}
        </div>
        <div>
          <label>
            Date of Birth:
            <input type="date" {...register("dob", { required: true })} />
          </label>
          {errors.dob && <p>This field is required</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
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
