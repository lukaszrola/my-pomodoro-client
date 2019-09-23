import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Question from '../../../components/Questionnaire/Question';
import Answer from '../../../components/Questionnaire/Answer';
import Alert from '../../../components/Questionnaire/Alert';

configure({ adapter: new Adapter() });

describe('Question test', () => {
    const questionSentence = 'some question'
    const correctAnswer = 'this is correct answer'
    const variants = ['variant1', 'variant2', correctAnswer];
    let question;
    
    beforeEach(() => {
        question = shallow(<Question question={questionSentence}
            correctAnswer={correctAnswer}
            variants={variants}
            answered={answerHandler} />);

    });
   
    test('should render question correctly', () => {
        expect(question.find(Answer)).toHaveLength(3)
        expect(question.find(Alert)).toHaveLength(0)
    });

    test('should render correct answer', () => {
        question.instance().handleChoice(correctAnswer);

        expect(question.state('correct')).toBe(true);
        expect(question.find(Answer)).toHaveLength(3)
        expect(question.find(Alert)).toHaveLength(1)
    });

    test('should render incorrect answer', () => {
        question.instance().handleChoice('variant2');

        expect(question.state('correct')).toBe(false);
        expect(question.find(Answer)).toHaveLength(3)
        expect(question.find(Alert)).toHaveLength(1)
    });

    const answerHandler = (answerResult) => {}
});