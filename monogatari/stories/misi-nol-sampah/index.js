monogatari.action("notification").notifications({
  Welcome: {
    title: "Welcome to Zero Waste Mission!",
    body: "Join Naya's environmental initiative.",
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
  "scene-3-reduce": "3-reduce.jpg",
  "scene-3-reuse": "3-reuse.jpg",
  "scene-3-recycle": "3-recycle.jpg",
  "scene-4": "4.jpg",
  "scene-5": "5.jpg",
  "scene-5-benar": "5-benar.jpg",
  "scene-5-salah": "5-salah.jpg",
  "scene-6": "6.jpg",
  "scene-7": "7.jpg",
  "scene-8": "8.jpg",
  "scene-9": "9.jpg",
  "scene-9-a": "9-a.jpg",
  "scene-9-benar": "9-benar.jpg",
  "scene-9-c": "9-c.jpg",
  "scene-10": "10.jpg",
  "scene-11": "11.jpg",
  "scene-11-benar": "11-benar.jpg",
  "scene-11-salah": "11-salah.jpg",
  "scene-12": "12.jpg",
  "scene-13": "13.jpg",
  "scene-14": "14.jpg",
  "scene-15": "15.jpg",
  "scene-16": "16.jpg",
  "scene-17": "17.jpg",
  "scene-sit-right": "sit-right.jpg",
  "loading-2": "loading-2.jpg",
});

monogatari.characters({
  n: {
    name: "Naya",
    color: "#059669",
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
    "Welcome to Zero Waste Mission!",
    "Follow Naya as she starts a zero-waste initiative at her school, learning the 5R framework and inspiring others to take action.",
    "jump Loading-1",
  ],

  "Loading-1": [
    "stop music intro",
    "play sound typewriter",
    "show scene loading-1",
    "Chapter 1 : The Trash Mountain",
    "jump Scene-1",
  ],

  "Loading-2": [
    "stop sound typewriter",
    "play sound typewriter",
    "show scene loading-2",
    "Chapter 2 : Zero Waste at Home",
    "jump Scene-19",
  ],
};

const completeStory = Object.assign({},
  typeof window.Chapter1 !== 'undefined' ? window.Chapter1 : {},
  mainStory
);

monogatari.script(completeStory);
