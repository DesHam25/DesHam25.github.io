var swiper = new Swiper('.project-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // autoHeight: true,
  pagination: {
    el: '.project-slider__pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
  },
});
