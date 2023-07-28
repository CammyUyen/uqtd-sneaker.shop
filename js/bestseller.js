const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
let isMouseDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
    isMouseDown = false;
});

carousel.addEventListener('mouseup', () => {
    isMouseDown = false;
});

carousel.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 3;
    carousel.scrollLeft = scrollLeft - walk;
});