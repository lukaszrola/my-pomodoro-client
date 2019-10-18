import React from "react";
import CategoryButton from "./CategoryButton";
import Title from "../Utils/Title";

const categoryChooser = props => {
  const categoriesToDisplay = [];
  categoriesToDisplay.push(
    <CategoryButton
      onClick={() => props.onChoice("/motherLanguageChoiceQuestions")}
      title="Mother language choice"
    >
      Choose correct answer in your mother language
    </CategoryButton>
  );
  categoriesToDisplay.push(
    <CategoryButton
      title="Foreign language choice"
      onClick={() => props.onChoice("/foreignLanguageChoiceQuestions")}
    >
      Choose correct answer in foreign language
    </CategoryButton>
  );
  categoriesToDisplay.push(
    <CategoryButton
      title="Writing question"
      onClick={() => props.onChoice("/writingQuestions")}
    >
      Write correct answer in foreign language
    </CategoryButton>
  );
  categoriesToDisplay.push(
    <CategoryButton
      title="Skip learning"
      onClick={() => props.onSkip()}
      type="warning"
    >
      Don't do tasks after this iteration
    </CategoryButton>
  );

  return (
    <div className="container">
      <Title>Choose category</Title>
      {categoriesToDisplay}
    </div>
  );
};

export default categoryChooser;
