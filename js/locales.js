/**
 * Senara Translations
 * Embedded translations for static hosting (no fetch required)
 */

const LOCALES = {
  id: {
    meta: {
      lang: "id",
      langName: "Bahasa Indonesia",
      langNameNative: "Bahasa Indonesia"
    },
    nav: {
      home: "Beranda",
      collection: "Koleksi",
      about: "Tentang",
      approach: "Pendekatan",
      faq: "FAQ",
      donate: "Donasi",
      tagline: "Belajar lewat cerita"
    },
    contact: {
      title: "Hubungi Kami",
      subtitle: "Kami senang mendengar dari kamu.",
      intro: "Punya pertanyaan, masukan, atau sekadar ingin menyapa? Jangan ragu untuk menghubungi kami. Setiap pesan dibaca dan kami akan berusaha membalas secepat mungkin.",
      generalTitle: "Pertanyaan Umum",
      generalDesc: "Untuk pertanyaan, masukan, laporan bug, atau sekadar ngobrol tentang Senara.",
      generalButton: "Kirim Email",
      contribTitle: "Kontribusi & Kemitraan",
      contribDesc: "Ingin berkontribusi sebagai relawan atau berkolaborasi sebagai organisasi? Kunjungi halaman khusus kami.",
      contribButton: "Lihat Peluang",
      responseNote: "⏱️ Kami biasanya membalas dalam 2-3 hari kerja. Untuk pertanyaan umum, cek juga halaman <a href='faq.html' style='color: #d97706; text-decoration: underline;'>FAQ</a> kami.",
      socialTitle: "Ikuti Perkembangan Senara",
      socialLinks: {
        trakteer: "🍰 Trakteer",
        instagram: "📷 Instagram"
      }
    },
    terms: {
      title: "Syarat & Ketentuan",
      subtitle: "Ketentuan penggunaan platform Senara.",
      lastUpdated: "📅 Terakhir diperbarui: Desember 2025",
      tocTitle: "Daftar Isi",
      sections: {
        acceptance: {
          title: "1. Penerimaan Ketentuan",
          body1: "Dengan mengakses dan menggunakan website Senara, kamu menyetujui untuk terikat dengan syarat dan ketentuan ini. Jika kamu tidak setuju, mohon untuk tidak menggunakan layanan kami.",
          body2: "Ketentuan ini berlaku untuk semua pengunjung, pengguna, dan pihak lain yang mengakses layanan Senara."
        },
        description: {
          title: "2. Deskripsi Layanan",
          intro: "Senara adalah platform cerita interaktif berbasis visual novel yang menyediakan konten gratis untuk tujuan literasi dan pembelajaran. Layanan kami meliputi:",
          list: [
            "Akses ke cerita interaktif dengan berbagai topik",
            "Fitur save/load untuk melanjutkan cerita",
            "Quiz dan elemen interaktif dalam cerita",
            "Informasi dan sumber daya terkait topik cerita"
          ],
          outro: "Senara adalah platform <strong>nonprofit</strong>. Semua konten disediakan gratis tanpa biaya berlangganan atau pembelian dalam aplikasi."
        },
        usage: {
          title: "3. Penggunaan yang Diizinkan",
          allowedTitle: "Kamu diizinkan untuk:",
          allowedList: [
            "Mengakses dan membaca semua cerita yang tersedia",
            "Membagikan link ke cerita atau halaman Senara",
            "Menggunakan cerita untuk keperluan pendidikan (di kelas, workshop, dll)",
            "Memberikan feedback dan saran untuk perbaikan"
          ],
          notAllowedTitle: "Kamu tidak diizinkan untuk:",
          notAllowedList: [
            "Menyalin, memodifikasi, atau mendistribusikan konten Senara tanpa izin",
            "Menggunakan konten untuk tujuan komersial tanpa persetujuan tertulis",
            "Mencoba mengakses sistem atau data yang tidak diperuntukkan untuk publik",
            "Menggunakan bot atau scraper untuk mengambil konten secara otomatis",
            "Melakukan tindakan yang dapat merusak atau mengganggu layanan"
          ]
        },
        content: {
          title: "4. Konten & Hak Cipta",
          ownershipTitle: "Kepemilikan Konten",
          ownershipBody: "Semua cerita, ilustrasi, dan konten di Senara adalah hasil karya tim kontributor kami. Hak cipta tetap dimiliki oleh Senara dan/atau kontributor masing-masing.",
          educationTitle: "Penggunaan untuk Pendidikan",
          educationBody: "Guru, fasilitator, dan organisasi pendidikan diizinkan menggunakan cerita Senara untuk keperluan pembelajaran non-komersial tanpa izin khusus selama tidak ada modifikasi konten.",
          attributionTitle: "Atribusi",
          attributionBody: "Jika kamu mengutip atau mereferensikan konten Senara, mohon sertakan atribusi dengan menyebutkan Senara sebagai sumber."
        },
        disclaimer: {
          title: "5. Disclaimer",
          highlight: "<strong>Penting:</strong> Senara bukan pengganti layanan profesional. Konten kami bertujuan untuk meningkatkan literasi dan kesadaran, bukan untuk mendiagnosis, mengobati, atau memberikan nasihat profesional.",
          mentalTitle: "Konten Kesehatan Mental",
          mentalBody: "Cerita bertopik kesehatan mental dimaksudkan untuk edukasi. Jika kamu mengalami masalah kesehatan mental, hubungi profesional yang berkualifikasi. Lihat halaman <a href='keselamatan.html' style='color: #d97706;'>Keselamatan</a> untuk daftar layanan bantuan.",
          accuracyTitle: "Akurasi Informasi",
          accuracyBody: "Kami berusaha menyajikan informasi yang akurat dan terkini, namun tidak menjamin bebas dari kesalahan. Jika kamu menemukan ketidakakuratan, silakan hubungi kami."
        },
        liability: {
          title: "6. Batasan Tanggung Jawab",
          intro: "Senara disediakan \"sebagaimana adanya\" tanpa jaminan apa pun. Kami tidak bertanggung jawab atas:",
          list: [
            "Kerugian yang timbul dari penggunaan atau ketidakmampuan menggunakan layanan",
            "Keputusan yang diambil berdasarkan konten di platform kami",
            "Gangguan layanan atau kehilangan data yang tersimpan di browser",
            "Konten atau layanan pihak ketiga yang terhubung dari website kami"
          ],
          outro: "Penggunaan Senara sepenuhnya menjadi risiko pengguna."
        },
        changes: {
          title: "7. Perubahan Ketentuan",
          body1: "Kami berhak memperbarui syarat dan ketentuan ini kapan saja. Perubahan akan berlaku segera setelah dipublikasikan di halaman ini.",
          body2: "Dengan terus menggunakan layanan setelah perubahan dipublikasikan, kamu dianggap menyetujui ketentuan yang diperbarui."
        },
        contact: {
          title: "8. Hubungi Kami",
          body: "Jika kamu memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi kami:",
          email: "📧 Email: <a href='mailto:fauzan08fauzan@gmail.com' style='color: #d97706;'>fauzan08fauzan@gmail.com</a>"
        }
      }
    },
    pendekatan: {
      title: "Pendekatan & Filosofi",
      subtitle: "Bagaimana kami merancang cerita dan prinsip yang memandu setiap keputusan kreatif.",
      whyTitle: "Kenapa Cerita?",
      whyParagraphs: [
        "Manusia sudah bercerita sejak ribuan tahun lalu. Cerita adalah cara alami kita memahami dunia, berbagi pengalaman, dan menyampaikan nilai-nilai penting dari satu generasi ke generasi berikutnya.",
        "Ketika kita membaca cerita, kita tidak hanya menerima informasi. Kita ikut merasakan apa yang dialami karakter, mempertimbangkan pilihan mereka, dan merefleksikan apa yang akan kita lakukan di situasi serupa.",
        "<strong>Cerita interaktif menambah satu dimensi lagi:</strong> kamu tidak hanya mengikuti perjalanan karakter, tapi juga membuat keputusan yang membentuk jalan cerita. Ini menciptakan pengalaman yang lebih personal dan reflektif."
      ],
      researchNote: "<strong>Catatan:</strong> Kami tidak mengklaim bahwa cerita interaktif adalah metode terbaik untuk semua jenis pembelajaran. Setiap pendekatan punya kelebihan dan keterbatasan. Yang kami yakini adalah bahwa cerita bisa menjadi salah satu cara yang efektif untuk topik-topik yang melibatkan empati, refleksi diri, dan pengambilan keputusan.",
      principlesTitle: "Prinsip Pembelajaran",
      principlesIntro: "Setiap cerita di Senara dirancang dengan beberapa prinsip dasar:",
      principles: [
        { title: "🪞 Refleksi, Bukan Instruksi", body: "Kami tidak memberitahu pembaca apa yang 'benar' atau 'salah'. Cerita kami mengajak pembaca untuk merefleksikan pilihan dan konsekuensinya sendiri." },
        { title: "🌍 Konteks yang Relevan", body: "Cerita berlatar situasi yang dekat dengan kehidupan sehari-hari pembaca Indonesia. Karakter menghadapi dilema yang nyata dan relatable." },
        { title: "🔄 Belajar dari Konsekuensi", body: "Setiap pilihan punya konsekuensi. Pembaca bisa melihat dampak dari keputusan mereka tanpa harus mengalaminya di dunia nyata." },
        { title: "💬 Ruang untuk Diskusi", body: "Cerita kami dirancang untuk memicu percakapan. Guru dan fasilitator bisa menggunakan cerita sebagai titik awal diskusi yang lebih dalam." },
        { title: "🎭 Tidak Ada Ending 'Sempurna'", body: "Kehidupan nyata jarang hitam-putih. Cerita kami menunjukkan bahwa setiap pilihan punya trade-off, dan tidak selalu ada jawaban yang 'benar'." }
      ],
      processTitle: "Proses Pembuatan Cerita",
      processIntro: "Setiap cerita melalui beberapa tahap sebelum dipublikasikan:",
      processSteps: [
        { title: "Riset Topik", body: "Tim mempelajari topik dari berbagai sumber: literatur, wawancara dengan ahli, dan pengalaman nyata dari komunitas." },
        { title: "Pengembangan Karakter & Skenario", body: "Karakter dibuat dengan latar belakang yang jelas. Skenario dirancang agar dilema terasa nyata dan pilihan tidak terlalu mudah ditebak." },
        { title: "Penulisan & Branching", body: "Cerita ditulis dengan mempertimbangkan berbagai jalur. Setiap pilihan harus bermakna dan membawa konsekuensi yang masuk akal." },
        { title: "Review Konten", body: "Cerita direview untuk akurasi informasi, sensitivitas budaya, dan potensi dampak negatif. Untuk topik sensitif, kami berkonsultasi dengan ahli terkait." },
        { title: "Uji Coba & Iterasi", body: "Cerita diuji dengan pembaca awal untuk mendapatkan feedback. Revisi dilakukan berdasarkan masukan sebelum publikasi." }
      ],
      ethicsTitle: "Pedoman Etika",
      ethicsIntro: "Kami sadar bahwa cerita punya kekuatan untuk mempengaruhi cara orang berpikir. Karena itu, kami memegang beberapa pedoman etika:",
      ethicsCommitmentTitle: "Komitmen Kami",
      ethicsList: [
        "Tidak menyebarkan misinformasi atau menyederhanakan topik kompleks secara berlebihan",
        "Memberikan peringatan untuk konten yang berpotensi triggering",
        "Tidak menggantikan layanan profesional (psikolog, konselor, dll)",
        "Menghormati keberagaman latar belakang dan pengalaman pembaca",
        "Transparan tentang keterbatasan kami sebagai platform",
        "Menerima kritik dan terus memperbaiki konten berdasarkan feedback"
      ],
      ethicsOutro: "Untuk topik kesehatan mental, kami selalu menyertakan informasi tentang layanan bantuan profesional. Cerita kami bertujuan meningkatkan literasi dan kesadaran, bukan mendiagnosis atau memberikan terapi.",
      interactiveTitle: "Kenapa Interaktif?",
      interactiveIntro: "Format visual novel interaktif dipilih karena beberapa alasan:",
      interactivePoints: [
        { title: "🧠 Keterlibatan Aktif", body: "Membuat pilihan memaksa pembaca untuk berpikir aktif, bukan hanya menerima informasi secara pasif." },
        { title: "🔁 Eksplorasi Aman", body: "Pembaca bisa mencoba berbagai pilihan dan melihat konsekuensinya tanpa risiko nyata. Ini menciptakan ruang aman untuk bereksperimen." },
        { title: "🎯 Personalisasi", body: "Setiap pembaca punya perjalanan yang sedikit berbeda. Ini membuat pengalaman terasa lebih personal dan relevan." },
        { title: "💭 Refleksi Diri", body: "Ketika pembaca memilih, mereka secara tidak langsung bertanya pada diri sendiri: 'Apa yang akan aku lakukan?' Ini memicu refleksi yang lebih dalam." }
      ],
      limitsTitle: "Keterbatasan",
      limitsIntro: "Kami percaya penting untuk jujur tentang apa yang bisa dan tidak bisa dilakukan oleh platform ini:",
      limitsBullets: [
        "<strong>Senara bukan pengganti pendidikan formal.</strong> Cerita kami adalah pelengkap, bukan pengganti kurikulum atau materi pembelajaran terstruktur.",
        "<strong>Senara bukan layanan kesehatan mental.</strong> Untuk masalah serius, pembaca harus mencari bantuan profesional.",
        "<strong>Cerita kami tidak sempurna.</strong> Kami terus belajar dan memperbaiki. Jika ada konten yang kurang tepat atau berpotensi merugikan, kami sangat terbuka untuk menerima masukan."
      ],
      closingParagraphs: [
        "Kami tidak mengklaim punya semua jawaban. Yang kami punya adalah keyakinan bahwa cerita bisa menjadi jembatan untuk memahami diri sendiri dan orang lain dengan lebih baik.",
        "Terima kasih sudah membaca. Jika kamu punya pertanyaan atau masukan tentang pendekatan kami, jangan ragu untuk menghubungi kami."
      ]
    },
    donation: {
      title: "Transparansi Donasi",
      subtitle: "Kami percaya kamu berhak tahu bagaimana donasimu digunakan.",
      highlight: "100% cerita Senara gratis untuk semua. Donasi membantu kami terus beroperasi, bukan untuk membuat konten eksklusif.",
      whyTitle: "Kenapa Nonprofit?",
      whyParagraphs: [
        "Senara didirikan dengan satu keyakinan: akses ke pengalaman yang bermakna seharusnya tidak dibatasi kemampuan finansial.",
        "Kami tidak punya investor yang menuntut profit. Tidak ada target revenue yang harus dicapai. Ini membebaskan kami untuk fokus pada satu hal: membuat cerita yang benar-benar bermanfaat.",
        "Model nonprofit juga berarti kami tidak perlu menjual data pengguna atau memasang iklan yang mengganggu. Pengalaman membaca tetap bersih dan fokus."
      ],
      usageTitle: "Bagaimana Donasi Digunakan?",
      usageIntro: "Setiap rupiah yang masuk digunakan untuk menjaga Senara tetap berjalan dan berkembang. Berikut rincian biaya operasional kami:",
      costs: {
        art: {
          title: "Ilustrasi & Aset Visual",
          desc: "Membayar ilustrator untuk karakter, background, dan aset visual cerita. Ini adalah biaya terbesar kami karena visual yang baik membuat cerita lebih engaging."
        },
        hosting: {
          title: "Hosting & Domain",
          desc: "Biaya server dan domain agar website tetap online dan bisa diakses dari mana saja."
        },
        honor: {
          title: "Honorarium Kontributor",
          desc: "Apresiasi kecil untuk kontributor yang meluangkan waktu dan keahlian mereka. Tidak wajib, tapi kami ingin menghargai kerja keras mereka."
        },
        tools: {
          title: "Tools & Software",
          desc: "Langganan tools untuk kolaborasi, desain, dan pengembangan platform."
        }
      },
      usageNote: "💡 Kami tidak memiliki kantor fisik atau karyawan tetap. Semua tim bekerja secara remote dan volunteer-based, sehingga biaya operasional bisa ditekan seminimal mungkin.",
      principlesTitle: "Prinsip Kami",
      principles: {
        noExclusive: {
          title: "Tidak Ada Konten Eksklusif",
          desc: "Donatur tidak mendapat akses ke cerita khusus. Semua konten tersedia gratis untuk semua orang."
        },
        noPaywall: {
          title: "Tidak Ada Paywall",
          desc: "Tidak ada fitur yang dikunci di balik pembayaran. Senara tetap gratis sepenuhnya."
        },
        voluntary: {
          title: "Donasi Sukarela",
          desc: "Tidak ada tekanan untuk berdonasi. Jika kamu tidak bisa, tidak masalah. Cukup nikmati ceritanya."
        },
        transparent: {
          title: "Transparan",
          desc: "Kami terbuka tentang bagaimana dana digunakan. Jika ada pertanyaan, silakan hubungi kami."
        }
      },
      gratitudeTitle: "🙏 Terima Kasih",
      gratitudeP1: "Kepada semua yang sudah mendukung Senara, baik lewat donasi, berbagi ke teman, atau sekadar membaca cerita kami: terima kasih.",
      gratitudeP2: "Setiap dukungan, sekecil apapun, membantu kami terus membuat cerita yang bermakna untuk lebih banyak orang.",
      gratitudeCta: "🍰 Dukung via Trakteer"
    },
    accessibility: {
      title: "Aksesibilitas",
      subtitle: "Komitmen kami untuk membuat Senara bisa diakses oleh semua orang.",
      commitmentTitle: "🎯 Komitmen Kami",
      commitmentBody: "Kami percaya bahwa setiap orang berhak mengakses cerita dan pengalaman belajar yang bermakna. Senara terus berupaya meningkatkan aksesibilitas platform agar inklusif untuk semua pengguna, termasuk mereka dengan disabilitas.",
      intro: "Berikut adalah fitur aksesibilitas yang sudah tersedia dan yang sedang kami kembangkan.",
      statuses: {
        available: "✓ Tersedia",
        partial: "⚡ Sebagian",
        planned: "📋 Direncanakan"
      },
      sections: {
        visual: {
          title: "Aksesibilitas Visual",
          features: {
            fontSize: {
              title: "Ukuran Font yang Cukup",
              desc: "Teks di seluruh website menggunakan ukuran minimum 16px agar tetap nyaman dibaca di berbagai perangkat."
            },
            contrast: {
              title: "Kontras Warna",
              desc: "Kami menggunakan kombinasi warna dengan kontras yang cukup antara teks dan background untuk keterbacaan optimal."
            },
            zoom: {
              title: "Zoom Browser",
              desc: "Website mendukung zoom hingga 200% tanpa kehilangan fungsionalitas atau konten. Layout akan menyesuaikan secara responsif."
            },
            darkMode: {
              title: "Mode Gelap",
              desc: "Mode tampilan gelap untuk mengurangi kelelahan mata saat membaca dalam kondisi cahaya rendah."
            }
          }
        },
        navigation: {
          title: "Navigasi & Interaksi",
          features: {
            keyboard: {
              title: "Navigasi Keyboard",
              desc: "Semua elemen interaktif dapat diakses menggunakan keyboard. Gunakan Tab untuk berpindah dan Enter untuk mengaktifkan."
            },
            focus: {
              title: "Focus Indicator",
              desc: "Elemen yang sedang difokuskan ditandai dengan outline yang jelas untuk membantu navigasi pengguna keyboard."
            },
            touch: {
              title: "Touch Target",
              desc: "Tombol dan link memiliki area sentuh minimum 44x44 piksel agar nyaman bagi pengguna dengan keterbatasan motorik."
            },
            animation: {
              title: "Kontrol Animasi",
              desc: "Animasi di website minimal dan tidak mengganggu. Tidak ada animasi yang berkedip cepat."
            }
          }
        },
        screenReader: {
          title: "Screen Reader & Teknologi Bantu",
          features: {
            headings: {
              title: "Struktur Heading",
              desc: "Halaman menggunakan hierarki heading (H1, H2, H3) yang terstruktur dengan baik untuk memudahkan navigasi."
            },
            aria: {
              title: "ARIA Labels",
              desc: "Elemen interaktif dilengkapi label ARIA untuk memberikan konteks kepada pengguna screen reader."
            },
            altText: {
              title: "Alt Text untuk Gambar",
              desc: "Gambar penting dilengkapi teks alternatif yang mendeskripsikan konten visual."
            },
            compatibility: {
              title: "Kompatibilitas Screen Reader",
              desc: "Website diuji dengan screen reader populer seperti NVDA dan VoiceOver untuk memastikan pengalaman yang konsisten."
            }
          }
        },
        vn: {
          title: "Aksesibilitas Visual Novel",
          intro: "Fitur aksesibilitas khusus untuk pengalaman membaca cerita interaktif:",
          features: {
            textSpeed: {
              title: "Kecepatan Teks",
              desc: "Pengaturan kecepatan tampilan teks yang bisa disesuaikan, termasuk opsi untuk menampilkan teks secara instan."
            },
            audio: {
              title: "Kontrol Audio",
              desc: "Volume musik dan efek suara bisa diatur secara terpisah atau dimatikan sepenuhnya."
            },
            saveLoad: {
              title: "Save & Load",
              desc: "Simpan progres kapan saja dan lanjutkan nanti. Tidak perlu menyelesaikan cerita dalam satu sesi."
            },
            log: {
              title: "Log Dialog",
              desc: "Akses riwayat dialog untuk membaca ulang teks yang sudah lewat."
            }
          }
        }
      },
      tipsTitle: "Tips Menggunakan Senara",
      tips: [
        "Gunakan Ctrl/Cmd + untuk memperbesar tampilan jika teks terasa kecil.",
        "Tekan Tab untuk berpindah antar tombol dan link.",
        "Di visual novel, klik atau tekan Enter/Space untuk melanjutkan dialog.",
        "Gunakan menu Settings di visual novel untuk mengatur kecepatan teks dan volume."
      ],
      feedbackTitle: "Bantu Kami Meningkatkan Aksesibilitas",
      feedbackDesc: "Jika kamu mengalami kesulitan mengakses Senara atau punya saran untuk meningkatkan aksesibilitas, kami sangat ingin mendengarnya.",
      feedbackCta: "✉️ Kirim Feedback"
    },
    safety: {
      title: "Keselamatan & Dukungan",
      subtitle: "Panduan untuk menjaga kesejahteraan emosional saat menggunakan Senara.",
      disclaimerTitle: "⚠️ Penting untuk Diketahui",
      disclaimerBody: "<strong>Senara bukan pengganti layanan kesehatan mental profesional.</strong> Cerita kami bertujuan untuk meningkatkan literasi dan kesadaran, bukan untuk mendiagnosis, mengobati, atau memberikan terapi. Jika kamu mengalami masalah kesehatan mental, silakan hubungi profesional.",
      whenHelpTitle: "Kapan Harus Mencari Bantuan",
      whenHelpIntro: "Membaca cerita tentang topik sensitif kadang bisa memicu perasaan yang kuat. Ini normal. Tapi ada saat-saat di mana kamu perlu berbicara dengan seseorang yang terlatih.",
      whenHelpListTitle: "Segera hubungi bantuan profesional jika kamu:",
      whenHelpList: [
        "Memiliki pikiran untuk menyakiti diri sendiri atau orang lain",
        "Merasa sangat tertekan dan tidak bisa mengatasi sendiri",
        "Mengalami perubahan drastis dalam tidur, makan, atau aktivitas sehari-hari",
        "Merasa terisolasi dan tidak punya siapa-siapa untuk diajak bicara",
        "Menggunakan alkohol atau zat lain untuk mengatasi perasaan",
        "Merasa cerita yang kamu baca terlalu berat dan mempengaruhi keseharianmu"
      ],
      whenHelpOutro: "Tidak ada yang salah dengan meminta bantuan. Justru itu adalah tanda kekuatan, bukan kelemahan.",
      hotlinesTitle: "Layanan Bantuan Indonesia",
      hotlinesIntro: "Berikut adalah layanan yang bisa kamu hubungi jika membutuhkan bantuan:",
      hotlines: {
        sejiwa: {
          title: "Sejiwa (Kemenkes RI)",
          desc: "Layanan konseling kesehatan jiwa dari Kementerian Kesehatan. Gratis, 24 jam.",
          contact: "📞 119 ext. 8"
        },
        itl: {
          title: "Into The Light Indonesia",
          desc: "Komunitas pencegahan bunuh diri. Menyediakan informasi dan dukungan.",
          contact: "🌐 intothelightid.org"
        },
        pulih: {
          title: "Yayasan Pulih",
          desc: "Layanan konseling untuk trauma dan kesehatan mental.",
          contact: "📞 (021) 788-42580"
        },
        tepsa: {
          title: "Telepon Pelayanan Sosial Anak (TePSA)",
          desc: "Untuk anak dan remaja yang membutuhkan bantuan. Gratis, 24 jam.",
          contact: "📞 1500-771"
        },
        komnas: {
          title: "Komnas Perempuan",
          desc: "Untuk perempuan yang mengalami kekerasan atau membutuhkan dukungan.",
          contact: "📞 (021) 390-3963"
        }
      },
      safeTipsTitle: "Tips Membaca Cerita Sensitif",
      safeTipsIntro: "Beberapa cerita di Senara membahas topik yang mungkin berat bagi sebagian orang. Berikut tips untuk menjaga kesejahteraan emosionalmu:",
      safeTips: [
        "<strong>Boleh berhenti kapan saja.</strong> Jika cerita terasa terlalu berat, tidak ada kewajiban untuk menyelesaikannya. Kamu bisa pause, istirahat, atau berhenti sama sekali.",
        "<strong>Perhatikan content warning.</strong> Setiap cerita dengan topik sensitif memiliki peringatan di awal. Baca peringatan ini sebelum melanjutkan.",
        "<strong>Siapkan diri sebelum membaca.</strong> Pilih waktu dan tempat yang nyaman. Hindari membaca saat sedang sangat lelah atau emosional.",
        "<strong>Bicara dengan seseorang.</strong> Setelah membaca cerita yang berat, berbagi perasaanmu dengan teman, keluarga, atau orang yang kamu percaya bisa membantu.",
        "<strong>Lakukan grounding.</strong> Jika merasa overwhelmed, coba teknik grounding: tarik napas dalam, perhatikan 5 hal yang bisa kamu lihat, 4 yang bisa disentuh, 3 yang bisa didengar.",
        "<strong>Refleksi dengan menulis.</strong> Journaling setelah membaca bisa membantu memproses perasaan dan pikiran yang muncul."
      ],
      parentsTitle: "Untuk Orang Tua & Pendidik",
      parentsIntro: "Jika kamu adalah orang tua atau pendidik yang ingin menggunakan Senara untuk anak atau siswa:",
      parentsTips: [
        "<strong>Preview cerita terlebih dahulu.</strong> Baca cerita sendiri sebelum merekomendasikan ke anak atau siswa untuk memastikan kesesuaian.",
        "<strong>Dampingi dan diskusikan.</strong> Untuk topik sensitif, sebaiknya dampingi anak saat membaca dan diskusikan bersama setelahnya.",
        "<strong>Perhatikan label usia.</strong> Setiap cerita memiliki rekomendasi usia (misalnya 13+). Gunakan ini sebagai panduan."
      ],
      supportTitle: "Kamu Tidak Sendirian",
      supportBody1: "Apapun yang sedang kamu alami, ada orang-orang yang peduli dan siap membantu. Jangan ragu untuk menjangkau.",
      supportBody2: "Jika kamu merasa ada konten di Senara yang berpotensi berbahaya atau perlu diperbaiki, silakan <a href='kontak.html' style='color: #047857; text-decoration: underline;'>hubungi kami</a>. Kami sangat menghargai masukanmu."
    },
    privacy: {
      title: "Kebijakan Privasi",
      subtitle: "Bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi kamu.",
      lastUpdated: "📅 Terakhir diperbarui: Desember 2025",
      summary: "<strong>Ringkasan:</strong> Kami tidak mengumpulkan data pribadi. Tidak ada login, tidak ada tracking individual. Senara dirancang dengan privasi sebagai prioritas.",
      tocTitle: "Daftar Isi",
      sections: {
        dataCollection: {
          title: "1. Data yang Dikumpulkan",
          intro: "Senara dirancang dengan prinsip <strong>minimal data collection</strong>. Kami tidak meminta kamu untuk:",
          list: [
            "Membuat akun atau login",
            "Memberikan nama, email, atau informasi pribadi lainnya",
            "Mengizinkan akses ke lokasi, kamera, atau mikrofon"
          ],
          outro: "Karena tidak ada sistem akun, kami tidak menyimpan data pribadi apapun di server kami."
        },
        analytics: {
          title: "2. Analytics",
          intro: "Kami menggunakan <strong>Umami Analytics</strong>, sebuah platform analytics yang privacy-focused dan open-source. Umami tidak menggunakan cookies dan tidak melacak pengguna secara individual.",
          collectedTitle: "Data yang dikumpulkan oleh Umami:",
          collectedList: [
            "Halaman yang dikunjungi",
            "Negara asal (berdasarkan IP, tapi IP tidak disimpan)",
            "Jenis perangkat (desktop/mobile)",
            "Browser yang digunakan",
            "Referrer (dari mana pengunjung datang)"
          ],
          note: "Semua data ini bersifat agregat dan anonim. Kami tidak bisa mengidentifikasi pengguna individual dari data ini.",
          whyTitle: "Mengapa kami menggunakan analytics?",
          whyBody: "Untuk memahami cerita mana yang paling diminati, halaman mana yang perlu diperbaiki, dan bagaimana pengguna menemukan Senara. Ini membantu kami membuat keputusan pengembangan yang lebih baik."
        },
        cookies: {
          title: "3. Cookies & Penyimpanan Lokal",
          cookiesTitle: "Cookies",
          cookiesBody: "Senara <strong>tidak menggunakan cookies</strong> untuk tracking. Umami Analytics juga tidak menggunakan cookies.",
          localTitle: "Local Storage",
          localIntro: "Kami menggunakan <strong>Local Storage</strong> browser untuk menyimpan:",
          localList: [
            "Progress cerita yang sedang kamu baca",
            "Pengaturan preferensi (volume, kecepatan teks, dll)",
            "Save game untuk melanjutkan cerita"
          ],
          localNote: "Data ini disimpan <strong>hanya di perangkatmu sendiri</strong>, bukan di server kami. Kamu bisa menghapusnya kapan saja dengan membersihkan data browser."
        },
        thirdParty: {
          title: "4. Layanan Pihak Ketiga",
          intro: "Senara menggunakan beberapa layanan pihak ketiga:",
          list: [
            "<strong>Umami Analytics</strong> - Analytics privacy-focused (tidak ada cookies, tidak ada tracking individual)",
            "<strong>Tailwind CSS CDN</strong> - Untuk styling (tidak mengumpulkan data)",
            "<strong>Google Fonts</strong> - Untuk font (mungkin mengumpulkan data minimal sesuai kebijakan Google)",
            "<strong>Trakteer</strong> - Untuk donasi (jika kamu memilih untuk berdonasi, berlaku kebijakan privasi Trakteer)"
          ],
          outro: "Kami tidak menjual, menyewakan, atau membagikan data pengguna kepada pihak ketiga untuk tujuan komersial."
        },
        security: {
          title: "5. Keamanan Data",
          p1: "Karena kami tidak mengumpulkan data pribadi, risiko kebocoran data sangat minimal. Website kami menggunakan HTTPS untuk mengenkripsi semua komunikasi.",
          p2: "Data yang disimpan di Local Storage browsermu dilindungi oleh keamanan browser itu sendiri dan hanya bisa diakses oleh website Senara."
        },
        children: {
          title: "6. Privasi Anak",
          p1: "Senara dapat digunakan oleh anak-anak dengan pengawasan orang tua. Karena kami tidak mengumpulkan data pribadi, tidak ada risiko pengumpulan data anak secara tidak sengaja.",
          p2: "Setiap cerita memiliki label usia yang jelas. Kami menyarankan orang tua untuk memeriksa kesesuaian konten sebelum mengizinkan anak membaca."
        },
        changes: {
          title: "7. Perubahan Kebijakan",
          p1: "Kami mungkin memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan signifikan akan diumumkan di halaman ini dengan tanggal pembaruan yang jelas.",
          p2: "Jika di masa depan kami memperkenalkan fitur yang memerlukan pengumpulan data (misalnya sistem akun), kami akan memperbarui kebijakan ini dan meminta persetujuan eksplisit dari pengguna."
        },
        contact: {
          title: "8. Hubungi Kami",
          body: "Jika kamu memiliki pertanyaan tentang kebijakan privasi ini atau bagaimana kami menangani data, silakan hubungi kami:",
          email: "📧 Email: <a href='mailto:fauzan08fauzan@gmail.com' style='color: #d97706;'>fauzan08fauzan@gmail.com</a>"
        }
      }
    },
    partner: {
      title: "Untuk Organisasi & Komunitas",
      subtitle: "Bagaimana sekolah, NGO, dan komunitas bisa menggunakan Senara.",
      intro: "Senara dirancang untuk bisa digunakan oleh siapa saja, termasuk organisasi yang ingin menyampaikan pesan penting lewat cerita interaktif. Berikut panduan bagaimana berbagai jenis organisasi bisa memanfaatkan platform kami.",
      audienceTitle: "Siapa yang Bisa Menggunakan?",
      audiences: {
        schools: {
          title: "Sekolah & Universitas",
          body: "Guru BK, dosen, atau unit kemahasiswaan yang ingin menyampaikan materi life skills dengan cara yang lebih engaging.",
          examplesTitle: "Contoh Penggunaan",
          examples: [
            "Materi orientasi mahasiswa baru",
            "Sesi konseling kelompok",
            "Tugas refleksi mata kuliah"
          ]
        },
        ngo: {
          title: "NGO & Yayasan",
          body: "Organisasi yang fokus pada edukasi masyarakat, kesehatan mental, atau pemberdayaan komunitas.",
          examplesTitle: "Contoh Penggunaan",
          examples: [
            "Program literasi kesehatan mental",
            "Kampanye anti-stigma",
            "Materi pelatihan relawan"
          ]
        },
        community: {
          title: "Komunitas & Kelompok",
          body: "Komunitas online/offline, kelompok pemuda, atau organisasi keagamaan yang ingin membahas topik penting.",
          examplesTitle: "Contoh Penggunaan",
          examples: [
            "Ice breaker di pertemuan rutin",
            "Diskusi kelompok tematik",
            "Program KKN atau pengabdian"
          ]
        },
        company: {
          title: "Perusahaan & HR",
          body: "Tim HR atau L&D yang ingin menyampaikan materi wellbeing atau soft skills dengan pendekatan berbeda.",
          examplesTitle: "Contoh Penggunaan",
          examples: [
            "Program employee wellbeing",
            "Onboarding karyawan baru",
            "Workshop soft skills"
          ]
        }
      },
      useCasesTitle: "Cara Penggunaan",
      useCasesIntro: "Berikut beberapa skenario bagaimana organisasi bisa mengintegrasikan Senara:",
      useCases: [
        {
          title: "Baca Bersama di Kelas/Workshop",
          body: "Tampilkan cerita di layar proyektor dan ajak peserta memilih bersama. Setiap pilihan menjadi bahan diskusi. Cocok untuk sesi 30-60 menit.",
          icon: "📱"
        },
        {
          title: "Tugas Mandiri + Refleksi",
          body: "Minta peserta membaca cerita secara mandiri, lalu tulis refleksi tentang pilihan yang mereka buat dan alasannya. Bagus untuk penugasan mingguan.",
          icon: "📝"
        },
        {
          title: "Pre-Workshop Primer",
          body: "Kirim link cerita sebelum workshop sebagai 'pemanasan'. Peserta datang dengan konteks yang sama dan siap untuk diskusi lebih dalam.",
          icon: "🎯"
        },
        {
          title: "Perbandingan Jalur Cerita",
          body: "Bagi peserta jadi kelompok, masing-masing pilih jalur berbeda. Lalu bandingkan ending dan diskusikan kenapa hasilnya berbeda.",
          icon: "🔄"
        },
        {
          title: "Assessment Informal",
          body: "Gunakan quiz dalam cerita sebagai pre/post assessment untuk mengukur pemahaman peserta tentang topik tertentu.",
          icon: "📊"
        }
      ],
      stepsTitle: "Cara Memulai",
      stepsIntro: "Tidak perlu registrasi atau izin khusus. Cukup ikuti langkah berikut:",
      steps: [
        {
          title: "Pilih Cerita",
          body: "Jelajahi koleksi dan pilih cerita yang sesuai dengan topik program kamu."
        },
        {
          title: "Preview Dulu",
          body: "Baca cerita sendiri untuk memastikan kesesuaian dengan audiens."
        },
        {
          title: "Siapkan Diskusi",
          body: "Buat pertanyaan diskusi berdasarkan pilihan-pilihan dalam cerita."
        },
        {
          title: "Jalankan Sesi",
          body: "Bagikan link atau tampilkan di layar. Fasilitasi diskusi setelahnya."
        }
      ],
      benefitsTitle: "Kenapa Menggunakan Senara?",
      benefits: [
        { title: "100% Gratis", body: "Tidak ada biaya lisensi atau langganan", icon: "💰" },
        { title: "Akses Mudah", body: "Cukup browser, tidak perlu install aplikasi", icon: "📱" },
        { title: "Engaging", body: "Format interaktif yang menarik perhatian", icon: "🎯" },
        { title: "Pemicu Diskusi", body: "Pilihan dalam cerita jadi bahan obrolan", icon: "💬" },
        { title: "Aman", body: "Tidak perlu login, tidak ada data yang dikumpulkan", icon: "🔒" },
        { title: "Konteks Lokal", body: "Cerita dengan latar dan karakter Indonesia", icon: "🇮🇩" }
      ],
      storiesTitle: "Cerita yang Cocok untuk Organisasi",
      storiesIntro: "Berikut beberapa cerita yang sering digunakan oleh organisasi:",
      storiesListTitle: "Rekomendasi Cerita",
      storyItems: [
        {
          title: "Pahlawan Kesehatan Mental",
          desc: "Literasi kesehatan mental, mengenali gejala, mengurangi stigma",
          cta: "Lihat Cerita"
        }
      ],
      testimonialQuote: "\"Cerita interaktif membuat peserta lebih terlibat dibanding presentasi biasa. Mereka jadi lebih terbuka untuk diskusi karena sudah 'mengalami' situasinya lewat cerita.\"",
      testimonialCite: "— Fasilitator Workshop Kesehatan Mental",
      ctaTitle: "Tertarik Menggunakan Senara?",
      ctaDesc: "Mulai sekarang atau hubungi kami untuk diskusi lebih lanjut tentang bagaimana Senara bisa mendukung program organisasi kamu.",
      ctaPrimary: "📚 Jelajahi Koleksi",
      ctaSecondary: "✉️ Hubungi Kami"
    },
    home: {
      // Hero
      badge: "🌱 Senara adalah platform nonprofit",
      headline: "Belajar Lewat Cerita Interaktif",
      subheadline: "Kami percaya cerita punya kekuatan untuk mengajarkan hal-hal penting dengan cara yang menyentuh hati. Baca, pilih, dan temukan pelajaran baru di setiap perjalanan.",
      ctaStart: "🎮 Mulai Cerita",
      ctaLearnMore: "Pelajari Lebih Lanjut",
      communityNote: "Dibuat dengan hati oleh komunitas",
      communitySubnote: "untuk pembaca dari seluruh Indonesia",
      vnExplainer: "Apa itu Visual Novel?",
      vnExplainerDesc: "Seperti komik interaktif. Kamu membaca cerita, membuat pilihan, dan setiap keputusan mengubah jalan ceritanya.",
      // What is Senara
      whatTitle: "Apa itu Senara?",
      whatDesc: "Senara adalah platform nonprofit yang mengajakmu menjelajahi berbagai topik lewat cerita interaktif.",
      whatTagline: "Bukan sekadar membaca. Bukan hanya menonton.",
      whatTaglineDesc: "Pengalaman terbaik hadir saat kamu ikut terlibat dalam ceritanya.",
      // How it works
      howTitle: "Bagaimana Cara Kerjanya?",
      howSubtitle: "Tiga langkah mudah untuk mulai belajar lewat cerita.",
      step1Title: "Pilih Cerita",
      step1Desc: "Jelajahi koleksi cerita dengan berbagai topik. Temukan yang paling cocok untukmu.",
      step2Title: "Baca & Tentukan Pilihanmu",
      step2Desc: "Ikuti alur cerita dan buat keputusan. Setiap pilihan membuka arah yang berbeda.",
      step3Title: "Lanjutkan Perjalananmu",
      step3Desc: "Selesaikan cerita dan temukan wawasan baru. Lanjutkan ke cerita lain atau eksplorasi topik yang sama.",
      // Featured
      featuredLabel: "Cerita Pilihan",
      featuredTitle: "Mulai Petualangan Belajarmu",
      featuredSubtitle: "Cerita interaktif yang dipilih komunitas. Setiap pilihan membentuk jalanmu sendiri.",
      seeAll: "Lihat Semua",
      playNow: "Mainkan Sekarang →",
      comingSoon: "Segera Hadir",
      // Categories
      categoriesTitle: "Topik yang Bisa Kamu Pelajari",
      categoriesSubtitle: "Pilih kategori yang sesuai dengan minatmu.",
      // Why VN
      whyTitle: "Kenapa Format Visual Novel?",
      whySubtitle: "Format cerita interaktif yang membuat belajar lebih menyenangkan dan mudah diingat.",
      advantages: "Keunggulan Senara",
      adv1Title: "Cerita Relevan",
      adv1Desc: "Topik yang dekat dengan kehidupan sehari-hari",
      adv2Title: "Gratis Selamanya",
      adv2Desc: "Akses semua cerita tanpa biaya apapun",
      adv3Title: "Belajar Fleksibel",
      adv3Desc: "Mainkan kapan saja, di mana saja",
      ctaExplore: "Jelajahi Cerita",
      // Support
      supportTitle: "❤️ Dukung Senara",
      supportSubtitle: "Senara adalah platform nonprofit yang dibangun oleh komunitas. Setiap dukungan membantu kami terus membuat cerita yang bermakna dan bisa diakses oleh siapa saja.",
      trakteerTitle: "Donasi via Trakteer",
      trakteerDesc: "Dukung pengembangan cerita dan platform Senara.",
      trakteerCta: "Donasi Sekarang",
      partnerTitle: "Untuk Guru & Organisasi",
      partnerDesc: "Gunakan Senara untuk kelas, komunitas, atau workshop.",
      partnerCta: "Ajukan Kemitraan",
      contributeTitle: "Ingin Berkontribusi?",
      contributeDesc: "Bergabung sebagai penulis, ilustrator, editor, atau developer.",
      contributeCta: "Lihat Peluang",
      // About section
      aboutTitle: "Kenali Senara Lebih Dekat",
      aboutSubtitle: "Platform nonprofit yang dibangun oleh tim kecil dengan misi besar.",
      teamLink: "👥 Tim Kami",
      approachLink: "📖 Pendekatan",
      roadmapLink: "🗺️ Peta Jalan",
      orgLink: "🏫 Untuk Organisasi",
      donationLink: "💛 Transparansi Donasi"
    },
    footer: {
      tagline: "Platform cerita interaktif untuk belajar hal-hal penting lewat pengalaman yang bermakna.",
      explore: "Jelajahi",
      home: "Beranda",
      storyCollection: "Koleksi Cerita",
      aboutUs: "Tentang Kami",
      team: "Tim Senara",
      approach: "Pendekatan",
      roadmap: "Peta Jalan",
      support: "Dukungan",
      faq: "FAQ",
      safety: "Keselamatan",
      contactUs: "Hubungi Kami",
      contribute: "Berkontribusi",
      forOrganizations: "Untuk Organisasi",
      supportSenara: "Dukung Senara",
      startReading: "Mulai Membaca",
      startReadingDesc: "Temukan cerita interaktif yang sesuai dengan minatmu.",
      viewCollection: "Lihat Koleksi →",
      nonprofit: "Nonprofit",
      freeForAll: "Gratis untuk semua",
      copyright: "Senara. Dibuat dengan ❤️ di Indonesia.",
      privacy: "Privasi",
      terms: "Syarat",
      accessibility: "Aksesibilitas"
    },
    common: {
      loading: "Memuat...",
      error: "Terjadi kesalahan",
      minutes: "menit",
      stories: "cerita"
    },
    // Collection page
    collection: {
      title: "Koleksi Cerita",
      subtitle: "Temukan cerita yang cocok untukmu. Setiap cerita dirancang untuk menemanimu belajar dengan cara yang terasa personal dan bermakna.",
      searchPlaceholder: "Cari Cerita",
      searchInputPlaceholder: "Ketik judul atau topik...",
      filterToggle: "Filter & Urutkan",
      filterCategory: "Kategori",
      filterDifficulty: "Tingkat Kesulitan",
      filterDuration: "Durasi",
      statusTitle: "Status",
      statusAvailable: "✅ Tersedia",
      statusComingSoon: "🔜 Segera Hadir",
      allCategories: "Semua Kategori",
      allStories: "Semua Cerita",
      allDifficulties: "Semua Tingkat",
      allDurations: "Semua Durasi",
      durationShort: "⚡ Singkat (< 15 menit)",
      durationMedium: "📖 Sedang (15-30 menit)",
      durationLong: "📚 Panjang (> 30 menit)",
      resetFilters: "Reset Filter",
      resetAllFilters: "Reset Semua Filter",
      noResults: "Tidak ada cerita yang cocok dengan filter.",
      found: "Ditemukan",
      storiesFound: "cerita",
      badges: {
        interactive: "Cerita Interaktif",
        quiz: "Quiz & Tantangan",
        playful: "Belajar Sambil Bermain"
      },
      resultsPrefix: "Menampilkan",
      sortLabel: "Urutkan:",
      sortDefault: "Default",
      sortNewest: "🆕 Terbaru",
      sortOldest: "📅 Terlama",
      sortPopular: "🔥 Terpopuler",
      sortRating: "⭐ Rating Tertinggi",
      sortDurationAsc: "⏱️ Durasi: Singkat → Panjang",
      sortDurationDesc: "⏱️ Durasi: Panjang → Singkat",
      sortTitleAsc: "🔤 Judul: A → Z",
      sortTitleDesc: "🔤 Judul: Z → A",
      emptyTitle: "Tidak ada cerita ditemukan",
      emptyDescription: "Coba ubah filter atau kata kunci pencarian untuk menemukan cerita yang kamu cari",
      emptyReset: "Reset Semua Filter",
      keyboardSearch: "Cari",
      keyboardReset: "Reset"
    },
    // Why VN comparison
    whyVN: {
      toggleVN: "Visual Novel",
      togglePDF: "Modul PDF",
      toggleSocmed: "Konten Sosmed",
      toggleYoutube: "Video YouTube",
      // Card 1
      stat1VN: "Lebih bermakna",
      stat1PDF: "Terstruktur",
      stat1Socmed: "Cepat tapi singkat",
      stat1Youtube: "Visual tapi pasif",
      title1VN: "Narasi yang Engaging",
      title1PDF: "Konten Terstruktur",
      title1Socmed: "Konten Bite-sized",
      title1Youtube: "Penjelasan Visual",
      desc1VN: "Cerita yang dekat dengan kehidupan sehari-hari membantu kita memahami dan mengingat pelajaran dengan lebih baik.",
      desc1PDF: "Format standar dengan struktur jelas, mudah diakses dan dibagikan.",
      desc1Socmed: "Tips singkat yang mudah dicerna tapi cepat hilang dari feed.",
      desc1Youtube: "Video menjelaskan konsep dengan visual, tapi jarang interaktif.",
      // Card 2
      stat2VN: "Kamu yang memilih",
      stat2PDF: "Satu arah",
      stat2Socmed: "Interaksi terbatas",
      stat2Youtube: "Bisa di-pause",
      title2VN: "Interaktif & Menyenangkan",
      title2PDF: "Format Pasif",
      title2Socmed: "Engagement Sosial",
      title2Youtube: "Kontrol Penonton",
      desc2VN: "Setiap pilihan yang kamu buat membentuk jalanmu sendiri, seperti kehidupan nyata.",
      desc2PDF: "Konten linear yang konsisten, cocok untuk pembelajaran terstruktur.",
      desc2Socmed: "Interaksi terbatas pada likes, shares, dan comments.",
      desc2Youtube: "Penonton bisa pause & rewind, tapi tidak bisa mempengaruhi alur cerita.",
      // Card 3
      stat3VN: "Terasa personal",
      stat3PDF: "Formal",
      stat3Socmed: "Cepat berlalu",
      stat3Youtube: "Menghibur",
      title3VN: "Koneksi Emosional",
      title3PDF: "Pembelajaran Formal",
      title3Socmed: "Viral & Trending",
      title3Youtube: "Hiburan Bermakna",
      desc3VN: "Ketika kita merasa terhubung dengan karakter dan ceritanya, pelajaran jadi lebih bermakna.",
      desc3PDF: "Pendekatan berbasis konten, ideal untuk pelatihan profesional dan akademik.",
      desc3Socmed: "Konten viral membuat buzz, tapi retensi jangka panjang rendah.",
      desc3Youtube: "Kombinasi audio-visual menciptakan engagement, tapi sering hanya hiburan tanpa pembelajaran mendalam."
    },
    // Testimonials
    testimonials: {
      teacher: {
        quote: "Anak-anak jadi lebih berani berdiskusi. Mereka bilang ceritanya terasa dekat dengan pengalaman mereka.",
        author: "Seorang Guru",
        role: "Pengguna Senara"
      },
      reader: {
        quote: "Belajar lewat cerita terasa lebih santai. Nggak kerasa udah selesai satu chapter!",
        author: "Pembaca",
        role: "Pengguna Senara"
      },
      facilitator: {
        quote: "Format ini membantu peserta lebih terlibat. Diskusi setelahnya jadi lebih hidup.",
        author: "Fasilitator",
        role: "Pengguna Senara"
      }
    },
    // Categories
    categories: {
      "mental-health-wellbeing": "Kesehatan Mental",
      "personal-growth-life-skills": "Pengembangan Diri",
      "health-fitness-lifestyle": "Kesehatan & Gaya Hidup",
      "career-tech-professional": "Karier & Teknologi",
      "relationships": "Hubungan & Relasi",
      "youth-education": "Remaja & Pendidikan",
      "social-issues-humanity": "Isu Sosial & Kemanusiaan",
      "money-financial-literacy": "Keuangan & Literasi",
      "culture-history-folklore": "Budaya & Sejarah",
      "spirituality-self-reflection": "Spiritualitas & Refleksi",
      "digital-life-internet-safety": "Kehidupan Digital"
    },
    // Story card labels
    story: {
      playNow: "Mainkan Sekarang →",
      comingSoon: "Segera Hadir",
      editorsPick: "Editor's Pick",
      minutes: "menit",
      beginner: "Pemula",
      intermediate: "Menengah",
      advanced: "Lanjutan"
    },
    // Story content (titles & descriptions)
    stories: {
      "pahlawan-kesehatan-mental": {
        title: "Pahlawan Kesehatan Mental",
        description: "Temani Vani menghadapi tantangan emosional dan temukan kekuatan sejati dalam menjaga kesehatan mental."
      },
      "jika-maka-maka-jika-debug-hidupku": {
        title: "Jika Maka, Maka Jika ~Debug Hidupku",
        description: "Pelajari dasar-dasar pemrograman: if-else, looping, variabel, dan debugging melalui cerita yang relatable."
      },
      "batik-cahaya-majapahit": {
        title: "Rahasia Batik Cahaya Majapahit",
        description: "Pelajari tentang warisan budaya batik Majapahit dan cara melestarikan tradisi lokal melalui teknologi modern."
      },
      "operasi-hati-sehat": {
        title: "Operasi Hati Sehat di SMA Angkasa",
        description: "Pelajari strategi kesehatan mental dan coping untuk menghadapi tekanan akademik dan kompetisi."
      },
      "misi-nol-sampah": {
        title: "Misi Nol Sampah Pasar Beringharjo",
        description: "Pelajari tentang ekonomi sirkular, negosiasi komunitas, dan cara mengukur dampak lingkungan dari inisiatif sosial."
      },
      "kode-angkasa-lestari": {
        title: "Kode Rahasia Angkasa Lestari",
        description: "Pelajari dasar keamanan siber, etika teknologi, dan cara membuat keputusan yang bertanggung jawab dalam menghadapi dilema teknologi."
      },
      "festival-rasa-maluku": {
        title: "Festival Rasa dari Maluku",
        description: "Pelajari tentang keberagaman kuliner Indonesia, cara memfasilitasi dialog komunitas, dan merancang event yang inklusif."
      },
      "jejak-nadi-kota-hujan": {
        title: "Jejak Nadi Kota Hujan",
        description: "Pelajari tentang urban planning adaptif iklim, analisis data lingkungan, dan cara melibatkan komunitas dalam desain kota."
      },
      "startup-satwa-penjaga-hutan": {
        title: "Startup Satwa Penjaga Hutan",
        description: "Pelajari tentang konservasi lingkungan, kolaborasi dengan komunitas adat, dan merancang model bisnis yang berdampak sosial."
      },
      "panggung-cahaya-pesantren": {
        title: "Panggung Cahaya Pesantren Digital",
        description: "Pelajari tentang literasi media, cara mengenali dan melawan misinformasi, serta menghasilkan konten yang bertanggung jawab."
      }
    },
    about: {
      title: "Cerita di Balik Senara",
      subtitle: "Bagaimana sebuah ide sederhana tumbuh menjadi platform cerita interaktif.",
      originTitle: "Awal Mula",
      originP1: "Senara dimulai dari sebuah frustrasi.",
      originP2: "Kami sering menemukan materi yang isinya bagus, tapi penyampaiannya membuat orang kehilangan minat sebelum selesai membaca. Di sisi lain, orang rela menghabiskan waktu berjam-jam untuk cerita: novel, webtoon, drama.",
      originP3: "Dari situ muncul pertanyaan: <strong>bagaimana kalau pelajaran hidup dikemas dalam cerita yang seru?</strong> Bukan ceramah, bukan modul, tapi pengalaman yang bisa dirasakan.",
      originP4: "Cerita pertama kami dibuat sebagai eksperimen kecil. Ternyata, orang-orang merespons dengan cara yang tidak kami duga. Mereka berdiskusi, berbagi, dan bilang \"ini relate banget.\"",
      problemTitle: "Masalah yang Kami Coba Jawab",
      prob1Title: "Topik penting sering disampaikan dengan cara yang membosankan",
      prob1Desc: "Kesehatan mental, literasi keuangan, berpikir kritis. Semuanya penting, tapi seringkali dikemas dalam format yang sulit dicerna.",
      prob2Title: "Ada gap antara \"tahu\" dan \"paham\"",
      prob2Desc: "Banyak orang tahu teorinya, tapi tidak bisa menerapkan karena tidak pernah \"merasakan\" situasinya. Cerita interaktif membantu menjembatani gap ini.",
      prob3Title: "Konten berkualitas sering tidak gratis",
      prob3Desc: "Kursus online, workshop, buku. Semuanya butuh biaya. Kami percaya akses ke pengalaman yang bermakna seharusnya tidak dibatasi kemampuan finansial.",
      missionTitle: "Misi Kami",
      missionStatement: "Membuat pengalaman bermakna bisa diakses siapa saja, tanpa biaya, tanpa syarat.",
      missionPoint1: "💚 Gratis selamanya",
      missionPoint2: "🤝 Nonprofit",
      missionPoint3: "👥 Berbasis komunitas",
      missionP1: "Senara adalah platform nonprofit. Kami tidak menjual apapun. Semua cerita bisa diakses gratis, sekarang dan selamanya.",
      missionP2: "Bukan freemium, bukan trial. <strong>Gratis</strong>. Tidak ada investor yang menuntut profit, tidak ada target revenue yang harus dicapai. Cerita-cerita di Senara dibuat oleh relawan yang peduli.",
      visionTitle: "Visi Jangka Panjang",
      visionQuote: "Kami bermimpi Senara menjadi perpustakaan cerita bermakna terbesar di Indonesia.",
      visionP1: "Tempat di mana guru bisa menemukan materi yang engaging. Orang tua bisa mengajarkan nilai-nilai penting lewat cerita. Siapa saja bisa belajar dari pengalaman karakter fiksi, sebelum menghadapi situasi serupa di dunia nyata.",
      visionP2: "Kami tahu ini butuh waktu. Tapi setiap cerita baru, setiap pembaca yang tersentuh, adalah langkah ke arah sana.",
      valuesTitle: "Nilai-nilai Kami",
      val1Title: "Tumbuh Bersama",
      val1Desc: "Kami belajar sambil jalan. Tidak sempurna, tapi terus berkembang.",
      val2Title: "Mengutamakan Komunitas",
      val2Desc: "Senara ada karena kontributor. Setiap cerita adalah hasil kolaborasi.",
      val3Title: "Dampak, Bukan Viral",
      val3Desc: "Kami tidak mengejar angka. Kami mengejar perubahan yang bermakna.",
      val4Title: "Sederhana",
      val4Desc: "Cerita yang baik adalah cerita yang bisa dipahami siapa saja.",
      val5Title: "Empati",
      val5Desc: "Kami menulis untuk manusia, bukan algoritma.",
      closingP1: "Senara masih sangat muda. Banyak yang belum sempurna, dan kami terus belajar.",
      closingP2: "Tapi kami percaya: <strong>cerita punya kekuatan untuk mengubah cara orang melihat dunia.</strong> Dan kami ingin terus membuat cerita yang bermakna.",
      closingP3: "Terima kasih sudah menjadi bagian dari perjalanan ini.",
      closingLinks: {
        team: "👥 Kenali Tim Kami",
        approach: "📖 Pendekatan Kami",
        roadmap: "🗺️ Peta Jalan"
      }
    },
    team: {
      title: "Tim Senara",
      subtitle: "Orang-orang di balik cerita yang kamu baca.",
      intro: "Senara dibangun oleh tim kecil yang percaya bahwa cerita punya kekuatan untuk mengajarkan hal-hal penting dengan cara yang menyentuh hati. Kami bukan perusahaan besar, hanya sekelompok orang yang peduli.",
      whyTitle: "Kenapa Kami Membangun Senara?",
      whyP1: "Kami melihat banyak orang di sekitar kami yang kesulitan memahami topik-topik penting dalam hidup: kesehatan mental, literasi digital, keuangan, dan soft skills. Tapi mereka tidak tahu harus mulai dari mana. Informasi yang ada seringkali terasa menggurui, membosankan, atau tidak relevan.",
      whyP2: "Kami percaya ada cara yang lebih baik: <strong>lewat cerita</strong>. Cerita yang membuat kita merasa \"itu aku banget\", yang membuat kita berpikir tanpa merasa diceramahi, dan yang bisa diakses siapa saja tanpa harus bayar.",
      whyP3: "Senara lahir dari keyakinan sederhana: <em>setiap orang berhak belajar tentang hal-hal penting dalam hidup, dengan cara yang manusiawi dan gratis.</em>",
      coreTitle: "Tim Inti",
      roleCEO: "CEO & Co-Founder",
      roleCTO: "CTO & Co-Founder",
      roleCOO: "COO & Co-Founder",
      bioCEO: "Berpengalaman di regulator keuangan dan FMCG multinasional. Co-founder Diceritain (30K+ users). Background psikologi dan product management.",
      bioCTO: "6+ tahun di tech companies across Australia, Singapore, US, dan Jepang. Membangun produk yang digunakan ratusan ribu users.",
      bioCOO: "Mengelola talent development untuk 50K+ karyawan di holding BUMN. Lulusan terbaik fakultas. Background L&D dan corporate learning.",
      viewLinkedIn: "Lihat LinkedIn →",
      valuesTitle: "Nilai yang Kami Pegang",
      val1Title: "Gratis untuk Semua",
      val1Desc: "Tidak ada paywall, tidak ada konten eksklusif",
      val2Title: "Privasi Utama",
      val2Desc: "Tidak mengumpulkan data pribadi",
      val3Title: "Empati dalam Cerita",
      val3Desc: "Topik sensitif ditangani dengan hati-hati",
      val4Title: "Nonprofit",
      val4Desc: "Tidak ada investor, tidak ada tekanan profit",
      advisorTitle: "Pendukung & Penasihat",
      advisorIntro: "Kami berterima kasih kepada para profesional yang memberikan masukan dan dukungan:",
      adv1Title: "Subject Matter Experts",
      adv1Desc: "Review akurasi materi dari berbagai bidang",
      adv2Title: "Guru & Edukator",
      adv2Desc: "Feedback dari perspektif pendidik",
      adv3Title: "Beta Readers",
      adv3Desc: "Pengujian cerita sebelum rilis",
      adv4Title: "Community Feedback",
      adv4Desc: "Masukan dari pembaca dan pengguna",
      contribTitle: "Kontributor",
      contribIntro: "Senara tidak akan ada tanpa bantuan para kontributor yang meluangkan waktu dan keahlian mereka:",
      contribBoxTitle: "Terima kasih kepada semua yang sudah berkontribusi!",
      contribBoxDesc: "Penulis, ilustrator, editor, penguji, dan semua yang membantu mewujudkan cerita-cerita ini.",
      roles: {
        writer: "✍️ Penulis",
        illustrator: "🎨 Ilustrator",
        editor: "📝 Editor",
        tester: "🧪 Penguji",
        translator: "🌐 Penerjemah",
        outreach: "📣 Outreach"
      },
      ctaTitle: "Ingin Bergabung?",
      ctaDesc: "Kami selalu mencari orang-orang yang ingin berkontribusi, baik sebagai penulis, ilustrator, editor, atau dalam peran lainnya.",
      ctaButton: "✨ Lihat Cara Berkontribusi"
    },
    roadmap: {
      title: "Peta Jalan",
      subtitle: "Apa yang sedang kami kerjakan dan rencana ke depan.",
      intro: "Senara terus berkembang. Halaman ini menunjukkan apa yang sedang kami kerjakan, apa yang direncanakan, dan apa yang sudah selesai. Semua bisa berubah berdasarkan feedback dari komunitas.",
      storiesTitle: "Cerita Sedang Dikerjakan",
      storiesIntro: "Cerita-cerita baru yang sedang dalam proses pembuatan:",
      stories: {
        digital: {
          title: "📱 Literasi Digital & Media Sosial",
          desc: "Cerita tentang navigasi dunia digital: mengenali hoax, menjaga privasi online, dan membangun hubungan sehat di media sosial.",
          target: "📅 Target: Q1 2025",
          chapters: "📚 3-4 chapter"
        },
        finance: {
          title: "💰 Literasi Keuangan untuk Pemula",
          desc: "Belajar mengelola uang, menabung, dan membuat keputusan finansial yang bijak lewat cerita karakter yang relatable.",
          target: "📅 Target: Q2 2025",
          chapters: "📚 4-5 chapter"
        },
        communication: {
          title: "🤝 Komunikasi & Resolusi Konflik",
          desc: "Bagaimana berkomunikasi efektif, menyelesaikan konflik, dan membangun hubungan yang sehat dengan orang lain.",
          target: "📅 Target: 2025"
        }
      },
      storiesNote: "💡 Punya ide cerita? <a href='kontak.html' style='color: #d97706; text-decoration: underline;'>Hubungi kami</a> atau <a href='contribute.html' style='color: #d97706; text-decoration: underline;'>bergabung sebagai kontributor</a>.",
      statuses: {
        inProgress: "🔨 Dalam Pengerjaan",
        planned: "📋 Direncanakan",
        exploring: "💭 Eksplorasi"
      },
      featuresTitle: "Fitur Platform",
      featuresIntro: "Pengembangan fitur untuk meningkatkan pengalaman pengguna:",
      features: {
        account: { title: "👤 Sistem Akun", desc: "Login untuk menyimpan progress dan sinkronisasi antar perangkat." },
        stats: { title: "📊 Statistik Belajar", desc: "Lihat cerita yang sudah dibaca, waktu bermain, dan pencapaian." },
        gamification: { title: "🏆 Gamification", desc: "Badge, streak, dan reward untuk memotivasi pembaca." },
        mobile: { title: "📱 Aplikasi Mobile", desc: "Akses Senara lewat aplikasi Android/iOS." },
        multilang: { title: "🌐 Multi-bahasa", desc: "Terjemahan cerita ke bahasa Inggris." },
        offline: { title: "📥 Mode Offline", desc: "Download cerita untuk dibaca tanpa internet." }
      },
      completedTitle: "Baru Selesai",
      completedIntro: "Apa yang sudah kami rilis belakangan ini:",
      completed: {
        story: { title: "Cerita: Pahlawan Kesehatan Mental", desc: "5 chapter tentang literasi kesehatan mental, mengenali gejala, dan mengurangi stigma." },
        redesign: { title: "Redesign Website", desc: "Tampilan baru yang lebih bersih, navigasi yang lebih jelas, dan performa yang lebih baik." },
        collection: { title: "Halaman Koleksi dengan Filter", desc: "Cari cerita berdasarkan kategori, durasi, dan tingkat kesulitan." }
      },
      feedbackTitle: "💬 Bantu Kami Prioritaskan",
      feedbackDesc: "Roadmap ini dibentuk oleh feedback komunitas. Fitur atau cerita mana yang paling kamu butuhkan? Apa yang harus kami kerjakan lebih dulu?",
      feedbackCta: "✉️ Kirim Masukan"
    },
    faq: {
      title: "Pertanyaan Umum",
      subtitle: "Jawaban untuk pertanyaan yang sering ditanyakan tentang Senara.",
      categories: {
        general: "Umum",
        content: "Konten",
        usage: "Penggunaan",
        privacy: "Privasi & Dukungan"
      },
      questions: {
        whatIs: { q: "Apa itu Senara?", a: "Senara adalah platform cerita interaktif berbasis visual novel. Kamu bisa membaca cerita, membuat pilihan, dan setiap keputusan membentuk jalan ceritamu sendiri. Topik cerita kami mencakup kesehatan mental, literasi keuangan, dan berbagai life skills lainnya." },
        forWhom: { q: "Untuk siapa platform ini dibuat?", a: "Senara dibuat untuk siapa saja yang ingin belajar lewat cerita. Kami punya cerita untuk remaja (13+), dewasa muda, hingga umum. Guru dan fasilitator juga bisa menggunakan Senara sebagai bahan diskusi di kelas atau workshop." },
        isFree: { q: "Apakah Senara benar-benar gratis?", a: "Ya, 100% gratis. Bukan freemium, bukan trial. Semua cerita bisa diakses tanpa bayar, sekarang dan selamanya. Senara adalah platform nonprofit yang dibangun oleh komunitas relawan." },
        needAccount: { q: "Apakah saya perlu membuat akun?", a: "Tidak perlu. Kamu bisa langsung membaca cerita tanpa login atau registrasi. Progress ceritamu tersimpan otomatis di browser. Fitur akun mungkin akan hadir di masa depan untuk sinkronisasi antar perangkat." },
        replacePro: { q: "Apakah Senara bisa menggantikan psikolog atau konselor?", a: "Tidak. Senara bukan pengganti layanan kesehatan mental profesional. Cerita kami bertujuan untuk meningkatkan literasi dan kesadaran, bukan untuk mendiagnosis atau mengobati. Jika kamu membutuhkan bantuan profesional, silakan hubungi psikolog atau konselor terdekat." },
        whoMakes: { q: "Siapa yang membuat cerita di Senara?", a: "Cerita dibuat oleh tim relawan dari berbagai latar belakang: penulis, desainer, developer, dan ahli di bidang terkait. Setiap cerita melalui proses review untuk memastikan akurasi dan kualitas konten." },
        safeForTeens: { q: "Apakah konten Senara aman untuk remaja?", a: "Ya. Setiap cerita memiliki label usia yang jelas (misalnya 13+). Kami menghindari konten eksplisit dan selalu memberikan peringatan jika ada topik sensitif. Orang tua dan guru bisa melihat deskripsi cerita sebelum merekomendasikan ke anak atau siswa." },
        forTeachers: { q: "Bagaimana guru bisa menggunakan Senara?", a: "Guru bisa menggunakan cerita Senara sebagai bahan diskusi di kelas, tugas refleksi, atau ice breaker di awal sesi. Cukup pilih cerita yang sesuai dengan topik, lalu ajak siswa membaca bersama atau mandiri. Setelah selesai, diskusikan pilihan dan pelajaran dari cerita tersebut." },
        devices: { q: "Bisa diakses di HP atau hanya di komputer?", a: "Senara bisa diakses di semua perangkat: HP, tablet, atau komputer. Cukup buka browser dan kunjungi website kami. Tidak perlu download aplikasi." },
        privacy: { q: "Bagaimana privasi saya dilindungi?", a: "Kami tidak mengumpulkan data pribadi. Tidak ada login, tidak ada tracking individual. Kami hanya menggunakan analytics anonim untuk memahami cerita mana yang paling diminati. Progress ceritamu tersimpan lokal di browsermu sendiri." },
        support: { q: "Bagaimana cara mendukung Senara?", a: "Ada beberapa cara: (1) Bagikan Senara ke teman atau komunitas, (2) Donasi via <a href='https://trakteer.id/senara.id' target='_blank' rel='noopener'>Trakteer</a> untuk mendukung operasional, atau (3) Bergabung sebagai kontributor jika kamu punya keahlian di bidang penulisan, desain, atau pengembangan." }
      },
      contactTitle: "Masih punya pertanyaan?",
      contactDesc: "Kami senang mendengar dari kamu.",
      contactCta: "Hubungi Kami"
    },
    contribute: {
      title: "Berkontribusi Bersama Senara",
      subtitle: "Bantu kami membuat cerita yang bermakna untuk lebih banyak orang.",
      intro: "Senara dibangun oleh komunitas relawan yang percaya bahwa cerita bisa mengubah cara orang belajar. Kami selalu mencari orang-orang yang ingin berbagi keahlian dan waktu mereka untuk membuat sesuatu yang bermakna.",
      rolesTitle: "Peran yang Dibutuhkan",
      rolesIntro: "Setiap cerita di Senara adalah hasil kolaborasi berbagai keahlian. Berikut peran-peran yang selalu kami cari:",
      roles: {
        writer: { title: "Penulis Cerita", desc: "Menulis naskah cerita interaktif dengan dialog, pilihan, dan berbagai jalur cerita. Kamu akan bekerja sama dengan tim untuk memastikan cerita engaging dan bermakna." },
        artist: { title: "Ilustrator & Desainer", desc: "Membuat karakter, background, dan aset visual untuk cerita. Gaya visual bisa beragam, dari anime-style hingga ilustrasi sederhana." },
        editor: { title: "Editor & Reviewer", desc: "Mereview naskah untuk kejelasan, akurasi informasi, dan sensitivitas konten. Membantu memastikan cerita berkualitas sebelum dipublikasikan." },
        educator: { title: "Konsultan Edukator", desc: "Membantu memvalidasi konten dari sisi substansi. Misalnya, psikolog untuk cerita kesehatan mental, atau ahli keuangan untuk cerita literasi finansial." },
        developer: { title: "Developer", desc: "Membantu pengembangan platform, fitur baru, atau integrasi teknis. Familiar dengan JavaScript dan web development." },
        outreach: { title: "Community & Outreach", desc: "Membantu menyebarkan Senara ke komunitas yang tepat, mengelola media sosial, atau menjalin kerjasama dengan organisasi lain." }
      },
      noExpNote: "💡 <strong>Tidak punya pengalaman?</strong> Tidak masalah. Kami terbuka untuk pemula yang mau belajar. Yang penting adalah semangat dan komitmen untuk berkontribusi.",
      processTitle: "Bagaimana Kolaborasi Berjalan",
      processIntro: "Proses kontribusi di Senara dirancang agar fleksibel dan tidak memberatkan:",
      steps: {
        intro: { title: "Kenalan Dulu", desc: "Hubungi kami via email atau form. Ceritakan sedikit tentang dirimu, keahlian, dan minatmu. Tidak perlu CV formal." },
        matching: { title: "Diskusi & Matching", desc: "Kami akan ngobrol untuk memahami ketersediaan dan preferensimu. Lalu kami carikan proyek atau tim yang cocok." },
        start: { title: "Mulai Berkontribusi", desc: "Kamu akan bergabung dengan tim kecil untuk mengerjakan satu cerita. Komunikasi via grup chat, dengan timeline yang fleksibel." },
        publish: { title: "Review & Publikasi", desc: "Setelah cerita selesai, tim akan mereview bersama. Setelah siap, cerita dipublikasikan dengan kredit untuk semua kontributor." }
      },
      benefitsTitle: "Apa yang Kamu Dapatkan",
      benefitsIntro: "Senara adalah platform nonprofit, jadi kami tidak bisa menawarkan bayaran. Tapi ada hal lain yang bisa kamu dapatkan:",
      benefits: {
        certificate: { title: "Sertifikat", desc: "Sertifikat kontribusi untuk portofolio" },
        community: { title: "Komunitas", desc: "Jaringan dengan kreator dan edukator lain" },
        experience: { title: "Pengalaman", desc: "Belajar proses pembuatan cerita interaktif" },
        credit: { title: "Kredit", desc: "Namamu tercantum di setiap cerita yang kamu bantu buat" },
        mentoring: { title: "Mentoring", desc: "Bimbingan dari kontributor yang lebih berpengalaman" },
        impact: { title: "Dampak", desc: "Karyamu membantu orang belajar hal-hal penting" }
      },
      ctaTitle: "Tertarik Bergabung?",
      ctaDesc: "Kami senang mendengar dari kamu. Ceritakan sedikit tentang dirimu dan bagaimana kamu ingin berkontribusi.",
      ctaForm: "📝 Isi Form Kontributor",
      ctaEmail: "✉️ Kirim Email",
      ctaTeamLink: "Kenali tim di balik Senara →",
      partnerTitle: "🤝 Untuk Organisasi & Kemitraan",
      partnerDesc: "Apakah kamu mewakili sekolah, komunitas, atau organisasi yang ingin berkolaborasi dengan Senara? Kami terbuka untuk berbagai bentuk kerjasama, mulai dari pembuatan cerita khusus hingga program bersama.",
      partnerCta: "Hubungi untuk Kemitraan"
    },
    storyPage: {
      errorTitle: "Cerita tidak ditemukan",
      errorDesc: "Cerita yang kamu cari tidak ditemukan atau sudah tidak tersedia.",
      backToCollection: "← Kembali ke Koleksi",
      backToPath: "← Kembali ke Learning Path",
      stats: {
        minutes: "Menit",
        chapter: "Chapter",
        age: "Usia",
        rating: "Rating"
      },
      saveTip: {
        title: "💡 Kamu bisa simpan progress kapan saja!",
        desc: "Klik <strong>☰ Menu</strong> di pojok kanan bawah → pilih <strong>\"Save\"</strong>. Untuk lanjutkan, pilih <strong>\"Load\"</strong>."
      },
      comingSoon: "🔜 Segera Hadir",
      comingSoonDesc: "Cerita ini sedang dalam pengembangan",
      playNow: "Mainkan Sekarang",
      scrollMore: "Scroll untuk info lebih lanjut",
      aboutStory: "Tentang Cerita Ini",
      learningOutcomes: "Yang Akan Kamu Pelajari",
      credits: "Credits",
      shareStory: "Bagikan Cerita Ini",
      linkCopied: "Link berhasil disalin!",
      pathProgress: "Chapter {order} of {total} • Progress: {completed}/{progressTotal}",
      features: {
        voiceActed: "🎙️ Voice Acted",
        multiplePaths: "🔀 Multiple Paths",
        achievements: "🏆 Achievements"
      }
    }
  },
  en: {
    meta: {
      lang: "en",
      langName: "English",
      langNameNative: "English"
    },
    nav: {
      home: "Home",
      collection: "Stories",
      about: "About",
      approach: "Approach",
      faq: "FAQ",
      donate: "Donate",
      tagline: "Learn through stories"
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
        "When you read a story, you don't just receive information—you feel what the characters feel, weigh their choices, and reflect on what you'd do in their place.",
        "<strong>Interactive stories add another dimension:</strong> you don't just follow a journey—you shape it. That makes the experience more personal and reflective."
      ],
      researchNote: "<strong>Note:</strong> We don't claim interactive stories are the best method for all learning. Every approach has strengths and limits. We believe stories work well for topics involving empathy, reflection, and decision-making.",
      principlesTitle: "Learning Principles",
      principlesIntro: "Every Senara story follows a few key principles:",
      principles: [
        { title: "🪞 Reflection Over Instruction", body: "We don't tell readers what's 'right' or 'wrong'. Stories invite them to reflect on their own choices." },
        { title: "🌍 Relevant Context", body: "Stories mirror real situations in Indonesia. Characters face real dilemmas readers can relate to." },
        { title: "🔄 Learn Through Consequences", body: "Every choice has an impact. Readers can see outcomes without facing those risks in real life." },
        { title: "💬 Conversation Starter", body: "Our stories are built to spark discussion. Teachers and facilitators can use them as a launchpad for deeper conversation." },
        { title: "🎭 No 'Perfect' Ending", body: "Real life isn't binary. Stories show that every decision has trade-offs—and there's rarely a single 'correct' path." }
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
      ethicsOutro: "For mental health topics, we always include info about professional support services. Our stories raise awareness—they don't diagnose or provide therapy.",
      interactiveTitle: "Why Interactive?",
      interactiveIntro: "We chose the visual-novel format for a reason:",
      interactivePoints: [
        { title: "🧠 Active Engagement", body: "Making choices forces readers to think actively, not just consume content." },
        { title: "🔁 Safe Exploration", body: "Readers can try multiple paths and see consequences without real-world risks." },
        { title: "🎯 Personalization", body: "Everyone's journey is slightly different, making it more personal and relevant." },
        { title: "💭 Inner Reflection", body: "Each choice is an inner question: 'What would I do?'—which sparks deep reflection." }
      ],
      limitsTitle: "Limitations",
      limitsIntro: "We're honest about what Senara can and cannot do:",
      limitsBullets: [
        "<strong>Senara isn't a replacement for formal education.</strong> Our stories complement structured learning—they don't replace it.",
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
          outro: "Senara is a <strong>nonprofit</strong> platform. Everything is free—no subscriptions or in-app purchases."
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
      highlight: "100% of Senara stories are free for everyone. Donations keep the platform running—not to lock content behind a paywall.",
      whyTitle: "Why Nonprofit?",
      whyParagraphs: [
        "Senara started with a belief: meaningful experiences shouldn’t depend on someone’s financial situation.",
        "We don’t have investors demanding profit or revenue targets to hit. That freedom lets us focus on what matters—creating stories that genuinely help people.",
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
      gratitudeP1: "To everyone who supports Senara—through donations, sharing, or simply reading—thank you.",
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
      disclaimerBody: "<strong>Senara is not a substitute for professional mental health care.</strong> Our stories aim to raise literacy and awareness—not to diagnose, treat, or provide therapy. If you’re experiencing mental health challenges, please reach out to a professional.",
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
      whenHelpOutro: "Asking for help is a sign of strength—not weakness.",
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
        "<strong>Pause whenever you need.</strong> If a story feels too intense, you don’t have to finish it. Take a break—or stop entirely.",
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
          whyBody: "To understand which stories resonate most, which pages need improvement, and how people discover Senara—so we can build better experiences."
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
      intro: "Senara is designed for anyone—including organizations that want to deliver important messages through interactive stories. Here’s how different groups can leverage our platform.",
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
          body: "Project the story and vote on choices together. Every branch becomes a discussion point—perfect for 30–60 minute sessions.",
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
      stepsIntro: "No registration or special approval needed—just follow these steps:",
      steps: [
        { title: "Choose a Story", body: "Browse the collection and pick a story that fits your program’s topic." },
        { title: "Preview First", body: "Read it yourself to ensure it suits your audience." },
        { title: "Prep the Discussion", body: "Draft discussion prompts based on the story’s choices." },
        { title: "Run the Session", body: "Share the link or present it live, then facilitate the conversation." }
      ],
      benefitsTitle: "Why Use Senara?",
      benefits: [
        { title: "100% Free", body: "No licensing fees or subscriptions", icon: "💰" },
        { title: "Easy Access", body: "Runs in any browser—no app installs", icon: "📱" },
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
      testimonialCite: "— Mental Health Workshop Facilitator",
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
      "mental-health-wellbeing": "Mental Health",
      "personal-growth-life-skills": "Personal Growth",
      "health-fitness-lifestyle": "Health & Lifestyle",
      "career-tech-professional": "Career & Technology",
      "relationships": "Relationships",
      "youth-education": "Youth & Education",
      "social-issues-humanity": "Social Issues & Humanity",
      "money-financial-literacy": "Finance & Literacy",
      "culture-history-folklore": "Culture & History",
      "spirituality-self-reflection": "Spirituality & Reflection",
      "digital-life-internet-safety": "Digital Life"
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
  }
};
