import React, { useState } from 'react';

interface ModulRegulerDetailProps {
    module: any;
    onBack: () => void;
    onTabChange?: (tab: string) => void;
}

const ModulRegulerDetail: React.FC<ModulRegulerDetailProps> = ({ module, onBack, onTabChange }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const comments = [
        {
            name: 'Ely Herlina Karnasudir',
            date: 'Senin, 25 Februari 2025 | 15:43 WIB',
            rating: 5,
            text: 'Sangat bermanfaat dan edukatif!',
            avatar: 'E'
        },
        {
            name: 'ari wenny',
            date: 'Rabu, 11 Februari 2025 | 08:42 WIB',
            rating: 5,
            text: 'sangat bagus sebagai panduan informasi dalam mengelola medsos terkhusus WhatsApp untuk mempromosikan produk usaha',
            avatar: 'A'
        },
        {
            name: 'Sari Gini',
            date: 'Minggu, 9 Februari 2025 | 10:32 WIB',
            rating: 5,
            text: 'Promosi awal yang saya lakukan untuk memperkenalkan produk yang saya buat adalah melalui status WhatsApp dimana didalamnya sudah ada interaksi sosial walaupun hanya sebatas teman dekat saudara dan tetangga',
            avatar: 'S'
        },
        {
            name: 'Adli Arisandi',
            date: 'Sabtu, 7 Februari 2025 | 22:01 WIB',
            rating: 5,
            text: 'Terima kasih atas support materinya',
            avatar: 'A'
        },
        {
            name: 'Dian Oktaria',
            date: 'Kamis, 6 Februari 2025 | 09:44 WIB',
            rating: 5,
            text: 'Memanfaatkan WhatsApp secara optimal dalam penjualan sangat penting manfaatnya dalam usaha',
            avatar: 'D'
        }
    ];

    return (
        <div className="max-w-[1440px] mx-auto px-5 py-8 animate-fade-in">
            {/* Breadcrumb / Back Link */}
            <div className="mb-8">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 group mb-4"
                >
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                    <span className="text-[14px] font-bold text-gray-800 truncate max-w-[300px] md:max-w-md group-hover:text-[#0070c0] transition-colors">
                        {module.title}
                    </span>
                </button>
                <div className="flex items-center gap-2 text-[12px] text-gray-400 font-medium ml-10">
                    <button
                        onClick={() => {
                            onBack();
                            onTabChange?.('Apa Itu UMKM Smart');
                        }}
                        className="hover:text-[#0070c0] transition-colors"
                    >
                        UMKM Smart
                    </button>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <button
                        onClick={onBack}
                        className="hover:text-[#0070c0] transition-colors"
                    >
                        Modul Reguler
                    </button>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <span className="text-[#0070c0]">Detail Modul</span>
                </div>
            </div>

            {/* Top Module Info Card */}
            <div className={`rounded-[24px] overflow-hidden flex flex-col md:flex-row mb-12 min-h-[340px]`}>
                {/* Left: Preview Image/Graphic */}
                <div className={`w-full md:w-5/12 bg-[#55B5E6] p-8 flex flex-col items-start justify-between relative`}>
                    <div className="flex justify-between w-full items-start z-10">
                        <img src="logo/logo_linkumkm_white.png" alt="LinkUMKM" className="h-5 opacity-90" />
                        <div className="bg-white/30 backdrop-blur-md text-white text-[11px] font-bold px-4 py-2 rounded-sm uppercase tracking-wider">
                            MANAJEMEN KEUANGAN
                        </div>
                    </div>

                    <div className="mt-12 z-10 max-w-[90%]">
                        <div className="w-10 h-[1.5px] bg-white/60 mb-6"></div>
                        <h1 className="text-white font-bold text-[24px] leading-[1.2] mb-4">
                            Dari Chat Jadi Cuan Optimalkan WhatsApp untuk Tingkatkan Penjualan UMKM
                        </h1>
                    </div>

                    {/* Decorative Book Icon overlay - matching mockup placement */}
                    <div className="absolute right-0 bottom-0 opacity-20 translate-x-4 translate-y-4">
                        <svg className="w-56 h-56 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                </div>

                {/* Right: Text Details */}
                <div className="w-full md:w-7/12 bg-white p-8 md:pl-12 flex flex-col justify-start">
                    <h2 className="text-[20px] font-bold text-[#1c2127] mb-2 leading-tight">
                        Dari Chat Jadi Cuan Optimalkan WhatsApp untuk Tingkatkan Penjualan UMKM
                    </h2>
                    <p className="text-[13px] text-gray-400 font-medium mb-5">
                        Rabu, 26 November 2025 | 17:09 WIB
                    </p>

                    <div className="flex items-center gap-1.5 mb-5">
                        <div className="flex text-[#ff7a00]">
                            {[1, 2, 3, 4].map(i => (
                                <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            ))}
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fillOpacity="0.4" /></svg>
                        </div>
                        <span className="text-[14px] font-bold text-[#1c2127] ml-2 ">4.8</span>
                    </div>

                    <div className="flex gap-2 mb-4">
                        <span className="bg-[#0070c0] text-white text-[10px] font-bold px-3 py-1.5 rounded-md flex items-center gap-1.5 shadow-sm">
                            Tradisional
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>
                        </span>
                        <span className="bg-[#fff0e5] text-[#ff7a00] text-[10px] font-bold px-3 py-1.5 rounded-md">
                            Manajemen Keuangan
                        </span>
                    </div>

                    <p className="text-[13px] text-gray-500 font-medium mb-8 leading-relaxed max-w-xl">
                        Dari Chat Jadi Cuan Optimalkan WhatsApp untuk Tingkatkan Penjualan UMKM
                    </p>

                    <button className="bg-[#ff7a00] hover:bg-[#e66e00] text-white font-bold text-[14px] px-12 py-3.5 rounded-xl transition-all w-fit shadow-md hover:shadow-lg">
                        Baca
                    </button>
                </div>
            </div>

            {/* Review Section */}
            <div className="bg-[#fcfdff] border border-gray-100 rounded-[32px] p-8 md:p-12 mb-12 shadow-sm">
                <div className="flex justify-between items-start mb-10">
                    <div className="max-w-md">
                        <h3 className="text-[20px] font-bold text-[#1c2127] mb-2">Bagaimana Pendapat Anda soal Modul</h3>
                        <p className="text-[14px] text-gray-400 font-medium tracking-tight">Berapa rating yang Anda berikan untuk modul ini</p>
                    </div>
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <button
                                key={s}
                                onClick={() => setRating(s)}
                                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${rating >= s ? 'text-yellow-400' : 'text-gray-200 hover:text-gray-300'}`}
                            >
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mb-6">
                    <h4 className="text-[15px] font-bold text-[#1c2127] mb-4">Bisa ceritakan pendapat Anda?</h4>
                    <div className="relative">
                        <textarea
                            className="w-full h-32 p-5 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all font-medium text-gray-700 placeholder:text-gray-300"
                            placeholder="Pendapat Anda tentang modul"
                            maxLength={250}
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <div className="absolute bottom-4 right-5 text-[11px] text-gray-400 font-bold">
                            {comment.length}/250
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        disabled={!comment || rating === 0}
                        className={`px-12 py-3 rounded-xl text-[14px] font-black uppercase tracking-widest transition-all ${comment && rating > 0
                            ? 'bg-[#0070c0] text-white shadow-lg shadow-blue-100'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            }`}
                    >
                        Kirim
                    </button>
                </div>
            </div>

            {/* Comments List */}
            <div className="bg-white border border-gray-50 rounded-[32px] p-8 md:p-12 shadow-sm">
                <h3 className="text-[20px] font-bold text-[#1c2127] mb-10 pb-4 border-b border-gray-50">Komentar Peserta Lainnya</h3>

                <div className="space-y-10">
                    {comments.map((item, idx) => (
                        <div key={idx} className="flex gap-5 pb-8 border-b border-gray-50 last:border-0">
                            <div className="w-12 h-12 shrink-0 rounded-full bg-blue-50 flex items-center justify-center text-[#0070c0] font-black text-[18px]">
                                {item.avatar}
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                                        <h5 className="font-bold text-[#1c2127] text-[15px]">{item.name}</h5>
                                        <div className="flex text-yellow-400">
                                            {[1, 2, 3, 4, 5].map(s => (
                                                <svg key={s} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                            ))}
                                        </div>
                                    </div>
                                    <span className="text-[12px] text-gray-400 font-medium tracking-tight">
                                        {item.date}
                                    </span>
                                </div>
                                <p className="text-[14px] text-gray-600 leading-relaxed font-medium">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-12 flex justify-end items-center gap-2">
                    <button className="w-8 h-8 rounded-lg bg-[#fff7ef] text-[#ff7a00] font-bold text-[13px] flex items-center justify-center">1</button>
                    <button className="w-8 h-8 rounded-lg bg-white border border-gray-100 text-gray-500 font-bold text-[13px] hover:bg-gray-50 transition-colors flex items-center justify-center">2</button>
                    <button className="w-8 h-8 rounded-lg bg-white border border-gray-100 text-gray-500 font-bold text-[13px] hover:bg-gray-50 transition-colors flex items-center justify-center">3</button>
                    <button className="w-8 h-8 rounded-lg bg-white border border-gray-100 text-[#ff7a00] flex items-center justify-center hover:bg-gray-50 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>

            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.4s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default ModulRegulerDetail;
