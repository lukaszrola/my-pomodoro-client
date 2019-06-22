import React from 'react';
import Answer from './Answer';

class Question extends React.Component {
    handleChoice(choice){
      this.props.answered(this.choiceIsCorrect(choice));
    }
    
    choiceIsCorrect(choice){
      return choice === this.props.question.answer;
    }
  
    displayAnswers(answers){
      return answers.map(a => <Answer key={a} answer={a} clicked={(choice) => this.handleChoice(choice)}/>
      );
    }
    
    render(){
      const questionData = this.props.question;
      const answers = questionData.variants.slice();
      answers.push(questionData.answer);
      answers.sort((a,b) => {return 0.5 - Math.random()});
      const displayAnswers = this.displayAnswers(answers);
      return (
        <div>
          <strong>{questionData.question}</strong>
          {displayAnswers}
        </div>)
    }
  }

  export default Question;