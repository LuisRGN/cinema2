const express = require("express");
const rutaRaiz = express.Router();
const controladorRaiz = require("../controllers/controladorRaiz")

rutaRaiz.get("/", controladorRaiz);

module.exports = rutaRaiz;