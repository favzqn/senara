/**
 * Dark Mode Toggle — Senara
 * Supports system preference via prefers-color-scheme and manual toggle.
 * Preference persisted in localStorage under 'senara_dark_mode'.
 */
(function () {
  var root = document.documentElement;
  var stored = localStorage.getItem('senara_dark_mode');

  if (stored === 'dark') {
    root.classList.add('dark');
    root.classList.remove('light');
  } else if (stored === 'light') {
    root.classList.add('light');
    root.classList.remove('dark');
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    root.classList.add('dark');
    root.classList.remove('light');
  } else {
    root.classList.add('light');
    root.classList.remove('dark');
  }
})();

function isDarkMode() {
  var root = document.documentElement;
  if (root.classList.contains('dark')) return true;
  if (root.classList.contains('light')) return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function updateToggleIcons() {
  var dark = isDarkMode();
  var sunSVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
  var moonSVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  document.querySelectorAll('.dark-mode-toggle').forEach(function (btn) {
    btn.innerHTML = dark ? sunSVG : moonSVG;
    btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  });
}

function getDarkModeToggleHTML() {
  return '<button class="dark-mode-toggle" type="button" aria-label="Toggle dark mode" style="display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border:none;background:transparent;border-radius:8px;cursor:pointer;color:inherit;transition:background 0.2s ease;padding:0;margin-left:0.5rem;" onmouseenter="this.style.background=\'rgba(79,70,229,0.1)\'" onmouseleave="this.style.background=\'transparent\'"></button>';
}

function initDarkMode() {
  updateToggleIcons();
}

document.addEventListener('DOMContentLoaded', function () {
  updateToggleIcons();

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.dark-mode-toggle');
    if (!btn) return;

    var root = document.documentElement;
    var dark = isDarkMode();

    if (dark) {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('senara_dark_mode', 'light');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('senara_dark_mode', 'dark');
    }

    updateToggleIcons();
  });
});
