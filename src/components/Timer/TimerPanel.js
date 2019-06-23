import React from 'react';
import TimerProvider from './TimerProvider'
import Timer from './Timer';

class TimerPanel extends React.Component {
    state = {
        hours: 0,
        minutes: 0,
        seconds: 0,
        started: false
    }

    hoursChangedHandler = (hours) => {
        this.setState({ hours: hours });
    }

    minutesChangedHandler = (minutes) => {
        this.setState({ minutes: minutes });
    }

    secondsChangedHandler = (seconds) => {
        this.setState({ seconds: seconds });
    }

    handleSubmit = () => {
        this.setState({started: true});
    }


    render() {
        let timerPanel = <TimerProvider
            hoursChanged={(this.hoursChangedHandler)}
            minutesChanged={this.minutesChangedHandler}
            secondsChanged={this.secondsChangedHandler}
            handleSubmit={this.handleSubmit} />;

        if (this.state.started){
            timerPanel = <Timer
                            hours={this.state.hours}
                            minutes={this.state.minutes}
                            seconds={this.state.seconds}
                            timesUp={this.props.timesUp}/>
        }

            return (timerPanel)
    }
}

export default TimerPanel;