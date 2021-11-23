//will work on this eventually
const mongoose = require('mongoose');

const Model = mongoose.Schema;

const userSchema = new Model({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 8
  },
  password: {

  },
  //add movie section in Schema
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;