/**
 * Chapter 1: Social Media Survival
 * 
 * Learning Outcomes:
 * - Recognize misinformation and fake news on social media
 * - Understand the importance of privacy settings
 * - Learn how to deal with online negativity and cyberbullying
 * - Develop critical thinking skills for digital content
 * 
 * Duration: ~20 minutes
 * Scenes: 22 scenes
 */

/* global monogatari, STORY_CONSTANTS, buildInputScene, buildSoundScene */

const Chapter1 = {
  "Scene-1": [
    "show scene scene-1",
    "play music chapter-1 with loop fade 20 volume 10",
    "r Yo! Nama gue Raka. Gue siswa kelas 10, dan kayak kamu, gue juga habis scrolling media sosial setiap hari.",
    "r Tapi belakangan ini, gue ngerasa ada yang aneh. Kok makin banyak berita palsu, komentar toxic, dan orang-orang yang kayaknya nggak peduli sama privasi mereka sendiri?",
    "r Makanya, gue mutusin buat belajar lebih dalam soal digital literacy. Dan sekarang, gue mau ngajak kamu juga!",
    {
      Input: {
        Text: "Sebelum mulai, boleh tahu nama kamu?",
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
              name: "Digital Navigator",
              color: "#5bffb2",
            },
          });
          this.storage({
            player: {
              name: "Digital Navigator",
            },
          });
        },
        Warning: "Masukkan namamu dulu ya!",
      },
    },
    "r {{player.name}}, keren! Siap belajar jadi Digital Literacy Navigator?",
    "r Oke, kita mulai dari masalah yang paling sering kamu temuin di timeline...",
    "jump Scene-2",
  ],

  "Scene-2": [
    "show scene scene-2",
    "r Coba perhatiin deh, berapa kali hari ini kamu nemu berita yang bikin kamu kaget atau emosi di media sosial?",
    "r Nah, pertanyaannya: apakah semua berita itu beneran?",
    {
      Choice: {
        Dialog: "Menurut kamu, seberapa sering informasi yang viral di media sosial itu ternyata palsu atau menyesatkan?",
        A: {
          Text: "Jarang banget, paling 5%",
          Do: "jump Scene-2-Salah",
        },
        B: {
          Text: "Cukup sering, sekitar 25%",
          Do: "jump Scene-2-Salah",
        },
        C: {
          Text: "Sangat sering, hampir 50%",
          Do: "jump Scene-2-Benar",
        },
      },
    },
  ],

  "Scene-2-Benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "r Tepat! Menurut berbagai penelitian, hampir 50% informasi yang viral di media sosial mengandung unsur misinformasi atau disinformasi.",
    "r Artinya, dari 10 postingan viral yang kamu lihat, kemungkinan 5 di antaranya nggak sepenuhnya benar. Ngeri, kan?",
    "jump Scene-3",
  ],

  "Scene-2-Salah": [
    "play sound wrong with volume 50",
    "show scene scene-2-salah",
    "r Hmm, angkanya sebenarnya lebih tinggi dari itu. Menurut penelitian, hampir 50% informasi viral di media sosial mengandung unsur misinformasi.",
    "r Ini bukan angka yang main-main. Artinya, kita harus lebih kritis lagi dalam menyaring informasi.",
    "jump Scene-3",
  ],

  "Scene-3": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-3",
    "r Nah, sekarang pertanyaannya: gimana cara kita bedain berita asli sama yang palsu?",
    "r Ada beberapa tanda yang bisa kamu perhatiin:",
    "r Pertama, cek sumbernya. Apakah dari media yang kredibel atau dari blog nggak jelas?",
    "r Kedua, cek judulnya. Kalau judulnya terlalu provokatif atau clickbait, waspada!",
    "r Ketiga, cek tanggalnya. Kadang berita lama di-share lagi seolah-olah baru.",
    "jump Scene-4",
  ],

  "Scene-4": [
    "show scene scene-4",
    "r Nah, sekarang gue kasih contoh nyata. Bayangin kamu nemu postingan kayak gini di timeline:",
    "r \"HEBOH! Makanan X ternyata mengandung bahan berbahaya! Share sebanyak-banyaknya sebelum dihapus!\"",
    "r Kalau kamu nemu postingan kayak gini, apa yang kamu lakuin?",
    {
      Choice: {
        Dialog: "Kamu nemu postingan yang klaim makanan tertentu berbahaya. Apa yang kamu lakukan?",
        A: {
          Text: "Langsung share biar teman-teman tahu",
          Do: "jump Scene-4-A",
        },
        B: {
          Text: "Cek dulu di situs fact-checking",
          Do: "jump Scene-4-Benar",
        },
        C: {
          Text: "Abaikan aja, males ribet",
          Do: "jump Scene-4-C",
        },
      },
    },
  ],

  "Scene-4-A": [
    "show scene scene-4-a",
    "r Hmm, itu reaksi yang paling sering dilakuin orang, tapi bukan yang paling bijak.",
    "r Kalau ternyata beritanya palsu, kamu udah ikut menyebarkan misinformasi. Dan itu bisa bikin panik orang lain.",
    "r Ingat, setiap kali kamu share sesuatu, kamu ikut bertanggung jawab atas informasi itu.",
    "jump Scene-5",
  ],

  "Scene-4-Benar": [
    "play sound clap with volume 50",
    "show scene scene-4-benar",
    "r Mantap! Itu langkah yang tepat. Selalu verifikasi dulu sebelum share.",
    "r Kamu bisa cek di situs seperti TurnBackHoax.id, CekFakta.com, atau cari di Google dengan kata kunci tambahan \"hoax\" atau \"fact check\".",
    "r Ingat: di era digital, kita semua adalah gatekeeper informasi.",
    "jump Scene-5",
  ],

  "Scene-4-C": [
    "show scene scene-4-c",
    "r Hmm, mengabaikan memang lebih aman daripada share berita palsu. Tapi ada cara yang lebih baik.",
    "r Kamu bisa bantu orang lain dengan melaporkan postingan itu sebagai misinformasi. Platform media sosial biasanya punya fitur report.",
    "r Atau kalau kamu yakin itu hoax, kamu bisa comment dengan link fact-check yang benar.",
    "jump Scene-5",
  ],

  "Scene-5": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-5",
    "r Oke, sekarang kita udah ngerti cara mengenali berita palsu. Tapi ada masalah lain yang nggak kalah penting...",
    "r Privasi. Banyak orang, terutama remaja, nggak sadar betapa pentingnya menjaga data pribadi di dunia digital.",
    "r Bayangin: berapa banyak info tentang dirimu yang udah tersebar di internet?",
    "jump Scene-6",
  ],

  "Scene-6": [
    "show scene scene-6",
    "r Coba pikirin: nama lengkap, tanggal lahir, sekolah, wajah, lokasi, hobi, nama orang tua...",
    "r Semua itu bisa dikumpulin oleh siapa aja kalau kamu nggak atur privasi dengan benar.",
    "r Dan yang lebih serem: data itu bisa dipake buat hal-hal yang nggak kamu bayangin.",
    "jump Scene-7",
  ],

  "Scene-7": [
    "show scene scene-7",
    "r Sekarang, gue mau tanya kamu soal privasi.",
    {
      Choice: {
        Dialog: "Dari pengaturan berikut, mana yang menurutmu paling penting untuk diaktifkan di media sosial?",
        A: {
          Text: "Posting otomatis lokasi di setiap foto",
          Do: "jump Scene-7-Salah",
        },
        B: {
          Text: "Akun publik biar banyak yang follow",
          Do: "jump Scene-7-Salah",
        },
        C: {
          Text: "Verifikasi dua langkah (2FA)",
          Do: "jump Scene-7-Benar",
        },
      },
    },
  ],

  "Scene-7-Benar": [
    "play sound clap with volume 50",
    "show scene scene-7-benar",
    "r Betul banget! Two-Factor Authentication (2FA) atau verifikasi dua langkah itu krusial banget.",
    "r Dengan 2FA, meskipun password kamu bocor, orang lain tetap nggak bisa akses akunmu tanpa kode verifikasi dari HP-mu.",
    "jump Scene-8",
  ],

  "Scene-7-Salah": [
    "play sound wrong with volume 50",
    "show scene scene-7-salah",
    "r Hmm, itu justru bisa bikin privasi kamu makin rentan.",
    "r Yang paling penting justru adalah verifikasi dua langkah (2FA). Fitur ini nambahin lapisan keamanan ekstra di akunmu.",
    "r Selain itu, atur juga siapa yang bisa lihat postinganmu, matikan lokasi otomatis, dan jangan sembarangan kasih akses ke aplikasi pihak ketiga.",
    "jump Scene-8",
  ],

  "Scene-8": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-8",
    "r Selain 2FA, ada beberapa pengaturan privasi lain yang wajib kamu cek:",
    "r Siapa yang bisa lihat postinganmu? Atur ke \"Teman\" atau \"Private\", bukan \"Publik\".",
    "r Siapa yang bisa tag kamu? Atur supaya kamu bisa approve sebelum di-tag.",
    "r Siapa yang bisa DM kamu? Batasi ke orang yang kamu kenal aja.",
    "r Dan yang paling penting: jangan pernah share password, bahkan sama teman dekat sekalipun.",
    "jump Scene-9",
  ],

  "Scene-9": [
    "show scene scene-9",
    "r Ada satu lagi yang sering dilupain orang: apa yang kamu share hari ini bisa jadi masalah di masa depan.",
    "r Pernah dengar istilah \"digital footprint\"? Semua yang kamu posting, comment, atau like di internet itu tersimpan dan bisa dilihat orang lain.",
    "r Bayangin kalau calon dosen atau employer nge-Google nama kamu 5 tahun dari sekarang. Apa yang mereka temuin?",
    "jump Scene-10",
  ],

  "Scene-10": [
    "show scene scene-10",
    "r Oke, kita udah bahas berita palsu dan privasi. Sekarang, masalah terbesar yang sering dihadapi remaja di media sosial...",
    "r Cyberbullying. Atau perundungan daring.",
    "r Menurut data, 1 dari 3 remaja di Indonesia pernah mengalami cyberbullying. Dan dampaknya bisa sangat serius.",
    "jump Scene-11",
  ],

  "Scene-11": [
    "show scene scene-11",
    "r Cyberbullying itu bukan cuma soal kata-kata kasar di comment. Bentuknya bisa macam-macam:",
    "r Mengirim pesan ancaman atau mengintimidasi.",
    "r Menyebarkan rumor atau foto tanpa izin.",
    "r Sengaja mengeluarkan seseorang dari grup atau circle pertemanan online.",
    "r Membuat akun palsu untuk menghina orang lain.",
    "r Semua itu termasuk cyberbullying, dan semuanya bisa berdampak serius pada kesehatan mental korban.",
    "jump Scene-12",
  ],

  "Scene-12": [
    "show scene scene-12",
    "r Sekarang, bayangin kamu ada di situasi ini:",
    "r Seorang teman sekelas kamu tiba-tiba jadi bahan ejekan di grup WhatsApp. Ada yang share foto diedit jadi lucu-lucuan, tapi teman kamu jelas nggak nyaman.",
    "r Beberapa orang mulai ikut-ikutan ngejek. Apa yang kamu lakuin?",
    {
      Choice: {
        Dialog: "Teman kamu jadi bahan ejekan di grup WhatsApp. Apa reaksimu?",
        A: {
          Text: "Ikut ketawa biar nggak dianggap kudet",
          Do: "jump Scene-12-A",
        },
        B: {
          Text: "Diam aja, bukan urusan gue",
          Do: "jump Scene-12-B",
        },
        C: {
          Text: "Tegur yang ngejek dan support teman kamu",
          Do: "jump Scene-12-Benar",
        },
      },
    },
  ],

  "Scene-12-A": [
    "show scene scene-12-a",
    "r Hmm, gue ngerti sih tekanan sosialnya. Tapi coba pikirin gimana perasaan teman kamu.",
    "r Kalau kamu ikut ngejek, kamu jadi bagian dari masalah. Korban cyberbullying sering ngerasa sendirian dan nggak ada yang bela.",
    "r Satu tawaanmu mungkin terasa kecil buat kamu, tapi bisa jadi pukulan besar buat dia.",
    "jump Scene-13",
  ],

  "Scene-12-B": [
    "show scene scene-12-b",
    "r Diam memang terasa aman, tapi diam bukan berarti netral.",
    "r Ketika kamu diam saat melihat bullying, secara nggak langsung kamu memberi izin buat itu terus terjadi.",
    "r Kamu nggak harus jadi pahlawan. Cukup bilang \"udah ah, nggak lucu\" aja udah sangat berarti.",
    "jump Scene-13",
  ],

  "Scene-12-Benar": [
    "play sound clap with volume 50",
    "show scene scene-12-benar",
    "r Respect banget! Itu butuh keberanian, tapi itu hal yang tepat.",
    "r Menjadi bystander yang speak up itu salah satu cara paling efektif buat menghentikan cyberbullying.",
    "r Kamu juga bisa langsung DM teman kamu buat nanya kabar dan kasih tau dia nggak sendirian.",
    "jump Scene-13",
  ],

  "Scene-13": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-13",
    "r Ada satu hal lagi yang penting: kalau kamu sendiri yang mengalami cyberbullying, ingat ini:",
    "r Pertama, jangan bales dengan serangan balik. Itu cuma bakal memperkeruh suasana.",
    "r Kedua, screenshot semua bukti. Screenshot chat, komentar, atau postingan yang mengganggu.",
    "r Ketiga, block dan report orang yang melakukan bullying.",
    "r Keempat, cerita ke orang yang kamu percaya: orang tua, guru BK, atau teman dekat.",
    "r Kelima, kalau dampaknya udah serius ke mental kamu, jangan ragu minta bantuan profesional.",
    "jump Scene-14",
  ],

  "Scene-14": [
    "show scene scene-14",
    "r Nah, sekarang gue mau ngetes pemahaman kamu soal etika di dunia digital.",
    {
      Choice: {
        Dialog: "Mana dari perilaku berikut yang BUKAN termasuk etika digital yang baik?",
        A: {
          Text: "Meminta izin sebelum share foto orang lain",
          Do: "jump Scene-14-Salah",
        },
        B: {
          Text: "Menyebarkan screenshot chat pribadi orang lain",
          Do: "jump Scene-14-Benar",
        },
        C: {
          Text: "Menggunakan bahasa yang sopan di kolom komentar",
          Do: "jump Scene-14-Salah",
        },
      },
    },
  ],

  "Scene-14-Benar": [
    "play sound clap with volume 50",
    "show scene scene-14-benar",
    "r Tepat! Menyebarkan screenshot chat pribadi tanpa izin itu pelanggaran privasi dan bisa masuk ranah hukum.",
    "r Di Indonesia, ada UU ITE yang mengatur soal ini. Pelanggaran bisa dikenakan sanksi pidana.",
    "r Jadi ingat: chat pribadi ya tetap pribadi.",
    "jump Scene-15",
  ],

  "Scene-14-Salah": [
    "play sound wrong with volume 50",
    "show scene scene-14-salah",
    "r Hmm, yang BUKAN etika digital yang baik justru adalah menyebarkan screenshot chat pribadi orang lain.",
    "r Dua pilihan lainnya justru termasuk etika digital yang baik. Meminta izin sebelum share foto dan menggunakan bahasa sopan itu penting banget.",
    "r Ingat, di dunia digital, privasi orang lain juga harus kita hormati.",
    "jump Scene-15",
  ],

  "Scene-15": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-15",
    "r Keren, {{player.name}}! Kamu udah belajar banyak hal hari ini.",
    "r Sekarang, sebelum kita selesaiin chapter ini, gue mau kasih kamu beberapa tips praktis yang bisa langsung kamu terapkan.",
    "jump Scene-16",
  ],

  "Scene-16": [
    "show scene scene-16",
    "r Tips #1: Sebelum share sesuatu, tanya diri sendiri — \"Apakah ini benar? Apakah ini baik? Apakah ini perlu?\"",
    "r Kalau jawabannya nggak, mending jangan share.",
    "jump Scene-17",
  ],

  "Scene-17": [
    "show scene scene-17",
    "r Tips #2: Atur waktu layar kamu. Terlalu banyak scrolling bisa bikin kamu capek mental dan lebih gampang kena misinformasi.",
    "r Coba pake fitur Screen Time atau Digital Wellbeing di HP kamu buat track berapa lama kamu main HP tiap hari.",
    "jump Scene-18",
  ],

  "Scene-18": [
    "show scene scene-18",
    "r Tips #3: Follow akun-akun yang edukatif dan positif. Unfollow atau mute akun yang bikin kamu ngerasa nggak baik.",
    "r Algorithm media sosial bakal nyuguhin konten berdasarkan apa yang kamu follow dan engage. Jadi, pilih dengan bijak!",
    "jump Scene-19",
  ],

  "Scene-19": [
    "show scene scene-19",
    "r Tips #4: Jangan compare hidup kamu sama highlight reel orang lain di media sosial.",
    "r Yang orang post di Instagram itu curated version of their life, bukan realita sehari-hari. Jadi, jangan insecure ya!",
    "jump Scene-20",
  ],

  "Scene-20": [
    "show scene scene-20",
    "r Tips #5: Kalau kamu nemu sesuatu yang bikin kamu nggak nyaman di internet, cerita ke orang yang kamu percaya.",
    "r Nggak ada yang salah dengan minta bantuan. Justru itu tanda kamu kuat dan peduli sama diri sendiri.",
    "jump Scene-21",
  ],

  "Scene-21": [
    "show scene scene-21",
    "r Nah, {{player.name}}, kamu udah sampai di akhir Chapter 1!",
    "r Hari ini kita udah belajar tentang:",
    "r 1. Cara mengenali berita palsu dan misinformasi",
    "r 2. Pentingnya menjaga privasi di dunia digital",
    "r 3. Cara menghadapi cyberbullying dan menjadi bystander yang baik",
    "r 4. Etika digital dan tanggung jawab kita sebagai warga digital",
    "r 5. Tips praktis untuk survive di media sosial",
    "jump Scene-22",
  ],

  "Scene-22": [
    "show scene scene-sit-right",
    "r Sebelum kita pisah, satu pesan terakhir dari gue:",
    "r Di era digital, literasi itu bukan cuma soal bisa baca dan nulis. Tapi juga soal bisa berpikir kritis, melindungi diri sendiri, dan menghormati orang lain di dunia maya.",
    "r Jadi, mulai sekarang, jadilah Digital Literacy Navigator yang bijak. Nggak cuma buat diri sendiri, tapi juga buat orang-orang di sekitarmu.",
    "r Sampai ketemu di chapter selanjutnya, {{player.name}}! Stay safe online!",
  ],
};

// Make globally accessible for index.js merging
window.Chapter1 = Chapter1;

// Export for use in index.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Chapter1;
}
