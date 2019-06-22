import React from 'react';

class Answer extends React.Component{
  render(){
    return (
      <div onClick={() => this.props.clicked(this.props.answer)}>{this.props.answer}</div>)
  }
}

export default Answer;