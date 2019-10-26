import React from "react";

const textInput = props => {
  return (
    <input
      type="text"
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    ></input>
  );
};

export default textInput;
