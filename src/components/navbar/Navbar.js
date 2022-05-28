import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/stars-glows-kit">Stars Glows Kit</Link>
        </li>
        <li>
          <Link to="/star-maker">Star Maker</Link>
        </li>
        <li>
          <Link to="/faq">FaQ</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar
