function isVisible(elem) {

    const coord = elem.getBoundingClientRect()
    const viewportHeight = window.innerHeight

    let topElem = coord.top > 0 && coord.top < viewportHeight
    let bottomElem = coord.bottom < viewportHeight && coord.bottom > 0

    return topElem || bottomElem
}

window.addEventListener('scroll', function() {

    const blockVisible = document.querySelectorAll('.reveal')

    for (let block of blockVisible) {
       if(isVisible(block)){
           block.classList.add('reveal_active')
       }
    }
})