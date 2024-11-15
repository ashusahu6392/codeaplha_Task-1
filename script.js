const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('main-image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;
  });
});

prevButton.addEventListener('click', () => {
  const currentImage = mainImage.src;
  const currentIndex = thumbnails.findIndex((thumbnail) => thumbnail.src === currentImage);
  if (currentIndex > 0) {
    mainImage.src = thumbnails[currentIndex - 1].src;
    mainImage.alt = thumbnails[currentIndex - 1].alt;
  }
});

nextButton.addEventListener('click', () => {
  const currentImage = mainImage.src;
  const currentIndex = thumbnails.findIndex((thumbnail) => thumbnail.src === currentImage);
  if (currentIndex < thumbnails.length - 1) {
    mainImage.src = thumbnails[currentIndex + 1].src;
    mainImage.alt = thumbnails[currentIndex + 1].alt;
  }
});
