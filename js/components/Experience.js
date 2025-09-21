/**
 * Experience Section Component
 * Professional experience timeline
 * Uses Tailwind CSS classes for styling
 */

class Experience extends Section {
  constructor(containerId) {
    super(containerId, 'experience', 'Experiencia Profesional');
  }

  getContent() {
    return `
      <div class="relative">
        <!-- Timeline -->
        <div class="timeline">
          ${this.getExperienceData().map((exp, index) => `
            <div class="experience-item bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-6 mb-8 ml-8 shadow-lg">
              <div class="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                <div class="flex-1">
                  <h3 class="text-xl font-semibold text-navy-blue dark:text-cyan-blue mb-1">
                    ${exp.position}
                  </h3>
                  <div class="flex items-center mb-2">
                    <span class="text-gray-600 dark:text-slate-400 font-medium">${exp.company}</span>
                    ${exp.website ? `
                      <a href="${exp.website}" 
                         target="_blank" 
                         class="ml-2 text-gray-500 hover:text-navy-blue dark:hover:text-cyan-blue transition-colors duration-200">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                      </a>
                    ` : ''}
                  </div>
                  <p class="text-gray-600 dark:text-slate-400 text-sm">
                    ${exp.location}
                  </p>
                </div>
                <div class="text-sm text-gray-500 dark:text-slate-500 font-medium mt-2 lg:mt-0">
                  ${exp.period}
                </div>
              </div>
              
              <p class="text-gray-700 dark:text-slate-300 mb-4 leading-relaxed">
                ${exp.description}
              </p>
              
              ${exp.achievements && exp.achievements.length > 0 ? `
                <div class="mb-4">
                  <h4 class="font-medium text-gray-900 dark:text-slate-100 mb-2">Logros Principales:</h4>
                  <ul class="space-y-1">
                    ${exp.achievements.map(achievement => `
                      <li class="flex items-start">
                        <span class="text-cyan-blue dark:text-navy-blue mr-2 mt-1">▶</span>
                        <span class="text-gray-700 dark:text-slate-300 text-sm">${achievement}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              ` : ''}
              
              ${exp.technologies && exp.technologies.length > 0 ? `
                <div class="flex flex-wrap gap-2">
                  ${exp.technologies.map(tech => `
                    <span class="tech-tag">${tech}</span>
                  `).join('')}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  getExperienceData() {
    return [
      {
        position: 'Senior Full Stack Developer',
        company: 'TechCorp Solutions',
        website: 'https://techcorp.com',
        location: 'Ciudad de México, México',
        period: 'Enero 2022 - Presente',
        description: 'Lidero el desarrollo de aplicaciones web escalables y arquitecturas de microservicios. Trabajo con equipos ágiles para entregar soluciones innovadoras que impactan a más de 100,000 usuarios.',
        achievements: [
          'Aumenté el rendimiento de la aplicación principal en un 40% mediante optimización de consultas y caching',
          'Implementé un sistema de CI/CD que redujo el tiempo de despliegue de 2 horas a 15 minutos',
          'Mentoré a 3 desarrolladores junior, mejorando sus habilidades técnicas y de trabajo en equipo',
          'Diseñé e implementé una arquitectura de microservicios que soporta 10x más tráfico'
        ],
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'TypeScript']
      },
      {
        position: 'Full Stack Developer',
        company: 'StartupXYZ',
        website: 'https://startupxyz.com',
        location: 'Ciudad de México, México',
        period: 'Marzo 2020 - Diciembre 2021',
        description: 'Desarrollé aplicaciones web completas desde cero, trabajando tanto en frontend como backend. Participé en todas las fases del ciclo de desarrollo de software.',
        achievements: [
          'Desarrollé una plataforma de e-commerce que generó $500K en ventas en el primer año',
          'Creé un sistema de autenticación robusto que redujo las vulnerabilidades de seguridad en un 90%',
          'Implementé testing automatizado que aumentó la cobertura de código del 60% al 95%',
          'Optimicé la base de datos resultando en una mejora del 60% en tiempos de respuesta'
        ],
        technologies: ['Vue.js', 'Express', 'MongoDB', 'JWT', 'Jest', 'Redis']
      },
      {
        position: 'Frontend Developer',
        company: 'Digital Agency Pro',
        website: 'https://digitalagencypro.com',
        location: 'Ciudad de México, México',
        period: 'Junio 2019 - Febrero 2020',
        description: 'Especializado en desarrollo frontend, creé interfaces de usuario atractivas y funcionales para diversos clientes. Trabajé con metodologías ágiles y colaboré estrechamente con diseñadores.',
        achievements: [
          'Desarrollé 15+ sitios web responsivos con excelente rendimiento y accesibilidad',
          'Implementé un sistema de componentes reutilizables que aceleró el desarrollo en un 50%',
          'Mejoré la experiencia de usuario resultando en un aumento del 25% en conversiones',
          'Colaboré con el equipo de diseño para crear un sistema de diseño consistente'
        ],
        technologies: ['JavaScript', 'React', 'SASS', 'Webpack', 'Figma', 'Git']
      },
      {
        position: 'Junior Web Developer',
        company: 'WebDev Solutions',
        website: null,
        location: 'Ciudad de México, México',
        period: 'Enero 2019 - Mayo 2019',
        description: 'Inicié mi carrera profesional desarrollando sitios web estáticos y dinámicos. Aprendí las mejores prácticas de desarrollo web y trabajé en proyectos reales para clientes.',
        achievements: [
          'Desarrollé 8 sitios web corporativos utilizando HTML, CSS y JavaScript',
          'Aprendí a trabajar con APIs REST y bases de datos relacionales',
          'Implementé técnicas de SEO que mejoraron el ranking de los sitios en un 30%',
          'Colaboré en el mantenimiento y actualización de sitios web existentes'
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap']
      }
    ];
  }
}
