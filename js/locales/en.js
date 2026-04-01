// English translations — loaded by locales.js when lang=en
const LOCALES = { en: {
    meta: {
      lang: "en",
      langName: "English",
      langNameNative: "English"
    },
    nav: {
      home: "Home",
      collection: "Stories",
      tv: "Senara TV",
      about: "About",
      approach: "Approach",
      faq: "FAQ",
      donate: "Donate",
      tagline: "Learning through stories"
    },
    contact: {
      title: "Contact Us",
      subtitle: "We’d love to hear from you.",
      intro: "Questions, feedback, or just want to say hi? We read every message and reply as soon as we can.",
      generalTitle: "General Questions",
      generalDesc: "For feedback, bug reports, ideas, or quick chats about Senara.",
      generalButton: "Send Email",
      contribTitle: "Contributors & Partnerships",
      contribDesc: "Want to volunteer or collaborate? Visit our dedicated page for opportunities.",
      contribButton: "See Opportunities",
      responseNote: "⏱️ We usually respond within 2-3 business days. For quicker answers, check our <a href='faq.html' style='color: #d97706; text-decoration: underline;'>FAQ</a>.",
      socialTitle: "Stay Connected",
      socialLinks: {
        trakteer: "🍰 Trakteer",
        instagram: "📷 Instagram"
      }
    },
    pendekatan: {
      title: "Approach & Philosophy",
      subtitle: "How we design stories and the principles guiding every creative decision.",
      whyTitle: "Why Stories?",
      whyParagraphs: [
        "Humans have shared stories for thousands of years. They're how we make sense of the world, pass down experiences, and share values across generations.",
        "When you read a story, you don't just receive information. You feel what the characters feel, weigh their choices, and reflect on what you'd do in their place.",
        "<strong>Interactive stories add another dimension:</strong> you don't just follow a journey, you shape it. That makes the experience more personal and reflective."
      ],
      researchNote: "<strong>Note:</strong> We don't claim interactive stories are the best method for all learning. Every approach has strengths and limits. We believe stories work well for topics involving empathy, reflection, and decision-making.",
      principlesTitle: "Learning Principles",
      principlesIntro: "Every Senara story follows a few key principles:",
      principles: [
        { title: "🪞 Reflection Over Instruction", body: "We don't tell readers what's 'right' or 'wrong'. Stories invite them to reflect on their own choices." },
        { title: "🌍 Relevant Context", body: "Stories mirror real situations in Indonesia. Characters face real dilemmas readers can relate to." },
        { title: "🔄 Learn Through Consequences", body: "Every choice has an impact. Readers can see outcomes without facing those risks in real life." },
        { title: "💬 Conversation Starter", body: "Our stories are built to spark discussion. Teachers and facilitators can use them as a launchpad for deeper conversation." },
        { title: "🎭 No 'Perfect' Ending", body: "Real life isn't binary. Stories show that every decision has trade-offs, and there's rarely a single 'correct' path." }
      ],
      processTitle: "How We Build Stories",
      processIntro: "Each story goes through clear steps before publishing:",
      processSteps: [
        { title: "Topic Research", body: "We study the theme across literature, expert interviews, and real stories from our community." },
        { title: "Character & Scenario Development", body: "Characters get clear backstories. Scenarios are crafted so dilemmas feel real and choices aren't predictable." },
        { title: "Writing & Branching", body: "Stories are written with multiple paths. Every choice should feel meaningful and lead to logical consequences." },
        { title: "Content Review", body: "We review for accuracy, cultural sensitivity, and potential harm. Sensitive topics involve expert consultation." },
        { title: "Testing & Iteration", body: "Early readers give feedback before launch. We revise based on their input." }
      ],
      ethicsTitle: "Ethical Guidelines",
      ethicsIntro: "Stories can influence how people think. That's why we follow these principles:",
      ethicsCommitmentTitle: "Our Commitments",
      ethicsList: [
        "No misinformation or oversimplifying complex issues",
        "Content warnings for triggering material",
        "We don't replace professional services (psychologists, counselors, etc.)",
        "Respect diverse backgrounds and experiences",
        "Be transparent about our limitations",
        "Stay open to criticism and keep improving based on feedback"
      ],
      ethicsOutro: "For mental health topics, we always include info about professional support services. Our stories raise awareness, not diagnose or provide therapy.",
      interactiveTitle: "Why Interactive?",
      interactiveIntro: "We chose the visual-novel format for a reason:",
      interactivePoints: [
        { title: "🧠 Active Engagement", body: "Making choices forces readers to think actively, not just consume content." },
        { title: "🔁 Safe Exploration", body: "Readers can try multiple paths and see consequences without real-world risks." },
        { title: "🎯 Personalization", body: "Everyone's journey is slightly different, making it more personal and relevant." },
        { title: "💭 Inner Reflection", body: "Each choice is an inner question: 'What would I do?' This sparks deep reflection." }
      ],
      limitsTitle: "Limitations",
      limitsIntro: "We're honest about what Senara can and cannot do:",
      limitsBullets: [
        "<strong>Senara isn't a replacement for formal education.</strong> Our stories complement structured learning, not replace it.",
        "<strong>Senara isn't a mental health service.</strong> Serious issues require professional support.",
        "<strong>Our stories aren't perfect.</strong> We learn as we go. If you spot something harmful or inaccurate, please tell us."
      ],
      closingParagraphs: [
        "We don't claim to have all the answers. We simply believe stories can bridge understanding between people and within ourselves.",
        "Thanks for reading. If you have questions or feedback about our approach, reach out anytime."
      ]
    },
    terms: {
      title: "Terms & Conditions",
      subtitle: "Rules for using the Senara platform.",
      lastUpdated: "📅 Last updated: December 2025",
      tocTitle: "Table of Contents",
      sections: {
        acceptance: {
          title: "1. Acceptance of Terms",
          body1: "By accessing and using Senara, you agree to these terms. If you don't agree, please do not use our services.",
          body2: "These terms apply to every visitor, user, or organization interacting with Senara."
        },
        description: {
          title: "2. Service Description",
          intro: "Senara is a visual novel-style interactive storytelling platform for literacy and learning. Our service includes:",
          list: [
            "Access to interactive stories covering multiple topics",
            "Save/load features to continue your progress",
            "Quizzes and interactive elements inside stories",
            "Supplementary information and resources for each topic"
          ],
          outro: "Senara is a <strong>nonprofit</strong> platform. Everything is free, no subscriptions or in-app purchases."
        },
        usage: {
          title: "3. Permitted Use",
          allowedTitle: "You may:",
          allowedList: [
            "Read all stories available on the site",
            "Share links to Senara stories or pages",
            "Use the stories for educational purposes (classroom, workshops, etc.)",
            "Send feedback or suggestions"
          ],
          notAllowedTitle: "You may not:",
          notAllowedList: [
            "Copy, modify, or distribute Senara content without permission",
            "Use the content commercially without written approval",
            "Attempt to access non-public systems or data",
            "Use bots/scrapers to automatically extract content",
            "Interfere with or disrupt the service"
          ]
        },
        content: {
          title: "4. Content & Copyright",
          ownershipTitle: "Content Ownership",
          ownershipBody: "All stories, illustrations, and assets belong to Senara and its contributors. Copyright stays with Senara and/or the respective creators.",
          educationTitle: "Educational Use",
          educationBody: "Teachers, facilitators, and educational orgs may use Senara stories for non-commercial learning without special permission, as long as content isn't modified.",
          attributionTitle: "Attribution",
          attributionBody: "If you reference Senara content, please credit us as the source."
        },
        disclaimer: {
          title: "5. Disclaimer",
          highlight: "<strong>Important:</strong> Senara is not a substitute for professional services. Our content promotes literacy and awareness; it doesn't diagnose, treat, or provide professional advice.",
          mentalTitle: "Mental Health Content",
          mentalBody: "Stories covering mental health are educational. If you're facing challenges, please contact qualified professionals. See the <a href='keselamatan.html' style='color: #d97706;'>Safety</a> page for support lines.",
          accuracyTitle: "Information Accuracy",
          accuracyBody: "We strive for accurate, up-to-date info, but can't guarantee it's error-free. Let us know if you spot issues."
        },
        liability: {
          title: "6. Limitation of Liability",
          intro: "Senara is provided \"as is\" without warranties. We're not liable for:",
          list: [
            "Losses arising from using or being unable to use the platform",
            "Decisions you make based on Senara content",
            "Service interruptions or loss of data stored in your browser",
            "Third-party content or services linked from Senara"
          ],
          outro: "Use Senara at your own risk."
        },
        changes: {
          title: "7. Changes to Terms",
          body1: "We may update these terms anytime. Changes take effect once published on this page.",
          body2: "Continuing to use Senara means you accept the updated terms."
        },
        contact: {
          title: "8. Contact Us",
          body: "Questions about these terms? Reach out:",
          email: "📧 Email: <a href='mailto:fauzan08fauzan@gmail.com' style='color: #d97706;'>fauzan08fauzan@gmail.com</a>"
        }
      }
    },
    donation: {
      title: "Donation Transparency",
      subtitle: "You deserve to know exactly how your support is used.",
      highlight: "100% of Senara stories are free for everyone. Donations keep the platform running, not to lock content behind a paywall.",
      whyTitle: "Why Nonprofit?",
      whyParagraphs: [
        "Senara started with a belief: meaningful experiences shouldn’t depend on someone’s financial situation.",
        "We don’t have investors demanding profit or revenue targets to hit. That freedom lets us focus on what matters: creating stories that genuinely help people.",
        "Being nonprofit also means we don’t have to sell user data or plaster the site with ads. Reading stays clean and focused."
      ],
      usageTitle: "How Do We Use Donations?",
      usageIntro: "Every contribution keeps Senara alive and growing. Here’s where the money goes:",
      costs: {
        art: {
          title: "Illustrations & Visual Assets",
          desc: "Paying illustrators for characters, backgrounds, and story art. This is our biggest cost because good visuals make stories more engaging."
        },
        hosting: {
          title: "Hosting & Domain",
          desc: "Servers and domains so the site stays online and accessible everywhere."
        },
        honor: {
          title: "Contributor Honorarium",
          desc: "Small appreciation for volunteers who share their time and skills. Not mandatory, but we want to honor their work."
        },
        tools: {
          title: "Tools & Software",
          desc: "Subscriptions for collaboration, design, and development tools."
        }
      },
      usageNote: "💡 We don’t have an office or full-time staff. Everything is remote and volunteer-based, which keeps operational costs low.",
      principlesTitle: "Our Principles",
      principles: {
        noExclusive: {
          title: "No Exclusive Content",
          desc: "Donors don’t get special chapters. Every story stays free for everyone."
        },
        noPaywall: {
          title: "No Paywall",
          desc: "We don’t hide features behind payments. Senara stays fully free."
        },
        voluntary: {
          title: "Voluntary Support",
          desc: "No pressure to donate. If you can’t, that’s okay—just enjoy the stories."
        },
        transparent: {
          title: "Full Transparency",
          desc: "We’re open about how funds are used. Ask us anything."
        }
      },
      gratitudeTitle: "🙏 Thank You",
      gratitudeP1: "To everyone who supports Senara through donations, sharing, or simply reading: thank you.",
      gratitudeP2: "Every bit of support helps us keep creating meaningful stories for more people.",
      gratitudeCta: "🍰 Support via Trakteer"
    },
    accessibility: {
      title: "Accessibility",
      subtitle: "Our commitment to making Senara accessible for everyone.",
      commitmentTitle: "🎯 Our Commitment",
      commitmentBody: "We believe everyone deserves access to meaningful stories and learning experiences. Senara continues to improve accessibility so the platform stays inclusive for all users, including people with disabilities.",
      intro: "These are the accessibility features already available and the ones we’re currently working on.",
      statuses: {
        available: "✓ Available",
        partial: "⚡ In Progress",
        planned: "📋 Planned"
      },
      sections: {
        visual: {
          title: "Visual Accessibility",
          features: {
            fontSize: {
              title: "Comfortable Font Sizes",
              desc: "All text uses a minimum size of 16px so it stays readable across devices."
            },
            contrast: {
              title: "Color Contrast",
              desc: "We use color combinations with sufficient contrast between text and background for better readability."
            },
            zoom: {
              title: "Browser Zoom",
              desc: "The site supports zooming up to 200% without losing functionality or content. Layouts remain responsive."
            },
            darkMode: {
              title: "Dark Mode",
              desc: "A dark appearance option to reduce eye strain when reading in low light."
            }
          }
        },
        navigation: {
          title: "Navigation & Interaction",
          features: {
            keyboard: {
              title: "Keyboard Navigation",
              desc: "All interactive elements can be accessed with a keyboard. Use Tab to move around and Enter to activate."
            },
            focus: {
              title: "Focus Indicator",
              desc: "Focused elements are highlighted with a clear outline so keyboard users always know where they are."
            },
            touch: {
              title: "Touch Targets",
              desc: "Buttons and links keep a minimum touch area of 44x44 pixels to stay comfortable for users with motor limitations."
            },
            animation: {
              title: "Animation Control",
              desc: "Animations are minimal and never distracting. There are no fast-flashing visuals."
            }
          }
        },
        screenReader: {
          title: "Screen Readers & Assistive Tech",
          features: {
            headings: {
              title: "Heading Structure",
              desc: "Pages use a clear heading hierarchy (H1, H2, H3) so screen reader navigation stays predictable."
            },
            aria: {
              title: "ARIA Labels",
              desc: "Interactive elements include ARIA labels to provide extra context for screen reader users."
            },
            altText: {
              title: "Alt Text for Images",
              desc: "Important visuals include alt text describing the content."
            },
            compatibility: {
              title: "Screen Reader Compatibility",
              desc: "We test the site with popular tools like NVDA and VoiceOver to ensure a consistent experience."
            }
          }
        },
        vn: {
          title: "Visual Novel Accessibility",
          intro: "Accessibility features tailored for interactive story reading:",
          features: {
            textSpeed: {
              title: "Text Speed",
              desc: "Adjustable text speed, including an instant display option."
            },
            audio: {
              title: "Audio Controls",
              desc: "Music and sound effects can be adjusted separately or muted entirely."
            },
            saveLoad: {
              title: "Save & Load",
              desc: "Save progress anytime and continue later. No need to finish in one sitting."
            },
            log: {
              title: "Dialog Log",
              desc: "Review previous dialog whenever you need to reread a line."
            }
          }
        }
      },
      tipsTitle: "Tips for Using Senara",
      tips: [
        "Use Ctrl/Cmd + to zoom in when text feels small.",
        "Press Tab to move between buttons and links.",
        "In visual novels, click or press Enter/Space to advance dialogs.",
        "Open the in-story Settings menu to adjust text speed and volume."
      ],
      feedbackTitle: "Help Us Improve Accessibility",
      feedbackDesc: "If you experience any accessibility issues or have suggestions, we’d love to hear from you.",
      feedbackCta: "✉️ Send Feedback"
    },
    safety: {
      title: "Safety & Support",
      subtitle: "A guide to staying emotionally safe while exploring Senara.",
      disclaimerTitle: "⚠️ Important Reminder",
      disclaimerBody: "<strong>Senara is not a substitute for professional mental health care.</strong> Our stories aim to raise literacy and awareness, not to diagnose, treat, or provide therapy. If you’re experiencing mental health challenges, please reach out to a professional.",
      whenHelpTitle: "When to Reach Out for Help",
      whenHelpIntro: "Reading sensitive topics can stir up strong feelings. That’s normal. Still, there are moments when talking to a trained professional is the best next step.",
      whenHelpListTitle: "Contact professional support right away if you:",
      whenHelpList: [
        "Have thoughts of hurting yourself or others",
        "Feel overwhelmed and can’t cope on your own",
        "Notice drastic changes in sleep, appetite, or daily routines",
        "Feel isolated and as if no one is there to listen",
        "Rely on alcohol or other substances to numb your feelings",
        "Feel that a story is too heavy and it affects your daily life"
      ],
      whenHelpOutro: "Asking for help is a sign of strength, not weakness.",
      hotlinesTitle: "Support Services in Indonesia",
      hotlinesIntro: "Here are trusted organizations you can contact whenever you need support:",
      hotlines: {
        sejiwa: {
          title: "Sejiwa (Indonesian MoH)",
          desc: "Mental health counseling from the Ministry of Health. Free, 24/7.",
          contact: "📞 119 ext. 8"
        },
        itl: {
          title: "Into The Light Indonesia",
          desc: "Suicide prevention community offering resources and peer support.",
          contact: "🌐 intothelightid.org"
        },
        pulih: {
          title: "Yayasan Pulih",
          desc: "Counseling services for trauma recovery and mental wellness.",
          contact: "📞 (021) 788-42580"
        },
        tepsa: {
          title: "Child Social Service Line (TePSA)",
          desc: "24/7 helpline for children and teens who need assistance.",
          contact: "📞 1500-771"
        },
        komnas: {
          title: "Komnas Perempuan",
          desc: "Support for women experiencing violence or in need of protection.",
          contact: "📞 (021) 390-3963"
        }
      },
      safeTipsTitle: "Tips for Reading Sensitive Stories",
      safeTipsIntro: "Some Senara stories explore heavy topics. These tips can help you take care of your emotional wellbeing:",
      safeTips: [
        "<strong>Pause whenever you need.</strong> If a story feels too intense, you don’t have to finish it. Take a break, or stop entirely.",
        "<strong>Watch the content warnings.</strong> Sensitive stories include a warning at the beginning. Read it first before you continue.",
        "<strong>Set the right moment.</strong> Choose a comfortable time and place. Avoid reading when you’re exhausted or emotionally drained.",
        "<strong>Talk to someone.</strong> After a heavy story, sharing how you feel with a friend, family member, or trusted person can help.",
        "<strong>Ground yourself.</strong> If you feel overwhelmed, try grounding: deep breaths, then notice 5 things you can see, 4 you can touch, 3 you can hear.",
        "<strong>Write it out.</strong> Journaling afterwards can help you process thoughts and emotions that surface."
      ],
      parentsTitle: "For Parents & Educators",
      parentsIntro: "If you’re using Senara with your child or students:",
      parentsTips: [
        "<strong>Preview stories first.</strong> Read the story yourself before recommending it so you can gauge the fit.",
        "<strong>Guide and discuss.</strong> For sensitive topics, consider co-reading and reflecting together afterwards.",
        "<strong>Check the age labels.</strong> Each story includes an age recommendation (e.g., 13+). Use it as a baseline."
      ],
      supportTitle: "You're Not Alone",
      supportBody1: "Whatever you’re going through, there are people who care and want to support you. Please reach out.",
      supportBody2: "If you find any Senara content that feels unsafe or needs improvement, <a href='kontak.html' style='color: #047857; text-decoration: underline;'>let us know</a>. Your feedback really matters to us."
    },
    privacy: {
      title: "Privacy Policy",
      subtitle: "How we collect, use, and protect your information.",
      lastUpdated: "📅 Last updated: December 2025",
      summary: "<strong>Summary:</strong> We don’t collect personal data. No logins, no individual tracking. Senara is built with privacy in mind.",
      tocTitle: "Table of Contents",
      sections: {
        dataCollection: {
          title: "1. Data We Collect",
          intro: "Senara follows a <strong>minimal data collection</strong> principle. We never ask you to:",
          list: [
            "Create an account or log in",
            "Provide your name, email, or other personal information",
            "Grant access to location, camera, or microphone"
          ],
          outro: "Because there’s no account system, we don’t store any personal data on our servers."
        },
        analytics: {
          title: "2. Analytics",
          intro: "We use <strong>Umami Analytics</strong>, a privacy-friendly, open-source platform. Umami doesn’t use cookies and doesn’t track individual users.",
          collectedTitle: "Data Umami collects:",
          collectedList: [
            "Pages visited",
            "Country (based on IP, but IP itself isn’t stored)",
            "Device type (desktop/mobile)",
            "Browser used",
            "Referrer (where you came from)"
          ],
          note: "All data is aggregate and anonymous. We can’t identify individual users from it.",
          whyTitle: "Why we use analytics",
          whyBody: "To understand which stories resonate most, which pages need improvement, and how people discover Senara, so we can build better experiences."
        },
        cookies: {
          title: "3. Cookies & Local Storage",
          cookiesTitle: "Cookies",
          cookiesBody: "Senara <strong>does not use cookies</strong> for tracking. Umami Analytics doesn’t use cookies either.",
          localTitle: "Local Storage",
          localIntro: "We rely on your browser’s <strong>Local Storage</strong> to keep:",
          localList: [
            "Story progress you’re currently reading",
            "Preference settings (volume, text speed, etc.)",
            "Save files so you can continue later"
          ],
          localNote: "This data lives <strong>only on your device</strong>, not on our servers. You can erase it anytime via your browser settings."
        },
        thirdParty: {
          title: "4. Third-Party Services",
          intro: "Senara relies on a few third-party services:",
          list: [
            "<strong>Umami Analytics</strong> – Privacy-first analytics (no cookies, no individual tracking)",
            "<strong>Tailwind CSS CDN</strong> – Styling assets (no data collection)",
            "<strong>Google Fonts</strong> – Typography (may collect minimal data per Google’s policy)",
            "<strong>Trakteer</strong> – Donations (if you donate, Trakteer’s privacy policy applies)"
          ],
          outro: "We never sell, rent, or share user data with third parties for commercial purposes."
        },
        security: {
          title: "5. Data Security",
          p1: "Because we don’t collect personal data, the risk of a data breach is extremely low. Our site uses HTTPS to encrypt all traffic.",
          p2: "Anything stored in your browser’s Local Storage is protected by the browser itself and is only accessible to the Senara site."
        },
        children: {
          title: "6. Children’s Privacy",
          p1: "Senara can be used by children with parental guidance. Since we don’t collect personal data, there’s no risk of us unintentionally storing children’s data.",
          p2: "Every story includes a clear age recommendation. We encourage parents to review the content before allowing their child to read it."
        },
        changes: {
          title: "7. Policy Changes",
          p1: "We may update this privacy policy from time to time. Significant changes will be announced on this page with a visible date.",
          p2: "If we ever introduce features that require data collection (like accounts), we’ll update this policy and request explicit user consent."
        },
        contact: {
          title: "8. Contact Us",
          body: "If you have questions about this policy or how we handle data, reach out:",
          email: "📧 Email: <a href='mailto:fauzan08fauzan@gmail.com' style='color: #d97706;'>fauzan08fauzan@gmail.com</a>"
        }
      }
    },
    partner: {
      title: "For Organizations & Communities",
      subtitle: "How schools, NGOs, and community groups can use Senara.",
      intro: "Senara is designed for anyone, including organizations that want to deliver important messages through interactive stories. Here’s how different groups can leverage our platform.",
      audienceTitle: "Who Can Use Senara?",
      audiences: {
        schools: {
          title: "Schools & Universities",
          body: "Counselors, lecturers, or student affairs teams who want to teach life skills in a more engaging way.",
          examplesTitle: "Use Cases",
          examples: [
            "New student orientation material",
            "Group counseling sessions",
            "Course reflection assignments"
          ]
        },
        ngo: {
          title: "NGOs & Foundations",
          body: "Organizations focusing on public education, mental health, or community empowerment.",
          examplesTitle: "Use Cases",
          examples: [
            "Mental health literacy programs",
            "Anti-stigma campaigns",
            "Volunteer training material"
          ]
        },
        community: {
          title: "Communities & Groups",
          body: "Online/offline communities, youth groups, or faith-based organizations discussing meaningful topics.",
          examplesTitle: "Use Cases",
          examples: [
            "Ice breakers at meetups",
            "Theme-based group discussions",
            "Community service or outreach programs"
          ]
        },
        company: {
          title: "Companies & HR",
          body: "HR or L&D teams who want to deliver wellbeing or soft-skill material through a different approach.",
          examplesTitle: "Use Cases",
          examples: [
            "Employee wellbeing programs",
            "New hire onboarding",
            "Soft skill workshops"
          ]
        }
      },
      useCasesTitle: "Implementation Ideas",
      useCasesIntro: "Ways your organization can integrate Senara:",
      useCases: [
        {
          title: "Read Together in Class/Workshop",
          body: "Project the story and vote on choices together. Every branch becomes a discussion point. Perfect for 30–60 minute sessions.",
          icon: "📱"
        },
        {
          title: "Individual Assignment + Reflection",
          body: "Have participants read on their own, then submit reflections on the choices they made and why. Great for weekly assignments.",
          icon: "📝"
        },
        {
          title: "Pre-Workshop Primer",
          body: "Send a story before the workshop as a warm-up so everyone arrives with the same context.",
          icon: "🎯"
        },
        {
          title: "Compare Story Paths",
          body: "Split participants into groups, each exploring different branches. Compare endings and discuss what led to different outcomes.",
          icon: "🔄"
        },
        {
          title: "Informal Assessment",
          body: "Use story quizzes as pre/post checks to gauge understanding on specific topics.",
          icon: "📊"
        }
      ],
      stepsTitle: "How to Get Started",
      stepsIntro: "No registration or special approval needed. Just follow these steps:",
      steps: [
        { title: "Choose a Story", body: "Browse the collection and pick a story that fits your program’s topic." },
        { title: "Preview First", body: "Read it yourself to ensure it suits your audience." },
        { title: "Prep the Discussion", body: "Draft discussion prompts based on the story’s choices." },
        { title: "Run the Session", body: "Share the link or present it live, then facilitate the conversation." }
      ],
      benefitsTitle: "Why Use Senara?",
      benefits: [
        { title: "100% Free", body: "No licensing fees or subscriptions", icon: "💰" },
        { title: "Easy Access", body: "Runs in any browser, no app installs", icon: "📱" },
        { title: "Engaging", body: "Interactive format keeps attention", icon: "🎯" },
        { title: "Discussion-Friendly", body: "Choices turn into meaningful conversation", icon: "💬" },
        { title: "Safe", body: "No logins, no data collection", icon: "🔒" },
        { title: "Local Context", body: "Stories set in familiar Indonesian settings", icon: "🇮🇩" }
      ],
      storiesTitle: "Stories that Work Well",
      storiesIntro: "Popular picks for organizational programs:",
      storiesListTitle: "Recommended Stories",
      storyItems: [
        {
          title: "Pahlawan Kesehatan Mental",
          desc: "Mental health literacy, recognizing signs, reducing stigma",
          cta: "View Story"
        }
      ],
      testimonialQuote: "\"Interactive stories make participants far more engaged than traditional presentations. They open up because they’ve already ‘experienced’ the situation.\"",
      testimonialCite: "Mental Health Workshop Facilitator",
      ctaTitle: "Ready to Use Senara?",
      ctaDesc: "Start today or reach out so we can discuss how Senara supports your programs.",
      ctaPrimary: "📚 Explore Collection",
      ctaSecondary: "✉️ Contact Us"
    },
    home: {
      // Hero
      badge: "🌱 Senara is a nonprofit platform",
      headline: "Learn Through Interactive Stories",
      subheadline: "We believe stories have the power to teach important lessons in ways that touch the heart. Read, choose, and discover new insights in every journey.",
      ctaStart: "🎮 Start a Story",
      ctaLearnMore: "Learn More",
      communityNote: "Made with heart by the community",
      communitySubnote: "for readers everywhere",
      vnExplainer: "What is a Visual Novel?",
      vnExplainerDesc: "Like an interactive comic. You read the story, make choices, and every decision changes the path of the narrative.",
      // What is Senara
      whatTitle: "What is Senara?",
      whatDesc: "Senara is a nonprofit platform that invites you to explore various topics through interactive stories.",
      whatTagline: "Not just reading. Not just watching.",
      whatTaglineDesc: "The best experience comes when you're part of the story.",
      // How it works
      howTitle: "How Does It Work?",
      howSubtitle: "Three easy steps to start learning through stories.",
      step1Title: "Choose a Story",
      step1Desc: "Browse our collection of stories on various topics. Find the one that suits you best.",
      step2Title: "Read & Make Your Choices",
      step2Desc: "Follow the storyline and make decisions. Every choice opens a different path.",
      step3Title: "Continue Your Journey",
      step3Desc: "Complete the story and discover new insights. Move on to another story or explore the same topic further.",
      // Featured
      featuredLabel: "Featured Stories",
      featuredTitle: "Start Your Learning Adventure",
      featuredSubtitle: "Interactive stories curated by the community. Every choice shapes your own path.",
      seeAll: "See All",
      playNow: "Play Now →",
      comingSoon: "Coming Soon",
      // Categories
      categoriesTitle: "Topics You Can Explore",
      categoriesSubtitle: "Choose a category that matches your interests.",
      // Why VN
      whyTitle: "Why Visual Novel Format?",
      whySubtitle: "An interactive story format that makes learning more enjoyable and memorable.",
      advantages: "Senara's Advantages",
      adv1Title: "Relevant Stories",
      adv1Desc: "Topics close to everyday life",
      adv2Title: "Free Forever",
      adv2Desc: "Access all stories at no cost",
      adv3Title: "Flexible Learning",
      adv3Desc: "Play anytime, anywhere",
      ctaExplore: "Explore Stories",
      // Support
      supportTitle: "❤️ Support Senara",
      supportSubtitle: "Senara is a nonprofit platform built by the community. Every contribution helps us continue creating meaningful stories accessible to everyone.",
      trakteerTitle: "Donate via Trakteer",
      trakteerDesc: "Support the development of Senara's stories and platform.",
      trakteerCta: "Donate Now",
      partnerTitle: "For Teachers & Organizations",
      partnerDesc: "Use Senara for your classes, communities, or workshops.",
      partnerCta: "Apply for Partnership",
      contributeTitle: "Want to Contribute?",
      contributeDesc: "Join as a writer, illustrator, editor, or developer.",
      contributeCta: "See Opportunities",
      // About section
      aboutTitle: "Get to Know Senara",
      aboutSubtitle: "A nonprofit platform built by a small team with a big mission.",
      teamLink: "👥 Our Team",
      approachLink: "📖 Approach",
      roadmapLink: "🗺️ Roadmap",
      orgLink: "🏫 For Organizations",
      donationLink: "💛 Donation Transparency"
    },
    footer: {
      tagline: "An interactive storytelling platform for learning important life lessons through meaningful experiences.",
      explore: "Explore",
      home: "Home",
      storyCollection: "Story Collection",
      aboutUs: "About Us",
      team: "Our Team",
      approach: "Our Approach",
      roadmap: "Roadmap",
      support: "Support",
      faq: "FAQ",
      safety: "Safety",
      contactUs: "Contact Us",
      contribute: "Contribute",
      forOrganizations: "For Organizations",
      supportSenara: "Support Senara",
      startReading: "Start Reading",
      startReadingDesc: "Find interactive stories that match your interests.",
      viewCollection: "View Collection →",
      nonprofit: "Nonprofit",
      freeForAll: "Free for everyone",
      copyright: "Senara. Made with ❤️ in Indonesia.",
      privacy: "Privacy",
      terms: "Terms",
      accessibility: "Accessibility"
    },
    common: {
      loading: "Loading...",
      error: "An error occurred",
      minutes: "minutes",
      stories: "stories"
    },
    // Collection page
    collection: {
      title: "Story Collection",
      subtitle: "Find a story that suits you. Each story is designed to accompany your learning journey in a personal and meaningful way.",
      searchPlaceholder: "Search Stories",
      searchInputPlaceholder: "Type title or topic...",
      filterToggle: "Filter & Sort",
      filterCategory: "Category",
      filterDifficulty: "Difficulty Level",
      filterDuration: "Duration",
      statusTitle: "Status",
      statusAvailable: "✅ Available",
      statusComingSoon: "🔜 Coming Soon",
      allCategories: "All Categories",
      allStories: "All Stories",
      allDifficulties: "All Levels",
      allDurations: "All Durations",
      durationShort: "⚡ Short (< 15 min)",
      durationMedium: "📖 Medium (15-30 min)",
      durationLong: "📚 Long (> 30 min)",
      resetFilters: "Reset Filters",
      resetAllFilters: "Reset All Filters",
      noResults: "No stories match your filters.",
      found: "Found",
      storiesFound: "stories",
      badges: {
        interactive: "Interactive Stories",
        quiz: "Quizzes & Challenges",
        playful: "Learn Through Play"
      },
      resultsPrefix: "Showing",
      sortLabel: "Sort by:",
      sortDefault: "Default",
      sortNewest: "🆕 Newest",
      sortOldest: "📅 Oldest",
      sortPopular: "🔥 Most Popular",
      sortRating: "⭐ Highest Rated",
      sortDurationAsc: "⏱️ Duration: Short → Long",
      sortDurationDesc: "⏱️ Duration: Long → Short",
      sortTitleAsc: "🔤 Title: A → Z",
      sortTitleDesc: "🔤 Title: Z → A",
      emptyTitle: "No stories found",
      emptyDescription: "Try adjusting your filters or search terms to find stories that match what you're looking for.",
      emptyReset: "Reset All Filters",
      keyboardSearch: "Search",
      keyboardReset: "Reset"
    },
    about: {
      title: "The Story Behind Senara",
      subtitle: "How a simple idea grew into an interactive storytelling platform.",
      originTitle: "How It Started",
      originP1: "Senara began from frustration.",
      originP2: "We kept finding important material whose delivery bored people before they finished reading. Meanwhile, people willingly spent hours on stories: novels, webtoons, dramas.",
      originP3: "That led to a question: <strong>what if life lessons were wrapped in exciting stories?</strong> Not lectures, not modules, but experiences you can feel.",
      originP4: "Our first story was a small experiment. The response surprised us. People discussed, shared, and said “this feels so relatable.”",
      problemTitle: "The Problems We're Trying to Solve",
      prob1Title: "Important topics are often delivered in boring formats",
      prob1Desc: "Mental health, financial literacy, critical thinking. All important, yet often packaged in ways that are hard to digest.",
      prob2Title: "There's a gap between “knowing” and “understanding”",
      prob2Desc: "Many people know the theory but can't apply it because they've never “felt” the situation. Interactive stories help bridge that gap.",
      prob3Title: "Quality content is rarely free",
      prob3Desc: "Online courses, workshops, books... they all cost money. We believe access to meaningful experiences shouldn't depend on finances.",
      missionTitle: "Our Mission",
      missionStatement: "Make meaningful experiences accessible to everyone, with no cost and no strings attached.",
      missionPoint1: "💚 Free forever",
      missionPoint2: "🤝 Nonprofit",
      missionPoint3: "👥 Community-driven",
      missionP1: "Senara is a nonprofit platform. We don't sell anything. Every story is free, now and forever.",
      missionP2: "No freemium, no trials. <strong>Completely free.</strong> No investors demanding profit, no revenue targets. Every story is created by caring volunteers.",
      visionTitle: "Long-Term Vision",
      visionQuote: "We dream of Senara becoming the largest library of meaningful stories in Indonesia.",
      visionP1: "A place where teachers find engaging material. Parents teach values through stories. Anyone can learn from fictional characters before facing similar situations in real life.",
      visionP2: "We know it takes time. But every new story and every reader we touch is a step toward that future.",
      valuesTitle: "Our Values",
      val1Title: "Grow Together",
      val1Desc: "We're learning as we go. Imperfect, but always progressing.",
      val2Title: "Community First",
      val2Desc: "Senara exists because of contributors. Every story is collaborative.",
      val3Title: "Impact over Virality",
      val3Desc: "We don't chase numbers. We chase meaningful change.",
      val4Title: "Keep It Simple",
      val4Desc: "A good story is one everyone can understand.",
      val5Title: "Lead with Empathy",
      val5Desc: "We write for humans, not algorithms.",
      closingP1: "Senara is still very young. Many things aren't perfect, but we're constantly learning.",
      closingP2: "We believe <strong>stories can change how people see the world.</strong> We'll keep creating stories that matter.",
      closingP3: "Thank you for being part of this journey.",
      closingLinks: {
        team: "👥 Meet Our Team",
        approach: "📖 Our Approach",
        roadmap: "🗺️ Roadmap"
      }
    },
    team: {
      title: "Senara Team",
      subtitle: "The people behind the stories you read.",
      intro: "Senara is built by a small team who believes stories can teach important lessons in heartfelt ways. We're not a big company, just people who care.",
      whyTitle: "Why Did We Build Senara?",
      whyP1: "We saw people struggling to grasp essential topics like mental health, digital literacy, finance, and soft skills, not knowing where to start. Existing content often felt preachy, boring, or irrelevant.",
      whyP2: "We believe there's a better way: <strong>through stories</strong>. Stories that make you say “this is so me,” that invite reflection without lectures, and that are accessible at no cost.",
      whyP3: "Senara was born from a simple belief: <em>everyone deserves to learn important life lessons in a human, free way.</em>",
      coreTitle: "Core Team",
      roleCEO: "CEO & Co-Founder",
      roleCTO: "CTO & Co-Founder",
      roleCOO: "COO & Co-Founder",
      bioCEO: "Experience at financial regulators and multinational FMCG companies. Co-founded Diceritain (30K+ users). Psychology and product management background.",
      bioCTO: "6+ years in tech companies across Australia, Singapore, the US, and Japan. Built products used by hundreds of thousands of users.",
      bioCOO: "Led talent development for 50K+ employees at a state-owned enterprise holding company. Psychology background in L&D and corporate learning.",
      viewLinkedIn: "View LinkedIn →",
      creativeTitle: "Designers & Story Writers",
      roleDesigner: "Designer & Story Writer",
      bioPrim: "Visual creator with 4+ years in branding, social media, and multimedia. Certified Indonesian Sign Language (BISINDO) interpreter. Managed high-engagement social accounts and produced podcasts. Active in Deaf community through Fantasi Tuli theater and GKI Pondok Indah.",
      jobPrim: "Silang.id · Freelance Graphic Designer & Illustrator · BISINDO Interpreter",
      valuesTitle: "Our Values",
      val1Title: "Free for Everyone",
      val1Desc: "No paywalls, no exclusive content",
      val2Title: "Privacy First",
      val2Desc: "We don't collect personal data",
      val3Title: "Empathy in Every Story",
      val3Desc: "Sensitive topics handled with care",
      val4Title: "Nonprofit",
      val4Desc: "No investors, no profit pressure",
      advisorTitle: "Supporters & Advisors",
      advisorIntro: "We're grateful to the professionals who give feedback and support:",
      adv1Title: "Subject Matter Experts",
      adv1Desc: "Review accuracy across disciplines",
      adv2Title: "Teachers & Educators",
      adv2Desc: "Feedback from an educator's perspective",
      adv3Title: "Beta Readers",
      adv3Desc: "Test every story before release",
      adv4Title: "Community Feedback",
      adv4Desc: "Input from readers and users",
      contribTitle: "Contributors",
      contribIntro: "Senara wouldn't exist without contributors who donate their time and expertise:",
      contribBoxTitle: "Thank you to everyone who's contributed!",
      contribBoxDesc: "Writers, illustrators, editors, testers, and everyone who helped bring these stories to life.",
      roles: {
        writer: "✍️ Writers",
        illustrator: "🎨 Illustrators",
        editor: "📝 Editors",
        tester: "🧪 Testers",
        translator: "🌐 Translators",
        outreach: "📣 Outreach"
      },
      ctaTitle: "Want to Join?",
      ctaDesc: "We're always looking for people to contribute as writers, illustrators, editors, and beyond.",
      ctaButton: "✨ See How to Contribute"
    },
    // Why VN comparison
    whyVN: {
      toggleVN: "Visual Novel",
      togglePDF: "PDF Module",
      toggleSocmed: "Social Media",
      toggleYoutube: "YouTube Video",
      // Card 1
      stat1VN: "More meaningful",
      stat1PDF: "Structured",
      stat1Socmed: "Quick but brief",
      stat1Youtube: "Visual but passive",
      title1VN: "Engaging Narrative",
      title1PDF: "Structured Content",
      title1Socmed: "Bite-sized Content",
      title1Youtube: "Visual Explanation",
      desc1VN: "Stories close to everyday life help us understand and remember lessons better.",
      desc1PDF: "Standard format with clear structure, easy to access and share.",
      desc1Socmed: "Quick tips that are easy to digest but quickly disappear from the feed.",
      desc1Youtube: "Videos explain concepts visually, but rarely interactive.",
      // Card 2
      stat2VN: "You choose",
      stat2PDF: "One-way",
      stat2Socmed: "Limited interaction",
      stat2Youtube: "Can pause",
      title2VN: "Interactive & Fun",
      title2PDF: "Passive Format",
      title2Socmed: "Social Engagement",
      title2Youtube: "Viewer Control",
      desc2VN: "Every choice you make shapes your own path, just like real life.",
      desc2PDF: "Consistent linear content, suitable for structured learning.",
      desc2Socmed: "Interaction limited to likes, shares, and comments.",
      desc2Youtube: "Viewers can pause & rewind, but cannot influence the storyline.",
      // Card 3
      stat3VN: "Feels personal",
      stat3PDF: "Formal",
      stat3Socmed: "Fleeting",
      stat3Youtube: "Entertaining",
      title3VN: "Emotional Connection",
      title3PDF: "Formal Learning",
      title3Socmed: "Viral & Trending",
      title3Youtube: "Meaningful Entertainment",
      desc3VN: "When we feel connected to characters and their stories, lessons become more meaningful.",
      desc3PDF: "Content-based approach, ideal for professional and academic training.",
      desc3Socmed: "Viral content creates buzz, but long-term retention is low.",
      desc3Youtube: "Audio-visual combination creates engagement, but often just entertainment without deep learning."
    },
    // Testimonials
    testimonials: {
      teacher: {
        quote: "Students became more willing to discuss. They said the stories felt close to their own experiences.",
        author: "A Teacher",
        role: "Senara User"
      },
      reader: {
        quote: "Learning through stories feels more relaxed. Didn't even realize I finished a chapter!",
        author: "Reader",
        role: "Senara User"
      },
      facilitator: {
        quote: "This format helps participants engage more. Discussions afterward became more lively.",
        author: "Facilitator",
        role: "Senara User"
      }
    },
    // Categories
    categories: {
      "mind-emotions": "Mind & Emotions",
      "self-awareness-identity": "Self-Awareness & Identity",
      "relationships-social": "Relationships & Social Dynamics",
      "digital-life-online": "Digital Life & Online Identity",
      "college-work-adulthood": "College, Work & Early Adulthood",
      "social-issues": "Social Issues",
      "money-young-adult-life": "Money & Young Adult Life"
    },
    // Story card labels
    story: {
      playNow: "Play Now →",
      comingSoon: "Coming Soon",
      editorsPick: "Editor's Pick",
      minutes: "min",
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced"
    },
    // Story content (titles & descriptions)
    stories: {
      "pahlawan-kesehatan-mental": {
        title: "Mental Health Hero",
        description: "Join Vani as she faces emotional challenges and discovers the true strength in maintaining mental health."
      },
      "jika-maka-maka-jika-debug-hidupku": {
        title: "If Then, Then If ~Debug My Life",
        description: "Learn programming basics: if-else, loops, variables, and debugging through relatable stories."
      },
      "batik-cahaya-majapahit": {
        title: "The Secret of Majapahit's Batik Light",
        description: "Learn about Majapahit batik heritage and how to preserve local traditions through modern technology."
      },
      "operasi-hati-sehat": {
        title: "Healthy Heart Operation at Angkasa High",
        description: "Learn mental health strategies and coping skills for academic pressure and competition."
      },
      "misi-nol-sampah": {
        title: "Zero Waste Mission at Beringharjo Market",
        description: "Learn about circular economy, community negotiation, and measuring environmental impact from social initiatives."
      },
      "kode-angkasa-lestari": {
        title: "The Secret Code of Angkasa Lestari",
        description: "Learn cybersecurity basics, tech ethics, and responsible decision-making when facing technology dilemmas."
      },
      "festival-rasa-maluku": {
        title: "Festival of Flavors from Maluku",
        description: "Learn about Indonesia's culinary diversity, facilitating community dialogue, and designing inclusive events."
      },
      "jejak-nadi-kota-hujan": {
        title: "Pulse Trails of the Rain City",
        description: "Learn about climate-adaptive urban planning, environmental data analysis, and community involvement in city design."
      },
      "startup-satwa-penjaga-hutan": {
        title: "Wildlife Startup: Forest Guardians",
        description: "Learn about environmental conservation, collaboration with indigenous communities, and designing impactful business models."
      },
      "panggung-cahaya-pesantren": {
        title: "Digital Pesantren's Stage of Light",
        description: "Learn about media literacy, recognizing and fighting misinformation, and creating responsible content."
      }
    },
    roadmap: {
      title: "Roadmap",
      subtitle: "What we're working on and what's coming next.",
      intro: "Senara is always evolving. This page shows what we're working on, what's planned, and what's done. Everything can change based on community feedback.",
      storiesTitle: "Stories in Progress",
      storiesIntro: "New stories currently in development:",
      stories: {
        digital: {
          title: "📱 Digital & Social Media Literacy",
          desc: "Stories about navigating the digital world: spotting hoaxes, protecting privacy online, and building healthy social media habits.",
          target: "📅 Target: Q1 2025",
          chapters: "📚 3-4 chapters"
        },
        finance: {
          title: "💰 Financial Literacy for Beginners",
          desc: "Learn to manage money, save, and make smart financial decisions through relatable character stories.",
          target: "📅 Target: Q2 2025",
          chapters: "📚 4-5 chapters"
        },
        communication: {
          title: "🤝 Communication & Conflict Resolution",
          desc: "How to communicate effectively, resolve conflicts, and build healthy relationships with others.",
          target: "📅 Target: 2025"
        }
      },
      storiesNote: "💡 Have a story idea? <a href='kontak.html' style='color: #d97706; text-decoration: underline;'>Contact us</a> or <a href='contribute.html' style='color: #d97706; text-decoration: underline;'>join as a contributor</a>.",
      statuses: {
        inProgress: "🔨 In Progress",
        planned: "📋 Planned",
        exploring: "💭 Exploring"
      },
      featuresTitle: "Platform Features",
      featuresIntro: "Feature development to improve user experience:",
      features: {
        account: { title: "👤 Account System", desc: "Login to save progress and sync across devices." },
        stats: { title: "📊 Learning Stats", desc: "View stories read, playtime, and achievements." },
        gamification: { title: "🏆 Gamification", desc: "Badges, streaks, and rewards to motivate readers." },
        mobile: { title: "📱 Mobile App", desc: "Access Senara via Android/iOS app." },
        multilang: { title: "🌐 Multi-language", desc: "Story translations to English." },
        offline: { title: "📥 Offline Mode", desc: "Download stories to read without internet." }
      },
      completedTitle: "Recently Completed",
      completedIntro: "What we've released recently:",
      completed: {
        story: { title: "Story: Mental Health Hero", desc: "5 chapters on mental health literacy, recognizing symptoms, and reducing stigma." },
        redesign: { title: "Website Redesign", desc: "Cleaner look, clearer navigation, and better performance." },
        collection: { title: "Collection Page with Filters", desc: "Search stories by category, duration, and difficulty." }
      },
      feedbackTitle: "💬 Help Us Prioritize",
      feedbackDesc: "This roadmap is shaped by community feedback. Which features or stories do you need most? What should we work on first?",
      feedbackCta: "✉️ Send Feedback"
    },
    faq: {
      title: "FAQ",
      subtitle: "Answers to frequently asked questions about Senara.",
      categories: {
        general: "General",
        content: "Content",
        usage: "Usage",
        privacy: "Privacy & Support"
      },
      questions: {
        whatIs: { q: "What is Senara?", a: "Senara is an interactive visual novel storytelling platform. You read stories, make choices, and each decision shapes your own path. Our stories cover mental health, financial literacy, and various life skills." },
        forWhom: { q: "Who is this platform for?", a: "Senara is for anyone who wants to learn through stories. We have stories for teens (13+), young adults, and general audiences. Teachers and facilitators can also use Senara as discussion material in class or workshops." },
        isFree: { q: "Is Senara really free?", a: "Yes, 100% free. Not freemium, not a trial. All stories are accessible without payment, now and forever. Senara is a nonprofit platform built by a volunteer community." },
        needAccount: { q: "Do I need to create an account?", a: "No. You can start reading stories without logging in or registering. Your progress is saved automatically in your browser. Account features may come in the future for cross-device sync." },
        replacePro: { q: "Can Senara replace a psychologist or counselor?", a: "No. Senara is not a substitute for professional mental health services. Our stories aim to increase literacy and awareness, not to diagnose or treat. If you need professional help, please contact a qualified psychologist or counselor." },
        whoMakes: { q: "Who creates the stories on Senara?", a: "Stories are created by a volunteer team from various backgrounds: writers, designers, developers, and subject matter experts. Every story goes through a review process to ensure accuracy and quality." },
        safeForTeens: { q: "Is Senara content safe for teenagers?", a: "Yes. Every story has a clear age label (e.g., 13+). We avoid explicit content and always provide warnings for sensitive topics. Parents and teachers can review story descriptions before recommending them." },
        forTeachers: { q: "How can teachers use Senara?", a: "Teachers can use Senara stories as discussion material, reflection assignments, or ice breakers. Just pick a story that fits your topic, have students read together or independently, then discuss the choices and lessons afterward." },
        devices: { q: "Can I access it on mobile or only on computer?", a: "Senara works on all devices: phone, tablet, or computer. Just open your browser and visit our website. No app download needed." },
        privacy: { q: "How is my privacy protected?", a: "We don't collect personal data. No login, no individual tracking. We only use anonymous analytics to understand which stories are most popular. Your story progress is stored locally in your own browser." },
        support: { q: "How can I support Senara?", a: "Several ways: (1) Share Senara with friends or communities, (2) Donate via <a href='https://trakteer.id/senara.id' target='_blank' rel='noopener'>Trakteer</a> to support operations, or (3) Join as a contributor if you have skills in writing, design, or development." }
      },
      contactTitle: "Still have questions?",
      contactDesc: "We'd love to hear from you.",
      contactCta: "Contact Us"
    },
    contribute: {
      title: "Contribute to Senara",
      subtitle: "Help us create meaningful stories for more people.",
      intro: "Senara is built by a volunteer community who believes stories can change how people learn. We're always looking for people who want to share their skills and time to create something meaningful.",
      rolesTitle: "Roles We Need",
      rolesIntro: "Every Senara story is a collaboration of various skills. Here are the roles we're always looking for:",
      roles: {
        writer: { title: "Story Writer", desc: "Write interactive story scripts with dialogue, choices, and multiple paths. You'll work with the team to ensure stories are engaging and meaningful." },
        artist: { title: "Illustrator & Designer", desc: "Create characters, backgrounds, and visual assets for stories. Visual styles can vary from anime-style to simple illustrations." },
        editor: { title: "Editor & Reviewer", desc: "Review scripts for clarity, accuracy, and content sensitivity. Help ensure story quality before publication." },
        educator: { title: "Education Consultant", desc: "Help validate content from a subject matter perspective. For example, psychologists for mental health stories, or finance experts for financial literacy stories." },
        developer: { title: "Developer", desc: "Help with platform development, new features, or technical integration. Familiar with JavaScript and web development." },
        outreach: { title: "Community & Outreach", desc: "Help spread Senara to the right communities, manage social media, or build partnerships with other organizations." }
      },
      noExpNote: "💡 <strong>No experience?</strong> No problem. We're open to beginners who want to learn. What matters is enthusiasm and commitment to contribute.",
      processTitle: "How Collaboration Works",
      processIntro: "The contribution process at Senara is designed to be flexible and not overwhelming:",
      steps: {
        intro: { title: "Get to Know Each Other", desc: "Contact us via email or form. Tell us a bit about yourself, your skills, and interests. No formal CV needed." },
        matching: { title: "Discussion & Matching", desc: "We'll chat to understand your availability and preferences. Then we'll find a project or team that fits." },
        start: { title: "Start Contributing", desc: "You'll join a small team to work on one story. Communication via group chat, with flexible timelines." },
        publish: { title: "Review & Publish", desc: "Once the story is done, the team reviews together. When ready, the story is published with credits for all contributors." }
      },
      benefitsTitle: "What You Get",
      benefitsIntro: "Senara is a nonprofit platform, so we can't offer payment. But there are other things you can gain:",
      benefits: {
        certificate: { title: "Certificate", desc: "Contribution certificate for your portfolio" },
        community: { title: "Community", desc: "Network with other creators and educators" },
        experience: { title: "Experience", desc: "Learn the interactive story creation process" },
        credit: { title: "Credit", desc: "Your name appears on every story you help create" },
        mentoring: { title: "Mentoring", desc: "Guidance from more experienced contributors" },
        impact: { title: "Impact", desc: "Your work helps people learn important things" }
      },
      ctaTitle: "Interested in Joining?",
      ctaDesc: "We'd love to hear from you. Tell us a bit about yourself and how you'd like to contribute.",
      ctaForm: "📝 Fill Contributor Form",
      ctaEmail: "✉️ Send Email",
      ctaTeamLink: "Meet the team behind Senara →",
      partnerTitle: "🤝 For Organizations & Partnerships",
      partnerDesc: "Do you represent a school, community, or organization that wants to collaborate with Senara? We're open to various forms of partnership, from custom story creation to joint programs.",
      partnerCta: "Contact for Partnership"
    },
    storyPage: {
      errorTitle: "Story not found",
      errorDesc: "The story you're looking for was not found or is no longer available.",
      backToCollection: "← Back to Collection",
      backToPath: "← Back to Learning Path",
      stats: {
        minutes: "Minutes",
        chapter: "Chapter",
        age: "Age",
        rating: "Rating"
      },
      saveTip: {
        title: "💡 You can save your progress anytime!",
        desc: "Click <strong>☰ Menu</strong> in the bottom right → select <strong>\"Save\"</strong>. To continue, select <strong>\"Load\"</strong>."
      },
      comingSoon: "🔜 Coming Soon",
      comingSoonDesc: "This story is currently in development",
      playNow: "Play Now",
      scrollMore: "Scroll for more info",
      aboutStory: "About This Story",
      learningOutcomes: "What You'll Learn",
      credits: "Credits",
      shareStory: "Share This Story",
      linkCopied: "Link copied!",
      pathProgress: "Chapter {order} of {total} • Progress: {completed}/{progressTotal}",
      features: {
        voiceActed: "🎙️ Voice Acted",
        multiplePaths: "🔀 Multiple Paths",
        achievements: "🏆 Achievements"
      }
    }
} };
