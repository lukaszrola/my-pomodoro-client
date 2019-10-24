import React from "react";

const alert = props => {
  return (
    <div class={"alert " + props.alertType} role="alert">
      <h3>{props.children}</h3>
    </div>
  );
};

export default alert;
