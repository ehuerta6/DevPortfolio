/**
 * Education Section Component
 * Academic background, courses, and continuous learning
 * Uses Tailwind CSS classes for styling
 */

class Education extends Section {
  constructor(containerId) {
    super(containerId, 'education', 'Educación y Formación');
  }

  getContent() {
    return `
      <div class="space-y-12">
        <!-- Formal Education -->
        <div>
          <h3 class="text-2xl font-semibold text-navy-blue dark:text-cyan-blue mb-8">
            Formación Académica
          </h3>
          <div class="space-y-8">
            ${this.getFormalEducation().map(edu => `
              <div class="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-6 shadow-lg">
                <div class="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <div class="flex-1">
                    <h4 class="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-2">
                      ${edu.degree}
                    </h4>
                    <p class="text-gray-600 dark:text-slate-400 font-medium mb-1">
                      ${edu.institution}
                    </p>
                    <p class="text-gray-500 dark:text-slate-500 text-sm">
                      ${edu.location}
                    </p>
                  </div>
                  <div class="text-sm text-gray-500 dark:text-slate-500 font-medium mt-2 lg:mt-0">
                    ${edu.period}
                  </div>
                </div>
                
                ${edu.description ? `
                  <p class="text-gray-700 dark:text-slate-300 mb-4 leading-relaxed">
                    ${edu.description}
                  </p>
                ` : ''}
                
                ${edu.gpa ? `
                  <div class="flex items-center mb-4">
                    <span class="text-sm text-gray-600 dark:text-slate-400 mr-2">GPA:</span>
                    <span class="font-semibold text-navy-blue dark:text-cyan-blue">${edu.gpa}</span>
                  </div>
                ` : ''}
                
                ${edu.relevantCourses && edu.relevantCourses.length > 0 ? `
                  <div class="mb-4">
                    <h5 class="font-medium text-gray-900 dark:text-slate-100 mb-2">Cursos Relevantes:</h5>
                    <div class="flex flex-wrap gap-2">
                      ${edu.relevantCourses.map(course => `
                        <span class="tech-tag">${course}</span>
                      `).join('')}
                    </div>
                  </div>
                ` : ''}
                
                ${edu.achievements && edu.achievements.length > 0 ? `
                  <div>
                    <h5 class="font-medium text-gray-900 dark:text-slate-100 mb-2">Logros Académicos:</h5>
                    <ul class="space-y-1">
                      ${edu.achievements.map(achievement => `
                        <li class="flex items-start text-sm text-gray-700 dark:text-slate-300">
                          <span class="text-cyan-blue dark:text-navy-blue mr-2 mt-0.5">•</span>
                          <span>${achievement}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Online Courses and Certifications -->
        <div>
          <h3 class="text-2xl font-semibold text-navy-blue dark:text-cyan-blue mb-8">
            Cursos y Certificaciones Online
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${this.getOnlineCourses().map(course => `
              <div class="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-gray-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <img src="${course.platformLogo}" 
                         alt="${course.platform}" 
                         class="w-8 h-8 object-contain">
                  </div>
                  <div class="flex-1">
                    <h4 class="font-semibold text-gray-900 dark:text-slate-100 mb-1">
                      ${course.title}
                    </h4>
                    <p class="text-gray-600 dark:text-slate-400 text-sm mb-1">
                      ${course.platform}
                    </p>
                    <p class="text-gray-500 dark:text-slate-500 text-xs">
                      ${course.date}
                    </p>
                  </div>
                </div>
                
                <p class="text-gray-700 dark:text-slate-300 text-sm mb-3 leading-relaxed">
                  ${course.description}
                </p>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <span class="text-xs text-gray-500 dark:text-slate-500 mr-2">Duración:</span>
                    <span class="text-xs font-medium text-gray-700 dark:text-slate-300">${course.duration}</span>
                  </div>
                  ${course.certificateUrl ? `
                    <a href="${course.certificateUrl}" 
                       target="_blank" 
                       class="text-navy-blue dark:text-cyan-blue hover:text-cyan-blue dark:hover:text-navy-blue text-xs font-medium transition-colors duration-200">
                      Ver Certificado
                    </a>
                  ` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Skills and Technologies -->
        <div>
          <h3 class="text-2xl font-semibold text-navy-blue dark:text-cyan-blue mb-8">
            Tecnologías y Herramientas
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${this.getTechnologyCategories().map(category => `
              <div class="text-center">
                <h4 class="font-semibold text-gray-900 dark:text-slate-100 mb-4">
                  ${category.name}
                </h4>
                <div class="flex flex-wrap justify-center gap-2">
                  ${category.technologies.map(tech => `
                    <span class="tech-tag">${tech}</span>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Continuous Learning -->
        <div class="bg-gradient-to-r from-navy-blue to-cyan-blue dark:from-cyan-blue dark:to-navy-blue rounded-lg p-8 text-white">
          <div class="text-center">
            <h3 class="text-2xl font-semibold mb-4">
              Aprendizaje Continuo
            </h3>
            <p class="text-blue-100 dark:text-cyan-100 mb-6 max-w-2xl mx-auto">
              Creo firmemente en el aprendizaje continuo. Dedico tiempo regularmente a estudiar nuevas tecnologías, 
              participar en conferencias y contribuir a la comunidad de desarrolladores.
            </p>
            <div class="flex flex-wrap justify-center gap-4 text-sm">
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>+50 cursos completados</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>+20 conferencias asistidas</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>+100 artículos técnicos leídos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  getFormalEducation() {
    return [
      {
        degree: 'Ingeniería en Sistemas Computacionales',
        institution: 'Instituto Tecnológico de México',
        location: 'Ciudad de México, México',
        period: '2015 - 2019',
        gpa: '9.2/10',
        description: 'Formación integral en ciencias de la computación con enfoque en desarrollo de software, bases de datos y arquitecturas de sistemas.',
        relevantCourses: [
          'Estructuras de Datos',
          'Algoritmos y Complejidad',
          'Bases de Datos',
          'Ingeniería de Software',
          'Redes de Computadoras',
          'Inteligencia Artificial'
        ],
        achievements: [
          'Graduado con mención honorífica',
          'Proyecto de tesis: "Sistema de Recomendaciones usando Machine Learning"',
          'Participación en 3 concursos de programación',
          'Mentor de estudiantes de semestres inferiores'
        ]
      }
    ];
  }

  getOnlineCourses() {
    return [
      {
        title: 'Advanced React Patterns',
        platform: 'Frontend Masters',
        platformLogo: 'assets/images/courses/frontend-masters.png',
        date: 'Enero 2024',
        duration: '8 horas',
        description: 'Patrones avanzados de React incluyendo hooks personalizados, render props, y optimización de rendimiento.',
        certificateUrl: 'https://frontendmasters.com/certificates/123456'
      },
      {
        title: 'System Design Interview',
        platform: 'Educative',
        platformLogo: 'assets/images/courses/educative.png',
        date: 'Diciembre 2023',
        duration: '12 horas',
        description: 'Diseño de sistemas escalables, arquitecturas distribuidas y patrones de microservicios.',
        certificateUrl: 'https://educative.io/certificates/789012'
      },
      {
        title: 'Machine Learning Fundamentals',
        platform: 'Coursera',
        platformLogo: 'assets/images/courses/coursera.png',
        date: 'Noviembre 2023',
        duration: '40 horas',
        description: 'Fundamentos de machine learning, algoritmos supervisados y no supervisados, y evaluación de modelos.',
        certificateUrl: 'https://coursera.org/verify/345678'
      },
      {
        title: 'Docker and Kubernetes',
        platform: 'Pluralsight',
        platformLogo: 'assets/images/courses/pluralsight.png',
        date: 'Octubre 2023',
        duration: '15 horas',
        description: 'Containerización con Docker y orquestación con Kubernetes para aplicaciones escalables.',
        certificateUrl: 'https://pluralsight.com/certificates/901234'
      },
      {
        title: 'Clean Architecture',
        platform: 'Udemy',
        platformLogo: 'assets/images/courses/udemy.png',
        date: 'Septiembre 2023',
        duration: '10 horas',
        description: 'Principios SOLID, arquitectura limpia y patrones de diseño para código mantenible.',
        certificateUrl: 'https://udemy.com/certificates/567890'
      },
      {
        title: 'GraphQL with Node.js',
        platform: 'LinkedIn Learning',
        platformLogo: 'assets/images/courses/linkedin.png',
        date: 'Agosto 2023',
        duration: '6 horas',
        description: 'Implementación de APIs GraphQL con Node.js, resolvers y optimización de consultas.',
        certificateUrl: 'https://linkedin.com/learning/certificates/123789'
      }
    ];
  }

  getTechnologyCategories() {
    return [
      {
        name: 'Frontend',
        technologies: [
          'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Angular', 
          'HTML5', 'CSS3', 'SASS', 'Tailwind CSS', 'Webpack', 'Vite'
        ]
      },
      {
        name: 'Backend',
        technologies: [
          'Node.js', 'Express', 'Python', 'Django', 'FastAPI', 
          'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'REST APIs'
        ]
      },
      {
        name: 'DevOps & Tools',
        technologies: [
          'Docker', 'Kubernetes', 'AWS', 'Git', 'CI/CD', 
          'Linux', 'Nginx', 'Jenkins', 'Terraform', 'Monitoring'
        ]
      }
    ];
  }
}
