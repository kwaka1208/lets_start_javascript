document.addEventListener("DOMContentLoaded", function () {
  const userInput = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');

  document.querySelector('button').addEventListener('click', sendMessage);

  userInput.addEventListener("keyup", function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  });

  function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
      const userMessage = document.createElement('div');
      userMessage.className = 'message user-message';
      userMessage.textContent = message;
      chatBox.appendChild(userMessage);

      chatBox.scrollTop = chatBox.scrollHeight; // スクロールを下に移動
      userInput.value = ''; // 入力欄をクリア
    }
  }
});
