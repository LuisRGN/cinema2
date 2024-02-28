const express = require("express");
const rutaMovies = express.Router();
const { getMovies, postMovies } = require("../controllers/controladorMovies.js");
const movieValidate = require("../middlewares/movieValidate.js");
const movieError = require("../middlewares/movieError.js");

rutaMovies.get("/", getMovies);
rutaMovies.post("/", movieValidate, postMovies, movieError);

module.exports = rutaMovies;