const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 30,
  },
  actor: {
    type: String,
    default: 'Actor is unknown',
  }
});

// const filmModel
module.exports = mongoose.model('Movies', filmSchema);