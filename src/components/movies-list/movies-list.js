import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function MoviesList(props) {
    useEffect(() => {
        props.fetchMovies();
    });

    return (<div>
        {
            props.movies.map(movie =>
                <img
                    key={movie.id}
                    src={'http://image.tmdb.org/t/p/w185/'+ movie.poster_path}
                    alt='Helpful alt text'/>)
        }
    </div>);
}

MoviesList.defaultProps = {
    movies: [],
    fetchMovies: () => {}
};
MoviesList.propTypes = {
    movies: PropTypes.array,
    fetchMovies: PropTypes.func
};

export default MoviesList;
