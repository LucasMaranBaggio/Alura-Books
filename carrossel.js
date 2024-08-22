const swiper = new Swiper('.swiper', {
  spaceBetween: 10,
  slidesPerView: 3,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is <= 1024px
    1024: {
        slidesPerView: 3,
        spaceBetween: 48,
    },
    // when window width is <= 1728px
    1728: {
        slidesPerView: 3,
        spaceBetween: 48,
    }
}
});