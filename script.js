const images = document.querySelectorAll('#image-viewer img');
const arrows = document.querySelectorAll('.arrow');
const dots = document.querySelectorAll('.dot');
let currentImageIndex = 0;

function showImage(index) {
  images.forEach((image) => {
    image.style.display = 'none';
  });
  images[index].style.display = 'block';
  dots.forEach((dot) => {
    dot.classList.remove('active');
  });
  dots[index].classList.add('active');
  currentImageIndex = index;
}

arrows.forEach((arrow) => {
  arrow.addEventListener('click', () => {
    if (arrow.classList.contains('left')) {
      currentImageIndex = (currentImageIndex + images.length - 1) % images.length;
    } else {
      currentImageIndex = (currentImageIndex + 1) % images.length;
    }
    showImage(currentImageIndex);
  });
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showImage(index);
  });
});

showImage(currentImageIndex);