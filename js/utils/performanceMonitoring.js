/**
 * Performance Monitoring utility for DevPortfolio
 * Tracks performance metrics, user interactions, and analytics
 */

class PerformanceMonitoring {
  constructor() {
    this.metrics = {
      pageLoad: null,
      firstContentfulPaint: null,
      largestContentfulPaint: null,
      firstInputDelay: null,
      cumulativeLayoutShift: null,
      userInteractions: [],
      errors: [],
      pageViews: 0,
    };

    this.analytics = {
      sections: {},
      darkMode: { enabled: 0, disabled: 0 },
      mobile: { visits: 0, desktop: 0 },
      timeOnPage: 0,
      scrollDepth: 0,
    };

    this.startTime = Date.now();
    this.init();
  }

  init() {
    this.setupPerformanceObserver();
    this.setupUserInteractionTracking();
    this.setupErrorTracking();
    this.setupAnalytics();
    this.trackPageView();
  }

  /**
   * Setup Performance Observer for Core Web Vitals
   */
  setupPerformanceObserver() {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              this.metrics.firstContentfulPaint = entry.startTime;
            }
          });
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch (error) {
        console.warn('FCP observer not supported:', error);
      }

      // Largest Contentful Paint
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          this.metrics.largestContentfulPaint = lastEntry.startTime;
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (error) {
        console.warn('LCP observer not supported:', error);
      }

      // First Input Delay
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            this.metrics.firstInputDelay =
              entry.processingStart - entry.startTime;
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (error) {
        console.warn('FID observer not supported:', error);
      }

      // Cumulative Layout Shift
      try {
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          this.metrics.cumulativeLayoutShift = clsValue;
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        console.warn('CLS observer not supported:', error);
      }
    }

    // Page Load Time
    window.addEventListener('load', () => {
      this.metrics.pageLoad = performance.now();
    });
  }

  /**
   * Setup user interaction tracking
   */
  setupUserInteractionTracking() {
    // Track clicks
    document.addEventListener('click', (event) => {
      this.trackInteraction('click', {
        target: event.target.tagName,
        id: event.target.id,
        class: event.target.className,
        href: event.target.href,
        timestamp: Date.now(),
      });
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
          100
      );
      maxScrollDepth = Math.max(maxScrollDepth, scrollDepth);
      this.analytics.scrollDepth = maxScrollDepth;
    });

    // Track section visits
    this.setupSectionTracking();

    // Track dark mode usage
    this.setupDarkModeTracking();

    // Track mobile vs desktop
    this.trackDeviceType();
  }

  /**
   * Track section visits using Intersection Observer
   */
  setupSectionTracking() {
    const sections = document.querySelectorAll('section[id]');

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            this.trackSectionVisit(sectionId);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }

  /**
   * Track dark mode usage
   */
  setupDarkModeTracking() {
    // Listen for dark mode changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class'
        ) {
          const isDark = document.documentElement.classList.contains('dark');
          if (isDark) {
            this.analytics.darkMode.enabled++;
          } else {
            this.analytics.darkMode.disabled++;
          }
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  /**
   * Track device type
   */
  trackDeviceType() {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      this.analytics.mobile.visits++;
    } else {
      this.analytics.mobile.desktop++;
    }
  }

  /**
   * Setup error tracking
   */
  setupErrorTracking() {
    // JavaScript errors
    window.addEventListener('error', (event) => {
      this.trackError('javascript', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error?.stack,
        timestamp: Date.now(),
      });
    });

    // Promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.trackError('promise', {
        reason: event.reason,
        timestamp: Date.now(),
      });
    });

    // Resource loading errors
    window.addEventListener(
      'error',
      (event) => {
        if (event.target !== window) {
          this.trackError('resource', {
            type: event.target.tagName,
            src: event.target.src || event.target.href,
            timestamp: Date.now(),
          });
        }
      },
      true
    );
  }

  /**
   * Setup analytics tracking
   */
  setupAnalytics() {
    // Track time on page
    this.startTime = Date.now();

    // Track page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        this.analytics.timeOnPage += Date.now() - this.startTime;
      } else {
        this.startTime = Date.now();
      }
    });

    // Track before page unload
    window.addEventListener('beforeunload', () => {
      this.analytics.timeOnPage += Date.now() - this.startTime;
      this.sendAnalytics();
    });
  }

  /**
   * Track page view
   */
  trackPageView() {
    this.analytics.pageViews++;
    this.trackInteraction('page_view', {
      url: window.location.href,
      referrer: document.referrer,
      timestamp: Date.now(),
    });
  }

  /**
   * Track user interaction
   */
  trackInteraction(type, data) {
    this.metrics.userInteractions.push({
      type,
      data,
      timestamp: Date.now(),
    });

    // Keep only last 100 interactions
    if (this.metrics.userInteractions.length > 100) {
      this.metrics.userInteractions = this.metrics.userInteractions.slice(-100);
    }
  }

  /**
   * Track section visit
   */
  trackSectionVisit(sectionId) {
    if (!this.analytics.sections[sectionId]) {
      this.analytics.sections[sectionId] = 0;
    }
    this.analytics.sections[sectionId]++;
  }

  /**
   * Track error
   */
  trackError(type, data) {
    this.metrics.errors.push({
      type,
      data,
      timestamp: Date.now(),
    });

    // Keep only last 50 errors
    if (this.metrics.errors.length > 50) {
      this.metrics.errors = this.metrics.errors.slice(-50);
    }
  }

  /**
   * Get performance metrics
   */
  getMetrics() {
    return {
      ...this.metrics,
      analytics: this.analytics,
      userAgent: navigator.userAgent,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      connection: navigator.connection
        ? {
            effectiveType: navigator.connection.effectiveType,
            downlink: navigator.connection.downlink,
            rtt: navigator.connection.rtt,
          }
        : null,
    };
  }

  /**
   * Get Core Web Vitals
   */
  getCoreWebVitals() {
    return {
      FCP: this.metrics.firstContentfulPaint,
      LCP: this.metrics.largestContentfulPaint,
      FID: this.metrics.firstInputDelay,
      CLS: this.metrics.cumulativeLayoutShift,
      pageLoad: this.metrics.pageLoad,
    };
  }

  /**
   * Get analytics data
   */
  getAnalytics() {
    return {
      ...this.analytics,
      totalInteractions: this.metrics.userInteractions.length,
      totalErrors: this.metrics.errors.length,
      mostVisitedSection: this.getMostVisitedSection(),
    };
  }

  /**
   * Get most visited section
   */
  getMostVisitedSection() {
    const sections = this.analytics.sections;
    return Object.keys(sections).reduce(
      (a, b) => (sections[a] > sections[b] ? a : b),
      'home'
    );
  }

  /**
   * Send analytics data (placeholder for real analytics service)
   */
  sendAnalytics() {
    const data = this.getMetrics();

    // In a real implementation, you would send this to your analytics service
    console.log('Analytics Data:', data);

    // Example: Send to Google Analytics, Mixpanel, or custom endpoint
    // this.sendToAnalyticsService(data);
  }

  /**
   * Send to analytics service (placeholder)
   */
  sendToAnalyticsService(data) {
    // Example implementation for Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        custom_map: {
          metric1: data.analytics.scrollDepth,
          metric2: data.analytics.timeOnPage,
        },
      });
    }

    // Example implementation for custom endpoint
    // fetch('/api/analytics', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // }).catch(error => {
    //   console.error('Failed to send analytics:', error);
    // });
  }

  /**
   * Export data for debugging
   */
  exportData() {
    const data = this.getMetrics();
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `portfolio-analytics-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  /**
   * Reset all metrics
   */
  reset() {
    this.metrics = {
      pageLoad: null,
      firstContentfulPaint: null,
      largestContentfulPaint: null,
      firstInputDelay: null,
      cumulativeLayoutShift: null,
      userInteractions: [],
      errors: [],
      pageViews: 0,
    };

    this.analytics = {
      sections: {},
      darkMode: { enabled: 0, disabled: 0 },
      mobile: { visits: 0, desktop: 0 },
      timeOnPage: 0,
      scrollDepth: 0,
    };

    this.startTime = Date.now();
  }

  /**
   * Get performance score (0-100)
   */
  getPerformanceScore() {
    const vitals = this.getCoreWebVitals();
    let score = 100;

    // LCP scoring (0-100)
    if (vitals.LCP) {
      if (vitals.LCP > 4000) score -= 30;
      else if (vitals.LCP > 2500) score -= 20;
      else if (vitals.LCP > 2000) score -= 10;
    }

    // FID scoring (0-100)
    if (vitals.FID) {
      if (vitals.FID > 300) score -= 30;
      else if (vitals.FID > 100) score -= 20;
      else if (vitals.FID > 50) score -= 10;
    }

    // CLS scoring (0-100)
    if (vitals.CLS) {
      if (vitals.CLS > 0.25) score -= 30;
      else if (vitals.CLS > 0.1) score -= 20;
      else if (vitals.CLS > 0.05) score -= 10;
    }

    return Math.max(0, score);
  }
}

// Export for use in other modules
window.PerformanceMonitoring = PerformanceMonitoring;
