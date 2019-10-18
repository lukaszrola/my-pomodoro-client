import React from "react";
import Card from "../Utils/Card/Card";
import CardBody from "../Utils/Card/CardBody";

const categoryButton = props => {
  return (
    <Card onClick={() => props.onClick()}>
      <CardBody title={props.title} type={props.type}>
        {props.children}
      </CardBody>
    </Card>
  );
};

export default categoryButton;
