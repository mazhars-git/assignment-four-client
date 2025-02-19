import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 space-x-2">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/allProducts">All Products</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/myCart">My Cart</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-1">
          <NavLink
            to="/login"
            className="btn btn-success rounded-full font-semibold text-gray-300"
          >
            Login
          </NavLink>
          <a className="btn btn-error rounded-full font-semibold text-gray-500">
            Logout
          </a>
        </div>
      </div>
      ;
    </div>
  );
};

export default Navbar;
