/**
 * Animation utilities for DevPortfolio
 * Handles intersection observer animations and scroll-triggered effects
 */

class AnimationController {
  constructor() {
    this.observers = new Map();
    this.init();
  }

  init() {
    this.setupIntersectionObserver();
    this.setupScrollAnimations();
    this.setupHoverEffects();
  }

  /**
   * Setup intersection observer for scroll-triggered animations
   */
  setupIntersectionObserver() {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateElement(entry.target);
        }
      });
    }, options);

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      this.intersectionObserver.observe(el);
    });
  }

  /**
   * Animate element when it comes into view
   */
  animateElement(element) {
    element.classList.add('visible');

    // Add staggered animation for children
    const children = element.querySelectorAll('.animate-stagger');
    children.forEach((child, index) => {
      setTimeout(() => {
        child.classList.add('visible');
      }, index * 100);
    });

    // Unobserve after animation
    this.intersectionObserver.unobserve(element);
  }

  /**
   * Setup scroll-based animations
   */
  setupScrollAnimations() {
    let ticking = false;

    const updateScrollAnimations = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');

      parallaxElements.forEach((element) => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });

      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollAnimations);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick);
  }

  /**
   * Setup enhanced hover effects
   */
  setupHoverEffects() {
    // Add hover effects to project cards
    document.querySelectorAll('.project-card').forEach((card) => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('hover-lift', 'hover-glow');
      });

      card.addEventListener('mouseleave', () => {
        card.classList.remove('hover-lift', 'hover-glow');
      });
    });

    // Add hover effects to buttons
    document
      .querySelectorAll('.btn-primary, .btn-secondary')
      .forEach((button) => {
        button.addEventListener('mouseenter', () => {
          button.classList.add('hover-scale');
        });

        button.addEventListener('mouseleave', () => {
          button.classList.remove('hover-scale');
        });
      });
  }

  /**
   * Animate counter numbers
   */
  animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      element.textContent = Math.floor(start);

      if (start >= target) {
        element.textContent = target;
        clearInterval(timer);
      }
    }, 16);
  }

  /**
   * Animate progress bars
   */
  animateProgressBar(element, percentage) {
    setTimeout(() => {
      element.style.width = `${percentage}%`;
    }, 100);
  }

  /**
   * Add typing effect to text
   */
  typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';

    const timer = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
  }

  /**
   * Add stagger animation to a group of elements
   */
  staggerAnimation(elements, animationClass, delay = 100) {
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add(animationClass);
      }, index * delay);
    });
  }

  /**
   * Create floating animation
   */
  createFloatingAnimation(element) {
    element.style.animation = 'float 3s ease-in-out infinite';

    // Add floating keyframes if not already present
    if (!document.querySelector('#floating-keyframes')) {
      const style = document.createElement('style');
      style.id = 'floating-keyframes';
      style.textContent = `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `;
      document.head.appendChild(style);
    }
  }

  /**
   * Destroy all animations and observers
   */
  destroy() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }

    this.observers.forEach((observer) => {
      observer.disconnect();
    });

    this.observers.clear();
  }
}

// Export for use in other modules
window.AnimationController = AnimationController;
