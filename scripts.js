
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel');
  const images = document.querySelectorAll('.carousel-image');
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  document.querySelector('.prev').addEventListener('click', function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateCarousel();
  });

  document.querySelector('.next').addEventListener('click', function() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
  });
});

let currentIndex = 0;

const carouselContainers = document.querySelectorAll('.photo-composite-carousel-container');
carouselContainers.forEach(container => {
  const carousel = container.querySelector('.photo-composite-carousel');
  const images = carousel.querySelectorAll('.carousel-image');
  const prevButton = container.querySelector('.prev2');
  const nextButton = container.querySelector('.next2');

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  });
});


const button = document.getElementById('clickHereButton');


button.addEventListener('click', () => {
    
    alert('Button clicked!');
});

function buttonClick() {
    alert("Nice to meet you");
}


window.location.href = "https://pelzmade.github.io/My-Website/";






