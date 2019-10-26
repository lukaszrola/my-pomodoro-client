import React from "react";

const buttonOutline = props => {
  return (
    <button className="btn btn-outline-info btn-lg" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default buttonOutline;
