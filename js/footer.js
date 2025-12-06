// Reusable Footer Component
// Renders consistent footer across all pages
// <div class="footer-column">
//   <h4>Hubungi Kami</h4>
//   <a href="mailto:fauzan08fauzan@gmail.com" data-umami-event="Footer email">fauzan08fauzan@gmail.com</a>
//   <a href="https://wa.me/628123456789" target="_blank" rel="noopener" data-umami-event="Footer whatsapp">WhatsApp tim fasilitator</a>
//   <a href="https://discord.gg" target="_blank" rel="noopener" data-umami-event="Footer discord">Discord komunitas</a>
// </div>

function getFooterHTML() {
  return `
    <footer class="senara-footer">
      <div class="footer-main">
        <div class="footer-grid">
          <div class="footer-brand">
            <h3 class="text-2xl font-bold mb-3">Senara</h3>
            <p>Kami percaya cerita punya kekuatan untuk mengajarkan hal-hal penting dengan cara yang menyentuh hati.</p>
          </div>

          <div class="footer-column">
            <h4>Navigasi</h4>
            <a href="index.html" data-umami-event="Footer Beranda">Beranda</a>
            <a href="koleksi.html" data-umami-event="Footer Koleksi">Koleksi</a>
            <a href="about.html" data-umami-event="Footer Tentang">Tentang</a>
            <a href="faq.html" data-umami-event="Footer FAQ">FAQ</a>
            <a href="contribute.html" data-umami-event="Footer Berkontribusi">Berkontribusi</a>
            <a href="kontak.html" data-umami-event="Footer Kontak">Kontak</a>
          </div>
        </div>

        <div class="footer-lower">
          <div class="footer-badge">
            <span class="badge-text">🌱 Nonprofit • Gratis untuk semua</span>
          </div>
          <p>&copy; ${new Date().getFullYear()} Senara. Dibuat dengan ❤️ di Indonesia.</p>
          <div class="footer-legal-links">
            <a href="privacy.html" data-umami-event="Footer privacy">Privacy</a>
            <a href="pendekatan.html" data-umami-event="Footer pendekatan">Pendekatan</a>
            <a href="resources.html" data-umami-event="Footer resources">Resources</a>
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
