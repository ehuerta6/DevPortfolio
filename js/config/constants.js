/**
 * Configuration constants for the portfolio application
 */

const CONFIG = {
  // Navigation sections
  sections: [
    { id: 'home', name: 'Inicio', icon: 'home' },
    { id: 'about', name: 'Sobre Mí', icon: 'user' },
    { id: 'projects', name: 'Proyectos', icon: 'folder' },
    { id: 'experience', name: 'Experiencia', icon: 'briefcase' },
    { id: 'leadership', name: 'Liderazgo', icon: 'star' },
    { id: 'education', name: 'Educación', icon: 'graduation' },
    { id: 'contact', name: 'Contacto', icon: 'mail' },
  ],

  // Theme configuration
  theme: {
    primary: '#1e3a8a',
    secondary: '#06b6d4',
    dark: '#0f172a',
  },

  // Application settings
  settings: {
    headerHeight: 80,
    scrollOffset: 100,
    animationDuration: 300,
    lazyLoadOffset: 50,
  },

  // Personal information (to be customized)
  personal: {
    name: 'Emiliano Huerta',
    title: 'Full Stack Developer & Tech Lead',
    bio: 'Desarrollador Full Stack con más de 5 años de experiencia creando aplicaciones web escalables y liderando equipos de desarrollo. Especializado en JavaScript, React, Node.js, y metodologías ágiles.',
    email: 'emiliano.huerta@email.com',
    phone: '+52 55 1234 5678',
    location: 'Ciudad de México, México',
    website: 'https://emiliano-huerta.dev',
    github: 'https://github.com/emiliano-huerta',
    linkedin: 'https://linkedin.com/in/emiliano-huerta',
    twitter: 'https://twitter.com/emiliano_huerta',
  },

  // Animation settings
  animations: {
    fadeIn: {
      duration: 600,
      delay: 100,
      easing: 'ease-out',
    },
    slideUp: {
      duration: 400,
      delay: 50,
      easing: 'ease-out',
    },
  },

  // Performance settings
  performance: {
    debounceDelay: 250,
    throttleDelay: 100,
    imageLoadTimeout: 5000,
  },
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
