class Modal {
  constructor(modalSelector, showDelay = 1000) {
    this.modal = document.querySelector(modalSelector);
    this.showDelay = showDelay;
    this.closeBtn = null;
    this.form = null;
    this.backdrop = null;
    this.isInitialized = false;

    this.init();
  }

  init() {
    if (!this.modal || this.isInitialized) return;

    this.closeBtn = this.modal.querySelector('#modalClose');
    this.form = this.modal.querySelector('#modalForm');
    this.backdrop = this.modal.querySelector('.modal__backdrop');

    this.bindEvents();
    this.scheduleShow();
    this.isInitialized = true;
  }

  bindEvents() {
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => {
        this.hide();
      });
    }

    if (this.backdrop) {
      this.backdrop.addEventListener('click', () => {
        this.hide();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isVisible()) {
        this.hide();
      }
    });

    if (this.form) {
      this.form.addEventListener('submit', (e) => {
        this.handleFormSubmit(e);
      });
    }

    const modalWrapper = this.modal.querySelector('.modal__wrapper');
    if (modalWrapper) {
      modalWrapper.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    }
  }

  scheduleShow() {
    if (sessionStorage.getItem('modalShown')) {
      return;
    }

    setTimeout(() => {
      this.show();
    }, this.showDelay);
  }

  show() {
    if (!this.modal) return;

    this.modal.classList.add('modal--show');
    document.body.classList.add('modal-open');
    
    sessionStorage.setItem('modalShown', 'true');

    if (this.closeBtn) {
      setTimeout(() => {
        this.closeBtn.focus();
      }, 100);
    }
  }

  hide() {
    if (!this.modal) return;

    this.modal.classList.remove('modal--show');
    document.body.classList.remove('modal-open');
  }

  isVisible() {
    return this.modal && this.modal.classList.contains('modal--show');
  }

  handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(this.form);
    const email = formData.get('email');

    if (!this.isValidEmail(email)) {
      this.showError('Please enter a valid email address');
      return;
    }

    this.submitForm(email);
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  showError(message) {
    alert(message);
  }

  showSuccess() {
    alert('Thank you for subscribing! Check your email for the discount code.');
  }

  async submitForm(email) {
    try {
      await this.mockApiCall(email);
      
      this.form.reset();
      this.showSuccess();
      this.hide();
    } catch (error) {
      this.showError('Something went wrong. Please try again.');
    }
  }

  mockApiCall(email) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Submitted email:', email);
        resolve({ success: true });
      }, 1000);
    });
  }

  open() {
    this.show();
  }

  close() {
    this.hide();
  }
}

function initModal() {
  const modal = new Modal('#modal', 1000);
  
  window.modalInstance = modal;
}

document.addEventListener('DOMContentLoaded', initModal);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initModal);
} else {
  initModal();
}

export { Modal, initModal };