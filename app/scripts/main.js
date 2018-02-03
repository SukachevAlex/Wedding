var menu = document.querySelector('.menu');
var hamburger__inner = document.querySelector('.hamburger__inner');
var nav = document.querySelector('.nav');
menu.addEventListener('click', function() {
    hamburger__inner.classList.toggle('is-active');
    nav.classList.toggle('is-visible');
});