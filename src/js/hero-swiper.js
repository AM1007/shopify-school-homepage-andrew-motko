import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

const HERO_SLIDER_SETTINGS = {
  direction: "horizontal",
  speed: 3000,
  autoplay: {
    delay: 9000,
    disableOnInteraction: false,
  },
  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },
};

function initHeroSwiper() {
  const swiperContainer = document.querySelector('.hero__swiper');
  
  if (!swiperContainer) {
    console.error('Hero swiper container not found');
    return;
  }

  const heroSwiper = new Swiper('.hero__swiper', {
    modules: [Pagination, Autoplay],
    ...HERO_SLIDER_SETTINGS,
    
    slidesPerView: 1,
    loop: false,
    spaceBetween: 0,
    
    init: false,
    
    pagination: {
      el: '.hero__pagination',
      clickable: true,
      type: "bullets",
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
    },
    
    observer: true,
    observeParents: true,
    
    on: {
      slideChange: function() {
        if (this.activeIndex === this.slides.length - 1) {
          setTimeout(() => {
            this.slideTo(0, this.params.speed);
          }, this.params.autoplay.delay);
        }
      },
      reachEnd: function() {
        setTimeout(() => {
          this.slideTo(0, this.params.speed);
        }, this.params.autoplay.delay);
      }
    },
  });

  setTimeout(() => {
    heroSwiper.init();
    heroSwiper.update();
  }, 100);
  
  window.heroSwiper = heroSwiper;
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(initHeroSwiper, 200);
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initHeroSwiper, 200);
  });
} else {
  setTimeout(initHeroSwiper, 200);
}
