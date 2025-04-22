// === Настройки ===
const chat_id = '72914392';
const token = '7965268409:AAHi4op-q6N4inni6c2eu_CLHqG0D7HASs4';

// === Функция отправки ===
function sendMessageToTelegram(message) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const data = {
    chat_id: chat_id,
    text: message,
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => console.log("Успешно отправлено в Telegram:", data))
  .catch(error => console.error("Ошибка при отправке:", error));
}
