/**
 * Chapter 1: Who is a Mental Health Hero?
 * 
 * Learning Outcomes:
 * - Understanding mental health literacy concepts
 * - Recognizing symptoms of mental disorders
 * - Reducing stigma around mental health
 * - Learning basic relaxation techniques
 * 
 * Duration: ~45 minutes
 * Scenes: 38 scenes
 */

/* global monogatari, STORY_CONSTANTS, buildInputScene, buildSoundScene */

const Chapter1 = {
  /**
   * Scene-1: Introduction and player name input
   */
  "Scene-1": [
    "stop sound typewriter",
    "show scene scene-1",
    "play music chapter-1 with loop fade 20 volume 10",
    "v Oh, hi there. So, you're the new Mental Health Hero candidate?",
    {
      Input: {
        Text: "May I know your name?",
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
              name: "Mental Health Hero",
              color: "#5bffb2",
            },
          });
          this.storage({
            player: {
              name: "Mental Health Hero",
            },
          });
        },
        Warning: "Please enter your name.",
      },
    },
    "v Hi {{player.name}}, welcome to the Mental Health Hero Training Center.",
    "v My name is Vani, and I'll be your instructor throughout your training until you officially become a Mental Health Hero.",
    "v People say you're a great Mental Health Hero candidate. You're brave enough to learn new things, and you're committed to spending your time learning so you can help others.",
    "v But I won't go easy on you. Being a Mental Health Hero is serious business. Why? Look at the screen and let me show you why.",
    "jump Scene-2",
  ],

  /**
   * Scene-2: First quiz - Mental health statistics
   */
  "Scene-2": [
    "stop music chapter-1",
    "play music music-2 with loop fade 20 volume 10",
    "v I have a little quiz for you.",
    "show scene scene-2",
    {
      Choice: {
        Dialog: "Try to guess. What percentage (%) of Indonesians aged 15-24 do you think experience emotional mental disorders?",
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

  /**
   * Scene-2-Benar: Correct answer feedback
   */
  "Scene-2-Benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "v Awesome, your guess was right. Mental disorders are a common issue that deserves our attention.",
    "jump Scene-3",
  ],

  /**
   * Scene-2-Salah: Wrong answer feedback
   */
  "Scene-2-Salah": [
    "play sound wrong with volume 50",
    "show scene scene-2-salah",
    "v Hmm. Looks like you're underestimating the mental health problems among teenagers in Indonesia.",
    "jump Scene-3",
  ],

  /**
   * Scene-3: Statistics explanation
   */
  "Scene-3": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-3",
    "v According to research by the Ministry of Health in 2018, 10%, or 1 in 10 young people aged 15-24, experience emotional-mental disorders.",
    "jump Scene-4",
  ],

  /**
   * Scene-4: Types of mental disorders
   */
  "Scene-4": [
    "show scene scene-4",
    "v Yes, we've only talked about emotional-mental disorders so far. There are other types of mental disorders too, like behavioral disorders, eating disorders, psychosis, and other types we'll discuss later.",
    "jump Scene-5",
  ],

  /**
   * Scene-5: Second quiz - Treatment statistics
   */
  "Scene-5": [
    "show scene scene-2",
    "v I've got another quiz for you!",
    {
      Choice: {
        Dialog: "Try to guess. What percentage (%) of young people aged 15-24 with depression do you think receive professional treatment?",
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

  /**
   * Scene-6-Benar: Correct answer
   */
  "Scene-6-Benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "v Wow, your guess was right!",
    "jump Scene-7",
  ],

  /**
   * Scene-6-Salah: Wrong answer
   */
  "Scene-6-Salah": [
    "play sound wrong with volume 50",
    "show scene scene-2-salah",
    "v Unfortunately, your guess doesn't match reality.",
    "jump Scene-7",
  ],

  /**
   * Scene-7: Treatment gap explanation
   */
  "Scene-7": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-depression-treatment",
    "v According to research by the Ministry of Health in 2018, only 5.2%, or about 1 in 20 young people aged 15-24 with depression, receive professional help such as psychiatrists and psychologists.",
    "jump Scene-8",
  ],

  /**
   * Scene-8: Why treatment gap exists
   */
  "Scene-8": [
    "show scene scene-4",
    "v That number is still far from our hope of 100% of young people with mental disorders getting professional help.",
    "jump Scene-9",
  ],

  /**
   * Scene-9: Barriers to treatment
   */
  "Scene-9": [
    "show scene scene-2",
    "v Why Don't Teenagers with Mental Disorders Get Professional Help?",
    "jump Scene-10",
  ],

  /**
   * Scene-10: Barrier 1 - Lack of recognition
   */
  "Scene-10": [
    "show scene scene-7-1",
    "v First, because they can't recognize the symptoms of mental disorders.",
    "jump Scene-11",
  ],

  /**
   * Scene-11: Barrier 2 - Lack of awareness
   */
  "Scene-11": [
    "show scene scene-7-2",
    "v Second, because they don't know how important professional help is.",
    "jump Scene-12",
  ],

  /**
   * Scene-12: Barrier 3 - Stigma
   */
  "Scene-12": [
    "show scene scene-7-3",
    "v Third, because of the negative stigma surrounding mental disorders and professional help.",
    "jump Scene-13",
  ],

  /**
   * Scene-13: Why this matters
   */
  "Scene-13": [
    "show scene scene-4",
    "v Why is the phenomenon we discussed earlier so worrying?",
    "jump Scene-14",
  ],

  /**
   * Scene-14: Physical vs mental health analogy
   */
  "Scene-14": [
    "show scene scene-physical-pain",
    "v Imagine if you got a physical injury from falling down. What would you do?",
    "jump Scene-15",
  ],

  /**
   * Scene-15: Physical treatment
   */
  "Scene-15": [
    "show scene scene-physical-treatment",
    "v Maybe you'd try some basic first aid like a bandage.",
    "v If it's a serious injury, you'd probably see a doctor to make sure it heals properly.",
    "jump Scene-16",
  ],

  /**
   * Scene-16: Mental health challenges
   */
  "Scene-16": [
    "show scene scene-depressed",
    "v But what if the problem you're facing isn't a physical injury, but a mental health issue?",
    "v A problem that makes you feel negative things for a long time, do things that are out of character constantly, struggle with daily life like going to school, or even harm yourself or others.",
    "jump Scene-17",
  ],

  /**
   * Scene-17: Need for mental health heroes
   */
  "Scene-17": [
    "show scene scene-consultation",
    "v We need people like you who want to learn and help improve the mental health of the world. Yes, we need Mental Health Heroes.",
    "jump Scene-18",
  ],

  /**
   * Scene-18: Seriousness of the issue
   */
  "Scene-18": [
    "show scene scene-depressed",
    "v Yes, this isn't an easy problem. I said that from the start. It's a serious issue that unfortunately, as we've discussed, often affects teenagers.",
    "v That's why we need to give teenagers the skills, knowledge, and attitudes to handle these problems.",
    "jump Scene-19",
  ],

  /**
   * Scene-19: Our mission
   */
  "Scene-19": [
    "show scene scene-consultation",
    "v We want all mental health problems among teenagers to be handled properly.",
    "jump Scene-20",
  ],

  /**
   * Scene-20: What is a mental health hero?
   */
  "Scene-20": [
    "show scene scene-hero",
    "v Who exactly is a Mental Health Hero? They're teenagers who have mental health literacy.",
    "v They have good knowledge about mental health. They also have the right beliefs about mental health issues.",
    "v With this knowledge and these beliefs, they can recognize, manage, and prevent mental health problems.",
    "jump Scene-21",
  ],

  /**
   * Scene-21: Mental health literacy components
   */
  "Scene-21": [
    "show scene scene-mental-health-literacy",
    "v Okay. If Mental Health Heroes are teenagers with mental health literacy, then from this list of abilities, which ones do you think are part of mental health literacy?",
    "v Which ones belong to mental health literacy?",
    "jump Scene-22",
  ],

  /**
   * Scene-22: All components are important
   */
  "Scene-22": [
    "show scene scene-mental-health-literacy-checked",
    "v All of them!",
    "jump Scene-23",
  ],

  /**
   * Scene-23: Six components of mental health literacy
   */
  "Scene-23": [
    "show scene scene-badge-main",
    "v If you noticed, these 6 symbols have been shown since you first started your adventure. They represent the components of mental health literacy.",
    "v According to various studies, these six symbols have many benefits:",
    "jump Scene-24",
  ],

  /**
   * Scene-24: Benefit 1 - Recognition
   */
  "Scene-24": [
    "show scene scene-badge-explanation-1",
    "v Starting with the ability to recognize mental disorders based on developing symptoms.",
    "jump Scene-25",
  ],

  /**
   * Scene-25: Benefit 2 - Reduced stigma
   */
  "Scene-25": [
    "show scene scene-badge-explanation-2",
    "v Reducing the stigma someone has about mental disorders.",
    "jump Scene-26",
  ],

  /**
   * Scene-26: Benefit 3 - Professional help
   */
  "Scene-26": [
    "show scene scene-badge-explanation-3",
    "v Making someone recommend professional help when it's needed.",
    "jump Scene-27",
  ],

  /**
   * Scene-27: Benefit 4 - Community health
   */
  "Scene-27": [
    "show scene scene-badge-explanation-4",
    "v And community mental health improves because they can prevent mental health problems and ensure professional help is available when needed.",
    "jump Scene-28",
  ],

  /**
   * Scene-28: Why they are heroes
   */
  "Scene-28": [
    "show scene scene-badge-main",
    "v That's why teenagers with mental health literacy are called Mental Health Heroes.",
    "v They can not only handle their own mental health problems well, but also help the people around them.",
    "jump Scene-29",
  ],

  /**
   * Scene-29: Your training journey
   */
  "Scene-29": [
    "show scene scene-1",
    "v Are you one of these Mental Health Heroes? I can't be sure yet.",
    "v You need to complete 4 rounds of mental health literacy training first. There are still 4 chapters in your adventure.",
    "jump Scene-30",
  ],

  /**
   * Scene-30: Badge system
   */
  "Scene-30": [
    "show scene scene-badge-person",
    "v In each part of your adventure, you'll earn a badge that shows you've completed training for the 6 components of mental health literacy we discussed.",
    "jump Scene-31",
  ],

  /**
   * Scene-31: Collecting badges
   */
  "Scene-31": [
    "show scene scene-badge-list-person",
    "v Once you've collected all 6 badges, you'll be eligible to take the Mental Health Hero test to prove your mental health literacy.",
    "jump Scene-32",
  ],

  /**
   * Scene-32: Badge collection (repeated for emphasis)
   */
  "Scene-32": [
    "show scene scene-badge-book",
    "v Once you've collected all 6 badges, you'll be eligible to take the Mental Health Hero test to prove your mental health literacy.",
    "jump Scene-33",
  ],

  /**
   * Scene-33: Final certification
   */
  "Scene-33": [
    "show scene scene-badge-list-book",
    "v If you pass that test, you'll officially become a Mental Health Hero.",
    "jump Scene-34",
  ],

  /**
   * Scene-34: Understanding the journey
   */
  "Scene-34": [
    "show scene scene-2",
    "v So, do you understand what you need to do to become a Mental Health Hero?",
    "v If you have any questions, after this please go back to the home page and click \"User Guide\" to ask me.",
    "jump Scene-35",
  ],

  /**
   * Scene-35: Relaxation techniques introduction
   */
  "Scene-35": [
    "show scene scene-1",
    "v Oh, before you continue your training as a Mental Health Hero candidate, I want to give you some tools to help you be ready for the challenges ahead.",
    "v Throughout your training to become a Mental Health Hero, you'll definitely face many challenges.",
    "v It might not just be challenges from the training itself, but other things too, like feeling tired after other activities.",
    "v That's why I'm going to teach you 2 techniques that have been proven by many studies to help you relax both physically and mentally, and get ready for new challenges.",
    "jump Scene-36",
  ],

  /**
   * Scene-36: Box breathing technique
   */
  "Scene-36": [
    "show scene scene-box-breathing",
    "v The first relaxation technique is Box Breathing. It's so effective that it's used by the US Navy SEALs to stay calm and focused before and after intense combat.",
    "v It's super simple to do. Get ready to focus. If possible, do it while sitting with your eyes closed. If not, just focus on your breathing. Alright, let's practice the technique. Get ready!",
    "v That's how simple it is. Do it a few times until you feel relaxed whenever you're about to face a challenge.",
    "v Not just during your training to become a Mental Health Hero, but for other things too, like when you're about to take a test.",
    "v After this, do it one more time so you remember the technique!",
    "jump Scene-37",
  ],

  /**
   * Scene-37: Progressive muscle relaxation
   */
  "Scene-37": [
    "show scene scene-progressive-muscle",
    "v The second technique is called Progressive Muscle Relaxation, and it's even easier to do. Let's practice it right away! Okay, try to be somewhere quiet. Now, focus your attention on both of your hands.",
    "v Just like with Box Breathing, you can try this anytime, as many times as you need. Let's try it one more time so you get the hang of it!",
    "jump Scene-38",
  ],

  /**
   * Scene-38: Chapter 1 conclusion
   */
  "Scene-38": [
    "show scene scene-sit-right",
    "v That's the end of your adventure in CHAPTER 1: Who is a Mental Health Hero! Sorry if I was a bit strict earlier. I just want your training to become a Mental Health Hero to be as effective as possible.",
    "v Oh, by the way, you can also combine those 2 relaxation techniques. Personally, I usually do Progressive Muscle Relaxation first, followed by Box Breathing twice.",
    "v That's it for our training session. Thank you for working so hard. I can't wait to see you again and watch you become a Mental Health Hero soon.",
    "v You can take a break and come back to see me later, or head straight to CHAPTER 2 if you still have enough time and energy.",
    "v See you later, Mental Health Hero candidate!",
    "jump Loading-2",
  ],

  /**
   * Loading-2: Chapter 2 loading screen
   */
  "Loading-2": [
    "play sound typewriter",
    "show scene loading-2",
    "Chapter 2 : The Enemies of Mental Health Heroes",
    "jump Scene-39",
  ],
};

// Make globally accessible for index.js merging
window.Chapter1 = Chapter1;

// Export for use in index.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Chapter1;
}
