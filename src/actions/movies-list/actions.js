import * as actionTypes from '../action-types';
import Axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3/movie/top_rated';

const fetchMoviesSuccess = (movies) => {
    return {
        type: actionTypes.FETCH_MOVIES_SUCCESS,
        movies
    }
};

export const fetchMovies = () => {
    return (dispatch) => {
        return Axios.get(apiUrl, {
            params: {
                api_key: '8a014e47ea97a6a0b43b5b15c31ad050'
            }
        }).then(response => {
                dispatch(fetchMoviesSuccess(response.data.results ? response.data.results : []));
            })
            .catch(error => {
                throw(error);
            });
    };
};
