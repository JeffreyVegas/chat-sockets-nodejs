// mongoose utilice las promesas en ves de las callbacks por que son mas faciles?
const Message = require("./model");

async function getMessages(chat) {
  // const filter = user.user
  //   ? { user: { $regex: new RegExp(`^${user.user}$`, "i") } }
  //   : user;
  return await Message.find({ chat }).populate("user").exec();
}

async function addMenssage(message) {
  return await Message.create({
    ...message,
  });
}
async function updateMenssage(id, message) {
  return await Message.findByIdAndUpdate(id, { message }, { new: true });
}

async function deleteMessage(id) {
  return await Message.findByIdAndRemove(id);
}

module.exports = {
  add: addMenssage,
  list: getMessages,
  update: updateMenssage,
  remove: deleteMessage,
};
