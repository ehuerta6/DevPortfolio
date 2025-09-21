/**
 * About Section Component
 * Personal information, skills, and interests
 * Uses Tailwind CSS classes for styling
 */

class About extends Section {
  constructor(containerId) {
    super(containerId, 'about', 'Sobre Mí');
  }

  getContent() {
    return `
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <!-- Personal Story -->
        <div class="space-y-6">
          <h3 class="text-2xl font-semibold text-navy-blue dark:text-cyan-blue mb-4">
            Mi Historia
          </h3>
          <div class="prose prose-lg text-gray-700 dark:text-slate-300 max-w-none">
            <p class="mb-4">
              Soy un desarrollador apasionado con más de 5 años de experiencia creando soluciones web innovadoras. 
              Mi viaje comenzó con la curiosidad de entender cómo funcionan las aplicaciones que usamos todos los días.
            </p>
            <p class="mb-4">
              A lo largo de mi carrera, he trabajado con equipos diversos y he aprendido que la tecnología es solo 
              una herramienta para resolver problemas reales y mejorar la vida de las personas.
            </p>
            <p>
              Cuando no estoy programando, disfruto explorando nuevas tecnologías, contribuyendo a proyectos 
              open source y compartiendo conocimiento con la comunidad de desarrolladores.
            </p>
          </div>
        </div>

        <!-- Skills and Info -->
        <div class="space-y-8">
          <!-- Technical Skills -->
          <div>
            <h3 class="text-2xl font-semibold text-navy-blue dark:text-cyan-blue mb-6">
              Habilidades Técnicas
            </h3>
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-3">
                <h4 class="font-medium text-gray-900 dark:text-slate-100">Frontend</h4>
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600 dark:text-slate-400">JavaScript</span>
                    <div class="w-20 bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                      <div class="bg-navy-blue dark:bg-cyan-blue h-2 rounded-full" style="width: 95%"></div>
                    </div>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600 dark:text-slate-400">React</span>
                    <div class="w-20 bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                      <div class="bg-navy-blue dark:bg-cyan-blue h-2 rounded-full" style="width: 90%"></div>
                    </div>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600 dark:text-slate-400">Vue.js</span>
                    <div class="w-20 bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                      <div class="bg-navy-blue dark:bg-cyan-blue h-2 rounded-full" style="width: 85%"></div>
                    </div>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600 dark:text-slate-400">TypeScript</span>
                    <div class="w-20 bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                      <div class="bg-navy-blue dark:bg-cyan-blue h-2 rounded-full" style="width: 88%"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="space-y-3">
                <h4 class="font-medium text-gray-900 dark:text-slate-100">Backend</h4>
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600 dark:text-slate-400">Node.js</span>
                    <div class="w-20 bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                      <div class="bg-navy-blue dark:bg-cyan-blue h-2 rounded-full" style="width: 92%"></div>
                    </div>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600 dark:text-slate-400">Python</span>
                    <div class="w-20 bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                      <div class="bg-navy-blue dark:bg-cyan-blue h-2 rounded-full" style="width: 80%"></div>
                    </div>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600 dark:text-slate-400">PostgreSQL</span>
                    <div class="w-20 bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                      <div class="bg-navy-blue dark:bg-cyan-blue h-2 rounded-full" style="width: 85%"></div>
                    </div>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600 dark:text-slate-400">MongoDB</span>
                    <div class="w-20 bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                      <div class="bg-navy-blue dark:bg-cyan-blue h-2 rounded-full" style="width: 78%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Personal Info -->
          <div class="bg-gray-50 dark:bg-slate-800 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-navy-blue dark:text-cyan-blue mb-4">
              Información Personal
            </h3>
            <div class="space-y-3">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-gray-500 dark:text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span class="text-gray-700 dark:text-slate-300">${CONFIG.personal.location}</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-gray-500 dark:text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:${CONFIG.personal.email}" class="text-gray-700 dark:text-slate-300 hover:text-navy-blue dark:hover:text-cyan-blue transition-colors duration-200">
                  ${CONFIG.personal.email}
                </a>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-gray-500 dark:text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a href="tel:${CONFIG.personal.phone}" class="text-gray-700 dark:text-slate-300 hover:text-navy-blue dark:hover:text-cyan-blue transition-colors duration-200">
                  ${CONFIG.personal.phone}
                </a>
              </div>
            </div>
          </div>

          <!-- Interests -->
          <div>
            <h3 class="text-xl font-semibold text-navy-blue dark:text-cyan-blue mb-4">
              Intereses
            </h3>
            <div class="flex flex-wrap gap-2">
              <span class="tech-tag">Desarrollo Web</span>
              <span class="tech-tag">Inteligencia Artificial</span>
              <span class="tech-tag">Open Source</span>
              <span class="tech-tag">UI/UX Design</span>
              <span class="tech-tag">DevOps</span>
              <span class="tech-tag">Arquitectura de Software</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
