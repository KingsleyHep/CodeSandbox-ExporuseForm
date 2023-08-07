import React from "react";
import "./styles.css";
import RegistrationForm from "./components/forms/registration_form";
import PageHeader from "./components/PageHeader";

export default function App() {

  return (
    <div className="App">
      <PageHeader>
        <h1>Title On Main App</h1>
      </PageHeader>
      <RegistrationForm />
    </div>
  );
}
