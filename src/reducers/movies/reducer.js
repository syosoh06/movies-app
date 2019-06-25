import * as actionTypes from '../../actions/action-types';

const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_MOVIES_SUCCESS:
            return action.movies;
        default:
            return state;
    }
};

export default moviesReducer;