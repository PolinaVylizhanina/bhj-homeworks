const modal = document.getElementById('subscribe-modal')
const closeBtn = document.querySelector('.modal__close')

function showModal() {
    let result = getCookie('modalClose')
    if (!result) {
        modal.classList.add('modal_active')
    }
}

function closeModal() {
    modal.classList.remove('modal_active')
    document.cookie = 'modalClose=True'
}

const getCookie = (name) => {
    const value = "; " + document.cookie
    let parts = value.split("; " + name + "=")
    if (parts.length === 2) {
        return parts.pop().split(";").shift()
    }
}

document.addEventListener('DOMContentLoaded', showModal)
closeBtn.addEventListener('click', closeModal)

