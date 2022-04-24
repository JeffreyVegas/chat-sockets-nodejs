const { get, add } = require("./store");

/* here you have to validate */
function addChat(users) {
  return new Promise((resolve, reject) => {
    if (users.length == 0) return reject("There's not users");
    if (users.length < 2) return reject("min two users");
    resolve(add(users));
  });
}

function getChat(id) {
  return get(id);
}

module.exports = { addChat, getChat };
