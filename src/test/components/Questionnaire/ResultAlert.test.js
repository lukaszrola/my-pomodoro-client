import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ResultAlert from '../../../components/Questionnaire/ResultAlert';
import Alert from '../../../components/Questionnaire/Alert'

configure({adapter:new Adapter()});

describe('Result Alert test', () => {
    test('Not answered', () => {
        let resultAlert = mount(<ResultAlert answered={false}/>)

        expect(resultAlert.find(Alert).prop('alertType')).toEqual('alert-light');
    });

    test('Answered wrongly', () => {
        let resultAlert = mount(<ResultAlert answered={true} correct={false}/>)

        expect(resultAlert.find(Alert).prop('alertType')).toEqual('alert-danger');
    });

    test('Answered correctly', () => {
        let resultAlert = mount(<ResultAlert answered={true} correct={true}/>)

        expect(resultAlert.find(Alert).prop('alertType')).toEqual('alert-success');
    });    
});