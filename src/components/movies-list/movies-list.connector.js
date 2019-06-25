import { connect } from 'react-redux';

import MoviesList from './movies-list';
import * as movieActions from '../../actions/movies-list/actions';

export const mapStateToProps = (state) => ({
    movies: state.movies
});

export const mapDispatchToProps = dispatch => ({
    fetchMovies: () => dispatch(movieActions.fetchMovies())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MoviesList);
