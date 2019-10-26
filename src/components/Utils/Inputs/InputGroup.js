import React from "react";

const inputGroup = props => {
  return (
    <div className="d-flex justify-content-center input-group">
      {props.children}
    </div>
  );
};

export default inputGroup;
