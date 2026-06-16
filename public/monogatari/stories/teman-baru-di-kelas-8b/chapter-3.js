const Chapter3 = {
  "Scene-18": [
    "show scene kelas-pagi",
    "play music chapter-1 with loop fade 20 volume 10",
    "Beberapa hari kemudian. Bu Hasna mengumumkan tugas kelompok.",
    "hasna Anak-anak, minggu depan ada presentasi poster tentang organ tubuh manusia.",
    "hasna Kelompoknya sama seperti diskusi kemarin ya. Rafi, Alya, Arum, Poppy.",
    "hasna Kerjakan bersama-sama. Semua anggota harus berkontribusi.",
    "jump Scene-19",
  ],

  "Scene-19": [
    "show scene kelas-pagi",
    "Saat istirahat, keempatnya berkumpul di meja belakang.",
    "rafi Oke, jadi bagi tugas aja gimana? Siapa yang mau ngegambar, nulis, cari referensi?",
    "arum Gue sama Poppy yang ngegambar deh. Kita lumayan jago soal itu.",
    "rafi Oke. Gue cari referensi. Alya, kamu mau nulis di posternya?",
    "Alya mengangguk dan tersenyum.",
    "Alya mengeluarkan buku catatannya dan mulai menulis ide-ide di kertas. Tulisannya rapi dan terstruktur.",
    "jump Scene-20",
  ],

  "Scene-20": [
    "show scene kelas-pagi",
    "Alya menulis daftar ide di kertasnya: judul poster, layout, warna yang akan dipakai, fakta-fakta penting.",
    "Alya menyodorkan kertas itu ke Rafi.",
    "rafi Wah, rapi banget. Ini idenya bagus-bagus.",
    "rafi Arum, Poppy, lihat deh. Alya udah nulis idenya.",
    "Arum melirik sekilas kertas Alya.",
    "arum Hmm, oke.",
    "Arum langsung berbalik ke Poppy dan berbisik.",
    "arum Udahlah, kita aja yang kerjain. Dia nulis doang, nanti hasilnya nggak jelas.",
    "poppy Iya sih. Daripada ribet jelasin terus, mending kita berdua aja.",
    "jump Scene-21",
  ],

  "Scene-21": [
    "show scene kelas-pagi",
    "Alya membaca bisikan Arum dan Poppy. Bibir mereka bergerak jelas di hadapannya.",
    "Bahu Alya turun perlahan.",
    "Jari-jarinya yang sedang memegang pensil berhenti bergerak.",
    "alya (Mereka nggak mau kerja sama aku...)",
    "alya (Aku cuma nulis. Nggak lebih.)",
    "jump Scene-22",
  ],

  "Scene-22": [
    "show scene kelas-pagi",
    "Rafi mendengar bisikan Arum dan Poppy. Matanya melebar sedikit.",
    "rafi Eh, nggak gitu kali. Alya juga anggota kelompok.",
    "arum Iya, tapi kan susah kalau dia nggak ngerti apa-apa. Nanti malah ngerepotin.",
    "rafi Tapi Bu Hasna bilang semua harus kontribusi...",
    "arum Ya udah, kontribusinya dia nulis aja di poster. Selesai.",
    "Rafi terdiam. Ia ingin membela Alya lebih keras, tapi kata-katanya hilang.",
    "rafi (Gue harusnya ngomong lebih keras... tapi gue nggak mau ribut.)",
    "jump Scene-23",
  ],

  "Scene-23": [
    "show scene kelas-pagi",
    "Alya menatap kertasnya yang penuh ide. Lalu ia melipat kertas itu pelan-pelan dan memasukkannya ke dalam tas.",
    "Alya mengambil tasnya dan berdiri.",
    "rafi Alya? Mau ke mana?",
    "Alya berhenti sebentar dan menulis di kertas kecil. Ia menunjukkannya ke Rafi.",
    '"Tidak apa-apa. Lanjut aja tanpa aku."',
    "rafi Alya, tunggu—",
    "Alya sudah berjalan keluar kelas. Langkahnya cepat.",
    "jump Scene-24",
  ],

  "Scene-24": [
    "show scene lorsekolah",
    "Rafi berdiri di ambang pintu, melihat punggung Alya menjauh di lorong sekolah.",
    "rafi (Gue harusnya ngomong lebih tadi. Gue harusnya bela dia.)",
    "rafi (Tapi gue juga nggak mau konfrontasi Arum... gimana dong?)",
    {
      Choice: {
        Dialog: "Apa yang seharusnya Rafi lakukan?",
        A: {
          Text: "Kejar Alya dan minta maaf",
          Do: "jump Scene-25A",
        },
        B: {
          Text: "Tegur Arum dan Poppy",
          Do: "jump Scene-25B",
        },
        C: {
          Text: "Diam saja, nanti juga selesai sendiri",
          Do: "jump Scene-25C",
        },
      },
    },
  ],

  "Scene-25A": [
    "show scene lorsekolah",
    "Rafi mengambil napas dalam dan berlari menyusul Alya.",
    "rafi Alya! Tunggu!",
    "Alya berhenti tapi tidak berbalik. Bahunya masih turun.",
    "rafi Maaf ya. Gue tahu tadi Arum dan Poppy ngomong yang nggak enak.",
    "rafi Gue harusnya ngomong lebih keras. Gue salah.",
    "Alya berbalik pelan. Matanya sedikit merah, tapi ia tidak menangis.",
    "Alya menulis di kertasnya.",
    '"Terima kasih sudah mencoba."',
    "rafi Gue bakal ngomong ke mereka. Serius.",
    "Alya mengangguk pelan. Senyumnya tipis, tapi nyata.",
    "jump Loading-4",
  ],

  "Scene-25B": [
    "show scene kelas-pagi",
    "Rafi berbalik ke Arum dan Poppy.",
    "rafi Arum, Poppy. Itu nggak bener. Alya anggota kelompok kita.",
    "arum Loh, gue cuma bilang aja—",
    "rafi Dia udah nulis idenya. Lo berdua bisik-bisik di depan dia. Itu nggak sopan.",
    "poppy Ya udah... maaf deh.",
    "Rafi langsung keluar menyusul Alya.",
    "rafi Alya! Gue udah ngomong ke mereka.",
    "Alya menatap Rafi. Matanya sedikit basah.",
    "Alya menulis di kertasnya.",
    '"Terima kasih sudah mencoba."',
    "Senyum Alya lebih tulus sekarang.",
    "jump Loading-4",
  ],

  "Scene-25C": [
    "show scene lorsekolah",
    "Rafi tetap berdiri di ambang pintu. Kakinya tidak bergerak.",
    "rafi (Mungkin bener. Nanti juga selesai sendiri.)",
    "rafi (Tapi... kenapa gue ngerasa nggak enak banget ya?)",
    "Rafi kembali ke kelas dan duduk di bangkunya. Tapi pikirannya tetap di Alya.",
    "Di ujung lorong, Alya berjalan sendirian. Ia memeluk tasnya erat-erat.",
    "alya (Mungkin memang lebih baik aku nggak ikut.)",
    "jump Loading-4",
  ],

  "Loading-4": [
    "stop sound typewriter",
    "play sound typewriter",
    "show scene rumah-rafi",
    "Bab 4: Titik Balik Rafi",
    "jump Scene-26",
  ],
};

window.Chapter3 = Chapter3;
if (typeof module !== 'undefined' && module.exports) { module.exports = Chapter3; }
