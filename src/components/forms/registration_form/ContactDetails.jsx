import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
export default function ContactDetails({ onSubmit, formData }) {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      telephone: formData.telephone ?? "",
      address: formData.address ?? "",
    },
  });

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
