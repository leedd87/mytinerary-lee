require("dotenv").config();
require("./config/database");
const express = require("express");
const Router = require("./routes/routes");
const cors = require("cors");
const PORT = 4000;

const app = express();

app.set("port", PORT); //no es obligatorio pero buena practica

//middlewares
app.use(cors());
app.use(express.json());
app.use("/api", Router);

app.get("/", (req, res) => {
	res.send("SERVER READY");
});

app.listen(PORT, () => {
	console.log("SERVER RUNNING ON PORT:" + PORT);
});
