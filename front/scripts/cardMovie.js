const allCardsContainer = document.getElementById('allCards');

function cardMovie({ title, year, director, duration, genre, rate, poster }) {
    const card = document.createElement('div');
    card.classList.add("card");
    card.innerHTML = `
    <img src="${poster} alt="${title}" class="img"/>
    <a href="#pordefinir">${title}</a>
    <p class="bold">Director</p> ${director}
    <p class="bold">Año</p> ${year}
    <p class="bold">Género</p> ${genre.join(", ")}
    <p class="bold">Calificaión</p> ${rate}
    <p class="bold">Duración</p> ${duration}
    `

    allCardsContainer.appendChild(card)

    return card
}

function errorCard(err) {
    const errorNet = document.getElementById("allCards");
    errorNet.classList.add("error");
    errorNet.innerHTML = err.message

    allCardsContainer?.appendChild(errorNet)

    return errorNet
}



module.exports = { cardMovie, allCardsContainer, errorCard };

