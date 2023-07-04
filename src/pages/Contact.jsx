const Contact = () => {
  const phoneNum = "555-123-4567";
  const email = "drsmith@example.com";
  const address =
    "Dr. John Smith Medical Practice 123 Main Street, Staten Island, New York, 10309";
  return (
    <div>
      <h1>Contact Dr. John Smith:</h1>
      <p>
        If you are seeking a knowledgeable and compassionate physician who
        values patient-centered care, Dr. John Smith is here to help. To
        schedule an appointment or inquire about his services, please contact
        his office at:
      </p>
      <p>Location: {address}</p>
      <p>Phone Number: {phoneNum}</p>
      <p>Email: {email}</p>
    </div>
  );
};
export default Contact;
