const express = require("express")
const router = express.Router()
const movies = require("../data/moviesData")
const {
    staticResponseController, 
    moviesListController, 
    editRatingController, 
    deleteMovieController, 
    createMovieController,
    contactController,
    moviesDetailController
} = require("../controllers/movieControllers")

const authenticationMiddleware = require("../middlewares/authenticationMiddleware")

router.get("/", staticResponseController)

router.get("/movies-list", moviesListController)
router.get("/movies-list/:id", moviesDetailController)

router.put("/movies-rating", editRatingController)

router.delete("/movies-delete", deleteMovieController)

router.post("/movies-create", createMovieController)

router.get("/contact", contactController)

module.exports = router