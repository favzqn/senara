/**
 * Chapter 1: Siapa Pahlawan Kesehatan Mental?
 * 
 * Learning Outcomes:
 * - Memahami konsep literasi kesehatan mental
 * - Mengenali gejala gangguan mental
 * - Mengurangi stigma terhadap kesehatan mental
 * - Belajar teknik relaksasi dasar
 * 
 * Duration: ~45 minutes
 * Scenes: 38 scenes
 * Voices: 85-132 (48 voice lines)
 */

/* global monogatari, STORY_CONSTANTS, buildInputScene, buildSoundScene */

const Chapter1 = {
  /**
   * Scene-1: Introduction and player name input
   */
  "Scene-1": [
    "stop sound typewriter",
    "show scene scene-1",
    "play music chapter-1 with loop fade 20 volume 10",
    "v Oh, halo. Jadi, kamu adalah Calon Pahlawan Kesehatan Mental yang baru?",
    {
      Input: {
        Text: "Boleh tahu siapa nama mu?",
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
              name: "Pahlawan Kesehatan Mental",
              color: "#5bffb2",
            },
          });
          this.storage({
            player: {
              name: "Pahlawan Kesehatan Mental",
            },
          });
        },
        Warning: "Boleh masukkan namamu?",
      },
    },
    "v Hi {{player.name}}, Selamat datang di Pusat Pelatihan Pahlawan Kesehatan Mental.",
    "v Namaku Vani, aku yang akan menjadi instrukturmu sepanjang pelatihan hingga kamu resmi diangkat menjadi Pahlawan Kesehatan Mental.",
    "v Orang-orang bilang kamu adalah Calon Pahlawan Kesehatan Mental yang hebat. Kamu berani untuk belajar hal baru dan kamu berkomitmen meluangkan waktumu untuk belajar agar dapat membantu orang lain.",
    "v Tapi, aku tidak akan bersikap lembut padamu. Menjadi Pahlawan Kesehatan Mental adalah perkara serius. Mengapa? Lihatlah ke layar dan mari kutunjukkan mengapa.",
    "jump Scene-2",
  ],

  /**
   * Scene-2: First quiz - Mental health statistics
   */
  "Scene-2": [
    "stop music chapter-1",
    "play music music-2 with loop fade 20 volume 10",
    "v Aku ada sedikit tebak-tebakan.",
    "show scene scene-2",
    {
      Choice: {
        Dialog: "Coba tebak. Menurutmu, berapa persen (%) penduduk Indonesia dengan usia 15-24 tahun yang mengalami gangguan mental emosional?",
        A: {
          Text: "3%",
          Do: "jump Scene-2-Salah",
        },
        B: {
          Text: "5%",
          Do: "jump Scene-2-Salah",
        },
        C: {
          Text: "10%",
          Do: "jump Scene-2-Benar",
        },
      },
    },
  ],

  /**
   * Scene-2-Benar: Correct answer feedback
   */
  "Scene-2-Benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "v Hebat, tebakanmu benar. Masalah gangguan mental merupakan masalah yang umum terjadi dan perlu mendapatkan perhatian kita.",
    "jump Scene-3",
  ],

  /**
   * Scene-2-Salah: Wrong answer feedback
   */
  "Scene-2-Salah": [
    "play sound wrong with volume 50",
    "show scene scene-2-salah",
    "v Hmmm. Sepertinya kamu cukup meremehkan masalah gangguan mental pada remaja di Indonesia",
    "jump Scene-3",
  ],

  /**
   * Scene-3: Statistics explanation
   */
  "Scene-3": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-3",
    "v Menurut riset dari Kementerian Kesehatan pada tahun 2018, 10% atau 1 dari 10 pemuda berusia 15-24 tahun mengalami gangguan mental-emosional.",
    "jump Scene-4",
  ],

  /**
   * Scene-4: Types of mental disorders
   */
  "Scene-4": [
    "show scene scene-4",
    "v Ya, kita baru berbicara jenis gangguan mental-emosional. Masih ada jenis gangguan mental lain seperti gangguan perilaku, gangguan makan, psikosis, dan jenis-jenis gangguan mental lainnya yang akan kita bahas nanti.",
    "jump Scene-5",
  ],

  /**
   * Scene-5: Second quiz - Treatment statistics
   */
  "Scene-5": [
    "show scene scene-2",
    "v Aku ada tebak-tebakan lagi!",
    {
      Choice: {
        Dialog: "Coba tebak. Menurutmu, berapa persen (%) pemuda berusia 15-24 tahun dengan depresi yang mendapatkan penanganan profesional?",
        A: {
          Text: "100%",
          Do: "jump Scene-6-Salah",
        },
        B: {
          Text: "50%",
          Do: "jump Scene-6-Salah",
        },
        C: {
          Text: "5.2%",
          Do: "jump Scene-6-Benar",
        },
      },
    },
  ],

  /**
   * Scene-6-Benar: Correct answer
   */
  "Scene-6-Benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "v Wah tebakanmu benar!",
    "jump Scene-7",
  ],

  /**
   * Scene-6-Salah: Wrong answer
   */
  "Scene-6-Salah": [
    "play sound wrong with volume 50",
    "show scene scene-2-salah",
    "v Sayangnya tebakanmu tidak sesuai kenyataan.",
    "jump Scene-7",
  ],

  /**
   * Scene-7: Treatment gap explanation
   */
  "Scene-7": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-depression-treatment",
    "v Menurut riset dari Kementerian Kesehatan pada tahun 2018, hanya 5,2% atau sekitar 1 dari 20 pemuda berusia 15-24 tahun dengan depresi yang mendapatkan penanganan profesional seperti bantuan psikiater dan psikolog.",
    "jump Scene-8",
  ],

  /**
   * Scene-8: Why treatment gap exists
   */
  "Scene-8": [
    "show scene scene-4",
    "v Angka ini masih jauh dari harapan kita agar 100% pemuda yang mengalami gangguan mental mendapatkan bantuan profesional.",
    "jump Scene-9",
  ],

  /**
   * Scene-9: Barriers to treatment
   */
  "Scene-9": [
    "show scene scene-2",
    "v Mengapa Remaja dengan Gangguan Mental Tidak Mendapatkan Bantuan Profesional?",
    "jump Scene-10",
  ],

  /**
   * Scene-10: Barrier 1 - Lack of recognition
   */
  "Scene-10": [
    "show scene scene-7-1",
    "v Pertama, karena tidak dapat mengenali gejala gangguan mental",
    "jump Scene-11",
  ],

  /**
   * Scene-11: Barrier 2 - Lack of awareness
   */
  "Scene-11": [
    "show scene scene-7-2",
    "v Kedua, karena tidak mengetahui pentingnya bantuan profesional",
    "jump Scene-12",
  ],

  /**
   * Scene-12: Barrier 3 - Stigma
   */
  "Scene-12": [
    "show scene scene-7-3",
    "v Ketiga, karena stigma negatif terkait gangguan mental dan bantuan profesional",
    "jump Scene-13",
  ],

  /**
   * Scene-13: Why this matters
   */
  "Scene-13": [
    "show scene scene-4",
    "v Mengapa fenomena yang kita bahas sebelumnya itu mengkhawatirkan?",
    "jump Scene-14",
  ],

  /**
   * Scene-14: Physical vs mental health analogy
   */
  "Scene-14": [
    "show scene scene-physical-pain",
    "v Bayangkan jika seandainya kamu mengalami luka fisik karena terjatuh. Apa yang akan kamu lakukan?",
    "jump Scene-15",
  ],

  /**
   * Scene-15: Physical treatment
   */
  "Scene-15": [
    "show scene scene-physical-treatment",
    "v Mungkin kamu akan mencoba memberikan pengobatan ringan seperti plester luka.",
    "v Jika lukanya berat, mungkin kamu akan memeriksakan lukanya ke dokter untuk memastikan proses penyembuhan yang baik.",
    "jump Scene-16",
  ],

  /**
   * Scene-16: Mental health challenges
   */
  "Scene-16": [
    "show scene scene-depressed",
    "v Namun, bagaimana seandainya masalah yang kamu hadapi bukanlah luka fisik, melainkan masalah kesehatan mental?",
    "v Masalah yang membuatmu merasakan hal-hal negatif dalam waktu panjang, melakukan hal-hal di luar kewajaran secara terus-menerus, kesulitan untuk menjalani keseharian seperti bersekolah, atau bahkan membahayakan diri sendiri dan orang lain.",
    "jump Scene-17",
  ],

  /**
   * Scene-17: Need for mental health heroes
   */
  "Scene-17": [
    "show scene scene-consultation",
    "v Kita memerlukan orang-orang sepertimu yang ingin belajar dan membantu memperbaiki kondisi kesehatan mental dunia. Ya, kita membutuhkan para Pahlawan Kesehatan Mental.",
    "jump Scene-18",
  ],

  /**
   * Scene-18: Seriousness of the issue
   */
  "Scene-18": [
    "show scene scene-depressed",
    "v Ya, ini bukanlah masalah yang mudah. Aku sudah mengatakannya sejak awal. Ini masalah serius yang sayangnya sudah kita bahas juga bahwa hal ini sering kali terjadi pada remaja.",
    "v Oleh karena itu, kita perlu memberikan para remaja kemampuan, pengetahuan, dan sikap yang sesuai untuk menangani masalah ini",
    "jump Scene-19",
  ],

  /**
   * Scene-19: Our mission
   */
  "Scene-19": [
    "show scene scene-consultation",
    "v Kita ingin agar seluruh masalah kesehatan mental remaja dapat ditangani dengan tepat.",
    "jump Scene-20",
  ],

  /**
   * Scene-20: What is a mental health hero?
   */
  "Scene-20": [
    "show scene scene-hero",
    "v Siapa yang dimaksud dengan Pahlawan Kesehatan Mental? Mereka adalah para remaja yang memiliki literasi kesehatan mental.",
    "v Mereka memiliki pengetahuan yang baik mengenai kesehatan mental. Lalu, mereka juga memiliki keyakinan yang tepat masalah kesehatan mental.",
    "v Dengan pengetahuan dan keyakinan ini mereka dapat mengenali, mengatasi, dan mencegah masalah kesehatan mental.",
    "jump Scene-21",
  ],

  /**
   * Scene-21: Mental health literacy components
   */
  "Scene-21": [
    "show scene scene-mental-health-literacy",
    "v Baik. Jika pahlawan kesehatan mental adalah remaja yang memiliki literasi kesehatan mental, menurutmu dari daftar kemampuan ini,",
    "v Mana yang termasuk ke dalam literasi kesehatan mental?",
    "jump Scene-22",
  ],

  /**
   * Scene-22: All components are important
   */
  "Scene-22": [
    "show scene scene-mental-health-literacy-checked",
    "v Semuanya!",
    "jump Scene-23",
  ],

  /**
   * Scene-23: Six components of mental health literacy
   */
  "Scene-23": [
    "show scene scene-badge-main",
    "v Jika, kamu menyadarinya. 6 simbol di atas telah ditunjukkan sejak pertama kali kamu memulai petualangan. 6 simbol tersebut melambangkan komponen literasi kesehatan mental.",
    "v Menurut berbagai penelitian, keenam simbol ini memiliki banyak manfaat:",
    "jump Scene-24",
  ],

  /**
   * Scene-24: Benefit 1 - Recognition
   */
  "Scene-24": [
    "show scene scene-badge-explanation-1",
    "v Mulai dari dikenalinya gangguan mental berdasarkan gejala yang berkembang",
    "jump Scene-25",
  ],

  /**
   * Scene-25: Benefit 2 - Reduced stigma
   */
  "Scene-25": [
    "show scene scene-badge-explanation-2",
    "v Mengurangi stigma yang seseorang miliki mengenai gangguan mental",
    "jump Scene-26",
  ],

  /**
   * Scene-26: Benefit 3 - Professional help
   */
  "Scene-26": [
    "show scene scene-badge-explanation-3",
    "v Membuat seseorang merekomendasikan bantuan profesional ketika diperlukan",
    "jump Scene-27",
  ],

  /**
   * Scene-27: Benefit 4 - Community health
   */
  "Scene-27": [
    "show scene scene-badge-explanation-4",
    "v Dan kesehatan mental komunitas yang menjadi semakin baik karena mampu mencegah masalah kesehatan mental dan memastikan bantuan profesional didapatkan ketika diperlukan.",
    "jump Scene-28",
  ],

  /**
   * Scene-28: Why they are heroes
   */
  "Scene-28": [
    "show scene scene-badge-main",
    "v Inilah mengapa para remaja dengan literasi kesehatan disebut Pahlawan Kesehatan Mental.",
    "v Mereka tidak hanya dapat menangani masalah kesehatan mentalnya sendiri dengan baik, namun juga membantu orang-orang di sekitarnya.",
    "jump Scene-29",
  ],

  /**
   * Scene-29: Your training journey
   */
  "Scene-29": [
    "show scene scene-1",
    "v Apakah kamu termasuk ke dalam Pahlawan Kesehatan Mental? Aku belum dapat memastikannya.",
    "v Kamu perlu menjalani 4 rangkaian pelatihan literasi kesehatan mental terlebih dahulu. Masih ada 4 chapter dalam petualanganmu.",
    "jump Scene-30",
  ],

  /**
   * Scene-30: Badge system
   */
  "Scene-30": [
    "show scene scene-badge-person",
    "v Dalam tiap bagian petualangan, kamu akan mendapatkan lencana yang menandakan kamu sudah melewati pelatihan untuk 6 komponen literasi kesehatan mental yang telah kita bahas sebelumnya.",
    "jump Scene-31",
  ],

  /**
   * Scene-31: Collecting badges
   */
  "Scene-31": [
    "show scene scene-badge-list-person",
    "v Jika kamu sudah dapat mengumpulkan ke-6 lencana, maka kamu berhak untuk mengikuti tes Pahlawan Kesehatan Mental untuk menguji literasi kesehatan mentalmu.",
    "jump Scene-32",
  ],

  /**
   * Scene-32: Badge collection (repeated for emphasis)
   */
  "Scene-32": [
    "show scene scene-badge-book",
    "v Jika kamu sudah dapat mengumpulkan ke-6 lencana, maka kamu berhak untuk mengikuti tes Pahlawan Kesehatan Mental untuk menguji literasi kesehatan mentalmu.",
    "jump Scene-33",
  ],

  /**
   * Scene-33: Final certification
   */
  "Scene-33": [
    "show scene scene-badge-list-book",
    "v Jika kamu dapat mengikuti tes tersebut dengan baik, maka kamu dapat resmi menjadi Pahlawan Kesehatan Mental.",
    "jump Scene-34",
  ],

  /**
   * Scene-34: Understanding the journey
   */
  "Scene-34": [
    "show scene scene-2",
    "v Sampai di sini, apakah kamu sudah memahami apa yang perlu kamu lakukan untuk dapat menjadi Pahlawan Kesehatan Mental?",
    "v Jika ada hal yang ingin kamu tanyakan, setelah ini silakan kembali ke halaman awal dan klik \"Bantuan Penggunaan\" untuk bertanya padaku.",
    "jump Scene-35",
  ],

  /**
   * Scene-35: Relaxation techniques introduction
   */
  "Scene-35": [
    "show scene scene-1",
    "v Oh, sebelum melanjutkan proses latihanmu sebagai Calon Pahlawan Kesehatan Mental, aku ingin memberikanmu sedikit bekal untuk membantumu siap menghadapi berbagai tantangan yang ada.",
    "v Sepanjang proses latihanmu untuk menjadi Pahlawan Kesehatan Mental, tentunya akan ada banyak tantangan yang kamu hadapi.",
    "v Mungkin tidak hanya tantangan dari proses latihan, tapi juga faktor lainnya seperti rasa lelah setelah melakukan aktivitas lain.",
    "v Oleh karena itu, aku akan memberikanmu 2 teknik yang telah terbukti oleh banyak penelitian untuk bisa membuat fisik dan mentalmu rileks dan siap menghadapi tantangan baru.",
    "jump Scene-36",
  ],

  /**
   * Scene-36: Box breathing technique
   */
  "Scene-36": [
    "show scene scene-box-breathing",
    "v Teknik relaksasi yang pertama adalah Box Breathing. Teknik ini sangat efektif hingga digunakan oleh tantara khusus Amerika Serikat, Navy SEAL untuk dapat tenang dan fokus sebelum dan sesudah pertempuran yang intens.",
    "v Cara melakukannya sangat sederhana. Siapkan dirimu untuk fokus. Jika memungkinkan, lakukanlah dengan duduk dan sambil memejamkan mata. Jika tidak bisa, fokuskan saja pada pernapasanmu. Baik, kita praktikkan tekniknya ya. Bersiaplah!.",
    "v Ya sesederhana itu caranya, lakukan beberapa kali hingga kamu merasa rileks tiap akan menghadapi tantangan.",
    "v Tidak hanya saat berlatih menjadi Pahlawan Kesehatan Mental, namun juga untuk keperluan lain seperti saat akan menghadapi ujian.",
    "v Setelah ini, lakukan sekali lagi ya agar kamu hafal tekniknya!",
    "jump Scene-37",
  ],

  /**
   * Scene-37: Progressive muscle relaxation
   */
  "Scene-37": [
    "show scene scene-progressive-muscle",
    "v Teknik yang kedua Bernama Progressive Muscle Relaxation dan lebih mudah lagi untuk dilakukan. Kita langsung praktikkan ya! Oke, usahakan kamu berada di tempat yang tenang. Sekarang, fokuskan perhatian pada kedua tanganmu.",
    "v Sama seperti Box Breathing, kamu dapat mencobanya kapanpun secara berulang ya. Sekarang kita coba sekali lagi dulu agar kamu mahir!",
    "jump Scene-38",
  ],

  /**
   * Scene-38: Chapter 1 conclusion
   */
  "Scene-38": [
    "show scene scene-sit-right",
    "v Sekian petualanganmu di CHAPTER 1: Siapa Pahlawan Kesehatan Mental! Maafkan jika aku tadi sedikit terlalu tegas ya. Aku hanya ingin proses pelatihanmu untuk menjadi Pahlawan Kesehatan Mental berlangsung dengan maksimal.",
    "v Oh iya, kamu bisa juga menggabungkan 2 teknik relaksasi tadi ya. Aku pribadi biasanya melakukan Progressive Muscle Relaxation dahulu, lalu dilanjutkan dengan 2x melakukan Box Breathing.",
    "v Sekian sesi latihan kita kali ini. Terima kasih sudah berjuang dengan keras. Aku tidak sabar untuk bertemu kamu kembali dan melihatmu segera menjadi Pahlawan Kesehatan Mental.",
    "v Kamu boleh beristirahat dan bertemu denganku lagi nanti atau segera lanjut ke CHAPTER 2 setelah ini jika kamu masih memiliki waktu dan tenaga yang cukup.",
    "v Sampai jumpa, Calon Pahlawan Kesehatan Mental!",
    "jump Loading-2",
  ],

  /**
   * Loading-2: Chapter 2 loading screen
   */
  "Loading-2": [
    "play sound typewriter",
    "show scene loading-2",
    "Chapter 2 : Lawan Dari Pahlawan Kesehatan Mental",
    "jump Scene-39",
  ],
};

// Make globally accessible for index.js merging
window.Chapter1 = Chapter1;

// Export for use in index.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Chapter1;
}
