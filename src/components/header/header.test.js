import React from "react";
import Enzyme, { shallow } from "enzyme";
import Header from "./header";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Header component", () => {
    test("renders correctly and has the neccessary child components", () => {
        const wrapper = shallow(<Header />);

        expect(wrapper.type()).toBe('div');
        expect(wrapper.childAt(0).type()).toBe('div');
        expect(wrapper.childAt(0).text()).toBe('Pop Movies');
    });
});