const modalMain = document.getElementById('modal_main');
const closeModal = document.querySelectorAll('.modal__close');
const modalSuccess = document.getElementById('modal_success');
const allModals = document.querySelectorAll('.modal')


modalMain.classList.add('modal_active')

closeModal.forEach(element => {

    element.onclick = function() {
        
        if (element.classList.contains('show-success')) {
            modalSuccess.classList.add('modal_active');
            modalMain.classList.remove('modal_active')
        } else {
            allModals.forEach( element => {
                element.classList.remove('modal_active')
            })
        }
    }    
});
