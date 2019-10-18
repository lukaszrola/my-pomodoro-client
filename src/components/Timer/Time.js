import React from "react";

const time = props => {
  return (
    <div className="display-4 text-secondary font-weight-bolder mb-4">
      {props.hours} : {props.minutes} : {props.seconds}
    </div>
  );
};

export default time;
