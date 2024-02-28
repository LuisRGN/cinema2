const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
    title: String,
    poster: String,
    director: String,
    year: Number,
    duration: String,
    genre: [typeof String],
    rate: Number
});

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie;