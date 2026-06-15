/**
 * Chapter 1: The Budget Awakening
 *
 * Learning Outcomes:
 * - Understand the 50/30/20 budgeting rule
 * - Differentiate between needs and wants
 * - Learn the difference between good debt and bad debt
 * - Understand compound interest and emergency funds
 * - Create a personal financial plan
 *
 * Duration: ~25 minutes
 * Scenes: 20 scenes
 */

/* global monogatari, STORY_CONSTANTS, buildInputScene, buildSoundScene */

const Chapter1 = {
  "Scene-1": [
    "show scene scene-1",
    "play music chapter-1 with loop fade 20 volume 10",
    "s Ugh... tanggal 15 aja udah tinggal Rp 50 ribu di dompet.",
    "s Gimana bisa? Gajian baru dua minggu yang lalu!",
    {
      Input: {
        Text: "Sebelum kita mulai, siapa namamu?",
        Validation: function (input) {
          return input.trim().length > 0;
        },
        Save: function (input) {
          this.characters({
            a: {
              name: input,
              color: "#5bffb2",
            },
          });
          this.storage({
            player: {
              name: input,
            },
          });
          return true;
        },
        Revert: function () {
          this.characters({
            a: {
              name: "Teman",
              color: "#5bffb2",
            },
          });
          this.storage({
            player: {
              name: "Teman",
            },
          });
        },
        Warning: "Masukkan namamu dulu ya!",
      },
    },
    "s {{player.name}}! Aku Sari. Aku mahasiswa semester 3 yang... yah, harusnya udah bisa ngatur uang sendiri.",
    "s Tapi kenyataannya? Dompet kosong sebelum akhir bulan. Lagi. Cerita ini kayaknya familiar ya?",
    "s Yuk ikutin ceritaku. Siapa tau kamu juga bisa belajar dari kesalahan aku.",
    "jump Scene-2",
  ],

  "Scene-2": [
    "show scene scene-2",
    "s Jadi ceritanya begini. Awal bulan, aku terima uang jajan dari orang tua. Rp 2.000.000 sebulan.",
    "s Rasanya kayak punya banyak banget! Langsung kepikiran: beli baju baru, nongkrong di kafe, subscribe Netflix, Spotify...",
    "s Tapi sekarang? Tanggal 15. Uang tinggal Rp 50.000. Kemana aja semuanya?",
    "jump Scene-3",
  ],

  "Scene-3": [
    "show scene scene-3",
    "s Aku coba ingat-ingat pengeluaranku bulan ini...",
    "s Makan di kafe: Rp 200.000 (tiga kali). Beli baju online: Rp 350.000. Ojol: Rp 300.000. Jajan snack: Rp 250.000.",
    "s Subscription: Rp 150.000. Pulsa dan kuota: Rp 100.000. Traktir teman: Rp 200.000. Sisanya... entah kemana.",
    "s Total pengeluaran: hampir Rp 1.950.000 dalam 15 hari! Aku baru sadar betapa borosnya aku.",
    "jump Scene-4",
  ],

  "Scene-4": [
    "show scene scene-4",
    "s Nah, sekarang aku mau tanya kamu soal pengelolaan uang.",
    {
      Choice: {
        Dialog: "Menurut aturan 50/30/20, berapa persen dari pendapatan yang sebaiknya dialokasikan untuk kebutuhan (needs)?",
        A: {
          Text: "30%",
          Do: "jump Scene-4-Salah",
        },
        B: {
          Text: "50%",
          Do: "jump Scene-4-Benar",
        },
        C: {
          Text: "70%",
          Do: "jump Scene-4-Salah",
        },
      },
    },
  ],

  "Scene-4-Benar": [
    "play sound clap with volume 50",
    "show scene scene-4-benar",
    "s Betul! Aturan 50/30/20 artinya: 50% untuk kebutuhan, 30% untuk keinginan, dan 20% untuk tabungan.",
    "s Jadi kalau penghasilanmu Rp 2.000.000, maka: Rp 1.000.000 untuk kebutuhan, Rp 600.000 untuk keinginan, dan Rp 400.000 untuk tabungan.",
    "jump Scene-5",
  ],

  "Scene-4-Salah": [
    "play sound wrong with volume 50",
    "show scene scene-4-salah",
    "s Hmm, jawabannya adalah 50%. Aturan 50/30/20 artinya: 50% untuk kebutuhan, 30% untuk keinginan, dan 20% untuk tabungan.",
    "s Jadi kalau penghasilanmu Rp 2.000.000, maka: Rp 1.000.000 untuk kebutuhan, Rp 600.000 untuk keinginan, dan Rp 400.000 untuk tabungan.",
    "jump Scene-5",
  ],

  "Scene-5": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-5",
    "s Masalahku dulu: aku nggak bisa bedain mana kebutuhan dan mana keinginan.",
    "s Kebutuhan (needs) itu hal yang kamu benar-benar butuhkan untuk hidup: makan, transportasi ke kampus, kos, pulsa.",
    "s Keinginan (wants) itu hal yang bikin hidup lebih nyaman atau menyenangkan, tapi bukan keharusan: nongkrong di kafe, beli baju baru, nonton bioskop.",
    "jump Scene-6",
  ],

  "Scene-6": [
    "show scene scene-6",
    "s Sekarang, coba pikirin pengeluaran aku tadi. Mana yang kebutuhan dan mana yang keinginan?",
    "s Makan di kafe? Itu keinginan — aku bisa masak atau makan di warteg. Ojol? Bisa naik angkot atau jalan kaki.",
    "s Baju baru? Keinginan. Snack? Keinginan. Subscription Netflix? Jelas keinginan.",
    "s Nah, kalau semua itu keinginan, berapa banyak uangku yang benar-benar untuk kebutuhan?",
    "jump Scene-7",
  ],

  "Scene-7": [
    "show scene scene-7",
    "s Aku hitung ulang: kebutuhan sebenarnya cuma makan (warteg), transportasi (angkot), kos, dan pulsa. Total sekitar Rp 900.000.",
    "s Sisanya? Rp 1.100.000 untuk keinginan! Hampir 55% penghasilanku habis untuk hal yang sebenarnya nggak aku butuhkan.",
    "s Ini saatnya aku bikin anggaran. Budget pertama dalam hidupku!",
    "jump Scene-8",
  ],

  "Scene-8": [
    "show scene scene-8",
    "s Jadi, begini rencana anggaranku bulan depan:",
    "s Kebutuhan (50% = Rp 1.000.000): Kos Rp 500.000, makan Rp 350.000, transportasi Rp 100.000, pulsa Rp 50.000.",
    "s Keinginan (30% = Rp 600.000): Nongkrong Rp 200.000, hiburan Rp 150.000, jajan Rp 150.000, lainnya Rp 100.000.",
    "s Tabungan (20% = Rp 400.000): Dana darurat Rp 200.000, tabungan investasi Rp 200.000.",
    "s Gimana? Terdengar ketat? Tapi ini lebih baik daripada dompet kosong di tanggal 15!",
    "jump Scene-9",
  ],

  "Scene-9": [
    "show scene scene-9",
    "s Nah, pas aku lagi semangat bikin anggaran... HP-ku bunyi.",
    "s Notifikasi: \"FLASH SALE! Diskon 70% untuk sepatu impianmu! Berlaku 2 jam lagi!\"",
    "s Hati langsung deg-degan. Sepatu itu udah aku incer dari bulan lalu. Harga asli Rp 800.000, diskon jadi Rp 240.000.",
    {
      Choice: {
        Dialog: "Sari dapat notifikasi flash sale sepatu diskon 70%. Apa yang harus Sari lakukan?",
        A: {
          Text: "Beli! Kapan lagi diskon 70%?",
          Do: "jump Scene-10-A",
        },
        B: {
          Text: "Tahan diri, tabung uangnya",
          Do: "jump Scene-10-B",
        },
      },
    },
  ],

  "Scene-10-A": [
    "show scene scene-10-a",
    "s Aku beli sepatu itu. Rp 240.000. Rasanya puas banget!",
    "s Tapi... tiga hari kemudian, aku nyesel. Sepatu itu sebenarnya nggak aku butuhkan. Aku udah punya dua pasang sepatu yang masih bagus.",
    "s Dan Rp 240.000 itu hampir setengah dari anggaran keinginanku bulan ini. Sisa bulan, aku harus banget-bangetan hemat.",
    "s Pelajaran: diskon bukan berarti kamu harus beli. Kalau nggak butuh, buang-buang uang namanya.",
    "jump Scene-11",
  ],

  "Scene-10-B": [
    "show scene scene-10-b",
    "s Aku tutup notifikasinya. Sakit sih, tapi aku coba ingat: sepatu lamaku masih bagus.",
    "s Rp 240.000 itu aku masukin ke tabungan dana darurat. Sekarang total dana daruratku Rp 440.000!",
    "s Tiga minggu kemudian, ada kabar: kampus mendadak minta bayaran praktikum Rp 300.000. Kalau aku beli sepatu waktu itu, bisa-bisa aku nggak punya uang buat praktikum.",
    "s Beda banget ya hasilnya. Menahan keinginan sesaat bisa menyelamatkanmu dari masalah besar nanti.",
    "jump Scene-11",
  ],

  "Scene-11": [
    "show scene scene-11",
    "s Dari pengalaman itu, aku jadi belajar satu hal penting: bedain antara kebutuhan dan keinginan itu kunci utama.",
    "s Tapi ada satu lagi yang penting: bedakan antara utang yang baik dan utang yang buruk.",
    "s Karena di usia kita, godaan untuk berutang itu besar banget. Paylater, kartu kredit, pinjol...",
    "jump Scene-12",
  ],

  "Scene-12": [
    "show scene scene-12",
    "s Nah, sekarang pertanyaan penting.",
    {
      Choice: {
        Dialog: "Menurutmu, apa perbedaan antara utang yang baik (good debt) dan utang yang buruk (bad debt)?",
        A: {
          Text: "Good debt untuk hal yang menghasilkan nilai, bad debt untuk konsumsi",
          Do: "jump Scene-12-Benar",
        },
        B: {
          Text: "Good debt jumlahnya kecil, bad debt jumlahnya besar",
          Do: "jump Scene-12-Salah",
        },
        C: {
          Text: "Tidak ada bedanya, semua utang itu buruk",
          Do: "jump Scene-12-Salah",
        },
      },
    },
  ],

  "Scene-12-Benar": [
    "play sound clap with volume 50",
    "show scene scene-12-benar",
    "s Tepat banget! Good debt itu utang untuk sesuatu yang bisa menghasilkan nilai lebih di masa depan.",
    "s Contoh: pinjaman untuk biaya kuliah (investasi di pendidikan), atau modal usaha kecil-kecilan.",
    "s Bad debt itu utang untuk konsumsi yang nilainya terus turun: beli HP baru cicilan 12 bulan, beli baju pakai paylater, atau pinjol untuk jajan.",
    "s Bunga pinjol itu bisa sampai 0,8% per hari! Artinya, Rp 1.000.000 yang dipinjam bisa jadi Rp 1.240.000 dalam sebulan.",
    "jump Scene-13",
  ],

  "Scene-12-Salah": [
    "play sound wrong with volume 50",
    "show scene scene-12-salah",
    "s Hmm, sebenarnya bukan soal jumlahnya. Yang membedakan adalah tujuan utangnya.",
    "s Good debt: utang untuk sesuatu yang menghasilkan nilai. Contoh: pinjaman kuliah (investasi pendidikan), modal usaha.",
    "s Bad debt: utang untuk konsumsi. Contoh: cicilan HP baru, paylater untuk belanja, pinjol untuk jajan.",
    "s Intinya: kalau utang itu bikin kamu lebih produktif atau menghasilkan uang, itu good debt. Kalau cuma buat gaya hidup, itu bad debt.",
    "jump Scene-13",
  ],

  "Scene-13": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-13",
    "s Oke, sekarang kita udah ngerti soal budgeting dan utang. Saatnya bahas hal yang paling penting: TABUNGAN.",
    "s Aku dulu nggak pernah nabung. \"Nanti aja nabungnya, masih muda.\" Itu pikiranku dulu.",
    "s Tapi ternyata, nabung itu penting banget. Dan makin awal mulai, makin besar hasilnya. Kenapa? Karena ada namanya bunga berbunga.",
    "jump Scene-14",
  ],

  "Scene-14": [
    "show scene scene-14",
    "s Bunga berbunga (compound interest) itu artinya: uangmu nggak cuma bertambah dari bunga, tapi bunganya juga dapat bunga lagi.",
    "s Bayangin: kamu nabung Rp 100.000 per bulan di tabungan dengan bunga 5% per tahun.",
    "s Setelah 1 tahun: kamu sudah menabung Rp 1.200.000. Tapi karena bunga berbunga, totalnya jadi sekitar Rp 1.232.000.",
    "s Kelihatan kecil? Tapi coba kalau kamu nabung Rp 100.000 per bulan selama 10 tahun dengan bunga 5%:",
    "s Total setoran: Rp 12.000.000. Tapi dengan bunga berbunga, totalnya jadi sekitar Rp 15.570.000! Extra Rp 3.570.000 dari bunga!",
    "s Makin lama dan makin konsisten, makin besar efeknya. Ini yang disebut: waktu adalah teman terbaik investormu.",
    "jump Scene-15",
  ],

  "Scene-15": [
    "show scene scene-15",
    "s Nah, sekarang quiz soal bunga berbunga.",
    {
      Choice: {
        Dialog: "Kalau kamu menabung Rp 100.000 per bulan dengan bunga 5% per tahun, berapa kira-kira totalmu setelah 1 tahun?",
        A: {
          Text: "Tepat Rp 1.200.000 (tanpa bunga)",
          Do: "jump Scene-15-Salah",
        },
        B: {
          Text: "Sekitar Rp 1.232.000 (dengan bunga berbunga)",
          Do: "jump Scene-15-Benar",
        },
        C: {
          Text: "Rp 1.260.000 (bunga 5% dari total)",
          Do: "jump Scene-15-Salah",
        },
      },
    },
  ],

  "Scene-15-Benar": [
    "play sound clap with volume 50",
    "show scene scene-15-benar",
    "s Benar! Dengan bunga berbunga 5% per tahun, totalmu sekitar Rp 1.232.000 setelah 1 tahun.",
    "s Memang terlihat bedanya kecil di tahun pertama. Tapi bayangkan dalam 10 atau 20 tahun — bunga berbunga bekerja seperti bola salju yang makin besar!",
    "jump Scene-16",
  ],

  "Scene-15-Salah": [
    "play sound wrong with volume 50",
    "show scene scene-15-salah",
    "s Hmm, jawabannya sekitar Rp 1.232.000. Karena bunga berbunga, bunganya nggak dihitung dari total akhir aja, tapi dari saldo setiap bulan.",
    "s Di tahun pertama memang bedanya kecil. Tapi coba bayangkan dalam 10 tahun — bunga berbunga bekerja seperti bola salju yang terus membesar!",
    "jump Scene-16",
  ],

  "Scene-16": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-16",
    "s Selain tabungan reguler, ada satu hal lagi yang penting: Dana Darurat.",
    "s Dana darurat itu uang yang kamu sisihkan khusus untuk keadaan darurat. Bukan untuk belanja, bukan untuk liburan.",
    "s Contoh keadaan darurat: HP rusak, sakit mendadak, kehilangan pekerjaan, atau biaya tak terduga lainnya.",
    "s Idealnya, dana daruratmu minimal 3 kali pengeluaran bulanan. Jadi kalau pengeluaranmu Rp 1.500.000 per bulan, dana darurat ideal: Rp 4.500.000.",
    "s Memang kelihatan besar. Tapi nggak harus terkumpul sekaligus. Sedikit demi sedikit, yang penting konsisten!",
    "jump Scene-17",
  ],

  "Scene-17": [
    "show scene scene-17",
    "s Setelah semua yang aku pelajari, aku putuskan untuk bikin Rencana Keuangan pribadi.",
    "s Ini langkah-langkahnya yang aku ikuti:",
    "s 1. Catat semua pemasukan. Berapa uang yang masuk setiap bulan.",
    "s 2. Kategorikan pengeluaran: kebutuhan vs keinginan.",
    "s 3. Terapkan aturan 50/30/20.",
    "s 4. Buat rekening tabungan terpisah untuk dana darurat.",
    "s 5. Automatisasi: langsung transfer 20% ke tabungan begitu terima uang.",
    "s 6. Review setiap akhir bulan. Evaluasi dan sesuaikan.",
    "jump Scene-18",
  ],

  "Scene-18": [
    "show scene scene-18",
    "s {{player.name}}, satu bulan setelah aku mulai menerapkan ini...",
    "s Hasilnya? Tanggal 25, aku masih punya sisa Rp 600.000! Untuk pertama kalinya, aku nggak kehabisan uang sebelum akhir bulan!",
    "s Rasanya lega banget. Nggak ada lagi drama pinjam sana-sini atau makan mi instan seminggu berturut-turut.",
    "s Dan yang paling penting: aku nggak merasa kekurangan. Masih bisa nongkrong, masih bisa jajan. Tapi dengan batasan yang jelas.",
    "jump Scene-19",
  ],

  "Scene-19": [
    "show scene scene-19",
    "s Kalau aku bisa rangkum semua yang aku pelajari jadi beberapa poin penting:",
    "s 1. Aturan 50/30/20: 50% kebutuhan, 30% keinginan, 20% tabungan.",
    "s 2. Bedakan kebutuhan dan keinginan sebelum beli sesuatu.",
    "s 3. Hindari bad debt — utang untuk konsumsi yang bikin rugi.",
    "s 4. Manfaatkan bunga berbunga — nabung sedikit tapi konsisten.",
    "s 5. Siapkan dana darurat minimal 3x pengeluaran bulanan.",
    "s 6. Review dan evaluasi keuanganmu setiap bulan.",
    "jump Scene-20",
  ],

  "Scene-20": [
    "show scene scene-sit-right",
    "s {{player.name}}, terima kasih udah ikutin ceritaku!",
    "s Ingat: mengatur uang bukan tentang kaya atau miskin. Ini tentang kontrol. Kamu yang kontrol uangmu, bukan sebaliknya.",
    "s Mulai dari langkah kecil. Catat pengeluaranmu hari ini. Coba terapkan 50/30/20. Dan yang paling penting: mulai nabung, sekecil apapun.",
    "s Seperti kata pepatah: \"Sedikit-sedikit, lama-lama jadi bukit.\" Dan itu benar banget soal keuangan.",
    "s Sampai ketemu di chapter selanjutnya, {{player.name}}! Semangat ngatur uangnya!",
    "jump Loading-2",
  ],
};

// Make globally accessible for index.js merging
window.Chapter1 = Chapter1;

// Export for use in index.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Chapter1;
}
