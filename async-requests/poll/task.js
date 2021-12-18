let xhr = new XMLHttpRequest()
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php')
xhr.responseType = 'json'
xhr.send()

const question = document.getElementById('poll__title')
const answer = document.getElementById('poll__answers')

function getQuestion() {
    if (xhr.readyState === 4) {

        let obj = xhr.response.data
        question.innerText = obj.title

        for (let i = 0; i < obj.answers.length; i++) {

            const button = document.createElement('button')
            button.classList.add('poll_answer')
            button.innerText = obj.answers[i]
            answer.append(button)
        }

        const allAnswer = document.querySelectorAll('.poll_answer')
        for (let btn of allAnswer) {
            btn.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'))
        }
    }
}

xhr.addEventListener('readystatechange', getQuestion)