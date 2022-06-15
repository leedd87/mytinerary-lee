require("dotenv").config();
require("./config/database");
const express = require("express");
const Router = require("./routes/routes");
const cors = require("cors");
const PORT = 4000;

const app = express();

app.set("port", PORT); //no es obligatorio pero buena practica

//middlewares
app.use(cors()); //=> app.use es un middleware y va en primer lugar antes de las rutas
app.use(express.json());
app.use("/api", Router);

app.listen(PORT, () => {
	console.log("SERVIDOR CORRIENDO DESDE:" + PORT);
});
