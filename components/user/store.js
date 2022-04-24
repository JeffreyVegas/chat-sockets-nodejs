// mongoose utilice las promesas en ves de las callbacks por que son mas faciles?
const User = require("./model");

async function getUsers() {
  return await User.find();
}

async function addUser(user) {
  return await User.create({
    ...user,
  });
}

async function updateUser(id, data) {
  return await User.findByIdAndUpdate(id, data, { new: true });
}

async function deleteUser(id) {
  return await User.findByIdAndRemove(id);
}

module.exports = {
  add: addUser,
  list: getUsers,
  update: updateUser,
  remove: deleteUser,
};
