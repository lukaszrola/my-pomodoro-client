import React from "react";

const cardHeader = props => {
  return <div className="card-header text-info">{props.children}</div>;
};

export default cardHeader;
