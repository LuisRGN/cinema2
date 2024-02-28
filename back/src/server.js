const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const rutaRaiz = require("./routes/rutaRaiz.js");
const rutaMovies = require("./routes/rutaMovies.js");



const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());


app.use("/", rutaRaiz);
app.use("/movies", rutaMovies);

module.exports = app;