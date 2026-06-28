/**
 * Chapter 2: Lawan Dari Pahlawan Kesehatan Mental
 * 
 * Learning Outcomes:
 * - Memahami jenis-jenis gangguan mental
 * - Mengenali faktor-faktor penyebab gangguan mental
 * - Memahami dampak gangguan mental
 * 
 * Duration: ~45 minutes
 * Status: Placeholder - extract from original file when ready
 */

/* global monogatari */

const Chapter2Template = (lang) => {
  "Scene-39": [
    "stop sound typewriter",
    "show scene scene-1",
    "play voice 85",
    "v " + t('ch2.scene39.v1'),
    "stop voice 85",
    "play voice 86",
    "v " + t('ch2.scene39.v2'),
    "stop voice 86",
    "play voice 87",
    "v " + t('ch2.scene39.v3'),
    "stop voice 87",
    "jump Scene-40",
  ],

  "Scene-40": [
    "show scene scene-box-breathing",
    "play voice 88",
    "v " + t('ch2.scene40.v1'),
    "stop voice 88",
    "play voice 89",
    "v " + t('ch2.scene40.v2'),
    "stop voice 89",
    "play voice 90",
    "v " + t('ch2.scene40.v3'),
    "stop voice 90",
    "play voice 91",
    "v " + t('ch2.scene40.v4'),
    "stop voice 91",
    "jump Scene-41",
  ],

  "Scene-41": [
    "show scene scene-progressive-muscle",
    "play voice 92",
    "v " + t('ch2.scene41.v1'),
    "stop voice 92",
    "play voice 93",
    "v " + t('ch2.scene41.v2'),
    "stop voice 93",
    "jump Scene-42",
  ],

  "Scene-42": [
    "show scene scene-1",
    "play voice 94",
    "v " + t('ch2.scene42.v1'),
    "stop voice 94",
    "play voice 95",
    "v " + t('ch2.scene42.v2'),
    "stop voice 95",
    "play voice 96",
    "v " + t('ch2.scene42.v3'),
    "jump Scene-43",
  ],

  "Scene-43": [
    "show scene scene-2",
    "play voice 97",
    "v " + t('ch2.scene43.v1'),
    "stop voice 97",
    "play voice 98",
    {
      Choice: {
        Dialog:
          "Orang yang tidak memiliki gangguan mental sama dengan orang yang memiliki kesehatan mental.",
        "Pernyataan di bawah benar": {
          Text: t('ch2.scene43.text2'),
          Do: "jump Scene-45",
        },
        "Pernyataan di bawah salah": {
          Text: t('ch2.scene43.text3'),
          Do: "jump Scene-44",
        },
      },
    },
  ],

  "Scene-44": [
    "stop voice 98",
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "play voice 100",
    "v " + t('ch2.scene44.v1'),
    "stop voice 100",
    "jump Scene-46",
  ],

  "Scene-45": [
    "stop voice 98",
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "play voice 99",
    "v " + t('ch2.scene45.v1'),
    "stop voice 99",
    "jump Scene-46",
  ],

  "Scene-46": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-mental-health-explanation",
    "play voice 101",
    "v " + t('ch2.scene46.v1'),
    "stop voice 101",
    "jump Scene-47",
  ],

  "Scene-47": [
    "show scene scene-mental-health-explanation-highlighted",
    "play voice 102",
    'v Mari kita perhatikan kata kunci utama dari pengertian kesehatan mental, yaitu "mampu menghadapi tekanan atau stress normal dalam hidup".',
    "stop voice 102",
    "play voice 103",
    "v " + t('ch2.scene47.v1'),
    "stop voice 103",
    "jump Scene-48",
  ],

  "Scene-48": [
    "show scene scene-4",
    "play voice 104",
    "v " + t('ch2.scene48.v1'),
    "stop voice 104",
    "play voice 105",
    "v " + t('ch2.scene48.v2'),
    "stop voice 105",
    "play voice 106",
    "v " + t('ch2.scene48.v3'),
    "stop voice 106",
    "jump Scene-49",
  ],

  "Scene-49": [
    "show scene scene-mental-health-explanation-flow",
    "play voice 107",
    "v " + t('ch2.scene49.v1'),
    "stop voice 107",
    "play voice 108",
    "v " + t('ch2.scene49.v2'),
    "stop voice 108",
    "play voice 109",
    "v " + t('ch2.scene49.v3'),
    "stop voice 109",
    "jump Scene-50",
  ],

  "Scene-50": [
    "show scene scene-4",
    "play voice 110",
    "v " + t('ch2.scene50.v1'),
    "stop voice 110",
    "play voice 111",
    "v " + t('ch2.scene50.v2'),
    "stop voice 111",
    "jump Scene-51",
  ],

  "Scene-51": [
    "show scene scene-5-plus-5",
    "play voice 112",
    "v " + t('ch2.scene51.v1'),
    "stop voice 112",
    "jump Scene-52",
  ],

  "Scene-52": [
    "show scene scene-5x5",
    "play voice 113",
    "v " + t('ch2.scene52.v1'),
    "stop voice 113",
    "jump Scene-53",
  ],

  "Scene-53": [
    "show scene scene-5-square",
    "play voice 114",
    "v " + t('ch2.scene53.v1'),
    "stop voice 114",
    "jump Scene-54",
  ],

  "Scene-54": [
    "show scene scene-4",
    "play voice 115",
    "v " + t('ch2.scene54.v1'),
    "stop voice 115",
    "play voice 116",
    "v " + t('ch2.scene54.v2'),
    "stop voice 116",
    "jump Scene-55",
  ],

  "Scene-55": [
    "show scene scene-2",
    "play voice 117",
    "v " + t('ch2.scene55.v1'),
    "stop voice 117",
    "play voice 119",
    "v " + t('ch2.scene55.v2'),
    "stop voice 119",
    "play voice 118",
    {
      Choice: {
        Dialog:
          "Kita dapat menilai bahwa kita memiliki gangguan mental dengan mencari informasi gejalanya di Internet dan mencocokkan sendiri informasi tersebut dengan apa yang kita rasakan.",
        "Pernyataan di bawah benar": {
          Text: t('ch2.scene55.text3'),
          Do: "jump Scene-57",
        },
        "Pernyataan di bawah salah": {
          Text: t('ch2.scene55.text4'),
          Do: "jump Scene-56",
        },
      },
    },
  ],

  "Scene-56": [
    "stop voice 118",
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "play voice 121",
    "v " + t('ch2.scene56.v1'),
    "stop voice 121",
    "jump Scene-58",
  ],

  "Scene-57": [
    "stop voice 118",
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "play voice 120",
    "v " + t('ch2.scene57.v1'),
    "stop voice 120",
    "jump Scene-58",
  ],

  "Scene-58": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-mental-illness",
    "play voice 122",
    "v " + t('ch2.scene58.v1'),
    "stop voice 122",
    "play voice 123",
    "v " + t('ch2.scene58.v2'),
    "stop voice 123",
    "play voice 124",
    "v " + t('ch2.scene58.v3'),
    "stop voice 124",
    "jump Scene-59",
  ],

  "Scene-59": [
    "show scene scene-mental-illness-2",
    "play voice 125",
    "v " + t('ch2.scene59.v1'),
    "stop voice 125",
    "play voice 126",
    "v " + t('ch2.scene59.v2'),
    "stop voice 126",
    "play voice 127",
    "v " + t('ch2.scene59.v3'),
    "stop voice 127",
    "play voice 128",
    "v " + t('ch2.scene59.v4'),
    "stop voice 128",
    "play voice 129",
    "v " + t('ch2.scene59.v5'),
    "stop voice 129",
    "play voice 130",
    "v " + t('ch2.scene59.v6'),
    "stop voice 130",
    "play voice 131",
    "v " + t('ch2.scene59.v7'),
    "stop voice 131",
    "jump Scene-60",
  ],

  "Scene-60": [
    "show scene scene-mental-illness-age",
    "play voice 132",
    "v " + t('ch2.scene60.v1'),
    "stop voice 132",
    "play voice 133",
    "v " + t('ch2.scene60.v2'),
    "stop voice 133",
    "play voice chap2-1",
    "v " + t('ch2.scene60.v3'),
    "stop voice chap2-1",
    "play voice chap2-2",
    "v " + t('ch2.scene60.v4'),
    "stop voice chap2-2",
    "play voice chap2-3",
    "v " + t('ch2.scene60.v5'),
    "stop voice chap2-3",
    "play voice chap2-4",
    "v " + t('ch2.scene60.v6'),
    "stop voice chap2-4",
    "play voice chap2-5",
    "v " + t('ch2.scene60.v7'),
    "stop voice chap2-5",
    "jump Scene-61",
  ],

  "Scene-61": [
    "show scene scene-2",
    "play voice chap2-6",
    "v " + t('ch2.scene61.v1'),
    "stop voice chap2-6",
    "play voice chap2-7",
    {
      Choice: {
        Dialog:
          "Menurutmu, apakah orang dengan gangguan mental dapat sukses dalam hidup dan berkontribusi kepada masyarakat luas?",
        "Ya, tentu saja bisa!": {
          Text: t('ch2.scene61.text2'),
          Do: "jump Scene-62",
        },
        "Sepertinya tidak…": {
          Text: t('ch2.scene61.text3'),
          Do: "jump Scene-63",
        },
      },
    },
  ],

  "Scene-62": [
    "stop voice chap2-7",
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "play voice chap2-9",
    "v " + t('ch2.scene62.v1'),
    "stop voice chap2-9",
    "jump Scene-64",
  ],

  "Scene-63": [
    "stop voice chap2-7",
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "play voice chap2-8",
    "v " + t('ch2.scene63.v1'),
    "stop voice chap2-8",
    "jump Scene-64",
  ],

  "Scene-64": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-4",
    "play voice chap2-10",
    "v " + t('ch2.scene64.v1'),
    "stop voice chap2-10",
    "jump Scene-65",
  ],

  "Scene-65": [
    "show scene scene-mental-illness-celebrity",
    "play voice chap2-11",
    "v " + t('ch2.scene65.v1'),
    "stop voice chap2-11",
    "jump Scene-66",
  ],

  "Scene-66": [
    "show scene scene-mental-illness-celebrity-1",
    "play voice chap2-12",
    "v " + t('ch2.scene66.v1'),
    "stop voice chap2-12",
    "jump Scene-67",
  ],

  "Scene-67": [
    "show scene scene-mental-illness-celebrity-2",
    "play voice chap2-13",
    "v " + t('ch2.scene67.v1'),
    "stop voice chap2-13",
    "jump Scene-68",
  ],

  "Scene-68": [
    "show scene scene-mental-illness-celebrity",
    "play voice chap2-14",
    "v " + t('ch2.scene68.v1'),
    "stop voice chap2-14",
    "play voice chap2-15",
    "v " + t('ch2.scene68.v2'),
    "stop voice chap2-15",
    "play voice chap2-16",
    "v " + t('ch2.scene68.v3'),
    "stop voice chap2-16",
    "play voice chap2-17",
    "v " + t('ch2.scene68.v4'),
    "stop voice chap2-17",
    "play voice chap2-18",
    "v " + t('ch2.scene68.v5'),
    "stop voice chap2-18",
    "play voice chap2-19",
    "v " + t('ch2.scene68.v6'),
    "stop voice chap2-19",
    "play voice chap2-20",
    "v " + t('ch2.scene68.v7'),
    "stop voice chap2-20",
    "play voice chap2-21",
    "v " + t('ch2.scene68.v8'),
    "stop voice chap2-21",
    "jump Scene-69",
  ],

  "Scene-69": [
    "show scene scene-4",
    "play voice chap2-22",
    "v " + t('ch2.scene69.v1'),
    "stop voice chap2-22",
    "jump Scene-70",
  ],

  "Scene-70": [
    "show scene scene-mental-illness-professional",
    "play voice chap2-23",
    "v " + t('ch2.scene70.v1'),
    "stop voice chap2-23",
    "jump Scene-71",
  ],

  "Scene-71": [
    "show scene scene-depression-symptoms",
    "play voice chap2-24",
    "v " + t('ch2.scene71.v1'),
    "v " + t('ch2.scene71.v2'),
    "v " + t('ch2.scene71.v3'),
    "v " + t('ch2.scene71.v4'),
    "v " + t('ch2.scene71.v5'),
    "v " + t('ch2.scene71.v6'),
    "v " + t('ch2.scene71.v7'),
    "v " + t('ch2.scene71.v8'),
    "v " + t('ch2.scene71.v9'),
    "v " + t('ch2.scene71.v10'),
    "stop voice chap2-24",
    "jump Scene-72",
  ],

  "Scene-72": [
    "show scene scene-depression-cause",
    "play voice chap2-25",
    "v " + t('ch2.scene72.v1'),
    "stop voice chap2-25",
    "jump Scene-73",
  ],

  "Scene-73": [
    "show scene scene-depression-cause-2",
    "play voice chap2-26",
    "v " + t('ch2.scene73.v1'),
    "stop voice chap2-26",
    "play voice chap2-27",
    "v " + t('ch2.scene73.v2'),
    "stop voice chap2-27",
    "play voice chap2-28",
    "v " + t('ch2.scene73.v3'),
    "stop voice chap2-28",
    "jump Scene-74",
  ],

  "Scene-74": [
    "show scene scene-depression-treatments",
    "play voice chap2-29",
    "v " + t('ch2.scene74.v1'),
    "stop voice chap2-29",
    "jump Scene-75",
  ],

  "Scene-75": [
    "show scene scene-depression-treatments-2",
    "play voice chap2-30",
    "v " + t('ch2.scene75.v1'),
    "stop voice chap2-30",
    "jump Scene-76",
  ],

  "Scene-76": [
    "show scene scene-depression-treatments-3",
    "play voice chap2-31",
    "v " + t('ch2.scene76.v1'),
    "stop voice chap2-31",
    "jump Scene-77",
  ],

  "Scene-77": [
    "show scene scene-depression-treatments-4",
    "play voice chap2-32",
    "v " + t('ch2.scene77.v1'),
    "stop voice chap2-32",
    "jump Scene-78",
  ],

  "Scene-78": [
    "show scene scene-depression-treatments-5",
    "play voice chap2-33",
    "v " + t('ch2.scene78.v1'),
    "stop voice chap2-33",
    "jump Scene-79",
  ],

  "Scene-79": [
    "show scene scene-depression-factor",
    "play voice chap2-34",
    "v " + t('ch2.scene79.v1'),
    "stop voice chap2-34",
    "play voice chap2-35",
    "v " + t('ch2.scene79.v2'),
    "stop voice chap2-35",
    "play voice chap2-36",
    "v " + t('ch2.scene79.v3'),
    "stop voice chap2-36",
    "jump Scene-80",
  ],

  "Scene-80": [
    "show scene scene-depression-factor-biology-question",
    "play voice chap2-37",
    "v " + t('ch2.scene80.v1'),
    "play voice chap2-37",
    {
      Choice: {
        Dialog:
          "Daftar faktor-faktor yang mempengaruhi kesehatan mental ini termasuk ke dalam faktor …",
        "Faktor Biologis": {
          Text: t('ch2.scene80.text2'),
          Do: "jump Scene-81-benar",
        },
        "Faktor Psikologis": {
          Text: t('ch2.scene80.text3'),
          Do: "jump Scene-81-salah",
        },
        "Faktor Sosial": {
          Text: t('ch2.scene80.text4'),
          Do: "jump Scene-81-salah",
        },
      },
    },
  ],

  "Scene-81-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "play voice chap2-39",
    "v " + t('ch2.scene81benar.v1'),
    "stop voice chap2-39",
    "jump Scene-82",
  ],

  "Scene-81-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "play voice chap2-38",
    "v " + t('ch2.scene81salah.v1'),
    "stop voice chap2-38",
    "jump Scene-82",
  ],

  "Scene-82": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-depression-factor-biology",
    "play voice chap2-40",
    "v " + t('ch2.scene82.v1'),
    "stop voice chap2-40",
    "play voice chap2-41",
    "v " + t('ch2.scene82.v2'),
    "stop voice chap2-41",
    "play voice chap2-42",
    "v " + t('ch2.scene82.v3'),
    "stop voice chap2-42",
    "play voice chap2-43",
    "v " + t('ch2.scene82.v4'),
    "stop voice chap2-43",
    "play voice chap2-44",
    "v " + t('ch2.scene82.v5'),
    "stop voice chap2-44",
    "jump Scene-83",
  ],

  "Scene-83": [
    "show scene scene-depression-factor-psychology-question",
    "play voice chap2-45",
    "v " + t('ch2.scene83.v1'),
    "stop voice chap2-45",
    {
      Choice: {
        Dialog:
          "Daftar faktor-faktor yang mempengaruhi kesehatan mental ini termasuk ke dalam faktor …",
        "Faktor Biologis": {
          Text: t('ch2.scene83.text2'),
          Do: "jump Scene-84-salah",
        },
        "Faktor Psikologis": {
          Text: t('ch2.scene83.text3'),
          Do: "jump Scene-84-benar",
        },
        "Faktor Sosial": {
          Text: t('ch2.scene83.text4'),
          Do: "jump Scene-84-salah",
        },
      },
    },
  ],

  "Scene-84-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "play voice chap2-47",
    "v " + t('ch2.scene84benar.v1'),
    "stop voice chap2-47",
    "jump Scene-85",
  ],

  "Scene-84-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "play voice chap2-46",
    "v " + t('ch2.scene84salah.v1'),
    "stop voice chap2-46",
    "jump Scene-85",
  ],

  "Scene-85": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-depression-factor-psychology",
    "play voice chap2-48",
    "v " + t('ch2.scene85.v1'),
    "stop voice chap2-48",
    "play voice chap2-49",
    "v " + t('ch2.scene85.v2'),
    "stop voice chap2-49",
    "play voice chap2-50",
    "v " + t('ch2.scene85.v3'),
    "stop voice chap2-50",
    "play voice chap2-51",
    "v " + t('ch2.scene85.v4'),
    "stop voice chap2-51",
    "jump Scene-86",
  ],

  "Scene-86": [
    "show scene scene-depression-factor-social-question",
    "play voice chap2-52",
    "v " + t('ch2.scene86.v1'),
    "stop voice chap2-52",
    {
      Choice: {
        Dialog:
          "Daftar faktor-faktor yang mempengaruhi kesehatan mental ini termasuk ke dalam faktor …",
        "Faktor Biologis": {
          Text: t('ch2.scene86.text2'),
          Do: "jump Scene-87-salah",
        },
        "Faktor Psikologis": {
          Text: t('ch2.scene86.text3'),
          Do: "jump Scene-87-salah",
        },
        "Faktor Sosial": {
          Text: t('ch2.scene86.text4'),
          Do: "jump Scene-87-benar",
        },
      },
    },
  ],

  "Scene-87-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "play voice chap2-54",
    "v " + t('ch2.scene87benar.v1'),
    "stop voice chap2-54",
    "jump Scene-88",
  ],

  "Scene-87-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "play voice chap2-53",
    "v " + t('ch2.scene87salah.v1'),
    "stop voice chap2-53",
    "jump Scene-88",
  ],

  "Scene-88": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-depression-factor-social",
    "play voice chap2-55",
    "v " + t('ch2.scene88.v1'),
    "stop voice chap2-55",
    "play voice chap2-56",
    "v " + t('ch2.scene88.v2'),
    "stop voice chap2-56",
    "play voice chap2-57",
    "v " + t('ch2.scene88.v3'),
    "stop voice chap2-57",
    "play voice chap2-58",
    "v " + t('ch2.scene88.v4'),
    "stop voice chap2-58",
    "jump Scene-89",
  ],

  "Scene-89": [
    "show scene scene-mental-condition",
    "play voice chap2-59",
    'v Kita sudah masuk ke bagian terakhir dari sesi latihan hari ini. Sebelum kita akhiri, aku ingin memastikan bahwa kamu dapat menggunakan hasil latihan kita dengan baik. Apakah kamu familiar dengan pepatah “knowledge is power” dan "With great power comes great responsibility“?',
    "stop voice chap2-59",
    "play voice chap2-60",
    "v " + t('ch2.scene89.v1'),
    "stop voice chap2-60",
    "jump Scene-90",
  ],

  "Scene-90": [
    "show scene scene-mental-condition-2",
    "play voice chap2-61",
    "v " + t('ch2.scene90.v1'),
    "stop voice chap2-61",
    "play voice chap2-62",
    "v " + t('ch2.scene90.v2'),
    "stop voice chap2-62",
    "jump Scene-91",
  ],

  "Scene-91": [
    "show scene scene-mental-condition-3",
    "play voice chap2-63",
    "v " + t('ch2.scene91.v1'),
    "stop voice chap2-63",
    "play voice chap2-64",
    "v " + t('ch2.scene91.v2'),
    "stop voice chap2-64",
    "play voice chap2-65",
    "v " + t('ch2.scene91.v3'),
    "stop voice chap2-65",
    "jump Scene-92",
  ],

  "Scene-92": [
    "show scene scene-mental-condition-4",
    "play voice chap2-66",
    "v " + t('ch2.scene92.v1'),
    "stop voice chap2-66",
    "play voice chap2-67",
    "v " + t('ch2.scene92.v2'),
    "stop voice chap2-67",
    "jump Scene-93",
  ],

  "Scene-93": [
    "show scene scene-mental-condition-5",
    "play voice chap2-68",
    "v " + t('ch2.scene93.v1'),
    "stop voice chap2-68",
    "jump Scene-94",
  ],

  "Scene-94": [
    "show scene scene-2",
    "play voice chap2-69",
    "v " + t('ch2.scene94.v1'),
    "stop voice chap2-69",
    "play voice chap2-70",
    {
      Choice: {
        Dialog:
          "Tujuan dari Pahlawan Kesehatan Mental adalah membantu remaja memiliki kesehatan mental yang baik. Artinya Pahlawan Kesehatan Mental ingin remaja untuk … ",
        "Bebas dari gangguan mental": {
          Text: t('ch2.scene94.text2'),
          Do: "jump Scene-95-salah",
        },
        "Sejahtera dengan menyadari kemampuannya, mampu menghadapi tekanan normal, belajar dengan giat dan senang membantu orang lain":
          {
            Text: t('ch2.scene94.text3'),
            Do: "jump Scene-95-benar",
          },

        "Bebas dari gangguan mental dan bahagia": {
          Text: t('ch2.scene94.text4'),
          Do: "jump Scene-95-salah",
        },
      },
    },
  ],

  "Scene-95-benar": [
    "stop voice chap2-70",
    "play sound clap with volume 50",
    "show scene scene-badge-acquired-chapter-2",
    "play voice chap2-71",
    "v " + t('ch2.scene95benar.v1'),
    "stop voice chap2-71",
    "jump Scene-96",
  ],

  "Scene-95-salah": [
    "stop voice chap2-70",
    "show scene scene-badge-acquired-chapter-2",
    "play sound wrong with volume 50",
    "play voice chap2-72",
    "v " + t('ch2.scene95salah.v1'),
    "stop voice chap2-72",
    "jump Scene-96",
  ],

  "Scene-96": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-badge-list-chapter-2",
    "play voice chap2-73",
    "v " + t('ch2.scene96.v1'),
    "stop voice chap2-73",
    "jump Scene-97",
  ],

  "Scene-97": [
    "show scene scene-2",
    "play voice chap2-74",
    "v " + t('ch2.scene97.v1'),
    "stop voice chap2-74",
    "play voice chap2-75",
    "v " + t('ch2.scene97.v2'),
    "stop voice chap2-75",
    "jump Loading-3",
  ],
};

// Make globally accessible for index.js merging
window.Chapter2 = Chapter2;

window.Chapter2Template = Chapter2Template;
