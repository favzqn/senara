/**
 * Chapter 2: The Deep End of Social Media
 * 
 * Learning Outcomes:
 * - Understand how algorithms create filter bubbles and echo chambers
 * - Recognize the signs of social media addiction
 * - Learn about digital footprints and their long-term impact
 * - Understand the psychology of likes, shares, and validation
 * - Develop strategies for healthy social media habits
 * 
 * Duration: ~15 minutes
 * Scenes: 18 scenes
 */

/* global monogatari */

const Chapter2 = {
  "Scene-23": [
    "show scene scene-1",
    "play music music-2 with loop fade 20 volume 10",
    "r {{player.name}}! Kita ketemu lagi!",
    "r Di chapter sebelumnya, kita udah bahas berita palsu, privasi, dan cyberbullying. Sekarang kita mau masuk ke hal yang lebih dalam...",
    "r Sesuatu yang kamu alami setiap hari tapi mungkin nggak sadar: ALGORITHM.",
    "jump Scene-24",
  ],

  "Scene-24": [
    "show scene scene-2",
    "r Coba bayangin ini: kamu dan temanmu buka Instagram di waktu yang sama. Tapi isi feed kalian beda banget.",
    "r Kamu lihat meme gaming, tutorial masak, dan berita teknologi. Temanmu lihat konten olahraga, musik, dan gosip artis.",
    "r Kenapa bisa beda? Karena algorithm. Dia belajar apa yang kamu suka, lalu kasih kamu lebih banyak hal yang sama.",
    "r Kedengerannya helpful, kan? Tapi ada sisi gelapnya...",
    "jump Scene-25",
  ],

  "Scene-25": [
    "show scene scene-3",
    "r Istilahnya FILTER BUBBLE. Algorithm menciptakan gelembung di sekitarmu.",
    "r Di dalam gelembung itu, kamu cuma lihat perspektif yang sama dengan apa yang udah kamu percaya.",
    "r Kalau kamu suka konten kesehatan mental, kamu bakal dikasih lebih banyak konten kesehatan mental. Tapi kamu juga bakal dikasih konten yang mungkin over-dramatis atau nggak akurat tentang kesehatan mental.",
    "r Karena algorithm nggak peduli soal kebenaran. Dia peduli soal ENGAGEMENT.",
    {
      Choice: {
        Dialog: "Menurut kamu, apa dampak terbesar dari filter bubble?",
        A: {
          Text: "Kita jadi lebih fokus dan produktif",
          Do: "jump Scene-25-Salah",
        },
        B: {
          Text: "Kita kehilangan perspektif yang berbeda",
          Do: "jump Scene-25-Benar",
        },
        C: {
          Text: "Nggak ada dampak signifikan",
          Do: "jump Scene-25-Salah",
        },
      },
    },
  ],

  "Scene-25-Benar": [
    "play sound clap with volume 50",
    "show scene scene-4-benar",
    "r Tepat banget! Filter bubble bikin kita kehilangan exposure ke sudut pandang yang berbeda.",
    "r Akibatnya? Kita bisa jadi nggak toleran sama pendapat yang berbeda, karena kita nggak pernah dengerin sisi lain.",
    "jump Scene-26",
  ],

  "Scene-25-Salah": [
    "play sound wrong with volume 50",
    "show scene scene-4-salah",
    "r Hmm, dampaknya justru lebih serius dari itu. Filter bubble bikin kita kehilangan exposure ke perspektif yang berbeda.",
    "r Kita jadi tinggal di echo chamber, di mana semua yang kita denger cuma gema dari pendapat kita sendiri.",
    "jump Scene-26",
  ],

  "Scene-26": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-5",
    "r Nah, sekarang hubungannya sama ECHO CHAMBER. Pernah denger istilah ini?",
    "r Echo chamber itu kondisi di mana informasi, ide, atau kepercayaan diperkuat oleh repetisi di dalam sistem tertutup.",
    "r Artinya: kalau kamu percaya sesuatu, dan kamu cuma denger orang yang setuju sama kamu, kamu makin yakin. Padahal belum tentu benar.",
    "r Ini terjadi banget di media sosial. Kamu follow akun yang sevisi, algoritma kasih kamu konten yang sama, dan kamu makin yakin kalau semua orang berpikir kayak kamu.",
    "jump Scene-27",
  ],

  "Scene-27": [
    "show scene scene-6",
    "r Bayangin ini: kamu punya teman yang cuma follow akun fitness. Feed-nya penuh orang sixpack, workout routine, dan diet ketat.",
    "r Dia jadi ngerasa semua orang harus punya badan ideal. Dia mulai insecure sama badannya sendiri.",
    "r Padahal realitanya? Nggak semua orang kayak gitu. Dia cuma lihat satu sisi karena algorithm terus kasih dia konten yang sama.",
    "r Itu salah satu contoh bahaya filter bubble dan echo chamber dalam kehidupan sehari-hari.",
    "jump Scene-28",
  ],

  "Scene-28": [
    "show scene scene-7",
    "r Sekarang kita bahas sesuatu yang lebih personal: DIGITAL FOOTPRINT.",
    {
      Choice: {
        Dialog: "Pernahkah kamu Google nama sendiri?",
        A: {
          Text: "Pernah, dan hasilnya mengejutkan",
          Do: "jump Scene-28-A",
        },
        B: {
          Text: "Pernah, tapi nggak ada yang aneh",
          Do: "jump Scene-28-B",
        },
        C: {
          Text: "Belum pernah",
          Do: "jump Scene-28-C",
        },
      },
    },
  ],

  "Scene-28-A": [
    "show scene scene-8",
    "r Nah kan! Digital footprint itu nyata. Semua yang kamu posting, comment, atau like di internet itu tersimpan.",
    "r Bahkan postingan yang udah kamu hapus bisa tetap ada di cache, archive, atau screenshot orang lain.",
    "jump Scene-29",
  ],

  "Scene-28-B": [
    "show scene scene-9",
    "r Bagus kalau hasilnya bersih! Tapi ingat, digital footprint itu bukan cuma soal nama kamu di Google.",
    "r Ini soal data yang dikumpulin platform tentang kamu: apa yang kamu cari, berapa lama kamu nonton video tertentu, apa yang kamu beli.",
    "jump Scene-29",
  ],

  "Scene-28-C": [
    "show scene scene-10",
    "r Coba deh nanti Google nama kamu. Hasilnya mungkin mengejutkan.",
    "r Tapi ingat: digital footprint bukan cuma soal nama di Google. Ini soal jejak digital yang kamu tinggalkan setiap kali kamu online.",
    "jump Scene-29",
  ],

  "Scene-29": [
    "show scene scene-11",
    "r Digital footprint itu permanen. Bayangin kamu bikin postingan yang menurut kamu lucu sekarang. Tapi 10 tahun lagi, kamu lagi interview kerja, dan calon employer nemu postingan itu.",
    "r Atau bayangin kamu comment sesuatu yang emosional sekarang. Tapi 5 tahun lagi, kamu udah berubah sebagai orang, tapi comment itu masih ada.",
    "r Makanya, sebelum posting sesuatu, tanya diri sendiri: \"Apakah gue bakal bangga sama ini 5 tahun dari sekarang?\"",
    "jump Scene-30",
  ],

  "Scene-30": [
    "show scene scene-12",
    "r Oke, sekarang kita masuk ke topik yang paling penting menurut gue: SOCIAL MEDIA ADDICTION.",
    "r Coba jawab jujur:",
    {
      Choice: {
        Dialog: "Berapa jam per hari kamu habisin waktu di media sosial?",
        A: {
          Text: "Kurang dari 1 jam",
          Do: "jump Scene-30-A",
        },
        B: {
          Text: "1-3 jam",
          Do: "jump Scene-30-B",
        },
        C: {
          Text: "Lebih dari 3 jam",
          Do: "jump Scene-30-C",
        },
      },
    },
  ],

  "Scene-30-A": [
    "show scene scene-13",
    "r Wow, itu sangat sedikit! Kamu udah punya kontrol yang baik.",
    "r Rata-rata remaja Indonesia habisin 3-4 jam per hari di media sosial. Jadi kamu di bawah rata-rata, dan itu bagus!",
    "jump Scene-31",
  ],

  "Scene-30-B": [
    "show scene scene-14",
    "r Itu termasuk normal. Tapi coba deh track lebih detail. Kadang kita ngerasa \"cuma bentar\" tapi ternyata udah 2 jam.",
    "r Coba pake fitur Screen Time di iPhone atau Digital Wellbeing di Android buat lihat angka pastinya.",
    "jump Scene-31",
  ],

  "Scene-30-C": [
    "show scene scene-15",
    "r Hmm, itu udah termasuk banyak. Dan gue yakin kamu sering ngerasa \"kok bisa lama banget?\"",
    "r Itu karena social media dirancang bikin kamu ketagihan. Ada alasan kenapa kamu susah berhenti scroll.",
    "jump Scene-31",
  ],

  "Scene-31": [
    "show scene scene-16",
    "r Ini yang terjadi di otak kamu waktu scrolling: DOPAMINE LOOP.",
    "r Setiap kali kamu nemu konten yang menarik, lucu, atau bikin emosi, otak kamu release dopamine. Itu senyawa yang bikin kamu ngerasa senang.",
    "r Nah, platform media sosial dirancang supaya kamu terus dapet dopamine hit. Makanya kamu susah berhenti.",
    "r Fitur seperti infinite scroll, autoplay video, dan notification badge semuanya dirancang buat bikin kamu stay selama mungkin.",
    "jump Scene-32",
  ],

  "Scene-32": [
    "show scene scene-17",
    "r Sekarang, bahas soal LIKES. Kenapa sih kita peduli banget sama jumlah likes?",
    "r Jawabannya: karena likes itu VALIDATION. Setiap like yang kamu dapet bikin otak kamu ngerasa di-approve, di-accept.",
    "r Masalahnya: kalau kamu tergantung sama likes buat ngerasa valuable, kamu lagi nyerahin harga dirimu ke orang lain.",
    {
      Choice: {
        Dialog: "Kalau kamu posting foto tapi nggak ada yang like, gimana perasaanmu?",
        A: {
          Text: "Nggak masalah, gue posting buat diri sendiri",
          Do: "jump Scene-32-Benar",
        },
        B: {
          Text: "Sedikit kecewa, tapi nggak lama",
          Do: "jump Scene-32-B",
        },
        C: {
          Text: "Langsung insecure dan pengen hapus",
          Do: "jump Scene-32-C",
        },
      },
    },
  ],

  "Scene-32-Benar": [
    "play sound clap with volume 50",
    "show scene scene-12-benar",
    "r Mantap, {{player.name}}! Mindset yang sehat banget.",
    "r Posting karena kamu mau share, bukan karena kamu mau validasi. Itu perbedaan besar.",
    "jump Scene-33",
  ],

  "Scene-32-B": [
    "show scene scene-13",
    "r Itu reaksi yang normal. Tapi coba refleksi: kenapa kamu kecewa?",
    "r Kalau jawabannya karena kamu ngerasa nggak di-approve, itu tanda kamu mulai tergantung sama validasi dari orang lain.",
    "jump Scene-33",
  ],

  "Scene-32-C": [
    "play sound wrong with volume 50",
    "show scene scene-14-salah",
    "r {{player.name}}, itu tanda kamu udah tergantung sama validasi dari media sosial.",
    "r Dan itu bukan salah kamu. Platform ini DIRANJANG bikin kamu ngerasa kayak gitu. Tapi sekarang kamu sadar, dan itu langkah pertama.",
    "jump Scene-33",
  ],

  "Scene-33": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-18",
    "r Oke, {{player.name}}, kita udah bahas banyak hal di chapter ini. Sekarang gue mau kasih kamu STRATEGI buat healthy social media habits.",
    "r Strategi #1: SET TIME LIMIT. Pake fitur bawaan HP kamu buat set batas waktu per app. Kalau udah mencapai limit, app-nya ke-lock.",
    "r Strategi #2: CURATE YOUR FEED. Unfollow akun yang bikin kamu insecure. Follow akun yang edukatif dan inspiratif. Kamu yang kontrol algorithm, bukan sebaliknya.",
    "r Strategi #3: NOTIFICATION DETOX. Matikan notifikasi yang nggak penting. Kamu nggak perlu tau setiap like atau comment secara real-time.",
    "r Strategi #4: PHONE-FREE ZONES. Tentuin waktu atau tempat di mana HP nggak boleh ada. Misalnya: meja makan, kamar tidur, atau 1 jam sebelum tidur.",
    "r Strategi #5: REAL-WORLD CONNECTION. Prioritasin interaksi tatap muka. Media sosial itu alat, bukan pengganti kehidupan nyata.",
    "jump Scene-34",
  ],

  "Scene-34": [
    "show scene scene-sit-right",
    "r {{player.name}}, kamu udah menyelesaikan Chapter 2!",
    "r Hari ini kita udah belajar tentang:",
    "r 1. Filter bubble dan echo chamber — kenapa kamu cuma lihat satu sisi",
    "r 2. Digital footprint — jejak digital yang permanen",
    "r 3. Social media addiction — dopamine loop dan kenapa kamu susah berhenti scroll",
    "r 4. Psikologi likes — kenapa kita tergantung sama validasi",
    "r 5. Strategi healthy social media habits — ambil kontrol kembali",
    "r Sampai ketemu di chapter selanjutnya, {{player.name}}! Remember: you control the algorithm, not the other way around!",
  ],
};

window.Chapter2 = Chapter2;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Chapter2;
}
