import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="nav-container">
        <div className="logo">
          <NavLink className="logo-text" exact to="/">
            ross cumming
          </NavLink>
        </div>
        <ul className="nav-ul">
          <li className="nav-li">
            <NavLink exact to="/projects" activeClassName="nav-active">
              Projects
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink exact to="/contact" activeClassName="nav-active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
