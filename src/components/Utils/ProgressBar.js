import React from "react";

const progressBar = props => {
  const progress = Math.round(100 * (props.done / props.total));
  return (
    <div style={{ marginTop: 20 }} className="d-flex justify-content-center">
      <div className="progress" style={{ width: 1000 }}>
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-info"
          role="progressbar"
          style={{ width: progress + "%" }}
        ></div>
      </div>
    </div>
  );
};

export default progressBar;
