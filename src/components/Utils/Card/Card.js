import React from "react";

const card = props => {
  return (
    <div className="card m-3" onClick={() => props.onClick()}>
      {props.children}
    </div>
  );
};

export default card;
