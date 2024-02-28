const { cardMovie, allCardsContainer, errorCard } = require("./cardMovie.js");
const { handleClick } = require("./captureMovies.js")

const axios = require("axios");

const mapeo = async () => {
    try {
        const http = await axios.get("http://localhost:3000/movies");
        const data = http.data;
        data.forEach(movieEach => {
            const card = cardMovie(movieEach);
            allCardsContainer.appendChild(card);
        });
    } catch (error) {
        errorCard(error)
    }

}
mapeo()

const addMovie = async (data) => {
    try {
        const http = await axios.post("http://localhost:3000/movies", data)
        return http.data
    } catch (error) {
        console.log(error)
    }
}
const form = document.getElementById("miForm");
form?.addEventListener("submit", (event) => {
    console.log("submit")
    handleClick(event, addMovie)
})







