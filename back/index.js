const app = require("./src/server.js");
const PORT = 3000;
const dbConfig = require("./src/config/dbConfig.js");

dbConfig().then((res) => {
    app.listen(PORT, () => {
        console.log(`Servidor activo en el http://localhost:${PORT}`)
    });
})

