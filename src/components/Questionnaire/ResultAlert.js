import React from 'react';
import Alert from './Alert'

const resultAlert = (props) => {
    if (props.answered) {
        return props.correct ?
            <Alert alertType="alert-success">Correct answer!</Alert> :
            <Alert alertType="alert-danger">Incorrect answer!</Alert>
    }
    else {
        return <Alert alertType="alert-light">Answer to question</Alert>;
    }
}

export default resultAlert;