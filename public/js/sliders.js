const homeCatSwiper = new Swiper('.homeCatSwiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 6,
  //centeredSlides: true,
  spaceBetween: 30,
  loop: false,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  // Enable debugger
  debugger: true,
});


const mostPopulerSwiper = new Swiper('.mostPopulerSwiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 5,
  //centeredSlides: true,
  spaceBetween: 30,
  loop: false,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  // Enable debugger
  debugger: true,
});

const logedinCatSwiper = new Swiper('.logedinCatSwiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 7,
  //centeredSlides: true,
  spaceBetween: 15,
  loop: false,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  // Enable debugger
  debugger: true,
});

