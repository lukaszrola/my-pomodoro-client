import React from "react";
import ButtonOutline from "../../Utils/Buttons/ButtonOutline";
import ButtonSuccess from "../../Utils/Buttons/ButtonSuccess";
import ButtonFail from "../../Utils/Buttons/ButtonFail";

const choice = props => {
  const calculateButton = () => {
    if (props.selectionResult === "none")
      return (
        <ButtonOutline onClick={() => props.clicked(props.answer)}>
          {props.answer}
        </ButtonOutline>
      );
    if (props.selectionResult === "success")
      return (
        <ButtonSuccess onClick={() => props.clicked(props.answer)}>
          {props.answer}
        </ButtonSuccess>
      );
    if (props.selectionResult === "fail")
      return (
        <ButtonFail onClick={() => props.clicked(props.answer)}>
          {props.answer}
        </ButtonFail>
      );
  };
  return calculateButton();
};

export default choice;
