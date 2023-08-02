import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Nav.css";

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
          src="C:\Users\jesuo\Git\Showtrove\showtrove-build\showtrove-build\src\showtrove-temp.png"
          alt=""
        />

        <img
          onClick={() => navigate("/profile")} 
          className="nav__avatar"
          src="C:\Users\jesuo\Git\Showtrove\showtrove-build\showtrove-build\src\profile pic.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
