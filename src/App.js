import "./styles.css";
import RegistrationForm from "./components/forms/registration_form";
import PageHader from "./components/PageHeader";

export default function App() {

  return (
    <div className="App">
      <PageHader>
        <h1>Title On Main App</h1>
      </PageHader>
      <RegistrationForm />
    </div>
  );
}
