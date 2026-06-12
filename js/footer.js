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

  const t = {
    tagline: getText('footer.tagline', 'Interactive story platform for learning important topics through meaningful experiences.'),
    explore: getText('footer.explore', 'Explore'),
    home: getText('footer.home', 'Home'),
    storyCollection: getText('footer.storyCollection', 'Story Collection'),
    aboutUs: getText('footer.aboutUs', 'About Us'),
    team: getText('footer.team', 'Senara Team'),
    approach: getText('footer.approach', 'Approach'),
    roadmap: getText('footer.roadmap', 'Roadmap'),
    support: getText('footer.support', 'Support'),
    faq: getText('footer.faq', 'FAQ'),
    safety: getText('footer.safety', 'Safety'),
    contactUs: getText('footer.contactUs', 'Contact Us'),
    contribute: getText('footer.contribute', 'Contribute'),
    forOrganizations: getText('footer.forOrganizations', 'For Organizations'),
    supportSenara: getText('footer.supportSenara', 'Support Senara'),
    startReading: getText('footer.startReading', 'Start Reading'),
    startReadingDesc: getText('footer.startReadingDesc', 'Find interactive stories that match your interests.'),
    viewCollection: getText('footer.viewCollection', 'View Collection'),
    nonprofit: getText('footer.nonprofit', 'Nonprofit'),
    freeForAll: getText('footer.freeForAll', 'Free for everyone'),
    privacy: getText('footer.privacy', 'Privacy'),
    terms: getText('footer.terms', 'Terms'),
    accessibility: getText('footer.accessibility', 'Accessibility'),
    copyright: getText('footer.copyright', 'Senara. Made with heart in Indonesia.'),
  };

  const year = new Date().getFullYear();

  return `
    <footer class="senara-footer" role="contentinfo">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Main Grid -->
        <div class="footer-grid">
          <!-- Brand Column -->
          <div class="footer-brand">
            <a href="index.html" class="footer-logo" aria-label="Senara home">Senara</a>
            <p class="footer-tagline">${t.tagline}</p>
            <div class="footer-social">
              <a href="https://instagram.com/idsenara" target="_blank" rel="noopener" class="footer-social-link" data-umami-event="Footer Instagram" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://trakteer.id/senara.id" target="_blank" rel="noopener" class="footer-social-link" data-umami-event="Footer Trakteer" aria-label="Trakteer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </a>
            </div>
          </div>

          <!-- Explore Column -->
          <div class="footer-column">
            <h4>${t.explore}</h4>
            <a href="index.html" data-umami-event="Footer Home">${t.home}</a>
            <a href="collection.html" data-umami-event="Footer Collection">${t.storyCollection}</a>
            <a href="about.html" data-umami-event="Footer About">${t.aboutUs}</a>
            <a href="about.html?tab=team" data-umami-event="Footer Team">${t.team}</a>
            <a href="about.html?tab=roadmap" data-umami-event="Footer Roadmap">${t.roadmap}</a>
          </div>

          <!-- Support Column -->
          <div class="footer-column">
            <h4>${t.support}</h4>
            <a href="faq.html" data-umami-event="Footer FAQ">${t.faq}</a>
            <a href="safety.html" data-umami-event="Footer Safety">${t.safety}</a>
            <a href="contact.html" data-umami-event="Footer Contact">${t.contactUs}</a>
            <a href="about.html?tab=contribute" data-umami-event="Footer Contribute">${t.contribute}</a>
            <a href="for-organizations.html" data-umami-event="Footer Orgs">${t.forOrganizations}</a>
            <a href="donate.html" data-umami-event="Footer Donate">${t.supportSenara}</a>
          </div>

          <!-- Legal Column -->
          <div class="footer-column">
            <h4>${t.privacy}</h4>
            <a href="privacy.html" data-umami-event="Footer Privacy">${t.privacy}</a>
            <a href="terms.html" data-umami-event="Footer Terms">${t.terms}</a>
            <a href="accessibility.html" data-umami-event="Footer Accessibility">${t.accessibility}</a>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="footer-bottom">
          <div class="footer-bottom-left">
            <span class="footer-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              ${t.nonprofit}
            </span>
            <span class="footer-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              ${t.freeForAll}
            </span>
          </div>
          <p class="footer-copyright">&copy; ${year} ${t.copyright}</p>
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
