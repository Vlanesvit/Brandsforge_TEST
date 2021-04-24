// 3d-card
const card = document.querySelector('.card-wrapper');

card.addEventListener('mousemove', rotate);
function rotate(event) {
  const cardContent = this.querySelector('.card-content');
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

// upload file
const uploadFile = document.querySelector('#upload-file');
const uploadBtn = document.querySelector('#upload-btn');
const uploadText = document.querySelector('.upload-text');

uploadBtn.addEventListener('click', function() {
  uploadFile.click();
});

uploadFile.addEventListener('change', function() {
  if(uploadFile.value) {
    uploadBtn.innerText = '';
    uploadText.innerText = uploadFile.value.match(/[\/\\]([\w\d\s\.\-(\)]+)$/)[1];
  };
});

// tabs 
const tabBtn = document.querySelectorAll('.tab-switch-btn');
const tabContent = document.querySelectorAll('.tab-switch-content');

tabBtn[0].classList.add('active');
tabContent[0].style.display = 'block';

function tabShow(e, tabShow) {
  for (let i = 0; i < tabBtn.length; i++) {
    tabContent[i].style.display = 'none';
    tabBtn[i].classList.remove('active');
  }

  document.getElementById(tabShow).style.display = 'block';
  e.currentTarget.classList.add('active');
}

// accordions
const accordionItem = document.querySelectorAll('.accordion-title');
const active = document.getElementsByClassName('accordion-active');

accordionItem[0].classList.add('accordion-active');

accordionItem.forEach(function(accordionItem) {
  accordionItem.addEventListener('click', function() {
    if (active.length > 0 && active[0] !== this) 
      active[0].classList.remove('accordion-active');
    this.classList.toggle('accordion-active');
  });
});


