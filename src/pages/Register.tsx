import { NavLink } from "react-router-dom";
import signupImage from "../assets/images/signup.png";
const Signup = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <h1 className="text-5xl font-bold text-center pt-5 mb-5 text-sky-500">
        Register now!
      </h1>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left space-x-5">
            <img src={signupImage} alt="Login Image" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <p className="label-text-alt pt-1">
                    Already registered?{" "}
                    <NavLink
                      to="/login"
                      className="link-hover text-sky-500 font-bold"
                    >
                      Login
                    </NavLink>{" "}
                    here!
                  </p>
                </label>
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-info uppercase text-white">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
