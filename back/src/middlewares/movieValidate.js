module.exports = (req, res, next) => {
    const { title, poster, director, year, duration, genre, rate } = req.body;
    if (!title || !poster || !director || !year || !duration || !genre || !rate) {
        throw Error("Middlewares: Todos los campos deben estar llenos")
    }
    next();
}