import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-upside">
        <p> Contact Us </p>
      </div>
      <div className="nav-downside">
        <div className="nav-downside-main">
          <div className="nav-downside-main-logo">
            <Link to="/home">
              <img src="meta.png" alt="logo" />
              <h2> redstand </h2>
            </Link>
          </div>
          <div className="nav-downside-main-menu">
            <ul>
              <li>
                <Link to='/post'>post a job </Link>
              </li>
              <li>
                <Link to='/jobs'>view jobs </Link>
              </li>
              <li>
                <Link>for talent </Link>
              </li>
              <li>
                <Link>for helpline </Link>
              </li>
              <li>
                <Link>about us </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-downside-btn">
          <Link to="/register">
            <button> Login/Register </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
