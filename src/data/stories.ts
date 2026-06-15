export interface Story {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  age: string;
  series: string;
  featured: boolean;
  thumbnail: string;
  duration: number;
  chapters: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  learningOutcomes: string[];
  author: string;
  scriptBy?: string;
  collaboration?: string;
  createdAt: string;
  releaseDate: string;
  status: 'published' | 'draft' | 'coming-soon';
  rating: number;
  plays: number;
  voiceActed: boolean;
  hasChoices: boolean;
  hasAchievements: boolean;
}

export const allStoriesData: Story[] = [
  {
    id: "pahlawan-kesehatan-mental",
    title: "Mental Health Hero",
    description: "Join Vani as she faces emotional challenges and discovers the true strength in maintaining mental health.",
    longDescription: "Mental health is not a weakness. It is a strength. Follow Vani's journey through emotional challenges, from anxiety to depression, while learning to recognize signs of mental disorders and understanding when to seek help. Through 5 in-depth chapters, you'll uncover myths surrounding mental health, reduce stigma, and master relaxation techniques you can practice right away. Be a Mental Health Hero, not just for yourself, but for the people you love.",
    category: "mind-emotions",
    tags: ["Mental Health", "Emotional Skills", "Self-Care"],
    age: "13+",
    series: "Mental Health Series",
    featured: true,
    thumbnail: "assets/thumbnails/pahlawan-kesehatan-mental.svg",
    duration: 45,
    chapters: 5,
    difficulty: "Intermediate",
    learningOutcomes: [
      "Understand mental health literacy concepts",
      "Recognize symptoms of mental disorders",
      "Reduce stigma towards mental health",
      "Know when to seek professional help",
      "Learn relaxation techniques (Box Breathing, Progressive Muscle Relaxation)"
    ],
    author: "Senara Team",
    scriptBy: "Diceritain Team",
    collaboration: "In partnership with diceritain.id",
    createdAt: "2024-01-15",
    releaseDate: "2024-01-15",
    status: "published",
    rating: 4.8,
    plays: 1250,
    voiceActed: true,
    hasChoices: true,
    hasAchievements: true
  },
  {
    id: "teman-baru-di-kelas-8b",
    title: "New Friend in Class 8B",
    description: "Follow Alya, a Deaf student joining a new class, and Rafi who learns to be a good friend through BISINDO.",
    longDescription: "A warm story about inclusion and sign language. Alya is a Deaf student who just transferred to Class 8B. Through Rafi's journey learning BISINDO and classmates who begin to understand how to communicate with Alya, you'll learn about empathy, inclusion, and the basics of Indonesian Sign Language (BISINDO). A story about friendship that transcends language barriers.",
    category: "relationships-social",
    tags: ["Inclusion", "BISINDO", "Sign Language", "Empathy", "Friendship"],
    age: "10+",
    series: "Inklusi Series",
    featured: true,
    thumbnail: "assets/thumbnails/teman-baru-di-kelas-8b.svg",
    duration: 25,
    chapters: 8,
    difficulty: "Beginner",
    learningOutcomes: [
      "Understand how to communicate with Deaf friends",
      "Learn the basics of BISINDO (Indonesian Sign Language)",
      "Build empathy and inclusion in school environments",
      "Appreciate diverse ways of communicating",
      "Learn to be a good ally for friends with disabilities"
    ],
    author: "Senara Team",
    scriptBy: "Senara Team",
    createdAt: "2024-12-10",
    releaseDate: "2024-12-10",
    status: "published",
    rating: 4.5,
    plays: 120,
    voiceActed: false,
    hasChoices: true,
    hasAchievements: true
  },
  {
    id: "digital-literacy-navigator",
    title: "Digital Literacy Navigator",
    description: "Join Raka as he learns to navigate social media safely, spot fake news, protect his privacy, and deal with cyberbullying.",
    longDescription: "Social media is everywhere, but how well do you really know it? Follow Raka, a regular high school student, as he discovers the hidden dangers of the digital world — from viral misinformation and privacy risks to cyberbullying. Through interactive choices and real-world scenarios, you'll learn to think critically, protect yourself online, and become a responsible digital citizen. A must-read for anyone who spends time on social media.",
    category: "digital-life-online",
    tags: ["Digital Literacy", "Social Media", "Fake News", "Privacy", "Cyberbullying"],
    age: "13+",
    series: "Digital Literacy Series",
    featured: true,
    thumbnail: "assets/thumbnails/digital-literacy-navigator.svg",
    duration: 35,
    chapters: 2,
    difficulty: "Beginner",
    learningOutcomes: [
      "Recognize misinformation and fake news on social media",
      "Understand the importance of privacy settings and 2FA",
      "Learn how to deal with cyberbullying as a bystander and victim",
      "Develop critical thinking skills for evaluating digital content",
      "Practice responsible digital citizenship and online ethics",
      "Understand filter bubbles and echo chambers",
      "Recognize signs of social media addiction",
      "Develop healthy social media habits"
    ],
    author: "Senara Team",
    scriptBy: "Senara Team",
    createdAt: "2025-06-12",
    releaseDate: "2026-06-12",
    status: "published",
    rating: 4.0,
    plays: 50,
    voiceActed: false,
    hasChoices: true,
    hasAchievements: true
  },
  {
    id: "dompet-kosong-mimpi-penuh",
    title: "Empty Wallet, Full Dreams",
    description: "Follow Sari as she learns to manage money, build a budget, and take control of her financial future.",
    longDescription: "Sari is a college student who always runs out of money before the end of the month. Through her journey of financial discovery, you'll learn the 50/30/20 budgeting rule, how to distinguish needs from wants, the difference between good debt and bad debt, and the power of compound interest. By the end, you'll have the tools to build your own financial plan and start saving for your dreams.",
    category: "money-young-adult-life",
    tags: ["Financial Literacy", "Budgeting", "Saving", "Personal Finance", "Money Management"],
    age: "13+",
    series: "Financial Literacy Series",
    featured: true,
    thumbnail: "assets/thumbnails/dompet-kosong-mimpi-penuh.svg",
    duration: 25,
    chapters: 1,
    difficulty: "Beginner",
    learningOutcomes: [
      "Understand and apply the 50/30/20 budgeting rule",
      "Distinguish between needs and wants in daily spending",
      "Recognize the difference between good debt and bad debt",
      "Understand compound interest and its long-term impact",
      "Build a personal financial plan with emergency fund"
    ],
    author: "Senara Team",
    scriptBy: "Senara Team",
    createdAt: "2026-06-13",
    releaseDate: "2026-06-13",
    status: "coming-soon",
    rating: 4.0,
    plays: 0,
    voiceActed: false,
    hasChoices: true,
    hasAchievements: true
  },
  {
    id: "komunikasi-resolusi-konflik",
    title: "Communication & Conflict Resolution",
    description: "Follow Dimas as he navigates friendship conflicts, learns active listening, and discovers the power of peaceful communication.",
    longDescription: "Dimas and his best friend Raka have a falling out over a group project. Through this relatable conflict, you'll learn active listening techniques, how to use 'I feel' statements, the DESC method for resolving disagreements, and how to handle someone's anger with empathy. A story that shows conflict doesn't have to destroy relationships — it can strengthen them.",
    category: "relationships-social",
    tags: ["Communication", "Conflict Resolution", "Active Listening", "Empathy", "Friendship"],
    age: "13+",
    series: "Life Skills Series",
    featured: true,
    thumbnail: "assets/thumbnails/komunikasi-resolusi-konflik.svg",
    duration: 20,
    chapters: 1,
    difficulty: "Beginner",
    learningOutcomes: [
      "Practice active listening techniques",
      "Use 'I feel' statements to express emotions constructively",
      "Apply the DESC method for structured conflict resolution",
      "Respond with empathy when others are angry",
      "Understand that healthy conflict can strengthen relationships"
    ],
    author: "Senara Team",
    scriptBy: "Senara Team",
    createdAt: "2026-06-13",
    releaseDate: "2026-06-13",
    status: "coming-soon",
    rating: 4.0,
    plays: 0,
    voiceActed: false,
    hasChoices: true,
    hasAchievements: true
  },
  {
    id: "misi-nol-sampah",
    title: "Zero Waste Mission",
    description: "Follow Naya as she starts a zero-waste initiative at her school, learning the 5R framework and inspiring others to take action.",
    longDescription: "Naya is a middle schooler horrified by a growing trash mountain near her school. She decides to take action, forming an 'Eco Warriors' group and learning the 5R framework (Refuse, Reduce, Reuse, Recycle, Rot). Through her journey, you'll discover why Refuse is more important than Recalculate, how long everyday waste takes to decompose, and how individual action creates ripple effects that inspire entire communities.",
    category: "social-issues",
    tags: ["Environment", "Zero Waste", "Sustainability", "5R Framework", "Climate Action"],
    age: "10+",
    series: "Environmental Series",
    featured: true,
    thumbnail: "assets/thumbnails/misi-nol-sampah.svg",
    duration: 20,
    chapters: 1,
    difficulty: "Beginner",
    learningOutcomes: [
      "Understand the 5R framework and its correct priority order",
      "Learn decomposition times of common waste materials",
      "Calculate the impact of individual waste reduction",
      "Develop skills to convince others about environmental action",
      "Take practical steps toward a zero-waste lifestyle"
    ],
    author: "Senara Team",
    scriptBy: "Senara Team",
    createdAt: "2026-06-13",
    releaseDate: "2026-06-13",
    status: "coming-soon",
    rating: 4.0,
    plays: 0,
    voiceActed: false,
    hasChoices: true,
    hasAchievements: true
  }
];


