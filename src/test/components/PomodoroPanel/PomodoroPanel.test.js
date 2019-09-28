import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PomodoroPanel from '../../../components/PomodoroPanel/PomodoroPanel';
import TimerPanel from '../../../components/Timer/TimerPanel';
import CategoryChooser from '../../../components/CategoryChooser/CategoryChooser';
import Questionnaire from '../../../components/Questionnaire/Questionnaire';

configure({adapter: new Adapter()});

describe('Pomodoro panel test', () => {
    let pomodoroPanel;
    beforeEach(() => {
        pomodoroPanel = shallow(<PomodoroPanel/>);
    });

    test('Is renfered correctly', () => {
        expect(pomodoroPanel.find(TimerPanel)).toHaveLength(1);
        expect(pomodoroPanel.find(CategoryChooser)).toHaveLength(0);
        expect(pomodoroPanel.find(Questionnaire)).toHaveLength(0);         
    });

    test('When iteration finished should show DomainChooser', () => {
        pomodoroPanel.instance().timesUp();
        
        expect(pomodoroPanel.find(TimerPanel)).toHaveLength(0);
        expect(pomodoroPanel.find(CategoryChooser)).toHaveLength(1);
        expect(pomodoroPanel.find(Questionnaire)).toHaveLength(0);        
    });

    test('When domain choosen should show questionnaire', () => {
        pomodoroPanel.instance().timesUp();
        pomodoroPanel.instance().categoryChoosen('some category');
        
        expect(pomodoroPanel.find(TimerPanel)).toHaveLength(0);
        expect(pomodoroPanel.find(CategoryChooser)).toHaveLength(0);
        expect(pomodoroPanel.find(Questionnaire)).toHaveLength(1);        
    });    
});