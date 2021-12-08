const chatOpen = document.querySelector('.chat-widget')
const chatInput = document.querySelector('.chat-widget__input')

let botMessage = [
'Привет!',
'Оператор на связи!',
'Чем можем вам помочь?',
'Дождитесь ответа оператора',
'К сожалению, мы не можем вам ничем помочь'
]


chatOpen.onclick = function () {
    chatOpen.classList.add('chat-widget_active')
}

function sendMessage() {

let getDate = new Date().toString().slice(16, 21)
const randomElement = botMessage[Math.floor(Math.random() * botMessage.length)];

    document.getElementById('chat-widget__messages').innerHTML += `
    <div class="message message_client">
        <div class="message__time">${getDate}</div>
        <div class="message__text">${chatInput.value}</div>
    </div>`

    chatInput.value = '';

    function botAnswer() {

        document.getElementById('chat-widget__messages').innerHTML += `
        <div class="message">
        <div class="message__time">${getDate}</div>
        <div class="message__text">${randomElement}</div>
        </div>`

    }
    
    setTimeout(botAnswer, 1000);
}

chatInput.addEventListener('change', sendMessage)
