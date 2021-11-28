const tabPage = Array.from(document.getElementsByClassName('tab'))
let content = document.getElementsByClassName('tab__content')

for (let tabs of tabPage) {
    tabs.onclick = function () {

        for (let allTab of tabPage) {
            allTab.classList.remove('tab_active')
        }

        for (let allContent of content) {
            allContent.classList.remove('tab__content_active')
        }

        let i = tabPage.indexOf(this)
        tabPage[i].classList.add('tab_active');
        content[i].classList.add('tab__content_active') 
    }
}

