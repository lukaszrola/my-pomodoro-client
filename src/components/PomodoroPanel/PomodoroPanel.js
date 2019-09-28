import React from 'react';
import TimerPanel from '../Timer/TimerPanel';
import Questionnaire from '../Questionnaire/Questionnaire';
import CategoryChooser from '../CategoryChooser/CategoryChooser';
import alertSound from '../../sounds/alertSound.wav'

class PomodoroPanel extends React.Component {
    state = {
        iterationFinished: false,
        categories: [],
        chosenCategory: ''
    }

    timesUp = () => {
        this.beep();
        this.setState({ iterationFinished: true });
    }

    answeredToQuestions = () => {
        window.location.href = "/";
    }

    categoryChoosen = (choice) => {
        this.setState({ chosenCategory: choice });
    }

    displayPanel() {
        if (!this.state.iterationFinished)
            return <TimerPanel timesUp={this.timesUp} />;
        else if (!this.state.chosenCategory) {
            return <CategoryChooser
                onSkip={this.answeredToQuestions}
                onChoice={this.categoryChoosen} />;
        } else {
            return <Questionnaire category={this.state.chosenCategory} answeredToQuestions={this.answeredToQuestions} />;
        }
    }

    render() {
        let pomodoroPanel = this.displayPanel();

        return (
            <div>
                {pomodoroPanel}
            </div>)
    }

    beep() {
        const audio = new Audio(alertSound);
        if (document.hidden) {
            this.on("Time is up", 1000);
        }
        audio.play();
    }
}

export default PomodoroPanel;