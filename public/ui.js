export function usersUI(user1, user2) {
  return `<span id="user1">${user1}</span>
            <span id="user2">${user2}</span>
           `;
}

export function chatUI(messages) {
  let messagesUI = "<ul>";
  messages.forEach((item) => {
    messagesUI += messageUI(
      item.class,
      item.user.name,
      item.message,
      item.createdAt
    );
  });
  messagesUI += "</ul>";
  return messagesUI;
}

export function messageUI(from, user, message, createdAt) {
  return `
    <li>
      <div class="msg ${from}">
        <span class="partner">${user}</span>
       ${message}
        <span class="time">${createdAt}</span>
      </div>
    </li>`;
}
