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
    // Close button click
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => {
        this.hide();
      });
    }

    // Backdrop click to close
    if (this.backdrop) {
      this.backdrop.addEventListener('click', () => {
        this.hide();
      });
    }

    // Escape key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isVisible()) {
        this.hide();
      }
    });

    // Form submission
    if (this.form) {
      this.form.addEventListener('submit', (e) => {
        this.handleFormSubmit(e);
      });
    }

    // Prevent modal wrapper clicks from closing modal
    const modalWrapper = this.modal.querySelector('.modal__wrapper');
    if (modalWrapper) {
      modalWrapper.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    }
  }

  scheduleShow() {
    // Check if modal was already shown (using sessionStorage to track during session)
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
    
    // Mark modal as shown for this session
    sessionStorage.setItem('modalShown', 'true');

    // Focus trap - focus on close button for accessibility
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

    // Basic email validation
    if (!this.isValidEmail(email)) {
      this.showError('Please enter a valid email address');
      return;
    }

    // Simulate form submission
    this.submitForm(email);
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  showError(message) {
    // Simple error display - you can enhance this
    alert(message);
  }

  showSuccess() {
    // Simple success display - you can enhance this
    alert('Thank you for subscribing! Check your email for the discount code.');
  }

  async submitForm(email) {
    try {
      // Simulate API call
      await this.mockApiCall(email);
      
      // Reset form and close modal
      this.form.reset();
      this.showSuccess();
      this.hide();
    } catch (error) {
      this.showError('Something went wrong. Please try again.');
    }
  }

  // Mock API call - replace with real API endpoint
  mockApiCall(email) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Submitted email:', email);
        resolve({ success: true });
      }, 1000);
    });
  }

  // Public method to manually show modal
  open() {
    this.show();
  }

  // Public method to manually close modal
  close() {
    this.hide();
  }
}

// Initialize modal when DOM is loaded
function initModal() {
  const modal = new Modal('#modal', 1000); // Show after 1 second
  
  // Make modal globally accessible if needed
  window.modalInstance = modal;
}

// Auto-initialize
document.addEventListener('DOMContentLoaded', initModal);

// Also initialize if DOM is already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initModal);
} else {
  initModal();
}

export { Modal, initModal };