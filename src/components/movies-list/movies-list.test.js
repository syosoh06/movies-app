import React from "react";
import Enzyme, { shallow } from "enzyme";
import MoviesList from "./movies-list";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const movies = [
    {
        name: 'abc',
        id: 123,
        poster_path: 'abcd'
    }
];

describe("MoviesList component", () => {
    test("renders correctly and has the neccessary child components", () => {
        const wrapper = shallow(<MoviesList movies = {movies}/>);

        expect(wrapper.type()).toBe('div');
        expect(wrapper.childAt(0).type()).toBe('img');
        expect(wrapper.childAt(0).props().alt).toBe('Helpful alt text');
        expect(wrapper.childAt(0).props().src)
            .toBe('http://image.tmdb.org/t/p/w185/'+ movies[0].poster_path);
    });
});