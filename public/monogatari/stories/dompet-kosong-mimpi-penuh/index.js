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
});

monogatari.characters({
  s: {
    name: "Sari",
    color: "#10B981",
  },
});

monogatari.assets("music", {
  main: "vn.mp3",
  intro: "intro.mp3",
  "chapter-1": "chapter-1.mp3",
  "music-2": "music-2.mp3",
});

monogatari.assets("voices", {});

monogatari.assets("sounds", {
  typewriter: "typewriter.mp3",
  clap: "clap.mp3",
  wrong: "wrong.mp3",
});

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
};

const completeStory = Object.assign({},
  typeof window.Chapter1 !== 'undefined' ? window.Chapter1 : {},
  mainStory
);

monogatari.script(completeStory);
