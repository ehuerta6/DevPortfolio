/**
 * Contact Section Component
 * Functional contact form with validation and submission
 * Uses Tailwind CSS classes for styling
 */

class Contact extends Section {
  constructor(containerId) {
    super(containerId, 'contact', 'Contacto');
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    this.errors = {};
  }

  getContent() {
    return `
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <!-- Contact Information -->
          <div class="animate-on-scroll">
            <h3 class="text-2xl font-bold text-navy-blue dark:text-cyan-blue mb-6">
              Información de Contacto
            </h3>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 bg-navy-blue dark:bg-cyan-blue rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-1">Email</h4>
                  <p class="text-gray-600 dark:text-slate-400">emiliano@example.com</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 bg-navy-blue dark:bg-cyan-blue rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-1">Teléfono</h4>
                  <p class="text-gray-600 dark:text-slate-400">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 bg-navy-blue dark:bg-cyan-blue rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-1">Ubicación</h4>
                  <p class="text-gray-600 dark:text-slate-400">Ciudad, País</p>
                </div>
              </div>
            </div>
            
            <!-- Social Links -->
            <div class="mt-8">
              <h4 class="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-4">Sígueme</h4>
              <div class="flex space-x-4">
                <a href="https://linkedin.com/in/emiliano-huerta" target="_blank" 
                   class="w-10 h-10 bg-gray-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-slate-400 hover:bg-navy-blue hover:text-white dark:hover:bg-cyan-blue transition-colors duration-200">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://github.com/emiliano-huerta" target="_blank" 
                   class="w-10 h-10 bg-gray-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-slate-400 hover:bg-navy-blue hover:text-white dark:hover:bg-cyan-blue transition-colors duration-200">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/emiliano_huerta" target="_blank" 
                   class="w-10 h-10 bg-gray-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-slate-400 hover:bg-navy-blue hover:text-white dark:hover:bg-cyan-blue transition-colors duration-200">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="animate-on-scroll">
            <h3 class="text-2xl font-bold text-navy-blue dark:text-cyan-blue mb-6">
              Envíame un Mensaje
            </h3>
            
            <form id="contact-form" class="space-y-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                    Nombre *
                  </label>
                  <input type="text" id="name" name="name" required
                         class="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-blue focus:border-transparent dark:bg-slate-700 dark:text-slate-100 transition-colors duration-200"
                         placeholder="Tu nombre">
                  <div id="name-error" class="text-red-500 text-sm mt-1 hidden"></div>
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                    Email *
                  </label>
                  <input type="email" id="email" name="email" required
                         class="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-blue focus:border-transparent dark:bg-slate-700 dark:text-slate-100 transition-colors duration-200"
                         placeholder="tu@email.com">
                  <div id="email-error" class="text-red-500 text-sm mt-1 hidden"></div>
                </div>
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                  Asunto *
                </label>
                <input type="text" id="subject" name="subject" required
                       class="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-blue focus:border-transparent dark:bg-slate-700 dark:text-slate-100 transition-colors duration-200"
                       placeholder="Asunto del mensaje">
                <div id="subject-error" class="text-red-500 text-sm mt-1 hidden"></div>
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                  Mensaje *
                </label>
                <textarea id="message" name="message" rows="5" required
                          class="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-blue focus:border-transparent dark:bg-slate-700 dark:text-slate-100 transition-colors duration-200 resize-vertical"
                          placeholder="Escribe tu mensaje aquí..."></textarea>
                <div id="message-error" class="text-red-500 text-sm mt-1 hidden"></div>
              </div>
              
              <button type="submit" id="submit-btn"
                      class="w-full bg-navy-blue text-white py-3 px-6 rounded-lg font-medium hover:bg-cyan-blue dark:bg-cyan-blue dark:hover:bg-navy-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-blue focus:ring-offset-2 dark:focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed">
                <span id="submit-text">Enviar Mensaje</span>
                <span id="submit-loading" class="hidden">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </span>
              </button>
            </form>
            
            <!-- Success Message -->
            <div id="success-message" class="hidden mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3">
                  <h3 class="text-sm font-medium text-green-800 dark:text-green-200">
                    ¡Mensaje enviado correctamente!
                  </h3>
                  <div class="mt-2 text-sm text-green-700 dark:text-green-300">
                    <p>Gracias por contactarme. Te responderé lo antes posible.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  attachEventListeners() {
    const form = this.container.querySelector('#contact-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSubmit();
      });
    }

    // Real-time validation
    const inputs = this.container.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        this.validateField(input);
      });
      
      input.addEventListener('input', () => {
        this.clearFieldError(input);
      });
    });
  }

  handleSubmit() {
    const form = this.container.querySelector('#contact-form');
    const formData = new FormData(form);
    
    // Get form data
    this.formData = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    // Validate form
    if (this.validateForm()) {
      this.submitForm();
    }
  }

  validateForm() {
    this.errors = {};
    let isValid = true;

    // Validate name
    if (!this.formData.name || this.formData.name.trim().length < 2) {
      this.errors.name = 'El nombre debe tener al menos 2 caracteres';
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.formData.email || !emailRegex.test(this.formData.email)) {
      this.errors.email = 'Por favor ingresa un email válido';
      isValid = false;
    }

    // Validate subject
    if (!this.formData.subject || this.formData.subject.trim().length < 5) {
      this.errors.subject = 'El asunto debe tener al menos 5 caracteres';
      isValid = false;
    }

    // Validate message
    if (!this.formData.message || this.formData.message.trim().length < 10) {
      this.errors.message = 'El mensaje debe tener al menos 10 caracteres';
      isValid = false;
    }

    // Display errors
    this.displayErrors();
    
    return isValid;
  }

  validateField(field) {
    const fieldName = field.name;
    const value = field.value.trim();

    // Clear previous error
    this.clearFieldError(field);

    // Validate based on field type
    switch (fieldName) {
      case 'name':
        if (value.length < 2) {
          this.showFieldError(field, 'El nombre debe tener al menos 2 caracteres');
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          this.showFieldError(field, 'Por favor ingresa un email válido');
        }
        break;
      case 'subject':
        if (value.length < 5) {
          this.showFieldError(field, 'El asunto debe tener al menos 5 caracteres');
        }
        break;
      case 'message':
        if (value.length < 10) {
          this.showFieldError(field, 'El mensaje debe tener al menos 10 caracteres');
        }
        break;
    }
  }

  showFieldError(field, message) {
    const errorElement = this.container.querySelector(`#${field.name}-error`);
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.classList.remove('hidden');
    }
    field.classList.add('border-red-500', 'focus:ring-red-500');
  }

  clearFieldError(field) {
    const errorElement = this.container.querySelector(`#${field.name}-error`);
    if (errorElement) {
      errorElement.classList.add('hidden');
    }
    field.classList.remove('border-red-500', 'focus:ring-red-500');
    field.classList.add('border-gray-300', 'dark:border-slate-600', 'focus:ring-cyan-blue');
  }

  displayErrors() {
    // Clear all errors first
    Object.keys(this.errors).forEach(fieldName => {
      const field = this.container.querySelector(`[name="${fieldName}"]`);
      const errorElement = this.container.querySelector(`#${fieldName}-error`);
      
      if (field && errorElement) {
        if (this.errors[fieldName]) {
          errorElement.textContent = this.errors[fieldName];
          errorElement.classList.remove('hidden');
          field.classList.add('border-red-500', 'focus:ring-red-500');
        } else {
          errorElement.classList.add('hidden');
          field.classList.remove('border-red-500', 'focus:ring-red-500');
        }
      }
    });
  }

  async submitForm() {
    const submitBtn = this.container.querySelector('#submit-btn');
    const submitText = this.container.querySelector('#submit-text');
    const submitLoading = this.container.querySelector('#submit-loading');
    const successMessage = this.container.querySelector('#success-message');

    // Show loading state
    submitBtn.disabled = true;
    submitText.classList.add('hidden');
    submitLoading.classList.remove('hidden');

    try {
      // Simulate API call (replace with actual endpoint)
      await this.sendEmail();
      
      // Show success message
      successMessage.classList.remove('hidden');
      this.container.querySelector('#contact-form').reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        successMessage.classList.add('hidden');
      }, 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Hubo un error al enviar el mensaje. Por favor intenta de nuevo.');
    } finally {
      // Reset button state
      submitBtn.disabled = false;
      submitText.classList.remove('hidden');
      submitLoading.classList.add('hidden');
    }
  }

  async sendEmail() {
    // This is a placeholder for actual email sending
    // In a real implementation, you would:
    // 1. Send data to your backend API
    // 2. Use a service like EmailJS, Formspree, or Netlify Forms
    // 3. Or integrate with your email service provider
    
    return new Promise((resolve) => {
      // Simulate API delay
      setTimeout(() => {
        console.log('Email data:', this.formData);
        resolve();
      }, 2000);
    });
  }
}
