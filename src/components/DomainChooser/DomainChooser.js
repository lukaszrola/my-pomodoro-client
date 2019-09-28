import React from 'react';
import CategoryButton from './CategoryButton';
const domainChooser = (props) => {
    const domainsToDisplay = [];
    domainsToDisplay.push(
        <CategoryButton onClick={() => props.onChoice("/motherLanguageChoiceQuestions")}>Mother language choice</CategoryButton>);
    domainsToDisplay.push(
        <CategoryButton onClick={() => props.onChoice("/foreignLanguageChoiceQuestions")}>Foreign language choice</CategoryButton>);
    domainsToDisplay.push(
        <button className="btn btn-warning btn-lg m-4" onClick={() => props.onSkip()}>Skip learning</button>);

    return <div>
        <p className="display-2 font-weight-bolder">Choose category of task</p>
        <div className="btn-group-vertical">{domainsToDisplay}</div>;
    
    </div>
}

export default domainChooser;