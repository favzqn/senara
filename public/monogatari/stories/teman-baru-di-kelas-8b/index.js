monogatari.assets("scenes", {
  "kelas-pagi": "sit-right.jpg",
  "kelas-siang": "sit-chapter-5.jpg",
  "lorsekolah": "sit-chapter-5-2.jpg",
  "kantin": "sit-chapter-5-3.jpg",
  "perpustakaan": "consultation.jpg",
  "rumah-rafi": "beautiful-mind.jpg",
  "panggung": "badge-center.jpg",
  "panggung-lampu": "badge-main.jpg",
  "hitam": "intro.jpg",
});

monogatari.characters({
  alya: {
    name: "Alya",
    color: "#7c3aed",
    directory: "Alya",
    sprites: {
      default: "Alya_Normal_Default.PNG",
      smile: "Alya_Smile.PNG",
      surprised: "Alya_Surprised.PNG",
      sad: "Alya_Sad_Hesitant.PNG",
      thankful: "Alya_Terima Kasih_Selamat.PNG",
    },
    default_expression: "default",
  },
  rafi: {
    name: "Rafi",
    color: "#2563eb",
    directory: "Rafi",
    sprites: {
      default: "Rafi_Normal_Default.PNG",
      smile: "Rafi_Smile.PNG",
      surprised: "Rafi_Surprised.PNG",
      sad: "Rafi_Sad_Hesitant.PNG",
    },
    default_expression: "default",
  },
  arum: {
    name: "Arum",
    color: "#db2777",
    directory: "Arum",
    sprites: {
      default: "Arum_Normal_Default.PNG",
      smile: "Arum_Smile.PNG",
      surprised: "Arum_Surprised.PNG",
      sad: "Arum_Sad_Hesitant.PNG",
    },
    default_expression: "default",
  },
  poppy: {
    name: "Poppy",
    color: "#f59e0b",
    directory: "Poppy",
    sprites: {
      default: "Poppy_Normal_Default.PNG",
      smile: "Poppy_Smile.PNG",
      surprised: "Poppy_Surprised.PNG",
      sad: "Poppy_Sad_Hesitant.PNG",
    },
    default_expression: "default",
  },
  eki: {
    name: "Eki",
    color: "#059669",
    directory: "Eki",
    sprites: {
      default: "Eki_Normal_Default.PNG",
      smile: "Eki_Smile.PNG",
      surprised: "Eki_Surprised.PNG",
      sad: "Eki_Sad_Hesitant.PNG",
    },
    default_expression: "default",
  },
  hasna: {
    name: "Bu Hasna",
    color: "#6366f1",
    directory: "Bu Hasna",
    sprites: {
      default: "Bu Hasna_Normal_Default.PNG",
      smile: "Bu Hasna_Smile.PNG",
      surprised: "Bu Hasna_Surprised.PNG",
      sad: "Bu Hasna_Sad_Hesitant.PNG",
    },
    default_expression: "default",
  },
  mama: {
    name: "Mama Alya",
    color: "#ec4899",
    directory: "Mama Alya",
    sprites: {
      default: "Mama Alya_Normal_Default.PNG",
      smile: "Mama Alya_Smile.PNG",
      surprised: "Mama Alya_Surprised.PNG",
      sad: "Mama Alya_Sad_Hesitant.PNG",
    },
    default_expression: "default",
  },
  papa: {
    name: "Papa Alya",
    color: "#64748b",
    directory: "Papa Alya",
    sprites: {
      default: "Papa Alya_Normal_Default.PNG",
      smile: "Papa Alya_Smile.PNG",
      surprised: "Papa Alya_Surprised.PNG",
      sad: "Papa Alya_Sad_Hesitant.PNG",
    },
    default_expression: "default",
  },
});

monogatari.assets("music", {
  main: "vn.mp3",
  intro: "intro.mp3",
  "chapter-1": "chapter-1.mp3",
  "music-2": "music-2.mp3",
});

monogatari.assets("sounds", {
  typewriter: "typewriter.mp3",
  clap: "clap.mp3",
  wrong: "wrong.mp3",
  bell: "bell.mp3",
  knock: "knock.mp3",
});

const mainStory = {
  Start: [
    "show scene hitam",
    "play music intro with loop fade 20 volume 10",
    "Temani Alya dan Rafi menjalani hari-hari baru di Kelas 8B.",
    "Pelajari BISINDO, pahami inklusi, dan rasakan arti persahabatan yang sesungguhnya.",
    "jump Loading-1",
  ],

  "Loading-1": [
    "stop music intro",
    "play sound typewriter",
    "show scene kelas-pagi",
    "Bab 1 : Hari Pertama Alya",
    "jump Scene-1",
  ],

  "Loading-2": [
    "stop sound typewriter",
    "play sound typewriter",
    "show scene kelas-siang",
    "Bab 2 : Canggung di Tengah Kelas",
    "jump Scene-10",
  ],

  "Loading-3": [
    "stop sound typewriter",
    "play sound typewriter",
    "show scene kelas-pagi",
    "Bab 3 : Salah Paham Saat Kerja Kelompok",
    "jump Scene-18",
  ],

  "Loading-4": [
    "stop sound typewriter",
    "play sound typewriter",
    "show scene rumah-rafi",
    "Bab 4 : Titik Balik Rafi",
    "jump Scene-26",
  ],

  "Loading-5": [
    "stop sound typewriter",
    "play sound typewriter",
    "show scene kelas-pagi",
    "Bab 5 : Kelas Mulai Berubah",
    "jump Scene-34",
  ],

  "Loading-6": [
    "stop sound typewriter",
    "play sound typewriter",
    "show scene kelas-siang",
    "Bab 6 : Drama Kelas",
    "jump Scene-42",
  ],

  "Loading-7": [
    "stop sound typewriter",
    "play sound typewriter",
    "show scene panggung-lampu",
    "Bab 7 : Hari Pertunjukan",
    "jump Scene-50",
  ],

  "Loading-8": [
    "stop sound typewriter",
    "play sound typewriter",
    "show scene kelas-pagi",
    "Bab 8 : Epilog - Hari-Hari Baru",
    "jump Scene-58",
  ],
};

const completeStory = Object.assign({},
  typeof window.Chapter1 !== "undefined" ? window.Chapter1 : {},
  typeof window.Chapter2 !== "undefined" ? window.Chapter2 : {},
  typeof window.Chapter3 !== "undefined" ? window.Chapter3 : {},
  typeof window.Chapter4 !== "undefined" ? window.Chapter4 : {},
  typeof window.Chapter5 !== "undefined" ? window.Chapter5 : {},
  typeof window.Chapter6 !== "undefined" ? window.Chapter6 : {},
  typeof window.Chapter7 !== "undefined" ? window.Chapter7 : {},
  typeof window.Chapter8 !== "undefined" ? window.Chapter8 : {},
  mainStory
);

monogatari.script(completeStory);
