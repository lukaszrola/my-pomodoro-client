import React from 'react';

const timerPanel = (props) => {

    const runPomodoroWithNMinutes = (numberOfMinutes) => {
        props.minutesChanged(numberOfMinutes);
        props.handleSubmit();
    }

    return (
        <div>
            <b className="display-2 font-weight-bolder">Set Pomodoro time</b>
            <div className={"m-2"}>
                <button type="button" className="btn btn-info btn-lg m-4"
                    onClick={() => runPomodoroWithNMinutes(5)}><b>SHORT</b> (5 minutes)</button>
                <button type="button" className="btn btn-info btn-lg m-4"
                    onClick={() => runPomodoroWithNMinutes(25)}><b>MEDIUM</b>(25 minutes)</button>
                <button type="button" className="btn btn-info btn-lg m-4"
                    onClick={() => runPomodoroWithNMinutes(45)}><b>LONG</b>(45 minutes)</button>
            </div>
            <div>
                <form className="d-flex justify-content-center input-group" onSubmit={() => props.handleSubmit()}>
                    <input type="text" name="hours" placeholder="Hours" onChange={(e) => props.hoursChanged(e.target.value)} />
                    <input type="text" name="minutes" placeholder="Minutes" onChange={(e) => props.minutesChanged(e.target.value)} />
                    <input type="text" name="seconds" placeholder="Seconds" onChange={(e) => props.secondsChanged(e.target.value)} />
                    <input type="submit" className="btn btn-info btn-lg" value="CUSTOM TIME" />
                </form>
            </div>
        </div>)
}

export default timerPanel;