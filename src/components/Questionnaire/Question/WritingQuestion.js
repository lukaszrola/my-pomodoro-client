import React from "react";
import Title from "../../Utils/Title";
import ResultAlert from "./ResultAlert";
import Container from "../../Utils/Container";
import Button from "../../Utils/Button";
import InputGroup from "../../Utils/Inputs/InputGroup";
import TextInput from "../../Utils/Inputs/TextInput";

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
      <Container>
        <ResultAlert
          answered={this.state.answered}
          correct={this.state.correct}
          question="Type foreign meaning"
        />
        <Title>{this.props.question}</Title>

        <InputGroup>
          <TextInput
            name="answer"
            value={this.state.answer}
            placeholder="Type answer"
            onChange={e => this.typeAnswer(e.target.value)}
          />
          <Button onClick={() => this.handleAnswer()} margin="no">
            Answer
          </Button>
        </InputGroup>
      </Container>
    );
  }
}

export default WritingQuestion;
