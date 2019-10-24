import React from "react";
import Title from "../../Utils/Title";
import ResultAlert from "./ResultAlert";

class WritingQuestion extends React.Component {
  state = {
    answer: "",
    answered: false,
    correct: false
  };

  componentWillReceiveProps() {
    this.setState({ answer: "", answered: false, correct: false });
  }

  typeAnswer(answer) {
    this.setState({ answer: answer });
  }

  handleAnswer() {
    const answerWasCorrect = this.props.validAnswers.includes(
      this.state.answer
    );
    this.setState({ answered: true, correct: answerWasCorrect });
    setTimeout(() => this.props.answered(answerWasCorrect), 1000);
  }

  render() {
    return (
      <div>
        <ResultAlert
          answered={this.state.answered}
          correct={this.state.correct}
          question="Type foreign meaning"
        />
        <Title>{this.props.question}</Title>

        <div
          className="d-flex justify-content-center input-group"
          onSubmit={this.handleAnswer}
        >
          <input
            type="text"
            name="answer"
            value={this.state.answer}
            placeholder="Type answer"
            onChange={e => this.typeAnswer(e.target.value)}
          />
          <button
            type="button"
            class="btn btn-info"
            onClick={() => this.handleAnswer()}
          >
            Answer
          </button>
        </div>
      </div>
    );
  }
}

export default WritingQuestion;
