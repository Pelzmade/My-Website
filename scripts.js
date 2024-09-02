
const button = document.getElementById('clickHereButton');


button.addEventListener('click', () => {
    
    alert('Button clicked!');
});

function buttonClick() {
    alert("Nice to meet you");
}


window.location.href = "https://pelzmade.github.io/My-Website/";



  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const carousel = document.querySelector('.carousel');
  const images = document.querySelectorAll('.carousel-image');
  let index = 0;

  function showImage(index) {
    const totalImages = images.length;
    if (index >= totalImages) {
      index = 0;
    } else if (index < 0) {
      index = totalImages - 1;
    }
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  prevButton.addEventListener('click', () => {
    index--;
    showImage(index);
  });

  nextButton.addEventListener('click', () => {
    index++;
    showImage(index);
  });

  showImage(index); // Initial display



