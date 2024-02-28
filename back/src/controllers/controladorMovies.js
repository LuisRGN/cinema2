const { getMovies, postMovies } = require("../services/movieService.js")

module.exports = {
    getMovies: async (req, res) => {
        try {
            const movies = await getMovies()
            res
                .status(200)
                .json(movies);
        } catch (error) {
            res
                .status(500)
                .json({
                    message: error.message
                })
        }

    },
    postMovies: async (req, res) => {
        try {
            const { title, poster, director, year, duration, genre, rate } = req.body

            const createMovie = await postMovies({ title, poster, director, year, duration, genre, rate });
            res.status(201).json(createMovie);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
