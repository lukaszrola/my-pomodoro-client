import React from 'react';
import CategoryButton from './CategoryButton';

const categoryChooser = (props) => {
    const categoriesToDisplay = [];
    categoriesToDisplay.push(
        <CategoryButton onClick={() => props.onChoice("/motherLanguageChoiceQuestions")}>Mother language choice</CategoryButton>);
    categoriesToDisplay.push(
        <CategoryButton onClick={() => props.onChoice("/foreignLanguageChoiceQuestions")}>Foreign language choice</CategoryButton>);
    categoriesToDisplay.push(
        <CategoryButton onClick={() => props.onChoice("/writingQuestions")}>Writing question</CategoryButton>);
    categoriesToDisplay.push(
        <button className="btn btn-warning btn-lg m-4" onClick={() => props.onSkip()}>Skip learning</button>);

    return (
    <div>
        <p className="display-2 font-weight-bolder">Choose category of task</p>
        <div className="btn-group-vertical">{categoriesToDisplay}</div>
    </div>);
}

export default categoryChooser;