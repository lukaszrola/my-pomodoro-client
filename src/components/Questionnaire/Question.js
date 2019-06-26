import React from 'react';
import Answer from './Answer';


class Question extends React.Component {

    state = {
        selectedAnswer: '',
        correct: false
    }

    componentWillReceiveProps() {
        this.setState({ selectedAnswer: '' });
    }

    displayVariants = () => {
        const answers = this.props.variants;
        return answers.map(a => <Answer color={this.calculateColor(a)} key={a} answer={a} clicked={(choice) => this.handleChoice(choice)} />);
    }

    handleChoice = (choice) => {
        let choiceWasCorrect = this.choiceIsCorrect(choice);
        this.setState({
            selectedAnswer: choice,
            correct: choiceWasCorrect
        });
        setTimeout(() => this.props.answered(choiceWasCorrect), 2000);
    }

    choiceIsCorrect = (choice) => {
        return choice === this.props.correctAnswer;
    }

    calculateColor(answer) {
        if (this.state.selectedAnswer !== answer)
            return "btn btn-outline-info btn-lg";
        else
            return this.state.correct ? "btn btn-success btn-lg" : "btn btn-danger btn-lg";
    }

    calculateAlert() {
        if (this.state.selectedAnswer) {
            return this.state.correct ?
                <div class="alert alert-success" role="alert">
                    Correct answer!
                </div> :
                <div class="alert alert-danger" role="alert">
                    Incorrect answer
                </div>
        }
        else return null;
    }



    render() {
        return (
            <div>
                <div className="p-3 mb-2 bg-info text-white">
                    <h1><strong>{this.props.question}</strong></h1>
                </div>
                {this.calculateAlert()}
                <div className="btn-group-vertical">
                    {this.displayVariants()}
                </div>
            </div>)
    }

}

export default Question;