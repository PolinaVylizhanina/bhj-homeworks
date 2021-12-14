const allHints = document.querySelectorAll('.has-tooltip')

function tipsActive(elem) {

    let coordinates = this.getBoundingClientRect()
    elem.preventDefault()
    
    let hintElement = document.createElement('div')
    hintElement.className = 'tooltip'
    hintElement.innerText = this.title
    hintElement.style.left = `${coordinates.x}px`
    hintElement.style.top = `${coordinates.y + 20}px`
    this.append(hintElement)

    
    const activHint = document.querySelector('.tooltip_active')
    if(activHint) {       
        activHint.classList.remove('tooltip_active');                 
        return          
    }    

    this.querySelector('.tooltip').classList.toggle('tooltip_active')
     
    //let textHint = this.title

   // this.insertAdjacentHTML('afterend', `<div class="tooltip tooltip_active">${textHint}</div>`)
    

}

for (let hints of allHints) {
    hints.addEventListener('click', tipsActive)
}