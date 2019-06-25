import React from 'react';

const answer = (props) => {
    return (
      <button className={props.color} onClick={() => props.clicked(props.answer)}>{props.answer}</button>)
}

export default answer;