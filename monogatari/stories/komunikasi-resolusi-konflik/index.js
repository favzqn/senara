monogatari.action("notification").notifications({
  Welcome: {
    title: "Welcome to Communication & Conflict Resolution!",
    body: "Learn effective communication with Dimas.",
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
  "scene-3-a": "3-a.jpg",
  "scene-3-b": "3-b.jpg",
  "scene-3-c": "3-c.jpg",
  "scene-4": "4.jpg",
  "scene-5": "5.jpg",
  "scene-5-benar": "5-benar.jpg",
  "scene-5-salah": "5-salah.jpg",
  "scene-6": "6.jpg",
  "scene-7": "7.jpg",
  "scene-8": "8.jpg",
  "scene-9": "9.jpg",
  "scene-9-benar": "9-benar.jpg",
  "scene-9-salah": "9-salah.jpg",
  "scene-10": "10.jpg",
  "scene-11": "11.jpg",
  "scene-12": "12.jpg",
  "scene-12-a": "12-a.jpg",
  "scene-12-benar": "12-benar.jpg",
  "scene-12-c": "12-c.jpg",
  "scene-13": "13.jpg",
  "scene-14": "14.jpg",
  "scene-14-a": "14-a.jpg",
  "scene-14-benar": "14-benar.jpg",
  "scene-14-c": "14-c.jpg",
  "scene-15": "15.jpg",
  "scene-16": "16.jpg",
  "scene-17": "17.jpg",
  "scene-sit-right": "sit-right.jpg",
  "loading-2": "loading-2.jpg",
});

monogatari.characters({
  d: {
    name: "Dimas",
    color: "#F59E0B",
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
    "Welcome to Communication & Conflict Resolution!",
    "Follow Dimas as he navigates friendship conflicts, learns active listening, and discovers the power of peaceful communication.",
    "jump Loading-1",
  ],

  "Loading-1": [
    "stop music intro",
    "play sound typewriter",
    "show scene loading-1",
    "Chapter 1 : The Art of Listening",
    "jump Scene-1",
  ],

  "Loading-2": [
    "stop sound typewriter",
    "play sound typewriter",
    "show scene loading-2",
    "Chapter 2 : Empathy in Action",
    "jump Scene-19",
  ],
};

const completeStory = Object.assign({},
  typeof window.Chapter1 !== 'undefined' ? window.Chapter1 : {},
  mainStory
);

monogatari.script(completeStory);
