var mySwiper = new Swiper('.swiper-container', {
 slidesPerView: 1,
 loop: true,
 navigation: {
  nextEl: '.arrow',
  },
 breakpoints: {
   550: {
   slidesPerView: 2  }
 }
});

var menuButton = document.querySelector('.line');
var menu = document.querySelector('.header');
menuButton.addEventListener('click', function() {
  menuButton.classList.toggle('line-active');
  menu.classList.toggle('header-active');
});

