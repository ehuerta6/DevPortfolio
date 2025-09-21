/**
 * Lazy Loading utility for images
 * Implements intersection observer for performance optimization
 */

class LazyLoading {
  constructor() {
    this.imageObserver = null;
    this.init();
  }

  init() {
    this.setupImageObserver();
    this.setupLazyImages();
  }

  /**
   * Setup intersection observer for lazy loading
   */
  setupImageObserver() {
    const options = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1,
    };

    this.imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.loadImage(entry.target);
          this.imageObserver.unobserve(entry.target);
        }
      });
    }, options);
  }

  /**
   * Setup lazy loading for all images with data-src attribute
   */
  setupLazyImages() {
    const lazyImages = document.querySelectorAll('img[data-src]');

    lazyImages.forEach((img) => {
      // Add loading placeholder
      this.addLoadingPlaceholder(img);

      // Start observing
      this.imageObserver.observe(img);
    });
  }

  /**
   * Load image and handle loading states
   */
  loadImage(img) {
    const src = img.dataset.src;
    if (!src) return;

    // Add loading class
    img.classList.add('loading');

    // Create new image to preload
    const imageLoader = new Image();

    imageLoader.onload = () => {
      // Image loaded successfully
      img.src = src;
      img.classList.remove('loading');
      img.classList.add('loaded');

      // Remove data-src to prevent reloading
      delete img.dataset.src;
    };

    imageLoader.onerror = () => {
      // Image failed to load
      img.classList.remove('loading');
      img.classList.add('error');

      // Set fallback image or placeholder
      img.src = this.getFallbackImage();
    };

    // Start loading
    imageLoader.src = src;
  }

  /**
   * Add loading placeholder to image
   */
  addLoadingPlaceholder(img) {
    // Add loading skeleton class
    img.classList.add('loading-skeleton');

    // Set placeholder dimensions if not set
    if (!img.style.width && !img.style.height) {
      img.style.width = '100%';
      img.style.height = '200px';
    }
  }

  /**
   * Get fallback image for failed loads
   */
  getFallbackImage() {
    return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY2NjY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbiBubyBkaXNwb25pYmxlPC90ZXh0Pjwvc3ZnPg==';
  }

  /**
   * Add lazy loading to new images dynamically
   */
  addLazyImage(img) {
    if (img.dataset.src) {
      this.addLoadingPlaceholder(img);
      this.imageObserver.observe(img);
    }
  }

  /**
   * Refresh lazy loading for new content
   */
  refresh() {
    this.setupLazyImages();
  }

  /**
   * Destroy observer and cleanup
   */
  destroy() {
    if (this.imageObserver) {
      this.imageObserver.disconnect();
      this.imageObserver = null;
    }
  }
}

// Export for use in other modules
window.LazyLoading = LazyLoading;
