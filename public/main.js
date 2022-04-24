import { loadMessages, sendChat, addMessage } from "./socket.js";
import { usersUI, chatUI } from "./ui.js";

let currentUser = "";
const chatId = "625d956711102c05e6bb20aa";
const user2Id = {
  createdAt: "2022-04-18T15:25:58.698Z",
  email: "jef@novalida.com",
  name: "jeffrey",
  username: "je",
  _id: "625d835e90ee05a8e3e32a0a",
};

const user1Id = {
  createdAt: "2022-04-18T15:25:58.698Z",
  email: "pebrave@novalida.io",
  name: "elpp",
  username: "myusername",
  _id: "625d837790ee05a8e3e32a0c",
};

const chatBox = document.querySelector(".chats");
const form = document.querySelector(".sendBox");
const inputMessage = document.querySelector("input");
const contentUsers = document.querySelector(".users");

window.addEventListener("DOMContentLoaded", () => {
  sendChat(chatId);
  loadMessages(renderChat);
  renderUser(user1Id.name, user2Id.name);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addMessage(currentUser, chatId, inputMessage.value);
  inputMessage.value = "";
});

function renderChat(list = []) {
  //to order by date
  list.sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );

  // add class css
  const newList = list.map((item) => {
    if (item.user.name == user1Id.name) {
      return { ...item, class: "you" };
    } else {
      return { ...item, class: "him" };
    }
  });

  chatBox.innerHTML = chatUI(newList);
}

function renderUser(userOne, userTwo) {
  const spans = usersUI(userOne, userTwo);
  contentUsers.innerHTML = spans;
  // start
  user1.style.color = "red";

  document.getElementById("user1").addEventListener("click", (e) => {
    user1.style.color = "red";
    user2.style.color = "black";
    currentUser = user1Id._id;
  });

  document.getElementById("user2").addEventListener("click", (e) => {
    user2.style.color = "red";
    user1.style.color = "black";
    currentUser = user2Id._id;
  });
}
