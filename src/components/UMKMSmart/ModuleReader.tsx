import React, { useState, useEffect } from 'react';

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
        <div className="fixed inset-0 z-[3000] bg-[#f8fafc] flex flex-col animate-fade-in-reader">
            {/* Header / Nav Bar (Light Glassmorphism) */}
            <div className="h-16 border-b border-[#e2e8f0] flex items-center justify-between px-6 bg-white/80 backdrop-blur-xl relative z-[3200] shadow-sm">
                <div className="flex items-center gap-4">
                    <button
                        onClick={onClose}
                        className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-all text-[#64748b] hover:text-[#0070c0] border border-transparent hover:border-gray-200"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <div className="w-px h-6 bg-gray-200 mx-1 hidden sm:block"></div>
                    <div>
                        <h2 className="text-[#1e293b] font-bold text-[14px] md:text-[16px] tracking-tight">
                            {module.title}
                        </h2>
                        <div className="flex items-center gap-2 mt-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0070c0] animate-pulse"></span>
                            <p className="text-[#64748b] text-[10px] font-bold uppercase tracking-widest leading-none">
                                Slide {currentSlide + 1} OF {slides.length}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex flex-col items-end mr-2">
                        <span className="text-[10px] text-[#94a3b8] font-bold uppercase tracking-widest mb-1">Lesson Progress</span>
                        <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-[#0070c0] transition-all duration-700 ease-out" style={{ width: `${progress}%` }}></div>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all ${isSidebarOpen ? 'bg-[#0070c0] text-white shadow-lg shadow-blue-500/20' : 'bg-gray-50 text-[#64748b] hover:text-[#0070c0] hover:bg-gray-100 border border-gray-100'}`}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Main Content Viewport */}
            <div className="flex-1 relative flex items-center justify-center p-4 md:p-12 overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#eff6ff] to-[#f8fafc]">
                {/* Visual Aura Decoration (Soft Blue) */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-60">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#cfe3ff]/30 blur-[120px] rounded-full animate-pulse"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#d9ebff]/30 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Slide Card (Clean White Style) */}
                <div className="w-full max-w-6xl aspect-video bg-white rounded-[32px] shadow-[0_20px_50px_-15px_rgba(0,112,192,0.15)] overflow-hidden flex flex-col md:flex-row animate-slide-in-content relative border border-gray-100">

                    {/* Left: Visual Area */}
                    <div className="w-full md:w-5/12 h-64 md:h-auto relative overflow-hidden group/img border-r border-gray-50">
                        <img
                            key={`img-${currentSlide}`}
                            src={slides[currentSlide].image}
                            alt={slides[currentSlide].title}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>

                        {/* Slide Overlay Info */}
                        <div className="absolute bottom-0 left-0 w-full p-8 z-10 hidden md:block">
                            <div className="w-8 h-1 bg-[#0070c0] rounded-full mb-3 shadow-[0_0_10px_rgba(0,112,192,0.5)]"></div>
                            <p className="text-[12px] font-bold text-[#0070c0]/60 uppercase tracking-[0.2em] mb-1">Visual Study</p>
                            <p className="text-[14px] font-medium text-[#1e293b] italic leading-snug">"{slides[currentSlide].title}"</p>
                        </div>
                    </div>

                    {/* Right: Content Area (Elegant Typography) */}
                    <div className="flex-1 p-8 md:p-16 lg:p-20 flex flex-col justify-center bg-white relative">
                        <div className="absolute top-12 left-12 w-24 h-24 bg-[#0070c0]/5 blur-[40px] rounded-full pointer-events-none"></div>

                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-5 h-[2px] bg-[#0070c0]/30 font-bold">——</span>
                            <span className="text-[#0070c0] font-bold text-[13px] uppercase tracking-[0.3em]">
                                Topic {slides[currentSlide].id}
                            </span>
                        </div>

                        <h1
                            key={`title-${currentSlide}`}
                            className="text-[32px] md:text-[44px] lg:text-[52px] font-black text-[#1e293b] leading-[1.05] mb-8 animate-slide-up-content tracking-tight"
                        >
                            {slides[currentSlide].title}
                        </h1>

                        <p
                            key={`text-${currentSlide}`}
                            className="text-[17px] md:text-[19px] text-[#475569] leading-relaxed font-medium animate-fade-in-slow max-w-xl"
                        >
                            {slides[currentSlide].content}
                        </p>

                        <div className="mt-12 flex items-center gap-6">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-50 flex items-center justify-center overflow-hidden grayscale opacity-70">
                                        <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="user" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-[11px] text-[#94a3b8] font-bold uppercase tracking-wider">Visited by 1,2k+ participants</p>
                        </div>
                    </div>

                    {/* Navigation Buttons (White Theme) */}
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className={`absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 backdrop-blur-md text-[#1e293b] border border-gray-100 shadow-lg flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-90 ${currentSlide === 0 ? 'hidden' : ''}`}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={currentSlide === slides.length - 1}
                        className={`absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#0070c0] text-white shadow-xl flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-90 ${currentSlide === slides.length - 1 ? 'hidden' : ''}`}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>

            {/* Bottom Controls / Progress (Light Glass) */}
            <div className="h-24 bg-white/90 backdrop-blur-xl border-t border-[#e2e8f0] flex items-center justify-between px-10 relative z-[3200]">
                <div className="flex items-center gap-6">
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className={`group flex items-center gap-4 text-[#64748b] font-bold text-[14px] px-2 py-2 transition-all ${currentSlide === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:translate-x-[-4px] hover:text-[#0070c0]'}`}
                    >
                        <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#0070c0]/5 group-hover:border-[#0070c0]/30 transition-all shadow-sm">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                        </div>
                        <span className="hidden sm:inline">Kembali</span>
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={currentSlide === slides.length - 1}
                        className={`relative overflow-hidden group/btn bg-[#0070c0] text-white flex items-center gap-3 font-bold text-[15px] px-10 py-3.5 rounded-2xl transition-all shadow-[0_10px_20px_-5px_rgba(0,112,192,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(0,112,192,0.5)] hover:-translate-y-0.5 active:scale-95 ${currentSlide === slides.length - 1 ? 'hidden' : ''}`}
                    >
                        <span className="relative z-10">Lanjut Materi</span>
                        <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:animate-shimmer"></div>
                    </button>

                    {currentSlide === slides.length - 1 && (
                        <button
                            onClick={onClose}
                            className="bg-[#22c55e] hover:bg-[#16a34a] text-white flex items-center gap-3 font-bold text-[15px] px-10 py-3.5 rounded-2xl transition-all shadow-[0_10px_20px_-5px_rgba(34,197,94,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(34,197,94,0.5)] hover:-translate-y-0.5 active:scale-95"
                        >
                            <span>Selesaikan Belajar</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </button>
                    )}
                </div>

                {/* Desktop Progress Info */}
                <div className="hidden lg:flex items-center gap-10">
                    <div className="text-right">
                        <p className="text-[#94a3b8] text-[10px] font-bold uppercase tracking-widest mb-1 font-mono">Learning Progress</p>
                        <p className="text-[#0070c0] text-[14px] font-black uppercase tracking-tighter">In Review · {Math.round(progress)}%</p>
                    </div>
                </div>
            </div>

            {/* Sidebar / Materi Navigator (Light Mode) */}
            {isSidebarOpen && (
                <div className="absolute top-16 right-0 bottom-0 w-80 bg-white/95 backdrop-blur-2xl border-l border-[#e2e8f0] z-[3100] shadow-[-20px_0_50px_rgba(0,0,0,0.05)] animate-slide-left">
                    <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                        <h3 className="text-[#1e293b] font-bold text-[15px]">Daftar Materi</h3>
                        <p className="text-[#0070c0] text-[11px] font-bold uppercase">{slides.length} Slides</p>
                    </div>
                    <div className="p-4 space-y-3 overflow-y-auto max-h-[calc(100vh-140px)] no-scrollbar">
                        {slides.map((slide, idx) => (
                            <div
                                key={slide.id}
                                onClick={() => {
                                    setCurrentSlide(idx);
                                    setIsSidebarOpen(false);
                                }}
                                className={`group cursor-pointer p-4 rounded-2xl border transition-all ${currentSlide === idx ? 'bg-[#0070c0]/5 border-[#0070c0]/30 shadow-sm' : 'bg-white border-gray-100 hover:bg-gray-50 hover:border-gray-200'}`}
                            >
                                <div className="flex gap-4 items-center">
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-[12px] ${currentSlide === idx ? 'bg-[#0070c0] text-white shadow-md shadow-blue-500/20' : 'bg-gray-100 text-[#94a3b8] group-hover:text-[#64748b]'}`}>
                                        {slide.id}
                                    </div>
                                    <h4 className={`font-bold text-[13px] ${currentSlide === idx ? 'text-[#0070c0]' : 'text-[#64748b] group-hover:text-[#1e293b]'} truncate`}>
                                        {slide.title}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <style>{`
                @keyframes fade-in-reader {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slide-in-content {
                    from { transform: translateY(40px); scale: 0.98; opacity: 0; }
                    to { transform: translateY(0); scale: 1; opacity: 1; }
                }
                @keyframes slide-up-content {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                @keyframes fade-in-slow {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slide-left {
                    from { transform: translateX(100%); }
                    to { transform: translateX(0); }
                }
                @keyframes shimmer {
                    from { transform: translateX(-100%); }
                    to { transform: translateX(100%); }
                }
                .animate-fade-in-reader { animation: fade-in-reader 0.5s ease-out forwards; }
                .animate-slide-in-content { animation: slide-in-content 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .animate-slide-up-content { animation: slide-up-content 0.5s ease-out 0.2s forwards; opacity: 0; }
                .animate-fade-in-slow { animation: fade-in-slow 1s ease-out forwards; }
                .animate-slide-left { animation: slide-left 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .animate-shimmer { animation: shimmer 2s infinite linear; }
                
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
};

export default ModuleReader;
