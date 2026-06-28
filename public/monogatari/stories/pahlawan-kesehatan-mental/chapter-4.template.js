/**
 * Chapter 4: Bantuan Profesional
 * 
 * Learning Outcomes:
 * - Memahami peran profesional kesehatan mental
 * - Mengetahui jenis-jenis bantuan profesional
 * - Belajar cara mencari bantuan
 * 
 * Duration: ~45 minutes
 * Status: Placeholder - extract from original file when ready
 */

/* global monogatari */

const Chapter4Template = (lang) => {
  "Scene-150": [
    "stop sound typewriter",

    "show scene scene-1",
    "v " + t('ch4.scene150.v1'),
    "v " + t('ch4.scene150.v2'),
    "v " + t('ch4.scene150.v3'),
    "jump Scene-151",
  ],

  "Scene-151": [
    "show scene scene-2",
    "v " + t('ch4.scene151.v1'),
    {
      Choice: {
        Dialog:
          "Seseorang yang memiliki banyak pengetahuan mengenai kesehatan mental tidak akan membutuhkan bantuan orang lain untuk menjaga kesehatan mentalnya",
        "Saya setuju dengan pendapat di bawah": {
          Text: t('ch4.scene151.text2'),
          Do: "jump Scene-151-salah",
        },
        "Saya tidak setuju dengan pendapat di bawah": {
          Text: t('ch4.scene151.text3'),
          Do: "jump Scene-151-benar",
        },
      },
    },
  ],

  "Scene-151-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    // "play voice chap3-83",
    "v " + t('ch4.scene151benar.v1'),
    // "stop voice chap3-83",
    "jump Scene-152",
  ],

  "Scene-151-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    // "play voice chap3-82",
    "v " + t('ch4.scene151salah.v1'),
    // "stop voice chap3-82",
    "jump Scene-152",
  ],

  "Scene-152": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-1",
    "v " + t('ch4.scene152.v1'),
    "v " + t('ch4.scene152.v2'),
    "jump Scene-153",
  ],

  "Scene-153": [
    "show scene scene-physical-pain-chap4",
    "v " + t('ch4.scene153.v1'),
    "jump Scene-154",
  ],

  "Scene-154": [
    "show scene scene-mental-illness-chap4",
    "v " + t('ch4.scene154.v1'),
    "jump Scene-155",
  ],

  "Scene-155": [
    "show scene scene-1",
    "v " + t('ch4.scene155.v1'),
    "v " + t('ch4.scene155.v2'),
    "jump Scene-156",
  ],

  "Scene-156": [
    "show scene scene-2",
    "v " + t('ch4.scene156.v1'),
    "v " + t('ch4.scene156.v2'),
    "v " + t('ch4.scene156.v3'),
    "v " + t('ch4.scene156.v4'),
    "v " + t('ch4.scene156.v5'),
    "jump Scene-157",
  ],

  "Scene-157": [
    "show scene scene-box-breathing",
    "play voice 88",
    "v " + t('ch4.scene157.v1'),
    "stop voice 88",
    "play voice 89",
    "v " + t('ch4.scene157.v2'),
    "stop voice 89",
    "play voice 90",
    "v " + t('ch4.scene157.v3'),
    "stop voice 90",
    "play voice 91",
    "v " + t('ch4.scene157.v4'),
    "stop voice 91",
    "jump Scene-158",
  ],

  "Scene-158": [
    "show scene scene-progressive-muscle",
    "play voice 92",
    "v " + t('ch4.scene158.v1'),
    "stop voice 92",
    "play voice 93",
    "v " + t('ch4.scene158.v2'),
    "stop voice 93",
    "jump Scene-159",
  ],

  "Scene-159": [
    "show scene scene-2",
    "v " + t('ch4.scene159.v1'),
    "v " + t('ch4.scene159.v2'),
    "Bersiap-siap ya! Setelah ini kita akan langsung mulai perkenalannya!",
    "jump Scene-160",
  ],

  "Scene-160": [
    "show scene scene-2",
    "v " + t('ch4.scene160.v1'),
    {
      Choice: {
        Dialog:
          "Aku menyelesaikan pendidikan magister alias S2 profesi psikolog setelah menyelesaikan program sarjana alias S1 psikologi. Aku membantu orang lain untuk menjadi sehat mental dengan membantu mereka mengelola pikiran, emosi, hingga perilakunya. Aku adalah … ",
        Psikiater: {
          Text: t('ch4.scene160.text2'),
          Do: "jump Scene-160-salah",
        },
        Psikolog: {
          Text: t('ch4.scene160.text3'),
          Do: "jump Scene-160-benar",
        },
        Konselor: {
          Text: t('ch4.scene160.text4'),
          Do: "jump Scene-160-salah",
        },
      },
    },
  ],

  "Scene-160-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    // "play voice chap3-83",
    "v " + t('ch4.scene160benar.v1'),
    // "stop voice chap3-83",
    "jump Scene-161",
  ],

  "Scene-160-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    // "play voice chap3-82",
    "v " + t('ch4.scene160salah.v1'),
    // "stop voice chap3-82",
    "jump Scene-161",
  ],

  "Scene-161": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-know-psychologist",
    "v " + t('ch4.scene161.v1'),
    "v " + t('ch4.scene161.v2'),
    "v " + t('ch4.scene161.v3'),
    "jump Scene-162",
  ],

  "Scene-162": [
    "show scene scene-2",
    "v " + t('ch4.scene162.v1'),
    {
      Choice: {
        Dialog:
          "Aku menyelesaikan pendidikan untuk menjadi dokter umum. Lalu, aku menjalani pendidikan lagi untuk menjadi dokter yang memiliki spesialisasi di kesehatan jiwa. Aku adalah … ",
        Psikiater: {
          Text: t('ch4.scene162.text2'),
          Do: "jump Scene-162-benar",
        },
        Psikolog: {
          Text: t('ch4.scene162.text3'),
          Do: "jump Scene-162-salah",
        },
        Konselor: {
          Text: t('ch4.scene162.text4'),
          Do: "jump Scene-162-salah",
        },
      },
    },
  ],

  "Scene-162-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    // "play voice chap3-83",
    "v " + t('ch4.scene162benar.v1'),
    // "stop voice chap3-83",
    "jump Scene-163",
  ],

  "Scene-162-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    // "play voice chap3-82",
    "v " + t('ch4.scene162salah.v1'),
    // "stop voice chap3-82",
    "jump Scene-163",
  ],

  "Scene-163": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-know-psychiatrist",
    "v " + t('ch4.scene163.v1'),
    "v " + t('ch4.scene163.v2'),
    "jump Scene-164",
  ],

  "Scene-164": [
    "show scene scene-2",
    "v " + t('ch4.scene164.v1'),
    {
      Choice: {
        Dialog:
          "Tugasku adalah membantu seseorang menyelesaikan masalah melalui proses konseling. Aku memiliki latar belakang pendidikan sarjana (S1) Psikologi atau Bimbingan dan Konseling.  Aku adalah …",
        Psikiater: {
          Text: t('ch4.scene164.text2'),
          Do: "jump Scene-164-salah",
        },
        Psikolog: {
          Text: t('ch4.scene164.text3'),
          Do: "jump Scene-164-salah",
        },
        Konselor: {
          Text: t('ch4.scene164.text4'),
          Do: "jump Scene-164-benar",
        },
      },
    },
  ],

  "Scene-164-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    // "play voice chap3-83",
    "v " + t('ch4.scene164benar.v1'),
    // "stop voice chap3-83",
    "jump Scene-165",
  ],

  "Scene-164-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    // "play voice chap3-82",
    "v " + t('ch4.scene164salah.v1'),
    // "stop voice chap3-82",
    "jump Scene-165",
  ],

  "Scene-165": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-know-counselor",
    "v " + t('ch4.scene165.v1'),
    "v " + t('ch4.scene165.v2'),
    "v " + t('ch4.scene165.v3'),
    "jump Scene-166",
  ],

  "Scene-166": [
    "show scene scene-why-pro1",
    "v " + t('ch4.scene166.v1'),
    "jump Scene-167",
  ],

  "Scene-167": [
    "show scene scene-why-pro2",
    "v " + t('ch4.scene167.v1'),
    "v " + t('ch4.scene167.v2'),
    "jump Scene-168",
  ],

  "Scene-168": [
    "show scene scene-why-pro3",
    "v " + t('ch4.scene168.v1'),
    "jump Scene-169",
  ],

  "Scene-169": [
    "show scene scene-why-pro4",
    "v " + t('ch4.scene169.v1'),
    "v " + t('ch4.scene169.v2'),
    "jump Scene-170",
  ],

  "Scene-170": [
    "show scene scene-why-pro5",
    "v " + t('ch4.scene170.v1'),
    "jump Scene-171",
  ],

  "Scene-171": [
    "show scene scene-2",
    "v " + t('ch4.scene171.v1'),
    {
      Choice: {
        Dialog:
          "Seluruh masalah kesehatan mental harus mendapatkan bantuan profesional",
        "Saya setuju dengan pendapat di bawah": {
          Text: t('ch4.scene171.text2'),
          Do: "jump Scene-171-salah",
        },
        "Saya tidak setuju dengan pendapat di bawah": {
          Text: t('ch4.scene171.text3'),
          Do: "jump Scene-171-benar",
        },
      },
    },
  ],

  "Scene-171-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    // "play voice chap3-83",
    "v " + t('ch4.scene171benar.v1'),
    // "stop voice chap3-83",
    "jump Scene-172",
  ],

  "Scene-171-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    // "play voice chap3-82",
    "v " + t('ch4.scene171salah.v1'),
    // "stop voice chap3-82",
    "jump Scene-172",
  ],

  "Scene-172": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-1",
    "v " + t('ch4.scene172.v1'),
    "v " + t('ch4.scene172.v2'),
    "v " + t('ch4.scene172.v3'),
    "v " + t('ch4.scene172.v4'),
    "jump Scene-173",
  ],

  "Scene-173": [
    "show scene scene-mental-condition-terms",
    "v " + t('ch4.scene173.v1'),
    "jump Scene-174",
  ],

  "Scene-174": [
    "show scene scene-checklist1-1",
    "v " + t('ch4.scene174.v1'),
    "jump Scene-175",
  ],

  "Scene-175": [
    "show scene scene-checklist1-2",
    "v " + t('ch4.scene175.v1'),
    "jump Scene-176",
  ],

  "Scene-176": [
    "show scene scene-checklist1-3",
    "v " + t('ch4.scene176.v1'),
    "jump Scene-177",
  ],

  "Scene-177": [
    "show scene scene-checklist1-4",
    "v " + t('ch4.scene177.v1'),
    "v " + t('ch4.scene177.v2'),
    "jump Scene-178",
  ],

  "Scene-178": [
    "show scene scene-checklist2",
    "v " + t('ch4.scene178.v1'),
    "v " + t('ch4.scene178.v2'),
    "v " + t('ch4.scene178.v3'),
    "v " + t('ch4.scene178.v4'),
    "jump Scene-179",
  ],

  "Scene-179": [
    "show scene scene-2",
    "v " + t('ch4.scene179.v1'),
    "v " + t('ch4.scene179.v2'),
    "jump Scene-180",
  ],

  "Scene-180": [
    "show scene scene-checklist3",
    "v " + t('ch4.scene180.v1'),
    "jump Scene-181",
  ],

  "Scene-181": [
    "show scene scene-school-counselor-1",
    "v " + t('ch4.scene181.v1'),
    "v " + t('ch4.scene181.v2'),
    "jump Scene-182",
  ],

  "Scene-182": [
    "show scene scene-school-counselor-2",
    "v " + t('ch4.scene182.v1'),
    "jump Scene-183",
  ],

  "Scene-183": [
    "show scene scene-school-counselor-3",
    "v " + t('ch4.scene183.v1'),
    "v " + t('ch4.scene183.v2'),
    "jump Scene-184",
  ],

  "Scene-184": [
    "show scene scene-school-counselor-4",
    "v " + t('ch4.scene184.v1'),
    "v " + t('ch4.scene184.v2'),
    "jump Scene-185",
  ],

  "Scene-185": [
    "show scene scene-diceritain-1",
    "v " + t('ch4.scene185.v1'),
    "jump Scene-186",
  ],

  "Scene-186": [
    "show scene scene-diceritain-2",
    "v " + t('ch4.scene186.v1'),
    "jump Scene-187",
  ],

  "Scene-187": [
    "show scene scene-diceritain-3",
    "v " + t('ch4.scene187.v1'),
    "jump Scene-188",
  ],

  "Scene-188": [
    "show scene scene-checklist-large",
    "v " + t('ch4.scene188.v1'),
    "jump Scene-189",
  ],

  "Scene-189": [
    "show scene scene-2",
    "v " + t('ch4.scene189.v1'),
    {
      Choice: {
        Dialog:
          "Saat mendapatkan hasil ujian tengah semester matematika, temanmu mendapatkan nilai yang rendah dan menjadi marah tiap kali ada yang membahas nilai tersebut. Hal yang dibutuhkan oleh temanmu adalah…",
        "Teman yang suportif dan menawarkan bantuan": {
          Text: t('ch4.scene189.text2'),
          Do: "jump Scene-189-benar",
        },
        "Mendapatkan bantuan profesional": {
          Text: t('ch4.scene189.text3'),
          Do: "jump Scene-189-salah",
        },
      },
    },
  ],

  "Scene-189-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    // "play voice chap3-83",
    "v " + t('ch4.scene189benar.v1'),
    // "stop voice chap3-83",
    "jump Scene-190",
  ],

  "Scene-189-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    // "play voice chap3-82",
    "v " + t('ch4.scene189salah.v1'),
    // "stop voice chap3-82",
    "jump Scene-190",
  ],

  "Scene-190": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-checklist1-4",
    "v " + t('ch4.scene190.v1'),
    "v " + t('ch4.scene190.v2'),
    "v " + t('ch4.scene190.v3'),
    "jump Scene-191",
  ],

  "Scene-191": [
    "show scene scene-2",
    "v " + t('ch4.scene191.v1'),
    {
      Choice: {
        Dialog:
          "Temanmu menceritakan bahwa ia merasa lelah karena terus dikejar-kejar penjahat kejam dengan kekuatan super. Terkadang ia bercerita bahwa ia ingin bunuh diri. Hal yang dibutuhkan oleh temanmu adalah …",
        "Teman yang suportif dan menawarkan bantuan": {
          Text: t('ch4.scene191.text2'),
          Do: "jump Scene-191-salah",
        },
        "Mendapatkan bantuan profesional": {
          Text: t('ch4.scene191.text3'),
          Do: "jump Scene-191-benar",
        },
      },
    },
  ],

  "Scene-191-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    // "play voice chap3-83",
    "v " + t('ch4.scene191benar.v1'),
    // "stop voice chap3-83",
    "jump Scene-192-benar",
  ],

  "Scene-191-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    // "play voice chap3-82",
    "v " + t('ch4.scene191salah.v1'),
    // "stop voice chap3-82",
    "jump Scene-192-salah",
  ],

  "Scene-192-benar": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-checklist3",
    "v " + t('ch4.scene192benar.v1'),
    "v " + t('ch4.scene192benar.v2'),
    "jump Scene-193",
  ],

  "Scene-192-salah": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-checklist3",
    "v " + t('ch4.scene192salah.v1'),
    "v " + t('ch4.scene192salah.v2'),
    "jump Scene-193",
  ],

  "Scene-193": [
    "show scene scene-1",
    "v " + t('ch4.scene193.v1'),
    "jump Scene-194",
  ],

  "Scene-194": [
    "show scene scene-badge-acquired-chapter-4",
    "v " + t('ch4.scene194.v1'),
    "v " + t('ch4.scene194.v2'),
    "jump Scene-195",
  ],

  "Scene-195": [
    "show scene scene-badge-list-chapter-4",
    "v " + t('ch4.scene195.v1'),
    "v " + t('ch4.scene195.v2'),
    "jump Scene-196",
  ],

  "Scene-196": [
    "show scene scene-2",
    "v " + t('ch4.scene196.v1'),
    "v " + t('ch4.scene196.v2'),
    "v " + t('ch4.scene196.v3'),
    "v " + t('ch4.scene196.v4'),
    "v " + t('ch4.scene196.v5'),
    "jump Loading-5",
  ],
};

// Make globally accessible for index.js merging
window.Chapter4 = Chapter4;

window.Chapter4Template = Chapter4Template;
