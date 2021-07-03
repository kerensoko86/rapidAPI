
import React, { useState } from 'react';
import MoviesList from './MoviesList';
import { Button, Form, Input, Alert, Container, Row, Col } from 'reactstrap';
import '../css/Search.css';

import axios from 'axios';
const PORT = 4000;


const Search = () => {

    const [name, setName] = useState('');
    const [movies, setMovies] = useState([]);

    const [noMoviesFound, setNoMoviesFound] = useState(false);
    const searchMovie = async (e) => {
        e.preventDefault();
        const movies = await axios.get(`http://localhost:${PORT}/movies?name=${name}`);
        if (movies.data.Search) {
            setMovies(movies.data.Search);
        } else {
            setNoMoviesFound(true);
        }
        setName('');
    }


    return (
        <div className="main-container">
            <h1 className="headline">All The Movies In One Place</h1>
            <Container>
                <Row >
                    <Col className="col-4"></Col>
                    <Form onSubmit={searchMovie} className="col-4" >
                        <Input className="input" type="text" name="name" value={name} onChange={e => setName(e.target.value)} placeholder="Search a movie.." />
                        <Button color="success" onClick={searchMovie} type="button" disabled={!name} className="button" > Search </Button>
                    </Form>
                    <Col className="col-4"></Col>

                </Row>
            </Container>
            {movies.length > 0 ? <MoviesList movies={movies} /> :
                <Container>
                    <Row >
                        <Col className="col-4"></Col>
                        {noMoviesFound ? <Alert className="col-4" style={{ marginTop: '10px' }} color="warning">No Movies Found</Alert> : null}
                        <Col className="col-4"></Col>

                    </Row>
                </Container>}
        </div >
    );
}

export default Search;
