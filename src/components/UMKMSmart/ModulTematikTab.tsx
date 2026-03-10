import React, { useState } from 'react';

// Reusable Tematik Card Component
const TematikCard = ({ module, onClick }: { module: any, onClick: () => void }) => {
    return (
        <div onClick={onClick} className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.06)] flex flex-col overflow-hidden h-full border border-gray-100/50 cursor-pointer hover:shadow-md transition-shadow">
            {/* Top section (CSS Split design to mimic reference) */}
            <div className={`relative h-[220px] bg-gray-100 overflow-hidden flex`}>
                {/* Left side Image simulation */}
                <div className="w-[50%] h-full bg-gray-200">
                    <img
                        src={module.img || `https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400&auto=format&fit=crop`}
                        alt={module.title}
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Overlay color block */}
                <div className={`absolute top-0 right-0 bottom-0 w-[55%] ${module.color} p-4 flex flex-col justify-between z-10`}>
                    <div>
                        <span className="bg-white/20 text-white text-[8px] font-bold px-2 py-0.5 rounded-sm mb-3 inline-block uppercase tracking-wider backdrop-blur-sm">
                            {module.tag || 'Modul Materi'}
                        </span>
                        <h4 className="text-white font-bold text-[15px] leading-snug line-clamp-4">
                            {module.title}
                        </h4>
                    </div>
                    {/* Instructor */}
                    <div className="flex items-center gap-2 mt-2">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                        </div>
                        <div>
                            <p className="text-[7px] text-white/80 font-semibold mb-0.5">PENGAJAR</p>
                            <p className="text-[10px] text-white font-bold max-w-[80px] truncate">{module.instructor}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section (Details) */}
            <div className="p-4 flex flex-col flex-1 justify-between bg-white">
                <div>
                    <h4 className="text-[14px] font-bold text-[#333] mb-3 line-clamp-2 leading-snug hover:text-[#0070c0] transition-colors">
                        {module.title}
                    </h4>
                    <span className="inline-block text-[9px] text-[#ffb020] font-bold bg-[#fff8eb] px-2 py-1 rounded-sm uppercase tracking-widest mb-4">
                        {module.category}
                    </span>
                </div>

                <div className="mt-auto">
                    <div className="text-[11px] text-gray-500 font-medium mb-1.5 border-b border-gray-100 pb-2">
                        {module.date}
                    </div>
                    <div className="flex items-center text-[13px] text-gray-500 font-medium mt-2">
                        <span className="text-gray-700 font-bold mr-1.5">{module.rating.toFixed(1)}</span>
                        <svg className="w-4 h-4 text-yellow-400 mr-2 -mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-gray-300 mx-1.5 leading-none">|</span>
                        <span className="text-gray-600 font-medium text-[12px]">{module.reviews} Reviews</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ModulTematikTab = ({ onModuleSelect }: { onModuleSelect: (module: any) => void }) => {
    const filters = ['Semua', 'Inkubasi Bisnis', 'Desa', 'Umum', 'Mitra Mikro', 'Export', 'Koperasi Desa', 'BUMDesa', 'JISWAF'];
    const [activeFilter, setActiveFilter] = useState('Inkubasi Bisnis');
    const [selectedYear, setSelectedYear] = useState('Pilih Tahun');

    const blueColor = 'bg-[#3182ce]';
    const orangeColor = 'bg-[#ff9800]';
    const tealColor = 'bg-[#00a2b8]';

    const dummyModules = [
        { id: 1, title: 'Home Decor and Craft Strategi Digital Marketing 2024', category: 'Inkubasi Bisnis', date: '14 Juli 2025 | 10:31 WIB', rating: 4.8, reviews: 7, color: blueColor, instructor: 'Luthfi Kurniawan', img: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=400&auto=format&fit=crop' },
        { id: 2, title: 'Home Decor and Craft Manajemen Keuangan 2024', category: 'Inkubasi Bisnis', date: '14 Juli 2025 | 10:48 WIB', rating: 0.0, reviews: 0, color: blueColor, instructor: 'Irma Wiharni', img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=400&auto=format&fit=crop' },
        { id: 3, title: 'Home Decor and Craft Business Mindset 2024', category: 'Inkubasi Bisnis', date: '14 Juli 2025 | 10:47 WIB', rating: 0.0, reviews: 0, color: blueColor, instructor: 'Hairi P Morjito', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=400&auto=format&fit=crop' },
        { id: 4, title: 'Home Decor and Craft Kapasitas Produksi 2024', category: 'Inkubasi Bisnis', date: '14 Juli 2025 | 10:38 WIB', rating: 0.0, reviews: 0, color: blueColor, instructor: 'Deri Febriana', img: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=400&auto=format&fit=crop' },
        { id: 5, title: 'Home Decor and Craft Brand and Branding 2024', category: 'Inkubasi Bisnis', date: '14 Juli 2025 | 10:55 WIB', rating: 0.0, reviews: 0, color: blueColor, instructor: 'SBI Research Institute', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=400&auto=format&fit=crop' },
        { id: 6, title: 'Home Decor and Craft Good Design is Good Business 2024', category: 'Inkubasi Bisnis', date: '14 Juli 2025 | 10:59 WIB', rating: 0.0, reviews: 0, color: blueColor, instructor: 'Thomas Wibisono Jr', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=400&auto=format&fit=crop' },
        { id: 7, title: 'Home Decor and Craft - Communication and Negotiation Skill...', category: 'Inkubasi Bisnis', date: '14 Juli 2025 | 10:59 WIB', rating: 0.0, reviews: 0, color: orangeColor, instructor: 'SBI Research Institute', img: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=400&auto=format&fit=crop' },
        { id: 8, title: 'Fashion - Inovasi Produk 2024', category: 'Inkubasi Bisnis', date: '14 Juli 2025 | 09:21 WIB', rating: 0.0, reviews: 0, color: orangeColor, instructor: 'SBI Research Institute', img: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=400&auto=format&fit=crop' },
        { id: 9, title: 'Fashion - Fungsi Estetika, Inspirasi Statemen, dan Karakter Design 2024', category: 'Inkubasi Bisnis', date: '14 Juli 2025 | 08:58 WIB', rating: 0.0, reviews: 0, color: orangeColor, instructor: 'SBI Research Institute', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=400&auto=format&fit=crop' },
        { id: 10, title: 'Fashion - Visual Produk 2024', category: 'Inkubasi Bisnis', date: '14 Juli 2025 | 08:53 WIB', rating: 0.0, reviews: 0, color: blueColor, instructor: 'Deden Siswanto', img: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=400&auto=format&fit=crop' },
        { id: 11, title: 'Fashion - Kapasitas Produksi 2024', category: 'Inkubasi Bisnis', date: '14 Juli 2025 | 08:45 WIB', rating: 0.0, reviews: 0, color: blueColor, instructor: 'Haris Aldisa', img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=400&auto=format&fit=crop' },
        { id: 12, title: 'Fashion Manajemen Keuangan 2024', category: 'Inkubasi Bisnis', date: '14 Juli 2025 | 08:30 WIB', rating: 0.0, reviews: 0, color: tealColor, instructor: 'Dedy Sidarta', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=400&auto=format&fit=crop' },
    ];

    return (
        <div className="w-full">
            {/* Apa Itu Tematik Section */}
            <div className="mb-14">
                <h2 className="text-xl font-bold  text-[#333] mb-3">Apa Itu Tematik</h2>
                <p className="text-md text-gray-600 leading-relaxed">
                    Modul Tematik adalah materi pembelajaran yang membahas topik-topik spesifik sesuai dengan kebutuhan saat ini, seperti metode pemasaran kekinian, cara mendesain produk, teknik fotografi produk, dan keterampilan lainnya. Tujuan modul ini adalah memberikan wawasan praktis dan insight yang bisa langsung diterapkan untuk mengatasi tantangan yang dihadapi UMKM.                </p>
            </div>

            {/* Pilihan Modul Section */}
            <div>
                <h3 className="text-lg font-bold text-[#333] mb-5">Pilihan Modul</h3>

                {/* Filters */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 border-b border-gray-100 pb-1">
                    <div className="flex items-center gap-3 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
                        <span className="text-[12px] font-semibold text-[#333] whitespace-nowrap hidden sm:block">Filter Modul:</span>
                        <div className="flex gap-2">
                            {filters.map(filter => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-4 py-1.5 text-[12px] font-medium rounded-lg whitespace-nowrap transition-colors ${activeFilter === filter
                                        ? 'bg-[#dcf1fb] text-[#138ece] font-bold'
                                        : 'bg-transparent text-gray-500 hover:bg-gray-50'
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tahun Dropdown */}
                    <div className="relative min-w-[140px] flex-shrink-0">
                        <select
                            className="w-full pl-4 pr-10 py-1.5 text-[12px] text-gray-600 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                        >
                            <option value="Pilih Tahun">Pilih Tahun</option>
                            <option value="2024">2026</option>
                            <option value="2024">2025</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                        </select>
                        <svg className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                    {dummyModules.map(module => (
                        <TematikCard key={module.id} module={module} onClick={() => onModuleSelect(module)} />
                    ))}
                </div>

                {/* Pagination (Dummy) */}
                <div className="flex justify-center items-center gap-2 mt-8">
                    <button className="w-8 h-8 flex items-center justify-center bg-[#fff0d9] text-[#ff7a00] rounded-sm font-semibold text-[13px]">1</button>
                    <button className="w-8 h-8 flex items-center justify-center bg-transparent text-gray-500 hover:bg-gray-100 rounded-sm font-semibold text-[13px]">2</button>
                    <button className="w-8 h-8 flex items-center justify-center bg-transparent text-gray-500 hover:bg-gray-100 rounded-sm font-semibold text-[13px]">3</button>
                    <button className="w-8 h-8 flex items-center justify-center bg-transparent border border-gray-200 text-[#ff7a00] hover:bg-orange-50 rounded-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModulTematikTab;
