// mongoose utilice las promesas en ves de las callbacks por que son mas faciles?
const Chat = require("./model");

async function getChat(id) {
  return await Chat.findById(id).populate("users").exec();
}

async function addChat(users) {
  return await Chat.create({
    users,
  });
}

module.exports = {
  add: addChat,
  get: getChat,
};
