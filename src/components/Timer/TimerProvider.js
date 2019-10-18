import React from "react";
import Title from "../Utils/Title";
import Button from "../Utils/Button";

const timerPanel = props => {
  const runPomodoroWithNMinutes = numberOfMinutes => {
    props.minutesChanged(numberOfMinutes);
    props.handleStart();
  };

  return (
    <div>
      <Title>Set Pomodoro time</Title>
      <div className={"btn-group mb-4"}>
        <Button onClick={() => runPomodoroWithNMinutes(5)}>
          <b>SHORT</b> (5&nbsp;min)
        </Button>
        <Button onClick={() => runPomodoroWithNMinutes(25)}>
          <b>MEDIUM</b> (25&nbsp;min)
        </Button>
        <Button onClick={() => runPomodoroWithNMinutes(45)}>
          <b>LONG</b> (45&nbsp;min)
        </Button>
      </div>
      <div>
        <form
          className="d-flex justify-content-center input-group mb-4"
          onSubmit={() => props.handleStart()}
        >
          <input
            type="text"
            name="hours"
            placeholder="Hours"
            onChange={e => props.hoursChanged(e.target.value)}
          />
          <input
            type="text"
            name="minutes"
            placeholder="Minutes"
            onChange={e => props.minutesChanged(e.target.value)}
          />
          <input
            type="text"
            name="seconds"
            placeholder="Seconds"
            onChange={e => props.secondsChanged(e.target.value)}
          />
        </form>
        <Button onClick={() => props.handleStart()}>CUSTOM TIME</Button>
      </div>
    </div>
  );
};

export default timerPanel;
