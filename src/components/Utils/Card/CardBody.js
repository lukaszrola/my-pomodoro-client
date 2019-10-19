import React from "react";

const cardBody = props => {
  const buttonClass = props.type === "warning" ? "btn-warning" : "btn-info";
  return (
    <div className={"class-body " + buttonClass}>
      <h4 className={"card-title"}>{props.title}</h4>
      <p className={"card-text"}>{props.children}</p>
    </div>
  );
};

export default cardBody;
