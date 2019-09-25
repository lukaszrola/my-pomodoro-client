import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Timer from '../../../components/Timer/Timer';

configure({ adapter: new Adapter() });

describe('<Timer /> Test', () => {
    let timer;
    let timeFinished = false;

    beforeEach(() => {
        setupTimer();
        timeFinished = false;
    })

    const setupTimer = () => {
        timer = shallow(<Timer hours={0} minutes={0} seconds={3} timesUp={timesUpHandler} />);
        clearInterval(timer.state().intervalId);
        timer.instance().handleReset();
    }

    const timesUpHandler = () => {
        timeFinished = true;
    }

    test('Should finish if skip clicked', () => {
        timer.instance().handleSkipTimer();

        assertThatTimeFinished();
    })

    test('Should finish if end of time', () => {
        tick(4);

        assertThatTimeFinished();
    })

    test('Should do nothing if paused', () => {
        timer.instance().handlePause();
        tick(4);

        expect(timer.state().totalSeconds).toBe(3);
        expect(timeFinished).toBe(false);
    })

    test('Should work if start after pause', () => {
        timer.instance().handlePause();
        timer.instance().handleStart();
        
        tick(4);

        assertThatTimeFinished();
    })

    test('Should reset time to initial value', () => {     
        tick(2);

        timer.instance().handleReset();

        expect(timer.state().totalSeconds).toBe(3);
    })

    let assertThatTimeFinished = () => {
        expect(timer.state().totalSeconds).toBe(0);
        expect(timeFinished).toBe(true);
    }

    let tick = (times) => {
        const timerInstance = timer.instance();
        for (let i = 0; i < times; i++) {
            timerInstance.tick();
        }
    }
});