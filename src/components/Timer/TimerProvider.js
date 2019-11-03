import React from "react";
import Title from "../Utils/Title";
import Button from "../Utils/Buttons/Button";
import ButtonGroup from "../Utils/Buttons/ButtonGroup";
import InputGroup from "../Utils/Inputs/InputGroup";
import TextInput from "../Utils/Inputs/TextInput";
import Content from "../Utils/Content";

const timerPanel = props => {
  const runPomodoroWithNMinutes = numberOfMinutes => {
    props.minutesChanged(numberOfMinutes);
    props.handleStart();
  };

  return (
    <Content>
      <Title>Set Pomodoro time</Title>
      <ButtonGroup>
        <Button onClick={() => runPomodoroWithNMinutes(5)}>
          <b>SHORT</b> (5&nbsp;min)
        </Button>
        <Button onClick={() => runPomodoroWithNMinutes(25)}>
          <b>MEDIUM</b> (25&nbsp;min)
        </Button>
        <Button onClick={() => runPomodoroWithNMinutes(45)}>
          <b>LONG</b> (45&nbsp;min)
        </Button>
      </ButtonGroup>
      <InputGroup>
        <TextInput
          name="hours"
          placeholder="Hours"
          onChange={e => props.hoursChanged(e.target.value)}
        />
        <TextInput
          type="text"
          name="minutes"
          placeholder="Minutes"
          onChange={e => props.minutesChanged(e.target.value)}
        />
        <TextInput
          type="text"
          name="seconds"
          placeholder="Seconds"
          onChange={e => props.secondsChanged(e.target.value)}
        />
      </InputGroup>
      <Button onClick={() => props.handleStart()}>CUSTOM TIME</Button>
    </Content>
  );
};

export default timerPanel;
