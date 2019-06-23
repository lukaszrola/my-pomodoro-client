import React from 'react';
import TimerPanel from '../Timer/TimerPanel';
import Questionnaire from '../Questionnaire/Questionnaire'

class PomodoroPanel extends React.Component {
    state = {
        iterationFinished: false
    }

    timesUp = () => {
        this.setState({ iterationFinished: true });
    }

    answeredToQuestions = () => {
        this.setState({ iterationFinished: false });
    }


    render() {
        let pomodoroPanel = this.state.iterationFinished ?
            <Questionnaire answeredToQuestions={this.answeredToQuestions} /> : <TimerPanel timesUp={this.timesUp} />;

        return (
            <div>
                {pomodoroPanel}
            </div>)
    }

}

export default PomodoroPanel;