/**
 * Chapter 2: The Enemies of Mental Health Heroes
 * 
 * Learning Outcomes:
 * - Understanding types of mental disorders
 * - Recognizing factors that cause mental disorders
 * - Understanding the impact of mental disorders
 * 
 * Duration: ~45 minutes
 */

/* global monogatari */

const Chapter2 = {
  "Scene-39": [
    "stop sound typewriter",
    "show scene scene-1",
    "v Oh hi there, Mental Health Hero candidate. Remember me? If not, that's okay haha. The important thing is you haven't forgotten everything you learned during your training to become a Mental Health Hero.",
    "v Let me introduce myself again. My name is Vani, and I'll be your instructor throughout your training until you officially become a Mental Health Hero.",
    "v Do you still remember the relaxation techniques we learned in the previous session? If you need to calm down first, I've got you covered right after this!",
    "jump Scene-40",
  ],

  "Scene-40": [
    "show scene scene-box-breathing",
    "v Breathe in for 4 seconds.",
    "v Hold your breath for 4 seconds.",
    "v Breathe out for 4 seconds.",
    "v Hold your breath again for 4 seconds.",
    "jump Scene-41",
  ],

  "Scene-41": [
    "show scene scene-progressive-muscle",
    "v Breathe in, then clench both fists for 7 to 10 seconds. As hard as you can until they tremble, but not so hard it hurts.",
    "v Breathe out and focus on the relaxing sensation that slowly spreads through both hands for about 10 to 20 seconds.",
    "jump Scene-42",
  ],

  "Scene-42": [
    "show scene scene-1",
    "v Okay! After doing the relaxation techniques, hopefully your body and mind feel more ready to train!",
    "v Today, I'm going to help you get to know who the enemies of Mental Health Heroes really are.",
    "v Before that, let's first see what you already know about mental health.",
    "jump Scene-43",
  ],

  "Scene-43": [
    "show scene scene-2",
    "v Listen carefully to the following statement and decide whether it's true or false…",
    {
      Choice: {
        Dialog:
          "A person who doesn't have a mental disorder is the same as a person who has mental health.",
        "The statement below is true": {
          Text: "The statement below is true",
          Do: "jump Scene-45",
        },
        "The statement below is false": {
          Text: "The statement below is false",
          Do: "jump Scene-44",
        },
      },
    },
  ],

  "Scene-44": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "v Great! Your understanding is spot on. Mental health is more than just the absence of mental disorders.",
    "jump Scene-46",
  ],

  "Scene-45": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "v Looks like you really need to pay close attention to the rest of this lesson, because mental health is much more than just the absence of mental disorders.",
    "jump Scene-46",
  ],

  "Scene-46": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-mental-health-explanation",
    "v According to the World Health Organization, mental health refers to a state of well-being in which an individual realizes their own abilities, can cope with the normal stresses of life, can work productively and contribute to their community.",
    "jump Scene-47",
  ],

  "Scene-47": [
    "show scene scene-mental-health-explanation-highlighted",
    'v Let\'s look at the key phrase from this definition of mental health: "able to cope with the normal stresses of life."',
    "v A mentally healthy person doesn't mean they never have negative or unpleasant feelings. Sometimes negative feelings actually help us deal with life's pressures.",
    "jump Scene-48",
  ],

  "Scene-48": [
    "show scene scene-4",
    "v For example, you've probably felt scared or pressured about facing an exam whose material you haven't mastered yet…",
    "v Those feelings are completely normal because they make you realize that you need to study harder, which ultimately helps you do better on the exam…",
    "v In this case, you're coping with normal life pressures like school exams.",
    "jump Scene-49",
  ],

  "Scene-49": [
    "show scene scene-mental-health-explanation-flow",
    "v The key phrase we highlighted is connected to the other components of mental health. To cope with pressure, it's important to recognize the abilities we have.",
    "v In the example of facing a challenging school exam, we need to realize that no matter how hard the material is, if we study diligently using the right strategies, we can do well on the exam.",
    "v Not only that, we also have the ability to ask a friend who's better at the subject for help, or to ask the teacher for more guidance.",
    "jump Scene-50",
  ],

  "Scene-50": [
    "show scene scene-4",
    "v By constantly facing challenges, we become stronger and better people. Think back to times when you got good grades on exams you previously thought were really hard…",
    "v After successfully facing that exam, you realized that you could actually do those difficult things if you worked hard and used good study strategies.",
    "jump Scene-51",
  ],

  "Scene-51": [
    "show scene scene-5-plus-5",
    "v In kindergarten, you struggled with 5 + 5…",
    "jump Scene-52",
  ],

  "Scene-52": [
    "show scene scene-5x5",
    "v In elementary school, you struggled with 5 x 5…",
    "jump Scene-53",
  ],

  "Scene-53": [
    "show scene scene-5-square",
    "v In middle school, you struggled with 5 to the power of 5, and so on…",
    "jump Scene-54",
  ],

  "Scene-54": [
    "show scene scene-4",
    "v Challenges will keep coming, but you keep facing them. Over time, you might even be able to calculate complex things like a mathematician or an engineer contributing to society.",
    "v In fact, even now, if you've already overcome a challenge, you can help younger students or friends facing similar ones. Like if they can't figure out 5 to the power of 5, for example.",
    "jump Scene-55",
  ],

  "Scene-55": [
    "show scene scene-2",
    "v I'm sure your understanding of mental health is getting better now. Let's test your understanding of mental disorders.",
    "v Listen carefully to the following statement and decide whether it's true or false.",
    {
      Choice: {
        Dialog:
          "We can determine if we have a mental disorder by looking up its symptoms on the Internet and matching them with what we feel.",
        "The statement below is true": {
          Text: "The statement below is true",
          Do: "jump Scene-57",
        },
        "The statement below is false": {
          Text: "The statement below is false",
          Do: "jump Scene-56",
        },
      },
    },
  ],

  "Scene-56": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "v I'm really happy with your answer.",
    "jump Scene-58",
  ],

  "Scene-57": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "v I need to be firm here. Your answer is not correct.",
    "jump Scene-58",
  ],

  "Scene-58": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-mental-illness",
    "v Mental disorders are the main enemy of Mental Health Heroes and need to be taken seriously. Mental disorders can ONLY be diagnosed or determined by professionals like psychologists and psychiatrists.",
    "v Why? Because they're so complex that they need to be handled directly by professionals who have studied extensive research on mental disorders. Look at this definition of mental disorders from the American Psychiatric Association.",
    "v A mental disorder is a syndrome characterized by clinically significant disturbances in cognition, emotion regulation, and behavior that reflect a dysfunction in the psychological, biological, or developmental processes underlying mental functioning.",
    "jump Scene-59",
  ],

  "Scene-59": [
    "show scene scene-mental-illness-2",
    "v Just like the definition of mental health, there are some key phrases we need to pay attention to in the definition of mental disorders.",
    "v The first one is \"a syndrome characterized by clinically significant disturbances.\" A syndrome is a collection of symptoms that appear together.",
    "v In mental disorders, this syndrome causes disruptions that seriously affect someone's clinical or medical condition.",
    "v These disruptions can affect various aspects. From cognition or thinking, like delusions or beliefs that are completely out of touch with reality, thoughts of ending one's life, or the belief that you're helpless and life is meaningless.",
    "v In terms of emotions, mental disorders can cause severe and/or prolonged feelings of depression and anxiety. In terms of behavior, they can lead to withdrawing from social relationships, refusing to go to school, or even not taking care of yourself.",
    "v The impacts we just discussed relate to the second key phrase: \"reflecting dysfunction,\" or the inability for various aspects of yourself and your life to function normally.",
    "v If not handled properly, mental disorders can prevent someone from carrying out social activities and other life activities, like struggling to attend school or work.",
    "jump Scene-60",
  ],

  "Scene-60": [
    "show scene scene-mental-illness-age",
    "v To help us better understand what mental disorders mean, let's discuss some examples. According to the American Psychiatric Association in the Diagnostic and Statistical Manual of Mental Disorders, symptoms of 70% of mental disorders can be detected before the age of 25.",
    "v The first example is anxiety disorders, which are a group of mental disorders characterized by extremely intense feelings of anxiety and fear that happen constantly. Other symptoms include shortness of breath, a very fast heartbeat, and severe dizziness. Some types of anxiety disorders are generalized anxiety disorder, panic disorder, and social anxiety disorder.",
    "v Then there are psychotic disorders, which are a group of disorders characterized by the inability to distinguish what's real from what's not, such as delusions and hallucinations. As a result, people with psychosis have difficulty doing everyday activities. An example of a psychotic disorder is schizophrenia, which affects about 1% of the population, or 1 in 100 people.",
    "v Another type is eating disorders, which are marked by persistent disturbances in eating patterns that harm both physical and mental health. One example is Anorexia Nervosa, where someone excessively tries to control their weight, feels they have a terrible appearance or body shape, and is extremely afraid of gaining weight, so they refuse to maintain a normal weight.",
    "v As a result, people with Anorexia refuse to eat or try to get rid of what they eat by throwing up or misusing laxatives. Another example of an eating disorder is Bulimia Nervosa, where someone regularly binge-eats — eating large amounts in a short time — then tries to prevent weight gain through behaviors like forcing themselves to throw up or using laxatives.",
    "v In the next session, we'll do a deep dive into depression, which is part of mood disorders — where someone's mood doesn't match the situation they're in, making it hard to function or do activities normally.",
    "v People with mood disorders can experience negative moods like extreme sadness, extremely positive moods, or alternating between extreme negative and positive moods.",
    "jump Scene-61",
  ],

  "Scene-61": [
    "show scene scene-2",
    "v Before we continue discussing mental disorders, I want to find out if you have the right perspective about people with mental disorders. Answer my question…",
    {
      Choice: {
        Dialog:
          "Do you think people with mental disorders can succeed in life and contribute to society?",
        "Yes, of course they can!": {
          Text: "Yes, of course they can!",
          Do: "jump Scene-62",
        },
        "Probably not…": {
          Text: "Probably not…",
          Do: "jump Scene-63",
        },
      },
    },
  ],

  "Scene-62": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "v You have a great perspective on people with mental disorders!",
    "jump Scene-64",
  ],

  "Scene-63": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "v Hmm, looks like you have a somewhat inaccurate view of people with mental disorders.",
    "jump Scene-64",
  ],

  "Scene-64": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-4",
    "v Although mental disorders can make everyday life harder, it doesn't mean people with them can't succeed and contribute to society.",
    "jump Scene-65",
  ],

  "Scene-65": [
    "show scene scene-mental-illness-celebrity",
    "v There are many famous people who have fought mental disorders in their lives. Try to guess who these people in the picture are.",
    "jump Scene-66",
  ],

  "Scene-66": [
    "show scene scene-mental-illness-celebrity-1",
    "v The first person is one of the most influential physicists and mathematicians in the world, famous for his inspiration after watching an apple fall.",
    "jump Scene-67",
  ],

  "Scene-67": [
    "show scene scene-mental-illness-celebrity-2",
    "v The second person is one of the greatest football players in the world, from England, famous for his curving kick.",
    "jump Scene-68",
  ],

  "Scene-68": [
    "show scene scene-mental-illness-celebrity",
    "v The third person is a famous singer from Canada, known for the song \"Baby, baby, baby … Ohhhh\".",
    "v Try to guess who they are and how they dealt with mental disorders. You can use the Internet to look up information about them!",
    "v These three people truly prove that a mental disorder is not the end of everything, and we can't define someone solely based on the mental disorder they experience. A mental disorder is just one part of a person's life.",
    "v Newton, who's famous for discovering gravity and is in every physics textbook, experienced symptoms of bipolar disorder and psychosis…",
    "v David Beckham has shared how he fought obsessive-compulsive disorder, or OCD…",
    "v …and Justin Bieber has a similar struggle with the depression he's experienced.",
    "v These three people prove that someone with a mental disorder can still create and succeed, especially when their mental disorder is properly treated.",
    "v You can find information on the Internet about how David Beckham and Justin Bieber have talked about the benefits of therapy sessions with mental health professionals.",
    "jump Scene-69",
  ],

  "Scene-69": [
    "show scene scene-4",
    "v So, as I mentioned before, we're going to do a deep dive into depression. Before that, I want to remind you that mental disorders can ONLY BE DIAGNOSED OR DETERMINED by professionals like psychiatrists or psychologists.",
    "jump Scene-70",
  ],

  "Scene-70": [
    "show scene scene-mental-illness-professional",
    "v So, if you feel there's a chance you might be experiencing depression, you can contact these professionals by clicking on the logos of the Indonesian Clinical Psychologists Association or the Indonesian Psychiatrists Association.",
    "jump Scene-71",
  ],

  "Scene-71": [
    "show scene scene-depression-symptoms",
    "v Depression has many symptoms because there are also many types of depressive disorders. The symptoms we'll discuss are the ones that commonly occur. Someone is considered to have depression when professionals like psychologists and psychiatrists find these symptoms persisting for at least 2 weeks and interfering with social relationships, self-care, and other activities like school and work.",
    "v The first symptom is a depressed mood, marked by feelings of sadness, emptiness, or frequent crying.",
    "v The second symptom is loss of interest in almost all activities on nearly every day.",
    "v The third symptom is changes in eating patterns, either loss of appetite or eating excessively to cope with negative feelings.",
    "v The fourth symptom is sleep disturbances, like difficulty sleeping at night or sleeping too much.",
    "v The fifth symptom is psychomotor disturbances, like difficulty coordinating body movements.",
    "v The sixth symptom is chronic fatigue, or constantly feeling tired and having no energy.",
    "v The seventh symptom is excessive feelings of worthlessness or having many failures and mistakes.",
    "v The eighth symptom is difficulty concentrating and making decisions. People with depression find it hard to think clearly.",
    "v The last symptom is thoughts about death or suicide.",
    "jump Scene-72",
  ],

  "Scene-72": [
    "show scene scene-depression-cause",
    "v There's no single specific thing that can be identified as the cause of depression. Depression can occur due to a combination of biological, psychological, and social factors.",
    "jump Scene-73",
  ],

  "Scene-73": [
    "show scene scene-depression-cause-2",
    "v From a biological perspective, there's a genetic factor, although most people who have family members with depression don't experience it themselves.",
    "v Another biological factor is hormonal imbalances, like dopamine and serotonin, which play a role in mood regulation.",
    "v Psychological factors that can impact depression include stress and thinking patterns that make someone experience negative feelings more intensely and tend to dwell on negative things. Social events like losing a loved one, losing a job, and isolation are also linked to depression.",
    "jump Scene-74",
  ],

  "Scene-74": [
    "show scene scene-depression-treatments",
    "v Depression symptoms need to be addressed directly with professionals like psychologists and psychiatrists who can help people start feeling normally again and enjoy life. Treatment from professionals can vary depending on symptoms. Here are some treatments that are commonly provided:",
    "jump Scene-75",
  ],

  "Scene-75": [
    "show scene scene-depression-treatments-2",
    "v Psychotherapy is given to help individuals understand their thoughts, actions, and to restructure their social relationships. This treatment usually takes 8 to 12 weeks to show positive effects.",
    "jump Scene-76",
  ],

  "Scene-76": [
    "show scene scene-depression-treatments-3",
    "v Medications like antidepressants can also help treat symptoms like depressed feelings, normalize sleep and eating patterns, and reduce anxiety. Depression treatment usually takes 8 to 10 weeks to show results. It's important to know that antidepressants are not addictive!",
    "jump Scene-77",
  ],

  "Scene-77": [
    "show scene scene-depression-treatments-4",
    "v Counseling generally helps individuals deal with practical problems and conflicts, and helps someone cope with depression. Lifestyle changes like regular exercise have also been found to help relieve depression symptoms.",
    "jump Scene-78",
  ],

  "Scene-78": [
    "show scene scene-depression-treatments-5",
    "v For some cases with severe depression symptoms, special hospital treatment like electroconvulsive therapy (ECT) is needed for safe and effective treatment, especially when the depression has become life-threatening, such as with suicide attempts or psychotic symptoms.",
    "jump Scene-79",
  ],

  "Scene-79": [
    "show scene scene-depression-factor",
    "v If you pay close attention to our deep dive into depression, there's one interesting thing to learn: there's no single definitive cause of depressive disorders. This also applies to other mental health conditions. Our mental health is always influenced by 3 factors: biological, psychological, and social — or simply \"bio-psycho-social\" factors.",
    "v In the case of depression, we've discussed how genetics play a role, but most people with family members who have depression don't experience it. There are also hormonal imbalances.",
    "v From this, we know that biological factors play a role, but there are also psychological factors like stressful experiences and the way someone makes sense of life events that can contribute to depression. Then, social conditions like having supportive family and friends greatly influence someone's depression.",
    "jump Scene-80",
  ],

  "Scene-80": [
    "show scene scene-depression-factor-biology-question",
    "v Let's see if you can guess… do the factors listed on the side fall under biological, psychological, or social factors?",
    {
      Choice: {
        Dialog:
          "These factors that influence mental health belong to the category of …",
        "Biological Factors": {
          Text: "Biological Factors",
          Do: "jump Scene-81-benar",
        },
        "Psychological Factors": {
          Text: "Psychological Factors",
          Do: "jump Scene-81-salah",
        },
        "Social Factors": {
          Text: "Social Factors",
          Do: "jump Scene-81-salah",
        },
      },
    },
  ],

  "Scene-81-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "v Nice, your guess is spot on! Looks like you've really been paying attention. These factors belong to the biological category, which you need to take care of for good mental health.",
    "jump Scene-82",
  ],

  "Scene-81-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "v Hmm, you need to pay more attention during our training sessions! These factors belong to the biological category, which you need to take care of for good mental health.",
    "jump Scene-82",
  ],

  "Scene-82": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-depression-factor-biology",
    "v If you have family members with mental disorders, you can consult a psychologist or psychiatrist about the possibility of experiencing the same thing due to genetic factors.",
    "v You also need to pay attention to your lifestyle, like regular exercise and eating properly with a balanced diet!",
    "v This helps keep your hormones and physical health in good shape, which also impacts your mental health.",
    "v Imagine how stressed your mind would be if you're constantly sick and don't have the energy to go about your daily activities?",
    "v Lastly, be careful with harmful substances like drugs, addictive substances like cigarettes, and other toxic substances!",
    "jump Scene-83",
  ],

  "Scene-83": [
    "show scene scene-depression-factor-psychology-question",
    "v Let's see if you can guess… do the factors listed on the side fall under biological, psychological, or social factors?",
    {
      Choice: {
        Dialog:
          "These factors that influence mental health belong to the category of …",
        "Biological Factors": {
          Text: "Biological Factors",
          Do: "jump Scene-84-salah",
        },
        "Psychological Factors": {
          Text: "Psychological Factors",
          Do: "jump Scene-84-benar",
        },
        "Social Factors": {
          Text: "Social Factors",
          Do: "jump Scene-84-salah",
        },
      },
    },
  ],

  "Scene-84-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "v Good guess! You've really been paying attention. These factors belong to the psychological category, which you need to take care of for good mental health.",
    "jump Scene-85",
  ],

  "Scene-84-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "v Looks like you need to pay closer attention to our discussion! These factors belong to the psychological category, which you need to take care of for good mental health.",
    "jump Scene-85",
  ],

  "Scene-85": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-depression-factor-psychology",
    "v Psychological factors are the ones you can control the most to improve your mental health! Being able to recognize your negative emotions and handle them well can truly change your life.",
    "v For example, we've already learned that negative emotions don't always have a bad impact. Realizing you're scared before an exam can push you to study harder. It's not just emotions — your thoughts can also affect your mental health.",
    "v It's really helpful if you believe you can face life's challenges. This will help you not give up and tackle problems effectively.",
    "v In the next Chapter, we'll learn how to effectively deal with various kinds of stress and pressure in life!",
    "jump Scene-86",
  ],

  "Scene-86": [
    "show scene scene-depression-factor-social-question",
    "v Let's see if you can guess… do the factors listed on the side fall under biological, psychological, or social factors?",
    {
      Choice: {
        Dialog:
          "These factors that influence mental health belong to the category of …",
        "Biological Factors": {
          Text: "Biological Factors",
          Do: "jump Scene-87-salah",
        },
        "Psychological Factors": {
          Text: "Psychological Factors",
          Do: "jump Scene-87-salah",
        },
        "Social Factors": {
          Text: "Social Factors",
          Do: "jump Scene-87-benar",
        },
      },
    },
  ],

  "Scene-87-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "v Good, correct guess! I'm sure you've really been paying attention. These factors belong to the social category, which you need to take care of for good mental health.",
    "jump Scene-88",
  ],

  "Scene-87-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "v Hmm, I'm not sure you've really been paying attention to our discussion. These factors belong to the social category, which you need to take care of for good mental health.",
    "jump Scene-88",
  ],

  "Scene-88": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-depression-factor-social",
    "v Social factors can also influence our mental health. Having people who support us in various aspects of life is super important for mental health.",
    "v From people you can talk to, to those you can do homework with, or even just joke around with. Take good care of your relationships with them!",
    "v Social factors aren't just about friends and family though. Mass media and social media in general can also affect your mental health.",
    "v Constantly consuming negative information and content will make you feel negative things and even feel overwhelmed. That's why you need to be mindful of your social environment, from the media you consume to the people you hang out with.",
    "jump Scene-89",
  ],

  "Scene-89": [
    "show scene scene-mental-condition",
    'v We\'ve reached the final part of today\'s training session. Before we wrap up, I want to make sure you can use what we\'ve learned effectively. Are you familiar with the sayings "knowledge is power" and "With great power comes great responsibility"?',
    "v That means with every piece of knowledge we gain, there's a responsibility to use it wisely. So, since you've learned a lot of mental health terms, you need to use them wisely.",
    "jump Scene-90",
  ],

  "Scene-90": [
    "show scene scene-mental-condition-2",
    "v For example, using the word \"depression\" to describe feelings of disappointment, sadness, or confusion is not wise. Especially if it's just for a joke. As you've learned, depression and other mental disorders are serious conditions that require professional attention, not terms to be thrown around casually.",
    "v On the other hand, you've also learned that mental distress like negative feelings is an unavoidable part of life, and mentally healthy people still feel negative things because it's normal and can actually have a positive impact by pushing someone to solve problems and learn to be better.",
    "jump Scene-91",
  ],

  "Scene-91": [
    "show scene scene-mental-condition-3",
    "v There are also mental conditions that don't show any danger but are sometimes associated with mental health problems. Being thoughtful, reflecting, and contemplating are normal behaviors, especially when someone needs to carefully consider a decision.",
    "v Some terms like \"hopelessness\" and \"grief\" refer to mental health problems that usually appear during heavy life pressures, like losing a loved one, moving to a new place, or having a serious physical illness.",
    "v Mental health problems need more attention, but they can't yet be called mental disorders. Because remember! Mental disorders can only be diagnosed or determined by professionals like psychologists and psychiatrists.",
    "jump Scene-92",
  ],

  "Scene-92": [
    "show scene scene-mental-condition-4",
    "v Using these terms correctly can help us handle various mental health conditions well. When someone is being thoughtful or contemplating, we don't overreact. When dealing with negative feelings in a state of distress, we can still stay positive and solve problems effectively.",
    "v When there's a mental health problem that needs more attention, we can ask for or give help to friends or more experienced people like parents and teachers. Most importantly, when a mental disorder like depression is suspected, we can guide them toward professional help like psychologists and psychiatrists for proper treatment.",
    "jump Scene-93",
  ],

  "Scene-93": [
    "show scene scene-mental-condition-5",
    "v Lastly, pay close attention to this triangle diagram! They come together in the triangle and aren't separated because they can be interconnected and happen at the same time! Someone with depression can still experience positive things like gratitude and happiness in certain parts of their life.",
    "jump Scene-94",
  ],

  "Scene-94": [
    "show scene scene-2",
    "v Okay, the last part of your learning adventure in this Chapter. Still about using the right terms. This time it's about the most important term you learned first: \"mental health\".",
    {
      Choice: {
        Dialog:
          "The goal of Mental Health Heroes is to help teenagers have good mental health. That means Mental Health Heroes want teenagers to …",
        "Be free from mental disorders": {
          Text: "Be free from mental disorders",
          Do: "jump Scene-95-salah",
        },
        "Thrive by recognizing their abilities, cope with normal stress, study hard, and enjoy helping others":
          {
            Text: "Thrive by recognizing their abilities, cope with normal stress, study hard, and enjoy helping others",
            Do: "jump Scene-95-benar",
          },

        "Be free from mental disorders and be happy": {
          Text: "Be free from mental disorders and be happy",
          Do: "jump Scene-95-salah",
        },
      },
    },
  ],

  "Scene-95-benar": [
    "play sound clap with volume 50",
    "show scene scene-badge-acquired-chapter-2",
    "v Congratulations, Mental Health Hero candidate! You've completed the training session in Chapter 2: The Enemies of Mental Health Heroes. So, I'm awarding you these 2 badges for your shield.",
    "jump Scene-96",
  ],

  "Scene-95-salah": [
    "show scene scene-badge-acquired-chapter-2",
    "play sound wrong with volume 50",
    "v Hmm, you answered this most important question not quite right. Even so, I still want to congratulate you for completing the training session in Chapter 2: The Enemies of Mental Health Heroes. So, I'm awarding you these 2 badges for your shield.",
    "jump Scene-96",
  ],

  "Scene-96": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-badge-list-chapter-2",
    "v The first badge shows that you've trained to understand the meaning of mental health and mental disorders. The second badge shows that you've trained to understand the factors of mental health.",
    "jump Scene-97",
  ],

  "Scene-97": [
    "show scene scene-2",
    "v If you're still not sure you deserve these two badges. If you got a lot of questions wrong or aren't confident you understand the material, feel free to repeat this Chapter's training session!",
    "v See you at our next training session, Mental Health Hero candidate!",
    "jump Loading-3",
  ],
};

// Make globally accessible for index.js merging
window.Chapter2 = Chapter2;
