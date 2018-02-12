var menu = document.querySelector('.menu');
var hamburger_inner = document.querySelector('.hamburger__inner');
var nav = document.querySelector('.nav');
menu.addEventListener('click', function() {
    hamburger_inner.classList.toggle('is-active');
    nav.classList.toggle('is-visible');
});


$(".feedback-slider-js").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '.feedback-slider__prev',
    nextArrow: '.feedback-slider__next'
});

