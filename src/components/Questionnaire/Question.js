import React from 'react';
import Answer from './Answer';


const question = (props) => {

    const displayVariants = (answers) => {
        return answers.map(a => <Answer key={a} answer={a} clicked={(choice) => handleChoice(choice)} />);
    }

    const handleChoice = (choice) => {
        props.answered(choiceIsCorrect(choice));
    }

    const choiceIsCorrect = (choice) => {
        return choice === props.answer;
    }

    const answers = props.variants.slice();
    answers.push(props.answer);
    answers.sort((a, b) => { return 0.5 - Math.random() });
    const variantsToDisplay = displayVariants(answers);

    return (
        <div>
            <div className="p-3 mb-2 bg-info text-white">
                <h1><strong>{props.question}</strong></h1>
            </div>
            <div className="btn-group-vertical">
                {variantsToDisplay}
            </div>

        </div>)

}

export default question;