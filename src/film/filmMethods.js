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