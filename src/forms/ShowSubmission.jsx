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

     {/* 
     needs to be fixed once form data passed as props
     <div className="object-display">
  <text>Current data stored in the object is:</text>
  <br />
  <text>{JSON.stringify(formData)}</text>
</div> */}
    </div>
  );
}
