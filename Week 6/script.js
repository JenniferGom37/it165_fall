const images = [
"image1.jpg.jpg",
"image2.jpg.jpg",
"image3.jpg.jpg",
"image4.jpg.jpg",
"image5.jpg.webp"
];

let currentIndex = 0;

const slide = document.getElementById("slide");

function showSlide() {
slide.src = images[currentIndex];
}

function nextSlide() {
currentIndex = (currentIndex + 1) % images.length;
showSlide();
}

function previousSlide() {
currentIndex = (currentIndex - 1 + images.length) % images.length;
showSlide();
}