/**
 * Header Component with Navigation and Dark Mode Toggle
 * Uses Tailwind CSS classes for styling
 */

class Header extends Component {
  constructor(containerId) {
    super(containerId);
    this.isSticky = false;
    this.isDarkMode = false;
  }

  render() {
    this.container.innerHTML = `
      <nav class="flex items-center justify-between h-full px-6">
        <!-- Brand -->
        <a href="#home" class="text-xl font-bold text-navy-blue dark:text-cyan-blue hover:text-cyan-blue dark:hover:text-navy-blue transition-colors duration-200">
          ${CONFIG.personal.name}
        </a>

        <!-- Desktop Navigation -->
        <ul class="hidden md:flex items-center space-x-8">
          ${CONFIG.sections
            .map(
              (section) => `
            <li>
              <a href="#${section.id}" 
                 class="nav-link text-gray-700 dark:text-slate-300 hover:text-navy-blue dark:hover:text-cyan-blue font-medium px-4 py-2 rounded-lg transition-all duration-200 relative">
                ${section.name}
              </a>
            </li>
          `
            )
            .join('')}
        </ul>

        <!-- Actions -->
        <div class="flex items-center space-x-4">
          <!-- Dark Mode Toggle -->
          <button id="dark-mode-toggle" 
                  class="dark-mode-toggle p-2 rounded-lg text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-200">
            <svg id="sun-icon" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
            </svg>
            <svg id="moon-icon" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          </button>

          <!-- Mobile Menu Toggle -->
          <button id="mobile-menu-toggle" class="md:hidden p-2 rounded-lg text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-200">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      <!-- Mobile Navigation -->
      <div id="mobile-menu" class="md:hidden hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
        <div class="px-6 py-4 space-y-2">
          ${CONFIG.sections
            .map(
              (section) => `
            <a href="#${section.id}" 
               class="mobile-nav-link block text-gray-700 dark:text-slate-300 hover:text-navy-blue dark:hover:text-cyan-blue font-medium px-4 py-2 rounded-lg transition-colors duration-200">
              ${section.name}
            </a>
          `
            )
            .join('')}
        </div>
      </div>
    `;
  }

  attachEventListeners() {
    // Dark mode toggle
    const darkModeToggle = this.container.querySelector('#dark-mode-toggle');
    if (darkModeToggle) {
      darkModeToggle.addEventListener('click', () => {
        this.toggleDarkMode();
      });
    }

    // Mobile menu toggle
    const mobileMenuToggle = this.container.querySelector(
      '#mobile-menu-toggle'
    );
    const mobileMenu = this.container.querySelector('#mobile-menu');

    if (mobileMenuToggle && mobileMenu) {
      mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Navigation links
    const navLinks = this.container.querySelectorAll(
      '.nav-link, .mobile-nav-link'
    );
    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        this.scrollToSection(targetId);

        // Close mobile menu if open
        if (mobileMenu) {
          mobileMenu.classList.add('hidden');
        }
      });
    });

    // Scroll listener for sticky behavior
    window.addEventListener('scroll', () => {
      this.handleScroll();
    });

    // Initialize dark mode state
    this.initializeDarkMode();
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark', this.isDarkMode);
    localStorage.setItem('darkMode', this.isDarkMode);
    this.updateDarkModeIcon();
  }

  initializeDarkMode() {
    const savedTheme = localStorage.getItem('darkMode');
    this.isDarkMode = savedTheme === 'true';
    document.body.classList.toggle('dark', this.isDarkMode);
    this.updateDarkModeIcon();
  }

  updateDarkModeIcon() {
    const sunIcon = this.container.querySelector('#sun-icon');
    const moonIcon = this.container.querySelector('#moon-icon');

    if (this.isDarkMode) {
      sunIcon?.classList.add('hidden');
      moonIcon?.classList.remove('hidden');
    } else {
      sunIcon?.classList.remove('hidden');
      moonIcon?.classList.add('hidden');
    }
  }

  scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const headerHeight = 80; // h-20 = 80px
      const targetPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  }

  handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const header = this.container;

    if (scrollTop > 100) {
      if (!this.isSticky) {
        this.isSticky = true;
        header.classList.add('shadow-lg');
      }
    } else {
      if (this.isSticky) {
        this.isSticky = false;
        header.classList.remove('shadow-lg');
      }
    }
  }

  updateActiveSection() {
    const sections = CONFIG.sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);
    const navLinks = this.container.querySelectorAll('.nav-link');

    let activeSection = null;
    const scrollPosition = window.pageYOffset + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        activeSection = section.id;
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      const sectionId = href ? href.substring(1) : '';

      if (sectionId === activeSection) {
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
  }
}
