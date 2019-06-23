import React from 'react';
import Question from './Question';

class Questionnaire extends React.Component {
    state = {
        questions: [
            {
                question: 'UBS logo contains',
                answer: 'Three keys',
                variants: ['One Key', 'Rainbow', 'Vault'],
                answeredCorrectly: false
            },
            {
                question: 'CEO of UBS is',
                answer: 'Sergio Ermotti',
                variants: ['Donald Trump', 'David Beckham', 'Kim Dzong Un'],
                answeredCorrectly: false
            }
        ],
        currentQuestion: 0,
        numberOfQuestions: 2,
        remainingQuestions: 2
    }

    handleAnswerChoice(answerWasCorrect) {
        let remainingQuestions = this.state.remainingQuestions;
        if (answerWasCorrect) {
            const questionsToUpdate = this.state.questions.slice();
            questionsToUpdate[this.state.currentQuestion].answeredCorrectly = true;
            remainingQuestions = remainingQuestions - 1;
            this.setState({ questions: questionsToUpdate, remainingQuestions: remainingQuestions });
        }

        if (remainingQuestions > 0) {
            const newCurrentQuestion = this.findNextQuestion();
            this.setState({ currentQuestion: newCurrentQuestion });
        }
    }

    findNextQuestion() {
        let newCurrentQuestion = this.findNextQuestionToAnswer(this.state.currentQuestion);
        return newCurrentQuestion;
    }

    findNextQuestionToAnswer(questionNumber) {
        let newCurrentQuestion = questionNumber + 1;
        if (newCurrentQuestion >= this.state.numberOfQuestions) {
            newCurrentQuestion = 0;
        }

        if (this.questionAlreadyAnswered(newCurrentQuestion)) {
            newCurrentQuestion = this.findNextQuestionToAnswer(newCurrentQuestion);
        }

        return newCurrentQuestion;
    }

    questionAlreadyAnswered(questionNumber) {
        return this.state.questions[questionNumber].answeredCorrectly;
    }

    showQuestion(questionData) {
        return <Question {...questionData}
            answered={(answerWasCorrect) => this.handleAnswerChoice(answerWasCorrect)} />;
    }

    finishQuestionnaire() {
        setTimeout(() => this.props.answeredToQuestions(), 4000);
        return <div>You answered correctly to all questions</div>;
    }

    render() {
        const questionData = this.state.questions[this.state.currentQuestion];
        let questionnaire = null;

        if (this.state.remainingQuestions > 0) {
            questionnaire = this.showQuestion(questionData);
        }
        else {
            questionnaire = this.finishQuestionnaire();
        }

        return (questionnaire);
    }
}

export default Questionnaire;