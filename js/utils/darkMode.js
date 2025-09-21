/**
 * Dark Mode Utility
 * Handles dark mode toggle and persistence
 * Uses Tailwind CSS dark mode classes
 */

class DarkMode {
  constructor() {
    this.isDark = this.getStoredTheme();
    this.init();
  }

  init() {
    this.applyTheme();
    this.setupSystemThemeListener();
  }

  toggle() {
    this.isDark = !this.isDark;
    this.saveTheme();
    this.applyTheme();
    this.notifyComponents();
  }

  applyTheme() {
    if (this.isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  getStoredTheme() {
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) {
      return stored === 'true';
    }
    
    // Default to system preference if no stored preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  saveTheme() {
    localStorage.setItem('darkMode', this.isDark);
  }

  setupSystemThemeListener() {
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      // Only update if user hasn't set a preference
      if (localStorage.getItem('darkMode') === null) {
        this.isDark = e.matches;
        this.applyTheme();
        this.notifyComponents();
      }
    });
  }

  notifyComponents() {
    // Dispatch custom event for components to listen to
    const event = new CustomEvent('themeChanged', {
      detail: { isDark: this.isDark }
    });
    document.dispatchEvent(event);
  }

  getCurrentTheme() {
    return this.isDark ? 'dark' : 'light';
  }

  setTheme(theme) {
    if (theme === 'dark' || theme === 'light') {
      this.isDark = theme === 'dark';
      this.saveTheme();
      this.applyTheme();
      this.notifyComponents();
    }
  }
}
