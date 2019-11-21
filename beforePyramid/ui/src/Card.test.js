import React from "react";
import enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Card from "./Card";
import Adapter from 'enzyme-adapter-react-16.1';
enzyme.configure({ adapter: new Adapter() });

let container = null;
beforeEach(() => {

});

afterEach(() => {

});

describe("Card Tests", function(){
  it("Card renders properly with correct title @unitTest", () => {
    //act(() => {
      //render(<Card title="abc" />, container);
    //});
    //expect(container.textContent).to("Click");
  const wrapper = shallow(<Card title="abc"/>);
  wrapper.find('button').simulate('click');
  expect(wrapper.contains("abc")).toEqual(true);
  });
})
