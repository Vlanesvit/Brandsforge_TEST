
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


