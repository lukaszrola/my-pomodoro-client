import React from "react";

const title = props => {
  return <h1 className="font-weight-bolder text-info">{props.children}</h1>;
};

export default title;
