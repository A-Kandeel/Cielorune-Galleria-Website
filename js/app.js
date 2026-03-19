// Landing Album
var slideIndex = 0;
var slides = document.querySelectorAll('.slide');

function showSlides() {
slideIndex++;
if (slideIndex >= slides.length) {
slideIndex = 0;
}

for (var i = 0; i < slides.length; i++) {
slides[i].classList.remove('show');
}

slides[slideIndex].classList.add('show');
}

setInterval(showSlides, 5000);