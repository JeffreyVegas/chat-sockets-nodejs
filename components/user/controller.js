const { list, add, update, remove } = require("./store");

function addUser(dataUser) {
  return new Promise((resolve, reject) => {
    if (!dataUser) return reject("incorrect dataUser");
    resolve(add(dataUser));
  });
}

function getUser() {
  return list();
}

function updateUser(id, data) {
  return new Promise((resolve, reject) => {
    if (Object.entries(data).length < 1 || !id) {
      console.log("[message controller] invalidate data or user");
      return reject("invalidate data or user");
    }
    resolve(update(id, data));
  });
}

function deleteUser(id) {
  return new Promise((resolve, reject) => {
    if (!id) return reject("invalidate id");
    resolve(remove(id));
  });
}

module.exports = { addUser, getUser, updateUser, deleteUser };
