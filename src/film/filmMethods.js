// const mongoose = require('mongoose');
const Film = require('./filmModel');

exports.addMovie = async (newFilm) => {
  try {
    let movie = new Film({
      name: newFilm.title,
      actor: newFilm.actor,
      duration: newFilm.duration,
      year: newFilm.year,
      genre: newFilm.year
    });
    await movie.save();
    console.log("Movie was created")
  } catch (error) {
    console.log(error)
  }
}

exports.list = async () => {
  try {
    const allMovies = await Film.find({});
    console.log(allMovies)
  } catch (error) {
    console.log(error)
  }
}

exports.deleteMovie = async (movie) => {
  try {
    await Film.deleteOne({id: movie._id});
    console.log("Movie was deleted")
  } catch (error) {
    console.log(error)
  }
}

exports.updateMovie = async (movie) => {
  try {
    await Film.updateOne(
      {_id: movie._id},
      { $set: 
        {name: movie.title,
        actor: movie.actor,
        duration: movie.duration,
        year: movie.year,
        genre: movie.year}
      }
    );
    console.log(movie._id)
    console.log("Movie was updated")
  } catch (error) {
    console.log(error)
  }
}
