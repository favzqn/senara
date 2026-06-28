/**
 * Chapter 3: Self-Help Strategies
 * 
 * Learning Outcomes:
 * - Learning healthy coping strategies
 * - Understanding stress management techniques
 * - Developing resilience
 * 
 * Duration: ~45 minutes
 */

/* global monogatari */

const Chapter3 = {
  "Scene-98": [
    "stop sound typewriter",
    "show scene scene-1",
    "v Hey, Mental Health Hero candidate! I'm so proud of you for training all the way to this point.",
    "v In our previous training session, we discussed the enemies of Mental Health Heroes.",
    "v Do you think those problems sound serious? I hope your answer is \"Yes\" because in this training session, I want you to also get serious about learning techniques that can help protect your mental health!",
    "jump Scene-99",
  ],

  "Scene-99": [
    "show scene scene-2",
    "v Before we start training, I want to know if you agree with the idea that being a teenager is all about happiness with zero stress or pressure?",
    {
      Choice: {
        Dialog:
          "Being a teenager is all about happiness with zero stress or pressure",
        "I agree with the statement below": {
          Text: "I agree with the statement below",
          Do: "jump Scene-100-salah",
        },
        "I disagree with the statement below": {
          Text: "I disagree with the statement below",
          Do: "jump Scene-100-benar",
        },
      },
    },
  ],

  "Scene-100-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "v Yes, exactly right!",
    "jump Scene-101",
  ],

  "Scene-100-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "v Aw, unfortunately your perspective isn't quite right.",
    "jump Scene-101",
  ],

  "Scene-101": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-4",
    "v Feeling stressed or pressured is normal because there will always be challenges and trials in life. Imagine if the following situations happened to you — or maybe you've experienced them before. Try to remember…",
    "jump Scene-102",
  ],

  "Scene-102": [
    "show scene scene-stress",
    "v When you're struggling with homework or preparing for an exam…",
    "jump Scene-103",
  ],

  "Scene-103": [
    "show scene scene-stress-2",
    "v then suddenly you get into a fight with a sibling or friend,",
    "jump Scene-104",
  ],

  "Scene-104": [
    "show scene scene-stress-3",
    "v on top of that, while trying to do your homework and study for a tough exam, you run into problems like bad internet or a power outage…",
    "jump Scene-105",
  ],

  "Scene-105": [
    "show scene scene-stress-4",
    "v …and eventually you start feeling like nobody in the world likes you.",
    "jump Scene-106",
  ],

  "Scene-106": [
    "show scene scene-2",
    "v After this, we'll be talking a lot about how to manage stress well — and even use it to make our mental strength grow! This is super important because stress is something that will never leave our daily lives.",
    "v It's also possible that you're experiencing stress right now — maybe that story reminded you of a bad experience. If you're feeling overwhelmed, I'll provide the relaxation techniques we've used often after this. Feel free to use them until your stress calms down!",
    "jump Scene-107",
  ],

  "Scene-107": [
    "show scene scene-box-breathing",
    "v Breathe in for 4 seconds.",
    "v Hold your breath for 4 seconds.",
    "v Breathe out for 4 seconds.",
    "v Hold your breath again for 4 seconds.",
    "jump Scene-108",
  ],

  "Scene-108": [
    "show scene scene-progressive-muscle",
    "v Breathe in, then clench both fists for 7 to 10 seconds. As hard as you can until they tremble, but not so hard it hurts.",
    "v Breathe out and focus on the relaxing sensation that slowly spreads through both hands for about 10 to 20 seconds.",
    "jump Scene-109",
  ],

  "Scene-109": [
    "show scene scene-ask-small",
    "v Before we go on, what exactly is stress…?",
    "jump Scene-110",
  ],

  "Scene-110": [
    "show scene scene-stress-definition",
    "v Stress is a cognitive (thinking), physical, emotional, or behavioral response that arises from stressors in the form of challenges or threats.",
    "v Stress or feelings of pressure appear because we believe there's a challenge we need to face — also known as a stressor.",
    "v There are many forms of stressors we've already discussed, from homework and problems with friends, to unsupportive environments.",
    "jump Scene-111",
  ],

  "Scene-111": [
    "show scene scene-2",
    "v But does stress always have a bad impact? Try to guess!",
    {
      Choice: {
        Dialog: "Stress only has a bad impact",
        "The statement below is true": {
          Text: "The statement below is true",
          Do: "jump Scene-112-salah",
        },
        "The statement below is false": {
          Text: "The statement below is false",
          Do: "jump Scene-112-benar",
        },
      },
    },
  ],

  "Scene-112-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "v Yes, good guess! You've really been following our discussion since the first session. Stress doesn't always have a bad impact.",
    "jump Scene-113",
  ],

  "Scene-112-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "v Hmm, your guess is off! In our previous training sessions, we've discussed several times that negative feelings and stress don't always have a bad impact.",
    "jump Scene-113",
  ],

  "Scene-113": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-stress-level",
    "v Remember that stress appears because of feeling challenged, and that feeling can help us know when to push ourselves harder!",
    "v Imagine you have a really tough exam tomorrow. If you feel like you can't handle it at all, or you study way too hard, your body and mind might feel completely exhausted.",
    "v But what if you didn't know there was a tough exam tomorrow? You wouldn't feel challenged at all, and your stress level would be very low. Would you study hard then? Probably not…",
    "v But if you realize there's a tough exam coming tomorrow, you might feel more challenged and motivated to study.",
    "v At this optimal stress level, your body and mind perform at their best because your brain sends signals that there's a \"challenge\" we need to face well. That's what stress is for!",
    "jump Scene-114",
  ],

  "Scene-114": [
    "show scene scene-ask-small",
    "v And here's even better news! Every time you successfully overcome stress, you're also training your mental strength to become even stronger!",
    "jump Scene-115",
  ],

  "Scene-115": [
    "show scene scene-stress-response",
    "v In the exam situation we talked about, because you felt the exam was tough, you studied hard. As a result, you learned new skills like effective study strategies for exams.",
    "v So, the next time you face a difficult exam, you'll know exactly what to do! For example, maybe because you felt the Math textbook wasn't enough, you found a tutor or study videos online, and you realized that was the right strategy.",
    "v In the future, you already know what you need to do to ace another math exam!",
    "jump Scene-116",
  ],

  "Scene-116": [
    "show scene scene-stress-response-2",
    "v On the other hand, if you think stress should be avoided, you might not try to study harder. As a result, you miss the chance to learn new skills.",
    "v By continuously daring to face stressful challenges, you'll build mental strength called \"resilience\" — the ability to bounce back from pressure.",
    "jump Scene-117",
  ],

  "Scene-117": [
    "show scene scene-stress-response-3",
    "v Think of it like a rubber band that gets pulled and stretched from all directions but can still snap back strong and even get bigger! What doesn't kill you makes you stronger — that's what resilience looks like!",
    "jump Scene-118",
  ],

  "Scene-118": [
    "show scene scene-stress-type",
    "v To learn how to manage stress well, you first need to know what the stressors or sources of stress are. In general, there are 4 sources of stress you need to be aware of: academic stress, environmental stress, interpersonal stress, and intrapersonal stress.",
    "v All four types of stress were discussed at the beginning of our training session. Now let's have a little quiz about the sources of stress!",
    "jump Scene-120",
  ],

  // Skip this scene

  //   "Scene-119": [
  //     "show scene scene-stress-4",
  //     "v At the beginning of our story, we discussed stress that comes from difficult homework and exams. What type of stress do you think that is?",
  //     "jump Scene-120",
  //   ],

  "Scene-120": [
    "show scene scene-2",
    "v At the beginning of our story, we discussed stress that comes from difficult homework and exams. What type of stress do you think that is?",
    {
      Choice: {
        Dialog:
          "Stress from difficult homework and exams is a type of stress that comes from …",
        "Academic Stress": {
          Text: "Academic Stress",
          Do: "jump Scene-121-benar",
        },
        "Intrapersonal Stress": {
          Text: "Intrapersonal Stress",
          Do: "jump Scene-121-salah",
        },
        "Interpersonal Stress": {
          Text: "Interpersonal Stress",
          Do: "jump Scene-121-salah",
        },
        "Environmental Stress": {
          Text: "Environmental Stress",
          Do: "jump Scene-121-salah",
        },
      },
    },
  ],

  "Scene-121-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "v Yes, that's right!",
    "jump Scene-122",
  ],

  "Scene-121-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "v Oh, your answer isn't quite right.",
    "jump Scene-122",
  ],

  "Scene-122": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-stress-akademik",
    "v Academic stress is a type of stress related to learning activities, like difficult material, tons of homework, and bad grades.",
    "jump Scene-123",
  ],

  "Scene-123": [
    "show scene scene-2",
    "v Talk about bad luck piling up! Already tired from homework, then got into a fight with a sibling, and the power and internet went out!",
    {
      Choice: {
        Dialog:
          "Stress from fighting with a sibling is a type of stress that comes from …",
        "Academic Stress": {
          Text: "Academic Stress",
          Do: "jump Scene-124-salah",
        },
        "Intrapersonal Stress": {
          Text: "Intrapersonal Stress",
          Do: "jump Scene-124-salah",
        },
        "Interpersonal Stress": {
          Text: "Interpersonal Stress",
          Do: "jump Scene-124-benar",
        },
        "Environmental Stress": {
          Text: "Environmental Stress",
          Do: "jump Scene-124-salah",
        },
      },
    },
  ],

  "Scene-124-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "v You got it right! Nice!",
    "jump Scene-125",
  ],

  "Scene-124-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "v Aw, your guess was a bit off.",
    "jump Scene-125",
  ],

  "Scene-125": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-stress-interpersonal",
    "v Interpersonal stress is a type of stress related to social relationships, like conflicts or problems with friends and family.",
    "jump Scene-126",
  ],

  "Scene-126": [
    "show scene scene-2",
    "v Talk about bad luck piling up! Already tired from homework, then got into a fight with a sibling, and the power and internet went out!",
    {
      Choice: {
        Dialog:
          "Stress from the power and internet going out while trying to do homework is a type of stress that comes from…",
        "Academic Stress": {
          Text: "Academic Stress",
          Do: "jump Scene-127-salah",
        },
        "Intrapersonal Stress": {
          Text: "Intrapersonal Stress",
          Do: "jump Scene-127-salah",
        },
        "Interpersonal Stress": {
          Text: "Interpersonal Stress",
          Do: "jump Scene-127-salah",
        },
        "Environmental Stress": {
          Text: "Environmental Stress",
          Do: "jump Scene-127-benar",
        },
      },
    },
  ],

  "Scene-127-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "v Yes, that's right!",
    "jump Scene-128",
  ],

  "Scene-127-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "v Oh, your answer isn't quite right.",
    "jump Scene-128",
  ],

  "Scene-128": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-stress-lingkungan",
    "v Environmental stress is a type of stress related to the environment where you do your activities, like a messy room, broken facilities like the internet, or noise and room temperature that make it hard to concentrate.",
    "jump Scene-129",
  ],

  "Scene-129": [
    "show scene scene-2",
    "v At the beginning of our story, we discussed how overly negative thoughts — like feeling that nobody likes us — can increase stress and feelings of pressure.",
    {
      Choice: {
        Dialog:
          "Stress from viewing problems in an overly negative way is a type of stress that comes from …",
        "Academic Stress": {
          Text: "Academic Stress",
          Do: "jump Scene-130-salah",
        },
        "Intrapersonal Stress": {
          Text: "Intrapersonal Stress",
          Do: "jump Scene-130-benar",
        },
        "Interpersonal Stress": {
          Text: "Interpersonal Stress",
          Do: "jump Scene-130-salah",
        },
        "Environmental Stress": {
          Text: "Environmental Stress",
          Do: "jump Scene-130-salah",
        },
      },
    },
  ],

  "Scene-130-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "v Yay! Good guess, haha.",
    "jump Scene-131",
  ],

  "Scene-130-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "v Aw, unfortunately your guess was off.",
    "jump Scene-131",
  ],

  "Scene-131": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-stress-intrapersonal",
    "v Intrapersonal stress is a type of stress related to processes within ourselves, like how we think and behave.",
    "v For example, constantly worrying about things we can't control, blaming ourselves too much, not exercising enough, and not eating healthily.",
    "jump Scene-132",
  ],

  "Scene-132": [
    "show scene scene-stress-bucket",
    "v Now that you know what can stress teenagers out, it's time to learn how to manage stress well. It's easy. As easy as draining water from a bucket! What does that mean? Let's find out!",
    "jump Scene-133",
  ],

  "Scene-133": [
    "show scene scene-stress-bucket-2",
    "v Imagine your capacity for handling stress is like a bucket's capacity to hold water. You need to prevent the water from overflowing. In other words, you need to drain the stress coming in so it doesn't become too much.",
    "v Ideally, you should know your \"buffer zone\" — when you start feeling overwhelmed — so when stress is making it hard to function, you know it's time to manage it!",
    "jump Scene-134",
  ],

  "Scene-134": [
    "show scene scene-stress-bucket-3",
    "v The first way to drain stress is through emotion-focused coping — strategies to reduce negative emotions and mental processes. For example, you're dealing with really difficult study material. Examples of emotion-focused coping are relaxation techniques like box breathing and progressive muscle relaxation, the ones we practice before training!",
    "v Other examples include getting enough rest, finding entertainment and laughter, and talking to friends about the problems you're facing.",
    "v You can use emotion-focused coping when facing problems that are hard to solve directly. For instance, if you're studying something so difficult it's making you feel overwhelmed. There's no shortcut to overcoming this stress other than studying hard with the right methods.",
    "v But, to study effectively, you need to reduce the stress you're feeling. You can do a relaxation technique first to drain your stress, so you can think clearly and be ready to study hard!",
    "jump Scene-135",
  ],

  "Scene-135": [
    "show scene scene-stress-bucket-4",
    "v If you notice, the faucet for draining stress through emotion-focused coping can't empty the water to 100%. For example, when struggling with difficult material, doing relaxation techniques and finding entertainment 100 times won't instantly make you master the subject.",
    "v That's why you also need problem-focused coping — strategies for dealing with stress by tackling the source of the problem directly!",
    "v In the previous session, we discussed the types of stress sources. Recognizing the source of stress is important to make sure you can solve the problem effectively. For example, if you're struggling with studying, asking a friend for help and using new study strategies like finding an online tutor might be the right approach.",
    "v But when the problem you're facing is a fight with a friend or feeling lonely, looking for study strategies obviously isn't the solution. What might help is asking another friend or your parents for advice on how to resolve the conflict, or joining a positive community to meet more people.",
    "jump Scene-136",
  ],

  "Scene-136": [
    "show scene scene-stress-bucket-5",
    "v One last important note about managing stress! Be careful of unhelpful coping that might tempt you with instant relief, but will actually add to your stress in the long run!",
    "v Examples of unhelpful coping include using harmful substances like cigarettes, alcohol, and drugs. In the long run, you'll struggle to manage stress because these substances drain your money, create dependency, and eventually destroy your body and mind!",
    "v Another example of unhelpful coping is more subtle, like acting aggressively and roughly when facing problems. Hitting and cursing won't solve anything and will only make you feel worse and create more problems with the people around you.",
    "v The last example of unhelpful coping is running away from problems, like giving up on studying difficult material. Think back to when you struggled to understand something because you hadn't mastered the previous material. That's happened before, right? It's like, how can you understand multiplication if you don't know addition?",
    "v Besides, we've already discussed that after overcoming stress, you'll become stronger. What doesn't kill you makes you stronger! You've also trained your mental strength with me, so I'm confident you can face whatever type of stress comes your way. You're a Mental Health Hero candidate I'm proud of.",
    "jump Scene-137",
  ],

  "Scene-137": [
    "show scene scene-ask-small",
    "v Okay, in our discussion, academic stress is often the main problem causing stress.",
    "v Other types of stress, like interpersonal and environmental stress, are also connected to academics — like fighting with classmates or having a poor study environment.",
    "v So, I'm going to give you a simple principle for managing stress as a student.",
    "v The principle is…",
    "jump Scene-138",
  ],

  "Scene-138": [
    "show scene scene-mental-atlet",
    "v …maintaining mental health at school = being an athlete.",
    "jump Scene-148",
  ],

  "Scene-148": [
    "show scene scene-2",
    "v Let's play another guessing game. This is our last one. Let's just have fun with it, haha. I really enjoy playing these guessing games with you. Okay, the question is…",
    {
      Choice: {
        Dialog:
          "Maintaining mental health at school is similar to being a …",
        "Sprint athlete": {
          Text: "Sprint athlete",
          Do: "jump Scene-149-salah",
        },
        "Marathon athlete": {
          Text: "Marathon athlete",
          Do: "jump Scene-149-benar",
        },
      },
    },
  ],

  "Scene-149-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "v Yay! Good guess, haha.",
    "jump Scene-147",
  ],

  "Scene-149-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "v Aw, your guess was a bit off.",
    "jump Scene-147",
  ],

  "Scene-147": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-mental-atlet-2",
    "v Maintaining mental health at school is like preparing for a marathon because you can't burn through your entire stress capacity in a short time — like cramming everything the night before an exam.",
    "v You need to prepare yourself to study continuously throughout the semester. If your preparation is done well, you won't feel too exhausted from stress.",
    "jump Scene-148",
  ],

  "Scene-148": [
    "show scene scene-mental-atlet-3",
    "v Let's start with preparation. Athletes focus on having a target, have strategies for the marathon course, and train regularly. Students often take exams without studying enough, don't have strategies like a study schedule, and don't explore the various learning resources available.",
    "jump Scene-149",
  ],

  "Scene-149": [
    "show scene scene-mental-atlet-4",
    "v Athletes also pay close attention to sleep, making sure to get 8 hours a day with good quality — meaning no late nights and staying in a quiet room. On the other hand, students are often tempted to stay up late, whether it's from entertainment like being too absorbed in gadgets, or studying too hard and cramming the night before!",
    "jump Scene-147",
  ],

  "Scene-147": [
    "show scene scene-mental-atlet-5",
    "v Of course, athletes also exercise regularly. Do you exercise regularly? Or do you only exercise during PE class? In the previous chapter, we discussed how important regular exercise is for mental health because it affects the hormones that regulate stress.",
    "jump Scene-148",
  ],

  "Scene-148": [
    "show scene scene-mental-atlet-6",
    "v What might be surprising is that athletes plan their relaxation well! They schedule vacations at the right time with good quality. They don't just play around without limits, but they also don't work too hard.",
    "jump Scene-149",
  ],

  "Scene-149": [
    "show scene scene-mental-atlet-7",
    "v Lastly, athletes really take care of their diet! Their nutrition is complete and balanced, and their eating schedule is regular. Again, we've already discussed how diet can affect mental health in the previous chapter. So, try to avoid junk food, skipping meals, or overeating!",
    "jump Scene-147",
  ],

  "Scene-147": [
    "show scene scene-badge-acquired-chapter-3",
    "v Okay. That's the end of our Mental Health Hero strength training session! Since you've worked so hard, I'm giving you another new badge for your shield.",
    "v This badge shows that you have the ability and good understanding to maintain mental health.",
    "jump Scene-148",
  ],

  "Scene-148": [
    "show scene scene-badge-list-chapter-3",
    "v Remember, mental strength is built slowly by continuously daring to face challenges. So, make sure your training doesn't stop here.",
    "jump Scene-149",
  ],

  "Scene-149": [
    "show scene scene-2",
    'v You need to practice the courage to face stress that we\'ve discussed. Then, when you feel like there\'s too much stress, remember to "drain your stress like draining water from a bucket." And remember to build a lifestyle like an athlete!',
    "v See you at our next training session, Mental Health Hero candidate!",
    "jump Loading-4",
  ],
};

// Make globally accessible for index.js merging
window.Chapter3 = Chapter3;
