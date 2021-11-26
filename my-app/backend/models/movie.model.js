const mongoose = require('mongoose');

const Model = mongoose.Schema;

const movieSchema = new Model({
  uniqueID: { type: String, required: true,unique: true },
  name: { type: String, required: true },
  genre: { type: String, required: true },
  duration: { type: Number, required: true },//need to find correct type
  year: { type: Number, required: true },
  rating: { type: Number, required: true },
}, {
  timestamps: true,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;