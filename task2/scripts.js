// JavaScript to handle automatic slider animation
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Automatically transition to the next slide every 5 seconds
setInterval(nextSlide, 3000);

// Initially show the first slide
slides[currentSlide].classList.add('active');



