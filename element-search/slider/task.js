const slides = document.querySelectorAll('.slider__item');
const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');
let currentSlide = 0;

function goToSlide(n) {

    slides[currentSlide].className = 'slider__item';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slider__item slider__item_active';
    
}

next.onclick = function() {

    goToSlide(currentSlide + 1);

};

prev.onclick = function() 
{
    goToSlide(currentSlide - 1);

};
