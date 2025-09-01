import Swiper from 'swiper';
import { Thumbs } from 'swiper/modules';

import image1 from '/img/product/image1.webp';
import image2 from '/img/product/image2.webp';
import image3 from '/img/product/image3.webp';
import image4 from '/img/product/image4.webp';
import image5 from '/img/product/image5.webp';
import image6 from '/img/product/image6.webp';
import image7 from '/img/product/image7.webp';
import image8 from '/img/product/image8.webp';
import image9 from '/img/product/image9.webp';
import image10 from '/img/product/image10.webp';
import image11 from '/img/product/image11.webp';
import image12 from '/img/product/image12.webp';
import image13 from '/img/product/image13.webp';
import image14 from '/img/product/image14.webp';
import image15 from '/img/product/image15.webp';

import image1_2x from '/img/product/image1@2x.webp';
import image2_2x from '/img/product/image2@2x.webp';
import image3_2x from '/img/product/image3@2x.webp';
import image4_2x from '/img/product/image4@2x.webp';
import image5_2x from '/img/product/image5@2x.webp';
import image6_2x from '/img/product/image6@2x.webp';
import image7_2x from '/img/product/image7@2x.webp';
import image8_2x from '/img/product/image8@2x.webp';
import image9_2x from '/img/product/image9@2x.webp';
import image10_2x from '/img/product/image10@2x.webp';
import image11_2x from '/img/product/image11@2x.webp';
import image12_2x from '/img/product/image12@2x.webp';
import image13_2x from '/img/product/image13@2x.webp';
import image14_2x from '/img/product/image14@2x.webp';
import image15_2x from '/img/product/image15@2x.webp';

class ProductGallery {
  constructor() {
    this.productImages = {
      color1: [
        { src: image1, srcset: image1_2x },
        { src: image2, srcset: image2_2x },
        { src: image3, srcset: image3_2x },
        { src: image4, srcset: image4_2x },
        { src: image5, srcset: image5_2x }
      ],
      color2: [
        { src: image6, srcset: image6_2x },
        { src: image7, srcset: image7_2x },
        { src: image8, srcset: image8_2x },
        { src: image9, srcset: image9_2x },
        { src: image10, srcset: image10_2x }
      ],
      color3: [
        { src: image11, srcset: image11_2x },
        { src: image12, srcset: image12_2x },
        { src: image13, srcset: image13_2x },
        { src: image14, srcset: image14_2x },
        { src: image15, srcset: image15_2x }
      ]
    };

    this.swiperMainContainer = null;
    this.swiperThumbsContainer = null;
    this.swiperMain = null;
    this.swiperThumbs = null;
    
    this.init();
  }

  init() {
    this.swiperMainContainer = document.querySelector('.product__swiper-main');
    this.swiperThumbsContainer = document.querySelector('.product__swiper-thumbs');

    if (!this.swiperMainContainer || !this.swiperThumbsContainer) {
      console.error('Product gallery containers not found');
      return;
    }

    this.initSwipers();
    this.initColorSelection();
    this.initSizeSelection();
    this.updateSliders('color1');
  }

  initSwipers() {
    this.swiperThumbs = new Swiper('.product__swiper-thumbs', {
      freeMode: true,
      watchSlidesProgress: true,
      slidesPerView: 'auto',
      spaceBetween: 16,
      breakpoints: {
        1280: {
          slidesPerView: 5,
          spaceBetween: 0,
          direction: 'vertical',
        },
      },
    });

    this.swiperMain = new Swiper('.product__swiper-main', {
      modules: [Thumbs],
      slidesPerView: 1,
      spaceBetween: 0,
      thumbs: {
        swiper: this.swiperThumbs,
      },
      touchRatio: 1,
      touchAngle: 45,
      grabCursor: true,
    });
  }

  initColorSelection() {
    const colorButtons = document.querySelectorAll('.product__color-btn');
    
    const defaultColorBtn = document.querySelector('.product__color-btn[data-color="color1"]');
    if (defaultColorBtn) {
      defaultColorBtn.classList.add('product__selected');
    }

    colorButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        colorButtons.forEach(b => b.classList.remove('product__selected'));
        
        btn.classList.add('product__selected');
        
        const color = btn.dataset.color;
        this.updateSliders(color);
      });
    });
  }

  initSizeSelection() {
    const sizeButtons = document.querySelectorAll('.product__size-btn');
    
    if (sizeButtons.length > 0) {
      sizeButtons[0].classList.add('product__selected');
    }

    sizeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        sizeButtons.forEach(b => b.classList.remove('product__selected'));
        
        btn.classList.add('product__selected');
      });
    });
  }

  updateSliders(colorKey) {
    const images = this.productImages[colorKey];

    if (!images) {
      console.error(`No images found for color: ${colorKey}`);
      return;
    }

    this.swiperMainContainer.classList.add('product__fade-out');
    this.swiperThumbsContainer.classList.add('product__fade-out');

    setTimeout(() => {
      if (typeof this.swiperMain.removeAllSlides === 'function') {
        this.swiperMain.removeAllSlides();
        this.swiperThumbs.removeAllSlides();
      } else {
        this.swiperMainContainer.querySelector('.swiper-wrapper').innerHTML = '';
        this.swiperThumbsContainer.querySelector('.swiper-wrapper').innerHTML = '';
      }

      images.forEach((imageObj, index) => {
        const mainSlide = `
          <div class="swiper-slide">
            <div class="product__main-slide">
              <picture>
                <source
                  media="(min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
                  srcset="${imageObj.srcset}"
                />
                <img src="${imageObj.src}" alt="Nike Air Max Plus ${colorKey} ${index + 1}" />
              </picture>
            </div>
          </div>
        `;
        
        const thumbSlide = `
          <div class="swiper-slide">
            <div class="product__thumb-slide">
              <picture>
                <source
                  media="(min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
                  srcset="${imageObj.srcset}"
                />
                <img src="${imageObj.src}" alt="Nike Air Max Plus ${colorKey} preview ${index + 1}" />
              </picture>
            </div>
          </div>
        `;

        if (typeof this.swiperMain.appendSlide === 'function') {
          this.swiperMain.appendSlide(mainSlide);
          this.swiperThumbs.appendSlide(thumbSlide);
        } else {
          this.swiperMainContainer.querySelector('.swiper-wrapper').innerHTML += mainSlide;
          this.swiperThumbsContainer.querySelector('.swiper-wrapper').innerHTML += thumbSlide;
        }
      });

      this.swiperMain.update();
      this.swiperThumbs.update();
      this.swiperMain.slideTo(0);
      
      this.swiperMainContainer.classList.remove('product__fade-out');
      this.swiperThumbsContainer.classList.remove('product__fade-out');
    }, 300);
  }
}

function initProductGallery() {
  const productSection = document.querySelector('.product');
  
  if (productSection) {
    new ProductGallery();
  }
}

document.addEventListener('DOMContentLoaded', initProductGallery);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProductGallery);
} else {
  initProductGallery();
}

export { ProductGallery, initProductGallery };
