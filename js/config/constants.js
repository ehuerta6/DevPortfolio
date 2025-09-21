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
    title: 'Desarrollador Full Stack',
    bio: 'Apasionado desarrollador con experiencia en tecnologías web modernas. Especializado en JavaScript, React, Node.js y arquitecturas escalables.',
    email: 'emiliano@example.com',
    phone: '+52 123 456 7890',
    location: 'Ciudad de México, México',
    website: 'https://emilianohuerta.dev',
    github: 'https://github.com/emilianohuerta',
    linkedin: 'https://linkedin.com/in/emilianohuerta',
    twitter: 'https://twitter.com/emilianohuerta',
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
