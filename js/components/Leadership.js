/**
 * Leadership Section Component
 * Leadership roles, achievements, and certifications
 * Uses Tailwind CSS classes for styling
 */

class Leadership extends Section {
  constructor(containerId) {
    super(containerId, 'leadership', 'Liderazgo y Reconocimientos');
  }

  getContent() {
    return `
      <div class="space-y-12">
        <!-- Leadership Roles -->
        <div>
          <h3 class="text-2xl font-semibold text-navy-blue dark:text-cyan-blue mb-8">
            Roles de Liderazgo
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${this.getLeadershipRoles().map(role => `
              <div class="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div class="flex items-start mb-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-navy-blue dark:bg-cyan-blue rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-1">
                      ${role.title}
                    </h4>
                    <p class="text-gray-600 dark:text-slate-400 text-sm mb-2">
                      ${role.organization}
                    </p>
                    <p class="text-gray-500 dark:text-slate-500 text-xs">
                      ${role.period}
                    </p>
                  </div>
                </div>
                <p class="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">
                  ${role.description}
                </p>
                ${role.achievements && role.achievements.length > 0 ? `
                  <ul class="mt-3 space-y-1">
                    ${role.achievements.map(achievement => `
                      <li class="flex items-start text-sm text-gray-600 dark:text-slate-400">
                        <span class="text-cyan-blue dark:text-navy-blue mr-2 mt-0.5">•</span>
                        <span>${achievement}</span>
                      </li>
                    `).join('')}
                  </ul>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Awards and Recognition -->
        <div>
          <h3 class="text-2xl font-semibold text-navy-blue dark:text-cyan-blue mb-8">
            Reconocimientos y Premios
          </h3>
          <div class="space-y-6">
            ${this.getAwards().map(award => `
              <div class="bg-gradient-to-r from-navy-blue to-cyan-blue dark:from-cyan-blue dark:to-navy-blue rounded-lg p-6 text-white">
                <div class="flex items-start justify-between">
                  <div class="flex-1">
                    <h4 class="text-xl font-semibold mb-2">
                      ${award.title}
                    </h4>
                    <p class="text-blue-100 dark:text-cyan-100 mb-2">
                      ${award.organization}
                    </p>
                    <p class="text-blue-200 dark:text-cyan-200 text-sm">
                      ${award.date}
                    </p>
                  </div>
                  <div class="flex-shrink-0 ml-4">
                    <svg class="w-8 h-8 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                </div>
                <p class="text-blue-100 dark:text-cyan-100 mt-3 text-sm">
                  ${award.description}
                </p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Certifications -->
        <div>
          <h3 class="text-2xl font-semibold text-navy-blue dark:text-cyan-blue mb-8">
            Certificaciones
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${this.getCertifications().map(cert => `
              <div class="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-gray-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-navy-blue dark:text-cyan-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-slate-100">
                      ${cert.name}
                    </h4>
                    <p class="text-gray-600 dark:text-slate-400 text-sm">
                      ${cert.issuer}
                    </p>
                  </div>
                </div>
                <p class="text-gray-700 dark:text-slate-300 text-sm mb-3">
                  ${cert.description}
                </p>
                <div class="flex items-center justify-between text-xs text-gray-500 dark:text-slate-500">
                  <span>${cert.date}</span>
                  ${cert.credentialId ? `
                    <span class="font-mono">ID: ${cert.credentialId}</span>
                  ` : ''}
                </div>
                ${cert.verifyUrl ? `
                  <a href="${cert.verifyUrl}" 
                     target="_blank" 
                     class="inline-flex items-center mt-3 text-navy-blue dark:text-cyan-blue hover:text-cyan-blue dark:hover:text-navy-blue text-sm font-medium transition-colors duration-200">
                    Verificar Certificado
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  getLeadershipRoles() {
    return [
      {
        title: 'Tech Lead',
        organization: 'TechCorp Solutions',
        period: '2022 - Presente',
        description: 'Lidero un equipo de 8 desarrolladores en la creación de productos innovadores. Establezco estándares técnicos y guío las decisiones arquitectónicas.',
        achievements: [
          'Implementé metodologías ágiles que aumentaron la productividad del equipo en un 35%',
          'Mentoré a 5 desarrolladores junior, 3 de los cuales fueron promovidos',
          'Establecí un proceso de code review que redujo bugs en producción en un 60%'
        ]
      },
      {
        title: 'Mentor de Bootcamp',
        organization: 'CodeAcademy México',
        period: '2021 - Presente',
        description: 'Mentor de estudiantes en bootcamps de programación, ayudándoles a desarrollar habilidades técnicas y de resolución de problemas.',
        achievements: [
          'Mentoré a más de 50 estudiantes con una tasa de empleo del 85%',
          'Creé material educativo que es utilizado por 200+ estudiantes',
          'Desarrollé un programa de seguimiento post-graduación'
        ]
      },
      {
        title: 'Organizador de Meetup',
        organization: 'JavaScript México',
        period: '2020 - 2022',
        description: 'Organizador de eventos mensuales de la comunidad JavaScript, coordinando speakers y facilitando networking entre desarrolladores.',
        achievements: [
          'Organizé 24 eventos con más de 1,200 asistentes en total',
          'Establecí partnerships con 10 empresas tecnológicas',
          'Creé una red de más de 500 desarrolladores'
        ]
      },
      {
        title: 'Contribuidor Open Source',
        organization: 'Proyectos Open Source',
        period: '2019 - Presente',
        description: 'Contribuyo activamente a proyectos open source, especialmente en el ecosistema JavaScript y herramientas de desarrollo.',
        achievements: [
          'Más de 500 contribuciones a proyectos populares',
          'Mantenedor de 3 librerías con más de 1,000 stars en GitHub',
          'Ayudé a resolver más de 200 issues de la comunidad'
        ]
      }
    ];
  }

  getAwards() {
    return [
      {
        title: 'Desarrollador del Año',
        organization: 'TechCorp Solutions',
        date: 'Diciembre 2023',
        description: 'Reconocido por liderazgo excepcional, innovación técnica y contribución al éxito del equipo.'
      },
      {
        title: 'Mejor Proyecto Open Source',
        organization: 'JavaScript México',
        date: 'Octubre 2022',
        description: 'Premio por la librería de componentes React que desarrollé y mantengo activamente.'
      },
      {
        title: 'Speaker Destacado',
        organization: 'DevConf México',
        date: 'Septiembre 2021',
        description: 'Reconocimiento por la presentación sobre "Arquitecturas Escalables en JavaScript" con 500+ asistentes.'
      }
    ];
  }

  getCertifications() {
    return [
      {
        name: 'AWS Solutions Architect',
        issuer: 'Amazon Web Services',
        date: 'Enero 2023',
        description: 'Certificación en diseño de arquitecturas escalables y seguras en AWS.',
        credentialId: 'AWS-SAA-123456',
        verifyUrl: 'https://aws.amazon.com/verification'
      },
      {
        name: 'Google Cloud Professional Developer',
        issuer: 'Google Cloud',
        date: 'Noviembre 2022',
        description: 'Certificación en desarrollo de aplicaciones en Google Cloud Platform.',
        credentialId: 'GCP-PD-789012',
        verifyUrl: 'https://cloud.google.com/certification'
      },
      {
        name: 'Certified Scrum Master',
        issuer: 'Scrum Alliance',
        date: 'Agosto 2022',
        description: 'Certificación en metodologías ágiles y liderazgo de equipos Scrum.',
        credentialId: 'CSM-345678',
        verifyUrl: 'https://scrumalliance.org'
      },
      {
        name: 'React Developer Certification',
        issuer: 'Meta (Facebook)',
        date: 'Junio 2022',
        description: 'Certificación oficial en desarrollo con React y ecosistema relacionado.',
        credentialId: 'META-REACT-901234',
        verifyUrl: 'https://coursera.org'
      },
      {
        name: 'Node.js Application Developer',
        issuer: 'OpenJS Foundation',
        date: 'Marzo 2022',
        description: 'Certificación en desarrollo de aplicaciones backend con Node.js.',
        credentialId: 'NODE-AD-567890',
        verifyUrl: 'https://openjsf.org'
      },
      {
        name: 'Docker Certified Associate',
        issuer: 'Docker Inc.',
        date: 'Enero 2022',
        description: 'Certificación en containerización y orquestación con Docker.',
        credentialId: 'DCA-123789',
        verifyUrl: 'https://docker.com'
      }
    ];
  }
}
