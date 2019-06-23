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
            <strong>{props.question}</strong>
            <div>
                {variantsToDisplay}
            </div>

        </div>)

}

export default question;