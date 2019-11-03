import React from "react";
import Content from "./Content";

const extraBigText = props => {
  return (
    <Content className="display-4 text-secondary font-weight-bolder mb-4">
      {props.children}
    </Content>
  );
};

export default extraBigText;
