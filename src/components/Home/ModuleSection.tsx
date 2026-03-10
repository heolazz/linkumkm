import React, { useRef, useState } from 'react';
import Card from '../Common/Card';

const ModuleSection: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeTab, setActiveTab] = useState('Semua Modul');

    const modules = [
        {
            id: 1,
            category: 'Inkubasi Bisnis',
            title: 'Home Decor and Craft Strategi Digital Marketing 2024',
            date: '14 July 2025 | 10:51:51 WIB',
            expert: 'Luthfi Kurniawan',
            image: '/Home-page/modul_home/1_modul_HomeDecorAndCraft.png'
        },
        {
            id: 2,
            category: 'Umum',
            title: 'Teknik Melayani Pelanggan Anda',
            date: '24 November 2020 | 14:34:13 WIB',
            expert: 'Vicktor Aritonang',
            image: '/Home-page/modul_home/2_modul_teknik_melayani_pelanggan.png'
        },
        {
            id: 3,
            category: 'Ultra Mikro',
            title: 'Buku Saku Pemberdayaan Usaha Ultra Mikro',
            date: '28 April 2023 | 15:45:17 WIB',
            expert: 'Bank Rakyat Indonesia',
            image: '/Home-page/modul_home/3_modul_buku-saku-pemberdayaan-usaha.png'
        },
        {
            id: 4,
            category: 'Export',
            title: 'BME Pengembangan Produk Ekspor',
            date: '15 July 2025 | 16:27:02 WIB',
            expert: 'Kementerian Kehutanan Republik Indonesia',
            image: '/Home-page/modul_home/4_modul.png'
        },
        {
            id: 5,
            category: 'Desa',
            title: 'Mengenal KMP dan Peluang Baru UMKM Desa',
            date: '20 June 2025 | 09:15:00 WIB',
            expert: 'Kementerian Desa PDTT',
            image: '/Home-page/modul_home/5_modul_mengenal-kmp-dan-peluang-baru-umkm-desa.png'
        }
    ];

    const categories = ['Semua Modul', 'Inkubasi Bisnis', 'Desa', 'Umum', 'Ultra Mikro', 'Export', 'Koperasi Desa', 'BUMDesa', 'ZISWAF'];

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-10 md:py-24 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-5 text-sans">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6 md:mb-10 gap-4">
                    <div className="w-full md:max-w-3xl">
                        <h2 className="text-2xl md:text-3xl  font-bold text-[#333] mb-3 md:mb-4">
                            Ratusan Modul Penunjang UMKM
                        </h2>
                        <p className="w-full text-sm md:text-base text-text-muted leading-relaxed">
                            Akses berbagai modul penunjang yang dirancang khusus untuk membantu UMKM Anda tumbuh dan berkembang.
                        </p>
                    </div>
                    <a href="#" className="hidden md:flex text-secondary font-bold text-base hover:underline items-center gap-1 group whitespace-nowrap">
                        Lihat Semua <span className="group-hover:translate-x-1 transition-transform">›</span>
                    </a>
                </div>

                <div className="relative mb-10 overflow-hidden">
                    <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`whitespace-nowrap px-6 py-2.5 rounded-xl text-sm font-semibold transition-all border ${activeTab === cat
                                    ? 'bg-[#e3f2fd] text-secondary border-transparent'
                                    : 'bg-white text-text-muted border-gray-100 hover:border-secondary hover:text-secondary'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="relative group/section">
                    <div
                        ref={scrollRef}
                        className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar"
                    >
                        {modules.map(module => (
                            <div key={module.id} className="w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] flex-shrink-0 snap-start">
                                <Card {...module} />
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-400 hover:text-secondary opacity-0 group-hover/section:opacity-100 transition-opacity -translate-x-4 z-10 flex"
                    >
                        ‹
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-400 hover:text-secondary opacity-0 group-hover/section:opacity-100 transition-opacity translate-x-4 z-10 flex"
                    >
                        ›
                    </button>
                </div>

                {/* Mobile Lihat Semua Button */}
                <div className="mt-6 md:hidden flex justify-center w-full pb-4">
                    <button className="w-full py-3.5 bg-white border border-gray-200 text-center text-[14px] font-bold text-[#0070c0] rounded-xl active:scale-95 transition-transform flex items-center justify-center gap-2 shadow-sm">
                        Lihat Semua Modul <span className="text-[1.2rem] leading-none mb-0.5">›</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ModuleSection;
