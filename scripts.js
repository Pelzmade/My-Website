document.addEventListener('DOMContentLoaded', function() {
  // Select all carousel containers
  const carouselContainers = document.querySelectorAll('.carousel-container');

  // Loop through each container
  carouselContainers.forEach(container => {
    const carousel = container.querySelector('.carousel');
    const images = carousel.querySelectorAll('.carousel-image');
    const prevButton = container.querySelector('.prev');
    const nextButton = container.querySelector('.next');
    let currentIndex = 0;

    // Function to update the carousel position
    function updateCarousel() {
      if (images.length === 0) return; // Prevent errors if no images are present
      
      const imageWidth = images[0].clientWidth; // Use the width of the first image
      const offset = -currentIndex * imageWidth; // Adjust offset based on image width
      carousel.style.transform = `translateX(${offset}px)`; // Use px instead of %
    }

    // Initialize carousel position
    updateCarousel();

    // Add event listeners for the previous and next buttons
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
      updateCarousel();
    });

    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
      updateCarousel();
    });

    // Optional: Handle window resize
    window.addEventListener('resize', updateCarousel);
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






