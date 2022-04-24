const express = require("express");
const app = express();
const server = require("http").Server(app);

const bodyParser = require("body-parser");
const connectDB = require("./dataBase");
const routes = require("./network/routes");
const socket = require("./sockets");
require("dotenv").config();

connectDB();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

socket.connect(server);
routes(app);

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).json({
    success: false,
    message: "error mdfk",
  });
});

app.use(express.static(__dirname + "/public"));

server.listen(3000, () => {
  console.log("server run in port 3000");
});

//https://github.com/CodingCarlos/backend-node-platzi
