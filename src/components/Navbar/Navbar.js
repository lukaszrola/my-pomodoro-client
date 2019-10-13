import React from "react";
import tomatoImage from "../../images/tomato.png";

const navbar = props => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-info mb-2">
      <a class="navbar-brand" href="/">
        <img class="logo" src={tomatoImage} height="40" /> My Pomodoro
      </a>
    </nav>
  );
};

export default navbar;
