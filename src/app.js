require("./db/connection");
const mongoose = require("mongoose");

const yargs = require("yargs");
const {addMovie, list, deleteMovie} = require("./film/filmMethods")
const {hideBin} = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const app = async () => {
  if (argv.add) {
    await addMovie({
      name: argv.title,
      actor: argv.actor
    })
  } else if (argv.list) {
    list()
    console.log("list")
  } else if (argv.delete) {
    deleteMovie()
  }
  else {
    console.log("wrong command")
  }
  mongoose.connection.close()
}

app();