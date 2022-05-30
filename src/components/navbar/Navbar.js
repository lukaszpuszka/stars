import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="../images/logostars.svg" alt="home"></img>
      </div>
      <div className="navbarul">
        <ul>
          <li>
            <NavLink className="" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/stars-glows-kit">Stars Glows Kit</NavLink>
          </li>
          <li>
            <NavLink to="/star-maker">Star Maker</NavLink>
          </li>
          <li>
            <NavLink to="/faq">FaQ</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
