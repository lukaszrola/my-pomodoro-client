import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WritingQuestion from '../../../../components/Questionnaire/Question/WritingQuestion';
import ResultAlert from '../../../../components/Questionnaire/Question/ResultAlert'

configure({ adapter: new Adapter() });

describe('Writing Question', () => {
    let writingQuestion;
    const correctAnswer1 = 'correct1';
    const correctAnswer2 = 'correct2';

    beforeEach(() => {
        writingQuestion = shallow(<WritingQuestion question={'some question'}
            validAnswers={[correctAnswer1, correctAnswer2]}
            answered={() => { }} />);
    });

    test('Should set state correctly', () => {
        expect(writingQuestion.find(ResultAlert)).toHaveLength(1);
        expect(writingQuestion.state().answered).toBe(false);        
    });

    test('First corect answer', () => {
        writingQuestion.instance().typeAnswer(correctAnswer1);
        writingQuestion.instance().handleAnswer();

        expect(writingQuestion.find(ResultAlert)).toHaveLength(1);
        expect(writingQuestion.state().answered).toBe(true);
        expect(writingQuestion.state().correct).toBe(true);         
    });

    test('Second corect answer', () => {
        writingQuestion.instance().typeAnswer(correctAnswer2);
        writingQuestion.instance().handleAnswer();

        expect(writingQuestion.find(ResultAlert)).toHaveLength(1);
        expect(writingQuestion.state().answered).toBe(true);
        expect(writingQuestion.state().correct).toBe(true);         
    });

});