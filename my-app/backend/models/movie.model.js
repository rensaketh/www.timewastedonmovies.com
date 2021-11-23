const mongoose = require('mongoose');

const Model = mongoose.Schema;

const movieModel = new Model({
 //need to add move params
  uniqueID: { type: String, required: true },
  name: { type: String, required: true },
  year: { type: Number, required: true },
}, {
  timestamps: true,
});

const Movie = mongoose.model('Movie', movieModel);

module.exports = Movie;