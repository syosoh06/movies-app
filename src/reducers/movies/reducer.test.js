import moviesReducer from './reducer'
import * as actionTypes from '../../actions/action-types';

describe('movies reducer', () => {
    it('should return the initial state', () => {
        expect(moviesReducer(undefined, {})).toEqual([])
    });

    it('should handle FETCH_RESTAURANTS_BY_NAME_SUCCESS', () => {
        expect(moviesReducer([1,2,3,4], {
            type: actionTypes.FETCH_MOVIES_SUCCESS,
            movies: [4,5,6,7,8]
        })).toEqual([4,5,6,7,8]);
    })
});