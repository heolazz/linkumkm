import React, { useState, useEffect } from 'react';

interface TrainingData {
    id: number;
    title: string;
    provider: string;
    description: string;
    date: string;
    time: string;
    image: string;
    speaker?: string;
    meetingId?: string;
    passcode?: string;
}

interface PelatihanDetailProps {
    data: TrainingData;
    onBack: () => void;
}

const PelatihanDetail: React.FC<PelatihanDetailProps> = ({ data, onBack }) => {
    const [timeLeft, setTimeLeft] = useState({ hari: '12', jam: '05', menit: '45', detik: '00' });

    useEffect(() => {
        window.scrollTo(0, 0);

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                const s = parseInt(prev.detik);
                const m = parseInt(prev.menit);
                const h = parseInt(prev.jam);
                const d = parseInt(prev.hari);

                if (s > 0) return { ...prev, detik: (s - 1).toString().padStart(2, '0') };
                if (m > 0) return { ...prev, menit: (m - 1).toString().padStart(2, '0'), detik: '59' };
                if (h > 0) return { ...prev, jam: (h - 1).toString().padStart(2, '0'), menit: '59', detik: '59' };
                if (d > 0) return { ...prev, hari: (d - 1).toString().padStart(2, '0'), jam: '23', menit: '59', detik: '59' };
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Mock other trainings
    const otherTrainings = [
        {
            id: 101,
            title: "Perca Floor to Market: Pelatihan Keset Kain Perca",
            date: "25 Feb",
            time: "09:00 - SELESAI",
            image: "/rumah-bumn-page/Pelatihan-offline/2.png",
            speaker: "Liena Prajogi S.E., M.M."
        },
        {
            id: 102,
            title: "Scale Up ! Strategi UMKM Bersaing di Pasar yang Lebih Besar",
            date: "01 Okt",
            time: "13:00 - 15:00",
            image: "/rumah-bumn-page/Pelatihan-offline/1.png",
            speaker: "Liena Prajogi S.E., M.M."
        },
        {
            id: 103,
            title: "Perca Floor to Market: Pelatihan Keset Kain Perca",
            date: "25 Feb",
            time: "09:00 - SELESAI",
            image: "/rumah-bumn-page/Pelatihan-offline/2.png",
            speaker: "Liena Prajogi S.E., M.M."
        },
        {
            id: 104,
            title: "Scale Up ! Strategi UMKM Bersaing di Pasar yang Lebih Besar",
            date: "01 Okt",
            time: "13:00 - 15:00",
            image: "/rumah-bumn-page/Pelatihan-offline/1.png",
            speaker: "Liena Prajogi S.E., M.M."
        },
        {
            id: 105,
            title: "Perca Floor to Market: Pelatihan Keset Kain Perca",
            date: "25 Feb",
            time: "09:00 - SELESAI",
            image: "/rumah-bumn-page/Pelatihan-offline/2.png",
            speaker: "Liena Prajogi S.E., M.M."
        }
    ];

    return (
        <div className="bg-[#fcfcfc] min-h-screen pt-24 pb-20">
            <div className="max-w-[1440px] mx-auto px-5 animate-fade-in-up">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-3 mb-8">
                    <button
                        onClick={onBack}
                        className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:shadow transition-all active:scale-90"
                    >
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <div className="flex items-center text-[13px] font-bold">
                        <span className="text-gray-400 cursor-pointer hover:text-[#3080E3]" onClick={onBack}>Rumah BUMN</span>
                        <span className="mx-2 text-gray-300">›</span>
                        <span className="text-gray-400 cursor-pointer hover:text-[#3080E3]" onClick={onBack}>Pelatihan Offline</span>
                        <span className="mx-2 text-gray-300">›</span>
                        <span className="text-[#3080E3]">Detail Modul</span>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column: Banner and Content (Wide) */}
                    <div className="flex-1 lg:w-[68%]">
                        <div className="rounded-[20px] overflow-hidden shadow-sm mb-6 bg-white border border-gray-100">
                            <div className="relative aspect-[16/9.5] w-full overflow-hidden">
                                <img
                                    src={data.image}
                                    alt={data.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Description - No Border/Card as requested */}
                        <div className="py-2">
                            <p className="text-[14px] text-gray-500 leading-relaxed font-medium">
                                {data.description || "Secara sederhana, ROI menggambarkan seberapa besar keuntungan yang diperoleh dari suatu investasi dibandingkan dengan biaya yang dikeluarkan. Misalnya, ketika sebuah UMKM mengeluarkan biaya untuk membeli mesin produksi, hasil yang diperoleh dari peningkatan efisiensi dan kapasitas produksi harus mampu menutupi investasi tersebut dan memberikan nilai tambah."}
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Sidebar Info (Narrower) */}
                    <div className="w-full lg:w-[32%] space-y-5">
                        {/* Event Summary Card */}
                        <div className="bg-white rounded-[16px] border border-gray-100 shadow-sm p-5 space-y-5">
                            <h2 className="text-[15px] font-bold text-[#333] leading-tight mb-4">
                                {data.title}
                            </h2>

                            <div className="space-y-3.5">
                                <div className="flex items-center gap-3 text-gray-400">
                                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                    <span className="text-[13px] font-medium text-gray-500">{data.speaker || "Liena Prajogi S.E., M.M."}</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-400">
                                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    <span className="text-[13px] font-medium text-gray-500">{data.date} | {data.time}</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-400">
                                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                    <span className="text-[13px] font-medium text-gray-500">Zoom Meeting</span>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-50">
                                <p className="text-[11px] text-gray-400 font-medium mb-3">Dimulai Dalam</p>
                                <div className="grid grid-cols-4 gap-3">
                                    {[
                                        { label: 'Hari', value: timeLeft.hari },
                                        { label: 'Jam', value: timeLeft.jam },
                                        { label: 'Menit', value: timeLeft.menit },
                                        { label: 'Detik', value: timeLeft.detik }
                                    ].map((step, idx) => (
                                        <div key={idx} className="flex flex-col items-center">
                                            <div className="w-full aspect-square bg-[#EAF4FF] rounded-lg flex items-center justify-center">
                                                <span className="text-[#3080E3] font-bold text-[16px]">{step.value}</span>
                                            </div>
                                            <span className="text-[10px] text-gray-400 mt-1.5">{step.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Registration Success Card */}
                        <div className="bg-white rounded-[16px] border border-gray-100 shadow-sm p-5 space-y-5">
                            <p className="text-[11px] text-gray-400 font-medium">Berhasil Terdaftar Pelatihan</p>

                            <div className="bg-[#EAF4FF] rounded-xl flex overflow-hidden border border-[#D1E6FF]">
                                <div className="flex-1 p-3 border-r border-[#D1E6FF]">
                                    <p className="text-[9px] text-gray-500 font-medium uppercase tracking-tight mb-0.5">Meeting ID</p>
                                    <p className="text-[12px] font-bold text-gray-700">95380217365</p>
                                </div>
                                <div className="flex-1 p-3">
                                    <p className="text-[9px] text-gray-500 font-medium uppercase tracking-tight mb-0.5">Passcode</p>
                                    <p className="text-[12px] font-bold text-gray-700">RBJKT</p>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <button className="flex-[1.5] bg-[#3080E3] hover:bg-[#2167c2] text-white py-2.5 rounded-lg font-bold text-[13px] flex items-center justify-center gap-2 transition-all active:scale-95 shadow-sm">
                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" /></svg>
                                    Menuju Zoom
                                </button>
                                <button className="flex-1 border border-[#3080E3] text-[#3080E3] hover:bg-blue-50 py-2.5 rounded-lg font-bold text-[12px] flex items-center justify-center gap-1.5 transition-all">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 10-5.656-5.656l-1.102 1.101" /></svg>
                                    Salin Link
                                </button>
                            </div>

                            <button className="w-full bg-[#1b76bc] hover:bg-[#155a8e] text-white py-2.5 rounded-lg font-bold text-[13px] flex items-center justify-center gap-2 transition-all active:scale-95">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .015 5.398.01 12.038c0 2.123.554 4.197 1.608 6.041l-1.708 6.236 6.381-1.674c1.773.966 3.774 1.474 5.817 1.477h.005c6.637 0 12.036-5.399 12.041-12.041.003-3.218-1.248-6.242-3.522-8.52z" /></svg>
                                Gabung ke Grup Pelatihan
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recommendations Section */}
            <div className="mt-20 max-w-[1440px] mx-auto px-5">
                <h3 className="text-xl font-black text-[#202E3E] mb-8 flex items-center justify-between">
                    Pelatihan Lainnya
                    <div className="flex gap-2">
                        <button className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#3080E3]">‹</button>
                        <button className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#3080E3]">›</button>
                    </div>
                </h3>

                <div className="flex gap-5 overflow-x-auto pb-6 no-scrollbar snap-x">
                    {otherTrainings.map((train) => (
                        <div key={train.id} className="min-w-[280px] w-[280px] bg-white rounded-[20px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all snap-start group cursor-pointer">
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <img src={train.image} alt={train.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                                <div className="absolute left-3 top-3 bg-white/90 backdrop-blur-sm rounded-lg p-1.5 shadow-sm flex flex-col items-center min-w-[50px]">
                                    <span className="text-lg font-black text-gray-800 leading-none">{train.date.split(' ')[0]}</span>
                                    <span className="text-[9px] font-bold text-gray-500 uppercase">{train.date.split(' ')[1]}</span>
                                </div>
                            </div>
                            <div className="p-4 space-y-3">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Pelatihan Tematik 2026</span>
                                <h4 className="text-[14px] font-bold text-[#202E3E] line-clamp-2 leading-snug group-hover:text-[#3080E3] transition-colors">{train.title}</h4>
                                <div className="flex items-center gap-2 pt-2">
                                    <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                                        <svg className="w-3.5 h-3.5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-[8px] text-gray-400 font-bold uppercase tracking-tight">PEMBICARA</p>
                                        <p className="text-[10px] font-black text-gray-700 truncate">{train.speaker}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default PelatihanDetail;
