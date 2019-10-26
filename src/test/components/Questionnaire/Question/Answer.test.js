import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Choice from "../../../../components/Questionnaire/Question/Choice";
import ButtonOutline from "../../../../components/Utils/Buttons/ButtonOutline";
import ButtonSuccess from "../../../../components/Utils/Buttons/ButtonSuccess";
import ButtonFail from "../../../../components/Utils/Buttons/ButtonFail";

configure({ adapter: new Adapter() });

describe("Answer rendering tests", () => {
  test("Should display not marked answer", () => {
    const choice = shallow(<Choice selectionResult="none" />);

    expect(choice.find(ButtonOutline)).toHaveLength(1);
  });
  test("Should display correct answer", () => {
    const choice = shallow(<Choice selectionResult="success" />);

    expect(choice.find(ButtonSuccess)).toHaveLength(1);
  });

  test("Should display incorrect answer", () => {
    const choice = shallow(<Choice selectionResult="fail" />);

    expect(choice.find(ButtonFail)).toHaveLength(1);
  });
});
