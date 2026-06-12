/**
 * Chapter 1: The Art of Listening
 *
 * Learning Outcomes:
 * - Understand active listening techniques
 * - Learn to use "I feel" statements
 * - Develop conflict resolution skills
 * - Practice empathy in disagreements
 * - Navigate difficult conversations peacefully
 *
 * Duration: ~20 minutes
 * Scenes: 18 scenes
 */

/* global monogatari, STORY_CONSTANTS, buildInputScene, buildSoundScene */

const Chapter1 = {
  "Scene-1": [
    "show scene scene-1",
    "play music chapter-1 with loop fade 20 volume 10",
    "d Hey, aku Dimas. Siswa kelas 11. Dan hari ini... aku lagi nggak baik-baik aja.",
    "d Aku baru berantem sama Raka, sahabatku sejak kelas 7. Gara-gara? Proyek kelompok.",
    {
      Input: {
        Text: "Sebelum lanjut, siapa namamu?",
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
    "d {{player.name}}, makasih udah mau dengerin. Jadi gini ceritanya...",
    "jump Scene-2",
  ],

  "Scene-2": [
    "show scene scene-2",
    "d Jadi, kita dapet tugas kelompok bikin presentasi. Aku udah kerjain bagian paling berat, tapi Raka bilang presentasinya nggak bagus dan minta ulang.",
    "d Aku langsung kesel. \"Lo pikir gue nggak capek? Gue udah kerja keras dan lo minta ulang?!\"",
    "d Raka juga naik pitam. \"Gue cuma mau kasih yang terbaik buat kelompok kita! Lo kenapa sih defensif banget?\"",
    "d Dan... kita berdua diem. Udah tiga hari nggak ngobrol.",
    {
      Choice: {
        Dialog: "Kalau kamu di posisi Dimas, apa yang akan kamu lakukan?",
        A: {
          Text: "Marah — Raka seharusnya menghargai kerja kerasku",
          Do: "jump Scene-3-A",
        },
        B: {
          Text: "Diam aja — nggak mau ribut, biar waktu yang selesaikan",
          Do: "jump Scene-3-B",
        },
        C: {
          Text: "Ajak ngobrol baik-baik untuk selesaikan masalah",
          Do: "jump Scene-3-C",
        },
      },
    },
  ],

  "Scene-3-A": [
    "show scene scene-3-a",
    "d Aku memilih marah. Aku nge-chat Raka: \"Lo tuh nggak pernah appreciate orang lain. Selalu ngerasa paling bener sendiri!\"",
    "d Raka bales: \"Lo yang nggak bisa terima kritik!\"",
    "d Dan makin parah. Sekarang nggak cuma berantem soal tugas, tapi udah saling serang pribadi.",
    "d Hasilnya? Hubungan kita makin renggang. Tugas kelompok juga nggak kelar. Dua-duanya kalah.",
    "jump Scene-4",
  ],

  "Scene-3-B": [
    "show scene scene-3-b",
    "d Aku memilih diam. Nggak mau ribut. Nggak mau drama.",
    "d Tapi masalahnya nggak selesai. Setiap kali ketemu di kelas, rasanya canggung banget. Kita saling menghindar.",
    "d Tugas kelompok juga mandek. Teman-teman sekelompok mulai kesal karena kita nggak bisa kerja sama.",
    "d Diam bukan berarti masalahnya hilang. Kadang diam justru bikin masalah makin besar.",
    "jump Scene-4",
  ],

  "Scene-3-C": [
    "show scene scene-3-c",
    "d Aku memutuskan untuk ngajak Raka ngobrol. \"Rak, kita ngobrol bentar yuk. Aku mau bahas soal tugas kemarin.\"",
    "d Awalnya Raka ragu. Tapi dia mau. Kita duduk di kantin setelah sekolah.",
    "d \"Aku dengerin kamu dulu,\" kataku. Dan itu mengubah segalanya.",
    "d Raka cerita kalau dia sebenernya stres karena nilai akademiknya turun. Proyek ini kesempatan terakhir buat naikin rata-rata.",
    "d Ternyata, di balik kemarahan, ada kekhawatiran yang lebih dalam. Kalau aku nggak ngajak ngobrol, aku nggak akan pernah tahu.",
    "jump Scene-4",
  ],

  "Scene-4": [
    "show scene scene-4",
    "d Dari kejadian itu, aku belajar satu hal penting: cara kita merespons konflik menentukan hasilnya.",
    "d Marah bikin situasi makin panas. Diam bikin masalah mengendap. Tapi bicara baik-baik? Itu yang paling susah, tapi hasilnya paling baik.",
    "d Nah, sekarang aku mau ngajarin kamu satu teknik yang namanya: Active Listening.",
    "jump Scene-5",
  ],

  "Scene-5": [
    "show scene scene-5",
    "d Active Listening itu apa sih? Singkatnya: dengarkan untuk memahami, bukan untuk membalas.",
    "d Kebanyakan orang kalau dengerin orang ngomong, pikirannya udah nyiapin jawaban. Atau malah nge-judge.",
    {
      Choice: {
        Dialog: "Menurutmu, apa itu Active Listening?",
        A: {
          Text: "Mengulang kembali apa yang orang lain katakan untuk memastikan kita paham",
          Do: "jump Scene-5-Benar",
        },
        B: {
          Text: "Menghakimi apa yang orang lain rasakan",
          Do: "jump Scene-5-Salah",
        },
        C: {
          Text: "Memotong pembicaraan untuk memberi saran",
          Do: "jump Scene-5-Salah",
        },
        D: {
          Text: "Mengabaikan lawan bicara sampai dia selesai",
          Do: "jump Scene-5-Salah",
        },
      },
    },
  ],

  "Scene-5-Benar": [
    "play sound clap with volume 50",
    "show scene scene-5-benar",
    "d Betul! Active Listening artinya kita benar-benar mendengarkan, lalu mengulang atau memparafrasekan apa yang lawan bicara katakan.",
    "d Contoh: \"Jadi yang kamu rasain adalah...\" atau \"Kalau aku nggak salah denger, maksud kamu...\"",
    "d Ini menunjukkan kalau kamu beneran peduli dan berusaha memahami, bukan cuma nunggu giliran ngomong.",
    "jump Scene-6",
  ],

  "Scene-5-Salah": [
    "play sound wrong with volume 50",
    "show scene scene-5-salah",
    "d Hmm, itu bukan active listening. Active Listening itu: mendengarkan untuk memahami, lalu mengulang kembali apa yang orang lain katakan.",
    "d Contoh: \"Jadi yang kamu rasain adalah...\" atau \"Kalau aku nggak salah denger, maksud kamu...\"",
    "d Ini menunjukkan kamu beneran peduli, bukan cuma nunggu giliran ngomong atau nge-judge.",
    "jump Scene-6",
  ],

  "Scene-6": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-6",
    "d Ada beberapa teknik Active Listening yang bisa kamu coba:",
    "d 1. Paraphrase: Ulangi dengan kata-katamu sendiri. \"Jadi kamu merasa...\"",
    "d 2. Clarification: Tanya kalau nggak jelas. \"Maksud kamu yang tadi itu...?\"",
    "d 3. Non-verbal: Kontak mata, anggukan, postur terbuka. Tunjukkan kamu hadir.",
    "d 4. Jangan interrupt: Biarkan orang selesai bicara sebelum kamu merespons.",
    "d 5. Validasi perasaan: \"Aku ngerti kenapa kamu merasa begitu.\"",
    "jump Scene-7",
  ],

  "Scene-7": [
    "show scene scene-7",
    "d Nah, sekarang aku mau cerita lagi. Setelah insiden dengan Raka, aku coba terapkan active listening di situasi lain.",
    "d Waktu itu, temanku Lia lagi kesel karena merasa ditinggalin sama geng-nya. Dia cerita padaku.",
    "d Dulu, mungkin aku bakal bilang: \"Ah lebay deh, paling cuma perasaanmu aja.\" Tapi sekarang aku coba cara lain.",
    "d Aku bilang: \"Jadi kamu ngerasa ditinggalin ya? Itu pasti nggak enak banget. Mau cerita lebih?\"",
    "d Dan Lia langsung lega. Dia ngerasa didengar. Nggak perlu solusi, cuma butuh didengerin.",
    "jump Scene-8",
  ],

  "Scene-8": [
    "show scene scene-8",
    "d Sekarang, aku mau ngajarin kamu satu lagi teknik penting: \"I feel\" statements.",
    "d Ini cara ngomong yang bikin lawan bicara nggak merasa diserang, tapi kamu tetap bisa menyampaikan perasaanmu.",
    "d Rumusnya: \"Aku merasa [perasaan] ketika [kejadian] karena [alasan].\"",
    "d Contoh: \"Aku merasa nggak dihargai ketika tugasku langsung diminta ulang tanpa penjelasan, karena aku udah berusaha keras.\"",
    "d Bandingkan dengan: \"Lo nggak appreciate gue!\" — beda banget kan dampaknya?",
    "jump Scene-9",
  ],

  "Scene-9": [
    "show scene scene-9",
    "d Sekarang, coba pilih mana yang merupakan \"I feel\" statement yang baik.",
    {
      Choice: {
        Dialog: "Manakah \"I feel\" statement yang benar?",
        A: {
          Text: "\"Kamu tuh selalu bikin aku kesel!\"",
          Do: "jump Scene-9-Salah",
        },
        B: {
          Text: "\"Aku merasa sedih ketika kamu nggak nge-chat balik, karena aku merasa diabaikan.\"",
          Do: "jump Scene-9-Benar",
        },
        C: {
          Text: "\"Lo egois banget sih.\"",
          Do: "jump Scene-9-Salah",
        },
      },
    },
  ],

  "Scene-9-Benar": [
    "play sound clap with volume 50",
    "show scene scene-9-benar",
    "d Tepat! Itu contoh \"I feel\" statement yang baik. Kenapa? Karena:",
    "d 1. Fokus pada perasaan diri sendiri, bukan menyerang orang lain.",
    "d 2. Menyebutkan kejadian spesifik, bukan generalisasi.",
    "d 3. Menjelaskan dampaknya pada dirimu.",
    "d Pilihan lainnya menyerang karakter lawan bicara. Itu bikin orang defensif, bukan terbuka untuk diskusi.",
    "jump Scene-10",
  ],

  "Scene-9-Salah": [
    "play sound wrong with volume 50",
    "show scene scene-9-salah",
    "d Hmm, itu bukan \"I feel\" statement. Itu menyerang lawan bicara.",
    "d \"I feel\" statement yang baik: \"Aku merasa sedih ketika kamu nggak nge-chat balik, karena aku merasa diabaikan.\"",
    "d Kenapa ini lebih baik? Karena fokusnya pada perasaanmu sendiri, bukan menyalahkan orang lain. Dan kejadian yang disebutkan spesifik, bukan generalisasi.",
    "jump Scene-10",
  ],

  "Scene-10": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-10",
    "d Oke, {{player.name}}. Sekarang aku mau cerita gimana akhirnya aku berbaikan sama Raka.",
    "d Setelah belajar active listening dan \"I feel\" statements, aku ajak Raka ngobrol lagi.",
    "d Aku mulai dengan: \"Rak, aku mau jujur. Aku merasa marah waktu kamu minta ulang presentasiku, karena aku ngerisa kerja keras aku nggak dihargai.\"",
    "d Raka diam sebentar, lalu bilang: \"Gue nggak bermaksud gitu, Mas. Gue cuma pengen hasilnya bagus. Gue juga merasa bersalah udah bikin lo kesel.\"",
    "jump Scene-11",
  ],

  "Scene-11": [
    "show scene scene-11",
    "d Ternyata, waktu kita mau ngomong jujur tanpa nyerang, lawan bicara juga jadi lebih terbuka.",
    "d Kita akhirnya diskusi dengan tenang. Raka jelasin bagian mana yang dia rasa bisa diperbaiki, dan aku jelasin kenapa aku pilih pendekatan itu.",
    "d Hasilnya? Presentasi kita jadi lebih bagus karena kita gabungin ide berdua. Dan persahabatan kita malah jadi lebih kuat.",
    "d Konflik itu nggak selalu buruk. Kalau ditangani dengan baik, konflik justru bisa mempererat hubungan.",
    "jump Scene-12",
  ],

  "Scene-12": [
    "show scene scene-12",
    "d Nah, sekarang ada satu skenario lagi yang penting.",
    "d Bayangin: seseorang sedang marah padamu. Mungkin teman, saudara, atau orang tua. Mereka bilang hal-hal yang menyakitkan.",
    {
      Choice: {
        Dialog: "Seseorang sedang marah besar padamu. Apa yang sebaiknya kamu lakukan?",
        A: {
          Text: "Bales marah juga — biar adil",
          Do: "jump Scene-12-A",
        },
        B: {
          Text: "Dengarkan dulu, tetap tenang, baru respon setelah dia selesai",
          Do: "jump Scene-12-Benar",
        },
        C: {
          Text: "Langsung pergi, nggak mau denger",
          Do: "jump Scene-12-C",
        },
      },
    },
  ],

  "Scene-12-A": [
    "show scene scene-12-a",
    "d Aku ngerti kenapa kamu mungkin pengen bales marah. Tapi itu jarang berhasil.",
    "d Waktu dua orang sama-sama marah, nggak ada yang dengar. Yang ada cuma siapa yang paling keras suaranya.",
    "d Dan biasanya, setelah marah reda, kedua pihak nyesel. Kata-kata yang keluar waktu emosi sering kali nggak bisa ditarik lagi.",
    "jump Scene-13",
  ],

  "Scene-12-Benar": [
    "play sound clap with volume 50",
    "show scene scene-12-benar",
    "d Mantap! Itu pilihan paling bijak. Walaupun susah banget, tetap tenang waktu orang lain marah itu skill yang sangat berharga.",
    "d Kamu nggak harus setuju dengan mereka. Tapi dengan mendengarkan dulu, kamu kasih ruang buat emosi mereka mereda.",
    "d Setelah mereka tenang, baru sampaikan perspektifmu. Hasilnya jauh lebih produktif daripada saling teriak.",
    "jump Scene-13",
  ],

  "Scene-12-C": [
    "show scene scene-12-c",
    "d Pergi memang kadang perlu — terutama kalau situasinya sudah sangat tidak aman. Tapi kalau memungkinkan, coba dengarkan dulu.",
    "d Kalau kamu langsung pergi, orang yang marah mungkin merasa makin nggak didengar. Dan masalahnya nggak selesai.",
    "d Tapi kalau kamu bilang: \"Aku mau dengerin kamu, tapi aku butuh waktu 10 menit buat tenang dulu,\" itu lebih baik daripada langsung kabur.",
    "jump Scene-13",
  ],

  "Scene-13": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-13",
    "d Ada satu lagi teknik yang aku pelajari: namanya DESC method untuk menyelesaikan konflik.",
    "d D = Describe: Jelaskan situasinya secara objektif. \"Kemarin, kamu minta ulang presentasiku tanpa penjelasan.\"",
    "d E = Express: Sampaikan perasaanmu. \"Aku merasa nggak dihargai.\"",
    "d S = Specify: Jelaskan apa yang kamu inginkan. \"Kalau ada yang perlu diperbaiki, bisa kita diskusikan bareng dulu?\"",
    "d C = Consequence: Jelaskan dampak positifnya. \"Supaya hasilnya lebih bagus dan kita tetap bisa kerja sama dengan baik.\"",
    "jump Scene-14",
  ],

  "Scene-14": [
    "show scene scene-14",
    "d Nah, {{player.name}}, sekarang aku mau nanya soal situasi yang sering terjadi.",
    {
      Choice: {
        Dialog: "Teman kamu tiba-tiba nggak mau ngomong sama kamu. Kamu nggak tahu alasannya. Apa yang kamu lakukan?",
        A: {
          Text: "Biarin aja, kalau mau ngomong pasti dia yang mulai",
          Do: "jump Scene-14-A",
        },
        B: {
          Text: "Tanya baik-baik: \"Aku merasa kita lagi jauh. Ada yang mau kamu ceritain?\"",
          Do: "jump Scene-14-Benar",
        },
        C: {
          Text: "Gosip ke teman lain: \"Lo tau nggak sih kenapa dia tiba-tiba gitu?\"",
          Do: "jump Scene-14-C",
        },
      },
    },
  ],

  "Scene-14-A": [
    "show scene scene-14-a",
    "d Menunggu memang terasa aman. Tapi kalau kamu peduli sama hubungan itu, kadang kamu yang harus mengambil langkah pertama.",
    "d Nggak harus langsung bahas masalahnya. Cukup tunjukkan kalau kamu ada dan peduli.",
    "d \"Hei, aku kangen ngobrol sama kamu. Ada waktu nggak?\" — sesederhana itu bisa jadi awal.",
    "jump Scene-15",
  ],

  "Scene-14-Benar": [
    "play sound clap with volume 50",
    "show scene scene-14-benar",
    "d Keren banget! Itu cara yang dewasa dan penuh empati.",
    "d Dengan menggunakan \"aku merasa\" bukan \"kamu kenapa sih\", kamu membuka ruang dialog tanpa menyalahkan.",
    "d Kadang orang butuh waktu untuk membuka diri. Tapi dengan menunjukkan kamu peduli, kamu udah bikin langkah besar.",
    "jump Scene-15",
  ],

  "Scene-14-C": [
    "show scene scene-14-c",
    "d Hmm, menggosip itu nggak akan menyelesaikan masalah. Justru bisa bikin situasi makin rumit.",
    "d Kalau ada masalah dengan seseorang, bicaralah langsung dengan orang itu. Bukan ke orang lain.",
    "d Gosip itu seperti api kecil yang bisa membakar jembatan. Sekali terbakar, susah dibangun ulang.",
    "jump Scene-15",
  ],

  "Scene-15": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-15",
    "d {{player.name}}, kamu udah belajar banyak hari ini. Aku mau rangkum beberapa tips penting:",
    "d Tips #1: Dengarkan untuk memahami, bukan untuk membalas.",
    "d Tips #2: Gunakan \"I feel\" statements untuk menyampaikan perasaan tanpa menyerang.",
    "d Tips #3: Tetap tenang saat orang lain marah. Jangan bales emosi dengan emosi.",
    "d Tips #4: Gunakan DESC method untuk menyelesaikan konflik secara terstruktur.",
    "d Tips #5: Jangan gosip. Kalau ada masalah, hadapi langsung dengan orangnya.",
    "jump Scene-16",
  ],

  "Scene-16": [
    "show scene scene-16",
    "d Dan satu hal lagi yang penting: konflik itu natural.",
    "d Dua orang yang berbeda pasti akan punya perbedaan pendapat. Itu bukan hal yang buruk.",
    "d Yang buruk itu kalau konflik diselesaikan dengan kekerasan, penghinaan, atau diabaikan sama sekali.",
    "d Konflik yang ditangani dengan baik justru bisa memperdalam pengertian dan memperkuat hubungan.",
    "jump Scene-17",
  ],

  "Scene-17": [
    "show scene scene-17",
    "d Soal Raka... setelah kita berbaikan, hubungan kita justru jadi lebih kuat dari sebelumnya.",
    "d Kita sekarang punya aturan: kalau ada masalah, langsung ngomong. Nggak boleh ngambek, nggak boleh nggosip.",
    "d Dan proyek kelompok kita? Dapat nilai A. Karena kita belajar kerja sama dengan menghargai perbedaan pendapat.",
    "jump Scene-18",
  ],

  "Scene-18": [
    "show scene scene-sit-right",
    "d {{player.name}}, terima kasih udah dengerin ceritaku!",
    "d Ingat: komunikasi yang baik itu skill. Bukan bakat. Semua orang bisa belajar, termasuk kamu.",
    "d Mulai dari hal kecil: dengerin temanmu dengan lebih baik hari ini. Coba gunakan \"I feel\" statement di situasi sulit.",
    "d Dan yang paling penting: jangan takut sama konflik. Konflik yang ditangani dengan baik bikin kita tumbuh.",
    "d Sampai ketemu di chapter selanjutnya! Semangat belajar komunikasinya!",
    "jump Loading-2",
  ],

  "Loading-2": [
    "play sound typewriter",
    "show scene loading-2",
    "Chapter 2 : Empathy in Action",
    "jump Scene-19",
  ],
};

// Make globally accessible for index.js merging
window.Chapter1 = Chapter1;

// Export for use in index.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Chapter1;
}
