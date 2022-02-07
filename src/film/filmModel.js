const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 30,
    required: true
  },
  actor: {
    type: String,
    default: 'Actor is unknown'
  },
  duration: {
    type: Number
  },
  year: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  }
});

// const filmModel
module.exports = mongoose.model('Movies', filmSchema);