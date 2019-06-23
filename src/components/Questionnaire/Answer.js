import React from 'react';

const answer = (props) => {
    return (
      <button className={"btn btn-outline-secondary btn-lg"} onClick={() => props.clicked(props.answer)}>{props.answer}</button>)
}

export default answer;