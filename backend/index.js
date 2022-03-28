const express = require('express');
const app = express();
const { get } = require('axios');
const API_KEY = 'a71bcbab';
const cors = require('cors');

const PORT = 4000;
app.use(cors());

app.get(`/movies/:id`, async (req, res) => {
  const movie = await get(
    `http://www.omdbapi.com/?i=${req.params.id}&apikey=${API_KEY}`
  );
  res.send(movie.data);
});

app.get('/movies', async (req, res) => {
  const movies = await get(
    `http://www.omdbapi.com/?s=${req.query.name}&apikey=${API_KEY}`
  );
  res.send(movies.data);
});

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!`);
});
