require("./db/connection");
const mongoose = require("mongoose");

const yargs = require("yargs");
const {addMovie, list, deleteMovie, updateMovie} = require("./film/filmMethods")
const {hideBin} = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const app = async () => {
  if (argv.add) {
    await addMovie(argv)
  } else if (argv.list) {
    await list()
    console.log("list")
  } else if (argv.delete) {
    await deleteMovie(argv)
  } else if (argv.update) {
    await updateMovie(argv)
  } else {
    console.log("wrong command")
  }
  mongoose.connection.close()
}

app();