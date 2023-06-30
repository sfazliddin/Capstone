import { Link } from "react-router-dom";

const NewPatient = () => {
  return (
    <>
      <div>New Patient</div>
      To Book an Appointment please call us at [Phone Number] or{" "}
      <Link to={"/register"}>Make an account</Link>
    </>
  );
};

export default NewPatient;
