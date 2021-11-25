const menuLink = document.querySelectorAll('.menu__link');

menuLink.forEach(link => {
    link.onclick = function () {

        if(link.parentElement.querySelector('.menu_sub')) {
            
            const activeMenu = document.querySelector('.menu_active')

            if (activeMenu) {
                activeMenu.classList.remove('menu_active')
            }

            link.parentElement.querySelector('.menu_sub').classList.add('menu_active')
            return false
        }
    }
})

    