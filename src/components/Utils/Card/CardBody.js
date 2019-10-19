import React from "react";

const cardBody = props => {
  const buttonClass = () => {
    if (props.type === "warning") return "btn-warning";
    else if (props.type === "outline") return "btn-outline-info";
    else return "btn-info";
  };

  return (
    <div className={"class-body " + buttonClass()}>
      <h4 className={"card-title"}>{props.title}</h4>
      <p className={"card-text"}>{props.children}</p>
    </div>
  );
};

export default cardBody;
