import React, { useState } from 'react';

interface CoachingClinicPageProps {
    onChatSelect?: (coach: any) => void;
}

const CoachingClinicPage: React.FC<CoachingClinicPageProps> = ({ onChatSelect }) => {
    const filters = ['Semua Coaching', 'Marketing', 'Management Keuangan', 'Management Operasional'];
    const [activeFilter, setActiveFilter] = useState('Semua Coaching');

    const coaches = [
        { id: 1, name: 'Hana Komala', focus: 'Tax Expert', image: '/Coaching-page/coaching/coaching1.png' },
        { id: 2, name: 'Ressy Citra', focus: 'Keamanan Digital', image: '/Coaching-page/coaching/coaching2.png' },
        { id: 3, name: 'Fauzia Nur Noviyanti', focus: 'Optimalisasi WhatsApp untuk Business', image: '/Coaching-page/coaching/coaching3.png' },
        { id: 4, name: 'Ayu Putri Maharesmi', focus: 'Bangun Profil Usaha', image: '/Coaching-page/coaching/coaching4.png' },
        { id: 5, name: 'Ahmat', focus: 'Manajemen Rantai Pasok', image: '/Coaching-page/coaching/coaching5.png' },
        { id: 6, name: 'Nanang Rosadi', focus: 'Pemahaman Seputar Transformasi Keuangan Digital UMKM', image: '/Coaching-page/coaching/coaching6.png' },
        { id: 7, name: 'Yuliana Fitri', focus: 'Trainer Strategi Penetrasi Pasar', image: '/Coaching-page/coaching/coaching7.png' },
        { id: 8, name: 'Yuke Maulina Septina', focus: 'Koperasi Desa Merah Putih', image: '/Coaching-page/coaching/coaching8.png' },
        { id: 9, name: 'Anne Sukma', focus: 'Manajemen Sumber Daya Manusia', image: '/Coaching-page/coaching/coaching9.png' },
        { id: 10, name: 'Adi Poernomo', focus: 'Pertanian', image: '/Coaching-page/coaching/coaching10.png' },
        { id: 11, name: 'Ismita Saputri', focus: 'Keuangan', image: '/Coaching-page/coaching/coaching11.png' },
        { id: 12, name: 'Eko Wiyogo', focus: 'Pemahaman Seputar Digitalisasi dan Logistik', image: '/Coaching-page/coaching/coaching1.png' },
    ];

    return (
        <div className="bg-white min-h-screen pt-20 pb-20 overflow-hidden">
            {/* Hero Section */}
            <div className="bg-[#e4f3fb] relative overflow-hidden pt-8 md:pt-12 pb-16 md:pb-24 border-b border-[#e4f3fb]">
                {/* Background Decoratives */}
                <div className="absolute -top-[20%] -right-[5%] w-[40vh] md:w-[60vh] h-[40vh] md:h-[60vh] bg-[#f0f8fd] rounded-full opacity-80 z-0"></div>
                <div className="absolute -bottom-[30%] -left-[10%] w-[35vh] md:w-[50vh] h-[35vh] md:h-[50vh] bg-[#b1dff8] rounded-full opacity-70 z-0 text-transparent"></div>
                <div className="absolute -bottom-[25%] right-[5%] w-[30vh] md:w-[45vh] h-[30vh] md:h-[45vh] bg-[#b1dff8] rounded-full opacity-40 z-0"></div>

                <div className="max-w-[1100px] mx-auto px-5 relative z-10">
                    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-16">
                        <div className="w-full md:w-5/12 flex justify-center md:justify-end">
                            <img
                                src="/umkm-smart-page/ilustrasi_hero_umkm_smart.png"
                                alt="Coaching Clinic Hero"
                                className="w-[60%] sm:w-[50%] md:w-full max-w-[420px] object-contain drop-shadow-sm mix-blend-multiply"
                            />
                        </div>
                        <div className="w-full md:w-7/12 text-center md:text-left z-10 md:pl-6 leading-[1.2] md:leading-[1.3]">
                            <h1 className="text-[22px] sm:text-[28px] md:text-[40px] font-bold text-[#2d333a] mb-1 tracking-tight">
                                Konsultasi Langsung dengan
                            </h1>
                            <h2 className="text-[22px] sm:text-[28px] md:text-[40px] font-bold text-[#0070c0] mb-3 md:mb-4 tracking-tight">
                                Pakar melalui Coaching Clinic
                            </h2>
                            <p className="text-[13px] md:text-[15px] text-gray-500 max-w-md mx-auto md:mx-0 font-medium  leading-relaxed px-4 md:px-0">
                                Program pendampingan bisnis yang memungkinkan UMKM berkonsultasi langsung dengan mentor dan praktisi ahli.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-[1440px] mx-auto px-5 lg:px-12 relative z-10 mt-16 text-left">

                <div className="mb-8 md:mb-14 px-4 md:px-0">
                    <h2 className="text-lg md:text-[22px] font-bold  text-[#333] mb-2 md:mb-3">
                        Konsultasi dengan Pakar melalui Coaching Clinic
                    </h2>
                    <p className="text-[13px] md:text-md text-gray-600 leading-relaxed max-w-[1440px] font-medium ">
                        Melalui Coaching Clinic, pelaku UMKM dapat berkonsultasi langsung dengan para profesional di bidangnya. Layanan ini dirancang untuk membantu UMKM mengatasi tantangan bisnis secara praktis dan aplikatif bersama mentor berpengalaman. Temukan mentor sesuai kebutuhan usahamu dan mulai sesi konsultasi sekarang juga!
                    </p>
                </div>


                {/* Filters */}
                <div className="flex overflow-x-auto hide-scrollbar gap-2.5 md:gap-3 mb-10 md:mb-12 pb-2 md:pb-0">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 md:px-5 py-2 text-[12px] md:text-[13px] font-medium rounded-lg whitespace-nowrap transition-colors border ${activeFilter === filter
                                ? 'bg-[#e4f3fb] text-[#138ece] font-bold border-[#b1dff8]'
                                : 'bg-transparent text-gray-500 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 gap-y-6 md:gap-y-10">
                    {coaches.map(coach => (
                        <div key={coach.id} className="bg-white rounded-xl md:rounded-[16px] shadow-[0_2px_15px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col hover:shadow-lg transition-shadow border border-gray-100/50">
                            {/* Coach Image Container */}
                            <div className="w-full aspect-square bg-[#0a72cc] relative overflow-hidden">
                                <img
                                    src={coach.image}
                                    alt={coach.name}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>

                            {/* Coach Details */}
                            <div className="p-3 sm:p-5 flex flex-col flex-grow bg-white">
                                <h4 className="font-bold text-[#1c2127] text-[14px] sm:text-[18px] mb-1 md:mb-1.5 line-clamp-1">{coach.name}</h4>
                                <div className="flex flex-row items-baseline gap-1.5 mb-3 md:mb-5">
                                    <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-gray-400 shrink-0 relative top-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <p className="text-[11px] md:text-[13px] text-gray-500 line-clamp-1 md:line-clamp-2">{coach.focus}</p>
                                </div>

                                <button
                                    onClick={() => onChatSelect?.(coach)}
                                    className="mt-auto w-full bg-[#ff7a00] hover:bg-[#e66e00] text-white py-2.5 md:py-3 rounded-lg md:rounded-xl font-bold flex items-center justify-center gap-1.5 md:gap-2 transition-all active:scale-95 text-[11px] md:text-[13px] shadow-sm"
                                >
                                    <span className="hidden sm:inline">Chat sekarang</span>
                                    <span className="inline sm:hidden">Chat</span>
                                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center md:justify-end items-center gap-2 mt-12 mb-8">
                    <button className="w-8 h-8 flex items-center justify-center bg-[#fff0d9] text-[#ff7a00] rounded text-[13px] font-bold">1</button>
                    <button className="w-8 h-8 flex items-center justify-center bg-transparent text-gray-600 hover:bg-gray-100 rounded text-[13px] font-bold">2</button>
                    <button className="w-8 h-8 flex items-center justify-center bg-transparent text-gray-600 hover:bg-gray-100 rounded text-[13px] font-bold">3</button>
                    <button className="w-8 h-8 flex items-center justify-center bg-transparent border border-gray-200 text-[#ff7a00] hover:bg-[#fff0d9] rounded text-[13px]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CoachingClinicPage;
