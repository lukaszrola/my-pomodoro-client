import React from "react";
import Title from "../Utils/Title";
import Button from "../Utils/Button";
import Time from "./Time";
import ButtonGroup from "../Utils/ButtonGroup";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    const hours = this.numberValue(props.hours);
    const minutes = this.numberValue(props.minutes);
    const seconds = this.numberValue(props.seconds);
    let totalSeconds = 3600 * hours + 60 * minutes + 1 * seconds;

    this.state = {
      totalSeconds: totalSeconds,
      paused: false,
      initialTime: totalSeconds,
      intervalId: null
    };
  }

  componentDidMount() {
    const intervalId = setInterval(() => this.tick(), 1000);
    this.setState({ intervalId: intervalId });
  }

  numberValue(value) {
    return isNaN(value) ? 0 : value;
  }

  tick() {
    if (!this.state.paused && this.state.totalSeconds > 0) {
      const decreasedTime = this.state.totalSeconds - 1;
      this.setState({ totalSeconds: decreasedTime });
    } else if (this.state.totalSeconds === 0) {
      this.timesUp();
    }
  }

  getHours() {
    let hours = Math.floor(this.state.totalSeconds / 3600);
    return hours > 9 ? hours : "0" + hours;
  }

  getMinutes() {
    let minutes = Math.floor((this.state.totalSeconds % 3600) / 60);
    return minutes > 9 ? minutes : "0" + minutes;
  }

  getSeconds() {
    let seconds = this.state.totalSeconds % 60;
    return seconds > 9 ? seconds : "0" + seconds;
  }

  handlePause() {
    this.setState({ paused: true });
  }

  handleStart() {
    this.setState({ paused: false });
  }

  handleReset() {
    let resetTime = this.state.initialTime;
    this.setState({ totalSeconds: resetTime });
  }

  handleSkipTimer() {
    this.setState({ totalSeconds: 0 });
    this.timesUp();
  }

  timesUp() {
    clearInterval(this.state.intervalId);
    this.props.timesUp();
  }

  render() {
    const pauseButton = (
      <Button onClick={() => this.handlePause()}>Pause</Button>
    );
    const startButton = (
      <Button onClick={() => this.handleStart()}>Start</Button>
    );
    return (
      <div>
        <Title>Time is started</Title>
        <Time
          hours={this.getHours()}
          minutes={this.getMinutes()}
          seconds={this.getSeconds()}
        />
        <ButtonGroup>
          {this.state.paused ? startButton : pauseButton}
          <Button onClick={() => this.handleReset()}>Reset</Button>
          <Button onClick={() => this.handleSkipTimer()}>Skip timer</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default Timer;
