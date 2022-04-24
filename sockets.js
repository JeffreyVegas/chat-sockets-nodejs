const socketIO = require("socket.io");
// const Message = require("./components/message/model");
const { getMessages, addMenssage } = require("./components/message/controller");
const socket = {};

function connect(server) {
  socket.io = socketIO(server);

  socket.io.on("connection", (currentSocket) => {
    console.log("new socket connected: ", currentSocket.id);

    async function sendMessages(data) {
      const { chat } = data;
      const messages = await getMessages(chat);
      socket.io.emit("server:loadMessages", messages);
    }

    currentSocket.on("client:loadMessages", async (data) => {
      // console.log("esto es id chat");
      sendMessages(data);
    });

    currentSocket.on("client:addMessage", async (data) => {
      // const {chat,user,message} = data;
      await addMenssage(data);
      sendMessages({ chat: data.chat });
    });
  });
}

module.exports = {
  connect,
  socket,
};
