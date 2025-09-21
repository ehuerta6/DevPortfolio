/**
 * Projects Section Component
 * Showcase of featured projects with filtering and modal functionality
 * Uses Tailwind CSS classes for styling
 */

class Projects extends Section {
  constructor(containerId) {
    super(containerId, 'projects', 'Proyectos Destacados');
    this.projects = this.getProjectsData();
    this.activeFilter = 'all';
  }

  getProjectsData() {
    return [
      {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'Plataforma de comercio electrónico completa con carrito de compras, pagos integrados y panel de administración.',
        image: 'assets/images/projects/ecommerce.jpg',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        liveUrl: 'https://ecommerce-demo.com',
        githubUrl: 'https://github.com/emilianohuerta/ecommerce',
        category: 'web'
      },
      {
        id: 2,
        title: 'Task Management App',
        description: 'Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones y análisis de productividad.',
        image: 'assets/images/projects/taskmanager.jpg',
        technologies: ['Vue.js', 'Express', 'MongoDB', 'Socket.io'],
        liveUrl: 'https://taskmanager-demo.com',
        githubUrl: 'https://github.com/emilianohuerta/taskmanager',
        category: 'web'
      },
      {
        id: 3,
        title: 'Weather Dashboard',
        description: 'Dashboard meteorológico con visualización de datos en tiempo real, mapas interactivos y pronósticos extendidos.',
        image: 'assets/images/projects/weather.jpg',
        technologies: ['JavaScript', 'Chart.js', 'OpenWeather API', 'CSS3'],
        liveUrl: 'https://weather-demo.com',
        githubUrl: 'https://github.com/emilianohuerta/weather',
        category: 'web'
      },
      {
        id: 4,
        title: 'Mobile Banking App',
        description: 'Aplicación móvil de banca con autenticación biométrica, transferencias seguras y gestión de inversiones.',
        image: 'assets/images/projects/banking.jpg',
        technologies: ['React Native', 'Node.js', 'PostgreSQL', 'JWT'],
        liveUrl: null,
        githubUrl: 'https://github.com/emilianohuerta/banking',
        category: 'mobile'
      },
      {
        id: 5,
        title: 'AI Chatbot',
        description: 'Chatbot inteligente con procesamiento de lenguaje natural, integración con APIs y aprendizaje automático.',
        image: 'assets/images/projects/chatbot.jpg',
        technologies: ['Python', 'TensorFlow', 'Flask', 'OpenAI API'],
        liveUrl: 'https://chatbot-demo.com',
        githubUrl: 'https://github.com/emilianohuerta/chatbot',
        category: 'ai'
      },
      {
        id: 6,
        title: 'Portfolio Website',
        description: 'Sitio web personal responsivo con diseño minimalista, modo oscuro y optimización SEO.',
        image: 'assets/images/projects/portfolio.jpg',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
        liveUrl: 'https://emilianohuerta.dev',
        githubUrl: 'https://github.com/emilianohuerta/portfolio',
        category: 'web'
      }
    ];
  }

  getContent() {
    return `
      <!-- Filter Buttons -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button class="filter-btn px-6 py-2 rounded-full font-medium transition-all duration-200 ${this.activeFilter === 'all' ? 'bg-navy-blue text-white dark:bg-cyan-blue' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600'}" 
                data-filter="all">
          Todos
        </button>
        <button class="filter-btn px-6 py-2 rounded-full font-medium transition-all duration-200 ${this.activeFilter === 'web' ? 'bg-navy-blue text-white dark:bg-cyan-blue' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600'}" 
                data-filter="web">
          Web
        </button>
        <button class="filter-btn px-6 py-2 rounded-full font-medium transition-all duration-200 ${this.activeFilter === 'mobile' ? 'bg-navy-blue text-white dark:bg-cyan-blue' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600'}" 
                data-filter="mobile">
          Móvil
        </button>
        <button class="filter-btn px-6 py-2 rounded-full font-medium transition-all duration-200 ${this.activeFilter === 'ai' ? 'bg-navy-blue text-white dark:bg-cyan-blue' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600'}" 
                data-filter="ai">
          IA
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid">
        ${this.renderProjects()}
      </div>

      <!-- Project Modal -->
      <div id="project-modal" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden flex items-center justify-center p-4">
        <div class="bg-white dark:bg-slate-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <h3 id="modal-title" class="text-2xl font-bold text-navy-blue dark:text-cyan-blue"></h3>
              <button id="close-modal" class="text-gray-500 hover:text-gray-700 dark:text-slate-400 dark:hover:text-slate-200">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div id="modal-content" class="space-y-4"></div>
          </div>
        </div>
      </div>
    `;
  }

  renderProjects() {
    const filteredProjects = this.activeFilter === 'all' 
      ? this.projects 
      : this.projects.filter(project => project.category === this.activeFilter);

    return filteredProjects.map(project => `
      <div class="project-card bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
        <div class="relative">
          <img src="${project.image}" 
               alt="${project.title}" 
               class="w-full h-48 object-cover"
               loading="lazy">
          <div class="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <button class="view-project-btn opacity-0 hover:opacity-100 bg-white dark:bg-slate-800 text-navy-blue dark:text-cyan-blue px-4 py-2 rounded-lg font-medium transition-all duration-200"
                    data-project-id="${project.id}">
              Ver Detalles
            </button>
          </div>
        </div>
        
        <div class="p-6">
          <h3 class="text-xl font-semibold text-navy-blue dark:text-cyan-blue mb-2">
            ${project.title}
          </h3>
          
          <p class="text-gray-600 dark:text-slate-400 mb-4 line-clamp-3">
            ${project.description}
          </p>
          
          <div class="flex flex-wrap gap-2 mb-4">
            ${project.technologies.map(tech => `
              <span class="tech-tag">${tech}</span>
            `).join('')}
          </div>
          
          <div class="flex gap-3">
            ${project.liveUrl ? `
              <a href="${project.liveUrl}" 
                 target="_blank" 
                 class="flex-1 bg-navy-blue dark:bg-cyan-blue text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-cyan-blue dark:hover:bg-navy-blue transition-colors duration-200">
                Ver Demo
              </a>
            ` : ''}
            <a href="${project.githubUrl}" 
               target="_blank" 
               class="flex-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 text-center py-2 px-4 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-200">
              Código
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }

  attachEventListeners() {
    // Filter buttons
    const filterButtons = this.container.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const filter = e.target.getAttribute('data-filter');
        this.setActiveFilter(filter);
      });
    });

    // Project view buttons
    this.container.addEventListener('click', (e) => {
      if (e.target.classList.contains('view-project-btn')) {
        const projectId = parseInt(e.target.getAttribute('data-project-id'));
        this.showProjectModal(projectId);
      }
    });

    // Modal close button
    const closeModalBtn = this.container.querySelector('#close-modal');
    const modal = this.container.querySelector('#project-modal');
    
    if (closeModalBtn && modal) {
      closeModalBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
      });

      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.add('hidden');
        }
      });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
      }
    });
  }

  setActiveFilter(filter) {
    this.activeFilter = filter;
    
    // Update filter buttons
    const filterButtons = this.container.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
      const buttonFilter = button.getAttribute('data-filter');
      if (buttonFilter === filter) {
        button.classList.add('bg-navy-blue', 'text-white', 'dark:bg-cyan-blue');
        button.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200', 'dark:bg-slate-700', 'dark:text-slate-300', 'dark:hover:bg-slate-600');
      } else {
        button.classList.remove('bg-navy-blue', 'text-white', 'dark:bg-cyan-blue');
        button.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200', 'dark:bg-slate-700', 'dark:text-slate-300', 'dark:hover:bg-slate-600');
      }
    });

    // Update projects grid
    const projectsGrid = this.container.querySelector('#projects-grid');
    if (projectsGrid) {
      projectsGrid.innerHTML = this.renderProjects();
    }
  }

  showProjectModal(projectId) {
    const project = this.projects.find(p => p.id === projectId);
    if (!project) return;

    const modal = this.container.querySelector('#project-modal');
    const modalTitle = this.container.querySelector('#modal-title');
    const modalContent = this.container.querySelector('#modal-content');

    if (modal && modalTitle && modalContent) {
      modalTitle.textContent = project.title;
      
      modalContent.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="w-full h-64 object-cover rounded-lg mb-4">
        <p class="text-gray-700 dark:text-slate-300 mb-4">${project.description}</p>
        <div class="flex flex-wrap gap-2 mb-6">
          ${project.technologies.map(tech => `
            <span class="tech-tag">${tech}</span>
          `).join('')}
        </div>
        <div class="flex gap-3">
          ${project.liveUrl ? `
            <a href="${project.liveUrl}" 
               target="_blank" 
               class="flex-1 bg-navy-blue dark:bg-cyan-blue text-white text-center py-3 px-6 rounded-lg font-medium hover:bg-cyan-blue dark:hover:bg-navy-blue transition-colors duration-200">
              Ver Demo
            </a>
          ` : ''}
          <a href="${project.githubUrl}" 
             target="_blank" 
             class="flex-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 text-center py-3 px-6 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-200">
            Ver Código
          </a>
        </div>
      `;

      modal.classList.remove('hidden');
    }
  }
}
