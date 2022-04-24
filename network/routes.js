const message = require("../components/message/network");
const user = require("../components/user/network");
const chat = require("../components/chat/network");

const routes = function (server) {
  server.use("/message", message);
  server.use("/user", user);
  server.use("/chat", chat);
};

module.exports = routes;

// 625d835e90ee05a8e3e32a0a
// 625d837790ee05a8e3e32a0c
