monogatari.action("notification").notifications({
  Welcome: {
    title: "Teman Baru di Kelas 8B",
    body: "Ikuti kisah Alya dan Rafi belajar tentang persahabatan, inklusi, dan BISINDO.",
    icon: "",
  },
});

monogatari.configuration("vredits", {
  Developers: {
    "Concept & Game Design": "Senara Team",
    "Scenario Writer": "Senara Team",
    Programmer: "Senara Team",
  },
  Assets: {
    Characters: "Senara Team",
  },
});

monogatari.assets("scenes", {
  "kelas-pagi": "kelas-pagi.jpg",
  "kelas-siang": "kelas-siang.jpg",
  "lorsekolah": "lorsekolah.jpg",
  "kantin": "kantin.jpg",
  "perpustakaan": "perpustakaan.jpg",
  "rumah-rafi": "rumah-rafi.jpg",
  "panggung": "panggung.jpg",
  "panggung-lampu": "panggung-lampu.jpg",
  "hitam": "hitam.jpg",
});

monogatari.characters({
  alya: {
    name: "Alya",
    color: "#7c3aed",
    default: "Alya_Normal_Default.PNG",
    directory: "Alya/",
    expressions: {
      smile: "Alya_Smile.PNG",
      surprised: "Alya_Surprised.PNG",
      sad: "Alya_Sad_Hesitant.PNG",
      thankful: "Alya_Terima Kasih_Selamat.PNG",
    },
  },
  rafi: {
    name: "Rafi",
    color: "#2563eb",
    default: "Rafi_Normal_Default.PNG",
    directory: "Rafi/",
    expressions: {
      smile: "Rafi_Smile.PNG",
      surprised: "Rafi_Surprised.PNG",
      sad: "Rafi_Sad_Hesitant.PNG",
    },
  },
  arum: {
    name: "Arum",
    color: "#db2777",
    default: "Arum_Normal_Default.PNG",
    directory: "Arum/",
    expressions: {
      smile: "Arum_Smile.PNG",
      surprised: "Arum_Surprised.PNG",
      sad: "Arum_Sad_Hesitant.PNG",
    },
  },
  poppy: {
    name: "Poppy",
    color: "#f59e0b",
    default: "Poppy_Normal_Default.PNG",
    directory: "Poppy/",
    expressions: {
      smile: "Poppy_Smile.PNG",
      surprised: "Poppy_Surprised.PNG",
      sad: "Poppy_Sad_Hesitant.PNG",
    },
  },
  eki: {
    name: "Eki",
    color: "#059669",
    default: "Eki_Normal_Default.PNG",
    directory: "Eki/",
    expressions: {
      smile: "Eki_Smile.PNG",
      surprised: "Eki_Surprised.PNG",
      sad: "Eki_Sad_Hesitant.PNG",
    },
  },
  hasna: {
    name: "Bu Hasna",
    color: "#6366f1",
    default: "Bu Hasna_Normal_Default.PNG",
    directory: "Bu Hasna/",
    expressions: {
      smile: "Bu Hasna_Smile.PNG",
      surprised: "Bu Hasna_Surprised.PNG",
      sad: "Bu Hasna_Sad_Hesitant.PNG",
    },
  },
  mama: {
    name: "Mama Alya",
    color: "#ec4899",
    default: "Mama Alya_Normal_Default.PNG",
    directory: "Mama Alya/",
    expressions: {
      smile: "Mama Alya_Smile.PNG",
      surprised: "Mama Alya_Surprised.PNG",
      sad: "Mama Alya_Sad_Hesitant.PNG",
    },
  },
  papa: {
    name: "Papa Alya",
    color: "#64748b",
    default: "Papa Alya_Normal_Default.PNG",
    directory: "Papa Alya/",
    expressions: {
      smile: "Papa Alya_Smile.PNG",
      surprised: "Papa Alya_Surprised.PNG",
      sad: "Papa Alya_Sad_Hesitant.PNG",
    },
  },
});

monogatari.action("message").messages({});

monogatari.assets("music", {
  main: "vn.mp3",
  intro: "intro.mp3",
  "chapter-1": "chapter-1.mp3",
  "music-2": "music-2.mp3",
});

monogatari.action("canvas").objects({});
monogatari.assets("gallery", {});
monogatari.assets("voices", {});

monogatari.assets("sounds", {
  typewriter: "typewriter.mp3",
  clap: "clap.mp3",
  wrong: "wrong.mp3",
  bell: "bell.mp3",
  knock: "knock.mp3",
});

monogatari.assets("videos", {});
monogatari.assets("images", {});

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
    "Bab 8 : Epilog — Hari-Hari Baru",
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
