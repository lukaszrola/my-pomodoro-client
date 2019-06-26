import React from 'react';
import Question from './Question';
import axios from '../../axios-questions';

class Questionnaire extends React.Component {
    state = {
        questions: [],
        currentQuestion: 0,
        numberOfQuestions: 0,
        remainingQuestions: 0
    }

    componentDidMount() {
        axios.get("/getQuestions.json?numberOfWords=5&category="+ this.props.category)
            .then(response => {
                const questions = response.data.questions
                    .map(question => this.buildQuestion(question));
                const numberOfQuestions = questions.length;
                const remainingQuestions = questions.length;

                this.setState({
                    questions: questions,
                    currentQuestion: 0,
                    numberOfQuestions: numberOfQuestions,
                    remainingQuestions: remainingQuestions
                });
            })
    }

    buildQuestion(question){
        return {...question, answeredCorrectly: false};
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
        const variants = questionData.variants.slice();
        variants.push(questionData.answer)
        variants.sort((a, b) => { return 0.5 - Math.random() });
        return <Question
            question={questionData.question}
            correctAnswer={questionData.answer}
            variants={variants}
            answered={(answerWasCorrect) => this.handleAnswerChoice(answerWasCorrect)} />;
    }

    finishQuestionnaire() {
        setTimeout(() => this.props.answeredToQuestions(), 4000);
        return <div>You answered correctly to all questions</div>;
    }

    render() {
        const questionData = this.state.questions[this.state.currentQuestion];
        let questionnaire = null;

        if(this.state.numberOfQuestions === 0){
            questionnaire = <div>Questions are loading</div>
        }
        else if (this.state.remainingQuestions > 0) {
            questionnaire = this.showQuestion(questionData);
        }
        else {
            questionnaire = this.finishQuestionnaire();
        }

        return (questionnaire);
    }
}

export default Questionnaire;