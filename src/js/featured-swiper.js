import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const FEATURED_SLIDER_SETTINGS = {
  direction: "horizontal",
  speed: 600,
  a11y: {
    prevSlideMessage: "Previous product",
    nextSlideMessage: "Next product",
  },
};

function initFeaturedSwiper() {
  const swiperContainer = document.querySelector('.featured__swiper');
  
  if (!swiperContainer) {
    console.error('Featured swiper container not found');
    return;
  }

  const featuredSwiper = new Swiper('.featured__swiper', {
    modules: [Navigation],
    ...FEATURED_SLIDER_SETTINGS,
    
    slidesPerView: 'auto',
    spaceBetween: 16,
    centeredSlides: false,
    
    navigation: {
      nextEl: '.featured__nav--next',
      prevEl: '.featured__nav--prev',
    },
    
    on: {
      init: function() {
        console.log('Featured swiper initialized');
        this.update();
      },
      slideChange: function() {
        console.log('Featured slide changed to:', this.activeIndex);
      },
      reachEnd: function() {
        console.log('Featured swiper reached end');
      },
      reachBeginning: function() {
        console.log('Featured swiper at beginning');
      }
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    observer: true,
    observeParents: true,
    watchSlidesProgress: true,
  });

  window.featuredSwiper = featuredSwiper;
  
  return featuredSwiper;
}

function initWhenReady() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFeaturedSwiper);
  } else {
    setTimeout(initFeaturedSwiper, 300);
  }
}

initWhenReady();

export { initFeaturedSwiper, FEATURED_SLIDER_SETTINGS };