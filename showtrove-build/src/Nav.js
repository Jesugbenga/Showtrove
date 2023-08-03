import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Nav.css";
import pic from "./profile pic.png";
import logo from "./showtrove-temp.png"

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate(); // Use the useNavigate hook

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => navigate("/")}
          className="nav__logo"
          src={logo}
          alt=""
        />

        <img
          onClick={() => navigate("/profile")} 
          className="nav__avatar"
          src={pic}
          alt=""
        />

        <div class="input-wrapper">
          <button class="icon"> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="25px" width="25px">
              <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#fff" d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"></path>
              <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#fff" d="M22 22L20 20"></path>
            </svg>
          </button>
          <input placeholder="search.." class="input" name="text" type="text" />
        </div>
        
      </div>
    </div>
  );
}

export default Nav;
