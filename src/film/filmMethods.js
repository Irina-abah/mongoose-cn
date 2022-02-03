const mongoose = require('mongoose');
const Film = require('./filmModel');

exports.addMovie = async (newFilm) => {
  try {
    let movie = new Film(newFilm);
    await movie.save();
    console.log("Movie was created")
  } catch (error) {
    console.log(error)
  }
}

exports.list = async () => {
  try {
    const allMovies = await Film.find({})
    console.log(allMovies)
  } catch (error) {
    console.log(error)
  }
}

exports.deleteMovie = async (newFilm) => {
  try {
    const allMovies = await Film.find({})
    console.log(allMovies)
    await allMovies.findById({id: newFilm._id}).deleteOne()
    console.log("Movie was deleted")
  } catch (error) {
    console.log(error)
  }
}
