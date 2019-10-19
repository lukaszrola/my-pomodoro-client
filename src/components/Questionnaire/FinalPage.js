import React from "react";
import tomatoImage from "../../images/tomato.png";
import Card from "../Utils/Card/Card";
import CardBody from "../Utils/Card/CardBody";
import CardHeader from "../Utils/Card/CardHeader";
import CardImage from "../Utils/Card/CardImage";
import GridRow from "../Utils/Grid/GridRow";
import GridColumn from "../Utils/Grid/GridColumn";

const finalPage = props => {
  return (
    <GridRow>
      <GridColumn columns="col-lg-9">
        <Card onClick={() => (window.location.href = "/")}>
          <CardHeader>Test is finished</CardHeader>
          <CardImage src={tomatoImage} alt="My-Tomato" />
          <CardBody
            title="You answered correctly to all questions"
            type="outline"
          >
            Your score is {Math.round(props.score * 100)}%
          </CardBody>
        </Card>
      </GridColumn>
    </GridRow>
  );
};

export default finalPage;
