// var socket = io.connect();
var socket = io.connect();

export const sendChat = (chat) => {
  socket.emit("client:loadMessages", { chat });
};

export const loadMessages = (callback) => {
  socket.on("server:loadMessages", callback);
};

export const addMessage = (user, chat, message) => {
  socket.emit("client:addMessage", { user, chat, message });
};
