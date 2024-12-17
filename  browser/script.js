function sendMessage() {
  const userInput = document.getElementById('user-input');
  const message = userInput.value.trim();

  if (message) {
    // チャットボックスにメッセージを追加
    const chatBox = document.getElementById('chat-box');
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = message;
    chatBox.appendChild(userMessage);

    // チャットボックスを下までスクロール
    chatBox.scrollTop = chatBox.scrollHeight;

    // 入力欄をクリア
    userInput.value = '';
  }
}

// Enterキーで送信可能にする (keyupイベントを使用)
document.getElementById('user-input').addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault(); // デフォルト動作（フォーム送信）を防ぐ
    sendMessage();
  }
});
