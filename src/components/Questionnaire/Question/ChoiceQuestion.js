import React from 'react';
import Answer from './Answer';
import ResultAlert from './ResultAlert';
import QuestionLabel from './QuestionLabel';


class ChoiceQuestion extends React.Component {

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
        setTimeout(() => this.props.answered(choiceWasCorrect), 1000);
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
            return <ResultAlert answered={this.state.selectedAnswer}
                correct={this.state.correct} />
        }
        else return null;
    }

    render() {
        return (
            <div>
                <QuestionLabel>{this.props.question}</QuestionLabel>
                <ResultAlert answered={this.state.selectedAnswer}correct={this.state.correct} />
                <div className="btn-group-vertical">
                    {this.displayVariants()}
                </div>
            </div>)
    }
}

export default ChoiceQuestion;