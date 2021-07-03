import React from 'react';
import MovieItem from './MovieItem';

import '../css/MoviesList.css';

const MoviesList = (props) => {
    const { movies } = props;

    return (
        <div className="movies-containter">
            {movies.map((movie, index) => <MovieItem key={index} movie={movie} />)}
        </div>
    );
}

export default MoviesList;