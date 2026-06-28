/**
 * Chapter 1: Siapa Pahlawan Kesehatan Mental? (Template)
 * 
 * Text is loaded from lang/*.json — this file contains only scene structure.
 */

/* global monogatari, t */

const Chapter1Template = (lang) => {
  // Character name for revert (language-agnostic)
  const defaultName = lang === 'id' ? 'Pahlawan Kesehatan Mental' : 'Mental Health Hero';

  return {
  "Scene-1": [
    "stop sound typewriter",
    "show scene scene-1",
    "play music chapter-1 with loop fade 20 volume 10",
    "v " + t('ch1.scene1.greeting'),
    {
      Input: {
        Text: t('ch1.scene1.ask_name'),
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
              name: defaultName,
              color: "#5bffb2",
            },
          });
          this.storage({
            player: {
              name: defaultName,
            },
          });
        },
        Warning: t('ch1.scene1.warning'),
      },
    },
    "v " + t('ch1.scene1.welcome'),
    "v " + t('ch1.scene1.intro_vani'),
    "v " + t('ch1.scene1.praise'),
    "v " + t('ch1.scene1.serious'),
    "jump Scene-2",
  ],

  "Scene-2": [
    "stop music chapter-1",
    "play music music-2 with loop fade 20 volume 10",
    "v " + t('ch1.scene2.intro'),
    "show scene scene-2",
    {
      Choice: {
        Dialog: t('ch1.scene2.question'),
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

  "Scene-2-Benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "v " + t('ch1.scene2.correct'),
    "jump Scene-3",
  ],

  "Scene-2-Salah": [
    "play sound wrong with volume 50",
    "show scene scene-2-salah",
    "v " + t('ch1.scene2.wrong'),
    "jump Scene-3",
  ],

  "Scene-3": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-3",
    "v " + t('ch1.scene3.stat'),
    "jump Scene-4",
  ],

  "Scene-4": [
    "show scene scene-4",
    "v " + t('ch1.scene4.types'),
    "jump Scene-5",
  ],

  "Scene-5": [
    "show scene scene-2",
    "v " + t('ch1.scene5.intro'),
    {
      Choice: {
        Dialog: t('ch1.scene5.question'),
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

  "Scene-6-Benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "v " + t('ch1.scene6.correct'),
    "jump Scene-7",
  ],

  "Scene-6-Salah": [
    "play sound wrong with volume 50",
    "show scene scene-2-salah",
    "v " + t('ch1.scene6.wrong'),
    "jump Scene-7",
  ],

  "Scene-7": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-depression-treatment",
    "v " + t('ch1.scene7.stat'),
    "jump Scene-8",
  ],

  "Scene-8": [
    "show scene scene-4",
    "v " + t('ch1.scene8.gap'),
    "jump Scene-9",
  ],

  "Scene-9": [
    "show scene scene-2",
    "v " + t('ch1.scene9.barriers'),
    "jump Scene-10",
  ],

  "Scene-10": [
    "show scene scene-7-1",
    "v " + t('ch1.scene10.barrier1'),
    "jump Scene-11",
  ],

  "Scene-11": [
    "show scene scene-7-2",
    "v " + t('ch1.scene11.barrier2'),
    "jump Scene-12",
  ],

  "Scene-12": [
    "show scene scene-7-3",
    "v " + t('ch1.scene12.barrier3'),
    "jump Scene-13",
  ],

  "Scene-13": [
    "show scene scene-4",
    "v " + t('ch1.scene13.why_matters'),
    "jump Scene-14",
  ],

  "Scene-14": [
    "show scene scene-physical-pain",
    "v " + t('ch1.scene14.analogy'),
    "jump Scene-15",
  ],

  "Scene-15": [
    "show scene scene-physical-treatment",
    "v " + t('ch1.scene15.treatment1'),
    "v " + t('ch1.scene15.treatment2'),
    "jump Scene-16",
  ],

  "Scene-16": [
    "show scene scene-depressed",
    "v " + t('ch1.scene16.mental_challenge'),
    "v " + t('ch1.scene16.mental_detail'),
    "jump Scene-17",
  ],

  "Scene-17": [
    "show scene scene-consultation",
    "v " + t('ch1.scene17.heroes_needed'),
    "jump Scene-18",
  ],

  "Scene-18": [
    "show scene scene-depressed",
    "v " + t('ch1.scene18.serious'),
    "v " + t('ch1.scene18.empower'),
    "jump Scene-19",
  ],

  "Scene-19": [
    "show scene scene-consultation",
    "v " + t('ch1.scene19.mission'),
    "jump Scene-20",
  ],

  "Scene-20": [
    "show scene scene-hero",
    "v " + t('ch1.scene20.definition'),
    "v " + t('ch1.scene20.knowledge'),
    "v " + t('ch1.scene20.skills'),
    "jump Scene-21",
  ],

  "Scene-21": [
    "show scene scene-mental-health-literacy",
    "v " + t('ch1.scene21.literacy_intro'),
    "v " + t('ch1.scene21.literacy_which'),
    "jump Scene-22",
  ],

  "Scene-22": [
    "show scene scene-mental-health-literacy-checked",
    "v " + t('ch1.scene22.all'),
    "jump Scene-23",
  ],

  "Scene-23": [
    "show scene scene-badge-main",
    "v " + t('ch1.scene23.symbols'),
    "v " + t('ch1.scene23.benefits'),
    "jump Scene-24",
  ],

  "Scene-24": [
    "show scene scene-badge-explanation-1",
    "v " + t('ch1.scene24.benefit1'),
    "jump Scene-25",
  ],

  "Scene-25": [
    "show scene scene-badge-explanation-2",
    "v " + t('ch1.scene25.benefit2'),
    "jump Scene-26",
  ],

  "Scene-26": [
    "show scene scene-badge-explanation-3",
    "v " + t('ch1.scene26.benefit3'),
    "jump Scene-27",
  ],

  "Scene-27": [
    "show scene scene-badge-explanation-4",
    "v " + t('ch1.scene27.benefit4'),
    "jump Scene-28",
  ],

  "Scene-28": [
    "show scene scene-badge-main",
    "v " + t('ch1.scene28.why_heroes'),
    "v " + t('ch1.scene28.help_others'),
    "jump Scene-29",
  ],

  "Scene-29": [
    "show scene scene-1",
    "v " + t('ch1.scene29.are_you'),
    "v " + t('ch1.scene29.training'),
    "jump Scene-30",
  ],

  "Scene-30": [
    "show scene scene-badge-person",
    "v " + t('ch1.scene30.badges'),
    "jump Scene-31",
  ],

  "Scene-31": [
    "show scene scene-badge-list-person",
    "v " + t('ch1.scene31.collect'),
    "jump Scene-32",
  ],

  "Scene-32": [
    "show scene scene-badge-book",
    "v " + t('ch1.scene32.collect2'),
    "jump Scene-33",
  ],

  "Scene-33": [
    "show scene scene-badge-list-book",
    "v " + t('ch1.scene33.certify'),
    "jump Scene-34",
  ],

  "Scene-34": [
    "show scene scene-2",
    "v " + t('ch1.scene34.understand'),
    "v " + t('ch1.scene34.help_menu'),
    "jump Scene-35",
  ],

  "Scene-35": [
    "show scene scene-1",
    "v " + t('ch1.scene35.relax_intro'),
    "v " + t('ch1.scene35.challenges'),
    "v " + t('ch1.scene35.not_only'),
    "v " + t('ch1.scene35.techniques'),
    "jump Scene-36",
  ],

  "Scene-36": [
    "show scene scene-box-breathing",
    "v " + t('ch1.scene36.box_desc'),
    "v " + t('ch1.scene36.box_how'),
    "v " + t('ch1.scene36.box_easy'),
    "v " + t('ch1.scene36.box_also'),
    "v " + t('ch1.scene36.box_again'),
    "jump Scene-37",
  ],

  "Scene-37": [
    "show scene scene-progressive-muscle",
    "v " + t('ch1.scene37.pmr_desc'),
    "v " + t('ch1.scene37.pmr_again'),
    "jump Scene-38",
  ],

  "Scene-38": [
    "show scene scene-sit-right",
    "v " + t('ch1.scene38.outro1'),
    "v " + t('ch1.scene38.outro2'),
    "v " + t('ch1.scene38.outro3'),
    "v " + t('ch1.scene38.outro4'),
    "v " + t('ch1.scene38.outro5'),
    "jump Loading-2",
  ],

  "Loading-2": [
    "play sound typewriter",
    "show scene loading-2",
    t('ch1.loading2'),
    "jump Scene-39",
  ],
  };
};

// Expose as multi-language script object: { 'id': {...}, 'en': {...} }
window.Chapter1Template = Chapter1Template;
