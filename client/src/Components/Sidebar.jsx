import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Dashboard</h2>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link sidebar-link" : "sidebar-link")}
            aria-current={({ isActive }) => (isActive ? "page" : undefined)}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/productTable"
            className={({ isActive }) => (isActive ? "active-link sidebar-link" : "sidebar-link")}
            aria-current={({ isActive }) => (isActive ? "page" : undefined)}
          >
            Products
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
