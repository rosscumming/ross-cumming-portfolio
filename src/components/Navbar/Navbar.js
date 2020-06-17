import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
  <nav className="nav-container">
    <ul className="nav-ul">
    <li className="nav-li"> <Link to="/"> Home </Link></li>
    <li className="nav-li"> <Link to="/about"> About </Link></li>
    <li className="nav-li"> <Link to="/projects"> Projects </Link></li>
    </ul>
  </nav>
)};

export default Navbar;
