/* #Home Customers Logo Slider
  ======================================================= */
if (document.querySelector('.home-customers .swiper')) {
  new Swiper(".home-customers .swiper", {
    loop: true,
    freeMode: true,
    spaceBetween: 0,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 1
    },
    allowTouchMove: false,
    freeMode: true,
    speed: 5000,
    freeModeMomentum: false,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 6,
      }
    }
  });
}

/* #Home Services Slider
  ======================================================= */
if (document.querySelector('.home-services .swiper')) {
  new Swiper(".home-services .swiper", {
    slidesPerView: 1,
    breakpoints: {
      0: {
      },
      1023: {
        allowTouchMove: false
      }
    },
    pagination: {
      el: ".home-services .swiper-pagination",
    },
  });
}

/* #Reviews Slider
  ======================================================= */
if (document.querySelector('.reviews .swiper')) {
  new Swiper(".reviews .swiper", {
    slidesPerView: 1,
    breakpoints: {
      0: {
        slidesPerView: 1.25,
        loop: true,
        centeredSlides: true
      },
      1023: {
        slidesPerView: 2.4,
        loop: false,
        centeredSlides: false
      }
    },
    navigation: {
      nextEl: ".reviews .right",
      prevEl: ".reviews .left",
    },
  });
}