/**
 * Chapter 4: Professional Help
 * 
 * Learning Outcomes:
 * - Understanding the role of mental health professionals
 * - Knowing the types of professional help
 * - Learning how to seek help
 * 
 * Duration: ~45 minutes
 * Status: Placeholder - extract from original file when ready
 */

/* global monogatari */

const Chapter4 = {
  "Scene-150": [
    "stop sound typewriter",

    "show scene scene-1",
    "v Hello, Aspiring Mental Health Hero! You've completed more than half of the training to become a Mental Health Hero. ",
    "v I'm sure you already have a lot of knowledge to take care of your mental health, so I'm going to introduce you to other mental health warriors.",
    "v But first! Answer one question to find out why it's important to know about mental health warriors.",
    "jump Scene-151",
  ],

  "Scene-151": [
    "show scene scene-2",
    "v Do you agree with the following statement…",
    {
      Choice: {
        Dialog:
          "Someone who has a lot of knowledge about mental health won't need help from others to maintain their mental health.",
        "I agree with the statement below": {
          Text: "I agree with the statement below",
          Do: "jump Scene-151-Salah",
        },
        "I disagree with the statement below": {
          Text: "I disagree with the statement below",
          Do: "jump Scene-151-Benar",
        },
      },
    },
  ],

  "Scene-151-Benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "v I'm so happy with your answer! You really took the time to understand our training exercises.",
    "jump Scene-152",
  ],

  "Scene-151-Salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "v Hmmmm, that's disappointing!",
    "jump Scene-152",
  ],

  "Scene-152": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-1",
    "v From the very beginning of our training, we agreed that one of the goals is to help teenagers with mental health problems get the help they need. ",
    "v When we discussed the enemies of Mental Health Heroes, we also talked about factors of mental disorders that are difficult to handle on your own, such as hormonal imbalances and habits that are hard to change.",
    "jump Scene-153",
  ],

  "Scene-153": [
    "show scene scene-physical-pain-chap4",
    "v Simply put, imagine a doctor who falls and feels intense pain in their leg. This doctor has good knowledge about physical health issues, but does that mean they don't need help from another doctor? What if their leg is actually broken?",
    "jump Scene-154",
  ],

  "Scene-154": [
    "show scene scene-mental-illness-chap4",
    "v The same applies to mental health issues. Moreover, we've discussed that mental disorders can only be diagnosed by professionals, namely psychologists and psychiatrists. Just like physical health issues such as cancer, diabetes, and broken bones — we can't just say we have these conditions before getting a diagnosis from a doctor.",
    "jump Scene-155",
  ],

  "Scene-155": [
    "show scene scene-1",
    "v The good news is, just like physical health issues, if mental health problems are properly treated, the person experiencing them can still enjoy good mental health. ",
    "v Just as people with cancer, diabetes, or broken bones can still be productive at work, school, and socializing when helped by a doctor — people with mental disorders can do the same with the help of psychologists and psychiatrists.",
    "jump Scene-156",
  ],

  "Scene-156": [
    "show scene scene-2",
    "v Okay, I hope you now understand why it's important to get to know other mental health warriors. They may not interact with teenagers every day like Mental Health Heroes do, but sometimes they are the ones who can truly help solve mental health problems.  ",
    "v That's why Mental Health Heroes need to know when to ask mental health warriors for help, or when to guide other teenagers to seek help.",
    "v Generally, Mental Health Warriors who are professionals are needed when the problems faced are difficult for teenagers and those closest to them to handle on their own. ",
    "v Yes, our discussion in this training session might bring up some negative feelings because we'll also be discussing difficult conditions. ",
    "v So, after this we'll do a relaxation technique as usual. And if you feel you might have a mental disorder or that your mental health problems are interfering with your daily life, please contact a professional like a psychologist or psychiatrist right away!",
    "jump Scene-157",
  ],

  "Scene-157": [
    "show scene scene-box-breathing",
    "v Breathe in for 4 seconds.",
    "v Hold your breath for 4 seconds.",
    "v Breathe out for 4 seconds.",
    "v Hold your breath again for 4 seconds.",
    "jump Scene-158",
  ],

  "Scene-158": [
    "show scene scene-progressive-muscle",
    "v Breathe in, then clench both fists for 7 to 10 seconds. As hard as you can until they shake, but not to the point of pain.",
    "v Breathe out and focus on the relaxing sensation that slowly emerges from both hands for about 10 to 20 seconds.",
    "jump Scene-159",
  ],

  "Scene-159": [
    "show scene scene-2",
    "v I just received word from the mental health warriors. They said they don't want to introduce themselves to you right away… ",
    "v Relax, relax! It's not that they don't want to meet you. They just want to play a little game. So, they'll give you clues about who they are, and you'll have to guess who they are!",
    "v Get ready! After this, we'll start the introductions right away!",
    "jump Scene-160",
  ],

  "Scene-160": [
    "show scene scene-2",
    "v Who am I?",
    {
      Choice: {
        Dialog:
          "I completed my master's degree in professional psychology after finishing my bachelor's degree in psychology. I help others become mentally healthy by helping them manage their thoughts, emotions, and behaviors. I am… ",
        Psychiatrist: {
          Text: "Psychiatrist",
          Do: "jump Scene-160-Salah",
        },
        Psychologist: {
          Text: "Psychologist",
          Do: "jump Scene-160-Benar",
        },
        Counselor: {
          Text: "Counselor",
          Do: "jump Scene-160-Salah",
        },
      },
    },
  ],

  "Scene-160-Benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "v I'm so happy with your answer! You really took the time to understand our training exercises.",
    "jump Scene-161",
  ],

  "Scene-160-Salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "v Hmmmm, that's disappointing!",
    "jump Scene-161",
  ],

  "Scene-161": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-know-psychologist",
    "v Let's get to know psychologists! They are experts in managing human behavior and mental processes! No need to be surprised — they've completed a bachelor's degree in psychology where they studied all aspects of a person's psychology, from personality, emotions, thoughts, and behaviors, to the factors that influence them like development, social relationships, education, and work.  ",
    "v Learning from research alone isn't enough — psychologists have also completed hands-on practical training to handle mental health problems. From assessments or evaluations of mental health conditions, to diagnosing mental disorders, to treatment by managing emotional reactions, ways of thinking, and behavioral patterns! ",
    "v So you can be sure that psychologists are absolutely capable of helping you maximize your mental health! They don't just help people with mental disorders, but also mental health problems in general.",
    "jump Scene-162",
  ],

  "Scene-162": [
    "show scene scene-2",
    "v Who am I?",
    {
      Choice: {
        Dialog:
          "I completed my education to become a general practitioner. Then, I continued my studies to become a doctor who specializes in mental health. I am… ",
        Psychiatrist: {
          Text: "Psychiatrist",
          Do: "jump Scene-162-Benar",
        },
        Psychologist: {
          Text: "Psychologist",
          Do: "jump Scene-162-Salah",
        },
        Counselor: {
          Text: "Counselor",
          Do: "jump Scene-162-Salah",
        },
      },
    },
  ],

  "Scene-162-Benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "v I'm so happy with your answer! You really took the time to understand our training exercises.",
    "jump Scene-163",
  ],

  "Scene-162-Salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "v Hmmmm, that's disappointing!",
    "jump Scene-163",
  ],

  "Scene-163": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-know-psychiatrist",
    "v This professional needs no doubt either! Psychiatrists have completed medical school, which generally takes about 6 years. They've also completed specialized training to earn their mental health specialist degree, which takes about 4 years.",
    "v With their medical background, psychiatrists can prescribe medication to treat mental health problems. This authority is not held by other mental health professionals. Psychiatrists are also trained to handle complex health problems that require hospitalization in psychiatric facilities.",
    "jump Scene-164",
  ],

  "Scene-164": [
    "show scene scene-2",
    "v Who am I?",
    {
      Choice: {
        Dialog:
          "My job is to help people solve problems through the counseling process. I have a bachelor's degree in Psychology or Guidance and Counseling. I am…",
        Psychiatrist: {
          Text: "Psychiatrist",
          Do: "jump Scene-164-Salah",
        },
        Psychologist: {
          Text: "Psychologist",
          Do: "jump Scene-164-Salah",
        },
        Counselor: {
          Text: "Counselor",
          Do: "jump Scene-164-Benar",
        },
      },
    },
  ],

  "Scene-164-Benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "v I'm so happy with your answer! You really took the time to understand our training exercises.",
    "jump Scene-165",
  ],

  "Scene-164-Salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "v Hmmmm, that's disappointing!",
    "jump Scene-165",
  ],

  "Scene-165": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-know-counselor",
    "v Counselors are the mental health professionals closest to you! Not all schools have their own psychologist, but every school generally has a counselor. Make sure you know your counselor and how to ask for their help! A counselor is the nearest person you can immediately turn to for help with mental health problems. ",
    "v Counselors have a bachelor's degree in Psychology or Guidance and Counseling. They're also trained to be counselors in their areas of expertise, such as education, family, career, and many more!",
    "v Counselors cannot provide diagnoses or therapy for mental disorders, but they can help you solve problems effectively, including deciding whether to seek help from a psychologist or psychiatrist. They can help you by being a comfortable listener, helping you understand your problems, exploring solutions you can try, and evaluating what the best solution might be.",
    "jump Scene-166",
  ],

  "Scene-166": [
    "show scene scene-why-pro1",
    "v From our introduction to these 3 professionals, we can summarize 4 reasons why professional help is needed to address mental health problems. ",
    "jump Scene-167",
  ],

  "Scene-167": [
    "show scene scene-why-pro2",
    "v The first reason is that these professionals are trained both academically and professionally. We discussed earlier how these professionals need to undergo years of education at university. What you also need to know is that after graduating, they aren't just set free! ",
    "v These professionals need to get certified from authorized institutions to prove that they truly have the ability to help with mental health problems. The exams are also conducted periodically every few years to ensure their competencies continue to be developed. ",
    "jump Scene-168",
  ],

  "Scene-168": [
    "show scene scene-why-pro3",
    "v This is also related to the second reason for seeking professional help. During their education, these professionals learn from theories and scientific research about mental health problems. They've also learned to practice these scientific skills so they can provide the best mental health care! Periodic certification exams also require them to keep learning about the latest research in mental health. ",
    "jump Scene-169",
  ],

  "Scene-169": [
    "show scene scene-why-pro4",
    "v The third reason can make you feel 100% safe about getting professional help — they are sworn in and supervised to follow professional codes of ethics. In their oath, they must ensure that every action they take is for your well-being. ",
    "v Sensitive matters like the confidentiality of your problems will be well protected by these professionals. They won't judge you negatively or do other unprofessional things. If they don't respect your well-being, their license to practice professionally could be at risk!",
    "jump Scene-170",
  ],

  "Scene-170": [
    "show scene scene-why-pro5",
    "v With all these guarantees, the fourth reason for seeking professional help is that your mental health will improve! From a reduction in mental health symptoms, to better functioning at school and in relationships, to preventing other problems from arising — all of which will ultimately improve your quality of life!",
    "jump Scene-171",
  ],

  "Scene-171": [
    "show scene scene-2",
    "v After getting to know these professionals, do you feel that all mental health problems require professional help?",
    {
      Choice: {
        Dialog:
          "All mental health problems must receive professional help.",
        "I agree with the statement below": {
          Text: "I agree with the statement below",
          Do: "jump Scene-171-Salah",
        },
        "I disagree with the statement below": {
          Text: "I disagree with the statement below",
          Do: "jump Scene-171-Benar",
        },
      },
    },
  ],

  "Scene-171-Benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "v The right answer to a tough question. I'm so happy! Of course we want to make sure all mental health problems get the best help.",
    "jump Scene-172",
  ],

  "Scene-171-Salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "v Hmmmmm. Unfortunately your answer isn't quite right, but that's okay. Maybe you care so much about mental health problems that you want to ensure the best help is always available.",
    "jump Scene-172",
  ],

  "Scene-172": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-1",
    "v However, sometimes the best help can be found by learning to overcome problems and asking those closest to us for support. Professionals are generally needed when: ",
    "v 1. The problem is interfering with daily life, such as school activities and social relationships.\n2. It causes persistent negative feelings over a long period of time.\n3. It endangers yourself or others.",
    "v Another reason why not all mental health problems require professional help is the limited number of professionals available. ",
    "v Currently, there are only about 3,000 clinical psychologists and 1,000 psychiatrists in Indonesia. Remember the mental health triangle we discussed earlier!",
    "jump Scene-173",
  ],

  "Scene-173": [
    "show scene scene-mental-condition-terms",
    "v Before we continue… Let's review the proper language for mental conditions!",
    "jump Scene-174",
  ],

  "Scene-174": [
    "show scene scene-checklist1-1",
    "v Let's start with behaviors that are difficult… but are actually quite \"normal\" in everyday life, which can never be completely free from pressure or stress. These include:",
    "jump Scene-175",
  ],

  "Scene-175": [
    "show scene scene-checklist1-2",
    "v Acting rude, doing careless things, feeling lazy, withdrawing, being overly sensitive, feeling ashamed, being annoying, rebelling, being overly emotional, and challenging others.",
    "jump Scene-176",
  ],

  "Scene-176": [
    "show scene scene-checklist1-3",
    "v These behaviors generally occur as reactions to stress in life. So it's perfectly normal for someone to show these behaviors when they have relationship problems with family or friends, are grieving the loss of a loved one, are struggling academically with low grades, are adapting to a new environment like switching schools, or are experiencing physical pain that interferes with daily activities.",
    "jump Scene-177",
  ],

  "Scene-177": [
    "show scene scene-checklist1-4",
    "v The best response you can give if you or someone around you shows these behaviors is to not overreact. Remember, successfully coping with everyday stress is the source of resilience — or mental strength! What's needed when facing stress is supportive encouragement from those around you by being a good listener and offering help without forcing advice.",
    "v When the problem being faced is very difficult, it's a good idea to ask for help from someone more experienced. From schoolmates who can help with academic or social difficulties, to parents who can share their experiences, to school counselors who are ready to help solve problems. Professional help is needed when these behaviors are shown continuously over a long period of time.",
    "jump Scene-178",
  ],

  "Scene-178": [
    "show scene scene-checklist2",
    "v So how do we tell the difference between a \"bad day\" and a more serious potential mental health problem? In our previous session, we discussed the symptoms of mental disorders. The goal is so that when these symptoms occur in ourselves or those around us, we act quickly to ensure professional help is obtained!",
    "v For example, professional help is needed if the following things are felt almost every day for several weeks in a row.",
    "v If you remember, in our previous session we discussed that these are part of the symptoms of depression. That doesn't mean you can diagnose yourself with a mental disorder. Remember that mental disorders can only be diagnosed by psychologists and psychiatrists. ",
    "v So, if these symptoms are experienced, seek professional help right away. The sooner professional help is obtained, the better the treatment process can be. You can also ask a counselor for help if you're unsure or having difficulty accessing professional help.",
    "jump Scene-179",
  ],

  "Scene-179": [
    "show scene scene-2",
    "v If the previous list of behaviors are symptoms to watch out for, the list we'll discuss next is a SERIOUS WARNING that requires immediate professional help. ",
    "v REMEMBER, the sooner it's treated, the better the outcome will be and the better your mental health will be in the future. ",
    "jump Scene-180",
  ],

  "Scene-180": [
    "show scene scene-checklist3",
    "v Pay close attention and immediately contact a professional if you feel or see the following abnormal behaviors that can seriously affect yourself or others. So, how do you get professional help? We'll discuss that right after this! ",
    "jump Scene-181",
  ],

  "Scene-181": [
    "show scene scene-school-counselor-1",
    "v In Indonesia, every school is required to have a counselor. So you can be sure your school has one too. Make sure you know who the counselor at your school is and how to ask for their help. Even if you don't need help right now… ",
    "v …you can get to know the counselor at your school first so that later you'll feel more comfortable asking for help. Counselors cannot provide diagnoses or therapy for mental disorders, but when psychologists and psychiatrists are needed, your school counselor can help ensure students get professional help!",
    "jump Scene-182",
  ],

  "Scene-182": [
    "show scene scene-school-counselor-2",
    "v There are also free professional services outside of school! For example, the Sejiwa Service provided by the Indonesian Government together with the Indonesian Psychological Association (HIMPSI), or the Free Online Counseling Assistance from the Indonesian Clinical Psychologists Association. Make sure you follow the social media accounts of both organizations to get the latest information about available free psychology services. ",
    "jump Scene-183",
  ],

  "Scene-183": [
    "show scene scene-school-counselor-3",
    "v To find a clinical psychologist near you, you can visit the Indonesian Clinical Psychologists Association website at ipkindonesia.or.id and look for the 'Find a Clinical Psychologist' menu. ",
    "v After that, you'll be directed to the clinical psychologists directory. In this menu, you can enter your city and click \"search for psychologist.\" The website will display a list of clinical psychologists in your city, complete with their specialties and practice addresses.",
    "jump Scene-184",
  ],

  "Scene-184": [
    "show scene scene-school-counselor-4",
    "v Finding a psychiatrist near you is just as easy! Just visit the Indonesian Psychiatric Association website at pdskji.org. ",
    "v On the website, on the right side there's a \"Find a Doctor\" column where you can enter your city and click \"search.\" The website will display a list of psychiatrists near you and their practice locations!",
    "jump Scene-185",
  ],

  "Scene-185": [
    "show scene scene-diceritain-1",
    "v With today's technology, you can get counseling services with a psychologist online! How? There are two ways you can do this. The first way is to visit the Instagram @diceritain.id and click the link in the bio. You'll then get a \"psychologist diceritain\" menu and be directed to a registration form for a counseling session with a psychologist. ",
    "jump Scene-186",
  ],

  "Scene-186": [
    "show scene scene-diceritain-2",
    "v The second way is to visit the website diceritain.id and go to the 'psychologist counseling service' product menu. After that, you just need to schedule a counseling session! ",
    "jump Scene-187",
  ],

  "Scene-187": [
    "show scene scene-diceritain-3",
    "v If you're still hesitant to contact a professional, you can first share your problems with a Diceritain peer counselor! It's super easy — just download the Diceritain app from the Google Play Store. After registering, you'll be connected with trained peer counselors who are ready to be a comfortable and trustworthy listener! ",
    "jump Scene-188",
  ],

  "Scene-188": [
    "show scene scene-checklist-large",
    "v Okay! We've reached the end of this training session. To make sure you choose the right actions to address mental health problems, let's create an action plan to handle situations similar to the checklists we've discussed!",
    "jump Scene-189",
  ],

  "Scene-189": [
    "show scene scene-2",
    "v Imagine… ",
    {
      Choice: {
        Dialog:
          "After receiving their mid-semester math exam results, your friend gets a low grade and becomes angry whenever someone brings up the score. What your friend needs is…",
        "A supportive friend who offers help": {
          Text: "A supportive friend who offers help",
          Do: "jump Scene-189-Benar",
        },
        "Professional help": {
          Text: "Professional help",
          Do: "jump Scene-189-Salah",
        },
      },
    },
  ],

  "Scene-189-Benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "v Yep. The right action! In everyday life, it's not uncommon to find situations that put pressure on us — one of them is academic difficulty like getting a low grade. ",
    "jump Scene-190",
  ],

  "Scene-189-Salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "v Hmmmm, your choice isn't quite right. In everyday life, it's not uncommon to find situations that put pressure on us — one of them is academic difficulty like getting a low grade. ",
    "jump Scene-190",
  ],

  "Scene-190": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-checklist1-4",
    "v Your friend's angry behavior when discussing math grades is a normal reaction when feeling pressured, even though… it does make things difficult for those around them. Problems like this generally don't need professional help, unless they persist for a long time. ",
    "v What your friend needs is a supportive friend who doesn't judge them! Try offering help like studying together if you understand the material they struggled with, but don't force them to do anything. ",
    "v Just listen and offer help so they don't feel alone. After successfully solving this problem, your friend will become stronger at handling similar pressure. For example, they might learn a better way to study math.",
    "jump Scene-191",
  ],

  "Scene-191": [
    "show scene scene-2",
    "v Imagine… ",
    {
      Choice: {
        Dialog:
          "Your friend tells you they feel tired because they're constantly being chased by a ruthless villain with superpowers. Sometimes they mention wanting to end their life. What your friend needs is…",
        "A supportive friend who offers help": {
          Text: "A supportive friend who offers help",
          Do: "jump Scene-191-Salah",
        },
        "Professional help": {
          Text: "Professional help",
          Do: "jump Scene-191-Benar",
        },
      },
    },
  ],

  "Scene-191-Benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "v Yes, you chose the right action! Your friend's behavior shows a problem with distinguishing reality, which can disrupt their daily life and even endanger their safety.",
    "jump Scene-192-Benar",
  ],

  "Scene-191-Salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "v You chose the wrong action and it could put a life at risk!",
    "jump Scene-192-Salah",
  ],

  "Scene-192-Benar": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-checklist3",
    "v In this kind of situation, you need to make sure they get professional help. Use your knowledge about how to access professional help that we discussed earlier.",
    "v Remember, the sooner problems like this are treated, the better the mental health condition we can expect in the future! Never agree to keep suicidal thoughts a secret! Tell a parent or school counselor if your friend shares thoughts of wanting to end their life.",
    "jump Scene-193",
  ],

  "Scene-192-Salah": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-checklist3",
    "v Your friend's behavior shows a problem with distinguishing reality, which can disrupt their daily life and even endanger their safety. In this kind of situation, you need to make sure they get professional help. ",
    "v Use your knowledge about how to access professional help that we discussed earlier. Remember, the sooner problems like this are treated, the better the mental health condition we can expect in the future! Never agree to keep suicidal thoughts a secret! Tell a parent or school counselor if your friend shares thoughts of wanting to end their life.",
    "jump Scene-193",
  ],

  "Scene-193": [
    "show scene scene-1",
    "v You've completed the Mental Health Warriors training session! In this session, you'll earn 2 badges. ",
    "jump Scene-194",
  ],

  "Scene-194": [
    "show scene scene-badge-acquired-chapter-4",
    "v The first badge signifies that you've learned why professional help from psychologists, psychiatrists, and counselors is needed, and when they're needed.",
    "v The second badge signifies that you now know how to get help from professionals. From school counselors, to free psychological services, to finding psychologists and psychiatrists online.",
    "jump Scene-195",
  ],

  "Scene-195": [
    "show scene scene-badge-list-chapter-4",
    "v Remember! No matter how knowledgeable someone is about mental health, there are times when they need help from others. ",
    "v Asking for help doesn't mean weakness — it means wisdom and courage to choose the right steps in maintaining mental health. ",
    "jump Scene-196",
  ],

  "Scene-196": [
    "show scene scene-2",
    "v Were you able to answer the last two action plans correctly?",
    "v If you weren't able to answer them correctly, I recommend you repeat this training session because it's very important for proper mental health problem handling.",
    "v Remember! No matter how knowledgeable someone is about mental health, there are times when they need help from others. ",
    "v Asking for help doesn't mean weakness — it means wisdom and courage to choose the right steps in maintaining mental health.",
    "v See you in the next training session, which will be our last!",
    "jump Loading-5",
  ],
};

// Make globally accessible for index.js merging
window.Chapter4 = Chapter4;
