import NameAndDob from "./NameAndDob";
import ContactDetails from "./ContactDetails";

export default function ShowSubmission({
  title,
  forename,
  surname,
  dob,
  telephone,
  address,
}) {
  //declare variables here
  //useCallback to fetch data from NameAndDob and ContactDetails
  const handleSubmit = (e) => {
    e.preventDefault();
    //send data to mock server
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
