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

const Chapter2 = {
  "Scene-39": [
    "stop sound typewriter",
    "show scene scene-1",
    "play voice 85",
    "v Oh, halo, Calon Pahlawan Kesehatan Mental. Masih ingat aku? Kalau lupa, tidak papa hahaha. Yang penting kamu tidak melupakan seluruh pelajaran yang ada dalam proses latihanmu menjadi Pahlawan Kesehatan Mental.",
    "stop voice 85",
    "play voice 86",
    "v Aku kenalkan diriku kembali. Namaku Vani, aku akan menjadi instrukturmu sepanjang pelatihan hingga kamu resmi diangkat menjadi Pahlawan Kesehatan Mental.",
    "stop voice 86",
    "play voice 87",
    "v Apakah kamu masih ingat teknik relaksasi yang kita pelajari di sesi sebelumnya? Jika kamu perlu untuk menenangkan diri terlebih dahulu, setelah ini aku sediakan alat bantunya ya!",
    "stop voice 87",
    "jump Scene-40",
  ],

  "Scene-40": [
    "show scene scene-box-breathing",
    "play voice 88",
    "v Tarik nafasmu selama 4 detik.",
    "stop voice 88",
    "play voice 89",
    "v Tahan nafasmu selama 4 detik.",
    "stop voice 89",
    "play voice 90",
    "v Hembuskan nafasmu selama 4 detik.",
    "stop voice 90",
    "play voice 91",
    "v Tahan kembali nafasmu selama 4 detik.",
    "stop voice 91",
    "jump Scene-41",
  ],

  "Scene-41": [
    "show scene scene-progressive-muscle",
    "play voice 92",
    "v Tarik nafas, lalu kepalkan kedua tanganmu selama 7 sampai 10 detik. Sekuat-kuatnya hingga bergetar, namun tidak sakit.",
    "stop voice 92",
    "play voice 93",
    "v Hembuskan nafasmu dan fokuslah pada sensasi rileks yang perlahan muncul dari kedua tangan sekitar 10 hingga 20 detik.",
    "stop voice 93",
    "jump Scene-42",
  ],

  "Scene-42": [
    "show scene scene-1",
    "play voice 94",
    "v Oke! Setelah melakukan teknik relaksasi, semoga tubuh dan mentalmu lebih siap untuk berlatih!",
    "stop voice 94",
    "play voice 95",
    "v Hari ini, aku akan mengajakmu untuk mengenal siapa sebenarnya lawan-lawan dari Pahlawan Kesehatan Mental.",
    "stop voice 95",
    "play voice 96",
    "v Sebelum itu, mari kita lihat dulu apa yang kamu ketahui terkait kesehatan mental.",
    "jump Scene-43",
  ],

  "Scene-43": [
    "show scene scene-2",
    "play voice 97",
    "v Dengarkan baik-baik pernyataan setelah ini dan tentukan apakah pernyataan tersebut benar atau salah…",
    "stop voice 97",
    "play voice 98",
    {
      Choice: {
        Dialog:
          "Orang yang tidak memiliki gangguan mental sama dengan orang yang memiliki kesehatan mental.",
        "Pernyataan di bawah benar": {
          Text: "Pernyataan di bawah benar",
          Do: "jump Scene-45",
        },
        "Pernyataan di bawah salah": {
          Text: "Pernyataan di bawah salah",
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
    "v Hebat! Pemahamanmu sudah tepat. Kesehatan mental itu lebih dari kondisi tidak adanya gangguan mental.",
    "stop voice 100",
    "jump Scene-46",
  ],

  "Scene-45": [
    "stop voice 98",
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "play voice 99",
    "v Sepertinya kamu perlu benar-benar memerhatikan pembelajaran setelah ini karena yang dimaksud dengan kesehatan mental itu lebih dari kondisi tidak adanya gangguan mental.",
    "stop voice 99",
    "jump Scene-46",
  ],

  "Scene-46": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-mental-health-explanation",
    "play voice 101",
    "v Menurut World Health Organization atau Organisasi Kesehatan Dunia, kesehatan mental mengacu kepada kondisi kesejahteraan di mana seorang individu menyadari kemampuannya, mampu menghadapi tekanan normal dalam hidup, dapat bekerja secara produktif dan bermanfaat, serta dapat berkontribusi bagi komunitasnya.",
    "stop voice 101",
    "jump Scene-47",
  ],

  "Scene-47": [
    "show scene scene-mental-health-explanation-highlighted",
    "play voice 102",
    'v Mari kita perhatikan kata kunci utama dari pengertian kesehatan mental, yaitu "mampu menghadapi tekanan atau stress normal dalam hidup".',
    "stop voice 102",
    "play voice 103",
    "v Seseorang yang sehat mental bukan berarti mereka tidak pernah memiliki perasaan negatif atau perasaan yang tidak mengenakan. Terkadang perasaan negatif justru membantu kita untuk menghadapi berbagai tekanan dalam hidup.",
    "stop voice 103",
    "jump Scene-48",
  ],

  "Scene-48": [
    "show scene scene-4",
    "play voice 104",
    "v Sebagai contoh, kamu mungkin pernah merasa takut atau tertekan untuk menghadapi sebuah ujian yang materinya belum kamu kuasai…",
    "stop voice 104",
    "play voice 105",
    "v Perasaan yang kamu rasakan tersebut sangatlah normal karena perasaan tersebut membuatmu menjadi sadar bahwa kamu perlu belajar lebih giat yang akhirnya membuatmu dapat mengerjakan ujian dengan lebih baik...",
    "stop voice 105",
    "play voice 106",
    "v Dalam hal ini, kamu mampu menghadapi tekanan normal dalam hidup seperti berbagai ujian-ujian yang ada di sekolah.",
    "stop voice 106",
    "jump Scene-49",
  ],

  "Scene-49": [
    "show scene scene-mental-health-explanation-flow",
    "play voice 107",
    "v Kata kunci yang sudah kita garis bawahi tadi berkaitan dengan komponen kesehatan mental lainnya. Untuk menghadapi tekanan, penting untuk menyadari kemampuan yang kita miliki. ",
    "stop voice 107",
    "play voice 108",
    "v Dalam contoh menghadapi ujian di sekolah yang menantang, kita perlu menyadari bahwa sesulit apapun materinya, jika kita belajar dengan tekun menggunakan strategi belajar yang tepat, maka kita dapat menyelesaikan ujiannya dengan baik. ",
    "stop voice 108",
    "play voice 109",
    "v Tidak hanya itu, kita juga memiliki kemampuan untuk meminta bantuan kepada teman yang lebih mahir atau meminta panduan lebih lanjut kepada guru.",
    "stop voice 109",
    "jump Scene-50",
  ],

  "Scene-50": [
    "show scene scene-4",
    "play voice 110",
    "v Dengan terus menghadapi tekanan, kita akan menjadi pribadi yang lebih kuat dan lebih baik. Coba ingat saat-saat di mana kamu mendapatkan nilai baik di ujian yang sebelumnya kamu anggap sulit… ",
    "stop voice 110",
    "play voice 111",
    "v Setelah berhasil menghadapi ujian tersebut kamu jadi menyadari bahwa sebenarnya kamu bisa melakukan hal-hal sulit tersebut jika kamu bekerja keras dan menggunakan strategi belajar yang baik. ",
    "stop voice 111",
    "jump Scene-51",
  ],

  "Scene-51": [
    "show scene scene-5-plus-5",
    "play voice 112",
    "v Saat TK kamu kesulitan menghitung 5 + 5… ",
    "stop voice 112",
    "jump Scene-52",
  ],

  "Scene-52": [
    "show scene scene-5x5",
    "play voice 113",
    "v Saat SD kamu kesulitan menghitung 5 x 5… ",
    "stop voice 113",
    "jump Scene-53",
  ],

  "Scene-53": [
    "show scene scene-5-square",
    "play voice 114",
    "v Saat SMP kamu kesulitan menghitung 5 pangkat 5, dan seterusnya... ",
    "stop voice 114",
    "jump Scene-54",
  ],

  "Scene-54": [
    "show scene scene-4",
    "play voice 115",
    "v Kesulitan akan terus ada tapi kamu terus menghadapinya. Lama-kelamaan mungkin kamu akan bisa menghitung hal-hal rumit layaknya ilmuwan matematika atau insinyur yang berkontribusi untuk masyarakat banyak.",
    "stop voice 115",
    "play voice 116",
    "v Bahkan, sejak sekarang pun jika kamu berhasil menghadapi tantangan sebelumnya, kamu bisa membantu adik kelas atau temanmu yang sedang menghadapi tantangan serupa. Jika mereka tidak bisa menghitung 5 pangkat 5 misalnya.",
    "stop voice 116",
    "jump Scene-55",
  ],

  "Scene-55": [
    "show scene scene-2",
    "play voice 117",
    "v Aku yakin sekarang pemahamanmu terkait kesehatan mental sudah menjadi semakin baik. Sekarang, mari kita uji pemahamanmu terkait gangguan mental. ",
    "stop voice 117",
    "play voice 119",
    "v Dengarkan baik-baik pernyataan setelah ini dan tentukan apakah pernyataan tersebut benar atau salah.",
    "stop voice 119",
    "play voice 118",
    {
      Choice: {
        Dialog:
          "Kita dapat menilai bahwa kita memiliki gangguan mental dengan mencari informasi gejalanya di Internet dan mencocokkan sendiri informasi tersebut dengan apa yang kita rasakan.",
        "Pernyataan di bawah benar": {
          Text: "Pernyataan di bawah benar",
          Do: "jump Scene-57",
        },
        "Pernyataan di bawah salah": {
          Text: "Pernyataan di bawah salah",
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
    "v Aku sangat senang dengan jawabanmu.",
    "stop voice 121",
    "jump Scene-58",
  ],

  "Scene-57": [
    "stop voice 118",
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "play voice 120",
    "v Aku perlu tegas di sini. Jawabanmu tidak dapat dibenarkan.",
    "stop voice 120",
    "jump Scene-58",
  ],

  "Scene-58": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-mental-illness",
    "play voice 122",
    "v Gangguan mental adalah lawan utama dari pahlawan kesehatan mental dan perlu mendapat perhatian serius. Gangguan mental HANYA dapat didiagnosis atau ditentukan oleh profesional seperti psikolog dan psikiater.",
    "stop voice 122",
    "play voice 123",
    "v Mengapa? Karena sifatnya sangat rumit sehingga perlu ditangani langsung oleh profesional yang sudah banyak mempelajari penelitian terkait gangguan mental. Coba perhatikan definisi gangguan mental menurut Asosiasi Psikiater Amerika ini.",
    "stop voice 123",
    "play voice 124",
    "v Gangguan mental adalah sindrom yang dikarakterisasikan oleh gangguan klinis yang signifikan pada kognisi, regulasi emosi, dan perilaku yang merefleksikan disfungsi pada aspek psikologis, biologis, atau proses perkembangan yang mendasari fungsi mental.",
    "stop voice 124",
    "jump Scene-59",
  ],

  "Scene-59": [
    "show scene scene-mental-illness-2",
    "play voice 125",
    "v Sama seperti pengertian dari kesehatan mental, terdapat beberapa kata kunci yang perlu kita perhatikan dalam pengertian gangguan mental. ",
    "stop voice 125",
    "play voice 126",
    "v Yang pertama adalah “sindrom yang dikarakterisasikan oleh gangguan klinis yang signifikan”. Sindrom sendiri artinya adalah kumpulan gejala yang muncul secara bersamaan. ",
    "stop voice 126",
    "play voice 127",
    "v Pada gangguan mental, sindrom ini menyebabkan gangguan yang sangat berdampak pada kondisi klinis atau medis seseorang. ",
    "stop voice 127",
    "play voice 128",
    "v Gangguannya ini dapat berdampak pada berbagai aspek. Mulai dari aspek kognisi atau pikiran seperti delusi atau keyakinan yang sangat tidak sesuai dengan kenyataan, keinginan untuk mengakhiri hidup, hingga keyakanan bahwa diri sendiri tidak berdaya dan hidup tidak ada artinya. ",
    "stop voice 128",
    "play voice 129",
    "v Pada aspek emosi, gangguan mental dapat menyebabkan perasaan negatif depresi dan kecemasan yang berat dan atau berkepanjangan. Pada aspek perilaku, gangguan mental dapat berdampak pada menarik diri dari hubungan sosial, menolak untuk pergi ke sekolah, hingga tidak merawat diri.",
    "stop voice 129",
    "play voice 130",
    "v Dampak-dampak yang sudah kita bahas tadi berkaitan dengan kata kunci yang kedua, yaitu “merefleksikan disfungsi” atau kesulitan untuk berlangsungnya berbagai aspek diri dan hidup secara normal.",
    "stop voice 130",
    "play voice 131",
    "v Jika tidak ditangani dengan baik, gangguan mental dapat menghambat seseorang untuk menjalankan kegiatan sosial dan aktivitas kehidupan lain seperti kesulitan untuk bersekolah dan bekerja.",
    "stop voice 131",
    "jump Scene-60",
  ],

  "Scene-60": [
    "show scene scene-mental-illness-age",
    "play voice 132",
    "v Agar kita lebih memahami makna dari gangguan mental. Mari kita bahas beberapa contohnya. Menurut American Psychiatric Association dalam Diagnostic dalam buku Statistical Manual of Mental Disorder, gejala dari 70% gangguan mental sudah dapat terlihat sebelum usia 25 tahun.",
    "stop voice 132",
    "play voice 133",
    "v Contoh pertamanya adalah gangguan kecemasan yang merupakan kelompok dari beberapa gangguan mental yang dicirikan dengan perasaan cemas dan takut yang sangat kuat dan terjadi secara terus-menerus. Gejala lainnya dari gangguan ini adalah kehabisan nafas, detak jantung yang sangat cepat, dan rasa pusing yang kuat. Beberapa jenis gangguan kecemasan adalah gangguan kecemasan umum, gangguan panik, dan gangguan kecemasan sosial. ",
    "stop voice 133",
    "play voice chap2-1",
    "v Lalu, terdapat pula jenis gangguan psikosis yang merupakan kelompok gangguan dengan ciri ketidakmampuan untuk membedakan apa yang nyata dengan yang tidak seperti delusi dan halusinasi. Akibatnya, orang-orang dengan psikosis mengalami kesulitan untuk melakukan aktivitas sehari-hari. Contoh dari gangguan psikosis adalah skizofrenia yang terjadi pada sekitar 1% dari seluruh populasi atau 1 dari 100 orang. ",
    "stop voice chap2-1",
    "play voice chap2-2",
    "v Jenis gangguan lainnya adalah gangguan makan yang ditandai dengan gangguan pola makan secara terus-menerus yang menyebabkan terganggunya kesehatan fisik maupun mental. Salah satu contoh gangguan makan adalah Anorexia Nervosa di mana orang yang megalaminya secara berlebihan berusaha mengontrol berat badan, merasa ia memiliki penampilan atau bentuk tubuh yang buruk, dan sangat takut untuk mengalami kenaikan berat badan sehingga mereka menolak untuk memiliki berat badan yang normal.  ",
    "stop voice chap2-2",
    "play voice chap2-3",
    "v Akibatnya, orang-prang dengan Anorexia menolak untuk makan atau berusaha mengeluarkan apa yang ia makan dengan memuntahkannya atau menyalahgunakan obat pencuci perut. Contoh gangguan makan lainnya adalah Bulimia Bervosa di mana orang yang mengalaminya secara rutin melakukan binge-eating di mana ia makan dengan jumlah yang banyak dalam waktu singkat, lalu berusaha mencegah kenaikan berat badan dengan perilaku-perilaku seperti berusaha memuntahkannya atau menggunakan obat pencuci perut.",
    "stop voice chap2-3",
    "play voice chap2-4",
    "v Di sesi berikutnya, kita akan membahas secara mendalam gangguan depresi yang merupakan bagian dari gangguan mood atau suasana hati di mana orang yang mengalaminya memiliki suasana hati yang tidak sesuai dengan situasi yang ia alami dan membuatnya sulit untuk berfungsi atau melakukan aktivitas secara normal.",
    "stop voice chap2-4",
    "play voice chap2-5",
    "v Orang-orang dengan gangguan mood dapat merasakan suasana hati yang negatif seperti sedih secara ekstrim, suasana hati yang positif secara ekstrim, atau suasana hati yang negatif ekstrim dan positif ekstrim bergantian.",
    "stop voice chap2-5",
    "jump Scene-61",
  ],

  "Scene-61": [
    "show scene scene-2",
    "play voice chap2-6",
    "v Sebelum kita lanjut membahas gangguan mental. Aku ingin mengetahui apakah kamu memiliki pandangan yang tepat mengenai orang dengan gangguan mental. Jawab pertanyaanku… ",
    "stop voice chap2-6",
    "play voice chap2-7",
    {
      Choice: {
        Dialog:
          "Menurutmu, apakah orang dengan gangguan mental dapat sukses dalam hidup dan berkontribusi kepada masyarakat luas?",
        "Ya, tentu saja bisa!": {
          Text: "Ya, tentu saja bisa!",
          Do: "jump Scene-62",
        },
        "Sepertinya tidak…": {
          Text: "Sepertinya tidak…",
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
    "v Kamu memiliki pandangan yang baik mengenai orang dengan gangguan mental!",
    "stop voice chap2-9",
    "jump Scene-64",
  ],

  "Scene-63": [
    "stop voice chap2-7",
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "play voice chap2-8",
    "v Hmmm sepertinya kamu memiliki pandangan yang kurang tepat mengenai orang dengan gangguan mental.",
    "stop voice chap2-8",
    "jump Scene-64",
  ],

  "Scene-64": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-4",
    "play voice chap2-10",
    "v Meskipun gangguan mental dapat menghambat keseharian seseorang, bukan berarti mereka tidak bisa sukses dalam hidup dan berkontribusi kepada masyarakat luas.",
    "stop voice chap2-10",
    "jump Scene-65",
  ],

  "Scene-65": [
    "show scene scene-mental-illness-celebrity",
    "play voice chap2-11",
    "v Ada banyak tokoh terkenal yang berjuang menghadapi gangguan mental dalam hidupnya. Coba tebak siapa saja tokoh yang ada di dalam gambar ini.",
    "stop voice chap2-11",
    "jump Scene-66",
  ],

  "Scene-66": [
    "show scene scene-mental-illness-celebrity-1",
    "play voice chap2-12",
    "v Orang yang pertama adalah salah satu ahli fisika dan matematika paling berpengaruh di dunia yang terkenal dengan inspirasi setelah melihat apel jatuh.",
    "stop voice chap2-12",
    "jump Scene-67",
  ],

  "Scene-67": [
    "show scene scene-mental-illness-celebrity-2",
    "play voice chap2-13",
    "v Orang yang kedua adalah salah satu pemain bola terbaik dunia dari Inggris yang terkenal dengan tendangannya yang dapat melengkung.",
    "stop voice chap2-13",
    "jump Scene-68",
  ],

  "Scene-68": [
    "show scene scene-mental-illness-celebrity",
    "play voice chap2-14",
    "v Orang yang ketiga adalah penyanyi terkenal dari Canada yang terkenal dengan lagunya “Baby, baby, baby … Ohhhh”.",
    "stop voice chap2-14",
    "play voice chap2-15",
    "v Coba tebak siapa mereka dan bagaimana mereka menghadapi gangguan mental? Kamu boleh menggunakan Internet ya untuk mencari informasi tentang mereka!",
    "stop voice chap2-15",
    "play voice chap2-16",
    "v Ketiga tokoh ini benar-benar membuktikan bahwa gangguan mental bukanlah akhir dari segalanya dan kita tidak dapat mendefinisikan seseorang hanya berdasarkan gangguan mental yang ia alami. Gangguan mental hanyalah sebagian dari aspek kehidupan seseorang.",
    "stop voice chap2-16",
    "play voice chap2-17",
    "v Newton yang terkenal menemukan gaya gravitas dan ada di seluruh buku fisika mengalami gejala bipolar dan psikosis... ",
    "stop voice chap2-17",
    "play voice chap2-18",
    "v David Beckham bercerita bagaimana ia berjuang menghadapi obsessive-compulsive disorder atau OCD… ",
    "stop voice chap2-18",
    "play voice chap2-19",
    "v …dan Justin Bieber memiliki perjuangan serupa dengan depresi yang ia alami.",
    "stop voice chap2-19",
    "play voice chap2-20",
    "v Ketiga orang ini membuktikan bahwa seseorang dengan gangguan mental tetap dapat berkarya dan sukses, terutama jika gangguan mentalnya ditangani dengan tepat. ",
    "stop voice chap2-20",
    "play voice chap2-21",
    "v Kamu dapat menemukan informasi di Internet mengenai cerita David Beckham dan Justin Bieber merasakan manfaat dari sesi terapi dengan profesional kesehatan mental.",
    "stop voice chap2-21",
    "jump Scene-69",
  ],

  "Scene-69": [
    "show scene scene-4",
    "play voice chap2-22",
    "v Nah, Sesuai yang kutakan sebelumnya. Kita akan membahas gangguan depresi secara mendalam. Sebelum itu, aku ingin mengingatkan bahwa gangguan mental HANYA DAPAT DIDIAGNOSIS ATAU DITENTUKAN oleh profesional seperti psikiater atau psikolog.",
    "stop voice chap2-22",
    "jump Scene-70",
  ],

  "Scene-70": [
    "show scene scene-mental-illness-professional",
    "play voice chap2-23",
    "v Oleh karena itu, jika kamu merasa bahwa ada kemungkinan bahwa kamu mengalami depresi, maka kamu dapat menghubungi profesional-profesional di atas dengan langsung mengklik logo Ikatan Psikolog Klinis atau Perhimpunan Dokter Spesialis Kedokteran Jiwa.",
    "stop voice chap2-23",
    "jump Scene-71",
  ],

  "Scene-71": [
    "show scene scene-depression-symptoms",
    "play voice chap2-24",
    "v Gangguan depresi memiliki banyak gejalanya karena banyak pula jenis gangguan depresi. Gejala yang akan kita bahas merupakan gejala yang umumnya terjadi. Seseorang dikatakan memiliki depresi ketika profesional seperti psikolog dan psikiater menemukan gejala-gejala ini berlangsung secara terus-menerus dengan minimal waktu 2 minggu dan menganggu keberfungsian untuk melakukan hubungan sosial, merawat diri, dan aktivitas lainnya seperti bersekolah dan bekerja.",
    "v Gejala pertamanya adalah suasana hati depresif yang ditandai dengan perasaan sedih, kosong, atau sering menangis. ",
    "v Gejala yang kedua adalah kehilangan minat pada hampir seluruh aktivitas di hampir setiap harinya. ",
    "v Gejala yang ketiga adalah perubahan pada pola makan baik itu kehilangan nafsu makan atau makan dengan jumlah berlebih untuk mengatasi suasana hati yang negatif. ",
    "v Gejala yang keempat adalah gangguan tidur seperti kesulitan tidur di malam hari atau tidur secara berlebihan.",
    "v Gejala yang kelima adalah gangguan psikomotor seperti kesulitan untuk menyeimbangkan gerakan tubuh ",
    "v Gejala yang keenam adalah perasaan lelah secara kronis atau secara terus menerus merasa lelah dan tidak memiliki energi",
    "v Gejala yang ketujuh adalah secara berlebihan merasa bahwa diri sendiri tidak berharga atau memiliki banyak kesalahan dan kegagalan",
    "v Gejala yang kedelapan adalah kesulitan untuk berkonsentrasi dan mengambil keputusan. Orang-orang dengan depresi merasa kesulitan untuk berpikir secara jernih",
    "v Gejala yang terakhir adalah pemikiran-pemikiran untuk mati atau bunuh diri.",
    "stop voice chap2-24",
    "jump Scene-72",
  ],

  "Scene-72": [
    "show scene scene-depression-cause",
    "play voice chap2-25",
    "v Tidak ada satu hal khusus yang dapat dikatakan sebagai penyebab depresi. Depresi dapat terjadi karena kombinasi berbagai faktor biologis, psikologis, dan faktor sosial.",
    "stop voice chap2-25",
    "jump Scene-73",
  ],

  "Scene-73": [
    "show scene scene-depression-cause-2",
    "play voice chap2-26",
    "v Dari aspek biologis terdapat faktor genetik meskipun kebanyakan orang yang memiliki keluarga dengan gangguan depresi tidak mengalami hal yang sama.",
    "stop voice chap2-26",
    "play voice chap2-27",
    "v Faktor biologis lainnya adalah ketidakseimbangan hormon seperti dopamin dan serotonin yang berperan terhadap suasana hati.",
    "stop voice chap2-27",
    "play voice chap2-28",
    "v Faktor psikologis yang dapat berdampak pada depresi adalah stress yang terjadi dan pola pikir yang membuat seseorang merasakan perasaan negatif dengan lebih intens dan cenderung memikirkan hal-hal negatif. Kejadian sosial seperti kehilangan orang terdekat, kehilangan pekerjaan, dan isolasi juga berkaitan dengan depresi.",
    "stop voice chap2-28",
    "jump Scene-74",
  ],

  "Scene-74": [
    "show scene scene-depression-treatments",
    "play voice chap2-29",
    "v Gejala-gejala depresi perlu ditangani langsung bersama profesional seperti psikolog dan psikiater yang dapat membantu mereka untuk kembali merasakan perasaan-perasaan dengan normal dan menikmati hidup. Penanganan yang diberikan oleh profesional dapat bervariasi sesuai gejalanya. Berikut adalah beberapa penanganan yang biasanya diberikan:",
    "stop voice chap2-29",
    "jump Scene-75",
  ],

  "Scene-75": [
    "show scene scene-depression-treatments-2",
    "play voice chap2-30",
    "v Psikoterapi diberikan untuk membantu individu memahami apa yang ia pikirkan, apa yang ia lakukan, dan mengatur kembali hubungan sosialnya. Penanganan ini biasanya berlangsung 8 hingga 12 minggu untuk menunjukkan dampak positif",
    "stop voice chap2-30",
    "jump Scene-76",
  ],

  "Scene-76": [
    "show scene scene-depression-treatments-3",
    "play voice chap2-31",
    "v Obat-obatan seperti antidepresan juga dapat membantu menangani gejala seperti perasaan depresif, menormalkan kembali pola tidur dan pola makan, serta mengurangi kecemasan. Pengobatan untuk depresi biasanya membutuhkan waktu 8 hingga 10 minggu untuk menunjukkan dampak. Perlu diketahui bahwa antidepresan tidak bersifat adiktif!",
    "stop voice chap2-31",
    "jump Scene-77",
  ],

  "Scene-77": [
    "show scene scene-depression-treatments-4",
    "play voice chap2-32",
    "v Konseling secara umum juga membantu individu untuk mengatasi masalah-masalah praktis dan konflik, serta membantu seseorang untuk menghadapi depresinya. Perubahan gaya hidup seperti rutin berolahraga juga ditemukan dapat membantu meringankan gejala depresi.",
    "stop voice chap2-32",
    "jump Scene-78",
  ],

  "Scene-78": [
    "show scene scene-depression-treatments-5",
    "play voice chap2-33",
    "v Lalu, untuk beberapa kasus dengan gejala depresi yang berat membutuhkan penanganan khusus di rumah sakit seperti electroconvulsive therapy (ECT) dibutuhkan untuk penanganan yang aman dan efektif terutama ketika depresi yang dialami sudah membahayakan keamanan nyawa seseorang seperti adanya percobaan bunuh diri dan adanya gejala psikosis.",
    "stop voice chap2-33",
    "jump Scene-79",
  ],

  "Scene-79": [
    "show scene scene-depression-factor",
    "play voice chap2-34",
    "v Kalau kamu perhatikan baik-baik pembahasan mendalam kita mengenai depresi, ada satu hal menarik yang dapat kita pelajari, yaitu tidak ada satu penyebab pasti dari gangguan depresi. Hal ini juga berlaku untuk kondisi kesehatan mental lainnya. Kesehatan mental kita akan selalu dipengaruhi oleh 3 faktor, yaitu faktor biologis, psikologis, dan sosial atau dapat juga disingkat sebagai faktor bio-psiko-sosial.",
    "stop voice chap2-34",
    "play voice chap2-35",
    "v Dalam kasus depresi, kita sudah membahas bahwa ada faktor genetik yang berpreran, tapi kebanyakan orang dengan anggota keluarga yang memiliki depresi tidak mengalaminya. Aa juga faktor ketidakseimbangan hormon. ",
    "stop voice chap2-35",
    "play voice chap2-36",
    "v Dari situ kita mengetahui bahwa faktor biologis berperan, tapi juga ada faktor psikologis seperti pengalaman penuh stress atau tekanan dan cara seseorang memaknakan kejadian hidupnya yang dapat mendorong terjadinya depresi. Lalu, kondisi sosial seperti adanya keluarga dan teman yang suportif dan membantu akan sangat memengaruhi kondisi depresi.",
    "stop voice chap2-36",
    "jump Scene-80",
  ],

  "Scene-80": [
    "show scene scene-depression-factor-biology-question",
    "play voice chap2-37",
    "v Coba tebak ya… daftar faktor-faktor yang mempengaruhi kesehatan mental di samping termasuk ke dalam faktor biologis, psikologis, atau sosial?",
    "play voice chap2-37",
    {
      Choice: {
        Dialog:
          "Daftar faktor-faktor yang mempengaruhi kesehatan mental ini termasuk ke dalam faktor …",
        "Faktor Biologis": {
          Text: "Faktor Biologis",
          Do: "jump Scene-81-benar",
        },
        "Faktor Psikologis": {
          Text: "Faktor Psikologis",
          Do: "jump Scene-81-salah",
        },
        "Faktor Sosial": {
          Text: "Faktor Sosial",
          Do: "jump Scene-81-salah",
        },
      },
    },
  ],

  "Scene-81-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "play voice chap2-39",
    "v Keren, tebakanmu tepat! Sepertinya kamu benar-benar memerhatikan diskusi kita. Daftar faktor-faktor ini termasuk ke dalam faktor biologis yang perlu kamu perhatikan untuk menjadi sehat mental.",
    "stop voice chap2-39",
    "jump Scene-82",
  ],

  "Scene-81-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "play voice chap2-38",
    "v Hmmmm kamu perlu lebih memerhatikan sesi latihan kita ya! Daftar faktor-faktor ini termasuk ke dalam faktor biologis yang perlu kamu perhatikan untuk menjadi sehat mental.",
    "stop voice chap2-38",
    "jump Scene-82",
  ],

  "Scene-82": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-depression-factor-biology",
    "play voice chap2-40",
    "v Jika kamu memiliki keluarga dengan gangguan mental, kamu dapat berkonsultasi dengan psikolog atau psikiater mengenai kemungkinan kamu dapat mengalami kondisi yang sama karena faktor genetic.",
    "stop voice chap2-40",
    "play voice chap2-41",
    "v Lalu, kamu juga perlu memerhatikan pola hidup seperti olahraga yang rutin dan makan yang teratur dan sehat alias memiliki gizi seimbang!",
    "stop voice chap2-41",
    "play voice chap2-42",
    "v Hal ini membantu menjaga hormone dan kondisi kesehatan fisikmu terus prima yang berdampak juga pada kesehatan mentalmu.",
    "stop voice chap2-42",
    "play voice chap2-43",
    "v Bayangkan bagaimana tertekannya mentalmu jika kamu terus-terusan sakit dan tidak memiliki energi untuk menajalani aktivitas sehari-hari?",
    "stop voice chap2-43",
    "play voice chap2-44",
    "v Terakhir, kamu perlu berhati-hati terhadap zat-zat berbahaya seperti narkoba, zat adiktif seperti rokok, dan zat beracun lainnya ya!",
    "stop voice chap2-44",
    "jump Scene-83",
  ],

  "Scene-83": [
    "show scene scene-depression-factor-psychology-question",
    "play voice chap2-45",
    "v Coba tebak ya… daftar faktor-faktor yang mempengaruhi kesehatan mental di samping termasuk ke dalam faktor biologis, psikologis, atau sosial?",
    "stop voice chap2-45",
    {
      Choice: {
        Dialog:
          "Daftar faktor-faktor yang mempengaruhi kesehatan mental ini termasuk ke dalam faktor …",
        "Faktor Biologis": {
          Text: "Faktor Biologis",
          Do: "jump Scene-84-salah",
        },
        "Faktor Psikologis": {
          Text: "Faktor Psikologis",
          Do: "jump Scene-84-benar",
        },
        "Faktor Sosial": {
          Text: "Faktor Sosial",
          Do: "jump Scene-84-salah",
        },
      },
    },
  ],

  "Scene-84-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "play voice chap2-47",
    "v Tebakan yang baik! Kamu benar-benar memerhatikan diskusi kita. Daftar faktor-faktor ini termasuk ke dalam faktor psikologis yang perlu kamu perhatikan untuk menjadi sehat mental.",
    "stop voice chap2-47",
    "jump Scene-85",
  ],

  "Scene-84-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "play voice chap2-46",
    "v Sepertinya kamu perlu memerhatikan diskusi kita dengan lebih baik ya! Daftar faktor-faktor ini termasuk ke dalam faktor psikologis yang perlu kamu perhatikan untuk menjadi sehat mental.",
    "stop voice chap2-46",
    "jump Scene-85",
  ],

  "Scene-85": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-depression-factor-psychology",
    "play voice chap2-48",
    "v Faktor psikologis merupakan faktor yang paling dapat kamu kontrol untuk meningkatkan kesehatan mentalmu! Dapat menyadari emosi negatif yang kamu rasakan dan menanganinya dengan baik dapat benar-benar mengubah hidupmu. ",
    "stop voice chap2-48",
    "play voice chap2-49",
    "v Sebagai contoh, kita sudah belajar bagaimana emosi negatif tidak selamanya berdampak buruk. Menyadari bahwa kamu takut saat akan ujian dapat mendorongmu menjadi giat belajar. Tidak hanya emosi, hal yang kamu pikirkan juga dapat berdampak pada kesehatan mentalmu. ",
    "stop voice chap2-49",
    "play voice chap2-50",
    "v Akan sangat baik jika kamu memiliki keyakinan bahwa kamu dapat menghadapi berbagai tantangan hidup, hal ini akan membantumu untuk tidak menyerah dan menghadapi masalah dengan efektif. ",
    "stop voice chap2-50",
    "play voice chap2-51",
    "v Di Chapter berikutnya, kita akan belajar bagaimana cara efektif untuk menghadapi berbagai stress alias tekanan dalam hidup!",
    "stop voice chap2-51",
    "jump Scene-86",
  ],

  "Scene-86": [
    "show scene scene-depression-factor-social-question",
    "play voice chap2-52",
    "v Coba tebak ya… daftar faktor-faktor yang mempengaruhi kesehatan mental di samping termasuk ke dalam faktor biologis, psikologis, atau sosial?",
    "stop voice chap2-52",
    {
      Choice: {
        Dialog:
          "Daftar faktor-faktor yang mempengaruhi kesehatan mental ini termasuk ke dalam faktor …",
        "Faktor Biologis": {
          Text: "Faktor Biologis",
          Do: "jump Scene-87-salah",
        },
        "Faktor Psikologis": {
          Text: "Faktor Psikologis",
          Do: "jump Scene-87-salah",
        },
        "Faktor Sosial": {
          Text: "Faktor Sosial",
          Do: "jump Scene-87-benar",
        },
      },
    },
  ],

  "Scene-87-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    "play voice chap2-54",
    "v Good, tebakan yang tepat! Aku yakin kamu benar-benar memerhatikan diskusi kita. Daftar faktor-faktor ini termasuk ke dalam faktor sosial yang perlu kamu perhatikan untuk menjadi sehat mental.",
    "stop voice chap2-54",
    "jump Scene-88",
  ],

  "Scene-87-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    "play voice chap2-53",
    "v Hmmmm aku ragu kamu benar-benar memerhatikan diskusi kita. Daftar faktor-faktor ini termasuk ke dalam faktor sosial yang perlu kamu perhatikan untuk menjadi sehat mental.",
    "stop voice chap2-53",
    "jump Scene-88",
  ],

  "Scene-88": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-depression-factor-social",
    "play voice chap2-55",
    "v Faktor sosial juga dapat memengaruhi kesehatan mental kita. Memiliki orang-orang yang dapat mendukung kita untuk berbagai hal dalam hidup merupakan hal yang sangat penting bagi kesehatan mental.",
    "stop voice chap2-55",
    "play voice chap2-56",
    "v Mulai dari mereka yang dapat menjadi tempat untuk bercerita, mengerjakan tugas bersama, hingga sekadar bercanda. Jaga baik-baik hubunganmu dengan mereka ya!",
    "stop voice chap2-56",
    "play voice chap2-57",
    "v Faktor sosial sendiri tidak sebatas teman dan keluarga ya. Media masa dan media sosial secara umum juga dapat berdampak bagi kesehatan mental.  ",
    "stop voice chap2-57",
    "play voice chap2-58",
    "v Terus-terusan mengonsumsi informasi dan konten negatif akan membuatmu merasakan hal-hal negatif hingga perasaan tertekan. Oleh karena itu, kamu perlu benar-benar memilah lingkungan sosialmu mulai dari media yang kamu konsumsi hingga dengan siapa kamu bergaul.",
    "stop voice chap2-58",
    "jump Scene-89",
  ],

  "Scene-89": [
    "show scene scene-mental-condition",
    "play voice chap2-59",
    'v Kita sudah masuk ke bagian terakhir dari sesi latihan hari ini. Sebelum kita akhiri, aku ingin memastikan bahwa kamu dapat menggunakan hasil latihan kita dengan baik. Apakah kamu familiar dengan pepatah “knowledge is power” dan "With great power comes great responsibility“?',
    "stop voice chap2-59",
    "play voice chap2-60",
    "v Artinya, dari setiap pengetahuan yang kita miliki, ada tanggungjawab untuk menggunakan pengetahuan tersebut dengan bijak. Oleh karena itu, karena kamu sudah banyak mempelajari istilah-istilah terkait kesehatan mental, maka kamu perlu menggunakannya dengan bijak.",
    "stop voice chap2-60",
    "jump Scene-90",
  ],

  "Scene-90": [
    "show scene scene-mental-condition-2",
    "play voice chap2-61",
    "v Sebagai contoh menggunakan kata “depresi” untuk mendeskripsikan perasaaan kecewa, sedih, atau kebingungan bukanlah hal yang bijak. Apalagi jika dilakukan hanya untuk bercanda. Sebelumnya kamu sudah belajar bahwa depresi dan gangguan mental lainnya adalah kondisi serius yang memerlukan perhatian profesional, bukan istilah yang dapat sembarang digunakan.",
    "stop voice chap2-61",
    "play voice chap2-62",
    "v Di sisi lain, kamu juga sudah belajar bahwa mental distress atau tekanan mental seperti perasaan-perasaan negatif adalah hal tak terhindarkan dalam hidup dan orang yang sehat mental pun tetap merasakan hal negatif karena merupakan sesuatu yang wajar dan dapat berampak positif karena mendorong seseorang untuk menyelesaikan masalah dan belajar menjadi lebih baik.",
    "stop voice chap2-62",
    "jump Scene-91",
  ],

  "Scene-91": [
    "show scene scene-mental-condition-3",
    "play voice chap2-63",
    "v Di sisi lain, ada juga kondisi-kondisi mental yang tidak menunjukkan bahaya apapun, namun terkadang dikaitkan dengan masalah-masalah kesehatan mental. Termenung, berefleksi, dan berkontemplasi adalah perilaku yang wajar dilakukan apalagi jika seseorang perlu untuk mempertimbangkan suatu keputusan secara matang.",
    "stop voice chap2-63",
    "play voice chap2-64",
    "v Beberapa istilah seperti “putus asa” dan “berduka” menunjukkan masalah kesehatan mental yang biasanya muncul saat terdapat tekanan berat dalam hidup seperti kehilangan orang terdekat, berpindah tempat tinggal, atau memiliki penyakit fisik yang serius. ",
    "stop voice chap2-64",
    "play voice chap2-65",
    "v Masalah kesehatan mental memerlukan perhatian lebih, namun belum dapat dikatakan sebagai gangguan mental. Karena, ingat! Gangguan mental hanya dapat didiagnosis atau ditentukan oleh profesional seperti psikolog dan psikiater.",
    "stop voice chap2-65",
    "jump Scene-92",
  ],

  "Scene-92": [
    "show scene scene-mental-condition-4",
    "play voice chap2-66",
    "v Menggunakan istilah-istilah ini dengan tepat dapat membantu penanganan berbagai kondisi kesehatan mental dengan baik. Saat seseorang termenung atau berkontemplasi, kita tidak bereaksi berlebihan. Lalu, saat menghadapi perasaan negatif dalam kondisi distress, kita tetap dapat bersikap positif untuk menyelesaikan masalah dengan efektif.",
    "stop voice chap2-66",
    "play voice chap2-67",
    "v Saat terdapat masalah kesehatan mental yang memerlukan perhatian lebih, kita dapat meminta atau memberikan bantuan kepada teman atau orang yang lebih berpengalaman seperti orang tua dan guru. Yang terpenting, saat diduga ada gangguan mental seperti depresi, kita dapat mengarahkan bantuan profesional seperti psikolog dan psikiater untuk memberikan penanganan yang tepat.",
    "stop voice chap2-67",
    "jump Scene-93",
  ],

  "Scene-93": [
    "show scene scene-mental-condition-5",
    "play voice chap2-68",
    "v Terakhir, perhatikan baik-baik diagram segi tiga ini! Mereka menjadi satu dalam segitiga dan tidak terpisah karena dapat saling berkaitan dan terjadi secara bersamaan! Seseorang dengan depresi, tetap dapat merasakan hal-hal positif seperti bersyukur dan bahagia dalam bagian-bagian tertentu di kehidupannya.",
    "stop voice chap2-68",
    "jump Scene-94",
  ],

  "Scene-94": [
    "show scene scene-2",
    "play voice chap2-69",
    "v Oke, sesi terakhir dari petualangan belajarmu di Chapter ini. Masih terkait penggunaan istilah yang tepat. Kali ini berkaitan dengan istilah paling utama dan yang pertama kamu pelajari, yaitu “kesehatan mental”. ",
    "stop voice chap2-69",
    "play voice chap2-70",
    {
      Choice: {
        Dialog:
          "Tujuan dari Pahlawan Kesehatan Mental adalah membantu remaja memiliki kesehatan mental yang baik. Artinya Pahlawan Kesehatan Mental ingin remaja untuk … ",
        "Bebas dari gangguan mental": {
          Text: "Bebas dari gangguan mental",
          Do: "jump Scene-95-salah",
        },
        "Sejahtera dengan menyadari kemampuannya, mampu menghadapi tekanan normal, belajar dengan giat dan senang membantu orang lain":
          {
            Text: "Sejahtera dengan menyadari kemampuannya, mampu menghadapi tekanan normal, belajar dengan giat dan senang membantu orang lain",
            Do: "jump Scene-95-benar",
          },

        "Bebas dari gangguan mental dan bahagia": {
          Text: "Bebas dari gangguan mental dan bahagia",
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
    "v Selamat, Calon Pahlawan Kesehatan Mental! Kamu sudah melewati sesi latihan di Chapter 2: Lawan dari Pahlawan Kesehatan Mental. Oleh karena itu, aku akan memberikan 2 lencana berikut ke tamengmu.",
    "stop voice chap2-71",
    "jump Scene-96",
  ],

  "Scene-95-salah": [
    "stop voice chap2-70",
    "show scene scene-badge-acquired-chapter-2",
    "play sound wrong with volume 50",
    "play voice chap2-72",
    "v Hmmmm, kamu menjawab pertanyaan paling penting ini dengan kurang tepat. Meski begitu, aku tetap berikan ucapan selamat karena kamu sudah melewati sesi latihan di Chapter 2: Lawan dari Pahlawan Kesehatan Mental. Oleh karena itu, aku akan memberikan 2 lencana berikut ke tamengmu.",
    "stop voice chap2-72",
    "jump Scene-96",
  ],

  "Scene-96": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-badge-list-chapter-2",
    "play voice chap2-73",
    "v Lencana pertama ini menunjukkan bahwa kamu sudah berlatih untuk memahami makna kesehatan & gangguan mental. Lalu, lencana kedua menunjukkan bahwa kamu sudah berlatih untuk memahami faktor-faktor kesehatan mental.",
    "stop voice chap2-73",
    "jump Scene-97",
  ],

  "Scene-97": [
    "show scene scene-2",
    "play voice chap2-74",
    "v Jika kamu masih belum yakin bahwa kamu layak untuk mendapatkan kedua lencana ini. Mungkin jika kamu banyak menjawab pertanyaan dengan salah atau kurang yakin kamu memahami materinya, kamu dapat mengulang kembali Chapter latihan kita ini ya!",
    "stop voice chap2-74",
    "play voice chap2-75",
    "v Sampai jumpa di sesi latihan kita berikutnya, Calon Pahlawan Kesehatan Mental!",
    "stop voice chap2-75",
    "jump Loading-3",
  ],
};

// Make globally accessible for index.js merging
window.Chapter2 = Chapter2;
