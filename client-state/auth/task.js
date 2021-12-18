const blockForm = document.getElementById('signin')
const signinForm = document.getElementById('signin__form')
const welcom = document.getElementById('welcome')
const userId = document.getElementById('user_id')

function subForm (e) {
    e.preventDefault();

    let formData = new FormData(signinForm)
    let xhr = new XMLHttpRequest()

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php')
    xhr.responseType = 'json'
    xhr.addEventListener('readystatechange', function() {
        if(xhr.readyState === 4){
            let resp = xhr.response
            if(resp.success === true) {
                localStorage.userId = resp.user_id
                userId.innerText = resp.user_id
                blockForm.classList.remove('signin_active')
                welcom.classList.add('welcome_active')
            } else {
                alert('Неверный логин/пароль')
            }
        }
    })
    xhr.send(formData)
}

function showForm(){
    if(localStorage.userId) {
        userId.innerText = localStorage.userId
        welcom.classList.add('welcome_active')
        blockForm.classList.remove('signin_active')
    } else {
        blockForm.classList.add('signin_active')
    }
}

document.addEventListener('DOMContentLoaded', showForm)
document.addEventListener('submit', subForm)