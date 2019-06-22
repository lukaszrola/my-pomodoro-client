import React from 'react';

const answer = (props) => {
    return (
      <div onClick={() => props.clicked(props.answer)}>{props.answer}</div>)
}

export default answer;