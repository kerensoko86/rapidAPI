import React from 'react';
import MovieItem from './MovieItem';

import '../css/MoviesList.css';

const MoviesList = ({ movies }) => {
    return (
        <div className="movies-containter">
            {movies.map((movie) => <MovieItem key={movie.imdbID} movie={movie} />)}
        </div>
    );
}

export default MoviesList;