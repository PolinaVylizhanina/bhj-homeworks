function DropMenu() {

    document.querySelector('.dropdown__list').classList.toggle('dropdown__list_active')

}

document.querySelector('.dropdown__value').addEventListener('click', DropMenu)

document.querySelector('.dropdown__list').addEventListener('click', (event) => {

    if (event.target.className != '.dropdown__value') {
        event.preventDefault();
        document.querySelector('.dropdown__value').textContent = event.target.textContent;
        document.querySelector('.dropdown__list').classList.remove('dropdown__list_active')
    }       
})



