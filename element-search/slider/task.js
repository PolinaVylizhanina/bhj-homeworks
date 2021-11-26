const next = document.querySelector('.slider__arrow_next')
const prev = document.querySelector('.slider__arrow_prev')
const slides = document.querySelectorAll('.slider__item')
let current = 0

function moveSlide(n) {

    slides[current].className = 'slider__item';
    current = (n+slides.length)%slides.length;
    slides[current].className = 'slider__item slider__item_active';
    
}

next.onclick = function() {

    moveSlide(current + 1)

};

prev.onclick = function() {

    moveSlide(current - 1)

};
