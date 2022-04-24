const { list, add, update, remove } = require("./store");
// const { socket } = require("../../sockets");

function addMenssage({ user, message, chat }) {
  return new Promise((resolve, reject) => {
    if (!user || !message || !chat) {
      console.log("[message controller] incorrect Data");
      reject("incorrect Data");
      return;
    }
    const fullMenssage = {
      user,
      message,
      chat,
    };
    // socket.io.emit("message", fullMenssage);
    resolve(add(fullMenssage));
  });
}

function getMessages(chat) {
  return list(chat);
}

function updateMessage(id, message) {
  return new Promise((resolve, reject) => {
    if (!message || !id) {
      console.log("[message controller] invalidate data");
      reject("invalidate data");
    }
    resolve(update(id, message));
  });
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) return reject("invalidate id");
    resolve(remove(id));
  });
}

module.exports = { addMenssage, getMessages, updateMessage, deleteMessage };
