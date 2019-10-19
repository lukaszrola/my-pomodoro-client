import React from "react";

const gridColumn = props => {
  return <div className={props.columns}>{props.children}</div>;
};

export default gridColumn;
