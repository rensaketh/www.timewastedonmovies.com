const router = require('express').Router();
const Movie = require('../models/movie.model');

router.route('/').get((req, res) => {
  Movie.find()
    .then(movies => res.json(movies))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const uniqueID = req.body.uniqueID;
  const genre = req.body.genre;
  const name = req.body.name;
  const duration = Number(req.body.duration);
  const year = Number(req.body.year);
  const rating = Number(req.body.rating);

  const newMovie = new Movie({
    uniqueID,
    name,
    genre,
    duration,
    year,
    rating
  });

  newMovie.save()
  .then(() => res.json('Movie added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Movie.findById(req.params.id)
    .then(movie => res.json(movie))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Movie.findByIdAndDelete(req.params.id)
      .then(() => res.json('Movie deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;