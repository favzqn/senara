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

const Chapter4 = {
  "Scene-150": [
    "stop sound typewriter",

    "show scene scene-1",
    "v Halo, Calon Pahlawan Kesehatan Mental! Kamu sudah menyelesaikan lebih dari setengah latihan untuk menjadi Pahlawan Kesehatan Mental. ",
    "v Aku yakin kamu sudah memiliki banyak bekal untuk menjaga kesehatan mental, oleh karena itu aku akan mengenalkanmu pada pejuang kesehatan mental lainnya.",
    "v Sebelum itu! Jawab satu pertanyaanku untuk mengetahui mengapa penting mengenal para pejuang kesehatan mental",
    "jump Scene-151",
  ],

  "Scene-151": [
    "show scene scene-2",
    "v Apakah kamu setuju dengan pernyataan bahwa …",
    {
      Choice: {
        Dialog:
          "Seseorang yang memiliki banyak pengetahuan mengenai kesehatan mental tidak akan membutuhkan bantuan orang lain untuk menjaga kesehatan mentalnya",
        "Saya setuju dengan pendapat di bawah": {
          Text: "Saya setuju dengan pendapat di bawah",
          Do: "jump Scene-151-salah",
        },
        "Saya tidak setuju dengan pendapat di bawah": {
          Text: "Saya tidak setuju dengan pendapat di bawah",
          Do: "jump Scene-151-benar",
        },
      },
    },
  ],

  "Scene-151-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    // "play voice chap3-83",
    "v Aku senang sekali dengan jawabanmu! Kamu sangat bersungguh-sungguh memahami latihan yang kita jalankan.",
    // "stop voice chap3-83",
    "jump Scene-152",
  ],

  "Scene-151-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    // "play voice chap3-82",
    "v Hmmmm jawabanmu mengecewakan!",
    // "stop voice chap3-82",
    "jump Scene-152",
  ],

  "Scene-152": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-1",
    "v Sejak awal kita berlatih, kita sudah sepakat bahwa salah satu tujuannya adalah untuk membantu para remaja yang memiliki masalah kesehatan mental untuk mendapatkan pertolongan. ",
    "v Saat membahas lawan-lawan dari Pahlawan Kesehatan Mental pun kita sudah membahas bahwa ada faktor-faktor gangguan mental yang sulit untuk ditangani sendiri seperti ketidakseimbangan hormon dan kebiasaan yang sulit diubah.",
    "jump Scene-153",
  ],

  "Scene-153": [
    "show scene scene-physical-pain-chap4",
    "v Sederhananya, coba bayangkan seorang dokter yang terjatuh dan merasakan sakit yang sangat kuat di kakinya. Dokter tersebut memiliki pengetahuan yang baik terkait masalah kesehatan fisik, namun apakah dokter tersebut tidak membutuhkan bantuan dokter lain? Bagaimana jika ternyata kakinya patah?",
    "jump Scene-154",
  ],

  "Scene-154": [
    "show scene scene-mental-illness-chap4",
    "v Hal ini juga berlaku untuk masalah kesehatan mental. Terlebih, kita sudah membahas bahwa gangguan mental hanya dapat didiagnosis oleh profesional, yaitu psikolog dan psikiater. Ya, sama dengan masalah kesehatan fisik seperti kanker, diabetes, dan patah tulang. Kita tidak dapat sembarang mengatakan bahwa kita memiliki masalah tersebut sebelum mendapat diagnosis dari dokter.",
    "jump Scene-155",
  ],

  "Scene-155": [
    "show scene scene-1",
    "v Kabar baiknya, lagi-lagi sama dengan masalah kesehatan fisik, jika masalah kesehatan mental ditangani dengan baik, maka orang yang mengalaminya juga tetap dapat merasakan kesehatan mental. ",
    "v Layaknya orang dengan kanker, diabetes, atau patah tulang tetap dapat produktif dalam bekerja, belajar, dan bersosialisasi jika dibantu oleh dokter . Orang-orang dengan gangguan mental pun tetap dapat melakukannya jika dibantu oleh psikolog dan psikiater.",
    "jump Scene-156",
  ],

  "Scene-156": [
    "show scene scene-2",
    "v Oke, aku harap sekarang kamu memahami mengapa perlu untuk mengenal para pejuang kesehatan mental lainnya. Mereka memang tidak setiap hari berinteraksi dengan para remaja seperti Pahlawan Kesehatan Mental, namun ada kalanya hanya merekalah yang benar-benar dapat membantu dalam menyelesaikan masalah kesehatan mental.  ",
    "v Oleh karena itu, Pahlawan Kesehatan Mental perlu tahu kapan dirinya perlu meminta bantuan para pejuang kesehatan mental atau mengarahkan remaja lainnya untuk meminta bantuan.",
    "v Pada umumnya, Para Pejuang Kesehatan Mental yang merupakan profesional dibutuhkan ketika masalah yang dihadapi sulit untuk ditangani secara mandiri oleh remaja dan orang terdekatnya. ",
    "v Ya, bahasan kita pada sesi latihan kali ini mungkin akan membangkitkan perasaan negatif karena kita juga akan membahas kondisi-kondisi yang sulit. ",
    "v Jadi, setelah ini kita akan kembali melakukan teknik relaksasi seperti biasanya. Lalu, jika kamu merasa bahwa kamu berpotensi memiliki gangguan mental atau masalah kesehatan mentalmu sudah menganggu keseharianmu, segera hubungi profesional seperti psikolog dan psikiater ya!",
    "jump Scene-157",
  ],

  "Scene-157": [
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
    "jump Scene-158",
  ],

  "Scene-158": [
    "show scene scene-progressive-muscle",
    "play voice 92",
    "v Tarik nafas, lalu kepalkan kedua tanganmu selama 7 sampai 10 detik. Sekuat-kuatnya hingga bergetar, namun tidak sakit.",
    "stop voice 92",
    "play voice 93",
    "v Hembuskan nafasmu dan fokuslah pada sensasi rileks yang perlahan muncul dari kedua tangan sekitar 10 hingga 20 detik.",
    "stop voice 93",
    "jump Scene-159",
  ],

  "Scene-159": [
    "show scene scene-2",
    "v Aku baru saja mendapatkan kabar dari para pejuang kesehatan mental. Mereka menyampaikan bahwa mereka tidak ingin langsung mengenalkan diri mereka padamu … ",
    "v Tenang, tenang! Mereka bukan tidak ingin berkenalan. Mereka hanya ingin sedikit melakukan permainan. Jadi, mereka akan memberikan petunjuk mengenai siapa diri mereka dan kamu diminta untuk menebak siapakah mereka?",
    "Bersiap-siap ya! Setelah ini kita akan langsung mulai perkenalannya!",
    "jump Scene-160",
  ],

  "Scene-160": [
    "show scene scene-2",
    "v Siapakah aku?",
    {
      Choice: {
        Dialog:
          "Aku menyelesaikan pendidikan magister alias S2 profesi psikolog setelah menyelesaikan program sarjana alias S1 psikologi. Aku membantu orang lain untuk menjadi sehat mental dengan membantu mereka mengelola pikiran, emosi, hingga perilakunya. Aku adalah … ",
        Psikiater: {
          Text: "Psikiater",
          Do: "jump Scene-160-salah",
        },
        Psikolog: {
          Text: "Psikolog",
          Do: "jump Scene-160-benar",
        },
        Konselor: {
          Text: "Konselor",
          Do: "jump Scene-160-salah",
        },
      },
    },
  ],

  "Scene-160-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    // "play voice chap3-83",
    "v Aku senang sekali dengan jawabanmu! Kamu sangat bersungguh-sungguh memahami latihan yang kita jalankan.",
    // "stop voice chap3-83",
    "jump Scene-161",
  ],

  "Scene-160-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    // "play voice chap3-82",
    "v Hmmmm jawabanmu mengecewakan!",
    // "stop voice chap3-82",
    "jump Scene-161",
  ],

  "Scene-161": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-know-psychologist",
    "v Mari berkenalan dengan psikolog! Mereka ini sangat ahli dalam mengelola perilaku dan proses mental manusia loh! Tidak perlu heran. Mereka sudah menamatkan pendidikan sarjana alias S1 psikologi di mana mereka telah belajar seluruh aspek psikologis seseorang, mulai dari kepribadian, emosi, pikiran, perilaku, hingga faktor-faktor yang memengaruhinya seperti perkembangan, hubungan sosial, pendidikan, dan pekerjaan.  ",
    "v Tidak cukup hanya belajar dari penelitian saja, para psikolog juga telah melakukan pendidikan berupa praktik langsung untuk menangani masalah kesehatan mental. Mulai dari asesmen atau penilaian kondisi kesehatan mental, diagnosis gangguan mental, hingga penanganannya dengan mengelola reaksi empsi, cara berpikir, hingga pola perilaku! ",
    "v Jadi, sudah dipastikan para psikolog bisa banget untuk membantu kamu memaksimalkan kesehatan mental! Mereka tidak hanya membantu orang-orang dengan gangguan mental loh, namun juga masalah kesehatan mental pada umumnya.",
    "jump Scene-162",
  ],

  "Scene-162": [
    "show scene scene-2",
    "v Siapakah aku?",
    {
      Choice: {
        Dialog:
          "Aku menyelesaikan pendidikan untuk menjadi dokter umum. Lalu, aku menjalani pendidikan lagi untuk menjadi dokter yang memiliki spesialisasi di kesehatan jiwa. Aku adalah … ",
        Psikiater: {
          Text: "Psikiater",
          Do: "jump Scene-162-benar",
        },
        Psikolog: {
          Text: "Psikolog",
          Do: "jump Scene-162-salah",
        },
        Konselor: {
          Text: "Konselor",
          Do: "jump Scene-162-salah",
        },
      },
    },
  ],

  "Scene-162-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    // "play voice chap3-83",
    "v Aku senang sekali dengan jawabanmu! Kamu sangat bersungguh-sungguh memahami latihan yang kita jalankan.",
    // "stop voice chap3-83",
    "jump Scene-163",
  ],

  "Scene-162-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    // "play voice chap3-82",
    "v Hmmmm jawabanmu mengecewakan!",
    // "stop voice chap3-82",
    "jump Scene-163",
  ],

  "Scene-163": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-know-psychiatrist",
    "v Profesional yang satu ini juga tidak perlu diragukan! Psikiater telah menyelesaikan pendidikan dokter yang pada umumnya membutuhkan waktu 6 tahun. Lalu, mereka juga menyelesaikan pendidikan untuk mendapatkan gelar Sp.KJ alias Spesialis Kesehatan Jiwa yang membutuhkan waktu sekitar 4 tahun.",
    "v Dengan latar belakang pendidikan kedokterannya, psikiater dapat memberikan resep obat-obatan untuk menangani masalah kesehatan mental. Kewenangan ini tidak dimiliki oleh profesional kesehatan mental lainnya. Para psikiater juga sudah terlatih untuk menangani masalah kesehatan yang rumit dan membutuhkan perawatan di rumah sakit jiwa.",
    "jump Scene-164",
  ],

  "Scene-164": [
    "show scene scene-2",
    "v Siapakah aku?",
    {
      Choice: {
        Dialog:
          "Tugasku adalah membantu seseorang menyelesaikan masalah melalui proses konseling. Aku memiliki latar belakang pendidikan sarjana (S1) Psikologi atau Bimbingan dan Konseling.  Aku adalah …",
        Psikiater: {
          Text: "Psikiater",
          Do: "jump Scene-164-salah",
        },
        Psikolog: {
          Text: "Psikolog",
          Do: "jump Scene-164-salah",
        },
        Konselor: {
          Text: "Konselor",
          Do: "jump Scene-164-benar",
        },
      },
    },
  ],

  "Scene-164-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    // "play voice chap3-83",
    "v Aku senang sekali dengan jawabanmu! Kamu sangat bersungguh-sungguh memahami latihan yang kita jalankan.",
    // "stop voice chap3-83",
    "jump Scene-165",
  ],

  "Scene-164-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    // "play voice chap3-82",
    "v Hmmmm jawabanmu mengecewakan!",
    // "stop voice chap3-82",
    "jump Scene-165",
  ],

  "Scene-165": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-know-counselor",
    "v Konselor adalah profesional kesehatan mental terdekatmu! Tidak seluruh sekolah memiliki psikolognya sendiri, namun setiap sekolah pada umumnya memiliki konselor. Pastikan kamu mengenal konselormu dan bagaimana cara meminta bantuannya ya! Konselor adalah orang terdekat yang bisa kamu dapatkan bantuannya dengan segera untuk masalah kesehatan mental. ",
    "v Para konselor ini memiliki latar belakang pendidikan konselor adalah sarjana (S1) Psikologi atau Bimbingan dan Konseling. Lalu, mereka juga terlatih untuk menjadi konselor di bidang keahliannya masing-masing seperti bidang pendidikan, keluarga, pekerjaan, dan masih banyak lagi!",
    "v Konselor tidak dapat memberikan diagnosis atau terapi untuk gangguan mental, namun mereka dapat membantumu untuk menyelesaikan masalah dengan efektif, termasuk memutuskan untuk meminta bantuan dari psikolog atau psikiater. Mereka dapat membantumu menyelesaikan masalah dengan menjadi tempat bercerita yang nyaman, membantu memahami masalah, mengeksplorasi solusi yang dapat kamu lakukan, hingga mengevaluasi solusi terbaik apa yang dapat kamu lakukan.",
    "jump Scene-166",
  ],

  "Scene-166": [
    "show scene scene-why-pro1",
    "v Dari perkenalan kita dengan 3 profesional tadi, kita dapat merangkum 4 alasan mengapa bantuan profesional diperlukan untuk menangani masalah kesehatan mental. ",
    "jump Scene-167",
  ],

  "Scene-167": [
    "show scene scene-why-pro2",
    "v Alasan pertamanya adalah para profesional ini telah terlatih secara pendidikan dan profesional. Sebelumnya kita telah membahas bagaimana para profesional ini perlu menjalani pendidikan selama bertahun-tahun di perguruan tinggi. Yang perlu kamu ketahui juga adalah, setelah lulus mereka tidak begitu saja dilepas loh! ",
    "v Para profesional ini perlu melakukan sertifikasi dari institusi yang berwewenang untuk menguji bahwa mereka benar-benar memiliki kemampuan untuk membantu penanganan masalah kesehatan mental. Ujiannya pun dilakukan secara berkala dalam beberapa tahun untuk memastikan kompetensi yang mereka miliki terus dikembangkan. ",
    "jump Scene-168",
  ],

  "Scene-168": [
    "show scene scene-why-pro3",
    "v Ini juga berkaitan dengan alasan kedua untuk mendapatkan bantuan profesional. Jadi, selama menjalani proses pendidikan, para profesional ini belajar dari teori-teori dan penelitian ilmiah mengenai masalah kesehatan mental. Mereka juga sudah belajar untuk mempraktikkan keterampilan ilmiah tersebut sehingga mereka dapat memberikan layanan kesehatan mental terbaik! Uji sertifikasi yang dilakukan secara berkala pun menuntut mereka untuk terus belajar penelitian terkini terkait kesehatan mental. ",
    "jump Scene-169",
  ],

  "Scene-169": [
    "show scene scene-why-pro4",
    "v Alasan yang ketiga dapat membuatmu merasa 100% aman untuk mendapatkan bantuan profesional, yaitu mereka telah disumpah dan diawasi untuk mengikuti kode etik profesi. Dalam sumpah ini, mereka harus memastikan bahwa setiap tindakan mereka dilakukan demi kesejahteraanmu. ",
    "v Hal-hal sensitif seperti kerahasiaan masalahmu akan dijaga dengan baik oleh para profesional. Mereka juga tidak akan menjudge pribadimu buruk atau melakukan hal-hal yang tidak profesional lainnya. Jika mereka tidak menghargai kesejahteraanmu, izin mereka untuk dapat melakukan praktik secara profesional dapat terancam!",
    "jump Scene-170",
  ],

  "Scene-170": [
    "show scene scene-why-pro5",
    "v Dengan segala jaminan ini, maka alasan keempat untuk mendapatkan bantuan profesional adalah kondisi kesehatan mental yang akan membaik! Mulai dari berkurangnya gejala-gejala masalah kesehatan mental, kemampuan untuk berfungsi seperti bersekolah dan menjalin hubungan yang membaik, hingga mencegah masalah lain untuk muncul, yang pada akhirnya akan meningkatkan kesejahteraan hidupmu!",
    "jump Scene-171",
  ],

  "Scene-171": [
    "show scene scene-2",
    "v Setelah berkenalan dengan profesional, jadi apakah kamu merasa bahwa seluruh masalah kesehatan mental membutuhkan bantuan profesional?",
    {
      Choice: {
        Dialog:
          "Seluruh masalah kesehatan mental harus mendapatkan bantuan profesional",
        "Saya setuju dengan pendapat di bawah": {
          Text: "Saya setuju dengan pendapat di bawah",
          Do: "jump Scene-171-salah",
        },
        "Saya tidak setuju dengan pendapat di bawah": {
          Text: "Saya tidak setuju dengan pendapat di bawah",
          Do: "jump Scene-171-benar",
        },
      },
    },
  ],

  "Scene-171-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    // "play voice chap3-83",
    "v Jawaban yang tepat untuk pertanyaan yang sulit. Aku sangat senang! Tentu saja kita ingin memastikan agar seluruh masalah kesehatan mental mendapatkan bantuan terbaik.",
    // "stop voice chap3-83",
    "jump Scene-172",
  ],

  "Scene-171-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    // "play voice chap3-82",
    "v Hmmmmm. Sayang sekali jawabanmu kurang tepat, namun tidak masalah. Mungkin kamu sangat peduli pada masalah kesehatan mental sehingga ingin memastikan bantuan terbaik didapatkan.",
    // "stop voice chap3-82",
    "jump Scene-172",
  ],

  "Scene-172": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-1",
    "v Namun, terkadang bantuan terbaik sangat bisa kita dapatkan dengan belajar mengatasi masalah dan meminta bantuan orang terdekat. Profesional pada umumnya dibutuhkan ketika: ",
    "v 1.Masalah yang dihadapi sudah mengganggu keseharian seperti mengganggu kegiatan sekolah dan hubungan sosial.\n2.Menyebabkan perasaan buruk secara terus-menerus dalam waktu panjang.\n3.Membahayakan diri sendiri atau orang lain.",
    "v Alasan lain mengapa tidak seluruh masalah kesehatan mental memerlukan bantuan profesional adalah jumlah profesional yang terbatas. ",
    "v Saat ini, hanya terdapat sekitar 3000 psikolog klinis dan 1000 psikiater di Indonesia. Ingat-ingat kembali segitiga kesehatan mental yang sudah kita bahas sebelumnya!",
    "jump Scene-173",
  ],

  "Scene-173": [
    "show scene scene-mental-condition-terms",
    "v Sebelum melanjutkan…. Yuk, ingat kembali bahasa yang tepat untuk kondisi mental!",
    "jump Scene-174",
  ],

  "Scene-174": [
    "show scene scene-checklist1-1",
    "v Mari kita mulai dari perilaku-perilaku yang menyulitkan …, namun sebenarnya cukup “wajar” untuk terjadi dalam kehidupan sehari-hari yang memang tidak akan pernah lepas dari tekanan atau stress. Di antaranya adalah:",
    "jump Scene-175",
  ],

  "Scene-175": [
    "show scene scene-checklist1-2",
    "v Bersikap kasar, melakukan hal-hal ceroboh, merasa malas, menarik diri, perasaan sensitive, merasa malu, bersikap menjengkelkan, memberontak, bersikap emosional, hingga menantang orang lain.",
    "jump Scene-176",
  ],

  "Scene-176": [
    "show scene scene-checklist1-3",
    "v Perilaku-perilaku ini pada umumnya terjadi sebagai reaksi dari stress dalam hidup. Oleh karena itu, akan sangat wajar jika seseorang menunjukkan perilaku ini saat memiliki masalah hubungan dengan keluarga atau teman, berduka karena kehilangan orang terdekat, mengalami kesulitan belajar seperti nilai yang rendah, adaptasi dengan lingkungan baru seperti berpindah sekolah, atau mengalami sakit fisik yang mengganggu aktivitas sehari-hari.",
    "jump Scene-177",
  ],

  "Scene-177": [
    "show scene scene-checklist1-4",
    "v Respon terbaik yang dapat kamu berikan jika kamu atau orang di sekitarmu menunjukkan perilaku ini adalah dengan tidak bereaksi berlebihan. Ingat, berhasil menghadapi stress dalam kehidupan sehari-hari adalah sumber dari resiliensi alias kekuatan mental! Yang dibutuhkan saat menghadapi stress adalah dukungan suportif dari orang di sekitar dengan menjadi pendengar yang baik dan menawarkan bantuan tanpa memaksa saran alias adu nasib hehe.",
    "v Saat masalah yang dihadapi sangatlah sulit, ada baiknya untuk meminta bantuan dari orang yang berpengalaman. Mulai dari teman sekolah yang dapat membantu kesulitan belajar atau bersosialisasi, orang tua yang dapat menceritakan pengalamannya, hingga konselor sekolah yang siap menemani penyelesaian masalah. Bantuan profesional dibutuhkan ketika perilaku ini terus-menerus ditunjukkan dalam waktu panjang.",
    "jump Scene-178",
  ],

  "Scene-178": [
    "show scene scene-checklist2",
    "v Lalu bagaimana cara kita mengetahui perbedaan antara “hari yang buruk” dengan porensi masalah kesehatan mental yang lebih serius? Di sesi sebelumnya kita telah membahas gejala-gejala gangguan mental. Tujuannya adalah agar ketika gejala-gejala ini terjadi pada diri kita dan orang di sekitar, kita langsung bergerak cepat untuk memastikan bantuan profesional didapatkan!",
    "v Sebagai contoh, bantuan profesional perlu didapatkan jika hal-hal berikut dirasakan hampir setiap hari selama beberapa minggu secara berturut-turut.",
    "v Jika kamu masih ingat, di sesi sebelumnya kita telah membahas bahwa hal-hal tersebut adalah bagian dari gejala depresi. Bukan berarti kamu dapat mendiagnosis dirimu memiliki gangguan mental. Ingat juga bahwa gangguan mental hanya dapat didiagnosis oleh psikolog dan psikiater. ",
    "v Jadi, jika gejala-gejala ini dirasakan, maka segera dapatkanlah bantuan profesional. Semakin cepat bantuan profesional didapatkan, semakin baik pula proses penanganan dapat dilakukan. Kamu juga dapat meminta bantuan dari konselor jika ragu atau kesulitan untuk mendapatkan bantuan profesional.",
    "jump Scene-179",
  ],

  "Scene-179": [
    "show scene scene-2",
    "v Jika daftar perilaku sebelumnya merupakan gejala-gejala yang perlu diwaspadai, daftar yang akan kita bahas setelah ini adalah PERTANDA SERIUS yang membutuhkan bantuan profesional dengan segera. ",
    "v INGAT, semakin cepat ditangani, maka semakin baik pula penanganan yang dapat diberikan dan semakin baik kesehatan mentalnya di masa depan. ",
    "jump Scene-180",
  ],

  "Scene-180": [
    "show scene scene-checklist3",
    "v Perhatikan baik-baik ya segera hubungi profesional jika kamu merasakan atau melihat perilaku-perilaku abnormal berikut yang dapat berdampak serius bagi diri sendiri maupun orang lain. Lalu, bagaimana caranya mendapatkan bantuan profesional? Akan langsung kita bahas setelah ini! ",
    "jump Scene-181",
  ],

  "Scene-181": [
    "show scene scene-school-counselor-1",
    "v Di Indonesia, setiap sekolah wajib memiliki seorang konselor. Jadi, dapat dipastikan sekolahmu juga memiliki konselor. Pastikan kamu mengenal siapa konselor di sekolahmu dan bagaimana cara meminta bantuan mereka. Meski belum akan meminta bantuan… ",
    "v …kamu dapat berkenalan terlebih dahulu dengan konselor yang ada di sekolah agar nanti kamu dapat merasa lebih nyaman untuk meminta bantuan. Konselor tidak dapat memberikan diagnosis atau terapi gangguan mental, namun ketika psikolog dan psikiater dibutuhkam, konselor sekolahmu dapat membantu untuk memastikan siswa mendapat bantuan profesional!",
    "jump Scene-182",
  ],

  "Scene-182": [
    "show scene scene-school-counselor-2",
    "v Ada juga layanan profesional di luar sekolah yang gratis loh! Misalnya Layanan Sejiwa yang disediakan oleh Pemerintah Indonesia bersama Himpunan Psikologi Indonesia alias HIMPSI atau Bantuan Konseling Daring Gratis dari Ikatan Psikolog Klinis Indonesia. Pastikan kamu mengikuti media sosial kedua lembaga ini untuk mendapatkan informasi terbaru mengenai layanan psikologi gratis yang ada. ",
    "jump Scene-183",
  ],

  "Scene-183": [
    "show scene scene-school-counselor-3",
    "v Untuk mencari psikolog klinis yang ada di sekitarmu, kamu dapat mengunjungi website Ikatan Psikolog Klinis Indonesia di ipkindonesia.or.id dan mencari menu 'Cari Psikolog Klinis'. ",
    "v Setelahnya, kamu akan diarahkan pada direktori ikatan psikolog klinis. Dalam menu ini, kamu dapat memasukkan kota tempatmu berada dan klik “cari psikolog”. Website akan menampilkan daftar nama psikolog klinis yang ada di kotamu lengkap dengan keahlian dan alamat praktiknya.",
    "jump Scene-184",
  ],

  "Scene-184": [
    "show scene scene-school-counselor-4",
    "v Mencari psikiater yang ada di sekitarmu pun juga sama mudahnya! Kamu tinggal mengunjungi website Perhimpunan Dokter Spesialis Kedokteran Jiwa Indonesia di pdskji.org. ",
    "v Dalam website tersebut, di bagian kanannya terdapat kolom “Cari Dokter” yang dapat kamu isi dengan kota tempatmu berada dan klik “search”, website akan menampilkan daftar nama psikiater yang ada di sekitarmu dan lokasi praktiknya!",
    "jump Scene-185",
  ],

  "Scene-185": [
    "show scene scene-diceritain-1",
    "v Dengan perkembangan teknologi di masa sekarang, kamu bisa mendapatkan layanan konseling bersama psikolog secara daring loh! Gimana caranya? Ada dua cara yang bisa kamu lakukan. Cara yang pertama adalah dengan mengunjungi Instagram @diceritain.id lalu mengklik link yang ada di bio Instagram tersebut. Nanti kamu akan mendapatkan menu “psikolog diceritain” dan diarahkan kepada formular pendaftaran sesi konseling bersama psikolog. ",
    "jump Scene-186",
  ],

  "Scene-186": [
    "show scene scene-diceritain-2",
    "v Cara kedua yang dapat kamu lakukan adalah dengan mengunjungi website diceritain.id dan masuk ke menu product 'layanan konseling psikolog'. Setelahnya, kamu tinggal melakukan penjadwalan sesi konseling! ",
    "jump Scene-187",
  ],

  "Scene-187": [
    "show scene scene-diceritain-3",
    "v Jika kamu masih ragu untuk menghubungi profesional, kamu dapat terlebih dahulu menceritakan masalahmu dengan konselor sebaya Diceritain! Caranya mudah banget, kamu tinggal download aplikasi Diceritain di Google Playstore. Setelah mendaftarkan diri, kamu dapat langsung terhubung dengan konselor sebaya yang sudah terlatih untuk menjadi tempat bercerita yang nyaman dan terpercaya! ",
    "jump Scene-188",
  ],

  "Scene-188": [
    "show scene scene-checklist-large",
    "v Oke! Kita sudah berada di akhir sesi latihan kali ini. Untuk memastikan kamu memilih tindakan yang tepat untuk menyelesaikan masalah kesehatan mental, mari kita buat rencana tindakan untuk menghadapi situasi yang serupa dengan checklist yang telah kita bahas!",
    "jump Scene-189",
  ],

  "Scene-189": [
    "show scene scene-2",
    "v Bayangkan … ",
    {
      Choice: {
        Dialog:
          "Saat mendapatkan hasil ujian tengah semester matematika, temanmu mendapatkan nilai yang rendah dan menjadi marah tiap kali ada yang membahas nilai tersebut. Hal yang dibutuhkan oleh temanmu adalah…",
        "Teman yang suportif dan menawarkan bantuan": {
          Text: "Teman yang suportif dan menawarkan bantuan",
          Do: "jump Scene-189-benar",
        },
        "Mendapatkan bantuan profesional": {
          Text: "Mendapatkan bantuan profesional",
          Do: "jump Scene-189-salah",
        },
      },
    },
  ],

  "Scene-189-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    // "play voice chap3-83",
    "v Yap. Tindakan yang tepat! Dalam keseharian, tidak jarang kita menemukan situasi yang membuat kita tertekan, salah satunya adalah kesulitan belajar seperti mendapat nilai yang rendah. ",
    // "stop voice chap3-83",
    "jump Scene-190",
  ],

  "Scene-189-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    // "play voice chap3-82",
    "v Hmmmm, pilihanmu kurang tepat. Dalam keseharian, tidak jarang kita menemukan situasi yang membuat kita tertekan, salah satunya adalah kesulitan belajar seperti mendapat nilai yang rendah. ",
    // "stop voice chap3-82",
    "jump Scene-190",
  ],

  "Scene-190": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-checklist1-4",
    "v Perilaku temanmu yang marah saat mendiskusikan nilai matematik adalah reaksi yang wajar saat merasa tertekan, meskipun ya … menyulitkan orang di sekitarnya. Masalah seperti ini secara umum tidak membutuhkan bantuan profesional, kecuali terjadi dalam waktu yang panjang. ",
    "v Yang temanmu butuhkan adalah teman yang suportif yang tidak menghakiminya! Cobalah tawarkan bantuan seperti belajar bersama jika kamu menguasai materi yang ia gagal selesaikan dengan baik, namun jangan memaksanya untuk melakukan sesuatu. ",
    "v Cukup dengarkan dan tawarkan bantuan agar ia tidak merasa sendirian. Setelah berhasil menyelesaikan masalah ini, temanmu akan menjadi lebih kuat dalam menghadapi tekanan serupa. Misalnya, ia jadi mengetahui cara belajar yang lebih tepat untuk matematika.",
    "jump Scene-191",
  ],

  "Scene-191": [
    "show scene scene-2",
    "v Bayangkan … ",
    {
      Choice: {
        Dialog:
          "Temanmu menceritakan bahwa ia merasa lelah karena terus dikejar-kejar penjahat kejam dengan kekuatan super. Terkadang ia bercerita bahwa ia ingin bunuh diri. Hal yang dibutuhkan oleh temanmu adalah …",
        "Teman yang suportif dan menawarkan bantuan": {
          Text: "Teman yang suportif dan menawarkan bantuan",
          Do: "jump Scene-191-salah",
        },
        "Mendapatkan bantuan profesional": {
          Text: "Mendapatkan bantuan profesional",
          Do: "jump Scene-191-benar",
        },
      },
    },
  ],

  "Scene-191-benar": [
    "play sound clap with volume 50",
    "show scene scene-2-benar",
    // "play voice chap3-83",
    "v Yes, kamu memilih tindakan yang tepat! Perilaku yang ditunjukkan oleh temanmu menunjukkan masalah dalam mengenali realita yang dapat mengganggu kesehariannya, bahkan mengancam keselamatannya.",
    // "stop voice chap3-83",
    "jump Scene-192-benar",
  ],

  "Scene-191-salah": [
    "show scene scene-2-salah",
    "play sound wrong with volume 50",
    // "play voice chap3-82",
    "v Kamu memilih Tindakan yang tidak tepat dan dapat membahayakan nyawa!",
    // "stop voice chap3-82",
    "jump Scene-192-salah",
  ],

  "Scene-192-benar": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-checklist3",
    "v Dalam kondisi seperti ini, kamu perlu memastikan bahwa ia mendapatkan bantuan profesional. Gunakan pengetahuanmu terkait cara mengakses bantuan profesional yang telah kita bahas sebelumnya.",
    "v Ingat, semakin cepat masalah seperti ini ditangani, maka semakin baik pula kondisi kesehatan mental yang dapat kita harapkan di masa depan! Jangan pernah mau diminta untuk merahasiakan keinginan untuk bunuh diri! Ceritakan kepada orang tua dan konselor sekolah jika temanmu menceritakan keinganan untuk bunuh diri.",
    "jump Scene-193",
  ],

  "Scene-192-salah": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-checklist3",
    "v Perilaku yang ditunjukkan oleh temanmu menunjukkan masalah dalam mengenali realita yang dapat mengganggu kesehariannya, bahkan mengancam keselamatannya. Dalam kondisi seperti ini, kamu perlu memastikan bahwa ia mendapatkan bantuan profesional. ",
    "v Gunakan pengetahuanmu terkait cara mengakses bantuan profesional yang telah kita bahas sebelumnya. Ingat, semakin cepat masalah seperti ini ditangani, maka semakin baik pula kondisi kesehatan mental yang dapat kita harapkan di masa depan! Jangan pernah mau diminta untuk merahasiakan keinginan untuk bunuh diri! Ceritakan kepada orang tua dan konselor sekolah jika temanmu menceritakan keinganan untuk bunuh diri.",
    "jump Scene-193",
  ],

  "Scene-193": [
    "show scene scene-1",
    "v Kamu sudah menyelesaikan sesi latihan Para Pejuang Kesehatan Mental! Dalam sesi ini, kamu akan mendapatkan 2 buah lencana. ",
    "jump Scene-194",
  ],

  "Scene-194": [
    "show scene scene-badge-acquired-chapter-4",
    "v Lencana yang pertama menandakan bahwa kamu sudah belajar mengapa bantuan profesional seperti psikolog, psikiater, dan konselor dibutuhkan dan kapan mereka dibutuhkan.",
    "v Lalu, lencana yang kedua menandakan bahwa kamu sudah mengetahui cara untuk mendapatkan bantuan dari profesional. Mulai dari konselor yang ada di sekolah, layanan psikologis gratis, hingga mencari psikolog dan psikiater secara online.",
    "jump Scene-195",
  ],

  "Scene-195": [
    "show scene scene-badge-list-chapter-4",
    "v Ingat! Sebaik apapun pengetahuan seseorang mengenai kesehatan mental, ada kalanya ia membutuhkan bantuan orang lain. ",
    "v Meminta bantuan tidaklah menandakan kelemahan, melainkan menandakan kebijakan dan keberanian untuk memilih langkah yang tepat dalam menjaga kesehatan mental. ",
    "jump Scene-196",
  ],

  "Scene-196": [
    "show scene scene-2",
    "v Apakah kamu dapat menjawab dua rencana tindakan terakhir dengan tepat?",
    "v Jika kamu belum dapat menjawabnya dengan tepat, aku menyarankanmu untuk mengulang sesi latihan ini karena akan sangat penting untuk penanganan masalah kesehatan mental yang tepat.",
    "v Ingat! Sebaik apapun pengetahuan seseorang mengenai kesehatan mental, ada kalanya ia membutuhkan bantuan orang lain. ",
    "v Meminta bantuan tidaklah menandakan kelemahan, melainkan menandakan kebijakan dan keberanian untuk memilih langkah yang tepat dalam menjaga kesehatan mental",
    "v Sampai jumpa di sesi latihan berikutnya yang merupakan sesi latihan terakhir kita!",
    "jump Loading-5",
  ],
};

// Make globally accessible for index.js merging
window.Chapter4 = Chapter4;
