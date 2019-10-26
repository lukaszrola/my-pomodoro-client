import React from "react";

const buttonSuccess = props => {
  return (
    <button className="btn btn-success btn-lg" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default buttonSuccess;
