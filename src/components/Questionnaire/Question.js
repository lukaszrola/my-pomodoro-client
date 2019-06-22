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
        return choice === props.question.answer;
    }

    const answers = props.question.variants.slice();
    answers.push(props.question.answer);
    answers.sort((a, b) => { return 0.5 - Math.random() });
    const variantsToDisplay = displayVariants(answers);
    return (
        <div>
            <strong>{props.question.question}</strong>
            {variantsToDisplay}
        </div>)

}

export default question;