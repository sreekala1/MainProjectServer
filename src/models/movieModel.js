const mongoose = require("mongoose")


const movieSchema = new mongoose.Schema({
    movieTitle: String,
    movieImage: String,
    ratings: Number
})

const MovieModel = mongoose.model("movie", movieSchema)

module.exports = MovieModel