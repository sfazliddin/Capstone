const Contact = () => {
  const phoneNum = "123-456-7890";
  const email = "doctorSmith@doctorClinic.com";
  const address = "375, Seguine Avenue, Staten Island, New York, 10309";
  return (
    <div>
      <h1>Contact Information</h1>
      <p>Phone Number: {phoneNum}</p>
      <p>Email: {email}</p>
      <p>Location: {address}</p>
    </div>
  );
};
export default Contact;
