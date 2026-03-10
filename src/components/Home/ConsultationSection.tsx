import React, { useRef } from 'react';

interface Expert {
    name: string;
    role: string;
    image: string;
}

interface ConsultationSectionProps {
    onNavigate?: (tab: string, coach?: any) => void;
}

const ConsultationSection: React.FC<ConsultationSectionProps> = ({ onNavigate }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const experts: Expert[] = [
        { name: 'Hana Komala', role: 'Tax Expert', image: '/Coaching-page/coaching/coaching1.png' },
        { name: 'Ressy Citra', role: 'Keamanan Digital', image: '/Coaching-page/coaching/coaching2.png' },
        { name: 'Fauzia Nur Noviyanti', role: 'Optimalisasi WhatsApp untuk Business', image: '/Coaching-page/coaching/coaching3.png' },
        { name: 'Ayu Putri Maharesmi', role: 'Bangun Profil Usaha', image: '/Coaching-page/coaching/coaching4.png' },
        { name: 'Ahmat', role: 'Manajemen Rantai Pasok', image: '/Coaching-page/coaching/coaching5.png' },
        { name: 'Nanang Rosadi', role: 'Transformasi Keuangan Digital', image: '/Coaching-page/coaching/coaching6.png' },
        { name: 'Yuliana Fitri', role: 'Trainer Strategi Penetrasi Pasar', image: '/Coaching-page/coaching/coaching7.png' },
        { name: 'Yuke Maulina Septina', role: 'Koperasi Desa Merah Putih', image: '/Coaching-page/coaching/coaching8.png' },
    ];

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-10 md:py-24 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-5">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6 md:mb-10 gap-4">
                    <div className="w-full md:max-w-3xl">
                        <h2 className="text-2xl md:text-3xl  font-bold text-[#333] mb-3 md:mb-4">
                            Konstultasi dengan Pakar melalui Coaching Clinic
                        </h2>
                        <p className="w-full text-sm md:text-base text-gray-500 font-medium  leading-relaxed">
                            Konsultasikan masalah usaha Anda dengan pakar yang berpengalaman dan dapatkan solusi terbaik untuk pertumbuhan bisnis UMKM Anda.
                        </p>
                    </div>
                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); onNavigate?.('Konsultasi'); }}
                        className="hidden md:flex text-secondary font-bold text-sm hover:underline items-center gap-1 group whitespace-nowrap font-sans"
                    >
                        Lihat Semua <span className="group-hover:translate-x-1 transition-transform">›</span>
                    </a>
                </div>

                <div className="relative group/section">
                    <div
                        ref={scrollRef}
                        className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory no-scrollbar"
                    >
                        {experts.map((expert, index) => (
                            <div
                                key={index}
                                className="w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] flex-shrink-0 bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm snap-start hover:shadow-md transition-all"
                            >
                                {/* Upper Part - Square Aspect Ratio (1:1) */}
                                <div className="relative aspect-square overflow-hidden bg-gray-50">
                                    <img
                                        src={expert.image}
                                        alt={expert.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Bottom Part - Compact Details */}
                                <div className="p-5 flex-1 flex flex-col">
                                    <h3 className="text-lg font-bold text-[#202E3E] mb-2 font-sans line-clamp-1 group-hover:text-[#0070c0] transition-colors">
                                        {expert.name}
                                    </h3>
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-6 h-6 rounded-md bg-[#F8FBFF] flex items-center justify-center border border-[#E9EFF5]">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#738294" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                            </svg>
                                        </div>
                                        <span className="text-[13px] text-[#738294] font-semibold font-sans line-clamp-1 italic">{expert.role}</span>
                                    </div>

                                    <button
                                        onClick={() => onNavigate?.('Chat Pakar', expert)}
                                        className="w-full mt-auto bg-[#ff7a00] hover:bg-[#e66e00] text-white py-2.5 md:py-3 rounded-lg md:rounded-xl font-bold flex items-center justify-center gap-1.5 md:gap-2 transition-all active:scale-95 text-[11px] md:text-[13px] shadow-sm"
                                    >
                                        Chat sekarang
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-400 hover:text-secondary opacity-0 group-hover/section:opacity-100 transition-opacity -translate-x-4 z-30 flex"
                    >
                        ‹
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-400 hover:text-secondary opacity-0 group-hover/section:opacity-100 transition-opacity translate-x-4 z-30 flex"
                    >
                        ›
                    </button>
                </div>

                {/* Mobile Lihat Semua Button */}
                <div className="mt-6 md:hidden flex justify-center w-full pb-4">
                    <button
                        onClick={() => onNavigate?.('Konsultasi')}
                        className="w-full py-3.5 bg-white border border-gray-200 text-center text-[14px] font-bold text-secondary rounded-xl active:scale-95 transition-transform flex items-center justify-center gap-2 shadow-sm"
                    >
                        Lihat Semua Pakar <span className="text-[1.2rem] leading-none mb-0.5">›</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ConsultationSection;
