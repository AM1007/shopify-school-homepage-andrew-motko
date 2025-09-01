import Swiper from 'swiper';
import { Thumbs } from 'swiper/modules';

class ProductGallery {
  constructor() {
    this.productImages = {
      color1: [
        '/img/product/image1.webp',
        '/img/product/image2.webp',
        '/img/product/image3.webp',
        '/img/product/image4.webp',
        '/img/product/image5.webp'
      ],
      color2: [
        '/img/product/image6.webp',
        '/img/product/image7.webp',
        '/img/product/image8.webp',
        '/img/product/image9.webp',
        '/img/product/image10.webp'
      ],
      color3: [
        '/img/product/image11.webp',
        '/img/product/image12.webp',
        '/img/product/image13.webp',
        '/img/product/image14.webp',
        '/img/product/image15.webp'
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

      images.forEach((src, index) => {
        const retinaIndex = index + 1;
        const colorNumber = colorKey.replace('color', '');
        const baseImageNumber = (parseInt(colorNumber) - 1) * 5 + retinaIndex;
        
        const mainSlide = `
          <div class="swiper-slide">
            <div class="product__main-slide">
              <picture>
                <source
                  media="(min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
                  srcset="/img/product/image${baseImageNumber}@2x.webp"
                />
                <img src="${src}" alt="Nike Air Max Plus ${colorKey} ${index + 1}" />
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
                  srcset="/img/product/image${baseImageNumber}@2x.webp"
                />
                <img src="${src}" alt="Nike Air Max Plus ${colorKey} preview ${index + 1}" />
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