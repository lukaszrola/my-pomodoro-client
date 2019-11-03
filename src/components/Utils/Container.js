import React from "react";

const container = props => {
  return <div className={"container " + props.className}>{props.children}</div>;
};

export default container;
