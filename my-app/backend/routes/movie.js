const router = require('express').Router();
let Movie = require('../models/movie.model');

router.route('/').get((req, res) => {
  Movie.find()
    .then(movies => res.json(movies))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const uniqueID = req.body.uniqueID;
  const name = req.body.name;
  const year = req.body.year;

  const newMovie = new Movie({uniqueID,name,year});

  newMovie.save()
    .then(() => res.json('Movie added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;