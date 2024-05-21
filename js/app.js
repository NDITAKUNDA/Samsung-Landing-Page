// Code for activating or deactivating the menu list
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu");
  menuButton.addEventListener("click", function () {
    const ul = document.getElementById("menu-items");
    ul.classList.toggle("active");
    ul.classList.toggle("inactive");
  });
});

// Code to generate the hero section
document.addEventListener('DOMContentLoaded', () => {
  const carouselData = [
    {
      classes: "flex carousel-item bg-cover carousel-6",
      title: "Gifted and Talented",
      description: "The new Samsung Neo QLED QN90C delivers pristine contrast, color and design,rewarding you at every glance.",
      buttons: [{ text: "Buy Now", href: "/index.html" }]
    },
    {
      classes: "flex carousel-item bg-cover carousel-5",
      title: "Get up to $600 instant trade-in credit",
      description: "Toward Galaxy Book3 Ultra. Cracked screen? No problem. Get up to $135 instant cracked screen trade-in credit.",
      buttons: [
        { text: "Learn More", href: "/index.html" },
        { text: "Buy Now", href: "/index.html", additionalClass: "black" }
      ]
    },
    {
      classes: "flex carousel-item bg-cover carousel-4",
      title: "Save up to $400 with Spring Cleaning Savings",
      description: "Welcome spring with big savings on select Jet vacuums to give your home a stylish, smart upgrade.",
      buttons: [{ text: "Shop now", href: "/index.html", additionalClass: "black" }]
    },
    {
      classes: "flex carousel-item bg-cover current-slide carousel-1",
      title: "Save up to $850 with select Galaxy S23 Ultra",
      description: "Get up to $750 instant trade-in credit, $100 instant Samsung Credit and 50% off 1 year of Samsung Care+.",
      buttons: [
        { text: "Learn More", href: "/index.html" },
        { text: "Buy Now", href: "/index.html" }
      ]
    },
    {
      classes: "flex carousel-item bg-cover carousel-2",
      title: "Save up to $900 with Galaxy S23 Ultra",
      description: "Via trade-in bill credits. Terms apply. Get $100 instant Samsung Credit and 50% off 1 year of Samsung Care+.",
      buttons: [{ text: "Buy Now", href: "/index.html", additionalClass: "black" }]
    },
    {
      classes: "flex carousel-item bg-cover carousel-3",
      title: "Bundle and Save up to $1000",
      description: "Get a select Bespoke Ultra Capacity Washer and Dryer Set. From $2,198 $3,298. Save up to 20% of your household energy bill with our ENERGY STAR certified products.",
      buttons: [{ text: "Buy Now", href: "/index.html", additionalClass: "black" }]
    }
  ];

  const carouselTrack = document.createElement('div');
  carouselTrack.className = 'carousel-track';

  carouselData.forEach(item => {
    const carouselItem = document.createElement('div');
    carouselItem.className = item.classes;

    const innerDiv = document.createElement('div');

    if (item.title) {
      const h2 = document.createElement('h2');
      h2.className = 'font-samsung-sharp';
      h2.textContent = item.title;
      innerDiv.appendChild(h2);
    }

    const pDescription = document.createElement('p');
    pDescription.className = 'font-samsung-sans';
    pDescription.textContent = item.description;
    innerDiv.appendChild(pDescription);

    const heroButtons = document.createElement('div');
    heroButtons.className = 'hero-buttons';

    item.buttons.forEach(button => {
      const a = document.createElement('a');
      a.className = 'font-samsung-sans';
      if (button.additionalClass) {
        a.classList.add(button.additionalClass);
      }
      a.href = button.href;
      a.textContent = button.text;
      heroButtons.appendChild(a);
    });

    innerDiv.appendChild(heroButtons);
    carouselItem.appendChild(innerDiv);
    carouselTrack.appendChild(carouselItem);
  });

  document.querySelector('.main-couresel-container').appendChild(carouselTrack);
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