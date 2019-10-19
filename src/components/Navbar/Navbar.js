import React from "react";
import tomatoImage from "../../images/tomato.png";

const navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-info mb-2">
      <a className="navbar-brand" href="/">
        <img className="logo" src={tomatoImage} height="40" /> My Pomodoro
      </a>
    </nav>
  );
};

export default navbar;
