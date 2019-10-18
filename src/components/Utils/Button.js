import React from "react";

const button = props => {
  return (
    <button
      type="button"
      className="btn btn-info m-2"
      onClick={() => props.onClick()}
    >
      {props.children}
    </button>
  );
};

export default button;
