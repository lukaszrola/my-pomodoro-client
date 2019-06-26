import React from 'react';
import TimerPanel from '../Timer/TimerPanel';
import Questionnaire from '../Questionnaire/Questionnaire';
import DomainChooser from '../DomainChooser/DomainChooser';
import axios from '../../axios-questions';

class PomodoroPanel extends React.Component {
    state = {
        iterationFinished: false,
        categories: [],
        chosenDomain: ''
    }

    timesUp = () => {
        this.setState({ iterationFinished: true });
    }

    answeredToQuestions = () => {
        this.setState({ iterationFinished: false });
    }

    handleDomainChoice = (choice) => {
        this.setState({ chosenDomain: choice });
    }

    displayPanel() {
        if (!this.state.iterationFinished)
            return <TimerPanel timesUp={this.timesUp} />;
        else if (!this.state.chosenDomain) {
            axios.get("/categories.json")
                .then(response => this.setState({categories: response.data.categories}));
            return <DomainChooser categories={this.state.categories} onChoice={this.handleDomainChoice} />;
        } else {
            return <Questionnaire answeredToQuestions={this.answeredToQuestions} />;
        }
    }


    render() {
        let pomodoroPanel = this.displayPanel();

        return (
            <div>
                {pomodoroPanel}
            </div>)
    }

}

export default PomodoroPanel;