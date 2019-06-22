import React from 'react';

class Timer extends React.Component{
    constructor(props){
      super(props);
      let totalSeconds = 3600 * props.hours + 60 * props.minutes + 1 * props.seconds;
      this.state = {totalSeconds: totalSeconds,
                    paused: false,
                    initialTime: totalSeconds};
    }
    componentDidMount(){
      setInterval(() => this.tick(), 1000);
    }
    
    tick() {
      if(!this.state.paused && this.state.totalSeconds > 0){ 
        const decreasedTime = this.state.totalSeconds - 1;
        this.setState({totalSeconds: decreasedTime});
      }
    }
    
    getHours(){
      let hours = Math.floor(this.state.totalSeconds / 3600);
      return hours > 9 ? hours : '0' + hours ;
    }
    
    getMinutes(){
      let minutes = Math.floor((this.state.totalSeconds % 3600) /60);
      return minutes > 9 ? minutes : '0' + minutes;
    }
    
    getSeconds(){
      let seconds = this.state.totalSeconds % 60;
      return seconds > 9 ? seconds : '0' + seconds;
    }
    
    handlePause(){
      this.setState({paused: true});
    }
    
    handleStart(){
      this.setState({paused: false});
    }
    
    handleReset(){
      let resetTime = this.state.initialTime;
      this.setState({totalSeconds: resetTime});    
    }
    
    render(){
      const pauseButton = <button onClick={() => this.handlePause()}>Pause</button>;
      const startButton = <button onClick={() => this.handleStart()}>Start</button>;
      return(
        <div>
          <div>{this.getHours()} : {this.getMinutes()} : {this.getSeconds()}</div>
          {this.state.paused ? startButton : pauseButton}
          <button onClick={() => this.handleReset()}>Reset</button>
        </div>
      )
    }
  }

  export default Timer;