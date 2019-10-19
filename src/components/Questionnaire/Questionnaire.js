import React from "react";
import ChoiceQuestion from "./Question/ChoiceQuestion";
import WritingQuestion from "./Question/WritingQuestion";
import FinalPage from "./FinalPage";
import ProgressBar from "../Utils/ProgressBar";
import Spinner from "../Utils/Spinner";
import axios from "../../axios-questions";

class Questionnaire extends React.Component {
  state = {
    questions: [],
    currentQuestion: 0,
    numberOfQuestions: 0,
    remainingQuestions: 0,
    numberOfAtempts: 1
  };

  componentDidMount() {
    axios
      .get(this.props.category + "?numberOfWords=5")
      .then(response => {
        const questions = response.data.map(question =>
          this.buildQuestion(question)
        );
        const numberOfQuestions = questions.length;
        const remainingQuestions = questions.length;

        this.setState({
          questions: questions,
          currentQuestion: 0,
          numberOfAtempts: 1,
          numberOfQuestions: numberOfQuestions,
          remainingQuestions: remainingQuestions
        });
      })
      .catch(response => {
        console.error("Something went wrong with getting questions");
      });
  }

  buildQuestion(question) {
    return { ...question, answeredCorrectly: false };
  }

  checkAnswer(answerWasCorrect) {
    let remainingQuestions = this.state.remainingQuestions;
    if (answerWasCorrect) {
      const questionsToUpdate = this.state.questions.slice();
      questionsToUpdate[this.state.currentQuestion].answeredCorrectly = true;
      remainingQuestions = remainingQuestions - 1;
      this.setState({
        questions: questionsToUpdate,
        remainingQuestions: remainingQuestions
      });
    }

    if (remainingQuestions > 0) {
      const newCurrentQuestion = this.findNextQuestion();
      const atempts = this.state.numberOfAtempts + 1;
      this.setState({
        currentQuestion: newCurrentQuestion,
        numberOfAtempts: atempts
      });
    }
  }

  findNextQuestion() {
    return this.findNextQuestionToAnswer(this.state.currentQuestion);
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
    if (this.props.category === "/writingQuestions") {
      return this.writingQuestion(questionData);
    }
    if (
      this.props.category === "/motherLanguageChoiceQuestions" ||
      this.props.category === "/foreignLanguageChoiceQuestions"
    ) {
      return this.choiceQuestion(questionData);
    }
  }

  choiceQuestion(questionData) {
    let variants = questionData.variants.slice();
    variants.push(questionData.answer);
    variants = [...new Set(variants)];
    variants.sort((a, b) => {
      return 0.5 - Math.random();
    });

    return (
      <ChoiceQuestion
        question={questionData.question}
        correctAnswer={questionData.answer}
        variants={variants}
        answered={answerWasCorrect => this.checkAnswer(answerWasCorrect)}
      />
    );
  }

  writingQuestion(questionData) {
    return (
      <WritingQuestion
        question={questionData.question}
        validAnswers={questionData.validAnswers}
        answered={answerWasCorrect => this.checkAnswer(answerWasCorrect)}
      />
    );
  }

  finalPage() {
    setTimeout(() => this.props.answeredToQuestions(), 6000);
    return <FinalPage score={this.calculateFinalScore()} />;
  }

  calculateFinalScore() {
    return this.state.numberOfQuestions / this.state.numberOfAtempts;
  }

  showQuestionnaire(questionData) {
    const total = this.state.questions.length;
    const answered = this.state.questions.filter(
      q => q.answeredCorrectly === true
    ).length;
    return (
      <div>
        {this.showQuestion(questionData)}
        <ProgressBar done={answered} total={total} />
      </div>
    );
  }

  notFinished() {
    return this.state.remainingQuestions > 0;
  }

  questionsNotLoaded() {
    return this.state.numberOfQuestions === 0;
  }

  render() {
    if (this.questionsNotLoaded()) {
      return <Spinner />;
    } else if (this.notFinished()) {
      const questionData = this.state.questions[this.state.currentQuestion];
      return this.showQuestionnaire(questionData);
    } else {
      return this.finalPage();
    }
  }
}

export default Questionnaire;
