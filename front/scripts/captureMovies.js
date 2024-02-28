class DataInput {
    constructor() {
        this.data = [];
    }

    validateMovie(data) {
        if (!data.title || !data.director || !data.year || !data.genre[0] || !data.rate || !data.duration || !data.poster) {
            return "Todos los campos deben estar llenos";
        }

        if (data.director.length < 5 || data.director.length > 20) {
            return "El nombre del director debe tener entre 5 y 20 caracteres";
        }

        if (isNaN(data.year) || data.year < 1895 || data.year > 2026) {
            return "El año debe estar entre 1895 y 2026";
        }

        const rate = parseFloat(data.rate);
        if (isNaN(rate) || rate < 1 || rate > 10) {
            return "La calificación debe estar entre 1 y 10";
        }

        if (!data.poster.includes("https://")) {
            return "El enlace del poster debe ser una URL válida";
        }

        return "Datos válidos";
    }
}

const handleClick = async (event, addMovie) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const director = document.getElementById("director").value;
    const year = document.getElementById("year").value;
    const genre = document.getElementById("genre").value.split(" ");
    const rate = document.getElementById("rate").value;
    const duration = document.getElementById("duration").value;
    const poster = document.getElementById("poster").value;

    const dataInput = new DataInput();

    const validationMessage = dataInput.validateMovie({ title, director, year, genre, rate, duration, poster });

    if (validationMessage === "Datos válidos") {
        const response = await addMovie({ title, director, year, genre, rate, duration, poster });
        dataInput.data.push(response);
        alert("Datos agregados correctamente");
        document.getElementById("title").value = "";
        document.getElementById("director").value = "";
        document.getElementById("year").value = "";
        document.getElementById("genre").value = "";
        document.getElementById("rate").value = "";
        document.getElementById("duration").value = "";
        document.getElementById("poster").value = "";
    } else {
        console.error("Error de validación:", validationMessage);
        alert(validationMessage);
    }
}

module.exports = { handleClick }; 
