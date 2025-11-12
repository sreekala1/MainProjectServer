const movies = require("../data/moviesData")
const MovieModel = require("../models/movieModel")

const staticResponseController = (req, res)=>{
    res.send("<h1>Homepage</h1> <img src = '' />")
}

const moviesListController = async (req, res) => {
    const movies = await MovieModel.find()
    console.log("Movies fetched from database:")
    console.log(movies)
    res.json(movies)
}

const moviesDetailController = async (req, res) => {
    const movieID = req.params.id
    const movie = await MovieModel.findById(movieID)
    res.json(movie)
}

const editRatingController = async (req, res) => {
    console.log(req.user)
    console.log(req.body)
    const id = req.body.id

    const movie = await MovieModel.findById(id)
    movie.ratings = req.body.newRating
    await movie.save()

    res.send("Review added successfully")
}

const deleteMovieController = async (req, res) => {
    console.log(req.query)
    await MovieModel.findByIdAndDelete(req.query.id)
    res.send("Deleted successfully")
}

const createMovieController = async (req, res) => {
    console.log("Working")
    console.log(req.body)
    const newMovie = {
        movieTitle: req.body.movieTitle,
        movieImage: req.body.image,
        ratings: req.body.ratings
    }
    
    const newMovieDocument = new MovieModel(newMovie)
    await newMovieDocument.save()
    
    res.send("Movie added successfully")
}

const contactController = (req, res) => {
    res.send("Contact page")
}

module.exports = {
    staticResponseController, 
    moviesListController, 
    editRatingController, 
    deleteMovieController, 
    createMovieController,
    contactController,
    moviesDetailController
}