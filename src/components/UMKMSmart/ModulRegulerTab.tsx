import React, { useState, useRef } from 'react';
import ModuleJourneyPath from './ModuleJourneyPath';

const ModuleCard = ({ module, locked = false, onSelect }: { module: any, locked?: boolean, onSelect?: (module: any) => void }) => {
    return (
        <div
            onClick={() => !locked && onSelect && onSelect(module)}
            className={`bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.06)] flex flex-col overflow-hidden min-w-[240px] w-[240px] md:min-w-[280px] md:w-[280px] shrink-0 snap-start h-[360px] md:h-[400px] ${locked ? 'pointer-events-none' : 'cursor-pointer group/card'} border-x border-b border-gray-100/50`}>
            {/* Top section (Solid Color Background with large text) */}
            <div className={`${module.bg} relative p-4 md:p-5 flex flex-col justify-center items-center h-[160px] md:h-[200px] overflow-hidden`}>

                {/* Category Badge - Top Right */}
                {module.category && (
                    <div className="absolute top-4 right-4 bg-[#f8f9fa]/90 backdrop-blur-sm text-[#0070c0] text-[10px] font-bold px-3 py-1.5 rounded-sm shadow-sm uppercase tracking-wider z-20">
                        {module.category.toUpperCase()}
                    </div>
                )}

                {/* Large Title centered in the color block (matching reference) */}
                <h4 className="text-white font-bold text-[18px] md:text-[22px] leading-tight z-10 w-full text-left mt-6 md:mt-8">
                    {module.title}
                </h4>
            </div>

            {/* Bottom Section (Details) */}
            <div className="p-5 flex flex-col flex-1 justify-between bg-white pl-4">
                <div>
                    <h4 className="text-[15px] font-bold text-[#333] mb-3 line-clamp-2 leading-snug group-hover/card:text-[#ff7a00] transition-colors">
                        {module.title}
                    </h4>
                    <span className="inline-block text-[9px] text-[#333] font-medium bg-[#f5f5f5] px-2 py-1 rounded-sm uppercase tracking-widest mb-4">
                        {module.category}
                    </span>
                </div>

                <div className="mt-auto">
                    <div className="text-[12px] text-gray-500 font-medium mb-1.5">
                        09 Juli 2025 | 18:43 WIB
                    </div>
                    <div className="flex items-center text-[13px] text-gray-500 font-medium pt-1 border-t border-gray-100">
                        <span className="text-gray-700 font-bold mr-1.5">4.9</span>
                        <svg className="w-4 h-4 text-yellow-400 mr-2 -mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-gray-300 mx-1.5 leading-none">|</span>
                        <span className="text-gray-600 font-medium text-[12px]">17 Reviews</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ModulRegulerTab = ({ onModuleSelect }: { onModuleSelect?: (module: any) => void }) => {
    // Mode View: 'list' or 'journey'
    const [viewMode, setViewMode] = useState<'list' | 'journey'>('list');

    // Dummy Data
    const recommendedModules = [
        { id: 1, title: 'Dari Chat Jadi Cuan, Maksimalkan WhatsApp Untuk Tingkatkan Jualan', category: 'Manajemen Keuangan', lessons: 5, bg: 'bg-[#55B5E6]', type: 'Video Edukasi' },
        { id: 2, title: 'Bangun Profil Usaha dan Reputasi Kredit Sebelum Ajukan Pembiayaan', category: 'Manajemen Keuangan', lessons: 15, bg: 'bg-[#55B5E6]', type: 'Video Edukasi' },
        { id: 3, title: 'Analisis Laporan Keuangan dan Pengambilan Keputusan', category: 'Manajemen Keuangan', lessons: 15, bg: 'bg-[#55B5E6]', type: 'Video Edukasi' },
        { id: 4, title: 'Laporan Keuangan Lanjutan 02', category: 'Manajemen Keuangan', lessons: 15, bg: 'bg-[#55B5E6]', type: 'Video Edukasi' },
        { id: 101, title: 'Dari Chat Jadi Cuan, Maksimalkan WhatsApp Untuk Tingkatkan Jualan', category: 'Manajemen Pemasaran', lessons: 5, bg: 'bg-[#55B5E6]', type: 'Video Edukasi' },
        { id: 102, title: 'Bangun Profil Usaha dan Reputasi Kredit Sebelum Ajukan Pembiayaan', category: 'Manajemen Pemasaran', lessons: 15, bg: 'bg-[#55B5E6]', type: 'Video Edukasi' },
        { id: 103, title: 'Analisis Laporan Keuangan dan Pengambilan Keputusan', category: 'Manajemen Pemasaran', lessons: 15, bg: 'bg-[#55B5E6]', type: 'Video Edukasi' },
        { id: 104, title: 'Laporan Keuangan Lanjutan 02', category: 'Manajemen Pemasaran', lessons: 15, bg: 'bg-[#55B5E6]', type: 'Video Edukasi' },
    ];

    const accordionData = [
        {
            title: 'Tradisional',
            level: 'Level 1',
            modules: [
                { id: 5, title: 'Biar Jadi Cuan, Maksimalkan WhatsApp Untuk Jualan', category: 'Manajemen Pemasaran', lessons: 5, bg: 'bg-[#55B5E6]', type: 'Video Edukasi' },
                { id: 6, title: 'Bangun Profil Usaha dan Reputasi Kredit Sebelum Ajukan...', category: 'Manajemen Pemasaran', lessons: 15, bg: 'bg-[#55B5E6]', type: 'Video Edukasi' },
                { id: 7, title: 'Analisis Laporan Keuangan dan Pengambilan Keputusan...', category: 'Manajemen Keuangan', lessons: 15, bg: 'bg-[#55B5E6]', type: 'Video Edukasi' },
                { id: 8, title: 'Laporan Keuangan Lanjutan 02', category: 'Manajemen Keuangan', lessons: 15, bg: 'bg-[#55B5E6]', type: 'Video Edukasi' },
                { id: 105, title: 'Biar Jadi Cuan, Maksimalkan WhatsApp Untuk Jualan', category: 'Manajemen Pemasaran', lessons: 5, bg: 'bg-[#55B5E6]', type: 'Video Edukasi' },
                { id: 106, title: 'Bangun Profil Usaha dan Reputasi Kredit Sebelum Ajukan...', category: 'Manajemen Pemasaran', lessons: 15, bg: 'bg-[#55B5E6]', type: 'Video Edukasi' },
                { id: 107, title: 'Analisis Laporan Keuangan dan Pengambilan Keputusan...', category: 'Manajemen Keuangan', lessons: 15, bg: 'bg-[#55B5E6]', type: 'Video Edukasi' },
                { id: 108, title: 'Laporan Keuangan Lanjutan 02', category: 'Manajemen Keuangan', lessons: 15, bg: 'bg-[#55B5E6]', type: 'Video Edukasi' },
            ]
        },
        {
            title: 'Tradisional Utama',
            level: 'Level 2',
            modules: [
                { id: 91, title: 'Membuat SOP 2', category: 'Manajemen Operasional', lessons: 16, bg: 'bg-[#3182CE]', type: 'Video Pelatihan' },
                { id: 92, title: 'Membuat SOP 2', category: 'Manajemen Operasional', lessons: 15, bg: 'bg-[#3182CE]', type: 'Video Pelatihan' },
                { id: 93, title: 'Membuat SOP 01', category: 'Manajemen Operasional', lessons: 14, bg: 'bg-[#3182CE]', type: 'Video Pelatihan' },
                { id: 94, title: 'Pengenalan Standar Mutu dan Kontrol Kualitas 02', category: 'Manajemen Operasional', lessons: 10, bg: 'bg-[#3182CE]', type: 'Video Pelatihan' },
                { id: 191, title: 'Membuat SOP 2', category: 'Manajemen Operasional', lessons: 16, bg: 'bg-[#3182CE]', type: 'Video Pelatihan' },
                { id: 192, title: 'Membuat SOP 2', category: 'Manajemen Operasional', lessons: 15, bg: 'bg-[#3182CE]', type: 'Video Pelatihan' },
                { id: 193, title: 'Membuat SOP 01', category: 'Manajemen Operasional', lessons: 14, bg: 'bg-[#3182CE]', type: 'Video Pelatihan' },
                { id: 194, title: 'Pengenalan Standar Mutu dan Kontrol Kualitas 02', category: 'Manajemen Operasional', lessons: 10, bg: 'bg-[#3182CE]', type: 'Video Pelatihan' },
            ]
        },
        {
            title: 'Tradisional Teladan',
            level: 'Level 3',
            modules: [
                { id: 9, title: 'Membuat SOP 2', category: 'Manajemen Keuangan', lessons: 16, bg: 'bg-[#3182CE]', type: 'Video Pelatihan' },
                { id: 10, title: 'Membuat SOP 1', category: 'Manajemen Keuangan', lessons: 15, bg: 'bg-[#3182CE]', type: 'Video Pelatihan' },
                { id: 11, title: 'Analisis Profil Risiko', category: 'Manajemen Keuangan', lessons: 14, bg: 'bg-[#3182CE]', type: 'Video Pelatihan' },
                { id: 12, title: 'Pengenalan Jurnal Dasar', category: 'Manajemen Keuangan', lessons: 10, bg: 'bg-[#3182CE]', type: 'Video Pelatihan' },
                { id: 109, title: 'Membuat SOP 2', category: 'Manajemen Keuangan', lessons: 16, bg: 'bg-[#3182CE]', type: 'Video Pelatihan' },
                { id: 110, title: 'Membuat SOP 1', category: 'Manajemen Keuangan', lessons: 15, bg: 'bg-[#3182CE]', type: 'Video Pelatihan' },
                { id: 111, title: 'Analisis Profil Risiko', category: 'Manajemen Keuangan', lessons: 14, bg: 'bg-[#3182CE]', type: 'Video Pelatihan' },
                { id: 112, title: 'Pengenalan Jurnal Dasar', category: 'Manajemen Keuangan', lessons: 10, bg: 'bg-[#3182CE]', type: 'Video Pelatihan' },
            ]
        },
        {
            title: 'Berkembang',
            level: 'Level 3',
            modules: [],
            locked: true
        },
        {
            title: 'Berkembang Utama',
            level: 'Level 4',
            modules: [],
            locked: true
        },
        {
            title: 'Berkembang Teladan',
            level: 'Level 5',
            modules: [],
            locked: true
        },
        {
            title: 'Modern',
            level: 'Level 6',
            modules: [],
            locked: true
        },
        {
            title: 'Modern Teladan',
            level: 'Level 7',
            modules: [],
            locked: true
        }
    ];

    // State for Search and Filter
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Semua');

    // Refs for scrolling
    const recommendedScrollRef = useRef<HTMLDivElement>(null);
    const accordionScrollRefs = useRef<(HTMLDivElement | null)[]>([]);

    const scrollCarousel = (ref: React.RefObject<HTMLDivElement> | HTMLDivElement | null, direction: 'left' | 'right') => {
        if (!ref) return;
        const targetElement = 'current' in ref ? ref.current : ref;
        if (targetElement) {
            const scrollAmount = 300; // approximate width of one card + gap
            targetElement.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="w-full relative">
            {/* View Mode Toggle Header */}
            <div className="flex justify-center md:justify-end mb-8 md:mb-10 sticky top-[120px] md:top-[140px] z-30 pointer-events-none">
                <div className="bg-white/95 backdrop-blur-sm border border-gray-100 shadow-lg p-1 rounded-2xl flex gap-1 pointer-events-auto">
                    <button
                        onClick={() => setViewMode('list')}
                        className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 rounded-[12px] md:rounded-[14px] text-[12px] md:text-[13px] font-bold transition-all ${viewMode === 'list'
                            ? 'bg-[#0070c0] text-white shadow-lg'
                            : 'text-gray-500 hover:bg-gray-50'
                            }`}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                        Katalog
                    </button>
                    <button
                        onClick={() => setViewMode('journey')}
                        className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 rounded-[12px] md:rounded-[14px] text-[12px] md:text-[13px] font-bold transition-all ${viewMode === 'journey'
                            ? 'bg-[#ff7a00] text-white shadow-lg'
                            : 'text-gray-500 hover:bg-gray-50'
                            }`}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
                        Journey
                    </button>
                </div>
            </div>

            {viewMode === 'list' ? (
                <>
                    {/* Header Section */}
                    <div className="mb-8 md:mb-10 px-1">
                        <h2 className="text-lg md:text-xl font-bold  text-[#333] mb-3">Apa itu Modul Reguler?</h2>
                        <p className="text-sm md:text-md text-gray-600 leading-relaxed max-w-[1440px]">
                            Program pemberdayaan UMKM melalui digitalisasi pelatihan dengan modul yang mengacu pada 11 aspek parameter usaha UMKM yaitu Skala Usaha, Aspek Kepemimpinan, Pola Pikir, Budaya Inovasi, Pemasaran, Operasional, Keuangan, Sumber Daya Manusia, Legalitas dan Kepatuhan, Kepedulian Sosial dan Lingkungan, Pemahaman Pasar dan Industri, dan Manajemen Rantai Pasok.                </p>
                    </div>

                    {/* Rekomendasi Modul Section */}
                    <div className="mb-14">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 px-1">
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-[#333] mb-1">Rekomendasi Modul Untuk Anda</h3>
                                <p className="text-sm md:text-md text-gray-500">
                                    Berdasarkan level <span className="text-[#0070c0] font-semibold hover:underline cursor-pointer">Tradisional Teladan</span> & titik kelemahan Anda
                                </p>
                            </div>
                            <button className="text-[11px] md:text-[12px] text-[#0070c0] font-semibold hover:bg-blue-50 border border-[#0070c0] px-4 py-1.5 rounded-lg flex items-center gap-1 transition-colors bg-white">
                                Lihat Semua Modul
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>

                        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 mb-4">
                            <button className="px-5 py-2 bg-[#dcf1fb] text-[#138ece] text-[13px] font-bold rounded-lg whitespace-nowrap">Semua</button>
                            <button className="px-5 py-2 bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 text-[13px] font-medium rounded-lg whitespace-nowrap transition-colors">Kepemimpinan</button>
                            <button className="px-5 py-2 bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 text-[13px] font-medium rounded-lg whitespace-nowrap transition-colors">Manajemen Keuangan</button>
                        </div>

                        <div className="relative group">
                            {/* Prev Arrow Overlay */}
                            <div className="absolute top-[40%] left-2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={() => scrollCarousel(recommendedScrollRef, 'left')}
                                    className="bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md backdrop-blur-sm pointer-events-auto"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                </button>
                            </div>
                            {/* Next Arrow Overlay */}
                            <div className="absolute top-[40%] right-2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={() => scrollCarousel(recommendedScrollRef, 'right')}
                                    className="bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md backdrop-blur-sm pointer-events-auto"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </button>
                            </div>
                            <div className="flex gap-4 overflow-x-auto pb-4 relative snap-x snap-mandatory no-scrollbar" ref={recommendedScrollRef}>
                                {recommendedModules.map(module => (
                                    <ModuleCard key={`rec-${module.id}`} module={module} onSelect={onModuleSelect} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <hr className="border-gray-200 my-10" />

                    {/* Performance Belajar Anda Section */}
                    <div className="mb-14">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-[#333] mb-1">Performance Belajar Anda</h3>
                            <p className="text-md text-gray-500">Ayo terus tingkatkan performa belajar kamu</p>
                        </div>

                        <div className="bg-[#fdfdfd] border border-gray-100/80 rounded-2xl p-5 md:p-6 shadow-sm">
                            <div className="flex justify-between items-center pb-4 border-b border-gray-200/60">
                                <span className="text-[13px] md:text-[14px] text-gray-500 font-semibold tracking-wide">Level UMKM Anda</span>
                                <span className="text-[13px] md:text-[14px] text-[#0070c0] font-bold">Tradisional Teladan</span>
                            </div>
                            <div className="flex justify-between items-center py-4 border-b border-gray-200/60">
                                <span className="text-[13px] md:text-[14px] text-gray-500 font-semibold tracking-wide">Modul Selesai</span>
                                <span className="text-[13px] md:text-[14px] text-gray-600 font-bold tracking-wide">4 - Modul</span>
                            </div>
                            <div className="flex justify-between items-center pt-4">
                                <span className="text-[13px] md:text-[14px] text-gray-500 font-semibold tracking-wide">Post Test Dikerjakan</span>
                                <span className="text-[13px] md:text-[14px] text-gray-600 font-bold tracking-wide">1 - Test</span>
                            </div>
                        </div>
                    </div>

                    {/* Semua Modul Reguler Section */}
                    <div>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 md:mb-8 gap-5 px-1">
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-[#333] mb-1">Semua Modul Reguler</h3>
                                <p className="text-sm md:text-md text-gray-500">Berdasarkan pada titik kelemahan Anda</p>
                            </div>

                            {/* Search and Filter */}
                            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                                <div className="relative w-full md:w-[280px]">
                                    <input
                                        type="text"
                                        placeholder="Cari Modul..."
                                        className="w-full pl-10 pr-4 py-2.5 text-[12px] md:text-[13px] border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 transition-shadow"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <svg className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <div className="relative w-full sm:w-[200px]">
                                    <select
                                        className="w-full pl-4 pr-10 py-2.5 text-[12px] md:text-[13px] text-gray-600 border border-gray-200 rounded-xl appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                    >
                                        <option value="Semua">Filter Kelas UMKM</option>
                                        <option value="Tradisional">Tradisional</option>
                                        <option value="Berkembang">Berkembang</option>
                                        <option value="Modern">Modern</option>
                                    </select>
                                    <svg className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <span className="text-[13px] text-[#333] font-semibold">Filter:</span>
                        </div>

                        {/* Accordion Categories */}
                        <div className="space-y-10">
                            {accordionData.map((levelData, index) => (
                                <div key={index} className="flex flex-col gap-4">
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-2 gap-3">
                                        <h4 className="text-[17px] md:text-[18px] font-bold text-[#333] tracking-wide">{levelData.title}</h4>
                                        <div className="flex items-center gap-2 md:gap-3 w-full sm:w-auto">
                                            {!levelData.locked && (
                                                <>
                                                    <button className="flex-1 sm:flex-none text-[11px] md:text-[12px] text-white font-semibold bg-[#ff7a00] hover:bg-[#e66e00] px-4 py-2 rounded-lg transition-colors shadow-sm whitespace-nowrap">
                                                        Post Test
                                                    </button>
                                                    <button className="flex-1 sm:flex-none text-[11px] md:text-[12px] text-[#0070c0] font-semibold hover:bg-blue-50 border border-[#0070c0] px-4 py-2 rounded-lg flex items-center justify-center gap-1 transition-colors bg-white whitespace-nowrap">
                                                        Semua
                                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    {/* Categories Filter for this level if not locked */}
                                    {!levelData.locked && (
                                        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 mb-2">
                                            <button className="px-5 py-2 bg-[#dcf1fb] text-[#138ece] text-[13px] font-bold rounded-lg whitespace-nowrap">Semua</button>
                                            <button className="px-5 py-2 bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 text-[13px] font-medium rounded-lg whitespace-nowrap transition-colors">Kepemimpinan</button>
                                            <button className="px-5 py-2 bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 text-[13px] font-medium rounded-lg whitespace-nowrap transition-colors">Budaya Inovasi</button>
                                            <button className="px-5 py-2 bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 text-[13px] font-medium rounded-lg whitespace-nowrap transition-colors">Manajemen Keuangan</button>
                                        </div>
                                    )}

                                    {/* Content Grid Wrapper */}
                                    <div className="relative group">
                                        {/* Prev Arrow Overlay */}
                                        {!levelData.locked && levelData.modules && levelData.modules.length > 0 && (
                                            <div className="absolute top-[40%] left-2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button
                                                    onClick={() => scrollCarousel(accordionScrollRefs.current[index], 'left')}
                                                    className="bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md backdrop-blur-sm pointer-events-auto"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                                </button>
                                            </div>
                                        )}
                                        {/* Next Arrow Overlay */}
                                        {!levelData.locked && levelData.modules && levelData.modules.length > 0 && (
                                            <div className="absolute top-[40%] right-2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button
                                                    onClick={() => scrollCarousel(accordionScrollRefs.current[index], 'right')}
                                                    className="bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md backdrop-blur-sm pointer-events-auto"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                                </button>
                                            </div>
                                        )}

                                        <div
                                            className="flex gap-4 overflow-x-auto pb-4 relative snap-x snap-mandatory no-scrollbar"
                                            ref={el => accordionScrollRefs.current[index] = el}
                                        >
                                            {levelData.locked && (
                                                <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-10 flex items-center justify-center rounded-2xl w-full">
                                                    <div className="bg-gray-800 text-white text-[12px] font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                                        TERKUNCI SYARAT BELUM TERPENUHI
                                                    </div>
                                                </div>
                                            )}

                                            {levelData.modules && levelData.modules.length > 0 ? (
                                                levelData.modules.map(module => (
                                                    <ModuleCard key={`lvl-${module.id}`} module={module} locked={levelData.locked} onSelect={onModuleSelect} />
                                                ))
                                            ) : (
                                                /* Dummy cards for locked levels just for visual */
                                                [1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                                                    <div key={`dummy-${i}`} className={`opacity-40 filter grayscale`}>
                                                        <ModuleCard module={{ id: i, title: 'Modul Terkunci', category: 'Manajemen', lessons: 0, bg: 'bg-gray-300', type: 'Modul' }} locked onSelect={onModuleSelect} />
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <div className="pt-2">
                    <div className="mb-10 text-center max-w-2xl mx-auto">
                        <h2 className="text-2xl font-black  text-[#1c2127] mb-3 uppercase tracking-tight">Perjalanan Belajar Anda</h2>
                        <p className="text-md text-gray-500">Ikuti urutan materi yang sudah kami susun untuk membantu UMKM Anda naik kelas selangkah demi selangkah.</p>
                    </div>
                    <ModuleJourneyPath levels={accordionData} onModuleSelect={onModuleSelect} />
                </div>
            )}
        </div>
    );
};

export default ModulRegulerTab;
