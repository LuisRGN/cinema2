const Movie = require("../models/Movie.js")

module.exports = {
    getMovies: async () => {
        const movies = await Movie.find();
        return movies
    },
    postMovies: async ({ title, poster, director, year, duration, genre, rate }) => {
        const newMovie = new Movie({
            title, poster, director, year, duration, genre, rate
        })
        const saveMovie = await newMovie.save();
        return saveMovie;
    }
};





// const Movie = require("./classMovie.js");


// const tempData = {
//     movies: [
//         new Movie("Guardians of the Galaxy Vol. 2",
//             "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
//             "James Gunn",
//             2017,
//             ["Action", "Adventure", "Comedy"],
//             7.7,
//             "2h 16min"
//         ),
//         new Movie("Star Wars: Episode IV - A New Hope",
//             "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
//             "George Lucas",
//             1977,
//             ["Action", "Adventure", "Fantasy", "Sci-Fi"],
//             8.7,
//             "2h 1min",
//         ),
//         new Movie("The Lord of the Rings: The Fellowship of the Ring",
//             "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
//             "Peter Jackson",
//             2001,
//             ["Action", "Adventure", "Drama", "Fantasy"],
//             8.8,
//             "2h 58min",
//         ),
//         new Movie("Spider-Man: No Way Home",
//             "https://m.media-amazon.com/images/I/815zgARVaRL._AC_SY879_.jpg",
//             "Jon Watts",
//             2021,
//             ["Action", "Fantastic", "Superheros", "Comic"],
//             7.0,
//             "2h 28min",
//         ),
//         new Movie(
//             "Venom: There will be carnage",
//             "https://image.tmdb.org/t/p/original/hwzzcppAz4MaBZM061XYJZlYp9S.jpg",
//             "Andy Serkis",
//             2021,
//             ["Fantastic", "Action", "Comedy", "Comic"],
//             4.6,
//             "1h 37min",
//         ),

//         new Movie(
//             "Halloween Kills",
//             "https://image.tmdb.org/t/p/original/eqPP1niWpfzsnIsYYG2AJE0msVh.jpg",
//             "David Gordon Green",
//             2021,
//             ["Terror", "Thriller", "Serial killers"],
//             5.0,
//             "1h 45min",
//         ),
//     ]
// };