import React from "react";
import Alert from "./Alert";

const resultAlert = props => {
  if (props.answered) {
    return props.correct ? (
      <Alert alertType="alert-success">Correct answer!</Alert>
    ) : (
      <Alert alertType="alert-danger">Incorrect answer!</Alert>
    );
  } else {
    return <Alert alertType="alert-info">{props.question}</Alert>;
  }
};

export default resultAlert;
