import React, { useState } from 'react';

interface ModulTematikDetailProps {
    module: any;
    onBack: () => void;
}

const ModulTematikDetail: React.FC<ModulTematikDetailProps> = ({ module, onBack }) => {
    const [reviewText, setReviewText] = useState('');

    const otherReviews = [
        {
            name: 'Endrayadi',
            date: '19 Desember 2025 | 23:47:25 WIB',
            rating: 5,
            comment: 'Sangat menginspirasi dan tema mudah untuk di pahami',
            avatar: 'https://i.pravatar.cc/150?u=1'
        },
        {
            name: 'M Khoirul Fattah Zain',
            date: '22 Oktober 2025 | 23:36:20 WIB',
            rating: 5,
            comment: 'Keren',
            avatar: 'https://i.pravatar.cc/150?u=2'
        }
    ];

    return (
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-6">
            {/* Header / Breadcrumbs */}
            <div className="mb-6 flex flex-col gap-1 items-start">
                <button onClick={onBack} className="flex items-center gap-2 text-[18px] font-bold text-[#333] hover:text-[#0070c0] transition-colors mb-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    {module.title}
                </button>
                <div className="flex items-center text-[13px] text-gray-500 font-medium">
                    <span className="cursor-pointer hover:text-[#0070c0]" onClick={onBack}>UMKM Smart</span>
                    <span className="mx-2">›</span>
                    <span className="cursor-pointer hover:text-[#0070c0]" onClick={onBack}>Tematik</span>
                    <span className="mx-2">›</span>
                    <span className="text-[#0070c0]">Detail Modul</span>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col lg:flex-row gap-8 mb-10">
                {/* Left Card Cover (Mirroring the TematikCard visually but larger) */}
                <div className="w-full lg:w-[450px] shrink-0">
                    <div className="bg-white rounded-xl shadow-sm flex overflow-hidden h-[300px] border border-gray-100">
                        {/* Left side Image */}
                        <div className="w-[50%] h-full bg-gray-200">
                            <img
                                src={module.img || "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400&auto=format&fit=crop"}
                                alt={module.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Right side color block */}
                        <div className={`w-[50%] ${module.color} p-6 flex flex-col justify-between relative`}>
                            {/* Logo top right */}
                            <div className="absolute top-4 right-4 text-white text-[14px] font-bold opacity-80">
                                linkumkm
                            </div>

                            <div className="mt-8">
                                <span className="bg-white/20 text-white text-[10px] font-bold px-2.5 py-1 rounded-sm mb-3 inline-block uppercase tracking-wider backdrop-blur-sm">
                                    {module.tag || 'Modul Materi'}
                                </span>
                                <h4 className="text-white font-bold text-[18px] leading-snug line-clamp-4">
                                    {module.title}
                                </h4>
                            </div>

                            {/* Instructor */}
                            <div className="flex items-center gap-3 mt-4">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                                </div>
                                <div>
                                    <p className="text-[9px] text-white/80 font-semibold mb-0.5">PEMBICARA</p>
                                    <p className="text-[12px] text-white font-bold line-clamp-1">{module.instructor}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Area - Detail Texts */}
                <div className="flex-1 flex flex-col justify-center">
                    <h1 className="text-[24px] lg:text-[28px] font-bold text-[#333] mb-2 leading-snug">
                        {module.title}
                    </h1>
                    <div className="text-[14px] text-gray-500 font-medium mb-3">
                        Senin, {module.date} {/* assuming date has the right format, we prepend Senin here for demo as per screenshot */}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className={`w-5 h-5 ${star <= Math.round(module.rating || 4.6) ? 'text-[#ffb020]' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                        <span className="text-[#333] font-bold text-[16px] ml-2">{module.rating > 0 ? module.rating.toFixed(1) : '4.6'}</span>
                    </div>

                    <div className="mb-4">
                        <span className="inline-block text-[11px] text-[#ffb020] font-bold bg-[#fff8eb] px-3 py-1.5 rounded-md uppercase tracking-widest">
                            {module.category}
                        </span>
                    </div>

                    <p className="text-[15px] text-gray-600 mb-8 leading-relaxed max-w-2xl">
                        {module.title} di {module.category}
                    </p>

                    <div>
                        <button className="bg-[#ff7a00] hover:bg-[#e66a00] text-white font-bold py-2.5 px-10 rounded-lg shadow-sm transition-colors text-[14px]">
                            Baca
                        </button>
                    </div>
                </div>
            </div>

            {/* Review Input Section */}
            <div className="border border-gray-200 rounded-xl p-6 mb-8 max-w-[1440px]">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                    <div>
                        <h3 className="text-xl font-bold text-[#333] mb-1">Bagaimana Pendapat Anda soal Modul</h3>
                        <p className="text-md text-gray-500">Berapa rating yang anda berikan untuk modul ini</p>
                    </div>
                    {/* Empty rating stars */}
                    <div className="flex gap-1 cursor-pointer">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className={`w-7 h-7 text-gray-300 hover:text-gray-400`} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                </div>

                <div className="mb-4">
                    <h4 className="text-lg font-bold text-[#333] mb-3">Bisa ceritakan pendapat Anda?</h4>
                    <div className="relative">
                        <textarea
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            maxLength={750}
                            placeholder="Pendapat anda tentang modul"
                            className="w-full border border-gray-200 rounded-lg p-4 text-[14px] text-gray-700 min-h-[120px] focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
                        />
                        {/* the small resize handle is native textarea behavior */}
                    </div>
                    <div className="flex justify-between items-center mt-2 text-[12px] text-gray-400 font-medium">
                        <span>Maksimal 750 Karakter</span>
                        <span>{reviewText.length} / 250</span>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        className={`py-2 px-12 rounded-lg font-semibold text-[14px] transition-colors ${reviewText.length > 0 ? 'bg-[#ff7a00] text-white hover:bg-[#e66a00]' : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            }`}
                        disabled={reviewText.length === 0}
                    >
                        Kirim
                    </button>
                </div>
            </div>

            {/* Other Reviews Section */}
            <div className="max-w-[1440px]">
                <h3 className="text-lg font-bold text-[#333] mb-4">Komentar Peserta Lainnya</h3>

                <div className="border border-gray-200 rounded-xl p-6 mb-12">
                    {otherReviews.map((review, idx) => (
                        <div key={idx} className={`flex gap-4 ${idx !== otherReviews.length - 1 ? 'border-b border-gray-100 pb-6 mb-6' : ''}`}>
                            <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-gray-100">
                                <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h5 className="font-bold text-[14px] text-[#333] mb-1">{review.name}</h5>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg key={star} className={`w-3.5 h-3.5 ${star <= review.rating ? 'text-[#ffb020]' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-[12px] text-gray-400">{review.date}</span>
                                </div>
                                <p className="text-[14px] text-gray-600 leading-relaxed">
                                    {review.comment}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ModulTematikDetail;
