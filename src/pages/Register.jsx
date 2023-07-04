import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const navigateToCalendar = () => {
    navigate("/calendar");
  };
  return (
    <>
      <div className="row">
        <div className="mx-auto col-10 col-md-8 col-lg-6">
          <h1>Registration</h1>
          <form className="">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We will never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
            <div className="mb-3">
              <label htmlFor="retype-password" className="form-label">
                Re-Type Password
              </label>
              <input
                type="password"
                className="form-control"
                id="retype-password"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={navigateToCalendar}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
