/**
 * Chapter 2: Empathy in Action
 *
 * Learning Outcomes:
 * - Understand the difference between empathy and sympathy
 * - Practice perspective-taking in real situations
 * - Learn to read non-verbal communication cues
 * - Understand healthy boundaries in relationships
 * - Learn the art of forgiveness and letting go
 *
 * Duration: ~15 minutes
 * Scenes: 18 scenes
 */

/* global monogatari */

const Chapter2 = {
  "Scene-19": [
    "show scene scene-1",
    "play music music-2 with loop fade 20 volume 10",
    "d {{player.name}}! Kita ketemu lagi!",
    "d Di chapter terakhir, aku udah cerita soal active listening, \"I feel\" statements, dan gimana cara berbaikan sama Raka.",
    "d Sekarang kita mau bahas sesuatu yang lebih dalam: EMPATHI. Dan kenapa empati itu beda banget dari simpati.",
    "jump Scene-20",
  ],

  "Scene-20": [
    "show scene scene-2",
    "d Banyak orang ngira empati dan simpati itu sama. Tapi sebenarnya beda jauh.",
    "d Simpati itu: kamu kasihan sama orang lain. \"Kasihan ya, kamu lagi susah.\"",
    "d Empati itu: kamu MERASAIN apa yang orang lain rasain. \"Aku ngerti gimana rasanya lagi susah.\"",
    "d Simpati itu dari luar. Empati itu dari dalam.",
    {
      Choice: {
        Dialog: "Teman kamu gagal ujian dan sedih. Mana respons yang menunjukkan empati?",
        A: {
          Text: "Yah, sabar ya. Mungkin emang belum rejeki.",
          Do: "jump Scene-20-Salah",
        },
        B: {
          Text: "Aku ngerti gimana rasanya gagal. Dulu aku juga pernah dan rasanya hancur.",
          Do: "jump Scene-20-Benar",
        },
        C: {
          Text: "Udahlah, nggak usah dipikirin.",
          Do: "jump Scene-20-Salah",
        },
      },
    },
  ],

  "Scene-20-Benar": [
    "play sound clap with volume 50",
    "show scene scene-3",
    "d Tepat! Itu empati. Kamu masuk ke dunia orang lain dan merasakan apa yang dia rasakan.",
    "d Nggak harus kamu pernah ngalamin hal yang persis sama. Tapi kamu bisa membayangkan gimana rasanya.",
    "d Empati bikin orang ngerasa nggak sendirian. Dan itu sering kali lebih berharga dari solusi apapun.",
    "jump Scene-21",
  ],

  "Scene-20-Salah": [
    "play sound wrong with volume 50",
    "show scene scene-4",
    "d Hmm, itu respons yang simpatik, tapi bukan empati.",
    "d Empati: \"Aku ngerti gimana rasanya gagal. Rasanya berat banget ya?\"",
    "d Bedanya: simpati menjaga jarak, empati masuk ke dunia orang lain. Simpati kasih solusi, empati kasih kehadiran.",
    "jump Scene-21",
  ],

  "Scene-21": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-5",
    "d Nah, empati itu skill. Bukan bakat. Dan seperti skill lainnya, bisa dilatih.",
    "d Salah satu cara terbaik: PERSPECTIVE TAKING. Coba bayangin dirimu di posisi orang lain.",
    "d Pertanyaan sederhana: \"Kalau aku di posisinya, gimana rasanya? Apa yang aku butuhkan?\"",
    "d Ini kedengeran gampang. Tapi dalam situasi emosional, kita sering lupa.",
    "jump Scene-22",
  ],

  "Scene-22": [
    "show scene scene-6",
    "d Aku mau kasih contoh nyata. Waktu aku dan Raka berantem soal proyek, aku cuma lihat dari sudut pandangku: \"Gue udah kerja keras, lo minta ulang.\"",
    "d Tapi kalau aku coba lihat dari sudut pandang Raka: dia stres karena nilai turun. Proyek ini penting buat dia. Dia minta ulang bukan karena nggak appreciate aku, tapi karena dia pengen hasilnya bagus.",
    "d Kalau aku bisa perspective taking dari awal, mungkin kita nggak perlu berantem tiga hari.",
    {
      Choice: {
        Dialog: "Kenapa perspective taking itu sulit dilakukan saat konflik?",
        A: {
          Text: "Karena emosi kita sendiri menutupi sudut pandang orang lain",
          Do: "jump Scene-22-Benar",
        },
        B: {
          Text: "Karena kita nggak peduli sama orang lain",
          Do: "jump Scene-22-Salah",
        },
        C: {
          Text: "Karena nggak ada gunanya mikirin orang lain",
          Do: "jump Scene-22-Salah",
        },
      },
    },
  ],

  "Scene-22-Benar": [
    "play sound clap with volume 50",
    "show scene scene-7",
    "d Betul banget! Waktu kita emosi, otak kita masuk mode \"fight or flight\". Kita fokus bertahan, bukan memahami.",
    "d Makanya, sebelum merespons konflik, tarik napas dulu. Tenangkan diri. Baru coba lihat dari sudut pandang orang lain.",
    "jump Scene-23",
  ],

  "Scene-22-Salah": [
    "play sound wrong with volume 50",
    "show scene scene-8",
    "d Hmm, sebenarnya bukan karena kita nggak peduli. Waktu emosi, otak kita masuk mode bertahan.",
    "d Kita fokus pada diri sendiri: \"Aku yang benar, kamu yang salah.\" Perspective taking butuh tenaga mental yang nggak sedikit.",
    "d Makanya, tarik napas dulu sebelum merespons konflik. Baru coba lihat dari sudut pandang orang lain.",
    "jump Scene-23",
  ],

  "Scene-23": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-9",
    "d Sekarang, bahas sesuatu yang sering dilupain: NON-VERBAL COMMUNICATION.",
    "d Tahukah kamu? 55% komunikasi itu lewat bahasa tubuh, 38% nada suara, dan cuma 7% kata-kata.",
    "d Artinya: apa yang kamu TUNJUKKAN lebih penting dari apa yang kamu KATAKAN.",
    "d Contoh: kamu bilang \"aku baik-baik aja\" tapi wajahmu murung dan nada suaramu datar. Orang nggak akan percaya kata-katamu.",
    "jump Scene-24",
  ],

  "Scene-24": [
    "show scene scene-10",
    "d Ada beberapa tanda non-verbal yang perlu kamu perhatikan saat berkomunikasi:",
    "d 1. Kontak mata: tunjukkan kamu hadir dan peduli. Tapi jangan menatap terlalu intens, itu bisa bikin nggak nyaman.",
    "d 2. Postur tubuh: condong sedikit ke depan menunjukkan kamu tertarik. Menyilangkan tangan terkesan defensif.",
    "d 3. Ekspresi wajah: senyum, anggukan, atau ekspresi serius sesuai situasi.",
    "d 4. Nada suara: lembut untuk menenangkan, tegas untuk menegakkan batas.",
    "d 5. Jarak: jaga jarak yang nyaman. Terlalu dekat bisa mengintimidasi, terlalu jauh terkesan dingin.",
    "jump Scene-25",
  ],

  "Scene-25": [
    "show scene scene-11",
    "d Nah, sekarang aku mau bahas topik yang penting banget: BOUNDARIES. Atau batasan.",
    "d Empati bukan berarti kamu harus selalu bilang \"iya\". Kamu boleh bilang \"nggak\" dan tetap jadi orang yang baik.",
    "d Boundaries itu bukan tembok. Itu pagar. Kamu tetap bisa kasih orang masuk, tapi dengan aturan yang jelas.",
    {
      Choice: {
        Dialog: "Temanmu sering pinjam uang tapi nggak pernah mengembalikan. Apa yang kamu lakukan?",
        A: {
          Text: "Tetap minjemin, kasihan kalau nggak",
          Do: "jump Scene-25-A",
        },
        B: {
          Text: "Bilang dengan jujur: \"Aku nggak bisa minjemin lagi sebelum yang kemarin dikembalikan.\"",
          Do: "jump Scene-25-Benar",
        },
        C: {
          Text: "Hindari dia, nggak mau ribut",
          Do: "jump Scene-25-C",
        },
      },
    },
  ],

  "Scene-25-A": [
    "show scene scene-12-a",
    "d Aku ngerti niat baikmu. Tapi kalau kamu terus-terusan bilang \"iya\" padahal kamu nggak nyaman, itu namanya people pleasing.",
    "d People pleasing bikin kamu capek mental dan bisa bikin orang lain nggak menghargai batasanmu.",
    "d Bilang \"nggak\" itu bukan egois. Itu self-care.",
    "jump Scene-26",
  ],

  "Scene-25-Benar": [
    "play sound clap with volume 50",
    "show scene scene-12-benar",
    "d Mantap! Itu boundary yang sehat. Kamu jujur, tegas, tapi tetap sopan.",
    "d Kamu nggak menyerang temanmu. Kamu cuma menegakkan aturan yang wajar. Dan itu hakmu.",
    "d Teman yang baik akan menghargai batasanmu. Kalau dia marah karena kamu bilang \"nggak\", pertanyakan pertemanan itu.",
    "jump Scene-26",
  ],

  "Scene-25-C": [
    "show scene scene-12-c",
    "d Menghindar memang lebih mudah, tapi masalahnya nggak selesai. Dan kamu kehilangan teman.",
    "d Lebih baik bilang dengan jujur: \"Aku nggak nyaman kalau terus minjemin uang. Kita ngobrol yuk soal ini.\"",
    "d Itu lebih berani dan lebih menghargai hubungan daripada menghilang tanpa penjelasan.",
    "jump Scene-26",
  ],

  "Scene-26": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-13",
    "d Topik terakhir: FORGIVENESS. Memaafkan.",
    "d Ini mungkin yang paling susah. Karena memaafkan bukan berarti melupakan. Dan bukan berarti apa yang orang itu lakukan jadi oke.",
    "d Memaafkan itu melepas beban di dirimu sendiri. Kamu bilang: \"Aku nggak mau lagi terikat sama rasa sakit ini.\"",
    "d Contoh: Raka pernah bilang hal yang bikin aku sakit hati waktu berantem. Aku bisa simpan dendam. Tapi itu cuma bikin aku capek.",
    "d Jadi aku memaafkan. Bukan karena dia benar. Tapi karena aku mau bebas dari rasa marah itu.",
    {
      Choice: {
        Dialog: "Menurutmu, memaafkan itu...",
        A: {
          Text: "Melupakan semua yang terjadi",
          Do: "jump Scene-26-Salah",
        },
        B: {
          Text: "Melepas rasa sakit untuk dirimu sendiri",
          Do: "jump Scene-26-Benar",
        },
        C: {
          Text: "Membiarkan orang lain menyakitimu lagi",
          Do: "jump Scene-26-Salah",
        },
      },
    },
  ],

  "Scene-26-Benar": [
    "play sound clap with volume 50",
    "show scene scene-14-benar",
    "d Tepat! Memaafkan itu tentang dirimu, bukan tentang orang lain.",
    "d Kamu nggak harus lupa. Kamu nggak harus balikan kayak dulu. Tapi kamu melepas beban emosionalnya.",
    "d Dan ingat: memaafkan itu proses. Nggak harus sekaligus. Kadang butuh waktu. Dan itu oke.",
    "jump Scene-27",
  ],

  "Scene-26-Salah": [
    "play sound wrong with volume 50",
    "show scene scene-14-salah",
    "d Hmm, memaafkan bukan berarti melupakan atau membiarkan dirimu disakiti lagi.",
    "d Memaafkan itu: melepas rasa sakit di dalam dirimu sendiri. Kamu nggak lagi terikat sama kemarahan itu.",
    "d Kamu tetap bisa menjaga batasan. Kamu tetap bisa belajar dari pengalaman. Tapi kamu nggak lagi membawa beban emosionalnya.",
    "jump Scene-27",
  ],

  "Scene-27": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-15",
    "d {{player.name}}, kita udah sampai di akhir Chapter 2!",
    "d Hari ini kita udah belajar tentang:",
    "d 1. Empati vs simpati — masuk ke dunia orang lain, bukan cuma kasihan",
    "d 2. Perspective taking — coba lihat dari sudut pandang orang lain",
    "d 3. Non-verbal communication — bahasa tubuh lebih keras dari kata-kata",
    "d 4. Boundaries — bilang \"nggak\" itu bukan egois, itu self-care",
    "d 5. Forgiveness — melepas beban untuk dirimu sendiri",
    "jump Scene-28",
  ],

  "Scene-28": [
    "show scene scene-sit-right",
    "d {{player.name}}, komunikasi itu perjalanan seumur hidup. Nggak ada yang sempurna.",
    "d Tapi setiap kali kamu memilih untuk mendengarkan alih-alih membalas, kamu jadi sedikit lebih baik.",
    "d Setiap kali kamu memilih empati alih-alih menghakimi, hubunganmu jadi sedikit lebih kuat.",
    "d Sampai ketemu di chapter selanjutnya! Jadilah communicator yang bikin orang lain merasa didengar dan dihargai!",
  ],
};

window.Chapter2 = Chapter2;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Chapter2;
}
