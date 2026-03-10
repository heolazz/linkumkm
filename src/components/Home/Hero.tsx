import React, { useState, useEffect } from 'react';

interface HeroProps {
    onNavigate?: (tab: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
    const [currentBanner, setCurrentBanner] = useState(0);
    const banners = [
        '/Home-page/banner/banner_launchingapp.jpg',
        '/Home-page/banner/banner_ramadhan.png'
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentBanner((prev) => (prev + 1) % banners.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [banners.length]);

    const recommendations = [
        { title: 'Mulai Skoring', icon: '/Home-page/icon-home/icon_skoring.png' },
        { title: 'Rumah BUMN', icon: '/Home-page/icon-home/icon_belajar-rumah-bumn.png' },
        { title: 'Modul Pelatihan', icon: '/Home-page/icon-home/icon_pelajari-materi-umkm.png' },
        { title: 'Konsultasi', icon: '/Home-page/icon-home/icon_konsultasi.png' },
        { title: 'Semua Fitur', icon: '/Home-page/icon-home/icon_lihat_semua.png' },
    ];

    return (
        <section className="bg-white relative overflow-hidden pt-20">
            {/* Full Width Banner Section with 2.78:1 Aspect Ratio */}
            <div className="w-full relative group">
                <div className="overflow-hidden w-full aspect-[2.78/1]">
                    <div
                        className="flex transition-transform duration-700 ease-in-out h-full w-full"
                        style={{ transform: `translateX(-${currentBanner * 100}%)` }}
                    >
                        {banners.map((src, index) => (
                            <div key={index} className="w-full h-full flex-shrink-0">
                                <img
                                    src={src}
                                    alt={`Banner ${index + 1}`}
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modern Segmented Progress Bar Indicators */}
                <div className="absolute bottom-10 lg:bottom-14 left-1/2 -translate-x-1/2 flex gap-4 z-10 w-full max-w-[120px] md:max-w-[200px]">
                    {banners.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentBanner(index)}
                            className="flex-1 h-1.5 rounded-full bg-white/20 overflow-hidden relative"
                        >
                            <div className="absolute inset-0 bg-black/5"></div>
                            <div
                                className={`absolute top-0 left-0 h-full bg-[#ff7a00] transition-all ease-linear ${currentBanner === index ? 'w-full duration-[5000ms]' : 'w-0 duration-0'
                                    }`}
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* Floating Search & Recommendations Area - MATCHING IMAGE */}
            <div className="relative -mt-4 md:-mt-6 lg:-mt-10 z-30 pb-16 px-5 lg:px-0">
                <div className="max-w-[1440px] mx-auto bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-6 lg:p-8">
                    {/* Search Bar Group */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6">
                        <div className="flex-1 flex items-center gap-3 px-4 py-2 border border-gray-200 rounded-lg bg-white">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#AAB4C1" strokeWidth="2" className="shrink-0">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <input
                                type="text"
                                placeholder="Cari Solusi terbaik untuk UMKM"
                                className="flex-1 border-none outline-none h-10 text-[14px] sm:text-[15px] text-[#444] placeholder-[#AAB4C1] w-full"
                            />
                        </div>
                        <button className="bg-[#0070c0] hover:bg-[#005ba1] text-white px-6 py-3 sm:py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 text-[15px] transition-all w-full sm:w-auto">
                            Telusuri
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </div>

                    {/* Recommendation Section */}
                    <div className="space-y-4">
                        <p className="text-[13px] text-[#738294] font-medium ml-1">
                            Fitur Rekomendasi untuk Anda🔥
                        </p>

                        <div className="grid grid-cols-5 gap-2 sm:gap-4 mt-2">
                            {recommendations.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => {
                                        if (item.title === 'Mulai Skoring') {
                                            onNavigate?.('Mulai Skoring');
                                        } else if (item.title === 'Modul Pelatihan') {
                                            onNavigate?.('UMKM Smart');
                                        } else {
                                            onNavigate?.(item.title);
                                        }
                                    }}
                                    className="flex flex-col items-center text-center gap-2 sm:gap-3 cursor-pointer group"
                                >
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shrink-0">
                                        <img
                                            src={item.icon}
                                            alt={item.title}
                                            className="w-full h-full object-contain transition-transform group-hover:scale-105"
                                        />
                                    </div>
                                    <span className="text-[10px] sm:text-[13px] font-medium sm:font-semibold text-[#444] leading-[1.2] font-sans">
                                        {item.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
