/**
 * Central Stories Database
 * Single source of truth for all story metadata
 * 
 * Story Object Structure:
 * - id: Unique identifier (used in URLs and file names)
 * - title: Display title
 * - description: Short description for cards
 * - longDescription: Detailed description for story page
 * - tags: Array of category tags
 * - age: Age rating (16+, 18+, All Ages)
 * - series: Series name for grouping
 * - featured: Whether to show on homepage
 * - thumbnail: Path to thumbnail image
 * - duration: Estimated play time in minutes
 * - chapters: Number of chapters
 * - difficulty: Story complexity (Beginner, Intermediate, Advanced)
 * - learningOutcomes: Array of what players will learn
 * - author: Story creator/writer
 * - releaseDate: ISO date string (YYYY-MM-DD)
 * - status: Publication status (published, draft, coming-soon)
 * - rating: Average user rating (0-5)
 * - plays: Total number of plays
 */

const allStoriesData = [
  {
    id: "pahlawan-kesehatan-mental",
    title: "Pahlawan Kesehatan Mental",
    description: "Temani Vani menghadapi tantangan emosional dan temukan kekuatan sejati dalam menjaga kesehatan mental.",
    longDescription: "Kesehatan mental bukan kelemahan—ini adalah kekuatan. Ikuti perjalanan Vani yang penuh tantangan emosional, dari kecemasan hingga depresi, sambil belajar mengenali tanda-tanda gangguan mental dan memahami kapan saatnya meminta bantuan. Melalui 5 chapter yang mendalam, Anda akan mengungkap mitos seputar kesehatan mental, mengurangi stigma, dan menguasai teknik relaksasi yang dapat langsung Anda praktikkan. Jadilah Pahlawan Kesehatan Mental—bukan hanya untuk diri sendiri, tetapi untuk orang-orang yang Anda cintai.",
    tags: ["Mental Health", "Emotional Skills", "Self-Care"],
    age: "13+",
    series: "Mental Health Series",
    featured: true,
    thumbnail: "/senara/assets/thumbnails/pahlawan-kesehatan-mental.png",
    duration: 45,
    chapters: 5,
    difficulty: "Intermediate",
    learningOutcomes: [
      "Memahami konsep literasi kesehatan mental",
      "Mengenali gejala gangguan mental",
      "Mengurangi stigma terhadap kesehatan mental",
      "Mengetahui kapan mencari bantuan profesional",
      "Belajar teknik relaksasi (Box Breathing, Progressive Muscle Relaxation)"
    ],
    author: "Senara Team",
    scriptBy: "Diceritain Team",
    collaboration: "In partnership with diceritain.id",
    releaseDate: "2024-01-15",
    status: "published",
    rating: 4.8,
    plays: 1250,
    voiceActed: true,
    hasChoices: true,
    hasAchievements: true
  },
  {
    id: "jika-maka-maka-jika-debug-hidupku",
    title: "Jika Maka, Maka Jika ~Debug Hidupku",
    description: "Pelajari dasar-dasar pemrograman: if-else, looping, variabel, dan debugging melalui cerita yang relatable.",
    longDescription: "Pelajari dasar-dasar pemrograman melalui dialog interaktif. Anda akan memahami if-else statement, looping, variabel, dan teknik debugging. Setiap konsep dijelaskan dengan contoh kehidupan sehari-hari dan diikuti dengan quiz interaktif untuk memperkuat pemahaman Anda.",
    tags: ["Technology", "Programming", "Logic", "Problem Solving"],
    age: "13+",
    series: "Technology Series",
    featured: true,
    isFeaturedComingSoon: false,
    thumbnail: "/senara/assets/thumbnails/coding-dan-kehidupan.png",
    duration: 30,
    chapters: 1,
    difficulty: "Beginner",
    learningOutcomes: [
      "Memahami konsep if-else statement dalam pemrograman",
      "Belajar tentang looping dan pengulangan",
      "Memahami penggunaan variabel dalam program",
      "Belajar teknik debugging dan problem solving",
      "Menerapkan logika pemrograman dalam kehidupan sehari-hari"
    ],
    author: "Senara Team",
    scriptBy: "Yani S",
    releaseDate: "2024-11-15",
    status: "coming-soon",
    rating: 4.9,
    plays: 0,
    voiceActed: true,
    hasChoices: true,
    hasAchievements: true
  },
//   {
//     id: "kesabaran-ramadhan",
//     title: "Kesabaran di Bulan Ramadhan",
//     description: "Pelajari pentingnya kesabaran dalam beribadah melalui cerita Fatima dan Pak Mamet.",
//     longDescription: "Dalam visual novel pendek ini, ikuti perjalanan Fatima yang menghadapi tantangan puasa di hari yang panas. Bersama Pak Mamet, pelajari bagaimana kesabaran adalah bagian dari iman dan bagaimana ujian adalah kesempatan untuk mendapatkan pahala dari Allah.",
//     tags: ["Islamic Values", "Patience", "Ramadan", "Moral Education"],
//     age: "8+",
//     series: "Islamic Values Series",
//     featured: true,
//     thumbnail: "/senara/assets/thumbnails/kesabaran-ramadhan.png",
//     duration: 15,
//     chapters: 1,
//     difficulty: "Beginner",
//     learningOutcomes: [
//       "Memahami pentingnya kesabaran dalam beribadah",
//       "Mengenali ujian sebagai bagian dari iman",
//       "Belajar strategi menghadapi tantangan puasa",
//       "Memahami konsep pahala dan niat"
//     ],
//     author: "Senara Team",
//     releaseDate: "2024-11-08",
//     status: "published",
//     rating: 5.0,
//     plays: 0,
//     voiceActed: false,
//     hasChoices: true,
//     hasAchievements: false
//   },
  {
    id: "batik-cahaya-majapahit",
    title: "Rahasia Batik Cahaya Majapahit",
    description: "Pelajari tentang warisan budaya batik Majapahit dan cara melestarikan tradisi lokal melalui teknologi modern.",
    longDescription: "Pelajari tentang warisan budaya Indonesia, khususnya batik Majapahit. Anda akan memahami pentingnya melestarikan tradisi lokal, bagaimana teknologi dapat mendukung pelestarian budaya, dan cara berkolaborasi dengan pengrajin lokal. Melalui cerita interaktif, Anda akan mengembangkan apresiasi terhadap keberagaman budaya.",
    tags: ["Sejarah", "Budaya", "Kreativitas"],
    age: "10+",
    series: "Heritage Quest",
    featured: true,
    isFeaturedComingSoon: true,
    thumbnail: "/senara/assets/thumbnails/batik-cahaya-majapahit.png",
    duration: 45,
    chapters: 4,
    difficulty: "Beginner",
    learningOutcomes: [
      "Menghargai warisan budaya Indonesia",
      "Berpikir kreatif memecahkan teka-teki",
      "Kolaborasi lintas disiplin"
    ],
    author: "Senara Team",
    scriptBy: "Nadya Fajar",
    releaseDate: "2025-04-05",
    status: "coming-soon",
    rating: 0,
    plays: 0,
    voiceActed: false,
    hasChoices: true,
    hasAchievements: false
  },
  {
    id: "operasi-hati-sehat",
    title: "Operasi Hati Sehat di SMA Angkasa",
    description: "Pelajari strategi kesehatan mental dan coping untuk menghadapi tekanan akademik dan kompetisi.",
    longDescription: "Pelajari tentang kesehatan mental remaja dan strategi coping yang efektif. Anda akan memahami cara mengelola tekanan akademik, pentingnya work-life balance, dan teknik-teknik mindfulness sederhana. Melalui skenario interaktif, Anda akan belajar berkomunikasi dengan empati dan mendukung teman-teman Anda.",
    tags: ["Mental Health", "Sekolah", "Coaching"],
    age: "13+",
    series: "Mindful Teens",
    featured: false,
    thumbnail: "/senara/assets/thumbnails/operasi-hati-sehat.png",
    duration: 30,
    chapters: 3,
    difficulty: "Beginner",
    learningOutcomes: [
      "Literasi kesehatan mental remaja",
      "Komunikasi empatik",
      "Strategi coping sederhana"
    ],
    author: "Senara Team",
    scriptBy: "Putri Laras",
    releaseDate: "2025-04-20",
    status: "coming-soon",
    rating: 0,
    plays: 0,
    voiceActed: false,
    hasChoices: true,
    hasAchievements: false
  },
  {
    id: "misi-nol-sampah",
    title: "Misi Nol Sampah Pasar Beringharjo",
    description: "Pelajari tentang ekonomi sirkular, negosiasi komunitas, dan cara mengukur dampak lingkungan dari inisiatif sosial.",
    longDescription: "Pelajari tentang ekonomi sirkular dan sustainability. Anda akan memahami dasar-dasar pengelolaan sampah, cara bernegosiasi dengan komunitas, dan bagaimana mengukur dampak lingkungan dari sebuah proyek. Melalui studi kasus interaktif, Anda akan mengembangkan keterampilan problem-solving untuk tantangan lingkungan.",
    tags: ["Sustainability", "Social Impact", "Entrepreneurship"],
    age: "15+",
    series: "Civic Innovators",
    featured: false,
    thumbnail: "/senara/assets/thumbnails/misi-nol-sampah.png",
    duration: 50,
    chapters: 4,
    difficulty: "Intermediate",
    learningOutcomes: [
      "Dasar ekonomi sirkular",
      "Negosiasi dengan komunitas",
      "Mengukur dampak lingkungan"
    ],
    author: "Senara Team",
    scriptBy: "Rio Mahendra",
    releaseDate: "2025-05-15",
    status: "coming-soon",
    rating: 0,
    plays: 0,
    voiceActed: false,
    hasChoices: true,
    hasAchievements: false
  },
  {
    id: "kode-angkasa-lestari",
    title: "Kode Rahasia Angkasa Lestari",
    description: "Pelajari dasar keamanan siber, etika teknologi, dan cara membuat keputusan yang bertanggung jawab dalam menghadapi dilema teknologi.",
    longDescription: "Pelajari tentang keamanan siber dan etika dalam pengembangan teknologi. Anda akan memahami kerentanan keamanan umum, pentingnya responsible disclosure, dan bagaimana membuat keputusan etis dalam situasi yang kompleks. Melalui skenario dilemma interaktif, Anda akan mengembangkan critical thinking tentang dampak teknologi.",
    tags: ["Technology", "Cybersecurity", "Ethics"],
    age: "15+",
    series: "Digital Ethics",
    featured: true,
    isFeaturedComingSoon: true,
    thumbnail: "/senara/assets/thumbnails/kode-angkasa-lestari.png",
    duration: 40,
    chapters: 3,
    difficulty: "Advanced",
    learningOutcomes: [
      "Kesadaran keamanan siber dasar",
      "Etika pengembangan perangkat lunak",
      "Manajemen risiko teknologi"
    ],
    author: "Senara Team",
    scriptBy: "Farhan Yusuf",
    releaseDate: "2025-05-30",
    status: "coming-soon",
    rating: 0,
    plays: 0,
    voiceActed: false,
    hasChoices: true,
    hasAchievements: false
  },
  {
    id: "festival-rasa-maluku",
    title: "Festival Rasa dari Maluku",
    description: "Pelajari tentang keberagaman kuliner Indonesia, cara memfasilitasi dialog komunitas, dan merancang event yang inklusif.",
    longDescription: "Pelajari tentang keberagaman budaya melalui perspektif kuliner. Anda akan memahami pentingnya menghargai tradisi lokal, cara berkomunikasi lintas komunitas, dan bagaimana merancang acara yang inklusif. Melalui studi kasus interaktif, Anda akan mengembangkan keterampilan kepemimpinan budaya dan community engagement.",
    tags: ["Budaya", "Kuliner", "Community"],
    age: "10+",
    series: "Culture Lab",
    featured: false,
    thumbnail: "/senara/assets/thumbnails/festival-rasa-maluku.png",
    duration: 30,
    chapters: 2,
    difficulty: "Beginner",
    learningOutcomes: [
      "Mengapresiasi keberagaman kuliner",
      "Memfasilitasi dialog komunitas",
      "Merancang event skala lokal"
    ],
    author: "Senara Team",
    scriptBy: "Lidya Ayal",
    releaseDate: "2025-06-10",
    status: "coming-soon",
    rating: 0,
    plays: 0,
    voiceActed: false,
    hasChoices: true,
    hasAchievements: false
  },
  {
    id: "jejak-nadi-kota-hujan",
    title: "Jejak Nadi Kota Hujan",
    description: "Pelajari tentang urban planning adaptif iklim, analisis data lingkungan, dan cara melibatkan komunitas dalam desain kota.",
    longDescription: "Pelajari tentang urban planning dan climate adaptation. Anda akan memahami dasar-dasar hidrologi, cara membaca data lingkungan, dan pentingnya melibatkan warga dalam proses desain. Melalui studi kasus interaktif, Anda akan mengembangkan pemikiran holistik tentang solusi yang seimbang antara teknis dan kemanusiaan.",
    tags: ["Urban Planning", "Climate", "Data Literacy"],
    age: "15+",
    series: "Future Cities",
    featured: false,
    thumbnail: "/senara/assets/thumbnails/jejak-nadi-kota-hujan.png",
    duration: 55,
    chapters: 4,
    difficulty: "Intermediate",
    learningOutcomes: [
      "Merancang kota adaptif iklim",
      "Membaca data lingkungan",
      "Melibatkan warga dalam desain"
    ],
    author: "Senara Team",
    scriptBy: "Bayu Prakoso",
    releaseDate: "2025-06-25",
    status: "coming-soon",
    rating: 0,
    plays: 0,
    voiceActed: false,
    hasChoices: true,
    hasAchievements: false
  },
  {
    id: "startup-satwa-penjaga-hutan",
    title: "Startup Satwa Penjaga Hutan",
    description: "Pelajari tentang konservasi lingkungan, kolaborasi dengan komunitas adat, dan merancang model bisnis yang berdampak sosial.",
    longDescription: "Pelajari tentang konservasi dan entrepreneurship sosial. Anda akan memahami tantangan konservasi modern, pentingnya mendengarkan suara komunitas lokal, dan cara merancang bisnis yang berkelanjutan dan berdampak. Melalui studi kasus interaktif, Anda akan mengembangkan pemikiran tentang teknologi yang memberdayakan, bukan mengontrol.",
    tags: ["Conservation", "Technology", "Entrepreneurship"],
    age: "15+",
    series: "Planet Guardians",
    featured: true,
    thumbnail: "/senara/assets/thumbnails/startup-satwa-penjaga-hutan.png",
    duration: 60,
    chapters: 4,
    difficulty: "Advanced",
    learningOutcomes: [
      "Memahami tantangan konservasi",
      "Mengelola kolaborasi dengan komunitas adat",
      "Merancang model bisnis berdampak"
    ],
    author: "Senara Team",
    scriptBy: "Gibran Noor",
    releaseDate: "2025-07-05",
    status: "coming-soon",
    rating: 0,
    plays: 0,
    voiceActed: false,
    hasChoices: true,
    hasAchievements: false
  },
  {
    id: "panggung-cahaya-pesantren",
    title: "Panggung Cahaya Pesantren Digital",
    description: "Pelajari tentang literasi media, cara mengenali dan melawan misinformasi, serta menghasilkan konten edukatif yang bertanggung jawab.",
    longDescription: "Pelajari tentang literasi media dan produksi konten yang bertanggung jawab. Anda akan memahami cara mengenali hoaks dan misinformasi, prinsip-prinsip fact-checking, dan bagaimana menghasilkan konten yang akurat dan menarik. Melalui workshop interaktif, Anda akan mengembangkan keterampilan komunikasi lintas komunitas dan tanggung jawab digital.",
    tags: ["Media Literacy", "Community", "Storytelling"],
    age: "13+",
    series: "Digital Citizenship",
    featured: false,
    thumbnail: "/senara/assets/thumbnails/panggung-cahaya-pesantren.png",
    duration: 35,
    chapters: 3,
    difficulty: "Beginner",
    learningOutcomes: [
      "Mengenali hoaks dan misinformasi",
      "Menghasilkan konten edukatif",
      "Berkomunikasi lintas komunitas"
    ],
    author: "Senara Team",
    scriptBy: "Salsabila Umar",
    releaseDate: "2025-07-20",
    status: "coming-soon",
    rating: 0,
    plays: 0,
    voiceActed: false,
    hasChoices: true,
    hasAchievements: false
  }
];

/**
 * Helper function to get story by ID
 * @param {string} id - Story ID
 * @returns {Object|null} Story object or null if not found
 */
function getStoryById(id) {
  return allStoriesData.find(story => story.id === id) || null;
}

/**
 * Helper function to get featured stories
 * @returns {Array} Array of featured stories
 */
function getFeaturedStories() {
  return allStoriesData.filter(story => story.featured);
}

/**
 * Helper function to get stories by status
 * @param {string} status - Publication status
 * @returns {Array} Array of stories with matching status
 */
function getStoriesByStatus(status) {
  return allStoriesData.filter(story => story.status === status);
}

/**
 * Helper function to get stories by difficulty
 * @param {string} difficulty - Difficulty level
 * @returns {Array} Array of stories with matching difficulty
 */
function getStoriesByDifficulty(difficulty) {
  return allStoriesData.filter(story => story.difficulty === difficulty);
}

/**
 * Helper function to sort stories by rating
 * @returns {Array} Stories sorted by rating (highest first)
 */
function getStoriesSortedByRating() {
  return [...allStoriesData].sort((a, b) => b.rating - a.rating);
}

/**
 * Helper function to sort stories by plays
 * @returns {Array} Stories sorted by play count (highest first)
 */
function getStoriesSortedByPopularity() {
  return [...allStoriesData].sort((a, b) => b.plays - a.plays);
}
