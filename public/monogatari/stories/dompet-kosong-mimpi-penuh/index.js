monogatari.action("notification").notifications({
  Welcome: {
    title: "Welcome to Empty Wallet, Full Dreams!",
    body: "Learn personal finance with Sari.",
    icon: "",
  },
});

monogatari.configuration("vredits", {
  "Collaboration": {
    "In Partnership With":
      '<a href="https://diceritain.id" target="_blank" style="font-weight: bold; color: #ff6b9d;">diceritain.id</a>',
  },
  Developers: {
    "Concept & Game Design": "Senara Team",
    "Scenario Writer": "Senara Team",
    Programmer: "Senara Team",
  },
  Assets: {
    Scenes: "Senara Team",
  },
});

monogatari.assets("scenes", {
  intro: "intro.jpg",
  "loading-1": "loading-1.jpg",
  "scene-1": "1.jpg",
  "scene-2": "2.jpg",
  "scene-3": "3.jpg",
  "scene-4": "4.jpg",
  "scene-4-benar": "4-benar.jpg",
  "scene-4-salah": "4-salah.jpg",
  "scene-5": "5.jpg",
  "scene-6": "6.jpg",
  "scene-7": "7.jpg",
  "scene-8": "8.jpg",
  "scene-9": "9.jpg",
  "scene-10-a": "10-a.jpg",
  "scene-10-b": "10-b.jpg",
  "scene-11": "11.jpg",
  "scene-12": "12.jpg",
  "scene-12-benar": "12-benar.jpg",
  "scene-12-salah": "12-salah.jpg",
  "scene-13": "13.jpg",
  "scene-14": "14.jpg",
  "scene-15": "15.jpg",
  "scene-15-benar": "15-benar.jpg",
  "scene-15-salah": "15-salah.jpg",
  "scene-16": "16.jpg",
  "scene-17": "17.jpg",
  "scene-18": "18.jpg",
  "scene-19": "19.jpg",
  "scene-sit-right": "sit-right.jpg",
  "loading-2": "loading-2.jpg",
});

monogatari.characters({
  s: {
    name: "Sari",
    color: "#10B981",
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
});

monogatari.assets("videos", {});

monogatari.assets("images", {});

const mainStory = {
  Start: [
    "show scene intro",
    "play music intro with loop fade 20 volume 10",
    "Welcome to Empty Wallet, Full Dreams!",
    "Follow Sari as she learns to manage her money, build a budget, and take control of her financial future.",
    "jump Loading-1",
  ],

  "Loading-1": [
    "stop music intro",
    "play sound typewriter",
    "show scene loading-1",
    "Chapter 1 : The Budget Awakening",
    "jump Scene-1",
  ],

  "Loading-2": [
    "stop sound typewriter",
    "play sound typewriter",
    "show scene loading-2",
    "Chapter 2 : Investasi untuk Pemula",
    "jump Scene-21",
  ],
};

const completeStory = Object.assign({},
  typeof window.Chapter1 !== 'undefined' ? window.Chapter1 : {},
  mainStory
);

monogatari.script(completeStory);
