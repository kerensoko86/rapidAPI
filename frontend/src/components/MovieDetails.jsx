import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import '../css/MovieDetails.css';


const PORT = 4000;

const MovieDetails = () => {

    const [movie, setMovie] = useState([]);
    const params = useParams();

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(`http://localhost:${PORT}/movies/${params.imdbID}`);
            result?.data && setMovie(result.data);
        }
        fetchData();
    }, [params.imdbID]);


    return (
        <>
            <Link to='/movies' className='linkWrapper'><h4>&#x2190; Back To Search</h4> </Link>
            {
                movie && <ListGroup>
                    {Object.keys(movie).map((value, index) => <ListGroupItem key={index}><span style={{ fontWeight: 'bold' }}>{value}: </span>
                        {Array.isArray(movie[value]) ? movie[value].map((arr, index) => {
                            return <div key={index} style={{ marginLeft: '5px' }}>Source: {arr.Source}, Value:{arr.Value} </div>
                        }) : value === 'Poster' ? <img src={movie[value]} alt="movie" /> : movie[value]}
                    </ListGroupItem>)}
                </ListGroup>
            }
        </ >
    );
}

export default MovieDetails;

