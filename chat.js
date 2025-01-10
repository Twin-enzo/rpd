const socket = io.connect('http://localhost:3000'); // Adjust server URL if needed.

const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const messagesContainer = document.getElementById('messages');

// Send Message
sendButton.addEventListener('click', () => {
  const message = messageInput.value.trim();
  if (message) {
    socket.emit('send_message', message);
    addMessageToUI('You', message);
    messageInput.value = '';
  }
});

// Receive Message
socket.on('receive_message', (data) => {
  addMessageToUI(data.username, data.message);
});

// Add Message to UI
function addMessageToUI(username, message) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  messageDiv.innerHTML = `
    <strong>${username}:</strong>
    <p>${message}</p>
  `;
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll to the latest message.
}
