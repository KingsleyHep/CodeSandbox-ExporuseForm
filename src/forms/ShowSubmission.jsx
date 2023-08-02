import "../styles.css";

export default function ShowSubmission() {
  //declare variables here
  //useCallback to fetch data from NameAndDob and ContactDetails
  const handleSubmit = (e) => {
    e.preventDefault();
    //send data to mock server
  };

  return (
    <div className="App">
      <text>Display stored details here</text>
      <form onSubmit={handleSubmit}>
        <button type="submit" onSubmit={handleSubmit}>
          All good!
        </button>
      </form>
    </div>
  );
}
