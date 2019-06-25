import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import MoviesListConnector from './movies-list.connector';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

configure({adapter: new Adapter()});

const initialState = {
    movies: [1,2,3,4]
};
const buildStore = configureStore([thunk]);

describe('Movies List', () => {
    let store;
    let wrapper;

    beforeEach(() => {
        store = buildStore(initialState);
        wrapper = shallow(<MoviesListConnector store={store} />).dive();
    });
    it('passes movies from state', () => {
        expect(wrapper.props().movies).toBe(initialState.movies);
    });
});