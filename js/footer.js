// Reusable Footer Component
// Renders consistent footer across all pages

function getFooterHTML() {
  return `
    <footer class="bg-amber-900 text-white py-12 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 class="text-2xl font-bold mb-4">Senara</h3>
            <p class="text-amber-100">Platform visual novel edukatif untuk segala usia.</p>
          </div>
          <div>
            <h4 class="font-bold mb-4">Navigasi</h4>
            <ul class="space-y-2 text-amber-100">
              <li><a href="index.html" class="hover:text-white transition">Beranda</a></li>
              <li><a href="koleksi.html" class="hover:text-white transition">Koleksi</a></li>
              <li><a href="learning-paths.html" class="hover:text-white transition">Learning Paths</a></li>
              <li><a href="about.html" class="hover:text-white transition">Tentang</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4">Konten</h4>
            <ul class="space-y-2 text-amber-100">
              <li><a href="resources.html" class="hover:text-white transition">Resources</a></li>
              <li><a href="faq.html" class="hover:text-white transition">FAQ</a></li>
              <li><a href="contact.html" class="hover:text-white transition">Kontak</a></li>
              <li><a href="privacy.html" class="hover:text-white transition">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-amber-800 pt-8 text-center text-amber-100">
          <p>&copy; 2024 Senara. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  `;
}

function initFooter() {
  let footerContainer = document.querySelector('footer');

  if (!footerContainer) {
    footerContainer = document.createElement('div');
    footerContainer.id = 'footer-placeholder';
    document.body.appendChild(footerContainer);
  }

  footerContainer.outerHTML = getFooterHTML();
}
