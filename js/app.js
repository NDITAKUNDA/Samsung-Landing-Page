// Code for activating or deactivating the menu list
document.addEventListener("DOMContentLoaded", function() {
  const menuButton = document.getElementById("menu");
  menuButton.addEventListener("click", function() {
    const ul = document.getElementById("menu-items");
    ul.classList.toggle("active");
    ul.classList.toggle("inactive");
  });
});


// Code for the couresel
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange slides horizontally
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

// Next and previous buttons
const nextButton = document.getElementById("next-btn");
nextButton.textContent = ">";
nextButton.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  if (!nextSlide) {
    nextSlide = slides[slides.length - 1];
  }
  currentSlide.classList.remove("current-slide");
  nextSlide.classList.add("current-slide");
});

const prevButton = document.getElementById("prev-btn");
prevButton.textContent = "<";
prevButton.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  if (!prevSlide) {
    prevSlide = slides[1]
  }
  currentSlide.classList.remove("current-slide");
  prevSlide.classList.add("current-slide");
});


