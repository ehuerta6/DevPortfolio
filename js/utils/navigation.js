/**
 * Navigation Utility
 * Handles smooth scrolling and active section detection
 * Uses Tailwind CSS classes for styling
 */

class Navigation {
  constructor() {
    this.sections = CONFIG.sections;
    this.activeSection = null;
    this.init();
  }

  init() {
    this.setupScrollListener();
    this.setupKeyboardNavigation();
  }

  setupScrollListener() {
    // Throttled scroll listener for performance
    const handleScroll = PerformanceUtils.throttle(() => {
      this.updateActiveSection();
    }, 100);

    window.addEventListener('scroll', handleScroll);

    // Initial check
    this.updateActiveSection();
  }

  setupKeyboardNavigation() {
    // Handle keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.altKey) {
        switch (e.key) {
          case '1':
            e.preventDefault();
            this.scrollToSection('home');
            break;
          case '2':
            e.preventDefault();
            this.scrollToSection('about');
            break;
          case '3':
            e.preventDefault();
            this.scrollToSection('projects');
            break;
          case '4':
            e.preventDefault();
            this.scrollToSection('experience');
            break;
          case '5':
            e.preventDefault();
            this.scrollToSection('leadership');
            break;
          case '6':
            e.preventDefault();
            this.scrollToSection('education');
            break;
        }
      }
    });
  }

  updateActiveSection() {
    const scrollPosition = window.pageYOffset + 100;
    let newActiveSection = null;

    this.sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;

        if (
          scrollPosition >= elementTop &&
          scrollPosition < elementTop + elementHeight
        ) {
          newActiveSection = section.id;
        }
      }
    });

    if (newActiveSection !== this.activeSection) {
      this.activeSection = newActiveSection;
      this.updateNavigationUI();
    }
  }

  updateNavigationUI() {
    // Update navigation links
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      const sectionId = href ? href.substring(1) : '';

      if (sectionId === this.activeSection) {
        link.classList.add('active', 'text-navy-blue', 'dark:text-cyan-blue');
        link.classList.remove('text-gray-700', 'dark:text-slate-300');
      } else {
        link.classList.remove(
          'active',
          'text-navy-blue',
          'dark:text-cyan-blue'
        );
        link.classList.add('text-gray-700', 'dark:text-slate-300');
      }
    });

    // Update mobile menu active state
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach((link) => {
      const href = link.getAttribute('href');
      const sectionId = href ? href.substring(1) : '';

      if (sectionId === this.activeSection) {
        link.classList.add('bg-gray-100', 'dark:bg-slate-700');
        link.classList.remove('hover:bg-gray-200', 'dark:hover:bg-slate-600');
      } else {
        link.classList.remove('bg-gray-100', 'dark:bg-slate-700');
        link.classList.add('hover:bg-gray-200', 'dark:hover:bg-slate-600');
      }
    });
  }

  scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // h-20 = 80px
      const targetPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  }

  getActiveSection() {
    return this.activeSection;
  }

  // Public method to be called by App
  updateActive