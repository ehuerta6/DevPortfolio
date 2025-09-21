/**
 * Mobile Responsive utilities for DevPortfolio
 * Handles touch interactions, mobile-specific features, and responsive behavior
 */

class MobileResponsive {
  constructor() {
    this.isMobile = false;
    this.isTablet = false;
    this.touchStartY = 0;
    this.touchStartX = 0;
    this.init();
  }

  init() {
    this.detectDevice();
    this.setupTouchHandlers();
    this.setupResizeHandler();
    this.setupMobileOptimizations();
    this.setupSwipeGestures();
  }

  /**
   * Detect device type based on screen size
   */
  detectDevice() {
    const width = window.innerWidth;
    
    this.isMobile = width < 768;
    this.isTablet = width >= 768 && width < 1024;
    
    // Add device class to body
    document.body.classList.remove('mobile', 'tablet', 'desktop');
    
    if (this.isMobile) {
      document.body.classList.add('mobile');
    } else if (this.isTablet) {
      document.body.classList.add('tablet');
    } else {
      document.body.classList.add('desktop');
    }
  }

  /**
   * Setup touch event handlers
   */
  setupTouchHandlers() {
    // Prevent zoom on double tap
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (event) => {
      const now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    }, false);

    // Handle touch start for swipe detection
    document.addEventListener('touchstart', (event) => {
      this.touchStartY = event.touches[0].clientY;
      this.touchStartX = event.touches[0].clientX;
    }, { passive: true });

    // Handle touch end for swipe detection
    document.addEventListener('touchend', (event) => {
      if (!this.touchStartY || !this.touchStartX) return;

      const touchEndY = event.changedTouches[0].clientY;
      const touchEndX = event.changedTouches[0].clientX;
      
      const diffY = this.touchStartY - touchEndY;
      const diffX = this.touchStartX - touchEndX;
      
      // Detect swipe direction
      if (Math.abs(diffY) > Math.abs(diffX)) {
        if (diffY > 50) {
          this.handleSwipeUp();
        } else if (diffY < -50) {
          this.handleSwipeDown();
        }
      } else {
        if (diffX > 50) {
          this.handleSwipeLeft();
        } else if (diffX < -50) {
          this.handleSwipeRight();
        }
      }
      
      this.touchStartY = 0;
      this.touchStartX = 0;
    }, { passive: true });
  }

  /**
   * Setup resize handler for responsive behavior
   */
  setupResizeHandler() {
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.detectDevice();
        this.handleResize();
      }, 250);
    });
  }

  /**
   * Setup mobile-specific optimizations
   */
  setupMobileOptimizations() {
    // Add mobile-specific classes
    if (this.isMobile) {
      this.addMobileClasses();
      this.optimizeForMobile();
    }
  }

  /**
   * Add mobile-specific CSS classes
   */
  addMobileClasses() {
    // Add touch-friendly classes
    document.querySelectorAll('button, a').forEach(element => {
      if (!element.classList.contains('touch-friendly')) {
        element.classList.add('touch-friendly');
      }
    });
  }

  /**
   * Optimize for mobile devices
   */
  optimizeForMobile() {
    // Reduce animations on mobile for better performance
    if (this.isMobile) {
      document.documentElement.style.setProperty('--animation-duration', '0.3s');
    } else {
      document.documentElement.style.setProperty('--animation-duration', '0.6s');
    }

    // Optimize images for mobile
    this.optimizeImagesForMobile();
  }

  /**
   * Optimize images for mobile devices
   */
  optimizeImagesForMobile() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (this.isMobile) {
        // Add mobile-specific attributes
        img.setAttribute('loading', 'lazy');
        img.setAttribute('decoding', 'async');
      }
    });
  }

  /**
   * Setup swipe gestures for navigation
   */
  setupSwipeGestures() {
    // Swipe gestures can be used for mobile navigation
    // This is a placeholder for future implementation
  }

  /**
   * Handle swipe up gesture
   */
  handleSwipeUp() {
    // Scroll to next section
    this.scrollToNextSection();
  }

  /**
   * Handle swipe down gesture
   */
  handleSwipeDown() {
    // Scroll to previous section
    this.scrollToPreviousSection();
  }

  /**
   * Handle swipe left gesture
   */
  handleSwipeLeft() {
    // Could be used for carousel navigation
    console.log('Swipe left detected');
  }

  /**
   * Handle swipe right gesture
   */
  handleSwipeRight() {
    // Could be used for carousel navigation
    console.log('Swipe right detected');
  }

  /**
   * Scroll to next section
   */
  scrollToNextSection() {
    const sections = document.querySelectorAll('section[id]');
    const currentSection = this.getCurrentSection();
    const currentIndex = Array.from(sections).indexOf(currentSection);
    
    if (currentIndex < sections.length - 1) {
      const nextSection = sections[currentIndex + 1];
      this.smoothScrollTo(nextSection);
    }
  }

  /**
   * Scroll to previous section
   */
  scrollToPreviousSection() {
    const sections = document.querySelectorAll('section[id]');
    const currentSection = this.getCurrentSection();
    const currentIndex = Array.from(sections).indexOf(currentSection);
    
    if (currentIndex > 0) {
      const prevSection = sections[currentIndex - 1];
      this.smoothScrollTo(prevSection);
    }
  }

  /**
   * Get current visible section
   */
  getCurrentSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.pageYOffset + 100;
    
    for (let section of sections) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        return section;
      }
    }
    
    return sections[0];
  }

  /**
   * Smooth scroll to element
   */
  smoothScrollTo(element) {
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }

  /**
   * Handle window resize
   */
  handleResize() {
    // Re-optimize for new screen size
    this.optimizeForMobile();
    
    // Trigger custom resize event
    window.dispatchEvent(new CustomEvent('mobileResize', {
      detail: {
        isMobile: this.isMobile,
        isTablet: this.isTablet,
        width: window.innerWidth,
        height: window.innerHeight
      }
    }));
  }

  /**
   * Check if device is mobile
   */
  isMobileDevice() {
    return this.isMobile;
  }

  /**
   * Check if device is tablet
   */
  isTabletDevice() {
    return this.isTablet;
  }

  /**
   * Get current breakpoint
   */
  getCurrentBreakpoint() {
    const width = window.innerWidth;
    
    if (width < 640) return 'sm';
    if (width < 768) return 'md';
    if (width < 1024) return 'lg';
    if (width < 1280) return 'xl';
    return '2xl';
  }

  /**
   * Add mobile-specific styles
   */
  addMobileStyles() {
    if (!document.querySelector('#mobile-styles')) {
      const style = document.createElement('style');
      style.id = 'mobile-styles';
      style.textContent = `
        .touch-friendly {
          min-height: 44px;
          min-width: 44px;
        }
        
        @media (max-width: 767px) {
          .mobile-text-sm {
            font-size: 0.875rem;
          }
          
          .mobile-p-4 {
            padding: 1rem;
          }
          
          .mobile-space-y-4 > * + * {
            margin-top: 1rem;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  /**
   * Destroy mobile responsive handlers
   */
  destroy() {
    // Remove event listeners
    window.removeEventListener('resize', this.handleResize);
    document.removeEventListener('touchstart', this.setupTouchHandlers);
    document.removeEventListener('touchend', this.setupTouchHandlers);
  }
}

// Export for use in other modules
window.MobileResponsive = MobileResponsive;
