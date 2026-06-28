/**
 * Chapter 5: Literasi Kesehatan Mental dalam Aksi
 * 
 * Learning Outcomes:
 * - Mengaplikasikan semua pengetahuan yang telah dipelajari
 * - Simulasi situasi nyata
 * - Persiapan menjadi Pahlawan Kesehatan Mental
 * 
 * Duration: ~60 minutes
 * Status: Placeholder - extract from original file when ready
 */

/* global monogatari */

const Chapter5Template = (lang) => {
  "Scene-197": [
    "show scene scene-sit-chapter-5",
    "v " + t('ch5.scene197.v1'),
    "v " + t('ch5.scene197.v2'),
    "v " + t('ch5.scene197.v3'),
    "jump Scene-198",
  ],

  "Scene-198": [
    "show scene scene-sit-chapter-5-2",
    "v " + t('ch5.scene198.v1'),
    "jump Scene-199",
  ],

  "Scene-199": [
    "show scene scene-sit-chapter-5",
    "v " + t('ch5.scene199.v1'),
    "jump Scene-200",
  ],

  "Scene-200": [
    "show scene scene-media-perception",
    "v " + t('ch5.scene200.v1'),
    "v " + t('ch5.scene200.v2'),
    "v " + t('ch5.scene200.v3'),
    "v " + t('ch5.scene200.v4'),
    "v " + t('ch5.scene200.v5'),
    "v " + t('ch5.scene200.v6'),
    "jump Scene-201",
  ],

  "Scene-201": [
    "show scene scene-sit-chapter-5-3",
    "v " + t('ch5.scene201.v1'),
    "jump Scene-202",
  ],

  "Scene-202": [
    "show scene scene-sit-chapter-5",
    "v " + t('ch5.scene202.v1'),
    "jump Scene-203",
  ],

  "Scene-203": [
    "show scene scene-beautiful-mind",
    "v " + t('ch5.scene203.v1'),
    "jump Scene-204",
  ],

  "Scene-204": [
    "show scene scene-sit-chapter-5",
    "v " + t('ch5.scene204.v1'),
    "jump Scene-205",
  ],

  "Scene-205": [
    "show scene scene-mental-health-on-social-media",
    "v " + t('ch5.scene205.v1'),
    "v " + t('ch5.scene205.v2'),
    "jump Scene-206",
  ],

  "Scene-206": [
    "show scene scene-1",
    "v " + t('ch5.scene206.v1'),
    "v " + t('ch5.scene206.v2'),
    "jump Scene-207",
  ],

  "Scene-207": [
    "show scene scene-screening-info",
    "v " + t('ch5.scene207.v1'),
    "jump Scene-208",
  ],

  "Scene-208": [
    "show scene scene-screening-info-2",
    "v " + t('ch5.scene208.v1'),
    "jump Scene-209",
  ],

  "Scene-209": [
    "show scene scene-screening-info-3",
    "v " + t('ch5.scene209.v1'),
    "jump Scene-210",
  ],

  "Scene-210": [
    "show scene scene-action-plan",
    "v " + t('ch5.scene210.v1'),
    "jump Scene-211",
  ],

  "Scene-211": [
    "show scene scene-2",
    {
      Choice: {
        Dialog:
          "Saat ingin mempelajari gejala gangguan kecemasan, kamu melakukan pencarian di google. Dari hasil yang didapatkan, informasi manakah yang sebaiknya kamu buka?",
        "Bebas. Semua informasi sama saja": {
          Text: t('ch5.scene211.text1'),
          Do: "jump Scene-211-salah",
        },
        "Artikel dari organisasi kesehatan mental ": {
          Text: t('ch5.scene211.text2'),
          Do: "jump Scene-211-benar",
        },
      },
    },
  ],

  "Scene-211-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    // "play voice chap3-83",
    "v " + t('ch5.scene211benar.v1'),
    // "stop voice chap3-83",
    "jump Scene-212",
  ],

  "Scene-211-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    // "play voice chap3-82",
    "v " + t('ch5.scene211salah.v1'),
    // "stop voice chap3-82",
    "jump Scene-212",
  ],

  "Scene-212": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-organization",
    "v " + t('ch5.scene212.v1'),
    "v " + t('ch5.scene212.v2'),
    "v " + t('ch5.scene212.v3'),
    "v " + t('ch5.scene212.v4'),
    "jump Scene-213",
  ],

  "Scene-213": [
    "show scene scene-diceritain-chapter-5",
    "v " + t('ch5.scene213.v1'),
    "jump Scene-214",
  ],

  "Scene-214": [
    "show scene scene-book",
    "v " + t('ch5.scene214.v1'),
    "jump Scene-215",
  ],

  "Scene-215": [
    "show scene scene-workshop",
    "v " + t('ch5.scene215.v1'),
    "v " + t('ch5.scene215.v2'),
    "jump Scene-216",
  ],

  "Scene-216": [
    "show scene scene-2",
    {
      Choice: {
        Dialog:
          "Di Instagram kamu menemukan tawaran jasa terapi “inner child” untuk depresi dari seorang sarjana psikologi. Tawaran tersebut menarik perhatianmu karena ada testimoni baik dari seorang pengguna jasa sebelumnya, menurutmu …",
        "Kamu perlu memeriksa akurasi informasi dari layanan yang ditawarkan karena tidak menunjukkan sifat ilmiah":
          {
            Text: t('ch5.scene216.text1'),
            Do: "jump Scene-216-benar",
          },
        "Testimoni dari pengguna jasa sebelumnya membuktikan bahwa terapi tersebut tentunya dapat membantu orang lain juga":
          {
            Text: t('ch5.scene216.text2'),
            Do: "jump Scene-216-salah",
          },
      },
    },
  ],

  "Scene-216-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    // "play voice chap3-83",
    "v " + t('ch5.scene216benar.v1'),
    // "stop voice chap3-83",
    "jump Scene-217",
  ],

  "Scene-216-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    // "play voice chap3-82",
    "v " + t('ch5.scene216salah.v1'),
    // "stop voice chap3-82",
    "jump Scene-217",
  ],

  "Scene-217": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-1",
    "v " + t('ch5.scene217.v1'),
    "jump Scene-218",
  ],

  "Scene-218": [
    "show scene scene-fact-checked",
    "v " + t('ch5.scene218.v1'),
    "v " + t('ch5.scene218.v2'),
    "jump Scene-219",
  ],

  "Scene-219": [
    "show scene scene-2",
    {
      Choice: {
        Dialog:
          "Kamu menemukan sebuah Tiktok yang menjelaskan gejala-gejala gangguan depresi. Kamu merasa bahwa gejala yang dijelaskan sangat sesuai dengan yang kamu alami. Hal yang dapat kamu lakukan adalah …",
        "Merasa 100% yakin bahwa kamu sedang mengalami gangguan depresi": {
          Text: t('ch5.scene219.text1'),
          Do: "jump Scene-219-salah",
        },
        "Berkonsultasi dengan psikolog mengenai gejala yang kamu rasakan": {
          Text: t('ch5.scene219.text2'),
          Do: "jump Scene-219-benar",
        },
      },
    },
  ],

  "Scene-219-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    // "play voice chap3-83",
    "v " + t('ch5.scene219benar.v1'),
    // "stop voice chap3-83",
    "jump Scene-220",
  ],

  "Scene-219-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    // "play voice chap3-82",
    "v " + t('ch5.scene219salah.v1'),
    // "stop voice chap3-82",
    "jump Scene-220",
  ],

  "Scene-220": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-diagnose",
    "v " + t('ch5.scene220.v1'),
    "v " + t('ch5.scene220.v2'),
    "jump Scene-221",
  ],

  "Scene-221": [
    "show scene scene-1",
    "v " + t('ch5.scene221.v1'),
    "v " + t('ch5.scene221.v2'),
    "jump Scene-222",
  ],

  "Scene-222": [
    "show scene scene-alternatives",
    "v " + t('ch5.scene222.v1'),
    "jump Scene-223",
  ],

  "Scene-223": [
    "show scene scene-1",
    "v " + t('ch5.scene223.v1'),
    "jump Scene-224",
  ],

  "Scene-224": [
    "show scene scene-action-plan",
    "v " + t('ch5.scene224.v1'),
    "jump Scene-225",
  ],

  "Scene-225": [
    "show scene scene-badge-center",
    "v " + t('ch5.scene225.v1'),
    "jump Scene-226",
  ],

  "Scene-226": [
    "show scene scene-badge-list-chapter-5-2",
    "v " + t('ch5.scene226.v1'),
    "v " + t('ch5.scene226.v2'),
    "jump Scene-227",
  ],

  "Scene-227": [
    "show scene scene-badge-list-chapter-5-3",
    "v " + t('ch5.scene227.v1'),
    "jump Scene-228",
  ],

  "Scene-228": [
    "show scene scene-badge-list-chapter-5-4",
    "v " + t('ch5.scene228.v1'),
    "v " + t('ch5.scene228.v2'),
    "jump Scene-229",
  ],

  "Scene-229": [
    "show scene scene-badge-list-chapter-5",
    "v " + t('ch5.scene229.v1'),
    "jump End",
  ],

  End: [
    "show scene scene-2",
    "v " + t('ch5.scene229.v2'),
    "v " + t('ch5.scene229.v3'),
    "v " + t('ch5.scene229.v4'),
    "v " + t('ch5.scene229.v5'),
    "end",
  ],
};

// Make globally accessible for index.js merging
window.Chapter5 = Chapter5;

window.Chapter5Template = Chapter5Template;
