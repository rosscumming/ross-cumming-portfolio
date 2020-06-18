import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
const Navbar = () => {
  return (
    <>
      <nav className="nav-container">
        <div className="logo">
          <LaptopMacIcon style={{ fontSize: 13 }} />
          <NavLink className="logo-text" exact to="/">
            ross cumming
          </NavLink>
        </div>
        <ul className="nav-ul">
          <li className="nav-li">
            <NavLink exact to="/" activeClassName="nav-active">
              Home
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink exact to="/about" activeClassName="nav-active">
              About
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink exact to="/projects" activeClassName="nav-active">
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
