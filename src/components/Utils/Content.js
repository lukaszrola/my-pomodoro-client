import React from "react";

const content = props => {
  return <div className={props.className}>{props.children}</div>;
};

export default content;
