import React, { useState } from 'react';

const MediaPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Berita');

    const tabs = ['Berita', 'Video', 'Figur Inspiratif Lokal', 'Info Grafis'];

    const categories = [
        'Total Semua', 'Citra Bisnis', 'Literasi Keuangan', 'Kewirausahaan', 'Tips and Tricks', 'Inspirasi', 'UMKM', 'Kesehatan', 'Daily Tips', 'ESG',
        'Nasional', 'BRI Info', 'Legalitas', 'Reguler', 'Fotografi', 'Content Creator', 'Disabilitas', 'Ekspor', 'Fashion', 'F&B',
        'Inklusi Keuangan', 'Komunikasi', 'Layanan Customer', 'Layanan Digital', 'Lembaga Usaha', 'Manajemen Operasional',
        'Marketing', 'Pariwisata', 'Pembukuan', 'Perkebunan', 'Pola Pikir', 'Profil Usaha', 'Tanaman Herbal', 'Tanaman Hias',
        'Bina Insan', 'Desa BRILian', 'Entrepeneur', 'Reset Filter'
    ];

    const trendingNews = {
        category: "Trending",
        title: "Cara UMKM Membuat Paket Bundling Tematik...",
        date: "Jumat, 6 Maret 2026 | 09:00 WIB",
        description: "Cara UMKM Membuat Paket Bundling Tematik Hari Raya agar Diminati Konsumen...",
        image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=800"
    };

    const trendingVideo = {
        category: "Trending",
        title: "UMKM di Awal Tahun Pilih Bertahan atau Sia...",
        date: "Kamis, 5 Januari 2026 | 10:00 WIB",
        description: "UMKM di Awal Tahun Pilih Bertahan atau Siap Bertumbuh?",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800"
    };

    const trendingFigur = {
        category: "Trending",
        title: "Sentra Logam Kota Demak",
        date: "Selasa, 17 November 2020 | 12:00 WIB",
        description: "Ershad Salam pria asal Demak pelopor Zem Silver membangun Desa Mijen menjadi sentral industri logam.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
    };

    const trendingInfoGrafis = {
        category: "Trending",
        title: "Desember Ramai, Januari Ketat: Pola Cashflow UMKM",
        date: "Senin, 19 Januari 2026 | 13:00 WIB",
        description: "Pada bulan Desember, peningkatan penjualan biasanya terjadi karena musim liburan, pembelian hadiah, serta agresivitas promosi dari berbagai pelaku usaha.",
        image: "https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=800"
    };

    const newsData = [
        {
            id: 1,
            title: "Hujan Berkepanjangan Menghambat Produksi Beras UMKM Madiun Hingga...",
            date: "Senin, 9 Maret 2026 | 09:00 WIB",
            description: "Hujan Berkepanjangan Menghambat Produksi Beras UMKM Madiun Hingga Menurunkan Kualitas...",
            image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400",
            category: "Berita Selengkapnya"
        },
        {
            id: 2,
            title: "Tips Mengoptimalkan Marketplace saat Event Musiman agar Penjuala...",
            date: "Minggu, 8 Maret 2026 | 09:00 WIB",
            description: "Tips Mengoptimalkan Marketplace saat Event Musiman agar Penjualan UMKM Makin Maksimal...",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400",
            category: "Berita Selengkapnya"
        },
        {
            id: 3,
            title: "Tips Menyusun Target Penjualan Realistis Menjelang Ramadan agar...",
            date: "Sabtu, 7 Maret 2026 | 09:00 WIB",
            description: "Tips Menyusun Target Penjualan Realistis...",
            image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=400",
            category: "Berita Selengkapnya"
        },
        {
            id: 4,
            title: "Cara UMKM Membuat Paket Bundling Tematik Hari Raya agar Diminat...",
            date: "Jumat, 6 Maret 2026 | 09:00 WIB",
            description: "Cara UMKM Membuat Paket Bundling Tematik Hari Raya agar... Diminati Konsumen",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=400",
            category: "Berita Selengkapnya"
        },
        {
            id: 5,
            title: "Tips UMKM Mengelola Tenaga Kerja Tambahan Musiman secara Efektif",
            date: "Jumat, 6 Maret 2026 | 08:30 WIB",
            description: "Tips UMKM Mengelola Tenaga Kerja Tambahan Musiman secara Efektif...",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400",
            category: "Berita Selengkapnya"
        },
        {
            id: 6,
            title: "Strategi UMKM Menghindari Kehabisan Barang Saat Peak Season...",
            date: "Kamis, 5 Maret 2026 | 14:00 WIB",
            description: "Strategi UMKM Menghindari Kehabisan Barang...",
            image: "https://images.unsplash.com/photo-1507206130118-b5907f817162?auto=format&fit=crop&q=80&w=400",
            category: "Berita Selengkapnya"
        },
        {
            id: 7,
            title: "Strategi UMKM Mengantisipasi Lonjakan Permintaan Musiman...",
            date: "Kamis, 5 Maret 2026 | 09:00 WIB",
            description: "Mengantisipasi Lonjakan Permintaan Musiman...",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400",
            category: "Berita Selengkapnya"
        },
        {
            id: 8,
            title: "Tips UMKM Menentukan Produk Khusus Edisi Hari Besar agar Laku di Pasar",
            date: "Rabu, 4 Maret 2026 | 15:00 WIB",
            description: "Tips UMKM Menentukan Produk Khusus Edisi Hari Besar agar Laku di Pasar...",
            image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=400",
            category: "Berita Selengkapnya"
        },
        {
            id: 9,
            title: "Tips UMKM Menyusun Kalender Produksi Menjelang Hari Besar",
            date: "Rabu, 4 Maret 2026 | 09:00 WIB",
            description: "Tips UMKM Menyusun Kalender Produksi Menjelang Hari Besar...",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400",
            category: "Berita Selengkapnya"
        },
        {
            id: 10,
            title: "Pemkot Solo Akan Konsul UMKM di Kawasan Jalan Yos Sudarso Usai...",
            date: "Selasa, 3 Februari 2026 | 14:30 WIB",
            description: "Pemkot Solo Akan Menggelar Konsultasi UMKM di Kawasan...",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400",
            category: "Berita Selengkapnya"
        },
        {
            id: 11,
            title: "Pemkot Solo Siapkan Holding UMKM Coffee Shop untuk Stabilkan...",
            date: "Selasa, 3 Februari 2026 | 09:00 WIB",
            description: "Program holding UMKM Coffee Shop untuk stabilkan...",
            image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=400",
            category: "Berita Selengkapnya"
        },
        {
            id: 12,
            title: "Revisi UU Persaingan Usaha Dinilai Perlu Lebih Kontekstual untuk...",
            date: "Senin, 2 Februari 2026 | 09:00 WIB",
            description: "Revisi UU Persaingan Usaha Dinilai Perlu Lebih Kontekstual untuk...",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400",
            category: "Berita Selengkapnya"
        }
    ];

    const videoData = [
        {
            id: 1,
            title: "Kenapa Bisnis Tiba Tiba Melambat Setelah Euforia Desember",
            date: "Kamis, 30 Januari 2026 | 10:00 WIB",
            description: "Kenapa Bisnis Tiba Tiba Melambat Setelah Euforia Desember?",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
            category: "Nonton Selengkapnya"
        },
        {
            id: 2,
            title: "Kesalahan UMKM di Awal Tahun yang Sering Tak Disadari",
            date: "Senin, 20 Januari 2026 | 10:00 WIB",
            description: "Kesalahan UMKM di Awal Tahun yang Sering Tak Disadari...",
            image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=400",
            category: "Nonton Selengkapnya"
        },
        {
            id: 3,
            title: "UMKM di Awal Tahun Pilih Bertahan atau Siap Bertumbuh",
            date: "Kamis, 5 Januari 2026 | 10:00 WIB",
            description: "UMKM di Awal Tahun Pilih Bertahan atau Siap Bertumbuh?",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
            category: "Nonton Selengkapnya"
        },
        {
            id: 4,
            title: "UMKM dan Strategi Awal Tahun Dampaknya untuk 12 Bulan ke Depan",
            date: "Senin, 30 Desember 2025 | 10:00 WIB",
            description: "UMKM dan Strategi Awal Tahun Dampaknya untuk 12 Bulan ke Depan...",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400",
            category: "Nonton Selengkapnya"
        },
        {
            id: 5,
            title: "Mindset Sukses UMKM 2025 Kenapa Kamu Gak Boleh Takut Mulai",
            date: "Kamis, 23 Desember 2025 | 10:00 WIB",
            description: "Mindset Sukses UMKM 2025 Kenapa Kamu Gak Boleh Takut Mulai...",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400",
            category: "Nonton Selengkapnya"
        },
        {
            id: 6,
            title: "Low Season UMKM Indonesia Realita yang Perlu Dipahami",
            date: "Kamis, 15 Januari 2026 | 10:00 WIB",
            description: "Low Season UMKM Indonesia Realita yang Perlu Dipahami...",
            image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=400",
            category: "Nonton Selengkapnya"
        },
        {
            id: 7,
            title: "Cara Mengatasi Penjualan Turun di Awal Tahun",
            date: "Selasa, 13 Januari 2026 | 10:00 WIB",
            description: "Cara Mengatasi Penjualan Turun di Awal Tahun...",
            image: "https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=400",
            category: "Nonton Selengkapnya"
        },
        {
            id: 8,
            title: "Rahasia Sukses UMKM Cara Prediksi Tren Bisnis 2025",
            date: "Rabu, 11 Januari 2026 | 10:00 WIB",
            description: "Rahasia Sukses UMKM Cara Prediksi Tren Bisnis 2025...",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400",
            category: "Nonton Selengkapnya"
        },
        {
            id: 9,
            title: "Harbolnas 2025 UMKM Desa Meledak UMKM Kota Ketinggalan Jauh",
            date: "Sabtu, 28 November 2025 | 10:00 WIB",
            description: "Harbolnas 2025 UMKM Desa Meledak UMKM Kota Ketinggalan Jauh...",
            image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b7c?auto=format&fit=crop&q=80&w=400",
            category: "Nonton Selengkapnya"
        },
        {
            id: 10,
            title: "Cara Akurat Prediksi Tren 2025 dari Laporan Penjualan Desembermu",
            date: "Senin, 22 Desember 2025 | 10:00 WIB",
            description: "Cara Akurat Prediksi Tren 2025 dari Laporan Penjualan...",
            image: "https://images.unsplash.com/photo-1554224155-672629188e17?auto=format&fit=crop&q=80&w=400",
            category: "Nonton Selengkapnya"
        },
        {
            id: 11,
            title: "Hampers Desember 2025 UMKM ini Cuan Rp100 Juta dalam 2 Minggu",
            date: "Senin, 18 Desember 2025 | 10:00 WIB",
            description: "Hampers Desember 2025 UMKM ini Cuan Rp100 Juta...",
            image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=400",
            category: "Nonton Selengkapnya"
        },
        {
            id: 12,
            title: "Jualan Makanan vs Baju Desember 2025 Mana yang Lebih Cuan?",
            date: "Senin, 15 Desember 2025 | 10:00 WIB",
            description: "Jualan Makanan vs Baju Desember 2025 Mana yang Lebih Cuan?",
            image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&q=80&w=400",
            category: "Nonton Selengkapnya"
        }
    ];

    const figurInspiratifData = [
        {
            id: 1,
            title: "Kerajinan dari Koran Bekas",
            date: "Senin, 14 Maret 2022 | 09:00 WIB",
            description: "Mbak Sukmawati membuat alat pelatihan mendaur ulang sampah koran bekas menjadi barang...",
            image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=400",
            category: "Baca Selengkapnya"
        },
        {
            id: 2,
            title: "Perjuangan Wanita Nelayan Demak",
            date: "Minggu, 28 Februari 2021 | 08:00 WIB",
            description: "Tim Puspita Bahari dipimpin oleh Masnuah Gigih Melakukan Advokasi...",
            image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&q=80&w=400",
            category: "Baca Selengkapnya"
        },
        {
            id: 3,
            title: "Kampung Melon Sukabumi",
            date: "Kamis, 19 November 2020 | 12:00 WIB",
            description: "Cita-cita mulia dari seorang pria bernama Dede Gunawan penggagas Kampung Melon...",
            image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=400",
            category: "Baca Selengkapnya"
        },
        {
            id: 4,
            title: "Youth Generation Do The Farm",
            date: "Kamis, 19 November 2020 | 08:00 WIB",
            description: "Sofyan pemuda 25 tahun asal Desa Koper Kabupaten Semarang yang berhasil...",
            image: "https://images.unsplash.com/photo-1595062584113-500192e0717b?auto=format&fit=crop&q=80&w=400",
            category: "Baca Selengkapnya"
        },
        {
            id: 5,
            title: "Sentra Logam Kota Demak",
            date: "Selasa, 17 November 2020 | 12:00 WIB",
            description: "Ershad Salam pria asal Demak pelopor Zem Silver membangun Desa Mijen...",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
            category: "Baca Selengkapnya"
        },
        {
            id: 6,
            title: "Ragam Potensi Desa Colo",
            date: "Jumat, 13 November 2020 | 11:00 WIB",
            description: "Aneka pelopor Desa Colo, Kabupaten Kudus dalam pengelolaan potensi desa...",
            image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&q=80&w=400",
            category: "Baca Selengkapnya"
        },
        {
            id: 7,
            title: "Paguyuban Tani Sunda Hejo",
            date: "Jumat, 13 November 2020 | 09:00 WIB",
            description: "Hamzah pria asal Garut, pendiri Koperasi Kasik Beureum dan Paguyuban...",
            image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=400",
            category: "Baca Selengkapnya"
        },
        {
            id: 8,
            title: "Kelompok Tani Mekar Jaya",
            date: "Jumat, 13 November 2020 | 07:00 WIB",
            description: "Gandi pemilik Kelompok Tani Mekar Jaya pemersatu para petani di Desa...",
            image: "https://images.unsplash.com/photo-1500382017468-9049fee5c6cf?auto=format&fit=crop&q=80&w=400",
            category: "Baca Selengkapnya"
        }
    ];

    const infoGrafisData = [
        {
            id: 1,
            title: "Biaya Promosi E-Commerce sebagai Investasi Strategis untuk...",
            date: "Senin, 19 Januari 2026 | 13:30 WIB",
            description: "Secara keseluruhan, biaya promosi e-commerce tidak lagi dipandang sebagai pengeluaran...",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
            category: "Baca Selengkapnya"
        },
        {
            id: 2,
            title: "Desember Ramai, Januari Ketat: Pola Cashflow UMKM yang Perlu...",
            date: "Senin, 19 Januari 2026 | 13:00 WIB",
            description: "Pada bulan Desember, peningkatan penjualan dipicu oleh libur hari raya dan akhir tahun...",
            image: "https://images.unsplash.com/photo-1554224155-16974a44853b?auto=format&fit=crop&q=80&w=400",
            category: "Baca Selengkapnya"
        },
        {
            id: 3,
            title: "Pola Perubahan Perilaku Konsumen Indonesia di Awal Tahun dan...",
            date: "Senin, 12 Januari 2026 | 13:00 WIB",
            description: "Penurunan intensitas belanja terjadi karena konsumen mulai merestrukturisasi pengeluaran...",
            image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400",
            category: "Baca Selengkapnya"
        },
        {
            id: 4,
            title: "Low Season Bukan Waktu Menyerah: Strategi UMKM...",
            date: "Senin, 5 Januari 2026 | 13:00 WIB",
            description: "Dari sisi operasional, low season dimanfaatkan sebagai momen evaluasi...",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400",
            category: "Baca Selengkapnya"
        },
        {
            id: 5,
            title: "Mengapa Penjualan UMKM Meledak di Desember? Ini Faktor...",
            date: "Senin, 18 Desember 2025 | 13:00 WIB",
            description: "Salah satu pemicu utama berasal dari dorongan konsumtif menjelang Natal dan Tahun Baru...",
            image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=400",
            category: "Baca Selengkapnya"
        },
        {
            id: 6,
            title: "UMKM Indonesia Jadi Bintang Penjualan Desember 2024 - 2025",
            date: "Senin, 8 Desember 2025 | 13:00 WIB",
            description: "Memasuki Desember 2025, pertumbuhan penjualan UMKM diperkirakan tetap terjaga di...",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400",
            category: "Baca Selengkapnya"
        },
        {
            id: 7,
            title: "Puncak Belanja Desember 2025: UMKM Indonesia Panen Cuan",
            date: "Senin, 1 Desember 2025 | 13:00 WIB",
            description: "Pada awal Desember, sektor kuliner dan makanan diprediksi tumbuh sekitar 15 persen...",
            image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=400",
            category: "Baca Selengkapnya"
        },
        {
            id: 8,
            title: "Pola Konsumsi Produk Lokal sebagai Bentuk Nasionalisme Ekonomi",
            date: "Senin, 24 November 2025 | 13:00 WIB",
            description: "Faktor utama yang memengaruhi loyalitas konsumen adalah efisiensi harga. Sebanyak 70%...",
            image: "https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=400",
            category: "Baca Selengkapnya"
        }
    ];

    const getTabContent = () => {
        switch (activeTab) {
            case 'Video':
                return { trending: trendingVideo, grid: videoData, label: 'Video' };
            case 'Figur Inspiratif Lokal':
                return { trending: trendingFigur, grid: figurInspiratifData, label: 'Figur Inspiratif Lokal' };
            case 'Info Grafis':
                return { trending: trendingInfoGrafis, grid: infoGrafisData, label: 'Info Grafis' };
            default:
                return { trending: trendingNews, grid: newsData, label: 'Berita' };
        }
    };

    const { trending: currentTrending, grid: currentGridData, label: currentLabel } = getTabContent();

    return (
        <div className="bg-white min-h-screen pt-24 pb-20">
            {/* Page Header */}
            <div className="max-w-[1440px] mx-auto px-5 mb-12">
                <h1 className="text-3xl  font-bold text-[#333] text-center mb-10">Media</h1>

                {/* Tabs */}
                <div className="flex justify-start lg:justify-start gap-8 border-b border-gray-100 pb-2 overflow-x-auto whitespace-nowrap hide-scrollbar mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-[15px] font-bold transition-all relative pb-2 ${activeTab === tab ? 'text-[#ff7a00]' : 'text-[#738294] hover:text-[#333]'
                                }`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <div className="absolute bottom-[-2px] left-0 w-full h-[3px] bg-[#ff7a00] rounded-full" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Banner Section */}
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between mb-10 lg:mb-16 gap-6 lg:gap-8">
                    <div className="max-w-2xl text-center lg:text-left">
                        <h2 className="text-xl md:text-[28px] leading-tight  font-bold text-[#0070c0] mb-4">
                            Selamat Datang di Menu Berita LinkUMKM! Dapatkan Informasi Terkini dan Berita Menarik
                            seputar Dunia UMKM, Jadilah yang terdepan dalam dunia UMKM dengan pengetahuan dan
                            informasi terkini dari LinkUMKM.
                        </h2>
                    </div>
                    <div className="w-[80%] sm:w-[60%] lg:w-[400px]">
                        <img
                            src="/media-page/vecctor-media.png"
                            alt="Media Illustration"
                            className="w-full h-auto object-contain rounded-2xl"
                        />
                    </div>
                </div>

                {/* Terkini Section */}
                <div className="mb-16">
                    <h3 className="text-xl font-bold  text-[#333] mb-6">{currentLabel} Terkini</h3>

                    <div className="flex items-center gap-4 relative">
                        <button className="hidden md:flex w-10 h-10 rounded-full bg-white border border-gray-200 items-center justify-center text-gray-400 hover:text-[#0070c0] hover:border-[#0070c0] transition-colors shadow-sm shrink-0">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>

                        <div className="flex-1 bg-[#f8fbff] rounded-2xl p-5 lg:p-8 flex flex-col md:flex-row gap-5 md:gap-8 items-center border border-blue-50 shadow-sm md:shadow-none">
                            <div className="w-full md:w-1/2 aspect-video overflow-hidden rounded-xl relative">
                                <img
                                    src={currentTrending.image}
                                    alt="Trending"
                                    className="w-full h-full object-cover"
                                />
                                {activeTab === 'Video' && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 cursor-pointer hover:scale-110 transition-transform shadow-xl">
                                            <svg className="w-6 h-6 md:w-8 md:h-8 text-white md:ml-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="w-full md:w-1/2 space-y-3 md:space-y-4 text-left">
                                <span className="text-[#ff7a00] font-bold text-[11px] md:text-sm px-3 py-1 bg-[#ff7a00]/10 rounded-full inline-block">Trending</span>
                                <h4 className="text-lg md:text-2xl font-bold  text-[#333] leading-tight hover:text-[#0070c0] cursor-pointer transition-colors">
                                    {currentTrending.title}
                                </h4>
                                <div className="text-[12px] md:text-sm text-gray-500 font-medium">
                                    {currentTrending.date}
                                </div>
                                <p className="text-[13px] md:text-base text-[#55677b] leading-relaxed line-clamp-3 md:line-clamp-none">
                                    {currentTrending.description}
                                </p>
                            </div>
                        </div>

                        <button className="hidden md:flex w-10 h-10 rounded-full bg-white border border-gray-200 items-center justify-center text-gray-400 hover:text-[#0070c0] hover:border-[#0070c0] transition-colors shadow-sm shrink-0">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>

                    <div className="flex justify-center gap-2 mt-6">
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        <div className="w-2 h-2 rounded-full bg-[#0070c0]"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    </div>
                </div>

                {/* Semua Section */}
                <div className="mb-12">
                    <h3 className="text-xl font-bold  text-[#333] mb-6">Semua {currentLabel}</h3>

                    {/* Search and Filters - Only show for Berita and Video based on design */}
                    {(activeTab === 'Berita' || activeTab === 'Video') && (
                        <div className="bg-white border text-left border-gray-200 rounded-[20px] p-6 mb-10 shadow-sm">
                            <div className="relative mb-6">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input
                                    type="text"
                                    className="w-full border border-gray-200 rounded-full pl-12 pr-4 py-3 text-[15px] focus:outline-none focus:border-[#0070c0] transition-colors bg-gray-50/50"
                                    placeholder={`Cari ${currentLabel}`}
                                />
                            </div>

                            <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-2.5">
                                <div className="text-[13px] md:text-sm font-semibold text-gray-500 py-1.5 shrink-0">Cari Berdasarkan :</div>
                                <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-2 md:pb-0 md:flex-wrap w-full">
                                    {categories.map((cat, idx) => (
                                        <button
                                            key={idx}
                                            className={`whitespace-nowrap px-4 py-1.5 rounded-full text-[12px] md:text-[13px] font-medium transition-colors border ${cat === 'Total Semua'
                                                ? 'bg-white border-gray-200 text-[#0070c0]'
                                                : cat === 'Reset Filter'
                                                    ? 'bg-white border-gray-200 text-[#0070c0] flex items-center gap-1.5'
                                                    : 'bg-white border-gray-200 text-[#55677b] hover:border-[#0070c0] hover:text-[#0070c0]'
                                                }`}
                                        >
                                            {cat === 'Reset Filter' && (
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                                            )}
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
                        {currentGridData.map(item => (
                            <div key={item.id} className="bg-white border border-gray-100 rounded-[10px] md:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer md:hover:-translate-y-1">
                                <div className={`w-full ${activeTab === 'Info Grafis' ? 'aspect-[3/4.5]' : 'aspect-square md:aspect-video'} relative overflow-hidden bg-gray-100 shrink-0`}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
                                    />
                                    {activeTab === 'Video' && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 md:group-hover:opacity-100 transition-opacity">
                                            <div className="w-8 h-8 md:w-12 md:h-12 bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 shadow-lg">
                                                <svg className="w-4 h-4 md:w-6 md:h-6 text-white ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="p-2.5 sm:p-3 md:p-5 flex flex-col flex-1 text-left min-w-0">
                                    <h4 className="font-bold  text-[#202E3E] text-[12px] sm:text-[14px] md:text-[16px] leading-[1.3] md:leading-[1.4] mb-1.5 md:mb-3 line-clamp-3 md:line-clamp-2 transition-colors group-hover:text-[#0070c0]">
                                        {item.title}
                                    </h4>
                                    <div className="text-[10px] md:text-[12px] text-[#738294] font-medium mb-1 md:mb-3 truncate">{item.date}</div>
                                    <p className="hidden md:block text-[14px] text-[#55677B] leading-[1.6] mb-5 line-clamp-3 flex-1">
                                        {item.description}
                                    </p>
                                    <div className="mt-auto hidden md:block">
                                        <span className="text-[#0070c0] font-bold text-[11px] md:text-[13px] hover:underline flex items-center gap-1 group-hover:gap-2 transition-all truncate">
                                            {item.category}
                                            <svg className="w-3 h-3 md:w-4 md:h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center mt-12 gap-2">
                        <button className="w-8 h-8 rounded-full bg-[#0070c0]/10 text-[#0070c0] font-bold text-[13px] flex items-center justify-center transition-colors">1</button>
                        <button className="w-8 h-8 rounded-full text-[#738294] hover:bg-gray-100 font-bold text-[13px] flex items-center justify-center transition-colors border border-transparent">2</button>
                        <button className="w-8 h-8 rounded-full text-[#738294] hover:bg-gray-100 font-bold text-[13px] flex items-center justify-center transition-colors border border-transparent">3</button>
                        <span className="text-[#738294]">...</span>
                        <button className="w-8 h-8 rounded-full text-[#738294] hover:bg-gray-100 font-bold text-[13px] flex items-center justify-center transition-colors border border-transparent">17</button>
                        <button className="w-8 h-8 rounded-full text-[#738294] hover:bg-gray-100 font-bold text-[13px] flex items-center justify-center transition-colors border border-transparent">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MediaPage;
