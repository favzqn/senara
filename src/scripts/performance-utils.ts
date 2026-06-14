import { getText } from './shared-utils';

declare const Monogatari: {
  prototype: {
    showScene?: (sceneName: string) => void;
  };
} | undefined;

export function createLoadingIndicator(message = getText('common.loading', 'Loading...')): HTMLDivElement {
  const loader = document.createElement('div');
  loader.className = 'senara-loading-indicator';
  loader.innerHTML = `
    <div class="loading-spinner"></div>
    <p class="loading-text">${message}</p>
  `;
  return loader;
}

export function showLoadingIndicator(message = getText('common.loading', 'Loading...')): HTMLDivElement {
  const loader = createLoadingIndicator(message);
  document.body.appendChild(loader);
  return loader;
}

export function hideLoadingIndicator(loader: HTMLElement): void {
  if (loader && loader.parentNode) {
    loader.remove();
  }
}

export function setupLazyLoading(): void {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll<HTMLImageElement>('img[data-src]').forEach((img) => {
      img.src = img.dataset.src!;
      img.removeAttribute('data-src');
    });
    return;
  }

  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            img.classList.add('lazy-loaded');
          }
          observer.unobserve(img);
        }
      });
    },
    { rootMargin: '50px' }
  );

  document.querySelectorAll<HTMLImageElement>('img[data-src]').forEach((img) => {
    imageObserver.observe(img);
  });
}

export function preloadCriticalImages(imagePaths: string[]): void {
  imagePaths.forEach((path) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = path;
    document.head.appendChild(link);
  });
}

export function setupSceneLoadingIndicator(): void {
  if (typeof Monogatari !== 'undefined') {
    const originalShowScene = Monogatari.prototype.showScene;
    if (originalShowScene) {
      Monogatari.prototype.showScene = function (sceneName: string) {
        const loader = showLoadingIndicator(getText('common.loadingScene', 'Loading scene...'));
        requestAnimationFrame(() => {
          originalShowScene.call(this, sceneName);
          setTimeout(() => hideLoadingIndicator(loader), 300);
        });
      };
    }
  }
}

export function optimizeImagesForMobile(): void {
  document.querySelectorAll('img').forEach((img) => {
    if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
    if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');
    if (!img.hasAttribute('alt')) img.setAttribute('alt', 'Senara visual novel image');
  });
}

export function initPerformanceOptimizations(): void {
  setupLazyLoading();
  optimizeImagesForMobile();
  setupSceneLoadingIndicator();
}
