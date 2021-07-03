import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import '../css/MovieDetails.css';


const PORT = 4000;

const MovieDetails = () => {

    const [movie, setMovie] = useState({});


    const params = useParams();

    useEffect(() => {
        async function fetchData() {
            const movie = await axios.get(`http://localhost:${PORT}/movies/${params.imdbID}`);
            setMovie(movie.data);
        }
        fetchData();
    }, []);


    const Ratings = movie.Ratings;
    var Poster = movie.Poster;

    if (Poster === 'N/A') {
        Poster = 'https://www.100daysofrealfood.com/wp-content/uploads/2011/06/popcorn1-500x500.jpg';
    }
    return (
        <div>
            <Link to='/movies' style={{ cursor: 'pointer', textDecoration: 'none', color: 'yellow' }}><h4>&#x2190; Back To Search</h4> </Link>
            <ListGroup style={{ marginTop: '30px' }}>
                <section className="flex">
                    <div>
                        <ListGroupItem active ><span className="movie-name">{movie.Title}</span></ListGroupItem>
                        <ListGroupItem><span className="title">Actors:</span> <span className="text" >{movie.Actors}</span></ListGroupItem>
                        <ListGroupItem><span className="title">Awards:</span> {movie.Awards}</ListGroupItem>
                        <ListGroupItem><span className="title">Country:</span> {movie.Country}  </ListGroupItem>
                        <ListGroupItem><span className="title">Director:</span> {movie.Director}</ListGroupItem>
                        <ListGroupItem> <span className="title">Genre:</span> {movie.Genre}</ListGroupItem>
                        <ListGroupItem><span className="title">Language:</span> {movie.Language}</ListGroupItem>
                        <ListGroupItem><span className="title">Metascore:</span> {movie.Metascore}</ListGroupItem>
                        <ListGroupItem><span className="title">Plot:</span> {movie.Plot}</ListGroupItem>
                        <ListGroupItem><span className="title">Production:</span> {movie.Production}</ListGroupItem>
                        <ListGroupItem><span className="title">Rated:</span> {movie.Rated}</ListGroupItem>
                        <ListGroupItem><span className="title">Ratings:</span> {Ratings ? Ratings.map((rating, index) => <span ><span className="number"> ({index + 1})</span> {rating.Source}: {rating.Value} ; </span>) : null}</ListGroupItem>
                        <ListGroupItem><span className="title">Released:</span> {movie.Released}</ListGroupItem>
                        <ListGroupItem><span className="title">Runtime:</span> {movie.Runtime}</ListGroupItem>
                        <ListGroupItem><span className="title">imdbRating: </span>{movie.imdbRating}</ListGroupItem>
                        <ListGroupItem><span className="title">imdbVotes:</span>{movie.imdbVotes}</ListGroupItem>
                        <ListGroupItem><span className="title">Year:</span>{movie.Year}</ListGroupItem>
                        <ListGroupItem><span className="title">Writer: </span>{movie.Writer} </ListGroupItem>
                        {movie.Website ? <ListGroupItem><span className="title">Website:</span>{movie.Website}</ListGroupItem> : null}
                    </div>
                    <div className="card-image">
                        <ListGroupItem><img src={Poster} alt={movie.Title} /></ListGroupItem>
                    </div>
                </section>
            </ListGroup >
        </div >
    );
}

export default MovieDetails;

