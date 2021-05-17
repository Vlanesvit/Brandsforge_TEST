// 3d-card
const card = document.querySelector('.card-wrapper');

card.addEventListener('mousemove', rotate);
card.addEventListener('mouseleave', returnPosition);

function rotate(event) {
  const cardContent = this.querySelector('.card-content');
  cardContent.style.pointerEvents = "none";
  const halfHeight = cardContent.offsetHeight / 2;

  cardContent.style.transform = 'rotateX(' + - (event.offsetY - halfHeight) / 10 + 'deg) rotateY(' + (event.offsetX  - halfHeight) / 10 + 'deg)'

  // parallax
  const birdLeft = document.querySelector('.card-bird_left'),
        speedBirdLeft = birdLeft.getAttribute('data-speed');
  const birdRight = document.querySelector('.card-bird_right'),
        speedBirdRight = birdRight.getAttribute('data-speed');
  birdLeft.style.transform = `translateX(${event.clientX*speedBirdLeft/-1000}px)`
  birdRight.style.transform = `translateX(${event.clientX*speedBirdRight/1000}px)`
}

function returnPosition(event) {
  const cardContent = this.querySelector('.card-content');
  cardContent.style.transform = `rotateX(${event.offsetY = 0}deg) rotateY(${event.offsetX = 0}deg)` 
}