import React, { useState } from 'react';
import SkoringTab from '../components/UMKMSmart/SkoringTab';
import ModulRegulerTab from '../components/UMKMSmart/ModulRegulerTab';
import ModulRegulerDetail from '../components/UMKMSmart/ModulRegulerDetail';
import ModulTematikTab from '../components/UMKMSmart/ModulTematikTab';
import ModulTematikDetail from '../components/UMKMSmart/ModulTematikDetail';
import FinancialDashboard from '../components/FinancialDashboard/FinancialDashboard';

interface UMKMSmartPageProps {
    initialTab?: string;
    onNavigate?: (tab: string) => void;
}

const UMKMSmartPage: React.FC<UMKMSmartPageProps> = ({ initialTab, onNavigate }) => {
    const [activeTab, setActiveTab] = useState(initialTab || 'Apa Itu UMKM Smart');
    const [selectedTematik, setSelectedTematik] = useState<any>(null);
    const [selectedReguler, setSelectedReguler] = useState<any>(null);
    const tabs = ['Apa Itu UMKM Smart', 'Skoring', 'Dashboard Keuangan', 'Modul Reguler', 'Modul Tematik'];

    // Scroll to top when switching to/from details
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [selectedTematik, selectedReguler]);

    const benefits = [
        {
            title: 'Pertumbuhan Bisnis',
            description: 'Ketahui strategi dan langkah selanjutnya berdasarkan hasil skoring usaha Anda.',
            icon: '/umkm-smart-page/what/icon_pertumbuhan_bisnis.png'
        },
        {
            title: 'Mengetahui Level Usaha Anda',
            description: 'Temukan apakah usaha Anda ada di level Tradisional, Berkembang, atau Modern.',
            icon: '/umkm-smart-page/what/icon_poin_level.png'
        },
        {
            title: 'Pelatihan dan Edukasi',
            description: 'Pelajari keterampilan baru melalui modul yang disesuaikan dengan hasil Skoring Anda.',
            icon: '/umkm-smart-page/what/icon_modul.png'
        }
    ];

    const steps = [
        {
            title: 'Isi Skoring Sekarang',
            description: 'Lakukan Skoring untuk menilai posisi bisnis Anda (Tradisional, Berkembang, atau Modern).',
            icon: '/umkm-smart-page/what/icon_signature.png',
            bg: 'bg-indigo-50',
            text: 'text-indigo-600'
        },
        {
            title: 'Pelajari Modul & Ikuti Post Test',
            description: 'Belajar lewat modul interaktif yang sudah direkomendasikan & dan uji pemahaman Anda dengan post test.',
            icon: '/umkm-smart-page/what/icon_modul.png', // Or another icon if available, but they seem to use generic ones. Wait, the design has a yellow document icon for this. We can use an SVG fallback if needed or just use icon_modul.
            bg: 'bg-yellow-50',
            text: 'text-yellow-600',
            isSvg: true,
            svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>
        },
        {
            title: 'Lakukan Skoring Ulang untuk Naik Kelas',
            description: 'Evaluasi ulang untuk melihat progres bisnis Anda setiap 6 bulan sekali.',
            icon: '/umkm-smart-page/what/icon_trophy.png',
            bg: 'bg-green-50',
            text: 'text-green-600',
            isSvg: true,
            svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
        },
        {
            title: 'Naik Kelas & Maksimalkan Potensi Bisnis',
            description: 'Semakin tinggi kelas Anda, semakin luas akses pembelajaran dan potensi bisnis Anda.',
            icon: '/umkm-smart-page/what/icon_naik_kelas.png',
            bg: 'bg-blue-50',
            text: 'text-blue-600',
            isSvg: true,
            svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg>
        }
    ];

    if (selectedTematik) {
        return (
            <div className="bg-white min-h-screen pt-20 pb-20 overflow-hidden">
                <ModulTematikDetail module={selectedTematik} onBack={() => setSelectedTematik(null)} />
            </div>
        );
    }

    if (selectedReguler) {
        return (
            <div className="bg-white min-h-screen pt-20 pb-20 overflow-hidden">
                <ModulRegulerDetail
                    module={selectedReguler}
                    onBack={() => setSelectedReguler(null)}
                    onTabChange={setActiveTab}
                />
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pt-20 pb-20 overflow-hidden">
            {/* Hero Section */}
            <div className="bg-[#e4f3fb] relative overflow-hidden pt-12 pb-24 border-b border-[#e4f3fb]">
                {/* Background Decoratives */}
                {/* Top Right Blob */}
                <div className="absolute -top-[20%] -right-[5%] w-[60vh] h-[60vh] bg-[#f0f8fd] rounded-full opacity-80 z-0"></div>
                {/* Bottom Left Curve */}
                <div className="absolute -bottom-[30%] -left-[10%] w-[50vh] h-[50vh] bg-[#b1dff8] rounded-full opacity-70 z-0 text-transparent"></div>
                {/* Bottom Right Curve */}
                <div className="absolute -bottom-[25%] right-[5%] w-[45vh] h-[45vh] bg-[#b1dff8] rounded-full opacity-40 z-0"></div>

                <div className="max-w-[1100px] mx-auto px-5 relative z-10">
                    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16">
                        <div className="w-full md:w-5/12 flex justify-center md:justify-end">
                            <img
                                src="/umkm-smart-page/ilustrasi_hero_umkm_smart.png"
                                alt="UMKM Smart Hero Illustration"
                                className="w-[80%] md:w-full max-w-[420px] object-contain drop-shadow-sm mix-blend-multiply"
                            />
                        </div>
                        <div className="w-full md:w-7/12 text-center md:text-left z-10 md:pl-6">
                            <h1 className="text-[28px] md:text-[40px] font-bold text-[#2d333a] mb-1 leading-tight tracking-tight">
                                Kenali Kekuatan Bisnis
                            </h1>
                            <h2 className="text-[28px] md:text-[40px] font-bold text-[#0070c0] mb-4 tracking-tight">
                                UMKM Anda
                            </h2>
                            <p className="text-[14px] md:text-[15px] text-gray-500 leading-relaxed max-w-md mx-auto md:mx-0 font-medium ">
                                Isi pertanyaan singkat untuk mengetahui level usaha Anda.<br className="hidden md:block" />
                                Dapatkan rekomendasi modul dari para ahli untuk naik kelas!
                            </p>
                            <div className="mt-8 flex justify-center md:justify-start">
                                <button
                                    onClick={() => onNavigate?.('Mulai Skoring')}
                                    className="bg-[#0070c0] hover:bg-[#005a9e] text-white font-bold text-[15px] px-10 py-3.5 rounded-xl transition-all shadow-[0_8px_20px_rgba(0,112,192,0.25)] active:scale-95"
                                >
                                    Mulai Skoring Sekarang
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto px-5 relative z-10 -mt-10">
                {/* Tabs */}
                <div className="flex border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-20 z-20 px-4 rounded-t-2xl shadow-[0_-10px_30px_rgba(0,0,0,0.02)] pt-2 overflow-x-auto no-scrollbar justify-between max-w-5xl mx-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => {
                                setActiveTab(tab);
                            }}
                            className={`py-3 md:py-4 px-4 md:px-6 text-[14px] md:text-[15px] font-bold transition-all relative whitespace-nowrap ${activeTab === tab ? 'text-[#ff7a00]' : 'text-[#738294] hover:text-[#333]'
                                }`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <div className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-[#ff7a00]" />
                            )}
                        </button>
                    ))}
                </div>

                {activeTab === 'Apa Itu UMKM Smart' && (
                    <div className="py-12 max-w-[1440px] mx-auto px-4">
                        {/* Apa itu UMKM Smart? Description */}
                        <div className="mb-14">
                            <h3 className="text-xl font-bold  text-[#333] mb-4 text-left">Apa itu UMKM Smart?</h3>
                            <p className="text-md text-[#55677B] leading-[1.7] text-left">
                                UMKM Smart adalah program pemberdayaan dari LinkUMKM yang dirancang untuk membantu pelaku usaha naik kelas melalui proses digitalisasi dan peningkatan kapasitas. Melalui fitur Skoring, Anda dapat menilai posisi usaha saat ini berdasarkan 11 aspek yang telah ditentukan oleh pakar. Hasil Skoring akan memberikan rekomendasi modul pembelajaran untuk membantu bisnis Anda tumbuh lebih strategis.
                            </p>
                        </div>

                        {/* Benefit dari UMKM Smart */}
                        <div className="mb-14 md:mb-16">
                            <h3 className="text-lg md:text-xl font-bold  text-[#333] mb-5 md:mb-6 text-left px-1 md:px-0">Benefit dari UMKM Smart</h3>
                            <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 no-scrollbar snap-x -mx-4 px-4 md:mx-0 md:px-0">
                                {benefits.map((benefit, idx) => (
                                    <div key={idx} className="min-w-[85%] md:min-w-0 bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100 flex gap-4 md:gap-5 hover:shadow-md transition-shadow snap-start">
                                        <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 bg-blue-50/50 rounded-full flex items-center justify-center p-2.5 md:p-3">
                                            <img src={benefit.icon} alt={benefit.title} className="w-full h-full object-contain" />
                                        </div>
                                        <div className="text-left flex-1">
                                            <h4 className="font-bold text-[#202E3E] text-[16px] md:text-lg mb-1 md:mb-2 leading-tight">{benefit.title}</h4>
                                            <p className="text-[13px] md:text-md text-[#738294] leading-relaxed">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bagaimana Cara mengikuti UMKM Smart */}
                        <div className="mb-20">
                            <h3 className="text-xl font-bold  text-[#333] mb-8 text-left">Bagaimana Cara mengikuti UMKM Smart</h3>

                            <div className="flex flex-col lg:flex-row gap-12 items-center">
                                {/* Steps */}
                                <div className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-5">
                                    {steps.map((step, idx) => (
                                        <div
                                            key={idx}
                                            onClick={() => {
                                                if (step.title === 'Isi Skoring Sekarang' || step.title === 'Lakukan Skoring Ulang untuk Naik Kelas') {
                                                    onNavigate?.('Mulai Skoring');
                                                }
                                            }}
                                            className={`bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 flex gap-4 md:gap-6 hover:shadow-md transition-all group ${(step.title === 'Isi Skoring Sekarang' || step.title === 'Lakukan Skoring Ulang untuk Naik Kelas') ? 'cursor-pointer hover:border-[#0070c0]' : ''
                                                }`}
                                        >
                                            <div className={`w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-xl flex items-center justify-center shadow-inner ${step.bg} ${step.text}`}>
                                                {!step.isSvg ? (
                                                    <img src={step.icon} alt={step.title} className="w-5 h-5 md:w-6 md:h-6 object-contain opacity-80" />
                                                ) : (
                                                    <div className="scale-90 md:scale-100">{step.svg}</div>
                                                )}
                                            </div>
                                            <div className="text-left flex-1">
                                                <h4 className="font-bold text-[#202E3E] text-[16px] md:text-lg mb-1 group-hover:text-[#0070c0] transition-colors">{step.title}</h4>
                                                <p className="text-[13px] md:text-md text-[#738294] leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Illustration */}
                                <div className="w-full lg:w-1/2 flex justify-center">
                                    <div className="relative w-full max-w-[450px]">
                                        <img
                                            src="/umkm-smart-page/what/vector_ilustrasi_umkm_smart.png"
                                            alt="UMKM Smart Illustration"
                                            className="w-full h-auto object-contain"
                                        />
                                        {/* Decorative elements behind image could go here */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Banner */}
                        <div className="bg-gradient-to-r from-[#eaf4fd] to-[#d4e9fc] rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                            {/* Decorative angled shape */}
                            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/20 skew-x-12 transform origin-bottom-right"></div>

                            <div className="text-left z-10 flex-1">
                                <h3 className="text-[22px] font-bold  text-[#0070c0] mb-3">Mulai Perjalanan Hebat UMKM Anda Hari Ini!</h3>
                                <p className="text-[15px] text-[#55677B] max-w-3xl leading-relaxed">
                                    Gabung bersama ribuan pelaku UMKM lainnya. Lakukan Skoring, ikuti pelatihan, dan wujudkan bisnis yang naik kelas bersama LinkUMKM
                                </p>
                            </div>
                            <button
                                onClick={() => {
                                    onNavigate?.('Mulai Skoring');
                                }}
                                className="z-10 bg-[#0070c0] hover:bg-[#005a9e] text-white font-semibold text-[15px] px-8 py-3.5 rounded-xl transition-colors whitespace-nowrap shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                            >
                                Mulai Skoring
                            </button>
                        </div>
                    </div>
                )}

                {activeTab === 'Skoring' && (
                    <div className="py-12 max-w-[1440px] mx-auto px-4">
                        <SkoringTab onNavigate={onNavigate} />
                    </div>
                )}

                {activeTab === 'Modul Reguler' && (
                    <div className="py-12 max-w-[1440px] mx-auto px-4">
                        <ModulRegulerTab onModuleSelect={setSelectedReguler} />
                    </div>
                )}

                {activeTab === 'Modul Tematik' && (
                    <div className="py-12 max-w-[1440px] mx-auto px-4">
                        <ModulTematikTab onModuleSelect={setSelectedTematik} />
                    </div>
                )}

                {activeTab === 'Dashboard Keuangan' && (
                    <div className="py-12 max-w-[1440px] mx-auto px-4">
                        <FinancialDashboard />
                    </div>
                )}

                {activeTab !== 'Apa Itu UMKM Smart' && activeTab !== 'Skoring' && activeTab !== 'Modul Reguler' && activeTab !== 'Modul Tematik' && activeTab !== 'Dashboard Keuangan' && (
                    <div className="py-24 text-center text-gray-400">
                        Konten untuk tab <span className="font-semibold text-gray-500">{activeTab}</span> sedang dalam pengembangan.
                    </div>
                )}

            </div>
        </div>
    );
};

export default UMKMSmartPage;
