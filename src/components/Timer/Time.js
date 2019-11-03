import React from "react";
import ExtraBigText from "../Utils/ExtraBigText";

const time = props => {
  return (
    <ExtraBigText>
      {props.hours} : {props.minutes} : {props.seconds}
    </ExtraBigText>
  );
};

export default time;
