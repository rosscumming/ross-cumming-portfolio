import React from "react";
import "./Navbar.scss";
import { NavHashLink as NavLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <header>
      <nav className="nav-container">
        <div className="logo">
          <NavLink className="logo-text" exact to="/">
            rosscumming<span className="codes">.codes</span>
          </NavLink>
        </div>
        <ul className="nav-ul">
          <li className="nav-li">
            <NavLink smooth to="/#about" activeClassName="nav-active">
              About
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink smooth to="/#tech-stack" activeClassName="nav-active">
              Tech Stack
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink smooth to="/#projects" activeClassName="nav-active">
              Projects
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink smooth to="/#contact" activeClassName="nav-active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
