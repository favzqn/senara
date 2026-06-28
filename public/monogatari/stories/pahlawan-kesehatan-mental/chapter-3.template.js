/**
 * Chapter 3: Strategi Pertolongan Mandiri
 * 
 * Learning Outcomes:
 * - Belajar strategi coping yang sehat
 * - Memahami teknik manajemen stres
 * - Mengembangkan resiliensi
 * 
 * Duration: ~45 minutes
 * Status: Placeholder - extract from original file when ready
 */

/* global monogatari */

const Chapter3Template = (lang) => {
  "Scene-98": [
    "stop sound typewriter",
    "show scene scene-1",
    "play voice chap3-2",
    "v " + t('ch3.scene98.v1'),
    "stop voice chap3-2",
    "play voice chap3-3",
    "v " + t('ch3.scene98.v2'),
    "stop voice chap3-3",
    "play voice chap3-4",
    "v " + t('ch3.scene98.v3'),
    "stop voice chap3-4",
    "jump Scene-99",
  ],

  "Scene-99": [
    "show scene scene-2",
    "play voice chap3-5",
    "v " + t('ch3.scene99.v1'),
    "stop voice chap3-5",
    {
      Choice: {
        Dialog:
          "Dunia remaja itu hanya penuh dengan kebahagiaan tanpa ada sedikitpun stress atau rasa tertekan ",
        "Saya setuju dengan pendapat di bawah": {
          Text: t('ch3.scene99.text2'),
          Do: "jump Scene-100-salah",
        },
        "Saya tidak setuju dengan pendapat di bawah": {
          Text: t('ch3.scene99.text3'),
          Do: "jump Scene-100-benar",
        },
      },
    },
  ],

  "Scene-100-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "play voice chap3-7",
    "v " + t('ch3.scene100benar.v1'),
    "stop voice chap3-7",
    "jump Scene-101",
  ],

  "Scene-100-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "play voice chap3-6",
    "v " + t('ch3.scene100salah.v1'),
    "stop voice chap3-6",
    "jump Scene-101",
  ],

  "Scene-101": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-4",
    "play voice chap3-8",
    "v " + t('ch3.scene101.v1'),
    "stop voice chap3-8",
    "jump Scene-102",
  ],

  "Scene-102": [
    "show scene scene-stress",
    "play voice chap3-9",
    "v " + t('ch3.scene102.v1'),
    "stop voice chap3-9",
    "jump Scene-103",
  ],

  "Scene-103": [
    "show scene scene-stress-2",
    "play voice chap3-10",
    "v " + t('ch3.scene103.v1'),
    "stop voice chap3-10",
    "jump Scene-104",
  ],

  "Scene-104": [
    "show scene scene-stress-3",
    "play voice chap3-11",
    "v " + t('ch3.scene104.v1'),
    "stop voice chap3-11",
    "jump Scene-105",
  ],

  "Scene-105": [
    "show scene scene-stress-4",
    "play voice chap3-12",
    "v " + t('ch3.scene105.v1'),
    "stop voice chap3-12",
    "jump Scene-106",
  ],

  "Scene-106": [
    "show scene scene-2",
    "play voice chap3-13",
    "v " + t('ch3.scene106.v1'),
    "stop voice chap3-13",
    "play voice chap3-14",
    "v " + t('ch3.scene106.v2'),
    "stop voice chap3-14",
    "jump Scene-107",
  ],

  "Scene-107": [
    "show scene scene-box-breathing",
    "play voice 88",
    "v " + t('ch3.scene107.v1'),
    "stop voice 88",
    "play voice 89",
    "v " + t('ch3.scene107.v2'),
    "stop voice 89",
    "play voice 90",
    "v " + t('ch3.scene107.v3'),
    "stop voice 90",
    "play voice 91",
    "v " + t('ch3.scene107.v4'),
    "stop voice 91",
    "jump Scene-108",
  ],

  "Scene-108": [
    "show scene scene-progressive-muscle",
    "play voice 92",
    "v " + t('ch3.scene108.v1'),
    "stop voice 92",
    "play voice 93",
    "v " + t('ch3.scene108.v2'),
    "stop voice 93",
    "jump Scene-109",
  ],

  "Scene-109": [
    "show scene scene-ask-small",
    "play voice chap3-21",
    "v " + t('ch3.scene109.v1'),
    "stop voice chap3-21",
    "jump Scene-110",
  ],

  "Scene-110": [
    "show scene scene-stress-definition",
    "play voice chap3-22",
    "v " + t('ch3.scene110.v1'),
    "stop voice chap3-22",
    "play voice chap3-23",
    "v " + t('ch3.scene110.v2'),
    "stop voice chap3-23",
    "play voice chap3-24",
    "v " + t('ch3.scene110.v3'),
    "stop voice chap3-24",
    "jump Scene-111",
  ],

  "Scene-111": [
    "show scene scene-2",
    "play voice chap3-25",
    "v " + t('ch3.scene111.v1'),
    "stop voice chap3-25",
    {
      Choice: {
        Dialog: t('ch3.scene111.q2'),
        "Pernyataan di bawah benar": {
          Text: t('ch3.scene111.text3'),
          Do: "jump Scene-112-salah",
        },
        "Pernyataan di bawah salah": {
          Text: t('ch3.scene111.text4'),
          Do: "jump Scene-112-benar",
        },
      },
    },
  ],

  "Scene-112-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "play voice chap3-27",
    "v " + t('ch3.scene112benar.v1'),
    "stop voice chap3-27",
    "jump Scene-113",
  ],

  "Scene-112-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "play voice chap3-26",
    "v " + t('ch3.scene112salah.v1'),
    "stop voice chap3-26",
    "jump Scene-113",
  ],

  "Scene-113": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-stress-level",
    "play voice chap3-28",
    "v " + t('ch3.scene113.v1'),
    "stop voice chap3-28",
    "play voice chap3-29",
    "v " + t('ch3.scene113.v2'),
    "stop voice chap3-29",
    "play voice chap3-30",
    "v " + t('ch3.scene113.v3'),
    "stop voice chap3-30",
    "play voice chap3-31",
    "v " + t('ch3.scene113.v4'),
    "stop voice chap3-31",
    "play voice chap3-32",
    "v " + t('ch3.scene113.v5'),
    "stop voice chap3-32",
    "jump Scene-114",
  ],

  "Scene-114": [
    "show scene scene-ask-small",
    "play voice chap3-33",
    "v " + t('ch3.scene114.v1'),
    "stop voice chap3-33",
    "jump Scene-115",
  ],

  "Scene-115": [
    "show scene scene-stress-response",
    "play voice chap3-34",
    "v " + t('ch3.scene115.v1'),
    "stop voice chap3-34",
    "play voice chap3-35",
    "v " + t('ch3.scene115.v2'),
    "stop voice chap3-35",
    "play voice chap3-36",
    "v " + t('ch3.scene115.v3'),
    "stop voice chap3-36",
    "jump Scene-116",
  ],

  "Scene-116": [
    "show scene scene-stress-response-2",
    "play voice chap3-37",
    "v " + t('ch3.scene116.v1'),
    "stop voice chap3-37",
    "play voice chap3-38",
    "v " + t('ch3.scene116.v2'),
    "stop voice chap3-38",
    "jump Scene-117",
  ],

  "Scene-117": [
    "show scene scene-stress-response-3",
    "play voice chap3-39",
    "v " + t('ch3.scene117.v1'),
    "stop voice chap3-39",
    "jump Scene-118",
  ],

  "Scene-118": [
    "show scene scene-stress-type",
    "play voice chap3-40",
    "v " + t('ch3.scene118.v1'),
    "stop voice chap3-40",
    "play voice chap3-41",
    "v " + t('ch3.scene118.v2'),
    "stop voice chap3-41",
    "jump Scene-120",
  ],

  // Skip this scene

  //   "Scene-119": [
  //     "show scene scene-stress-4",
  //     "play voice chap3-42",
  //     "v Di awal cerita kita sudah membahas stress yang berasal dari tugas dan ujian yang sulit. Kira-kira ini jenis stress apa ya?",
  //     "jump Scene-120",
  //   ],

  "Scene-120": [
    "show scene scene-2",
    "play voice chap3-42",
    "v " + t('ch3.scene120.v1'),
    "stop voice chap3-42",
    {
      Choice: {
        Dialog:
          "Stres karena tugas dan ujian yang sulit merupakan jenis stres yang bersumber dari …",
        "Stres Akademik": {
          Text: t('ch3.scene120.text2'),
          Do: "jump Scene-121-benar",
        },
        "Stres Intrapersonal": {
          Text: t('ch3.scene120.text3'),
          Do: "jump Scene-121-salah",
        },
        "Stres Interpersonal": {
          Text: t('ch3.scene120.text4'),
          Do: "jump Scene-121-salah",
        },
        "Stres Lingkungan": {
          Text: t('ch3.scene120.text5'),
          Do: "jump Scene-121-salah",
        },
      },
    },
  ],

  "Scene-121-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "play voice chap3-44",
    "v " + t('ch3.scene121benar.v1'),
    "stop voice chap3-44",
    "jump Scene-122",
  ],

  "Scene-121-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "play voice chap3-43",
    "v " + t('ch3.scene121salah.v1'),
    "stop voice chap3-43",
    "jump Scene-122",
  ],

  "Scene-122": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-stress-akademik",
    "play voice chap3-45",
    "v " + t('ch3.scene122.v1'),
    "stop voice chap3-45",
    "jump Scene-123",
  ],

  "Scene-123": [
    "show scene scene-2",
    "play voice chap3-46",
    "v " + t('ch3.scene123.v1'),
    "stop voice chap3-46",
    {
      Choice: {
        Dialog:
          "Stres karena bertengkar dengan Saudara merupakan jenis stres yang bersumber dari …",
        "Stres Akademik": {
          Text: t('ch3.scene123.text2'),
          Do: "jump Scene-124-salah",
        },
        "Stres Intrapersonal": {
          Text: t('ch3.scene123.text3'),
          Do: "jump Scene-124-salah",
        },
        "Stres Interpersonal": {
          Text: t('ch3.scene123.text4'),
          Do: "jump Scene-124-benar",
        },
        "Stres Lingkungan": {
          Text: t('ch3.scene123.text5'),
          Do: "jump Scene-124-salah",
        },
      },
    },
  ],

  "Scene-124-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "play voice chap3-49",
    "v " + t('ch3.scene124benar.v1'),
    "stop voice chap3-49",
    "jump Scene-125",
  ],

  "Scene-124-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "play voice chap3-48",
    "v " + t('ch3.scene124salah.v1'),
    "stop voice chap3-48",
    "jump Scene-125",
  ],

  "Scene-125": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-stress-interpersonal",
    "play voice chap3-50",
    "v " + t('ch3.scene125.v1'),
    "stop voice chap3-50",
    "jump Scene-126",
  ],

  "Scene-126": [
    "show scene scene-2",
    "play voice chap3-46",
    "v " + t('ch3.scene126.v1'),
    "stop voice chap3-46",
    "play voice chap3-47",
    {
      Choice: {
        Dialog:
          "Stres karena listrik dan Internet yang mati saat akan mengerjakan tugas merupakan jenis stres yang bersumber dari...",
        "Stres Akademik": {
          Text: t('ch3.scene126.text2'),
          Do: "jump Scene-127-salah",
        },
        "Stres Intrapersonal": {
          Text: t('ch3.scene126.text3'),
          Do: "jump Scene-127-salah",
        },
        "Stres Interpersonal": {
          Text: t('ch3.scene126.text4'),
          Do: "jump Scene-127-salah",
        },
        "Stres Lingkungan": {
          Text: t('ch3.scene126.text5'),
          Do: "jump Scene-127-benar",
        },
      },
    },
  ],

  "Scene-127-benar": [
    "stop voice chap3-47",
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "play voice chap3-52",
    "v " + t('ch3.scene127benar.v1'),
    "stop voice chap3-52",
    "jump Scene-128",
  ],

  "Scene-127-salah": [
    "stop voice chap3-47",
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "play voice chap3-51",
    "v " + t('ch3.scene127salah.v1'),
    "stop voice chap3-51",
    "jump Scene-128",
  ],

  "Scene-128": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-stress-lingkungan",
    "play voice chap3-53",
    "v " + t('ch3.scene128.v1'),
    "stop voice chap3-53",
    "jump Scene-129",
  ],

  "Scene-129": [
    "show scene scene-2",
    "play voice chap3-54",
    "v " + t('ch3.scene129.v1'),
    "stop voice chap3-54",
    "play voice chap3-55",
    {
      Choice: {
        Dialog:
          "Stres karena memandang masalah dengan cara yang terlalu negatif merupakan jenis stres yang bersumber dari …",
        "Stres Akademik": {
          Text: t('ch3.scene129.text2'),
          Do: "jump Scene-130-salah",
        },
        "Stres Intrapersonal": {
          Text: t('ch3.scene129.text3'),
          Do: "jump Scene-130-benar",
        },
        "Stres Interpersonal": {
          Text: t('ch3.scene129.text4'),
          Do: "jump Scene-130-salah",
        },
        "Stres Lingkungan": {
          Text: t('ch3.scene129.text5'),
          Do: "jump Scene-130-salah",
        },
      },
    },
  ],

  "Scene-130-benar": [
    "stop voice chap3-55",
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "play voice chap3-57",
    "v " + t('ch3.scene130benar.v1'),
    "stop voice chap3-57",
    "jump Scene-131",
  ],

  "Scene-130-salah": [
    "stop voice chap3-55",
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "play voice chap3-56",
    "v " + t('ch3.scene130salah.v1'),
    "stop voice chap3-56",
    "jump Scene-131",
  ],

  "Scene-131": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-stress-intrapersonal",
    "play voice chap3-58",
    "v " + t('ch3.scene131.v1'),
    "stop voice chap3-58",
    "play voice chap3-59",
    "v " + t('ch3.scene131.v2'),
    "stop voice chap3-59",
    "jump Scene-132",
  ],

  "Scene-132": [
    "show scene scene-stress-bucket",
    "play voice chap3-60",
    "v " + t('ch3.scene132.v1'),
    "stop voice chap3-60",
    "jump Scene-133",
  ],

  "Scene-133": [
    "show scene scene-stress-bucket-2",
    "play voice chap3-61",
    "v " + t('ch3.scene133.v1'),
    "stop voice chap3-61",
    "play voice chap3-62",
    "v " + t('ch3.scene133.v2'),
    "stop voice chap3-62",
    "jump Scene-134",
  ],

  "Scene-134": [
    "show scene scene-stress-bucket-3",
    "play voice chap3-63",
    "v " + t('ch3.scene134.v1'),
    "stop voice chap3-63",
    "play voice chap3-64",
    "v " + t('ch3.scene134.v2'),
    "stop voice chap3-64",
    "play voice chap3-65",
    "v " + t('ch3.scene134.v3'),
    "stop voice chap3-65",
    "play voice chap3-66",
    "v " + t('ch3.scene134.v4'),
    "stop voice chap3-66",
    "jump Scene-135",
  ],

  "Scene-135": [
    "show scene scene-stress-bucket-4",
    "play voice chap3-67",
    "v " + t('ch3.scene135.v1'),
    "stop voice chap3-67",
    "play voice chap3-68",
    "v " + t('ch3.scene135.v2'),
    "stop voice chap3-68",
    "play voice chap3-69",
    "v " + t('ch3.scene135.v3'),
    "stop voice chap3-69",
    "play voice chap3-70",
    "v " + t('ch3.scene135.v4'),
    "stop voice chap3-70",
    "jump Scene-136",
  ],

  "Scene-136": [
    "show scene scene-stress-bucket-5",
    "play voice chap3-71",
    "v " + t('ch3.scene136.v1'),
    "stop voice chap3-71",
    "play voice chap3-72",
    "v " + t('ch3.scene136.v2'),
    "stop voice chap3-72",
    "play voice chap3-73",
    "v " + t('ch3.scene136.v3'),
    "stop voice chap3-73",
    "play voice chap3-74",
    "v " + t('ch3.scene136.v4'),
    "stop voice chap3-74",
    "play voice chap3-75",
    "v " + t('ch3.scene136.v5'),
    "stop voice chap3-75",
    "jump Scene-137",
  ],

  "Scene-137": [
    "show scene scene-ask-small",
    "play voice chap3-76",
    "v " + t('ch3.scene137.v1'),
    "stop voice chap3-76",
    "play voice chap3-77",
    "v " + t('ch3.scene137.v2'),
    "stop voice chap3-77",
    "play voice chap3-78",
    "v " + t('ch3.scene137.v3'),
    "stop voice chap3-78",
    "play voice chap3-79",
    "v " + t('ch3.scene137.v4'),
    "stop voice chap3-79",
    "jump Scene-138",
  ],

  "Scene-138": [
    "show scene scene-mental-atlet",
    "play voice chap3-80",
    "v " + t('ch3.scene138.v1'),
    "stop voice chap3-80",
    "jump Scene-148",
  ],

  "Scene-148": [
    "show scene scene-2",
    "play voice chap3-81",
    "v " + t('ch3.scene148.v1'),
    "stop voice chap3-81",
    {
      Choice: {
        Dialog:
          "Menjaga kesehatan mental di sekolah itu mirip dengan menjadi ...",
        "Atlet lari jarak pendek": {
          Text: t('ch3.scene148.text2'),
          Do: "jump Scene-149-salah",
        },
        "Atlet lari marathon": {
          Text: t('ch3.scene148.text3'),
          Do: "jump Scene-149-benar",
        },
      },
    },
  ],

  "Scene-149-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "play voice chap3-83",
    "v " + t('ch3.scene149benar.v1'),
    "stop voice chap3-83",
    "jump Scene-147",
  ],

  "Scene-149-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "play voice chap3-82",
    "v " + t('ch3.scene149salah.v1'),
    "stop voice chap3-82",
    "jump Scene-147",
  ],

  "Scene-147": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-mental-atlet-2",
    "play voice chap3-84",
    "v " + t('ch3.scene147.v1'),
    "stop voice chap3-84",
    "play voice chap3-85",
    "v " + t('ch3.scene147.v2'),
    "stop voice chap3-85",
    "jump Scene-148",
  ],

  "Scene-148": [
    "show scene scene-mental-atlet-3",
    "play voice chap3-86",
    "v " + t('ch3.scene148.v1'),
    "stop voice chap3-86",
    "jump Scene-149",
  ],

  "Scene-149": [
    "show scene scene-mental-atlet-4",
    "play voice chap3-87",
    "v " + t('ch3.scene149.v1'),
    "stop voice chap3-87",
    "jump Scene-147",
  ],

  "Scene-147": [
    "show scene scene-mental-atlet-5",
    "play voice chap3-88",
    "v " + t('ch3.scene147.v1'),
    "stop voice chap3-88",
    "jump Scene-148",
  ],

  "Scene-148": [
    "show scene scene-mental-atlet-6",
    "play voice chap3-89",
    "v " + t('ch3.scene148.v1'),
    "stop voice chap3-89",
    "jump Scene-149",
  ],

  "Scene-149": [
    "show scene scene-mental-atlet-7",
    "play voice chap3-90",
    "v " + t('ch3.scene149.v1'),
    "stop voice chap3-90",
    "jump Scene-147",
  ],

  "Scene-147": [
    "show scene scene-badge-acquired-chapter-3",
    "play voice chap3-91",
    "v " + t('ch3.scene147.v1'),
    "stop voice chap3-91",
    "play voice chap3-92",
    "v " + t('ch3.scene147.v2'),
    "stop voice chap3-92",
    "jump Scene-148",
  ],

  "Scene-148": [
    "show scene scene-badge-list-chapter-3",
    "play voice chap3-93",
    "v " + t('ch3.scene148.v1'),
    "stop voice chap3-93",
    "jump Scene-149",
  ],

  "Scene-149": [
    "show scene scene-2",
    "play voice chap3-94",
    'v Kamu perlu mempraktikkan keberanian menghadapi stress yang sudah kita bahas. Lalu, saat merasa stresnya terlalu banyak ingat "menguras stress seperti menguras air di ember". Ingat juga untuk membangun gaya hidup seperti atlet!',
    "stop voice chap3-94",
    "play voice chap3-95",
    "v " + t('ch3.scene149.v1'),
    "stop voice chap3-95",
    "jump Loading-4",
  ],
};

// Make globally accessible for index.js merging
window.Chapter3 = Chapter3;

window.Chapter3Template = Chapter3Template;
