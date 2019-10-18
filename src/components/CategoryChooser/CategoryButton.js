import React from "react";

const categoryButton = props => {
  return (
    <button className="btn btn-info btn-lg m-4" onClick={() => props.onClick()}>
      {props.children}
    </button>
  );
};

export default categoryButton;
