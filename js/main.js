/**
 * Main application entry point
 * Initializes all components and sets up global event listeners
 */

// Global application state
const App = {
  components: {},
  isInitialized: false,

  /**
   * Initialize the application
   */
  init() {
    console.log('Initializing Portfolio Application...');

    try {
      this.initializeComponents();
      this.setupGlobalEvents();
      this.isInitialized = true;

      console.log('Portfolio Application initialized successfully');
    } catch (error) {
      console.error('Error initializing application:', error);
    }
  },

  /**
   * Initialize all components
   */
  initializeComponents() {
    // Initialize utility components first
    this.components.darkMode = new DarkMode();
    this.components.navigation = new Navigation();
    this.components.animations = new AnimationController();
    this.components.lazyLoading = new LazyLoading();
    this.components.mobileResponsive = new MobileResponsive();
    this.components.performanceMonitoring = new PerformanceMonitoring();

    // Initialize main components
    this.components.header = new Header('header');
    this.components.home = new Home('main');
    this.components.about = new About('main');
    this.components.projects = new Projects('main');
    this.components.experience = new Experience('main');
    this.components.leadership = new Leadership('main');
    this.components.education = new Education('main');
    this.components.contact = new Contact('main');
  },

  /**
   * Setup global event listeners
   */
  setupGlobalEvents() {
    // Handle page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.onPageVisible();
      } else {
        this.onPageHidden();
      }
    });

    // Handle window resize
    const handleResize = PerformanceUtils.debounce(() => {
      this.onWindowResize();
    }, CONFIG.performance.debounceDelay);

    window.addEventListener('resize', handleResize);

    // Handle scroll events
    const handleScroll = PerformanceUtils.throttle(() => {
      this.onWindowScroll();
    }, CONFIG.performance.throttleDelay);

    window.addEventListener('scroll', handleScroll);

    // Handle keyboard navigation
    document.addEventListener('keydown', (event) => {
      this.onKeyDown(event);
    });

    // Handle clicks on external links
    document.addEventListener('click', (event) => {
      this.onDocumentClick(event);
    });
  },

  /**
   * Handle page becoming visible
   */
  onPageVisible() {
    console.log('Page became visible');
    // Resume any paused animations or timers
  },

  /**
   * Handle page becoming hidden
   */
  onPageHidden() {
    console.log('Page became hidden');
    // Pause any running animations or timers to save resources
  },

  /**
   * Handle window resize
   */
  onWindowResize() {
    // Notify components about resize
    Object.values(this.components).forEach((component) => {
      if (component.onResize && typeof component.onResize === 'function') {
        component.onResize();
      }
    });
  },

  /**
   * Handle window scroll
   */
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Update navigation active state
    if (this.components.navigation) {
      this.components.navigation.updateActiveSection();
    }

    // Handle header sticky behavior
    if (this.components.header) {
      this.components.header.handleScroll(scrollTop);
    }
  },

  /**
   * Handle keyboard navigation
   */
  onKeyDown(event) {
    // Escape key to close modals or menus
    if (event.key === 'Escape') {
      this.closeAllModals();
    }

    // Tab navigation enhancement
    if (event.key === 'Tab') {
      this.handleTabNavigation(event);
    }
  },

  /**
   * Handle document clicks
   */
  onDocumentClick(event) {
    // Close dropdowns when clicking outside
    this.closeDropdowns(event.target);

    // Handle external link clicks
    if (event.target.tagName === 'A') {
      const href = event.target.getAttribute('href');
      if (
        href &&
        href.startsWith('http') &&
        !href.includes(window.location.hostname)
      ) {
        // External link - could add analytics tracking here
        console.log('External link clicked:', href);
      }
    }
  },

  /**
   * Close all open modals
   */
  closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach((modal) => {
      modal.classList.remove('active');
    });
  },

  /**
   * Close dropdowns when clicking outside
   */
  closeDropdowns(target) {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach((dropdown) => {
      if (!dropdown.contains(target)) {
        dropdown.classList.remove('active');
      }
    });
  },

  /**
   * Handle tab navigation
   */
  handleTabNavigation(event) {
    // Add focus indicators for keyboard navigation
    document.body.classList.add('keyboard-navigation');

    // Remove focus indicators when using mouse
    document.addEventListener(
      'mousedown',
      () => {
        document.body.classList.remove('keyboard-navigation');
      },
      { once: true }
    );
  },

  /**
   * Get component by name
   */
  getComponent(name) {
    return this.components[name];
  },

  /**
   * Destroy all components
   */
  destroy() {
    Object.values(this.components).forEach((component) => {
      if (component.destroy && typeof component.destroy === 'function') {
        component.destroy();
      }
    });

    this.components = {};
    this.isInitialized = false;
  },
};

/**
 * Initialize application when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

/**
 * Handle page unload
 */
window.addEventListener('beforeunload', () => {
  App.destroy();
});

/**
 * Handle errors globally
 */
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
  // Could send error to analytics service
});

/**
 * Handle unhandled promise rejections
 */
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  // Could send error to analytics service
});

// Make App globally available for debugging
window.App = App;
