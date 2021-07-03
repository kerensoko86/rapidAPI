const express = require('express');
const app = express();
const cors = require('cors')

const axios = require('axios');
const API_KEY = 'a71bcbab';

const PORT = 4000;

app.use(cors());



app.get(`/movies/:id`,  async (req, res) => {
    const movie = await axios.get(`http://www.omdbapi.com/?i=${req.params.id}&apikey=${API_KEY}`);
    res.send(movie.data);
});


app.get('/movies',  async (req, res) => { 
    const movies = await axios.get(`http://www.omdbapi.com/?s=${req.query.name}&apikey=${API_KEY}`);
    res.send(movies.data);
});



app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!`);
});