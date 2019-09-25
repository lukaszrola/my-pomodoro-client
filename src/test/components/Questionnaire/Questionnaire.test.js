import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Questionnaire from '../../../components/Questionnaire/Questionnaire';
import Question from '../../../components/Questionnaire/Question';
import FinalPage from '../../../components/Questionnaire/FinalPage';
import mockAxios from 'jest-mock-axios';


configure({adapter: new Adapter()});
describe('Questionnaire test', () => {
    let questionnaire;
    beforeEach(() => {
        mockAxios.reset();
        questionnaire = shallow(<Questionnaire/>);
        let firstRequestInfo = mockAxios.lastReqGet();
        mockAxios.mockResponse(axiosResponse,firstRequestInfo);     
    });

    test('Axios correctly process response', async () => {        
        expect(questionnaire.state().numberOfQuestions).toBe(2);
        expect(questionnaire.state().questions.length).toBe(2);
        expect(questionnaire.state().remainingQuestions).toBe(2);
        expect(questionnaire.state().numberOfAtempts).toBe(1);
        expect(questionnaire.find(Question)).toHaveLength(1);
    });

    test('One correct answer', async () => {
        questionnaire.instance().handleAnswerChoice(true);

        expect(questionnaire.state().numberOfQuestions).toBe(2);
        expect(questionnaire.state().questions.length).toBe(2);
        expect(questionnaire.state().remainingQuestions).toBe(1);
        expect(questionnaire.state().numberOfAtempts).toBe(2);
        expect(questionnaire.find(Question)).toHaveLength(1);
    });

    test('One incorrect answer', async () => {
        questionnaire.instance().handleAnswerChoice(false);

        expect(questionnaire.state().numberOfQuestions).toBe(2);
        expect(questionnaire.state().questions.length).toBe(2);
        expect(questionnaire.state().remainingQuestions).toBe(2);
        expect(questionnaire.state().numberOfAtempts).toBe(2);
        expect(questionnaire.find(Question)).toHaveLength(1);
    });

    test('Score is calculated correctly', async () => {
        questionnaire.instance().handleAnswerChoice(false);
        questionnaire.instance().handleAnswerChoice(true);
        questionnaire.instance().handleAnswerChoice(false);
        questionnaire.instance().handleAnswerChoice(true);

        expect(questionnaire.state().numberOfQuestions).toBe(2);
        expect(questionnaire.state().questions.length).toBe(2);
        expect(questionnaire.state().remainingQuestions).toBe(0);
        expect(questionnaire.state().numberOfAtempts).toBe(4);
        expect(questionnaire.instance().calculateFinalScore()).toBe(0.5);
        expect(questionnaire.find(FinalPage)).toHaveLength(1);
    });



    const axiosResponse ={data: [
        {
          "answer": "dog",
          "question": "pies",
          "variants": [
            "mouse",
            "cat",
            "bird"
          ]
        },
        {
          "answer": "apple",
          "question": "jablko",
          "variants": [
            "cherry",
            "pineaple",
            "blueberry"
          ]
        }
      ]};
});