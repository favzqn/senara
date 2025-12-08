// Reusable Footer Component
// Renders consistent footer across all pages

function getFooterHTML() {
  const useI18n = typeof I18n !== 'undefined' && I18n.isReady && I18n.isReady();
  const getText = (key, fallback) => {
    if (useI18n) {
      const translation = I18n.t(key);
      if (translation && translation !== key) {
        return translation;
      }
    }
    return fallback;
  };

  const footerTexts = {
    tagline: getText('footer.tagline', 'Platform cerita interaktif untuk belajar hal-hal penting lewat pengalaman yang bermakna.'),
    explore: getText('footer.explore', 'Jelajahi'),
    home: getText('footer.home', 'Beranda'),
    storyCollection: getText('footer.storyCollection', 'Koleksi Cerita'),
    aboutUs: getText('footer.aboutUs', 'Tentang Kami'),
    team: getText('footer.team', 'Tim Senara'),
    approach: getText('footer.approach', 'Pendekatan'),
    roadmap: getText('footer.roadmap', 'Peta Jalan'),
    support: getText('footer.support', 'Dukungan'),
    faq: getText('footer.faq', 'FAQ'),
    safety: getText('footer.safety', 'Keselamatan'),
    contactUs: getText('footer.contactUs', 'Hubungi Kami'),
    contribute: getText('footer.contribute', 'Berkontribusi'),
    forOrganizations: getText('footer.forOrganizations', 'Untuk Organisasi'),
    supportSenara: getText('footer.supportSenara', 'Dukung Senara'),
    startReading: getText('footer.startReading', 'Mulai Membaca'),
    startReadingDesc: getText('footer.startReadingDesc', 'Temukan cerita interaktif yang sesuai dengan minatmu.'),
    viewCollection: getText('footer.viewCollection', 'Lihat Koleksi →'),
    nonprofit: getText('footer.nonprofit', 'Nonprofit'),
    freeForAll: getText('footer.freeForAll', 'Gratis untuk semua'),
    privacy: getText('footer.privacy', 'Privasi'),
    terms: getText('footer.terms', 'Syarat'),
    accessibility: getText('footer.accessibility', 'Aksesibilitas'),
    copyright: getText('footer.copyright', 'Senara. Dibuat dengan ❤️ di Indonesia.'),
  };

  const exploreLinks = [
    { href: 'index.html', label: footerTexts.home, event: 'Footer Beranda' },
    { href: 'koleksi.html', label: footerTexts.storyCollection, event: 'Footer Koleksi' },
    { href: 'about.html', label: footerTexts.aboutUs, event: 'Footer Tentang' },
    { href: 'tim.html', label: footerTexts.team, event: 'Footer Tim' },
    { href: 'pendekatan.html', label: footerTexts.approach, event: 'Footer Pendekatan' },
    { href: 'roadmap.html', label: footerTexts.roadmap, event: 'Footer Roadmap' },
  ];

  const supportLinks = [
    { href: 'faq.html', label: footerTexts.faq, event: 'Footer FAQ' },
    { href: 'keselamatan.html', label: footerTexts.safety, event: 'Footer Keselamatan' },
    { href: 'kontak.html', label: footerTexts.contactUs, event: 'Footer Kontak' },
    { href: 'contribute.html', label: footerTexts.contribute, event: 'Footer Berkontribusi' },
    { href: 'untuk-organisasi.html', label: footerTexts.forOrganizations, event: 'Footer Organisasi' },
    { href: 'donasi.html', label: footerTexts.supportSenara, event: 'Footer Donasi' },
  ];

  const legalLinks = [
    { href: 'privacy.html', label: footerTexts.privacy, event: 'Footer Privacy' },
    { href: 'terms.html', label: footerTexts.terms, event: 'Footer Terms' },
    { href: 'aksesibilitas.html', label: footerTexts.accessibility, event: 'Footer Aksesibilitas' },
  ];

  const year = new Date().getFullYear();

  return `
    <footer class="senara-footer">
      <div class="footer-main">
        <!-- Main Grid -->
        <div class="footer-grid">
          <!-- Brand Column -->
          <div class="footer-brand">
            <a href="index.html" class="footer-logo">Senara</a>
            <p class="footer-tagline">${footerTexts.tagline}</p>
            <div class="footer-social">
              <a href="https://instagram.com/idsenara" target="_blank" rel="noopener" class="footer-social-link" data-umami-event="Footer Instagram" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://trakteer.id/senara.id" target="_blank" rel="noopener" class="footer-social-link" data-umami-event="Footer Trakteer" aria-label="Trakteer">
                🍰
              </a>
            </div>
          </div>

          <!-- Explore Column -->
          <div class="footer-column">
            <h4>${footerTexts.explore}</h4>
            ${exploreLinks.map(link => `<a href="${link.href}" data-umami-event="${link.event}">${link.label}</a>`).join('')}
          </div>

          <!-- Support Column -->
          <div class="footer-column">
            <h4>${footerTexts.support}</h4>
            ${supportLinks.map(link => `<a href="${link.href}" data-umami-event="${link.event}">${link.label}</a>`).join('')}
          </div>

          <!-- CTA Column -->
          <div class="footer-column footer-cta-column">
            <h4>${footerTexts.startReading}</h4>
            <p>${footerTexts.startReadingDesc}</p>
            <a href="koleksi.html" class="footer-cta-btn" data-umami-event="Footer CTA Koleksi">
              ${footerTexts.viewCollection}
            </a>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="footer-bottom">
          <div class="footer-bottom-left">
            <span class="footer-badge">🌱 ${footerTexts.nonprofit}</span>
            <span class="footer-badge">💚 ${footerTexts.freeForAll}</span>
          </div>
          <p class="footeropyright">&copy; ${year} ${footerTexts.copyright}</p>
          <div class="footer-legal">
            ${legalLinks.map(link => `<a href="${link.href}" data-umami-event="${link.event}">${link.label}</a>`).join('')}
          </div>
        </div>
      </div>
    </footer>
  `;
}

function initFooter() {
  let footerContainer = document.querySelector("footer");

  if (!footerContainer) {
    footerContainer = document.createElement("div");
    footerContainer.id = "footer-placeholder";
    document.body.appendChild(footerContainer);
  }

  footerContainer.outerHTML = getFooterHTML();
}
