/**
 * Home Section Component
 * Hero section with personal information and call-to-action buttons
 * Uses Tailwind CSS classes for styling
 */

class Home extends Section {
  constructor(containerId) {
    super(containerId, 'home', '');
  }

  getContent() {
    return `
      <div class="min-h-screen flex items-center py-20 relative overflow-hidden">
        <!-- Background decorative elements -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-20 left-10 w-32 h-32 bg-cyan-blue/10 rounded-full animate-pulse-custom"></div>
          <div class="absolute top-40 right-20 w-24 h-24 bg-navy-blue/10 rounded-full animate-pulse-custom" style="animation-delay: 2s;"></div>
          <div class="absolute bottom-20 left-1/4 w-16 h-16 bg-cyan-blue/20 rounded-full animate-pulse-custom" style="animation-delay: 4s;"></div>
          <div class="absolute bottom-40 right-1/3 w-20 h-20 bg-navy-blue/20 rounded-full animate-pulse-custom" style="animation-delay: 1s;"></div>
        </div>

        <div class="container relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <!-- Hero Image -->
            <div class="order-2 lg:order-1 text-center lg:text-left animate-on-scroll">
              <div class="relative inline-block">
                <div class="relative">
                  <img src="assets/images/profile/headshot.jpg" 
                       alt="${CONFIG.personal.name}" 
                       class="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-gray-200 dark:border-slate-700 hover:border-navy-blue dark:hover:border-cyan-blue transition-all duration-300 hover:scale-105 mx-auto lg:mx-0 hero-image">
                  <!-- Floating decorative elements -->
                  <div class="absolute -top-4 -right-4 w-24 h-24 bg-cyan-blue rounded-full opacity-20 animate-pulse-custom"></div>
                  <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-navy-blue rounded-full opacity-20 animate-pulse-custom" style="animation-delay: 1s;"></div>
                  <div class="absolute top-1/2 -right-8 w-8 h-8 bg-cyan-blue rounded-full opacity-30 animate-bounce-custom" style="animation-delay: 0.5s;"></div>
                  <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-cyan-blue rounded-full flex items-center justify-center hover-scale">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                </div>
                <!-- Glow effect behind image -->
                <div class="absolute inset-0 rounded-full bg-gradient-to-r from-navy-blue/20 to-cyan-blue/20 blur-xl scale-110 -z-10"></div>
              </div>
            </div>

            <!-- Hero Text -->
            <div class="order-1 lg:order-2 text-center lg:text-left animate-on-scroll">
              <div class="animate-stagger">
                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-blue dark:text-cyan-blue mb-4 gradient-text">
                  ${CONFIG.personal.name}
                </h1>
              </div>
              
              <div class="animate-stagger">
                <p class="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-slate-400 font-medium mb-6">
                  ${CONFIG.personal.title}
                </p>
              </div>
              
              <div class="animate-stagger">
                <p class="text-base sm:text-lg text-gray-700 dark:text-slate-300 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 px-4 sm:px-0">
                  ${CONFIG.personal.bio}
                </p>
              </div>

              <!-- Action Buttons -->
              <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-stagger">
                <a href="#contact" class="btn-primary inline-flex items-center justify-center hover-lift focus-ring">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  Contactar
                </a>
                
                <a href="assets/docs/resume.pdf" 
                   target="_blank" 
                   class="btn-secondary inline-flex items-center justify-center hover-lift focus-ring">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  Ver CV
                </a>
              </div>

              <!-- Social Links -->
              <div class="flex justify-center lg:justify-start space-x-4 sm:space-x-6 mt-8 animate-stagger">
                <a href="${CONFIG.personal.github}" 
                   target="_blank" 
                   class="text-gray-600 dark:text-slate-400 hover:text-navy-blue dark:hover:text-cyan-blue transition-colors duration-200 hover-scale focus-ring p-2 rounded-full">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                
                <a href="${CONFIG.personal.linkedin}" 
                   target="_blank" 
                   class="text-gray-600 dark:text-slate-400 hover:text-navy-blue dark:hover:text-cyan-blue transition-colors duration-200 hover-scale focus-ring p-2 rounded-full">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                <a href="${CONFIG.personal.twitter}" 
                   target="_blank" 
                   class="text-gray-600 dark:text-slate-400 hover:text-navy-blue dark:hover:text-cyan-blue transition-colors duration-200 hover-scale focus-ring p-2 rounded-full">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  attachEventListeners() {
    // Add intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = this.container.querySelectorAll(
      '[class*="animate-"]'
    );
    animatedElements.forEach((el) => {
      observer.observe(el);
    });
  }
}
