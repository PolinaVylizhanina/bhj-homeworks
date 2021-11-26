const menuLink = document.querySelectorAll('.menu__link');

menuLink.forEach(link => {
    link.onclick = function () {

        const subMenu = link.closest('.menu__item').querySelector('.menu_sub')

        if(subMenu) {            
            const activeMenu = document.querySelector('.menu_active')

            if (activeMenu) {
                activeMenu.classList.remove('menu_active')                
            }

            subMenu.classList.add('menu_active')
            return false
        }
    }
})