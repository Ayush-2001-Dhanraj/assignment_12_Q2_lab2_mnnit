const express = require("express");
const cors = require("cors");

const homeRoutes = require("./routes/homes.router");

const spin_server = require("./db/connect");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use("/api/v1/homes", homeRoutes);

spin_server(app, PORT);
