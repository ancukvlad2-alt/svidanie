// 🔴 ВАЖНО: ЗАМЕНИТЕ ЭТИ ДВЕ СТРОЧКИ НА СВОИ ДАННЫЕ!
const BOT_TOKEN = '8980298699:AAEvNCilIVIhwSzLyUlEKbaY0iESiNz4sw4';  // Например: '1234567890:ABCdefGHIjklmNOPqrstUVWXYZ'
const CHAT_ID = '903693845';  // Например: '987654321'

document.getElementById('sendButton').addEventListener('click', async function() {
    const datetime = document.getElementById('datetime').value;
    const place = document.getElementById('place').value;
    const messageDiv = document.getElementById('message');
    
    messageDiv.style.display = 'block';
    messageDiv.innerHTML = '⏳ Отправляю...';
    messageDiv.className = '';
    
    const text = `💖 НОВОЕ ПРИГЛАШЕНИЕ! 💖
    
✨ ОТВЕТ: ДА! Согласен(на) на свидание!

🗓️ Дата и время: ${datetime}
📍 Место встречи: ${place}

❤️ Жди подтверждения! ❤️`;
    
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: text
            })
        });
        
        const result = await response.json();
        
        if (result.ok) {
            messageDiv.className = 'success';
            messageDiv.innerHTML = '❤️ УРА! Я очень жду! Скоро напишу тебе в Telegram ❤️';
        } else {
            throw new Error('Ошибка');
        }
    } catch (error) {
        messageDiv.className = 'error';
        messageDiv.innerHTML = '❌ Ошибка отправки. Попробуй еще раз ❤️';
    }
});