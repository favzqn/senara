/**
 * Chapter 5: Mental Health Literacy in Action
 * 
 * Learning Outcomes:
 * - Applying all the knowledge learned
 * - Simulating real-life situations
 * - Preparing to become a Mental Health Hero
 * 
 * Duration: ~60 minutes
 * Status: Placeholder - extract from original file when ready
 */

/* global monogatari */

const Chapter5 = {
  "Scene-197": [
    "show scene scene-sit-chapter-5",
    "v Try to imagine someone with a mental disorder… go ahead, close your eyes and imagine.",
    "v What kind of person comes to mind?",
    "v When asked to imagine someone with a mental disorder, is what comes to mind a dangerous person who often commits violence?",
    "jump Scene-198",
  ],

  "Scene-198": [
    "show scene scene-sit-chapter-5-2",
    "v When asked to imagine someone with a mental disorder, is what comes to mind a dangerous person who often commits violence?",
    "jump Scene-199",
  ],

  "Scene-199": [
    "show scene scene-sit-chapter-5",
    "v If so, that image is actually not very accurate.",
    "jump Scene-200",
  ],

  "Scene-200": [
    "show scene scene-media-perception",
    "v Many films, like Joker, often portray people with mental disorders as violent. The same thing happens in the mass media. Depictions of people with mental disorders committing violence are reported more often to attract readers' attention.",
    "v In reality, people with mental disorders are actually more likely to become victims of violence. As we've discussed, there is a lot of stigma and discrimination against people with mental disorders, and practices like shackling for mental illness still occur in Indonesia.",
    "v In the films and news we consume, it's also often told that there's a specific cause or event that leads to mental health problems.",
    "v As we've discussed: mental disorders have complex biological, psychological, and social factors. These inaccurate portrayals can be dangerous because they can make us underestimate mental health problems and not take care of their factors properly.",
    "v Another dangerous portrayal about mental health is the belief that mental disorders can easily go away on their own. In films, this is often depicted through the \"power of love.\" ",
    "v But… we've already discussed the importance of professional help in treating mental disorders. These inaccurate portrayals can make people hesitant to seek professional help when facing mental health problems.",
    "jump Scene-201",
  ],

  "Scene-201": [
    "show scene scene-sit-chapter-5-3",
    "v There are actually many more inaccurate portrayals of mental health in the media. The conclusion is, Aspiring Mental Health Heroes need to be smart about filtering mental health information in the media. ",
    "jump Scene-202",
  ],

  "Scene-202": [
    "show scene scene-sit-chapter-5",
    "v This training session is our last one. Yes, this is just a brief part of your adventure as a Mental Health Hero. You need to continuously update your knowledge about mental health. The media can be your main weapon, but it can also be a double-edged sword if you're not good at sorting through the mental health information presented in the media.",
    "jump Scene-203",
  ],

  "Scene-203": [
    "show scene scene-beautiful-mind",
    "v Discussions about mental health in the media can actually have a positive impact. The film A Beautiful Mind, for example, received a lot of praise from mental health professionals for depicting the importance of professional help and social support in treating mental disorders, leading to the main character, John Nash, who had schizophrenia, winning a Nobel Prize in Mathematics.",
    "jump Scene-204",
  ],

  "Scene-204": [
    "show scene scene-sit-chapter-5",
    "v Mental health discussions in the media can generally increase our awareness of the importance of mental health. ",
    "jump Scene-205",
  ],

  "Scene-205": [
    "show scene scene-mental-health-on-social-media",
    "v As of April 2022, there were more than 38 million posts on Instagram with the hashtag #MentalHealth and 32 billion views for the hashtag #MentalHealth on TikTok. However, the question is: is all the information available in these media accurate?",
    "v Both of these media platforms can connect professionals with the public to discuss mental health problems. Unfortunately, professionals can make mistakes too — after all, no one is perfect.",
    "jump Scene-206",
  ],

  "Scene-206": [
    "show scene scene-1",
    "v Let alone content created by the general public. It's not uncommon for content on media to present inaccurate information about mental health, downplay mental disorders, or not recommend professional help for mental health problems.",
    "v There are three simple steps you can apply to filter the mental health information you consume so it's truly accurate and useful. ",
    "jump Scene-207",
  ],

  "Scene-207": [
    "show scene scene-screening-info",
    "v Both of these media platforms can connect professionals with the public to discuss mental health problems. Unfortunately, professionals can make mistakes too — after all, no one is perfect.",
    "jump Scene-208",
  ],

  "Scene-208": [
    "show scene scene-screening-info-2",
    "v The second step is to check whether the information provided is science-based and supported by professionals.",
    "jump Scene-209",
  ],

  "Scene-209": [
    "show scene scene-screening-info-3",
    "v The third step is that if you feel doubt or risk of harm, consult a psychologist or psychiatrist.",
    "jump Scene-210",
  ],

  "Scene-210": [
    "show scene scene-action-plan",
    "v To help you better understand how to apply the 3 steps for filtering mental health information, let's do an action plan simulation to see which behaviors align with those 3 steps!",
    "jump Scene-211",
  ],

  "Scene-211": [
    "show scene scene-2",
    {
      Choice: {
        Dialog:
          "When you want to learn about the symptoms of anxiety disorder, you search on Google. From the results you get, which information should you open?",
        "Anything. All information is the same": {
          Text: "Anything. All information is the same",
          Do: "jump Scene-211-Salah",
        },
        "An article from a mental health organization": {
          Text: "An article from a mental health organization",
          Do: "jump Scene-211-Benar",
        },
      },
    },
  ],

  "Scene-211-Benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "v The right choice for filtering mental health information. When searching for the word \"Anxiety\" on Google, you'll find more than 26 million results. Of course, not all of that information is truly accurate.",
    "jump Scene-212",
  ],

  "Scene-211-Salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "v Hmmm, you didn't apply the steps for filtering mental health information. When searching for the word \"Anxiety\" on Google, you'll find more than 26 million results. Of course, not all of that information is truly accurate. ",
    "jump Scene-212",
  ],

  "Scene-212": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-organization",
    "v When searching for information, it's highly recommended to prioritize health information from mental health organizations or professionals. ",
    "v You can also combine your search keywords with the name of an organization or mental health terms. For example, when searching for information about anxiety, you can use keywords like \"PDSKJI Anxiety\" or \"Psychologist Anxiety\" so that the information you get is truly well-filtered because it's supervised by authorized institutions.",
    "v Some organizations shown on screen are institutions that focus on mental health. From PDSKJI (the Indonesian Psychiatric Association), to the Indonesian Psychological Association, to the Indonesian Clinical Psychologists Association. ",
    "v They provide a wealth of mental health information that you can access for free. From articles, videos, and audio, to techniques for maintaining mental health.",
    "jump Scene-213",
  ],

  "Scene-213": [
    "show scene scene-diceritain-chapter-5",
    "v In addition to these organizations, you can also prioritize information provided by professional mental health service providers like Diceritain! Mental health service providers generally employ trained people to disseminate information about mental health.",
    "jump Scene-214",
  ],

  "Scene-214": [
    "show scene scene-book",
    "v Of course, you should also prioritize information written directly or reviewed by professionals such as psychologists, psychiatrists, and mental health researchers. Besides writing articles or creating content on the internet, professionals also usually write mental health books.",
    "jump Scene-215",
  ],

  "Scene-215": [
    "show scene scene-workshop",
    "v Besides consuming content from professionals, you can also learn directly from mental health professionals through activities like workshops, training sessions, and webinars. To keep getting the latest information about their activities, follow the social media accounts of the relevant parties we've discussed. ",
    "v By the way, you can invite Diceritain to come talk about mental health at your school! Just follow and contact the Diceritain Instagram at @diceritain.id!",
    "jump Scene-216",
  ],

  "Scene-216": [
    "show scene scene-2",
    {
      Choice: {
        Dialog:
          "On Instagram, you find an offer for \"inner child\" therapy for depression from someone with a psychology bachelor's degree. The offer catches your attention because there's a good testimonial from a previous client. In your opinion…",
        "You need to check the accuracy of the information from the service offered because it doesn't show scientific validity":
          {
            Text: "You need to check the accuracy of the information from the service offered because it doesn't show scientific validity",
            Do: "jump Scene-216-Benar",
          },
        "The testimonial from a previous client proves that the therapy can definitely help others too":
          {
            Text: "The testimonial from a previous client proves that the therapy can definitely help others too",
            Do: "jump Scene-216-Salah",
          },
      },
    },
  ],

  "Scene-216-Benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "v Good job! Your choice aligns with the steps for filtering mental health information.",
    "jump Scene-217",
  ],

  "Scene-216-Salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "v Hmmm, your choice doesn't align with the steps for filtering mental health information. ",
    "jump Scene-217",
  ],

  "Scene-217": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-1",
    "v The psychology bachelor's degree of the person offering 'inner child therapy' might make them seem like an expert. But! You need to remember that therapy for mental disorders like depression can only be provided by psychologists and psychiatrists!",
    "jump Scene-218",
  ],

  "Scene-218": [
    "show scene scene-fact-checked",
    "v If you search for \"inner child therapy,\" you won't find satisfying results because \"inner child\" is one of the concepts that hasn't been extensively researched, so its use is often misused — let alone used as therapy. ",
    "v Information can be considered scientific when it has been tested many times and has satisfactory results. The tests also need to be conducted on a large number of people, so testimonials from a few people cannot guarantee that information can be called scientific.",
    "jump Scene-219",
  ],

  "Scene-219": [
    "show scene scene-2",
    {
      Choice: {
        Dialog:
          "You find a TikTok that explains the symptoms of depressive disorder. You feel that the symptoms described match what you're experiencing. What you can do is…",
        "Feel 100% certain that you're experiencing depressive disorder": {
          Text: "Feel 100% certain that you're experiencing depressive disorder",
          Do: "jump Scene-219-Salah",
        },
        "Consult a psychologist about the symptoms you're experiencing": {
          Text: "Consult a psychologist about the symptoms you're experiencing",
          Do: "jump Scene-219-Benar",
        },
      },
    },
  ],

  "Scene-219-Benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "v You successfully chose the safer option!",
    "jump Scene-220",
  ],

  "Scene-219-Salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "v Your choice could put your mental health at risk!",
    "jump Scene-220",
  ],

  "Scene-220": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-diagnose",
    "v First of all, the information about depression symptoms in that TikTok may not match the literature used by professionals, such as the Diagnostic and Statistical Manual of Mental Disorders or the Indonesian Guidelines for Classification and Diagnosis of Mental Disorders. ",
    "v Even if the information is accurate, you still can't diagnose yourself with a mental disorder. ",
    "jump Scene-221",
  ],

  "Scene-221": [
    "show scene scene-1",
    "v In our previous training session, we discussed the symptoms of depression, and in that session I always emphasized that interpretation or diagnosis of mental disorders can only be given by psychologists or psychiatrists. ",
    "v We've also agreed to always emphasize the importance of consulting professionals like psychologists and psychiatrists for the best treatment when experiencing symptoms of mental disorders!",
    "jump Scene-222",
  ],

  "Scene-222": [
    "show scene scene-alternatives",
    "v If you're having difficulty getting help from a psychologist or psychiatrist, you can use other mental health solutions like Peer Counselors, which you can access through the Diceritain app available on the Play Store. ",
    "jump Scene-223",
  ],

  "Scene-223": [
    "show scene scene-1",
    "v In addition, there are other free services as well, such as school counselors and government services that we discussed earlier.",
    "jump Scene-224",
  ],

  "Scene-224": [
    "show scene scene-action-plan",
    "v How did your simulation go? Were you able to choose the right actions in all the simulations? ",
    "jump Scene-225",
  ],

  "Scene-225": [
    "show scene scene-badge-center",
    "v Before you take the Mental Health Hero Test, I want to review what the badges you've collected mean. The 6 badges you've collected are symbols that represent the components of mental health literacy. ",
    "jump Scene-226",
  ],

  "Scene-226": [
    "show scene scene-badge-list-chapter-5-2",
    "v The first badge symbolizes that you understand the meaning of mental health and mental disorders.",
    "v The second badge symbolizes that you can identify the factors of mental health.",
    "jump Scene-227",
  ],

  "Scene-227": [
    "show scene scene-badge-list-chapter-5-3",
    "v The third badge symbolizes that you have good self-help strategies for mental health.",
    "jump Scene-228",
  ],

  "Scene-228": [
    "show scene scene-badge-list-chapter-5-4",
    "v The fourth badge symbolizes that you understand the importance of professional mental health help.",
    "v The fifth badge symbolizes that you know how to access professional help near you.",
    "jump Scene-229",
  ],

  "Scene-229": [
    "show scene scene-badge-list-chapter-5",
    "v The sixth badge symbolizes that you have the ability to find accurate mental health information.",
    "jump End",
  ],

  End: [
    "show scene scene-2",
    "v So, do you feel ready to be a Mental Health Hero based on the badges you've earned? The Mental Health Hero Test will assess all of these abilities. ",
    "v If you do well, you'll receive a certificate indicating that you've completed the entire Aspiring Mental Health Hero training program successfully.",
    "v If you feel unsure about your abilities, you can repeat all the training sessions you've completed. Remember, I'll always be here to accompany you as you train to become a Mental Health Hero.",
    "v If you feel confident to take the Mental Health Hero Test, I wish you the best of luck! Both on the test, and in your journey to maintain your own mental health and that of other teenagers around you as a Mental Health Hero!",
    "end",
  ],
};

// Make globally accessible for index.js merging
window.Chapter5 = Chapter5;
