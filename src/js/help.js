class HelpForm {
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);
    this.isInitialized = false;
    
    if (!this.form) {
      console.error('Help form not found');
      return;
    }
    
    this.init();
  }

  init() {
    if (this.isInitialized) return;
    
    this.nameInput = this.form.querySelector('#name');
    this.phoneInput = this.form.querySelector('#phone');
    this.emailInput = this.form.querySelector('#email');
    this.messageInput = this.form.querySelector('#message');
    
    this.bindEvents();
    this.isInitialized = true;
  }

  bindEvents() {
    // Валідація в реальному часі
    this.nameInput.addEventListener('blur', () => this.validateName());
    this.phoneInput.addEventListener('blur', () => this.validatePhone());
    this.emailInput.addEventListener('blur', () => this.validateEmail());
    this.messageInput.addEventListener('blur', () => this.validateMessage());
    
    // Очистка помилок при введенні
    this.nameInput.addEventListener('input', () => this.clearError(this.nameInput));
    this.phoneInput.addEventListener('input', () => this.clearError(this.phoneInput));
    this.emailInput.addEventListener('input', () => this.clearError(this.emailInput));
    this.messageInput.addEventListener('input', () => this.clearError(this.messageInput));
    
    // Обробка відправки форми
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  validateName() {
    const name = this.nameInput.value.trim();
    
    if (!name) {
      this.showError(this.nameInput, 'Name is required');
      return false;
    }
    
    if (name.length < 2) {
      this.showError(this.nameInput, 'Name must be at least 2 characters');
      return false;
    }
    
    if (!/^[a-zA-Zа-яА-ЯіІїЇєЄ\s'-]+$/.test(name)) {
      this.showError(this.nameInput, 'Name contains invalid characters');
      return false;
    }
    
    this.clearError(this.nameInput);
    return true;
  }

  validatePhone() {
    const phone = this.phoneInput.value.trim();
    
    if (!phone) {
      this.showError(this.phoneInput, 'Phone number is required');
      return false;
    }
    
    // Очистка номера від пробілів, дефісів, дужок
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    
    if (!/^\+?[1-9]\d{1,14}$/.test(cleanPhone)) {
      this.showError(this.phoneInput, 'Please enter a valid phone number');
      return false;
    }
    
    this.clearError(this.phoneInput);
    return true;
  }

  validateEmail() {
    const email = this.emailInput.value.trim();
    
    if (!email) {
      this.showError(this.emailInput, 'Email is required');
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.showError(this.emailInput, 'Please enter a valid email address');
      return false;
    }
    
    this.clearError(this.emailInput);
    return true;
  }

  validateMessage() {
    const message = this.messageInput.value.trim();
    
    if (!message) {
      this.showError(this.messageInput, 'Message is required');
      return false;
    }
    
    if (message.length < 10) {
      this.showError(this.messageInput, 'Message must be at least 10 characters');
      return false;
    }
    
    if (message.length > 500) {
      this.showError(this.messageInput, 'Message must be less than 500 characters');
      return false;
    }
    
    this.clearError(this.messageInput);
    return true;
  }

  showError(input, message) {
    this.clearError(input);
    
    input.style.borderColor = '#e74c3c';
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'help__error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
      color: #e74c3c;
      font-size: 14px;
      margin-top: 4px;
      line-height: 1.4;
    `;
    
    input.parentNode.appendChild(errorDiv);
  }

  clearError(input) {
    input.style.borderColor = '';
    
    const existingError = input.parentNode.querySelector('.help__error');
    if (existingError) {
      existingError.remove();
    }
  }

  validateForm() {
    const isNameValid = this.validateName();
    const isPhoneValid = this.validatePhone();
    const isEmailValid = this.validateEmail();
    const isMessageValid = this.validateMessage();
    
    return isNameValid && isPhoneValid && isEmailValid && isMessageValid;
  }

  async handleSubmit(e) {
    e.preventDefault();
    
    if (!this.validateForm()) {
      return;
    }
    
    // Збираємо дані форми
    const formData = new FormData(this.form);
    const data = {
      name: formData.get('name').trim(),
      phone: formData.get('phone').trim(),
      email: formData.get('email').trim(),
      message: formData.get('message').trim()
    };
    
    try {
      // Емуляція відправки
      await this.submitForm(data);
      
      // Успішна відправка
      this.showSuccess();
      this.form.reset();
      
    } catch (error) {
      this.showSubmitError('Something went wrong. Please try again.');
    }
  }

  async submitForm(data) {
    // Емуляція API запиту
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Form submitted:', data);
        resolve({ success: true });
      }, 1000);
    });
  }

  showSuccess() {
    // Можна замінити на більш елегантне повідомлення
    alert('Thank you for your message! We will get back to you soon.');
  }

  showSubmitError(message) {
    alert(message);
  }
}

// Ініціалізація
function initHelpForm() {
  const helpSection = document.querySelector('.help');
  
  if (helpSection) {
    new HelpForm('.help__form');
  }
}

// Ініціалізація після завантаження DOM
document.addEventListener('DOMContentLoaded', initHelpForm);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHelpForm);
} else {
  initHelpForm();
}

export { HelpForm, initHelpForm };