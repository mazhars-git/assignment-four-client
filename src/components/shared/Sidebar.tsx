import { NavLink, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open gap-2">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col p-5 pt-10 bg-slate-300">
          {/* Page content here */}
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-70 p-4 space-y-1">
            {/* Sidebar content here */}
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <NavLink to="manage-products">Manage Products</NavLink>
            </li>
            <li>
              <NavLink to="manage-orders">Manage Orders</NavLink>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
