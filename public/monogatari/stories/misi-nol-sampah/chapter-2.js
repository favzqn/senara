/**
 * Chapter 2: Zero Waste at Home
 *
 * Learning Outcomes:
 * - Apply zero waste principles at home
 * - Understand composting basics (Rot from 5R)
 * - Learn to reduce food waste
 * - Make sustainable shopping choices
 * - Influence family towards zero waste lifestyle
 *
 * Duration: ~15 minutes
 * Scenes: 18 scenes
 */

/* global monogatari */

const Chapter2 = {
  "Scene-19": [
    "show scene scene-1",
    "play music music-2 with loop fade 20 volume 10",
    "n {{player.name}}! Kita ketemu lagi!",
    "n Di chapter terakhir, aku udah cerita soal 5R Framework dan gimana aku mulai Eco Warriors di sekolah.",
    "n Sekarang aku mau cerita tentang tantangan berikutnya: menerapkan zero waste di RUMAH.",
    "n Karena jujur aja... di rumah itu yang paling susah. Kebiasaan keluarga sulit diubah.",
    "jump Scene-20",
  ],

  "Scene-20": [
    "show scene scene-2",
    "n Jadi ceritanya, setelah aku mulai gerakan di sekolah, aku pulang ke rumah dengan semangat tinggi.",
    "n Aku lihat di dapur: sampah plastik di mana-mana. Belanja pakai kantong plastik. Sisa makanan dibuang.",
    "n Aku bilang ke Mama: \"Mama, kita harus kurangi sampah!\"",
    "n Mama jawab: \"Nak, Mama udah capek. Nanti aja ya.\"",
    "n Kedengeran familiar?",
    {
      Choice: {
        Dialog: "Keluargamu nggak antusias soal zero waste. Apa yang kamu lakukan?",
        A: {
          Text: "Marah dan memaksa mereka berubah",
          Do: "jump Scene-20-Salah",
        },
        B: {
          Text: "Mulai dari diri sendiri, biar mereka lihat hasilnya",
          Do: "jump Scene-20-Benar",
        },
        C: {
          Text: "Menyerah, keluargaku nggak akan berubah",
          Do: "jump Scene-20-Salah",
        },
      },
    },
  ],

  "Scene-20-Benar": [
    "play sound clap with volume 50",
    "show scene scene-3",
    "n Tepat banget! Perubahan terbaik dimulai dari teladan, bukan dari ceramah.",
    "n Aku mulai dari hal kecil: bawa tas belanja sendiri, pisahkan sampah, bawa botol minum ke mana-mana.",
    "n Nggak pakai lama, adikku mulai ikut. Terus Papa. Terus Mama.",
    "n Perubahan itu menular. Tapi kamu harus jadi yang pertama.",
    "jump Scene-21",
  ],

  "Scene-20-Salah": [
    "play sound wrong with volume 50",
    "show scene scene-4",
    "n Hmm, memaksa orang jarang berhasil. Justru bisa bikin mereka makin anti.",
    "n Cara yang lebih baik: mulai dari diri sendiri. Tunjukkan hasilnya. Biar orang lain penasaran dan ikut.",
    "n Di keluargaku, aku mulai dari hal kecil: bawa tas belanja sendiri. Nggak pakai lama, adikku mulai ikut.",
    "jump Scene-21",
  ],

  "Scene-21": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-5",
    "n Nah, sekarang aku mau share tips zero waste di rumah yang udah aku coba:",
    "n Tips #1: BELANJA CERDAS. Bawa tas belanja sendiri. Pilih produk dengan kemasan minimal atau tanpa kemasan.",
    "n Kalau bisa beli di pasar tradisional, lebih sedikit plastiknya daripada di supermarket.",
    "n Tips #2: KURANGI FOOD WASTE. Ini masalah BESAR. Di Indonesia, 48 juta ton makanan terbuang setiap tahun.",
    "jump Scene-22",
  ],

  "Scene-22": [
    "show scene scene-6",
    "n Aku mau tanya kamu soal food waste.",
    {
      Choice: {
        Dialog: "Apa penyebab terbesar sisa makanan di rumah tangga?",
        A: {
          Text: "Makanan kadaluarsa karena lupa",
          Do: "jump Scene-22-A",
        },
        B: {
          Text: "Masak terlalu banyak",
          Do: "jump Scene-22-A",
        },
        C: {
          Text: "Keduanya sama-sama besar dampaknya",
          Do: "jump Scene-22-Benar",
        },
      },
    },
  ],

  "Scene-22-Benar": [
    "play sound clap with volume 50",
    "show scene scene-7",
    "n Betul! Keduanya sama-sama besar. Dan solusinya sederhana:",
    "n 1. Periksa kulkas sebelum belanja. Masak yang udah ada dulu.",
    "n 2. Masak secukupnya. Nggak apa-apa sisa sedikit daripada buang banyak.",
    "n 3. Simpan sisa makanan dengan benar. Labeli tanggal.",
    "n 4. Sisa makanan kemarin? Jadikan menu baru! Nasi goreng dari nasi sisa, sayur tumis dari sayur kemarin.",
    "jump Scene-23",
  ],

  "Scene-22-A": [
    "play sound wrong with volume 50",
    "show scene scene-8",
    "n Hmm, keduanya sama-sama besar dampaknya! Makanan kadaluarsa karena lupa DAN masak terlalu banyak.",
    "n Solusinya: periksa kulkas sebelum belanja, masak secukupnya, simpan sisa dengan benar, dan ubah sisa jadi menu baru.",
    "n Di rumahku, aku bikin jadwal menu mingguan. Jadi kita beli dan masak sesuai kebutuhan.",
    "jump Scene-23",
  ],

  "Scene-23": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-9",
    "n Tips #3: COMPOSTING. Atau pengomposan. Ini bagian \"Rot\" dari 5R Framework.",
    "n Sisa makanan yang nggak bisa dimakan lagi? Jangan buang ke tempat sampah biasa. Jadikan kompos!",
    "n Kompos itu pupuk alami dari sisa organik. Kamu bisa bikin di rumah dengan ember sederhana.",
    "n Yang bisa dikompos: sisa sayur, buah, kulit telur, ampas kopi, daun kering.",
    "n Yang NGGAK boleh: daging, ikan, minyak. Itu bisa bikin bau dan menarik hama.",
    "jump Scene-24",
  ],

  "Scene-24": [
    "show scene scene-10",
    "n Aku mulai komposting di rumah 3 bulan lalu. Hasilnya? Dari yang biasa buang 2 kantong sampah organik per minggu, sekarang cuma setengah kantong.",
    "n Dan komposnya? Aku pake buat tanaman di halaman. Tanaman jadi lebih subur tanpa pupuk kimia.",
    "n Mama yang dulu skeptis sekarang malah rajin nyimpen sisa sayur buat kompos. Perubahan kecil, dampak besar.",
    "jump Scene-25",
  ],

  "Scene-25": [
    "show scene scene-11",
    "n Tips #4: DIY PRODUCTS. Kamu tau nggak? Banyak produk pembersih rumah yang bisa dibuat sendiri.",
    "n Cuka + air = pembersih serbaguna. Baking soda = penghilang bau. Sabun cair dari sabun batang = sabun cuci piring.",
    "n Selain lebih hemat, kamu juga mengurangi plastik dari kemasan produk pembersih.",
    "n Tips #5: BAWA BOTOL SENDIRI. Ini yang paling gampang dan dampaknya besar.",
    "n Satu botol minum reusable bisa menggantikan 167 botol plastik per tahun!",
    {
      Choice: {
        Dialog: "Berapa botol plastik yang kamu gunakan per hari?",
        A: {
          Text: "0 — aku udah pakai botol sendiri",
          Do: "jump Scene-25-Benar",
        },
        B: {
          Text: "1-2 botol",
          Do: "jump Scene-25-A",
        },
        C: {
          Text: "Lebih dari 2",
          Do: "jump Scene-25-B",
        },
      },
    },
  ],

  "Scene-25-Benar": [
    "play sound clap with volume 50",
    "show scene scene-12-benar",
    "n Keren banget! Kamu udah jadi zero waste warrior!",
    "n Kalau kamu terus kayak ini, dalam setahun kamu udah selamatkan 167+ botol plastik dari tempat sampah.",
    "jump Scene-26",
  ],

  "Scene-25-A": [
    "show scene scene-13",
    "n 1-2 botol per hari berarti 365-730 botol per tahun. Itu banyak banget!",
    "n Coba mulai bawa botol sendiri. Isi ulang di dispenser atau galon. Dalam seminggu, kamu udah biasa.",
    "jump Scene-26",
  ],

  "Scene-25-B": [
    "show scene scene-14",
    "n Lebih dari 2 botol per hari? Itu lebih dari 730 botol per tahun!",
    "n Satu botol reusable seharga Rp 50.000 bisa menggantikan semua botol itu. Hemat uang DAN selamatkan lingkungan.",
    "n Mulai besok, bawa botol sendiri. Kecil, tapi dampaknya luar biasa.",
    "jump Scene-26",
  ],

  "Scene-26": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-15",
    "n {{player.name}}, aku mau cerita soal perkembangan Eco Warriors.",
    "n Setelah 6 bulan, Eco Warriors udah punya 120 anggota di 5 sekolah. Kita berhasil kurangi sampah sekolah sebesar 30%.",
    "n Kita bikin program \"Sekolah Tanpa Plastik\" — semua kantin wajib pakai wadah reusable.",
    "n Dan yang paling bikin bangga: walikota dateng ke sekolahku dan bilang mau terapkan program serupa di seluruh kota!",
    "n Semua itu dimulai dari satu orang yang peduli. Dan sekarang, kamu juga bagian dari perubahan itu.",
    "jump Scene-27",
  ],

  "Scene-27": [
    "show scene scene-16",
    "n Sebelum kita selesai, aku mau kasih challenge buat kamu:",
    "n Challenge #1: Coba 7 hari tanpa kantong plastik. Bawa tas sendiri ke mana-mana.",
    "n Challenge #2: Pisahkan sampahmu selama seminggu. Organik di satu kantong, anorganik di kantong lain.",
    "n Challenge #3: Coba masak dari bahan yang udah ada di kulkas sebelum belanja baru.",
    "n Challenge #4: Bawa botol minum sendiri selama seminggu.",
    "n Kalau kamu bisa lakuin semua challenge ini, kamu udah jadi Zero Waste Hero!",
    "jump Scene-28",
  ],

  "Scene-28": [
    "show scene scene-sit-right",
    "n {{player.name}}, kita udah sampai di akhir Chapter 2!",
    "n Hari ini kita udah belajar tentang:",
    "n 1. Mengubah kebiasaan keluarga dimulai dari teladan, bukan ceramah",
    "n 2. Mengurangi food waste dengan perencanaan dan kreativitas",
    "n 3. Composting — ubah sisa makanan jadi pupuk alami",
    "n 4. DIY products — bikin pembersih sendiri dari bahan alami",
    "n 5. Satu botol reusable bisa selamatkan 167+ botol plastik per tahun",
    "n Sampai jumpa di chapter selanjutnya, {{player.name}}! Remember: every small action counts!",
  ],
};

window.Chapter2 = Chapter2;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Chapter2;
}
