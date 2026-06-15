/**
 * Chapter 2: Investasi untuk Pemula
 *
 * Learning Outcomes:
 * - Understand what investing is and why it matters
 * - Learn basic investment types (stocks, mutual funds, deposits, gold)
 * - Understand risk vs return relationship
 * - Learn the importance of diversification
 * - Recognize common investment mistakes and scams
 * - Start investing with small amounts
 *
 * Duration: ~15 minutes
 * Scenes: 18 scenes
 */

/* global monogatari */

const Chapter2 = {
  "Scene-21": [
    "show scene scene-1",
    "play music music-2 with loop fade 20 volume 10",
    "s {{player.name}}! Kita ketemu lagi!",
    "s Di chapter terakhir, aku udah belajar cara ngatur uang: budgeting 50/30/20, bedain kebutuhan dan keinginan, dan nabung.",
    "s Tapi sekarang aku punya pertanyaan baru: uang yang udah aku tabung... harus diapain? Cuma didiemin di rekening? Ada cara yang lebih baik nggak?",
    "s Jawabannya: INVESTASI. Dan aku mau ngajak kamu belajar bareng!",
    "jump Scene-22",
  ],

  "Scene-22": [
    "show scene scene-2",
    "s Sebelumnya, aku mau tanya dulu.",
    {
      Choice: {
        Dialog: "Menurut kamu, apa itu investasi?",
        A: {
          Text: "Menaruh uang di bank dan dapat bunga",
          Do: "jump Scene-22-A",
        },
        B: {
          Text: "Membeli sesuatu yang nilainya naik dari waktu ke waktu",
          Do: "jump Scene-22-Benar",
        },
        C: {
          Text: "Main saham buat cepat kaya",
          Do: "jump Scene-22-C",
        },
      },
    },
  ],

  "Scene-22-A": [
    "show scene scene-3",
    "s Itu nggak salah, tapi belum lengkap. Menaruh uang di bank itu nabung, bukan investasi.",
    "s Bedanya: nabung itu menyimpan uang, investasi itu MENANAM uang supaya bertumbuh.",
    "s Tabungan di bank bunganya kecil, sekitar 1-3% per tahun. Sementara inflasi (kenaikan harga) rata-rata 3-5% per tahun.",
    "s Artinya: uang yang cuma disimpan di bank nilainya terus turun karena harga-harga naik.",
    "jump Scene-23",
  ],

  "Scene-22-Benar": [
    "play sound clap with volume 50",
    "show scene scene-4-benar",
    "s Tepat banget! Investasi itu membeli sesuatu yang diharapkan nilainya naik dari waktu ke waktu.",
    "s Bisa berupa saham, obligasi, emas, reksadana, properti, atau bahkan pendidikan.",
    "s Tujuannya: supaya uangmu bekerja untukmu, bukan cuma didiemin di rekening.",
    "jump Scene-23",
  ],

  "Scene-22-C": [
    "show scene scene-5",
    "s Hmm, saham memang salah satu jenis investasi. Tapi investasi itu lebih luas dari main saham.",
    "s Dan yang paling penting: investasi BUKAN cara cepat kaya. Kalau ada yang nawarin investasi pasti untung besar dalam waktu singkat... itu SCAM.",
    "s Investasi yang benar itu pelan-pelan, konsisten, dan jangka panjang.",
    "jump Scene-23",
  ],

  "Scene-23": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-6",
    "s Nah, sekarang aku mau kenalin beberapa jenis investasi yang cocok buat pemula.",
    "s Jenis pertama: DEPOSITO. Ini paling aman. Uangmu disimpan di bank dengan bunga yang lebih tinggi dari tabungan biasa.",
    "s Tapi kekurangannya: uangmu nggak bisa diambil sebelum jatuh tempo. Dan bunganya masih kalah sama inflasi.",
    "s Jenis kedua: REKSADANA. Ini kayak patungan sama orang lain. Uangmu dikumpulin sama uang orang lain, lalu dikelola oleh manajer investasi.",
    "s Ada beberapa jenis reksadana: pasar uang (paling aman), pendapatan tetap (risiko sedang), campuran, dan saham (paling berisiko tapi potensi untung paling besar).",
    "jump Scene-24",
  ],

  "Scene-24": [
    "show scene scene-7",
    "s Jenis ketiga: SAHAM. Ini kamu beli sebagian kecil dari perusahaan. Kalau perusahaan untung, kamu dapat dividen. Kalau harga saham naik, kamu bisa jual dengan untung.",
    "s Tapi ingat: harga saham juga bisa turun. Jadi ada risiko rugi.",
    "s Jenis keempat: EMAS. Emas itu tahan inflasi. Harga emas cenderung naik dalam jangka panjang.",
    "s Kamu bisa beli emas fisik (perhiasan, batangan) atau emas digital lewat aplikasi.",
    "s Nah, dari keempat jenis itu, mana yang menurutmu paling cocok buat pemula?",
    {
      Choice: {
        Dialog: "Jenis investasi mana yang paling cocok untuk pemula?",
        A: {
          Text: "Saham, karena potensi untung paling besar",
          Do: "jump Scene-24-Salah",
        },
        B: {
          Text: "Reksadana pasar uang, karena aman dan mudah",
          Do: "jump Scene-24-Benar",
        },
        C: {
          Text: "Emas, karena nilainya selalu naik",
          Do: "jump Scene-24-Salah",
        },
      },
    },
  ],

  "Scene-24-Benar": [
    "play sound clap with volume 50",
    "show scene scene-8",
    "s Betul! Reksadana pasar uang itu paling cocok buat pemula.",
    "s Alasannya: risikonya paling rendah, bisa mulai dari Rp 10.000, dan uangnya bisa dicairkan kapan aja.",
    "s Kamu bisa beli lewat aplikasi investasi yang udah terdaftar OJK (Otoritas Jasa Keuangan).",
    "jump Scene-25",
  ],

  "Scene-24-Salah": [
    "play sound wrong with volume 50",
    "show scene scene-9",
    "s Hmm, sebenarnya yang paling cocok buat pemula adalah reksadana pasar uang.",
    "s Saham terlalu berisiko buat pemula. Emas nggak selalu naik, ada kalanya turun juga.",
    "s Reksadana pasar uang: aman, bisa mulai dari Rp 10.000, dan uangnya bisa dicairkan kapan aja. Cocok buat belajar.",
    "jump Scene-25",
  ],

  "Scene-25": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-10",
    "s Sekarang, konsep paling penting dalam investasi: RISK vs RETURN.",
    "s Ini prinsip dasar: makin tinggi potensi untung, makin tinggi risiko ruginya.",
    "s Deposito: bunga kecil, tapi hampir nggak ada risiko. Saham: potensi untung besar, tapi harga bisa naik-turun drastis.",
    "s Nggak ada investasi yang PASTI untung besar tanpa risiko. Kalau ada yang nawarin kayak gitu, itu pasti penipuan.",
    "jump Scene-26",
  ],

  "Scene-26": [
    "show scene scene-11",
    "s Nah, sekarang pertanyaan penting.",
    {
      Choice: {
        Dialog: "Temanku nawarin investasi dengan janji pasti untung 20% per bulan. Gimana responsmu?",
        A: {
          Text: "Wah, mantap! Aku ikut!",
          Do: "jump Scene-26-Salah",
        },
        B: {
          Text: "Itu kemungkinan besar scam, hati-hati",
          Do: "jump Scene-26-Benar",
        },
        C: {
          Text: "Coba dulu sedikit aja",
          Do: "jump Scene-26-Salah",
        },
      },
    },
  ],

  "Scene-26-Benar": [
    "play sound clap with volume 50",
    "show scene scene-12-benar",
    "s Bener banget! Janji pasti untung 20% per bulan itu TIDAK MUNGKIN dari investasi legal.",
    "s Buat perbandingan: investor terbaik dunia, Warren Buffett, rata-rata dapat 20% per TAHUN. Itu pun nggak pasti setiap tahun.",
    "s Kalau ada yang janji 20% per bulan, hampir pasti itu skema ponzi atau money game. Ujung-ujungnya pasti kolaps dan kamu rugi.",
    "jump Scene-27",
  ],

  "Scene-26-Salah": [
    "play sound wrong with volume 50",
    "show scene scene-13",
    "s Hati-hati! Janji pasti untung 20% per bulan itu TIDAK MUNGKIN dari investasi legal.",
    "s Itu ciri khas skema ponzi: uang dari investor baru dipake buat bayar investor lama. Kelihatan untung, tapi sebentar lagi pasti kolaps.",
    "s Ingat: kalau kedengerannya terlalu bagus buat jadi kenyataan, kemungkinan besar emang nggak bener.",
    "jump Scene-27",
  ],

  "Scene-27": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-14",
    "s Oke, sekarang konsep penting lainnya: DIVERSIFIKASI.",
    "s Artinya: jangan taruh semua uangmu di satu tempat. Sebarkan ke beberapa jenis investasi.",
    "s Kenapa? Kalau salah satu rugi, yang lain masih bisa nolong. Kayak pepatah: jangan taruh semua telur dalam satu keranjang.",
    "s Contoh diversifikasi sederhana: 50% reksadana, 30% emas, 20% deposito. Kalau saham turun, emas dan deposito masih aman.",
    "jump Scene-28",
  ],

  "Scene-28": [
    "show scene scene-15",
    "s Nah, aku mau cerita pengalaman pribadi. Sebulan yang lalu, aku mulai investasi pertamaku.",
    "s Aku download aplikasi investasi yang terdaftar OJK. Aku mulai dengan Rp 50.000 aja di reksadana pasar uang.",
    "s Rasanya? Nggak beda jauh dari nabung biasa. Tapi yang bikin beda: uangku mulai bertumbuh. Pelan, tapi pasti.",
    "s Dan yang paling penting: aku jadi lebih peduli sama keuanganku. Karena sekarang aku punya tujuan yang jelas.",
    {
      Choice: {
        Dialog: "Kalau kamu mau mulai investasi, berapa minimum yang kamu siapkan?",
        A: {
          Text: "Rp 10.000 aja dulu",
          Do: "jump Scene-28-Benar",
        },
        B: {
          Text: "Rp 1.000.000 biar berasa",
          Do: "jump Scene-28-B",
        },
        C: {
          Text: "Nggak punya uang buat investasi",
          Do: "jump Scene-28-C",
        },
      },
    },
  ],

  "Scene-28-Benar": [
    "play sound clap with volume 50",
    "show scene scene-16",
    "s Mantap! Rp 10.000 udah cukup buat mulai. Yang penting bukan jumlahnya, tapi kebiasaannya.",
    "s Mulai dari kecil, belajar sambil jalan. Kalau udah paham, baru tambahin sedikit-sedikit.",
    "jump Scene-29",
  ],

  "Scene-28-B": [
    "show scene scene-17",
    "s Rp 1.000.000 oke juga! Tapi pastikan itu uang yang kamu siap kehilangan, bukan uang kebutuhan pokok.",
    "s Ingat: investasi pakai uang dingin. Bukan uang kos, bukan uang makan.",
    "jump Scene-29",
  ],

  "Scene-28-C": [
    "show scene scene-18",
    "s Hmm, kalau belum punya uang sama sekali, fokus dulu ke nabung. Minimal bangun dana darurat 3x pengeluaran bulanan.",
    "s Setelah dana darurat terkumpul, baru mulai investasi. Nggak harus besar, Rp 10.000 aja udah cukup.",
    "s Yang penting: punya kebiasaan menabung dulu, baru investasi.",
    "jump Scene-29",
  ],

  "Scene-29": [
    "stop sound clap",
    "stop sound wrong",
    "show scene scene-sit-right",
    "s {{player.name}}, kita udah sampai di akhir Chapter 2!",
    "s Hari ini kita udah belajar tentang:",
    "s 1. Apa itu investasi dan kenapa penting",
    "s 2. Jenis investasi: deposito, reksadana, saham, emas",
    "s 3. Risk vs return — makin tinggi untung, makin tinggi risiko",
    "s 4. Diversifikasi — jangan taruh semua telur di satu keranjang",
    "s 5. Waspada investasi bodong — kalau terlalu bagus, kemungkinan scam",
    "s 6. Mulai dari kecil, yang penting konsisten",
    "s Sampai ketemu di chapter selanjutnya, {{player.name}}! Remember: investasi terbaik adalah yang dimulai hari ini!",
  ],
};

window.Chapter2 = Chapter2;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Chapter2;
}
