import { NavLink } from "react-router-dom";
import loginImage from "../assets/images/login.png";
const Login = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <h1 className="text-5xl font-bold text-center pt-5 mb-3 text-sky-500">
        Login now!
      </h1>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left space-x-5">
            <img src={loginImage} alt="Login Image" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
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
                    Not registered yet?{" "}
                    <NavLink
                      to="/signup"
                      className="link-hover text-sky-500 font-bold"
                    >
                      Signup
                    </NavLink>{" "}
                    now!
                  </p>
                </label>
              </div>
              <div className="form-control mt-5">
                <button className="btn btn-info uppercase text-white">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
