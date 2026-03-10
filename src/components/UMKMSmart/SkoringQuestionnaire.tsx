import { useState } from 'react';

interface Question {
    id: string;
    text: string;
    type: 'single' | 'multiple';
    options: string[];
}

interface Segment {
    id: number;
    title: string;
    illustration: string;
    questions: Question[];
}

const questionnaireData: Segment[] = [
    {
        id: 1,
        title: "I. Skala Usaha",
        illustration: "/umkm-smart-page/skoring/ilustrasi_skala_usaha.png",
        questions: [
            {
                id: "q1_1",
                text: "Berapakah penjualan atau omzet usaha saudara saat ini?",
                type: 'single',
                options: [
                    "Kurang dari Rp100 juta/tahun (setara < Rp300 ribu/hari atau < Rp8,3 juta/bulan)",
                    "Antara Rp100 juta s.d Rp300 juta/tahun (setara Rp8,3 juta s.d Rp25 juta/bulan)",
                    "Antara Rp300 juta s.d Rp1 Milyar/tahun (setara Rp25 juta s.d Rp83,3 juta/bulan)",
                    "Antara Rp1 s.d. 2,5 Milyar/tahun",
                    "Antara Rp2,5 s.d 4,8 Milyar/tahun",
                    "Antara Rp4,8 Milyar s.d Rp50 Milyar/tahun",
                    "Lebih dari Rp50 Milyar/tahun"
                ]
            },
            {
                id: "q1_2",
                text: "Di luar tanah dan bangunan, berapakah nilai aset atau harta usaha saudara?",
                type: 'single',
                options: [
                    "Di bawah atau sama dengan Rp10 juta",
                    "Di atas Rp10 juta s.d Rp50 juta",
                    "Di atas Rp50 juta s.d Rp500 juta",
                    "Di atas Rp500 juta s.d Rp10 Milyar",
                    "Lebih dari Rp50 Milyar"
                ]
            },
            {
                id: "q1_3",
                text: "Jika termasuk diri saudara sendiri, berapa banyak tenaga kerja tetap di usaha saudara?",
                type: 'single',
                options: [
                    "1 Orang",
                    "2-4 orang",
                    "5-10 orang",
                    "11-19 orang",
                    "20-49 orang",
                    "50–99 orang",
                    "100 orang ke atas"
                ]
            }
        ]
    },
    {
        id: 2,
        title: "II. Segmen Kepemimpinan",
        illustration: "/umkm-smart-page/skoring/ilustrasi_kepemimpinan.png",
        questions: [
            {
                id: "q2_1",
                text: "Saya menyiapkan dokumen rencana usaha tertulis dan sesi rapat khusus, untuk menyampaikan visi, arah, dan target yang ingin dicapai kepada seluruh karyawan.",
                type: 'single',
                options: ["Ya", "Tidak"]
            },
            {
                id: "q2_2",
                text: "Saya sudah memiliki tim atau karyawan manajerial yang membantu saya menyusun target, strategi untuk mencapainya, dan membantu saya memastikan seluruh karyawan memahami target-target tersebut.",
                type: 'single',
                options: ["Ya", "Tidak"]
            },
            {
                id: "q2_3",
                text: "Saya menyediakan kesempatan bagi karyawan untuk memberikan masukan terhadap rencana atau target usaha, baik secara tertulis maupun sesi diskusi yang diagendakan secara khusus dimana karyawan bebas menyampaikan masukannya.",
                type: 'single',
                options: ["Ya", "Tidak"]
            }
        ]
    },
    {
        id: 3,
        title: "III. Segmen Budaya Inovasi",
        illustration: "/umkm-smart-page/skoring/ilustrasi_budaya_inovasi.png",
        questions: [
            {
                id: "q3_1",
                text: "Kepuasan konsumen dan pelanggan sangat penting untuk kelanggengan usaha saya, sehingga minimal 1 kali per tahun, saya mengadakan kegiatan khusus untuk mengumpulkan masukan konsumen (review produk, wawancara, atau survei).",
                type: 'single',
                options: ["Ya", "Ya, Sebagian", "Tidak"]
            },
            {
                id: "q3_2",
                text: "Untuk membantu mengambil keputusan strategis, minimal setahun sekali saya memonitor data tren pasar terbaru dan evaluasi perubahan selera konsumen (memantau tren e-commerce, laporan tren, atau bertanya langsung).",
                type: 'single',
                options: ["Ya", "Ya, Sebagian", "Tidak"]
            }
        ]
    },
    {
        id: 4,
        title: "IV. Manajemen Pemasaran",
        illustration: "/umkm-smart-page/skoring/ilustrasi_pemasaran.png",
        questions: [
            {
                id: "q4_1",
                text: "Saat ini bisnis saya sudah menjangkau konsumen dari berbagai provinsi di Indonesia, bahkan sudah juga menjangkau konsumen luar negeri.",
                type: 'single',
                options: [
                    "Tidak, masih di satu provinsi yang sama",
                    "Ya, lintas provinsi tapi masih nasional",
                    "Ya, lintas provinsi dan pasar global"
                ]
            },
            {
                id: "q4_2",
                text: "Di era digital ini, saya melakukan pemasaran online untuk memperluas pasar dan memudahkan transaksi: (Anda bisa memilih lebih dari 1 jawaban)",
                type: 'multiple',
                options: [
                    "Menggunakan media sosial (Facebook, Twitter, Instagram, dll)",
                    "Menggunakan platform e-commerce (Bukalapak, Tokopedia, Go-food, website sendiri, dll)",
                    "Menggunakan pembayaran elektronik/digital selain transfer ATM (Mobile banking, GoPAY, OVO, LinkAja, DANA, dll)",
                    "Belum melakukan upaya khusus apa pun"
                ]
            },
            {
                id: "q4_3",
                text: "Untuk memperkuat pemasaran, saya menyiapkan ragam perlengkapan pemasaran (kop surat, kartu nama, brosur, katalog produk, company profile).",
                type: 'single',
                options: ["Ya", "Ya, Sebagian", "Belum menyiapkan sama sekali"]
            },
            {
                id: "q4_4",
                text: "Untuk memperluas jaringan usaha, saya aktif merancang paket harga khusus/komisi untuk kemitraan (reseller, distributor, dropshipper, agen, afiliator, atau waralaba).",
                type: 'single',
                options: ["Ya", "Ya, Sebagian", "Tidak"]
            },
            {
                id: "q4_5",
                text: "Saya selalu menetapkan target penjualan yang meningkat setiap tahun dan mengalokasikan anggaran untuk promosi (iklan, cetak brosur, komisi, hadiah).",
                type: 'single',
                options: ["Ya", "Ya, Sebagian", "Tidak"]
            }
        ]
    },
    {
        id: 5,
        title: "V. Manajemen Operasional",
        illustration: "/umkm-smart-page/skoring/ilustrasi_operasional.png",
        questions: [
            {
                id: "q5_1",
                text: "Untuk memastikan proses produksi/pelayanan berjalan baik dan sesuai standar kualitas, saya melakukan hal berikut: (Anda bisa memilih lebih dari 1 jawaban)",
                type: 'multiple',
                options: [
                    "Membuat prosedur tertulis untuk proses produksi dan kegiatan langsung dengan konsumen",
                    "Melakukan pemeriksaan rutin mengenai prosedur yang dilaksanakan",
                    "Adanya sertifikasi mutu seperti SNI, Halal, dll",
                    "Belum melakukan apapun"
                ]
            }
        ]
    },
    {
        id: 6,
        title: "VI. Manajemen Keuangan",
        illustration: "/umkm-smart-page/skoring/ilustrasi_keuangan.png",
        questions: [
            {
                id: "q6_1",
                text: "Saya sudah memiliki rekening untuk transaksi usaha yang terpisah dengan rekening untuk keperluan pribadi (rumah tangga).",
                type: 'single',
                options: ["Ya", "Tidak"]
            },
            {
                id: "q6_2",
                text: "Usaha saya telah memiliki Laporan Keuangan lengkap (Laba Rugi, Neraca, Arus Kas) yang disusun minimal 1 kali per tahun sebagai dasar evaluasi.",
                type: 'single',
                options: ["Ya", "Ya, Sebagian", "Tidak"]
            }
        ]
    },
    {
        id: 7,
        title: "VII. Manajemen SDM",
        illustration: "/umkm-smart-page/skoring/ilustrasi_sdm.png",
        questions: [
            {
                id: "q7_1",
                text: "Bisnis saya sudah memiliki tim dengan peran dan pembagian tugas yang jelas, tertulis, dan dituangkan dalam dokumen struktur organisasi.",
                type: 'single',
                options: ["Ya", "Tidak"]
            },
            {
                id: "q7_2",
                text: "Setiap tahun saya pro-aktif menyusun rencana dan melakukan pelatihan bagi diri saya, karyawan, and mitra bisnis.",
                type: 'single',
                options: [
                    "Ya, pelatihan tahunan untuk saya, tim, dan mitra",
                    "Ya, tapi baru sebagian (misalnya untuk diri saya sendiri dulu)",
                    "Tidak, belum secara khusus merencanakan pelatihan setiap tahunnya"
                ]
            },
            {
                id: "q7_3",
                text: "Perusahaan sudah memiliki skema bonus untuk tim atau karyawan, yang berbasis capaian kinerja dengan indikator yang jelas.",
                type: 'single',
                options: ["Ya", "Tidak"]
            },
            {
                id: "q7_4",
                text: "Usaha saya sudah memiliki program orientasi, pelatihan, atau sistem pembinaan karyawan baru.",
                type: 'single',
                options: ["Ya", "Tidak"]
            }
        ]
    },
    {
        id: 8,
        title: "VIII. Legalitas dan Kepatuhan",
        illustration: "/umkm-smart-page/skoring/ilustrasi_legalitas.png",
        questions: [
            {
                id: "q8_1",
                text: "Usaha saya sudah memiliki legalitas berikut: (Anda bisa memilih lebih dari 1 jawaban)",
                type: 'multiple',
                options: [
                    "Nomor Induk Berusaha (NIB) dari OSS Republik Indonesia",
                    "Badan Usaha formal seperti CV, PT, atau Koperasi",
                    "Izin operasional atau Sertifikasi resmi yang sesuai (Halal, BPOM, Organik, SNI, dll)",
                    "Belum memiliki dokumen legalitas apa pun"
                ]
            },
            {
                id: "q8_2",
                text: "Saya telah melakukan upaya pemenuhan kewajiban berikut: (Anda bisa memilih lebih dari 1 jawaban)",
                type: 'multiple',
                options: [
                    "NPWP atas nama badan usaha",
                    "BPJS Kesehatan untuk karyawan",
                    "BPJS Ketenagakerjaan untuk karyawan",
                    "Memiliki Prosedur Keselamatan Kerja tertulis dan menjalankannya",
                    "Belum menjalankan apapun"
                ]
            }
        ]
    },
    {
        id: 9,
        title: "IX. Kepedulian Sosial dan Lingkungan",
        illustration: "/umkm-smart-page/skoring/ilustrasi_sosial_lingkungan.png",
        questions: [
            {
                id: "q9_1",
                text: "Usaha saya telah melakukan langkah tanggung jawab dan peduli lingkungan/sosial, diantaranya: (Anda bisa memilih lebih dari 1 jawaban)",
                type: 'multiple',
                options: [
                    "Memastikan agar karyawan tetap digaji sesuai peraturan Upah Minimum setempat",
                    "Memiliki prosedur khusus untuk menghemat penggunaan air dan listrik",
                    "Memiliki target pengurangan limbah (plastik, organik, kertas, dll)",
                    "Memiliki program pengolahan kembali limbah bisnis (sendiri atau bermitra)",
                    "Memberi program bantuan sosial tahunan untuk kelompok masyarakat tertentu",
                    "Memiliki program pelatihan untuk meningkatkan keterampilan masyarakat sekitar",
                    "Belum melakukan upaya tertentu"
                ]
            }
        ]
    },
    {
        id: 10,
        title: "X. Pemahaman Industri & Pasar",
        illustration: "/umkm-smart-page/skoring/ilustrasi_pemahaman_pasar.png",
        questions: [
            {
                id: "q10_1",
                text: "Saya selalu memantau perkembangan kompetitor (produk/layanan mereka dan diferensiasi produk saya).",
                type: 'single',
                options: ["Ya, saya lakukan semuanya", "Ya, tapi baru sebagian", "Belum melakukan pemetaan persaingan sama sekali"]
            },
            {
                id: "q10_2",
                text: "Saya memantau keunggulan dan kelemahan produk sejenis di pasaran, dengan cara: (Anda bisa memilih lebih dari 1 jawaban)",
                type: 'multiple',
                options: [
                    "Tahu nama-nama atau merek produk sejenis yang ada di pasaran",
                    "Melakukan perbandingan (harga, kualitas, distribusi, kemasan, dll)",
                    "Tahu persis lokasi atau segmen pasar yang masih bisa saya masuki (Blue Ocean)",
                    "Belum melakukan upaya khusus apa pun"
                ]
            }
        ]
    },
    {
        id: 11,
        title: "XI. Manajemen Rantai Pasok",
        illustration: "/umkm-smart-page/skoring/ilustrasi_rantai_pasok.png",
        questions: [
            {
                id: "q11_1",
                text: "Usaha saya memiliki prosedur pencatatan persediaan bahan baku/alat secara berkala, memiliki lebih dari satu supplier, dan kontrak pengadaan.",
                type: 'single',
                options: ["Ya", "Ya, tapi baru sebagian", "Belum ada prosedur khusus sama sekali"]
            },
            {
                id: "q11_2",
                text: "Usaha saya memiliki prosedur inventarisasi aset dan tim khusus yang memonitor perawatan, perbaikan, atau pembelian alat baru.",
                type: 'single',
                options: ["Ya", "Ya, tapi baru sebagian", "Belum ada prosedur atau tim khusus sama sekali"]
            },
            {
                id: "q11_3",
                text: "Saya sudah membangun pondasi cadangan kas dan relasi pendanaan: (Anda bisa memilih lebih dari 1 jawaban)",
                type: 'multiple',
                options: [
                    "Saldo cadangan kas usaha saat ini > total biaya operasional untuk 6 bulan",
                    "Ada teman/saudara yang bersedia mendukung dana talangan",
                    "Sudah ada rekam jejak positif/relasi baik di Bank",
                    "Sudah ada rekam jejak positif/relasi baik di Lembaga Keuangan Non-Bank (Koperasi, Leasing, Pegadaian)",
                    "Tabungan pribadi siaga mendukung dana talangan/pengembangan",
                    "Belum memiliki pondasi atau relasi apapun"
                ]
            },
            {
                id: "q11_4",
                text: "Usaha saya didukung dengan fasilitas atau peralatan IT berikut: (Anda bisa memilih lebih dari 1 jawaban)",
                type: 'multiple',
                options: [
                    "Akses internet yang handal (24 jam)",
                    "HP pintar khusus untuk bisnis",
                    "Laptop/Komputer kerja",
                    "Tablet kerja",
                    "Belum memiliki semua hal di atas"
                ]
            }
        ]
    }
];

const SkoringQuestionnaire = ({ onFinish }: { onFinish: () => void }) => {
    const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, any>>({});

    const currentSegment = questionnaireData[currentSegmentIndex];
    const progress = ((currentSegmentIndex + 1) / questionnaireData.length) * 100;

    const handleSingleSelect = (questionId: string, option: string) => {
        setAnswers(prev => ({ ...prev, [questionId]: option }));
    };

    const handleMultipleSelect = (questionId: string, option: string) => {
        const currentAnswers = answers[questionId] || [];
        if (currentAnswers.includes(option)) {
            setAnswers(prev => ({
                ...prev,
                [questionId]: currentAnswers.filter((a: string) => a !== option)
            }));
        } else {
            setAnswers(prev => ({
                ...prev,
                [questionId]: [...currentAnswers, option]
            }));
        }
    };

    const handleNext = () => {
        if (currentSegmentIndex < questionnaireData.length - 1) {
            setCurrentSegmentIndex(prev => prev + 1);
            window.scrollTo(0, 0);
        } else {
            onFinish();
        }
    };

    const handleBack = () => {
        if (currentSegmentIndex > 0) {
            setCurrentSegmentIndex(prev => prev - 1);
            window.scrollTo(0, 0);
        }
    };

    return (
        <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
            {/* Progress Header */}
            <div className="mb-10">
                <div className="flex justify-between items-end mb-3">
                    <div>
                        <span className="text-[#0070c0] font-bold text-sm tracking-widest uppercase">Kuesioner Skoring</span>
                        <h2 className="text-2xl font-bold text-gray-800 mt-1">{currentSegment.title}</h2>
                    </div>
                    <span className="text-sm font-bold text-gray-400">
                        Sesi {currentSegmentIndex + 1} dari {questionnaireData.length}
                    </span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[#ff7a00] transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 items-start">
                {/* Illustration Area - Sticky on Desktop */}
                <div className="w-full lg:w-4/12 group lg:sticky lg:top-36 self-start">
                    <div className="bg-[#f0f9ff] rounded-[32px] p-8 aspect-square flex items-center justify-center relative overflow-hidden border border-blue-50">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
                        <img
                            key={currentSegment.illustration}
                            src={currentSegment.illustration}
                            alt={currentSegment.title}
                            className="w-full h-auto object-contain relative z-10 transition-all duration-700 group-hover:scale-105 animate-[fadeIn_0.6s_ease-out]"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://placehold.co/400x400/e0f2fe/0070c0?text=Segmen+' + currentSegment.id;
                            }}
                        />
                    </div>
                    <div className="mt-6 p-5 bg-orange-50/50 rounded-2xl border border-orange-100/50">
                        <p className="text-xs text-orange-700 font-medium leading-relaxed italic">
                            * Mohon isi pertanyaan dengan sejujur-jujurnya agar kami dapat memberikan rekomendasi yang paling tepat untuk bisnis Anda.
                        </p>
                    </div>
                </div>

                {/* Questions Area */}
                <div className="w-full lg:w-8/12 space-y-8">
                    {currentSegment.questions.map((q, idx) => (
                        <div key={q.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 150}ms` }}>
                            <h3 className="text-[17px] font-bold text-gray-800 mb-5 leading-relaxed">
                                {idx + 1}. {q.text}
                            </h3>
                            <div className="grid gap-3">
                                {q.options.map((option, optIdx) => {
                                    const isSelected = q.type === 'single'
                                        ? answers[q.id] === option
                                        : (answers[q.id] || []).includes(option);

                                    return (
                                        <button
                                            key={optIdx}
                                            onClick={() => q.type === 'single' ? handleSingleSelect(q.id, option) : handleMultipleSelect(q.id, option)}
                                            className={`group flex items-center text-left p-4 rounded-xl border-2 transition-all duration-200 ${isSelected
                                                ? 'border-[#0070c0] bg-blue-50/50 shadow-sm'
                                                : 'border-gray-100 hover:border-gray-300 bg-white'
                                                }`}
                                        >
                                            <div className={`w-5 h-5 shrink-0 rounded-full border-2 mr-4 flex items-center justify-center transition-colors ${isSelected ? 'border-[#0070c0] bg-[#0070c0]' : 'border-gray-300'
                                                }`}>
                                                {isSelected && (
                                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                                )}
                                            </div>
                                            <span className={`text-[14px] font-medium transition-colors ${isSelected ? 'text-[#0070c0]' : 'text-gray-600'
                                                }`}>
                                                {option}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between pt-10 border-t border-gray-100">
                        <button
                            onClick={handleBack}
                            disabled={currentSegmentIndex === 0}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${currentSegmentIndex === 0
                                ? 'text-gray-300 cursor-not-allowed'
                                : 'text-gray-500 hover:bg-gray-100'
                                }`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                            Kembali
                        </button>

                        <button
                            onClick={handleNext}
                            className="bg-[#ff7a00] hover:bg-[#e66e00] text-white px-10 py-3.5 rounded-xl font-bold text-sm shadow-[0_10px_20px_rgba(255,122,0,0.2)] transition-all active:scale-95 flex items-center gap-2"
                        >
                            {currentSegmentIndex === questionnaireData.length - 1 ? 'Selesaikan Skoring' : 'Lanjutkan'}
                            {currentSegmentIndex !== questionnaireData.length - 1 && (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkoringQuestionnaire;
