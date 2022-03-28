import React from 'react';
import { Link } from 'react-router-dom';

import '../css/MovieItem.css';


const MovieItem = ({ movie }) => {
    let { Title, Year, imdbID, Poster } = movie;

    if (Poster === 'N/A') {
        Poster = 'https://www.100daysofrealfood.com/wp-content/uploads/2011/06/popcorn1-500x500.jpg';
    }
    return (
        <Link to={`movies/${imdbID}`} style={{ cursor: 'pointer', textDecoration: 'none' }}>
            <div className="movie-container">
                <div className="card-image"><img src={Poster} className=" poster" alt={Title} /></div>
                <div className="card"> <h4 className="title" > {Title}</h4>
                    <h4 className="year">({Year})</h4></div>
            </div>
        </Link >
    );
}

export default MovieItem;