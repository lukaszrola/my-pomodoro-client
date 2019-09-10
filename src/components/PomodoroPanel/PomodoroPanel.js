import React from 'react';
import TimerPanel from '../Timer/TimerPanel';
import Questionnaire from '../Questionnaire/Questionnaire';
import DomainChooser from '../DomainChooser/DomainChooser';
import axios from '../../axios-questions';
import alertSound from '../../sounds/alertSound.wav'

class PomodoroPanel extends React.Component {
    constructor () {
        super()
        axios.get("/categories")
            .then(response => this.setState({ categories: response.data }))
            .catch(e => console.log(e));
    }

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

    handleDomainChoice = (choice) => {
        this.setState({ chosenCategory: choice });
    }

    displayPanel() {
        if (!this.state.iterationFinished)
            return <TimerPanel timesUp={this.timesUp} />;
        else if (!this.state.chosenCategory) {
            return <DomainChooser
                onSkip={this.answeredToQuestions}
                categories={this.state.categories}
                onChoice={this.handleDomainChoice} />;
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