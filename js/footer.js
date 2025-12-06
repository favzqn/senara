// Reusable Footer Component
// Renders consistent footer across all pages

function getFooterHTML() {
  return `
    <footer class="senara-footer">
      <div class="footer-main">
        <!-- Main Grid -->
        <div class="footer-grid">
          <!-- Brand Column -->
          <div class="footer-brand">
            <a href="index.html" class="footer-logo">Senara</a>
            <p class="footer-tagline">Platform cerita interaktif untuk belajar hal-hal penting lewat pengalaman yang bermakna.</p>
            <div class="footer-social">
              <a href="https://instagram.com/idsenara" target="_blank" rel="noopener" class="footer-social-link" data-umami-event="Footer Instagram" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://trakteer.id/senara.id" target="_blank" rel="noopener" class="footer-social-link" data-umami-event="Footer Trakteer" aria-label="Trakteer">
                🍰
              </a>
            </div>
          </div>

          <!-- Jelajahi Column -->
          <div class="footer-column">
            <h4>Jelajahi</h4>
            <a href="index.html" data-umami-event="Footer Beranda">Beranda</a>
            <a href="koleksi.html" data-umami-event="Footer Koleksi">Koleksi Cerita</a>
            <a href="about.html" data-umami-event="Footer Tentang">Tentang Kami</a>
            <a href="pendekatan.html" data-umami-event="Footer Pendekatan">Pendekatan</a>
            <a href="roadmap.html" data-umami-event="Footer Roadmap">Peta Jalan</a>
          </div>

          <!-- Dukungan Column -->
          <div class="footer-column">
            <h4>Dukungan</h4>
            <a href="faq.html" data-umami-event="Footer FAQ">FAQ</a>
            <a href="keselamatan.html" data-umami-event="Footer Keselamatan">Keselamatan</a>
            <a href="kontak.html" data-umami-event="Footer Kontak">Hubungi Kami</a>
            <a href="contribute.html" data-umami-event="Footer Berkontribusi">Berkontribusi</a>
            <a href="donasi.html" data-umami-event="Footer Donasi">Dukung Senara</a>
          </div>

          <!-- CTA Column -->
          <div class="footer-column footer-cta-column">
            <h4>Mulai Membaca</h4>
            <p>Temukan cerita interaktif yang sesuai dengan minatmu.</p>
            <a href="koleksi.html" class="footer-cta-btn" data-umami-event="Footer CTA Koleksi">
              Lihat Koleksi →
            </a>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="footer-bottom">
          <div class="footer-bottom-left">
            <span class="footer-badge">🌱 Nonprofit</span>
            <span class="footer-badge">💚 Gratis untuk semua</span>
          </div>
          <p class="footer-copyright">&copy; ${new Date().getFullYear()} Senara. Dibuat dengan ❤️ di Indonesia.</p>
          <div class="footer-legal">
            <a href="privacy.html" data-umami-event="Footer Privacy">Privasi</a>
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
