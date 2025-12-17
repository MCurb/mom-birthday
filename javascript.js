const slidesOne = [...document.querySelectorAll(".carousel-one li")];
const slidesTwo = [...document.querySelectorAll(".carousel-two li")];
const slidesThree = [...document.querySelectorAll(".carousel-three li")]
const carousels = [slidesOne, slidesTwo, slidesThree];
let currentActiveIndex = 0;
let intervalId;

//Init
function initializeSlider() {
  nextSlide();
}

intervalId = setInterval(() => {
  initializeSlider();
}, 1000);

function nextSlide() {
    for (const slide of slidesOne) {
      if (slide.classList.contains("active-slide")) {
        if (currentActiveIndex >= slidesOne.length - 1) {
          currentActiveIndex = 0;
          showSlide();
          break;
        }
        currentActiveIndex++;
        showSlide();
        break;
      }
    }
}

//Helper Functions

function restartSlideshow() {
  clearInterval(intervalId);

  intervalId = setInterval(() => {
    initializeSlider();
  }, 5000);
}

function showSlide() {
  removeActiveSlide();
  for (const slides of carousels) {
    slides[currentActiveIndex].classList.add("active-slide");
  }
  restartSlideshow();
}

function removeActiveSlide() {
  for (const slides of carousels) {
    slides.forEach((slide) => {
      slide.classList.remove("active-slide");
    });
  }
}
