import React, { useState, useEffect, useRef } from 'react';

interface Slide {
    id: number;
    title: string;
    content: string;
    image: string;
}

interface ModuleReaderProps {
    module: any;
    onClose: () => void;
}

const ModuleReader: React.FC<ModuleReaderProps> = ({ module, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const touchStart = useRef<number | null>(null);
    const touchEnd = useRef<number | null>(null);

    // Dummy slides data based on the module
    const slides: Slide[] = [
        {
            id: 1,
            title: "Pendahuluan",
            content: "Selamat datang di modul " + module.title + ". Di modul ini kita akan mempelajari strategi fundamental untuk meningkatkan skala bisnis Anda.",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Analisis Target Pasar",
            content: "Langkah pertama yang krusial adalah memahami siapa pelanggan Anda. Tanpa data yang kuat, strategi pemasaran akan sia-sia.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Optimasi Channel Penjualan",
            content: "Gunakan platform digital seperti WhatsApp Business untuk membangun kedekatan dengan konsumen.",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "Kesimpulan & Action Plan",
            content: "Saatnya menerapkan ilmu yang didapat. Mulailah dengan langkah kecil hari ini untuk hasil besar di masa depan.",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    // Swipe handlers
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        touchEnd.current = null;
        touchStart.current = e.targetTouches[0].clientX;
    };

    const onTouchMove = (e: React.TouchEvent) => {
        touchEnd.current = e.targetTouches[0].clientX;
    };

    const onTouchEnd = () => {
        if (!touchStart.current || !touchEnd.current) return;
        const distance = touchStart.current - touchEnd.current;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) nextSlide();
        if (isRightSwipe) prevSlide();
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlide]);

    const progress = ((currentSlide + 1) / slides.length) * 100;

    return (
        <div className="fixed inset-0 z-[3000] bg-[#f8fafc] flex flex-col animate-fade-in-reader overflow-hidden touch-none">
            {/* Header / Nav Bar (Light Glassmorphism) */}
            <div className="h-14 md:h-16 border-b border-[#e2e8f0] flex items-center justify-between px-4 md:px-6 bg-white/80 backdrop-blur-xl relative z-[3200] shadow-sm">
                <div className="flex items-center gap-2 md:gap-4">
                    <button
                        onClick={onClose}
                        className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-all text-[#64748b] hover:text-[#0070c0]"
                    >
                        <svg className="w-5 (md:w-6) h-5 (md:h-6)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <div className="w-px h-6 bg-gray-200 hidden sm:block"></div>
                    <div className="max-w-[150px] md:max-w-md">
                        <h2 className="text-[#1e293b] font-bold text-[13px] md:text-[16px] tracking-tight truncate">
                            {module.title}
                        </h2>
                        <p className="text-[#0070c0] text-[9px] font-bold uppercase tracking-widest leading-none mt-0.5">
                            Slide {currentSlide + 1} / {slides.length}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="hidden md:flex flex-col items-end mr-4">
                        <span className="text-[10px] text-[#94a3b8] font-bold uppercase tracking-widest mb-1">Kemajuan</span>
                        <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-[#0070c0] transition-all duration-700 ease-out" style={{ width: `${progress}%` }}></div>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className={`w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-xl transition-all ${isSidebarOpen ? 'bg-[#0070c0] text-white' : 'bg-gray-50 text-[#64748b] border border-gray-100'}`}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Main Content Area (Swipeable) */}
            <div
                className="flex-1 relative flex items-center justify-center p-0 md:p-12 overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#eff6ff] to-[#f8fafc]"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                {/* Aura Decoration */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-60">
                    <div className="absolute top-[-10%] left-[-10%] w-[80%] md:w-[40%] h-[40%] bg-[#cfe3ff]/30 blur-[80px] md:blur-[120px] rounded-full animate-pulse"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[80%] md:w-[40%] h-[40%] bg-[#d9ebff]/30 blur-[80px] md:blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Slide Card */}
                <div className="w-full h-full md:h-auto md:max-w-6xl md:aspect-video bg-white md:rounded-[32px] md:shadow-[0_20px_50px_-15px_rgba(0,112,192,0.15)] overflow-hidden flex flex-col md:flex-row relative">

                    {/* Visual Area */}
                    <div className="w-full md:w-5/12 h-[35vh] md:h-auto relative overflow-hidden group/img border-b md:border-b-0 md:border-r border-gray-100 flex-shrink-0">
                        <img
                            key={`img-${currentSlide}`}
                            src={slides[currentSlide].image}
                            alt={slides[currentSlide].title}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent md:from-white/10"></div>

                        {/* Mobile Category Tag */}
                        <div className="absolute top-4 left-4 md:hidden">
                            <span className="bg-[#0070c0] text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase">Topik {slides[currentSlide].id}</span>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 p-6 md:p-12 lg:p-20 flex flex-col justify-center bg-white relative overflow-y-auto no-scrollbar">
                        <div className="flex items-center gap-3 mb-4 md:mb-6 hidden md:flex">
                            <span className="w-5 h-[2px] bg-[#0070c0]/30 font-bold">——</span>
                            <span className="text-[#0070c0] font-bold text-[13px] uppercase tracking-[0.3em]">
                                Topik {slides[currentSlide].id}
                            </span>
                        </div>

                        <h1
                            key={`title-${currentSlide}`}
                            className="text-[24px] md:text-[44px] lg:text-[52px] font-black text-[#1e293b] leading-[1.1] mb-4 md:mb-8 animate-slide-up-content tracking-tight"
                        >
                            {slides[currentSlide].title}
                        </h1>

                        <p
                            key={`text-${currentSlide}`}
                            className="text-[15px] md:text-[19px] text-[#475569] leading-relaxed font-medium animate-fade-in-slow max-w-xl"
                        >
                            {slides[currentSlide].content}
                        </p>

                        <div className="mt-8 md:mt-12 flex items-center gap-4">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white bg-gray-50 flex items-center justify-center overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?u=${i + 20}`} alt="user" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-[10px] md:text-[11px] text-[#94a3b8] font-bold uppercase tracking-wider">Telah dipelajari banyak UMKM</p>
                        </div>
                    </div>

                    {/* Desktop Hover Nav */}
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className={`absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 backdrop-blur-md text-[#1e293b] border border-gray-100 shadow-lg hidden md:flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-90 ${currentSlide === 0 ? 'hidden' : ''}`}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={currentSlide === slides.length - 1}
                        className={`absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#0070c0] text-white shadow-xl hidden md:flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-90 ${currentSlide === slides.length - 1 ? 'hidden' : ''}`}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>

            {/* Bottom Interaction Area */}
            <div className="bg-white border-t border-[#e2e8f0] p-4 pb-8 md:pb-4 md:px-10 safe-area-bottom z-[3200]">
                {/* Mobile Progress Bar */}
                <div className="md:hidden w-full h-1 bg-gray-100 rounded-full overflow-hidden mb-4">
                    <div className="h-full bg-[#0070c0] transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
                </div>

                <div className="flex items-center justify-between gap-4">
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className={`flex-1 md:flex-none flex items-center justify-center gap-2 text-[#64748b] font-bold text-[14px] h-12 md:h-14 rounded-2xl border border-gray-100 transition-all ${currentSlide === 0 ? 'opacity-20 cursor-not-allowed' : 'active:bg-gray-50'}`}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                        Kembali
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={currentSlide === slides.length - 1}
                        className={`flex-[2] md:flex-none bg-white text-[#0070c0] border-2 border-[#0070c0] flex items-center justify-center gap-3 font-bold text-[14px] md:text-[15px] px-8 h-12 md:h-14 rounded-2xl transition-all shadow-md active:scale-95 ${currentSlide === slides.length - 1 ? 'hidden' : ''}`}
                    >
                        Selanjutnya
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                    </button>

                    {currentSlide === slides.length - 1 && (
                        <button
                            onClick={onClose}
                            className="flex-[2] md:flex-none bg-[#0070c0] text-white flex items-center justify-center gap-3 font-bold text-[14px] md:text-[15px] px-8 h-12 md:h-14 rounded-2xl shadow-lg shadow-blue-500/20 active:scale-95 hover:bg-[#005a9e] transition-all"
                        >
                            <span>Selesaikan</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </button>
                    )}
                </div>
            </div>

            {/* Sidebar Overlay (Mobile Optimized) */}
            {isSidebarOpen && (
                <div className="absolute inset-0 z-[3300] bg-black/20 backdrop-blur-sm md:bg-transparent" onClick={() => setIsSidebarOpen(false)}>
                    <div
                        className="absolute right-0 top-0 bottom-0 w-[85%] md:w-80 bg-white z-[3310] shadow-2xl animate-slide-left flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                            <div>
                                <h3 className="text-[#1e293b] font-bold text-[15px]">Materi Modul</h3>
                                <p className="text-[#0070c0] text-[10px] font-bold uppercase tracking-wider">{slides.length} Halaman</p>
                            </div>
                            <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-gray-100 rounded-full text-gray-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <div className="flex-1 p-4 space-y-3 overflow-y-auto no-scrollbar">
                            {slides.map((slide, idx) => (
                                <div
                                    key={slide.id}
                                    onClick={() => {
                                        setCurrentSlide(idx);
                                        setIsSidebarOpen(false);
                                    }}
                                    className={`group cursor-pointer p-4 rounded-2xl border transition-all ${currentSlide === idx ? 'bg-[#0070c0]/5 border-[#0070c0]/30 shadow-sm' : 'bg-white border-gray-100'}`}
                                >
                                    <div className="flex gap-4 items-center">
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-[12px] ${currentSlide === idx ? 'bg-[#0070c0] text-white shadow-blue-500/20' : 'bg-gray-100 text-[#94a3b8]'}`}>
                                            {slide.id}
                                        </div>
                                        <h4 className={`font-bold text-[13px] ${currentSlide === idx ? 'text-[#0070c0]' : 'text-[#64748b]'} truncate`}>
                                            {slide.title}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 bg-gray-50 border-t border-gray-100">
                            <p className="text-[11px] text-gray-400 text-center ">LinkUMKM Learning Hub v1.0</p>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes fade-in-reader {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slide-up-content {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                @keyframes slide-left {
                    from { transform: translateX(100%); }
                    to { transform: translateX(0); }
                }
                .animate-fade-in-reader { animation: fade-in-reader 0.4s ease-out forwards; }
                .animate-slide-up-content { animation: slide-up-content 0.5s ease-out forwards; }
                .animate-slide-left { animation: slide-left 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                
                .safe-area-bottom {
                    padding-bottom: calc(1rem + env(safe-area-inset-bottom));
                }
            `}</style>
        </div>
    );
};

export default ModuleReader;
