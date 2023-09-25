const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Default parameters
  slidesPerView: 3,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // autoplay: {
  //   delay: 3000,
  // },

  // breakpoints: {
  //   1000: {
  //     slidesPerView: 3,
  //     slidesPerGroup: 3
  //   }
  // }
});