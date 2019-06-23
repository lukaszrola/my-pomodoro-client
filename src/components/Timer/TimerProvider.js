import React from 'react';

const timerPanel = (props) => {
    
    return (
        <form onSubmit={() => props.handleSubmit()}>
            <input type="text" name="hours" placeholder="Hours" onChange={(e)  => props.hoursChanged(e.target.value)} />
            <input type="text" name="minutes" placeholder="Minutes" onChange={(e) => props.minutesChanged(e.target.value)}/>
            <input type="text" name="seconds" placeholder="Seconds" onChange={(e) => props.secondsChanged(e.target.value)}/>
            <input type="submit" value="START POMODORO"/>
        </form>)
}

export default timerPanel;