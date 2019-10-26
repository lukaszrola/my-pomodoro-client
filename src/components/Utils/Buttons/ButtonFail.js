import React from "react";

const buttonFail = props => {
  return (
    <button className="btn btn-danger btn-lg" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default buttonFail;
