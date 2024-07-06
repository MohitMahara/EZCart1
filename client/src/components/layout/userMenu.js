import React from "react";
import { NavLink, Link } from "react-router-dom";

const UserMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <Link to={"/dashboard/user"} className="nav-link"><h4 className="pb-3">Dashboard</h4></Link>

          <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action" aria-current="true">
            Profile
          </NavLink>

          <NavLink to="/dashboard/user/orders" className="list-group-item list-group-item-action">
            Orders
          </NavLink>

        </div>
      </div>
    </>
  );
};

export default UserMenu;
