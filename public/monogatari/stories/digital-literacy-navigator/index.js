monogatari.assets("scenes", {
  intro: "intro.jpg",
  "loading-1": "loading-1.jpg",
  "scene-1": "1.jpg",
  "scene-2": "2.jpg",
  "scene-2-benar": "2-benar.jpg",
  "scene-2-salah": "2-salah.jpg",
  "scene-3": "3.jpg",
  "scene-4": "4.jpg",
  "scene-4-a": "4.jpg",
  "scene-4-benar": "2-benar.jpg",
  "scene-4-c": "4.jpg",
  "scene-5": "5.jpg",
  "scene-6": "6.jpg",
  "scene-7": "7.jpg",
  "scene-7-benar": "2-benar.jpg",
  "scene-7-salah": "2-salah.jpg",
  "scene-8": "8.jpg",
  "scene-9": "9.jpg",
  "scene-10": "10.jpg",
  "scene-11": "11.jpg",
  "scene-12": "12.jpg",
  "scene-12-a": "12.jpg",
  "scene-12-b": "12.jpg",
  "scene-12-benar": "2-benar.jpg",
  "scene-13": "13.jpg",
  "scene-14": "14.jpg",
  "scene-14-benar": "2-benar.jpg",
  "scene-14-salah": "2-salah.jpg",
  "scene-15": "15.jpg",
  "scene-16": "16.jpg",
  "scene-17": "17.jpg",
  "scene-18": "18.jpg",
  "scene-19": "19.jpg",
  "scene-20": "20.jpg",
  "scene-21": "21.jpg",
  "scene-sit-right": "sit-right.jpg",
  "loading-2": "loading-2.jpg",
});

monogatari.characters({
  r: {
    name: "Raka",
    color: "#3b82f6",
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
    "Welcome to Digital Literacy Navigator!",
    "Join Raka as he explores the world of social media, learns to spot fake news, protects his privacy, and deals with online negativity.",
    "jump Loading-1",
  ],

  "Loading-1": [
    "stop music intro",
    "play sound typewriter",
    "show scene loading-1",
    "Chapter 1 : Social Media Survival",
    "jump Scene-1",
  ],

  "Loading-2": [
    "stop sound typewriter",
    "play sound typewriter",
    "show scene loading-2",
    "Chapter 2 : The Deep End of Social Media",
    "jump Scene-23",
  ],
};

const completeStory = Object.assign({},
  typeof window.Chapter1 !== 'undefined' ? window.Chapter1 : {},
  typeof window.Chapter2 !== 'undefined' ? window.Chapter2 : {},
  mainStory
);

monogatari.script(completeStory);
