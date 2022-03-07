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
      0: {},
      1023: {
        allowTouchMove: false
      }
    },
    pagination: {
      el: ".home-services .swiper-pagination",
    },
  });
}

/* #Blog Services Slider
  ======================================================= */
if (document.querySelector('.blog-services .swiper')) {
  new Swiper(".blog-services .swiper", {
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      1023: {
        slidesPerView: 3
      }
    },
    pagination: {
      el: ".blog-services .swiper-pagination",
    },
  });
}

/* #Blog Post Cards Slider
  ======================================================= */
if (document.querySelector('.blog-post-cards .swiper')) {
  new Swiper(".blog-post-cards .swiper", {
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      1023: {
        slidesPerView: 3
      }
    },
    pagination: {
      el: ".blog-post-cards .swiper-pagination",
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

/* #Guide Inner Slider
  ======================================================= */
if (document.querySelector('.guide-inner-img .swiper')) {
  var gallerySwiper = new Swiper(".guide-inner-img .swiper-thumbs", {
    watchSlidesProgress: true,
    breakpoints: {
      0: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 7,
        spaceBetween: 5,
      }
    }
  });

  var thumbsSwiper = new Swiper(".guide-inner-img .swiper-gallery", {
    thumbs: {
      swiper: gallerySwiper,
    },
  });
}

/* #About Slider
  ======================================================= */
if (document.querySelector('.about-slider .swiper')) {
  new Swiper(".about-slider .swiper", {
    slidesPerView: 1,
    breakpoints: {
      0: {
        slidesPerView: 1.1,
      },
      1023: {
        slidesPerView: 1.45,
      }
    },
    navigation: {
      nextEl: ".about-slider .right",
      prevEl: ".about-slider .left",
    },
  });
}

/* #Range Slider
  ======================================================= */
var rangeSLider = new rSlider({
  target: '#rangeSlider',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  range: false,
  tooltip: false,
  scale: false,
  labels: false,
  set: [5]
});