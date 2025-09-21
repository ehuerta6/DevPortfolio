/**
 * Base Component class for all portfolio components
 * Provides a consistent interface and lifecycle management
 */

class Component {
  constructor(containerId, config = {}) {
    this.container = document.getElementById(containerId);
    this.config = { ...this.getDefaultConfig(), ...config };
    this.isInitialized = false;

    if (!this.container) {
      console.error(`Container with id "${containerId}" not found`);
      return;
    }

    this.init();
  }

  /**
   * Initialize the component
   */
  init() {
    try {
      this.render();
      this.attachEventListeners();
      this.isInitialized = true;
      console.log(`${this.constructor.name} initialized successfully`);
    } catch (error) {
      console.error(`Error initializing ${this.constructor.name}:`, error);
    }
  }

  /**
   * Render the component HTML
   * Must be implemented by child classes
   */
  render() {
    throw new Error('Render method must be implemented by child class');
  }

  /**
   * Attach event listeners
   * Override in child classes if needed
   */
  attachEventListeners() {
    // Override in child classes
  }

  /**
   * Destroy the component and clean up resources
   */
  destroy() {
    if (this.container) {
      this.container.innerHTML = '';
    }
    this.isInitialized = false;
    console.log(`${this.constructor.name} destroyed`);
  }

  /**
   * Get default configuration
   * Override in child classes to provide default config
   */
  getDefaultConfig() {
    return {};
  }

  /**
   * Update component configuration
   */
  updateConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
    if (this.isInitialized) {
      this.destroy();
      this.init();
    }
  }

  /**
   * Show/hide component
   */
  setVisible(visible) {
    if (this.container) {
      this.container.style.display = visible ? 'block' : 'none';
    }
  }

  /**
   * Add CSS class to component container
   */
  addClass(className) {
    if (this.container) {
      this.container.classList.add(className);
    }
  }

  /**
   * Remove CSS class from component container
   */
  removeClass(className) {
    if (this.container) {
      this.container.classList.remove(className);
    }
  }

  /**
   * Toggle CSS class on component container
   */
  toggleClass(className) {
    if (this.container) {
      this.container.classList.toggle(className);
    }
  }
}

/**
 * Section Component - Base class for all portfolio sections
 */
class Section extends Component {
  constructor(containerId, sectionId, title) {
    super(containerId);
    this.sectionId = sectionId;
    this.title = title;
  }

  render() {
    const content = this.getContent();

    // Only add title if it's provided
    const titleHtml = this.title
      ? `<h2 class="section-title">${this.title}</h2>`
      : '';

    this.container.innerHTML = `
      <section id="${this.sectionId}" class="section">
        <div class="container">
          ${titleHtml}
          <div class="section-content">
            ${content}
          </div>
        </div>
      </section>
    `;
  }

  /**
   * Get section content
   * Must be implemented by child classes
   */
  getContent() {
    return '';
  }
}

/**
 * Utility functions for DOM manipulation
 */
const DOMUtils = {
  /**
   * Create an element with attributes and content
   */
  createElement(tag, attributes = {}, content = '') {
    const element = document.createElement(tag);

    Object.keys(attributes).forEach((key) => {
      if (key === 'className') {
        element.className = attributes[key];
      } else if (key === 'innerHTML') {
        element.innerHTML = attributes[key];
      } else {
        element.setAttribute(key, attributes[key]);
      }
    });

    if (content) {
      element.textContent = content;
    }

    return element;
  },

  /**
   * Find element by selector
   */
  find(selector, parent = document) {
    return parent.querySelector(selector);
  },

  /**
   * Find all elements by selector
   */
  findAll(selector, parent = document) {
    return parent.querySelectorAll(selector);
  },

  /**
   * Add event listener with cleanup tracking
   */
  addEventListener(element, event, handler, options = {}) {
    element.addEventListener(event, handler, options);

    // Store reference for potential cleanup
    if (!element._eventListeners) {
      element._eventListeners = [];
    }
    element._eventListeners.push({ event, handler, options });
  },

  /**
   * Remove all tracked event listeners
   */
  removeAllEventListeners(element) {
    if (element._eventListeners) {
      element._eventListeners.forEach(({ event, handler, options }) => {
        element.removeEventListener(event, handler, options);
      });
      element._eventListeners = [];
    }
  },

  /**
   * Smooth scroll to element
   */
  scrollTo(element, offset = 0) {
    const targetPosition = element.offsetTop - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  },

  /**
   * Check if element is in viewport
   */
  isInViewport(element, threshold = 0) {
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;

    return (
      rect.top >= -threshold &&
      rect.left >= -threshold &&
      rect.bottom <= windowHeight + threshold &&
      rect.right <= windowWidth + threshold
    );
  },
};

/**
 * Performance utilities
 */
const PerformanceUtils = {
  /**
   * Debounce function calls
   */
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  /**
   * Throttle function calls
   */
  throttle(func, limit) {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },

  /**
   * Request animation frame wrapper
   */
  requestAnimationFrame(callback) {
    return window.requestAnimationFrame(callback);
  },
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Component, Section, DOMUtils, PerformanceUtils };
}
