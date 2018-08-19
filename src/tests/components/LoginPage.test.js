import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "../../components/LoginPage";

test("should render LoginPage component correctly", () => {
  const wrapper = shallow(<LoginPage startLogin={() => {}}/>);
  expect(wrapper).toMatchSnapshot();
});