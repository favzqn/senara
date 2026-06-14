/**
 * Chapter 3: Strategi Pertolongan Mandiri
 * 
 * Learning Outcomes:
 * - Belajar strategi coping yang sehat
 * - Memahami teknik manajemen stres
 * - Mengembangkan resiliensi
 * 
 * Duration: ~45 minutes
 * Status: Placeholder - extract from original file when ready
 */

/* global monogatari */

const Chapter3 = {
  "Scene-98": [
    "stop sound typewriter",
    "show scene scene-1",
    "play voice chap3-2",
    "v Halo, Calon Pahlawan Kesehatan Mental! Aku bangga sekali padamu karena sudah berlatih sampai sejauh ini. ",
    "stop voice chap3-2",
    "play voice chap3-3",
    "v Di sesi latihan kita yang sebelumnya kita sudah membahas lawan-lawan dari Pahlawan Kesehatan Mental. ",
    "stop voice chap3-3",
    "play voice chap3-4",
    "v Menurutmu, apakah masalah-masalah tersebut terdengar serius? Aku harap jawabanmu adalah “Ya” karena di sesi latihan kali ini aku ingin kamu juga serius berlatih untuk melakukan teknik-teknik yang dapat membantu menjaga kesehatan mental!",
    "stop voice chap3-4",
    "jump Scene-99",
  ],

  "Scene-99": [
    "show scene scene-2",
    "play voice chap3-5",
    "v Sebelum kita mulai latihan, aku ingin tahu apakah kamu setuju dengan pendapat bahwa dunia remaja itu hanya penuh dengan kebahagiaan tanpa ada sedikitpun stress atau rasa tertekan? ",
    "stop voice chap3-5",
    {
      Choice: {
        Dialog:
          "Dunia remaja itu hanya penuh dengan kebahagiaan tanpa ada sedikitpun stress atau rasa tertekan ",
        "Saya setuju dengan pendapat di bawah": {
          Text: "Saya setuju dengan pendapat di bawah",
          Do: "jump Scene-100-salah",
        },
        "Saya tidak setuju dengan pendapat di bawah": {
          Text: "Saya tidak setuju dengan pendapat di bawah",
          Do: "jump Scene-100-benar",
        },
      },
    },
  ],

  "Scene-100-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "play voice chap3-7",
    "v Ya benar sekali!",
    "stop voice chap3-7",
    "jump Scene-101",
  ],

  "Scene-100-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "play voice chap3-6",
    "v Wah, sayang sekali pandanganmu kurang tepat hufttt.",
    "stop voice chap3-6",
    "jump Scene-101",
  ],

  "Scene-101": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-4",
    "play voice chap3-8",
    "v Merasa stres atau tertekan itu wajar karena akan selalu ada cobaan atau tantangan dalam hidup ini. Coba kamu bayangkan jika kejadian berikut terjadi padamu atau mungkin kamu pernah mengalaminya, coba ingat-ingat…",
    "stop voice chap3-8",
    "jump Scene-102",
  ],

  "Scene-102": [
    "show scene scene-stress",
    "play voice chap3-9",
    "v Saat di mana kamu kesulitan mengerjakan tugas atau mempersiapkan ujian…",
    "stop voice chap3-9",
    "jump Scene-103",
  ],

  "Scene-103": [
    "show scene scene-stress-2",
    "play voice chap3-10",
    "v lalu tiba-tiba kamu bertengkar dengan Saudara atau temanmu,",
    "stop voice chap3-10",
    "jump Scene-104",
  ],

  "Scene-104": [
    "show scene scene-stress-3",
    "play voice chap3-11",
    "v ditambah lagi saat akan mengerjakan tugas dan ujian yang sulit kamu mengalami kendala seperti Internet yang buruk atau listrik yang tidak menyala…",
    "stop voice chap3-11",
    "jump Scene-105",
  ],

  "Scene-105": [
    "show scene scene-stress-4",
    "play voice chap3-12",
    "v … akhirnya kamu pun merasa bahwa di dunia ini tidak ada yang suka kepadamu.",
    "stop voice chap3-12",
    "jump Scene-106",
  ],

  "Scene-106": [
    "show scene scene-2",
    "play voice chap3-13",
    "v Setelah ini kita akan banyak membahas bagaimana cara mengelola stres dengan baik hingga memanfaatkannya untuk membuat mental kita menjadi lebih kuat! Ini sangat penting karena stres adalah sesuatu yang tidak akan pernah lepas dari keseharian kita. ",
    "stop voice chap3-13",
    "play voice chap3-14",
    "v Tidak menutup kemungkinan juga bahwa kamu saat ini sedang mengalami stres, mungkin cerita tadi membuatmu teringat akan suatu pengalaman yang buruk. Jika kamu merasa tertekan, setelah ini aku akan menyediakan teknik relaksasi yang sudah sering kita gunakan. Silakan gunakan hingga stresmu mereda ya!",
    "stop voice chap3-14",
    "jump Scene-107",
  ],

  "Scene-107": [
    "show scene scene-box-breathing",
    "play voice 88",
    "v Tarik nafasmu selama 4 detik.",
    "stop voice 88",
    "play voice 89",
    "v Tahan nafasmu selama 4 detik.",
    "stop voice 89",
    "play voice 90",
    "v Hembuskan nafasmu selama 4 detik.",
    "stop voice 90",
    "play voice 91",
    "v Tahan kembali nafasmu selama 4 detik.",
    "stop voice 91",
    "jump Scene-108",
  ],

  "Scene-108": [
    "show scene scene-progressive-muscle",
    "play voice 92",
    "v Tarik nafas, lalu kepalkan kedua tanganmu selama 7 sampai 10 detik. Sekuat-kuatnya hingga bergetar, namun tidak sakit.",
    "stop voice 92",
    "play voice 93",
    "v Hembuskan nafasmu dan fokuslah pada sensasi rileks yang perlahan muncul dari kedua tangan sekitar 10 hingga 20 detik.",
    "stop voice 93",
    "jump Scene-109",
  ],

  "Scene-109": [
    "show scene scene-ask-small",
    "play voice chap3-21",
    "v Sebelumnya, apa itu stres …?",
    "stop voice chap3-21",
    "jump Scene-110",
  ],

  "Scene-110": [
    "show scene scene-stress-definition",
    "play voice chap3-22",
    "v Stres adalah reaksi kognitif (pikiran), fisik, emosi, atau perilaku yang muncul akibat dari adanya stressor berupa tantangan atau ancaman.",
    "stop voice chap3-22",
    "play voice chap3-23",
    "v Stres atau perasaan tertekan muncul karena kita meyakini bahwa ada tantangan yang perlu kita hadapi atau yang disebut juga dengan stressor.",
    "stop voice chap3-23",
    "play voice chap3-24",
    "v Ada banyak sekali bentuk stressor yang sudah kita bahas sebelumnya, mulai dari tugas, masalah dengan teman, hingga lingkungan yang tidak mendukung.",
    "stop voice chap3-24",
    "jump Scene-111",
  ],

  "Scene-111": [
    "show scene scene-2",
    "play voice chap3-25",
    "v Namun, apakah stres selalu memiliki dampak yang buruk? Coba tebak! ",
    "stop voice chap3-25",
    {
      Choice: {
        Dialog: "Stres hanya memiliki dampak buruk",
        "Pernyataan di bawah benar": {
          Text: "Pernyataan di bawah benar",
          Do: "jump Scene-112-salah",
        },
        "Pernyataan di bawah salah": {
          Text: "Pernyataan di bawah salah",
          Do: "jump Scene-112-benar",
        },
      },
    },
  ],

  "Scene-112-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "play voice chap3-27",
    "v Ya, tebakan yang baik! Kamu benar-benar memahami diskusi kita sejak sesi pertama. Stres tidaklah selalu berdampak buruk.",
    "stop voice chap3-27",
    "jump Scene-113",
  ],

  "Scene-112-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "play voice chap3-26",
    "v Hmm, tebakanmu kurang tepat! Di sesi latihan sebelumnya kita sudah beberapa kali membahas bahwa perasaan negatif dan stres tidak selalu berdampak buruk.",
    "stop voice chap3-26",
    "jump Scene-113",
  ],

  "Scene-113": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-stress-level",
    "play voice chap3-28",
    "v Ingat bahwa stres muncul karena adanya perasaan tertantang dan perasaan ini dapat membantu kita mengetahui kapan kita berusaha lebih keras!",
    "stop voice chap3-28",
    "play voice chap3-29",
    "v Bayangkan seandainya kamu besok akan menghadapi ujian yang sangat sulit, jika kamu merasa tidak bisa menghadapi ujiannya sama sekali atau kamu belajar dengan cara yang terlalu keras, mungkin fisik dan mentalmu akan merasa sangat kelelahan.",
    "stop voice chap3-29",
    "play voice chap3-30",
    "v Namun bagaimana seandainya kamu tidak mengetahui bahwa besok ada ujian yang sulit? Tentunya kamu tidak akan merasa tertantang dan tingkat stresmu akan sangat rendah. Lalu, kira-kira apakah kamu akan belajar dengan giat? Mungkin tidak ya..",
    "stop voice chap3-30",
    "play voice chap3-31",
    "v Berbeda jika kamu menyadari bahwa akan ada ujian yang sulit di esok hari, maka kamu mungkin akan lebih tertantang dan bersemangat untuk belajar. ",
    "stop voice chap3-31",
    "play voice chap3-32",
    "v Di level stres optimum inilah performa tubuh dan mentalmu akan menjadi optimal karena otakmu memberikan sinyal bahwa ada ‘tantangan’ yang perlu kita hadapi dengan baik. Itulah gunanya stres!",
    "stop voice chap3-32",
    "jump Scene-114",
  ],

  "Scene-114": [
    "show scene scene-ask-small",
    "play voice chap3-33",
    "v Kabar baiknya lagi! Tiap kali kamu berhasil mengatasi stres, kamu juga akan melatih kekuatan mentalmu untuk menjadi lebih kuat lho!",
    "stop voice chap3-33",
    "jump Scene-115",
  ],

  "Scene-115": [
    "show scene scene-stress-response",
    "play voice chap3-34",
    "v Pada kasus stres karena ujian tadi, karena kamu merasa ujiannya sulit, maka kamu belajar dengan giat. Hasilnya, kamu belajar kemampuan baru seperti strategi belajar yang baik untuk menghadapi ujian. ",
    "stop voice chap3-34",
    "play voice chap3-35",
    "v Hasilnya, ketika kamu akan menghadapi ujian yang sulit lagi, kamu jadi tahu apa yang perlu kamu lakukan! Sebagai contoh, mungkin karena kamu merasa materi Matematika di buku tidak cukup, kamu mencari tutor atau video belajar di Internet, lalu kamu merasa bahwa itu adalah strategi yang tepat. ",
    "stop voice chap3-35",
    "play voice chap3-36",
    "v Di masa depan, kamu sudah tahu apa yang kamu perlu lakukan untuk menghadapi ujian matematika lagi!",
    "stop voice chap3-36",
    "jump Scene-116",
  ],

  "Scene-116": [
    "show scene scene-stress-response-2",
    "play voice chap3-37",
    "v Sebaliknya, jika kamu merasa bahwa stres harus dihindari, kamu mungkin tidak akan berusaha untuk belajar dengan lebih giat. Akibatnya, kamu kehilangan kesempatan untuk belajar kemampuan baru.",
    "stop voice chap3-37",
    "play voice chap3-38",
    "v Dengan terus berani menghadapi tantangan stres, kamu akan membangun kekuatan mental Bernama “resiliensi” atau kelentingan, yaitu kemampuan untuk bangkit dari tekanan.",
    "stop voice chap3-38",
    "jump Scene-117",
  ],

  "Scene-117": [
    "show scene scene-stress-response-3",
    "play voice chap3-39",
    "v Ibaratnya, kamu bisa menjadi karet gelang yang mendapatkan tekanan dan tarikan dari sana-sini masih bisa kembali kuat dan bahkan menjadi lebih besar! What doesn’t kill you, makes you stronger! that’s resilience looks alike!",
    "stop voice chap3-39",
    "jump Scene-118",
  ],

  "Scene-118": [
    "show scene scene-stress-type",
    "play voice chap3-40",
    "v Untuk mengetahui cara mengelola stress yang baik, kamu perlu tahu dulu apa saja stressor atau sumber-sumber dari stress. Secara umum terdapat 4 sumber stress yang perlu kamu perhatikan, yaitu stress akademik, stress lingkungan, stress interpersonal, dan stress intrapersonal.",
    "stop voice chap3-40",
    "play voice chap3-41",
    "v Keempat jenis stress ini sudah kita bahas di awal sesi latihan. Setelah ini kita tebak-tebakan terkait sumber-sumber stress ya!",
    "stop voice chap3-41",
    "jump Scene-120",
  ],

  // Skip this scene

  //   "Scene-119": [
  //     "show scene scene-stress-4",
  //     "play voice chap3-42",
  //     "v Di awal cerita kita sudah membahas stress yang berasal dari tugas dan ujian yang sulit. Kira-kira ini jenis stress apa ya?",
  //     "jump Scene-120",
  //   ],

  "Scene-120": [
    "show scene scene-2",
    "play voice chap3-42",
    "v Di awal cerita kita sudah membahas stress yang berasal dari tugas dan ujian yang sulit. Kira-kira ini jenis stress apa ya?",
    "stop voice chap3-42",
    {
      Choice: {
        Dialog:
          "Stres karena tugas dan ujian yang sulit merupakan jenis stres yang bersumber dari …",
        "Stres Akademik": {
          Text: "Stres Akademik",
          Do: "jump Scene-121-benar",
        },
        "Stres Intrapersonal": {
          Text: "Stres Intrapersonal",
          Do: "jump Scene-121-salah",
        },
        "Stres Interpersonal": {
          Text: "Stres Interpersonal",
          Do: "jump Scene-121-salah",
        },
        "Stres Lingkungan": {
          Text: "Stres Lingkungan",
          Do: "jump Scene-121-salah",
        },
      },
    },
  ],

  "Scene-121-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "play voice chap3-44",
    "v Ya benar!",
    "stop voice chap3-44",
    "jump Scene-122",
  ],

  "Scene-121-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "play voice chap3-43",
    "v Wah, jawabanmu kurang tepat.",
    "stop voice chap3-43",
    "jump Scene-122",
  ],

  "Scene-122": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-stress-akademik",
    "play voice chap3-45",
    "v Stres akademik merupakan jenis stres yang berkaitan dengan kegiatan belajar seperti materi belajar yang sulit, tugas yang sangat banyak, dan nilai yang buruk",
    "stop voice chap3-45",
    "jump Scene-123",
  ],

  "Scene-123": [
    "show scene scene-2",
    "play voice chap3-46",
    "v Seperti jatuh tertimpa tangga. Sudah lelah mengerjakan tugas, bertengkar dengan Saudara, listrik dan Internet juga mati!",
    "stop voice chap3-46",
    {
      Choice: {
        Dialog:
          "Stres karena bertengkar dengan Saudara merupakan jenis stres yang bersumber dari …",
        "Stres Akademik": {
          Text: "Stres Akademik",
          Do: "jump Scene-124-salah",
        },
        "Stres Intrapersonal": {
          Text: "Stres Intrapersonal",
          Do: "jump Scene-124-salah",
        },
        "Stres Interpersonal": {
          Text: "Stres Interpersonal",
          Do: "jump Scene-124-benar",
        },
        "Stres Lingkungan": {
          Text: "Stres Lingkungan",
          Do: "jump Scene-124-salah",
        },
      },
    },
  ],

  "Scene-124-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "play voice chap3-49",
    "v Tebakanmu benar! keren!",
    "stop voice chap3-49",
    "jump Scene-125",
  ],

  "Scene-124-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "play voice chap3-48",
    "v Wah, sayang sekali tebakanmu meleset.",
    "stop voice chap3-48",
    "jump Scene-125",
  ],

  "Scene-125": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-stress-interpersonal",
    "play voice chap3-50",
    "v Stres interpersonal merupakan jenis stres yang berkaitan dengan hubungan sosial seperti konflik atau masalah dengan teman dan keluarga.",
    "stop voice chap3-50",
    "jump Scene-126",
  ],

  "Scene-126": [
    "show scene scene-2",
    "play voice chap3-46",
    "v Seperti jatuh tertimpa tangga. Sudah lelah mengerjakan tugas, bertengkar dengan Saudara, listrik dan Internet juga mati!",
    "stop voice chap3-46",
    "play voice chap3-47",
    {
      Choice: {
        Dialog:
          "Stres karena listrik dan Internet yang mati saat akan mengerjakan tugas merupakan jenis stres yang bersumber dari...",
        "Stres Akademik": {
          Text: "Stres Akademik",
          Do: "jump Scene-127-salah",
        },
        "Stres Intrapersonal": {
          Text: "Stres Intrapersonal",
          Do: "jump Scene-127-salah",
        },
        "Stres Interpersonal": {
          Text: "Stres Interpersonal",
          Do: "jump Scene-127-salah",
        },
        "Stres Lingkungan": {
          Text: "Stres Lingkungan",
          Do: "jump Scene-127-benar",
        },
      },
    },
  ],

  "Scene-127-benar": [
    "stop voice chap3-47",
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "play voice chap3-52",
    "v Ya benar!",
    "stop voice chap3-52",
    "jump Scene-128",
  ],

  "Scene-127-salah": [
    "stop voice chap3-47",
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "play voice chap3-51",
    "v Wah, jawabanmu kurang tepat.",
    "stop voice chap3-51",
    "jump Scene-128",
  ],

  "Scene-128": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-stress-lingkungan",
    "play voice chap3-53",
    "v Stres lingkungan merupakan jenis stres yang berkaitan dengan dengan dengan lingkungan tempatmu beraktivitas seperti ruangan yang berantakan, fasilitas seperti Internet yang rusak, hingga keributan atau suhu ruangan yang membuat kesulitan untuk berkonsentrasi.",
    "stop voice chap3-53",
    "jump Scene-129",
  ],

  "Scene-129": [
    "show scene scene-2",
    "play voice chap3-54",
    "v Di awal cerita kita sudah membahas bagaimana pikiran-pikiran yang terlalu negatif seperti merasa tidak ada yang menyenangi kita dapat meningkatkan stress atau perasaan tertekan. ",
    "stop voice chap3-54",
    "play voice chap3-55",
    {
      Choice: {
        Dialog:
          "Stres karena memandang masalah dengan cara yang terlalu negatif merupakan jenis stres yang bersumber dari …",
        "Stres Akademik": {
          Text: "Stres Akademik",
          Do: "jump Scene-130-salah",
        },
        "Stres Intrapersonal": {
          Text: "Stres Intrapersonal",
          Do: "jump Scene-130-benar",
        },
        "Stres Interpersonal": {
          Text: "Stres Interpersonal",
          Do: "jump Scene-130-salah",
        },
        "Stres Lingkungan": {
          Text: "Stres Lingkungan",
          Do: "jump Scene-130-salah",
        },
      },
    },
  ],

  "Scene-130-benar": [
    "stop voice chap3-55",
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "play voice chap3-57",
    "v Yey! Tebakan yang baik hahaha.",
    "stop voice chap3-57",
    "jump Scene-131",
  ],

  "Scene-130-salah": [
    "stop voice chap3-55",
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "play voice chap3-56",
    "v Sayang sekali tebakanmu kurang tepat.",
    "stop voice chap3-56",
    "jump Scene-131",
  ],

  "Scene-131": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-stress-intrapersonal",
    "play voice chap3-58",
    "v Stres intrapersonal merupakan jenis stres yang berkaitan dengan proses di dalam diri kita seperti cara berpikir dan berperilaku. ",
    "stop voice chap3-58",
    "play voice chap3-59",
    "v Misalnya, terus-terusan memikirkan masalah yang tidak bisa kita kendalikan, terlalu menyalahkan diri sendiri, kurang berolahraga, dan tidak makan dengan sehat.",
    "stop voice chap3-59",
    "jump Scene-132",
  ],

  "Scene-132": [
    "show scene scene-stress-bucket",
    "play voice chap3-60",
    "v Sekarang kamu sudah mengetahui hal-hal yang dapat membuat remaja stress, saatnya latihan untuk mengelola stress dengan baik. Caranya mudah. Semudah menguras air di dalam ember! Maksudnya apa ya? Mari kita pelajari!",
    "stop voice chap3-60",
    "jump Scene-133",
  ],

  "Scene-133": [
    "show scene scene-stress-bucket-2",
    "play voice chap3-61",
    "v Bayangkan bahwa kapasitasmu untuk menghadapi stress itu sama dengan kapasitas ember untuk menampung air. Maka, kamu perlu mencegah agar air di dalam ember tidak tumpah. Dengan kata lain, kamu perlu menguras stress yang masuk agar tidak berlebihan.",
    "stop voice chap3-61",
    "play voice chap3-62",
    "v Idealnya kamu mengetahui “buffer zone” di mana kamu mulai kelalahan sehingga ketika stresnya sudah membuatmu tidak dapat beraktivitas dengan baik, kamu tahu bahwa kamu perlu mengendalikan stresnya!",
    "stop voice chap3-62",
    "jump Scene-134",
  ],

  "Scene-134": [
    "show scene scene-stress-bucket-3",
    "play voice chap3-63",
    "v Cara pertama untuk menguras stress adalah dengan emotion-focused coping, yaitu strategi untuk mengurangi emosi dan proses mental negatif. Misalnya, kamu sedang menghadapi materi belajar yang sangat sulit. Contoh dari emotion-focused coping adalah teknik relaksasi seperti box breathing dan progressive muscle relaxation yang biasa kita praktikkan sebelum latihan! ",
    "stop voice chap3-63",
    "play voice chap3-64",
    "v Contoh lainnya adalah beristirahat dengan cukup, mencari hiburan dan candaan, dan bercerita kepada teman terkait masalah yang kamu hadapi.",
    "stop voice chap3-64",
    "play voice chap3-65",
    "v Kamu dapat menggunakan emotion-focused coping ketika menghadapi masalah sulit untuk diatasi langsung. Misalnya, kamu sedang mempelajari materi yang sangat sulit hingga membuatmu merasa tertekan. Tidak ada cara singkat untuk mengatasi stress ini selain belajar dengan giat menggunakan cara belajar yang tepat. ",
    "stop voice chap3-65",
    "play voice chap3-66",
    "v Namun, agar cara belajarmu efektif, kamu perlu mengurangi stress yang kamu rasakan. Kamu dapat melakukan teknik relaksasi terlebih dahulu agar stressmu terkuras dan kamu dapat berpikir dengan jernih dan siap untuk belajar dengan giat!",
    "stop voice chap3-66",
    "jump Scene-135",
  ],

  "Scene-135": [
    "show scene scene-stress-bucket-4",
    "play voice chap3-67",
    "v Jika kamu perhatikan, posisi keran untuk mengeluarkan stress dengan emotion-focused coping itu tidak dapat menghabiskan air hingga 100% habis. Sebagai contoh, saat kesulitan menghadapi materi belajar yang sulit, melakukan teknik relaksasi dan mencari hiburan 100x pun tidak akan membuat materinya menjadi dapat dikuasai dengan instan.  ",
    "stop voice chap3-67",
    "play voice chap3-68",
    "v Oleh karena itu, kamu perlu melakukan problem-focused coping, yaitu strategi menghadapi stress dengan mengatasi sumber masalahnya secara langsung!",
    "stop voice chap3-68",
    "play voice chap3-69",
    "v Di sesi sebelumnya, kita sudah membahas jenis-jenis sumber stres. Mengenali sumber stres penting untuk memastikan kamu dapat mengatasi masalah dengan tepat. Sebagai contoh, jika kamu kesulitan dalam belajar, meminta bantuan teman dan menggunakan strategi belajar baru seperti mencari tutor online mungkin adalah strategi yang tepat. ",
    "stop voice chap3-69",
    "play voice chap3-70",
    "v Namun, ketika masalah yang kamu hadapi adalah bertengkar dengan teman atau merasa kesepian, tentu saja mencari strategi belajar bukanlah solusinya. Solusi yang dapat digunakan mungkin adalah meminta saran dari teman lain atau saran dari orang tuamu tentang cara menyelesaikan pertengkaran dan bergabung dengan komunitas positif untuk berkenalan dengan lebih banyak orang.",
    "stop voice chap3-70",
    "jump Scene-136",
  ],

  "Scene-136": [
    "show scene scene-stress-bucket-5",
    "play voice chap3-71",
    "v Satu catatan penting terakhir dalam mengelola stres! Berhati-hatilah dengan unhelpful coping yang dapat menggodamu untuk memberikan kelegaan secara instan, namun sebenarnya akan menambah stresmu di masa mendatang!",
    "stop voice chap3-71",
    "play voice chap3-72",
    "v Contoh dari unhelpful coping adalah menggunakan zat-zat berbahaya seperti rokok, minuman keras, dan narkoba. Di masa mendatang, kamu akan kesulitan untuk mengatasi stress karena zat-zat ini menghabiskan uangmu, membuatmu ketergantungan, hingga akhirnya merusak tubuh dan mentalmu!",
    "stop voice chap3-72",
    "play voice chap3-73",
    "v Contoh unhelpful coping lainnya lebih samar-samar seperti berperilaku agresif dan kasar saat menghadapi masalah. Perilaku seperti memukul dan memaki tidak akan menyelesaikan masalah dan justru membuatmu merasa lebih buruk serta menambah masalah dengan orang di sekitar.",
    "stop voice chap3-73",
    "play voice chap3-74",
    "v Contoh unhelpful coping yang terakhir adalah lari dari masalah seperti memutuskan menyerah untuk belajar materi yang sulit. Coba ingat-ingat saat kamu kesulitan memahami suatu materi karena tidak menguasai materi sebelumnya. Pernah kan ya? Ibaratnya, bagaimana bisa kamu memahami perkalian jika kamu tidak mengetahui pertambahan?",
    "stop voice chap3-74",
    "play voice chap3-75",
    "v Lagi pula, kita sudah membahas bahwa setelah mengatasi stress, kamu akan menjadi lebih kuat. What doesn’t kill you, makes you stronger! Kamu juga sudah latihan kekuatan kesehatan mental denganku, aku yakin kamu bisa menghadapi apapun jenis stress yang kamu hadapi. Kamu adalah Calon Pahlawan Kesehatan Mental yang aku banggakan.",
    "stop voice chap3-75",
    "jump Scene-137",
  ],

  "Scene-137": [
    "show scene scene-ask-small",
    "play voice chap3-76",
    "v Oke, dalam diskusi kita, stress akademik sering kali menjadi masalah utama yang membuat stress. ",
    "stop voice chap3-76",
    "play voice chap3-77",
    "v Jenis stress lainnya seperti stress interpersonal dan stress lingkungan pun berkaitan dengan akademik seperti bertengkar dengan teman sekolah hingga lingkungan belajar yang kurang baik. ",
    "stop voice chap3-77",
    "play voice chap3-78",
    "v Nah, aku akan memberimu prinsip sederhana untuk menjaga stress sebagai seorang siswa sekolah.",
    "stop voice chap3-78",
    "play voice chap3-79",
    "v Prinsipnya adalah…",
    "stop voice chap3-79",
    "jump Scene-138",
  ],

  "Scene-138": [
    "show scene scene-mental-atlet",
    "play voice chap3-80",
    "v …menjaga kesehatan mental di sekolah = menjadi seorang atlet.",
    "stop voice chap3-80",
    "jump Scene-148",
  ],

  "Scene-148": [
    "show scene scene-2",
    "play voice chap3-81",
    "v Mari kita main tebak-tebakan lagi. Ini tebak-tebakan kita yang terakhir. Kali ini kita seru-seruan saja ya hahaha. Aku senang sekali main tebak-tebakan denganmu. Oke, pertanyaannya adalah… ",
    "stop voice chap3-81",
    {
      Choice: {
        Dialog:
          "Menjaga kesehatan mental di sekolah itu mirip dengan menjadi ...",
        "Atlet lari jarak pendek": {
          Text: "Atlet lari jarak pendek",
          Do: "jump Scene-149-salah",
        },
        "Atlet lari marathon": {
          Text: "Atlet lari marathon",
          Do: "jump Scene-149-benar",
        },
      },
    },
  ],

  "Scene-149-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "play voice chap3-83",
    "v Yey! Tebakan yang baik hahaha.",
    "stop voice chap3-83",
    "jump Scene-147",
  ],

  "Scene-149-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "play voice chap3-82",
    "v Sayang sekali tebakanmu kurang tepat.",
    "stop voice chap3-82",
    "jump Scene-147",
  ],

  "Scene-147": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-mental-atlet-2",
    "play voice chap3-84",
    "v Menjaga kesehatan mental di sekolah itu layaknya bersiap untuk lari marathon karena kamu tidak bisa menghabiskan kapasitasmu untuk menghadapi stress hanya dalam waktu singkat seperti belajar dengan SKS alias sistem kebut semalam 1 hari sebelum ujian.  ",
    "stop voice chap3-84",
    "play voice chap3-85",
    "v Kamu perlu mempersiapkan diri untuk belajar secara terus-menerus sepanjang semester. Jika persiapanmu dilakukan dengan baik, maka kamu tidak akan merasa terlalu kelelahan menghadapi stress. ",
    "stop voice chap3-85",
    "jump Scene-148",
  ],

  "Scene-148": [
    "show scene scene-mental-atlet-3",
    "play voice chap3-86",
    "v Mulai dari persiapan yang dilakukan. Jika atlet fokus memiliki target, memiliki strategi menghadapi lintasan marathon, dan latihan secara rutin. Siswa sering sekali ujian tanpa belajar yang cukup dan tidak memiliki strategi seperti jadwal belajar dan tidak mengeksplorasi berbagai sumber belajar yang tersedia.",
    "stop voice chap3-86",
    "jump Scene-149",
  ],

  "Scene-149": [
    "show scene scene-mental-atlet-4",
    "play voice chap3-87",
    "v Atlet juga sangat memerhatikan waktu tidur untuk cukup 8 jam dalam sehari dengan kualitas yang baik, termasuk tidak tidur larut dan berada di ruangan yang tidak berisik. Di sisi lain, siswa sering kali tergoda untuk tidur larut baik karena hiburan seperti terlalu asik bermain gadget atau belajar terlalu keras dan SKS alias sistem kebut semalam tadi!",
    "stop voice chap3-87",
    "jump Scene-147",
  ],

  "Scene-147": [
    "show scene scene-mental-atlet-5",
    "play voice chap3-88",
    "v Tentu saja atlet juga rutin berolahraga. Apakah kamu rutin berolahraga? Atau kamu hanya berolahraga di mata pelajaran olahraga saja? Di chapter sebelumnya kita sudah bahas lho pentingnya olahraga rutin untuk menjaga kesehatan mental karena dapat berdampak pada hormon yang mengatur stress.",
    "stop voice chap3-88",
    "jump Scene-148",
  ],

  "Scene-148": [
    "show scene scene-mental-atlet-6",
    "play voice chap3-89",
    "v Yang cukup mengejutkan mungkin adalah atlet merencanakan relaksasinya dengan baik! Mereka menjadwalkan liburan di waktu yang tepat dengan kualitas yang baik. Tidak sembarangan bermain tanpa kenal waktu, namun tidak juga bekerja terlalu keras.",
    "stop voice chap3-89",
    "jump Scene-149",
  ],

  "Scene-149": [
    "show scene scene-mental-atlet-7",
    "play voice chap3-90",
    "v Terakhir, atlet sangat menjaga pola makannya! Gizinya lengkap dan seimbang, jadwal makannya juga teratur. Lagi-lagi, kita sudah membahas bagaimana pola makan dapat berdampak pada kesehatan mental di chapter sebelumnya. Jadi, usahakan untuk menghindari jajan sembarangan, lupa makan, atau makan berlebihan ya!",
    "stop voice chap3-90",
    "jump Scene-147",
  ],

  "Scene-147": [
    "show scene scene-badge-acquired-chapter-3",
    "play voice chap3-91",
    "v Oke. Sekian sesi latihan kekuatan Pahlawan Kesehatan Mental! Karena kamu sudah berjuang dengan keras, aku memberikan satu lencana baru lagi untuk tamengmu. ",
    "stop voice chap3-91",
    "play voice chap3-92",
    "v Lencana ini menandakan bahwa kamu memiliki kemampuan berupa pemahaman yang baik untuk menjaga kesehatan mental. ",
    "stop voice chap3-92",
    "jump Scene-148",
  ],

  "Scene-148": [
    "show scene scene-badge-list-chapter-3",
    "play voice chap3-93",
    "v Ingat, bahwa kekuatan mental itu dibangun secara perlahan dengan terus berani menghadapi tantangan. Jadi, pastikan latihanmu tidak berakhir di sini ya.  ",
    "stop voice chap3-93",
    "jump Scene-149",
  ],

  "Scene-149": [
    "show scene scene-2",
    "play voice chap3-94",
    'v Kamu perlu mempraktikkan keberanian menghadapi stress yang sudah kita bahas. Lalu, saat merasa stresnya terlalu banyak ingat "menguras stress seperti menguras air di ember". Ingat juga untuk membangun gaya hidup seperti atlet!',
    "stop voice chap3-94",
    "play voice chap3-95",
    "v Sampai jumpa di sesi latihan kita berikutnya, Calon Pahlawan Kesehatan Mental!",
    "stop voice chap3-95",
    "jump Loading-4",
  ],
};

// Make globally accessible for index.js merging
window.Chapter3 = Chapter3;
