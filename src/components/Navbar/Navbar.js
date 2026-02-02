import React from "react";
import "./Navbar.scss";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <header>
      <nav className="nav-container">
        <span className="nav-wrap">
          <div className="logo">
            <NavHashLink className="logo-text" to="/">
              rosscumming<span className="codes">.codes</span>
            </NavHashLink>
          </div>
          <ul className="nav-ul">
            <li className="nav-li">
              <NavHashLink smooth to="/#about">
                About
              </NavHashLink>
            </li>
            <li className="nav-li">
              <NavHashLink smooth to="/#tech-stack">
                Tech Stack
              </NavHashLink>
            </li>
            <li className="nav-li">
              <NavHashLink smooth to="/#projects">
                Projects
              </NavHashLink>
            </li>
            <li className="nav-li">
              <NavHashLink smooth to="/#contact">
                Contact
              </NavHashLink>
            </li>
          </ul>
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
