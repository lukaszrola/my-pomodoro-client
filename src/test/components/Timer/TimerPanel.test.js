import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TimerPanel from '../../../components/Timer/TimerPanel';
import TimerProvider from '../../../components/Timer/TimerProvider';
import Timer from '../../../components/Timer/Timer'

configure({ adapter: new Adapter() });

describe('TimerPanel test', () => {
    let timerPanel;

    beforeEach(() => {
        timerPanel = shallow(<TimerPanel />);
    })

    test('Render correctly', () => {
        expect(timerPanel.find(Timer)).toHaveLength(0);
        expect(timerPanel.find(TimerProvider)).toHaveLength(1);
    });

    test("Update hours value", () => {
        const newValue = 1;

        timerPanel.instance().hoursChangedHandler(1);

        expect(timerPanel.state().hours).toBe(newValue);
    })

    test("Update minutes value", () => {
        const newValue = 1;

        timerPanel.instance().minutesChangedHandler(1);

        expect(timerPanel.state().minutes).toBe(newValue);
    })

    test("Update seconds value", () => {
        const newValue = 1;

        timerPanel.instance().secondsChangedHandler(1);

        expect(timerPanel.state().seconds).toBe(newValue);
    })

    test("Start timer", () => {
        timerPanel.instance().handleStart();

        expect(timerPanel.state().started).toBe(true);
        expect(timerPanel.find(Timer)).toHaveLength(1);
    })
})