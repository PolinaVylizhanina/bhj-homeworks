const blockRotate = document.querySelectorAll('.rotator__case')
let count = 0


function rotator() {
    count ++;
    if (count == blockRotate.length) {
        blockRotate[count - 1].classList.remove('rotator__case_active')
        count = 0
     } else {
         blockRotate[count - 1].classList.remove('rotator__case_active')
     }

    blockRotate[count].classList.add('rotator__case_active')

    blockRotate[count].style.color = blockRotate[count].dataset.color
}

setInterval(rotator, 1000)