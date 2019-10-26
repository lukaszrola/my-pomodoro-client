import React from "react";

const button = props => {
  const marginClass = props.margin === "no" ? "" : "m-2";
  return (
    <button
      type="button"
      className={"btn btn-info " + marginClass}
      onClick={() => props.onClick()}
    >
      {props.children}
    </button>
  );
};

export default button;
