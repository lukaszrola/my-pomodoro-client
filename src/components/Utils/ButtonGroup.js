import React from "react";

const buttonGroup = props => {
  let buttonGroup = props.vertical ? "btn-group-vertical" : "btn-group";
  return <div className={buttonGroup + " mb-4"}>{props.children}</div>;
};

export default buttonGroup;
