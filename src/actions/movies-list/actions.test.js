import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from './actions';
import * as actionTypes from '../action-types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const moviesData = {
        results: [1,2,3,4]
};

describe('fetchMovies actions', () => {

    beforeEach(function () {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('creates FETCH_MOVIES_SUCCESS after successfuly fetching movies', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();

            request.respondWith({
                status: 200,
                response: moviesData,
            });
        });

        const expectedActions = [
            { type: actionTypes.FETCH_MOVIES_SUCCESS, movies: moviesData.results },
        ];

        const store = mockStore({ restaurants: [] });

        return store.dispatch(actions.fetchMovies()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});