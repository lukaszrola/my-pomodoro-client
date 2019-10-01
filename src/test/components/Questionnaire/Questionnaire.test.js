import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Questionnaire from '../../../components/Questionnaire/Questionnaire';
import ChoiceQuestion from '../../../components/Questionnaire/Question/ChoiceQuestion';
import WritingQuestion from '../../../components/Questionnaire/Question/WritingQuestion';
import FinalPage from '../../../components/Questionnaire/FinalPage';
import mockAxios from 'jest-mock-axios';

configure({ adapter: new Adapter() });
describe('Questionnaire test', () => {
  let questionnaire;
  beforeEach(() => {
    setUp("/motherLanguageChoiceQuestions");
  });

  const setUp = (category) => {
    mockAxios.reset();
    questionnaire = shallow(<Questionnaire category={category} />);
    let firstRequestInfo = mockAxios.lastReqGet();
    mockAxios.mockResponse(axiosResponse, firstRequestInfo);

  };

  test('Choice Question correctly rendered', async () => {
    expect(questionnaire.state().numberOfQuestions).toBe(2);
    expect(questionnaire.state().questions.length).toBe(2);
    expect(questionnaire.state().remainingQuestions).toBe(2);
    expect(questionnaire.state().numberOfAtempts).toBe(1);
    expect(questionnaire.find(ChoiceQuestion)).toHaveLength(1);
  });

  test('Writing Question correctly rendered', async () => {
    setUp("/writingQuestions");

    expect(questionnaire.state().numberOfQuestions).toBe(2);
    expect(questionnaire.state().questions.length).toBe(2);
    expect(questionnaire.state().remainingQuestions).toBe(2);
    expect(questionnaire.state().numberOfAtempts).toBe(1);
    expect(questionnaire.find(WritingQuestion)).toHaveLength(1);
  });

  test('One correct answer', async () => {
    questionnaire.instance().checkAnswer(true);

    expect(questionnaire.state().numberOfQuestions).toBe(2);
    expect(questionnaire.state().questions.length).toBe(2);
    expect(questionnaire.state().remainingQuestions).toBe(1);
    expect(questionnaire.state().numberOfAtempts).toBe(2);
    expect(questionnaire.find(ChoiceQuestion)).toHaveLength(1);
  });

  test('One incorrect answer', async () => {
    questionnaire.instance().checkAnswer(false);

    expect(questionnaire.state().numberOfQuestions).toBe(2);
    expect(questionnaire.state().questions.length).toBe(2);
    expect(questionnaire.state().remainingQuestions).toBe(2);
    expect(questionnaire.state().numberOfAtempts).toBe(2);
    expect(questionnaire.find(ChoiceQuestion)).toHaveLength(1);
  });

  test('Score is calculated correctly', async () => {
    questionnaire.instance().checkAnswer(false);
    questionnaire.instance().checkAnswer(true);
    questionnaire.instance().checkAnswer(false);
    questionnaire.instance().checkAnswer(true);

    expect(questionnaire.state().numberOfQuestions).toBe(2);
    expect(questionnaire.state().questions.length).toBe(2);
    expect(questionnaire.state().remainingQuestions).toBe(0);
    expect(questionnaire.state().numberOfAtempts).toBe(4);
    expect(questionnaire.instance().calculateFinalScore()).toBe(0.5);
    expect(questionnaire.find(FinalPage)).toHaveLength(1);
  });



  const axiosResponse = {
    data: [
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
    ]
  };
});