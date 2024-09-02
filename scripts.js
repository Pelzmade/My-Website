
const button = document.getElementById('clickHereButton');


button.addEventListener('click', () => {
    
    alert('Button clicked!');
});

function buttonClick() {
    alert("Nice to meet you");
}


window.location.href = "https://pelzmade.github.io/My-Website/";



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




