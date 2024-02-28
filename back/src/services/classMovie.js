class Movie {
    constructor(title, poster, director, year, duration, genre, rate) {

        if (!title || !poster || !director) {
            throw new Error(`title, poster y director son requeridos`)
        }
        if (typeof title !== "string") {
            throw new Error(`title debe ser un string`)
        }
        this.title = title;
        this.poster = poster;
        this.director = director;
        this.year = year;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
    }
}
module.exports = Movie;
