/**
 * Chapter 1: The Trash Mountain
 *
 * Learning Outcomes:
 * - Understand the 5R framework (Refuse, Reduce, Reuse, Recycle, Rot)
 * - Learn the importance order of waste reduction strategies
 * - Calculate personal waste reduction impact
 * - Understand decomposition times of common waste
 * - Develop environmental responsibility and initiative
 *
 * Duration: ~20 minutes
 * Scenes: 18 scenes
 */

/* global monogatari, STORY_CONSTANTS, buildInputScene, buildSoundScene */

const Chapter1 = {
  "Scene-1": [
    "show scene scene-1",
    "play music chapter-1 with loop fade 20 volume 10",
    "n ...Apa-apaan ini?",
    "n Aku Naya, kelas 7. Dan aku baru lihat sesuatu yang bikin perutku mual.",
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
    "n {{player.name}}! Aku Naya. Dan hari ini aku mau cerita soal sesuatu yang mengubah pandanganku tentang sampah.",
    "jump Scene-2",
  ],

  "Scene-2": [
    "show scene scene-2",
    "n Jadi gini. Di dekat sekolahku, ada tempat pembuangan sementara. Tapi \"sementara\" itu udah bertahun-tahun.",
    "n Setiap hari, truk sampah datang. Tapi sampahnya nggak pernah berkurang. Malah nambah terus.",
    "n Kemarin, aku lewat situ dan... gunung sampahnya udah setinggi dua meter. Bau busuknya menyebar sampai ke sekolah.",
    "n Aku lihat ada anak kecil main di dekat situ. Ada kucing yang cari makan di tumpukan sampah. Ada lalat di mana-mana.",
    "n Aku nggak bisa diam. Aku harus ngelakuin sesuatu.",
    "jump Scene-3",
  ],

  "Scene-3": [
    "show scene scene-3",
    "n Tapi masalahnya: dari mana harus mulai? Sampah itu masalah yang besar banget.",
    "n Aku riset di internet. Ternyata, Indonesia menghasilkan sekitar 67 juta ton sampah per tahun! Dan hanya sekitar 7% yang didaur ulang.",
    "n Sisanya? Menumpuk di TPA, sungai, laut, atau... ya, di gunung sampah dekat sekolahku.",
    {
      Choice: {
        Dialog: "Menurutmu, dari mana Naya harus memulai aksinya?",
        A: {
          Text: "Reduce — Kurangi sampah dari sumbernya",
          Do: "jump Scene-3-Reduce",
        },
        B: {
          Text: "Reuse — Gunakan kembali barang yang masih bisa dipakai",
          Do: "jump Scene-3-Reuse",
        },
        C: {
          Text: "Recycle — Daur ulang sampah yang sudah ada",
          Do: "jump Scene-3-Recycle",
        },
      },
    },
  ],

  "Scene-3-Reduce": [
    "show scene scene-3-reduce",
    "n Bagus! Tapi sebenarnya, ada urutan yang lebih lengkap. Namanya 5R Framework.",
    "n Dan yang paling utama bukan Reduce, tapi Refuse. Tolak dulu sebelum sampahnya tercipta.",
    "jump Scene-4",
  ],

  "Scene-3-Reuse": [
    "show scene scene-3-reuse",
    "n Reuse memang penting! Tapi sebenarnya ada langkah yang lebih awal yang harus dilakukan.",
    "n Bayangin kalau kita bisa mencegah sampah itu tercipta sama sekali. Itu lebih efektif daripada menggunakan kembali.",
    "jump Scene-4",
  ],

  "Scene-3-Recycle": [
    "show scene scene-3-recycle",
    "n Recycle atau daur ulang memang bagus. Tapi ternyata, itu bukan solusi pertama yang harus dipilih!",
    "n Daur ulang itu butuh energi, air, dan biaya. Lebih baik kurangi sampahnya dari awal.",
    "n Ada framework yang namanya 5R. Dan Recycle itu ada di urutan ke-4, bukan yang pertama!",
    "jump Scene-4",
  ],

  "Scene-4": [
    "show scene scene-4",
    "n Jadi, 5R Framework itu urutannya:",
    "n R #1: REFUSE — Tolak. Jangan terima barang yang nggak kamu butuhkan. Contoh: tolak kantong plastik, tolak sedotan, tolak brosur.",
    "n R #2: REDUCE — Kurangi. Gunakan lebih sedikit. Contoh: beli seperlunya, pilih produk dengan kemasan minimal.",
    "n R #3: REUSE — Gunakan kembali. Pakai ulang barang yang masih bisa dipakai. Contoh: botol minum reusable, tas belanja kain.",
    "n R #4: RECYCLE — Daur ulang. Proses ulang sampah jadi barang baru. Contoh: pisahkan plastik, kertas, logam untuk didaur ulang.",
    "n R #5: ROT — Kompos. Ubah sampah organik jadi pupuk. Contoh: sisa makanan, daun kering, kulit buah.",
    "jump Scene-5",
  ],

  "Scene-5": [
    "show scene scene-5",
    "n Nah, sekarang quiz!",
    {
      Choice: {
        Dialog: "Dari 5R, manakah yang PALING penting dan harus didahulukan?",
        A: {
          Text: "Recycle — Daur ulang adalah solusi utama",
          Do: "jump Scene-5-Salah",
        },
        B: {
          Text: "Refuse — Tolak sebelum sampah tercipta",
          Do: "jump Scene-5-Benar",
        },
        C: {
          Text: "Reuse — Gunakan kembali barang yang ada",
          Do: "jump Scene-5-Salah",
        },
        D: {
          Text: "Reduce — Kurangi jumlah sampah",
          Do: "jump Scene-5-Salah",
        },
      },
    },
  ],

  "Scene-5-Benar": [
    "play sound clap with volume 50",
    "show scene scene-5-benar",
    "n Tepat! Refuse adalah R yang paling penting. Kenapa?",
    "n Karena kalau kamu menolak sesuatu dari awal, sampahnya nggak akan pernah tercipta. Zero waste!",
    "n Recycle memang bagus, tapi itu solusi terakhir. Lebih baik cegah sampahnya dari awal.",
    "n Urutannya: Refuse > Reduce > Reuse > Recycle > Rot.",
    "jump Scene-6",
  ],

  "Scene-5-Salah": [
    "play sound wrong with volume 50",
    "show scene scene-5-salah",
    "hmm, jawabannya adalah REFUSE — Tolak. Itu yang paling penting.",
    "n Kenapa? Karena kalau kamu menolak sesuatu dari awal, sampahnya nggak akan pernah tercipta.",
    "n Recycle bagus, tapi itu solusi terakhir karena butuh energi dan biaya. Lebih baik cegah dari awal.",
    "n Urutannya: Refuse > Reduce > Reuse > Recycle > Rot.",
    "jump Scene-6",
  ],

  "Scene-6": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-6",
    "n Setelah belajar 5R, aku jadi lebih aware sama sampah yang aku hasilkan setiap hari.",
    "n Aku mulai bawa botol minum sendiri (Refuse air kemasan). Bawa tas kain ke warung (Refuse kantong plastik). Bawa bekal dari rumah (Reduce kemasan makanan).",
    "n Perubahan kecil, tapi dampaknya besar. Dalam seminggu, sampah plastikku berkurang hampir 60%!",
    "n Tapi masalahnya... aku nggak bisa sendirian. Sampah di sekitarku masih menumpuk.",
    "jump Scene-7",
  ],

  "Scene-7": [
    "show scene scene-7",
    "n Aku putusin untuk bikin kelompok kecil di sekolah. Namanya \"Eco Warriors\". Tujuannya: mengurangi sampah di lingkungan sekolah.",
    "n Aku mulai ngajak teman-teman sekelas. Tapi... responsnya nggak seperti yang aku harapkan.",
    "n \"Ngapain sih? Toh TPA masih muat.\" \"Satu orang nggak akan ngubah apa-apa.\" \"Ribet banget, males ah.\"",
    "n Hati kecilku sedih. Tapi aku nggak mau nyerah.",
    "jump Scene-8",
  ],

  "Scene-8": [
    "show scene scene-8",
    "n Aku coba pendekatan lain. Daripada ceramah, aku tunjukkan data.",
    "n Aku bikin poster: \"Tau nggak? Satu orang Indonesia menghasilkan rata-rata 0,7 kg sampah per hari. Kalau di sekolah kita ada 500 siswa, itu 350 kg sampah PER HARI.\"",
    "n \"Dalam setahun? Hampir 128 TON sampah dari satu sekolah aja!\"",
    "n Teman-teman mulai kaget. Mereka nggak nyadari angkanya sebesar itu.",
    "jump Scene-9",
  ],

  "Scene-9": [
    "show scene scene-9",
    "n Tapi masih ada yang skeptis. Temanku Bimo bilang: \"Ya tapi satu orang kayak kamu nggak akan ngubah apa-apa, Nay.\"",
    "n Rasanya sakit denger itu. Tapi aku nggak mau emosi. Aku coba jawab dengan tenang.",
    {
      Choice: {
        Dialog: "Bimo bilang \"satu orang nggak bisa mengubah apa-apa.\" Bagaimana kamu merespons?",
        A: {
          Text: "\"Kamu salah! Aku bisa membuktikannya!\"",
          Do: "jump Scene-9-A",
        },
        B: {
          Text: "\"Mungkin satu orang kecil. Tapi kalau 10 orang? 100 orang? Semua perubahan besar dimulai dari satu orang.\"",
          Do: "jump Scene-9-Benar",
        },
        C: {
          Text: "\"Ya udah, terserah kamu.\"",
          Do: "jump Scene-9-C",
        },
      },
    },
  ],

  "Scene-9-A": [
    "show scene scene-9-a",
    "n Hmm, memang penting untuk yakin. Tapi kalau terlalu agresif, justru bikin orang makin defensif.",
    "n Lebih baik ajak dengan data dan contoh nyata, bukan dengan emosi. Orang lebih mudah diyakinkan dengan fakta daripada teriakan.",
    "jump Scene-10",
  ],

  "Scene-9-Benar": [
    "play sound clap with volume 50",
    "show scene scene-9-benar",
    "n Keren! Itu jawaban yang tepat. Kamu nggak menyerang Bimo, tapi memberikan perspektif baru.",
    "n Dan itu benar banget. Setiap gerakan besar dimulai dari satu orang. Malala satu orang. Greta Thunberg satu orang.",
    "n Yang penting bukan seberapa besar kamu, tapi seberapa konsisten kamu.",
    "jump Scene-10",
  ],

  "Scene-9-C": [
    "show scene scene-9-c",
    "n Hmm, menyerah itu gampang. Tapi kalau semua orang menyerah, siapa yang akan berubah?",
    "n Kadang kita nggak butuh semua orang. Kita cuma butuh cukup orang yang peduli untuk memulai.",
    "jump Scene-10",
  ],

  "Scene-10": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-10",
    "n Setelah beberapa minggu, aku berhasil kumpulin 8 orang yang mau gabung di Eco Warriors.",
    "n 8 orang dari 500 siswa. Kelihatan sedikit? Tapi mari kita hitung dampaknya.",
    "n Kalau 1 orang bisa mengurangi 0,5 kg sampah per hari, maka 8 orang = 4 kg per hari.",
    "n Dalam sebulan? 120 kg. Dalam setahun? 1.460 kg atau hampir 1,5 TON sampah yang nggak jadi ke TPA!",
    "n Dan angka ini belum termasuk dampak yang mereka sebarkan ke keluarga dan teman-teman mereka.",
    "jump Scene-11",
  ],

  "Scene-11": [
    "show scene scene-11",
    "n Aku mau tunjukkan sesuatu yang bikin kamu kaget.",
    {
      Choice: {
        Dialog: "Berapa lama waktu yang dibutuhkan sebuah botol plastik untuk terurai di alam?",
        A: {
          Text: "10 tahun",
          Do: "jump Scene-11-Salah",
        },
        B: {
          Text: "50 tahun",
          Do: "jump Scene-11-Salah",
        },
        C: {
          Text: "450 tahun",
          Do: "jump Scene-11-Benar",
        },
      },
    },
  ],

  "Scene-11-Benar": [
    "play sound clap with volume 50",
    "show scene scene-11-benar",
    "n Benar! 450 TAHUN! Bayangin: botol plastik yang kamu buang hari ini masih ada di bumi saat cicit-cicit-cicit-cicitmu hidup.",
    "n Dan ini bukan cuma soal plastik. Styrofoam: 500 tahun. Kaleng aluminium: 200 tahun. Kaca: 1 juta tahun!",
    "n Setiap sampah yang kita buang, kita wariskan ke generasi berikutnya. Mereka nggak pernah minta itu.",
    "jump Scene-12",
  ],

  "Scene-11-Salah": [
    "play sound wrong with volume 50",
    "show scene scene-11-salah",
    "n Hmm, angkanya jauh lebih lama dari itu. Botol plastik butuh 450 TAHUN untuk terurai!",
    "n Dan ini bukan cuma soal plastik. Styrofoam: 500 tahun. Kaleng aluminium: 200 tahun. Kaca: 1 juta tahun!",
    "n Setiap sampah yang kita buang, kita wariskan ke generasi berikutnya. Mereka nggak pernah minta itu.",
    "jump Scene-12",
  ],

  "Scene-12": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-12",
    "n Data-data itu bikin teman-teman Eco Warriors makin semangat. Kita mulai bikin aksi nyata di sekolah.",
    "n Aksi pertama: tempat sampah terpisah. Organik, plastik, kertas, logam. Empat kategori.",
    "n Aksi kedua: kampanye bawa botol minum sendiri. Kantin sekolah mulai sediakan galon air gratis.",
    "n Aksi ketiga: bikin kompos dari sampah kantin. Ternyata, sampah organik itu 60% dari total sampah sekolah!",
    "jump Scene-13",
  ],

  "Scene-13": [
    "show scene scene-13",
    "n Setelah 3 bulan, hasilnya mulai kelihatan.",
    "n Sampah yang ke TPA berkurang 40%. Kompos yang kita hasilkan dipake buat tanaman di sekolah. Dan yang paling penting...",
    "n Bimo, yang dulu bilang \"satu orang nggak bisa ngubah apa-apa\", sekarang jadi koordinator tim daur ulang!",
    "n \"Aku malu sendiri,\" kata Bimo. \"Ternyata, perubahan itu dimulai dari hal kecil yang dilakukan secara konsisten.\"",
    "jump Scene-14",
  ],

  "Scene-14": [
    "show scene scene-14",
    "n {{player.name}}, sebelum kita selesai, aku mau kasih kamu beberapa aksi praktis yang bisa langsung kamu lakukan.",
    "n Aksi #1: Bawa botol minum sendiri. Tolak air kemasan. Satu botol plastik per hari x 365 hari = 365 botol plastik yang kamu tolak!",
    "n Aksi #2: Bawa tas kain ke mana-mana. Tolak kantong plastik.",
    "n Aksi #3: Pisahkan sampah di rumah. Organik dan anorganik, minimal.",
    "n Aksi #4: Kalau beli sesuatu, tanya: \"Apa aku benar-benar butuh ini?\" Refuse sebelum sampah tercipta.",
    "jump Scene-15",
  ],

  "Scene-15": [
    "show scene scene-15",
    "n Aksi #5: Mulai bikin kompos. Gampang banget! Cuma butuh wadah, tanah, dan sampah organik. Nggak perlu alat mahal.",
    "n Aksi #6: Share pengetahuanmu. Ajak keluarga dan teman-teman. Perubahan makin besar kalau dilakukan bareng-bareng.",
    "n Aksi #7: Ikut kebersihan lingkungan. Bersih-bersih sungai, pantai, atau area publik. Satu jam aja udah sangat berarti.",
    "jump Scene-16",
  ],

  "Scene-16": [
    "show scene scene-16",
    "n Kamu tahu nggak? Kalau setiap orang di Indonesia mengurangi 1 botol plastik per hari, dalam setahun kita bisa kurangi 98 miliar botol plastik!",
    "n Itu setara dengan mengurangi sampah plastik seberat 1,5 juta ton. Bayangin dampaknya!",
    "n Jadi, jangan pernah merasa bahwa tindakanmu terlalu kecil. Setiap botol yang kamu tolak, setiap kantong yang kamu tolak, setiap sampah yang kamu daur ulang — semuanya berarti.",
    "jump Scene-17",
  ],

  "Scene-17": [
    "show scene scene-17",
    "n Aku mau rangkum apa yang kita pelajari hari ini:",
    "n 1. 5R Framework: Refuse > Reduce > Reuse > Recycle > Rot. Urutan ini penting!",
    "n 2. Satu orang BISA membuat perbedaan. Kalau kamu nggak mulai, siapa lagi?",
    "n 3. Sampah plastik butuh 450 tahun untuk terurai. Setiap sampah yang kita buang adalah warisan ke generasi depan.",
    "n 4. Perubahan besar dimulai dari langkah kecil yang konsisten.",
    "n 5. Ajak orang lain. Gerakan yang berkelanjutan butuh komunitas.",
    "jump Scene-18",
  ],

  "Scene-18": [
    "show scene scene-sit-right",
    "n {{player.name}}, terima kasih udah ikutin ceritaku!",
    "n Eco Warriors sekarang udah punya 30 anggota. Dan beberapa sekolah lain mulai bikin kelompok serupa.",
    "n Gunung sampah dekat sekolahku? Belum hilang sepenuhnya. Tapi sekarang, setiap orang yang lewat situ mulai mikir: \"Apa yang bisa aku lakukan?\"",
    "n Itu perubahan paling besar yang aku lihat: perubahan pola pikir.",
    "n Kamu nggak harus bikin gerakan besar. Mulai dari diri sendiri. Mulai dari hari ini. Mulai dari langkah kecil.",
    "n Sampai jumpa di chapter selanjutnya, {{player.name}}! Jadilah pahlawan lingkunganmu sendiri!",
    "jump Loading-2",
  ],

  "Loading-2": [
    "play sound typewriter",
    "show scene loading-2",
    "Chapter 2 : Zero Waste at Home",
    "jump Scene-19",
  ],
};

// Make globally accessible for index.js merging
window.Chapter1 = Chapter1;

// Export for use in index.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Chapter1;
}
