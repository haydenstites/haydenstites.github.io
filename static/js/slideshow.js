document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const slideWrapper = document.querySelector('.slide-wrapper');
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');
  
  let currentIndex = 0;
  const totalSlides = slides.length;
  const slideWidth = slides[0].clientWidth;
  
  function goToSlide(index) {
    if (index < 0 || index >= totalSlides) return;
    slideWrapper.style.transform = `translateX(${-index * slideWidth}px)`;
    currentIndex = index;
  }
  
  function slideNext() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
      currentIndex = 0;
    }
    goToSlide(currentIndex);
  }
  
  function slidePrev() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalSlides - 1;
    }
    goToSlide(currentIndex);
  }
  
  arrowLeft.addEventListener('click', slidePrev);
  arrowRight.addEventListener('click', slideNext);
});