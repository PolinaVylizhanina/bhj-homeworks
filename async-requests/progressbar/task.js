const upload = document.getElementById('form')
const progress = document.getElementById('progress')

function submitForm(e) {

    e.preventDefault();
    let xhr = new XMLHttpRequest()

    xhr.onprogress = function(e) {
        progress.value = e.loaded / 1000000;
    }

    let formData = new FormData(upload)
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php')
    xhr.send(formData)

}
form.addEventListener('submit', submitForm)