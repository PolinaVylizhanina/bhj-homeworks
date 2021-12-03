const fontSizeMenu = document.querySelectorAll('.font-size')
const content = document.querySelector('.book')
const colorText = document.querySelectorAll('.color')

function changeTextSize() {

    const activeSizeMenu = document.querySelector('.font-size_active')
    activeSizeMenu.classList.remove('font-size_active');
    event.preventDefault();

    this.classList.add('font-size_active')

    let sizeText = this.dataset.size

    if (sizeText === 'small') {
        content.className = 'book book_fs-small'
    } else if (sizeText === 'big') {
        content.className = 'book book_fs-big'
    } else {
        content.className = 'book'
    }
}

// function changeColorText() {

//     const activeColor = document.querySelector('.color_active')
//     activeColor.classList.remove('.color_active')
//     event.preventDefault();
//     this.classList.add('color_active')

//     let color = this.dataset.textColor

//     if( color === 'black') {
//       content.className = 'book book_color-black'
//     } else if (color === 'gray') {
//         content.className = 'book book_color-gray'
//     } else if (color === 'whitesmoke') {
//         content.className = 'book book_color-whitesmoke'
//     } else {
//         content.className = 'book'
//     }
// }

for (let font of fontSizeMenu) {
    font.onclick = changeTextSize
}
// for (let color of colorText) {
//     color.onclick = changeColorText
// }
  
