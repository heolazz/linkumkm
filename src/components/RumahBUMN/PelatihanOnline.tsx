import React, { useState, useRef, useEffect } from 'react';
import Calendar from '../Common/Calendar';
import SearchableDropdown from '../Common/SearchableDropdown';
import { INDONESIA_PROVINCES, DUMMY_CITIES } from '../../utils/locationData';
import TrainingDetailModal from './TrainingDetailModal';

const dummyPelatihan = [
    {
        id: 1,
        title: "Cara Jitu Public Speaking untuk Scale Up UMKM di Pasar Digital",
        provider: "LinkUMKM",
        description: "Judul pelatihan Online Cara Jitu Public Speaking untuk Scale Up UMKM di Pas...",
        date: "Kamis, 12 Februari 2026",
        time: "13:00 WIB",
        image: "/rumah-bumn-page/Pelatihan-online/1_online.jpeg",
        link: "https://zoom.us/j/2199139150?pwd=XYZ123"
    },
    {
        id: 2,
        title: "Solusi Logistik UMKM Kirim Hemat untuk...",
        provider: "LinkUMKM",
        description: "Judul: Solusi Logistik UMKM Kirim Hemat untuk Efisiensi On-Demand untuk...",
        date: "Rabu, 11 Februari 2026",
        time: "13:00 WIB",
        image: "/rumah-bumn-page/Pelatihan-online/2_online.jpeg",
        link: "https://zoom.us/j/logistik456"
    },
    {
        id: 3,
        title: "Pelatihan Literasi Digital Strategi Pemasaran...",
        provider: "LinkUMKM",
        description: "LinkUMKM Pelatihan Literasi Digital Strategi Pemasaran Digital Terpadu bag...",
        date: "Jumat, 9 Februari 2026",
        time: "10:00 WIB",
        image: "/rumah-bumn-page/Pelatihan-online/3_online.jpeg",
        link: "https://zoom.us/j/literasi789"
    },
    {
        id: 4,
        title: "UMKM Anti Panik Strategi Bertahan dan Bangkit...",
        provider: "LinkUMKM",
        description: "Nama Narasumber: Muhammad Zaki, S.Si, M.M., CHMM Tema Pelatihan: UMKM Anti P...",
        date: "Kamis, 5 Februari 2026",
        time: "14:00 WIB",
        image: "/rumah-bumn-page/Pelatihan-online/4_online.png",
        link: "https://zoom.us/j/antipanik101"
    },
    {
        id: 5,
        title: "UMKM Go Digital bersama ERP...",
        provider: "LinkUMKM",
        description: "Judul pelatihan Online UMKM Go Digital bersama ERP OfficeCentral: Kelola...",
        date: "Kamis, 5 Februari 2026",
        time: "13:00 WIB",
        image: "/rumah-bumn-page/Pelatihan-online/5_online.jpeg",
        link: "https://zoom.us/j/erp202"
    },
    {
        id: 6,
        title: "Pelatihan Literasi Bisnis 7 Relasi Penting agar...",
        provider: "LinkUMKM",
        description: "7 Relasi Penting agar UMKM Tidak Jalan Sendiri...",
        date: "Kamis, 6 Februari 2026",
        time: "09:00 WIB",
        image: "/rumah-bumn-page/Pelatihan-online/6_online.jpeg",
        link: "https://zoom.us/j/literasibisnis303"
    },
    {
        id: 7,
        title: "Teknik Pemasaran Produk untuk UMKM",
        provider: "LinkUMKM",
        description: "Narasumber : Indra Ruswadi Adianto, S.E., M.M...",
        date: "Kamis, 25 Januari 2026",
        time: "13:00 WIB",
        image: "/rumah-bumn-page/Pelatihan-online/7_online.png",
        link: "https://zoom.us/j/pemasaran404"
    },
    {
        id: 8,
        title: "Literasi Digital UMKM Jago SEO Bagaimana...",
        provider: "LinkUMKM",
        description: "SEO UMKM Jago SEO, Bagaimana Caranya Produk Kita Menjadi Halaman 1...",
        date: "Rabu, 24 Januari 2026",
        time: "09:00 WIB",
        image: "/rumah-bumn-page/Pelatihan-online/1_online.jpeg",
        link: "https://zoom.us/j/seo505"
    }
];

const PelatihanCard = ({ data, onClick }: { data: any, onClick: () => void }) => {
    return (
        <div
            onClick={onClick}
            className="bg-white border text-left border-gray-200 rounded-[10px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-row sm:flex-col h-full group sm:hover:-translate-y-1 cursor-pointer"
        >
            <div className="w-2/5 sm:w-full sm:aspect-[4/5] bg-gray-100 relative overflow-hidden shrink-0">
                <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-full object-cover transition-transform duration-500 sm:group-hover:scale-105"
                />
            </div>
            <div className="p-3 sm:p-5 flex flex-col flex-1 min-w-0">
                <h4 className="font-bold text-[#202E3E] text-[13px] sm:text-[16px] leading-[1.3] sm:leading-[1.4] mb-1 sm:mb-2 line-clamp-2 transition-colors group-hover:text-[#0070c0]">
                    {data.title}
                </h4>
                <div className="text-[10px] sm:text-[12px] text-[#738294] font-semibold mb-1 truncate">{data.provider}</div>
                <p className="hidden sm:block text-[13px] text-[#55677B] leading-[1.5] mb-3 line-clamp-2 flex-1">
                    {data.description}
                </p>
                <div className="hidden sm:block mb-4">
                    <span className="text-[#0070c0] hover:text-[#005a9c] text-[13px] font-semibold">Lihat Detail</span>
                </div>

                <div className="pt-2 sm:pt-4 sm:border-t border-gray-100 flex flex-col gap-1 sm:gap-2 mt-auto">
                    <div className="flex items-center text-[#738294] text-[10px] sm:text-[12px] font-medium">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <span className="truncate">{data.date}</span>
                    </div>
                    <div className="flex items-center text-[#738294] text-[10px] sm:text-[12px] font-medium">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span className="truncate">{data.time}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PelatihanOnline: React.FC = () => {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [selectedDateLabel, setSelectedDateLabel] = useState('Pilih Tanggal');
    const [selectedTraining, setSelectedTraining] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const calendarRef = useRef<HTMLDivElement>(null);

    const handleSelectDate = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
        setSelectedDateLabel(date.toLocaleDateString('id-ID', options));
        setIsCalendarOpen(false);
    };

    const handleOpenModal = (training: any) => {
        setSelectedTraining(training);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        // Don't clear selectedTraining immediately to allow exit animation
        setTimeout(() => setSelectedTraining(null), 300);
    };

    // Close calendar on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
                setIsCalendarOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="w-full">
            {/* Search and Filters */}
            <div className="bg-white rounded-[10px] p-4 lg:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 mb-10">
                <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
                    <div className="relative flex-1 w-full">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="text" className="w-full border border-gray-200 rounded-full pl-11 pr-4 py-3 sm:py-2.5 text-[14px] focus:outline-none focus:border-[#0070c0] transition-colors" placeholder="Cari pelatihan..." />
                    </div>

                    <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap gap-3 w-full lg:w-auto items-stretch sm:items-center">
                        <span className="text-[13px] text-gray-500 hidden lg:inline font-medium ml-2">Filter by:</span>
                        <div className="relative w-full sm:flex-1 lg:w-40" ref={calendarRef}>
                            <button
                                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                                className={`w-full border border-gray-200 rounded-full px-5 py-3 sm:py-2.5 text-[13px] outline-none text-left transition-all hover:border-gray-300 flex items-center justify-between
                                    ${selectedDateLabel !== 'Pilih Tanggal' ? 'text-[#0070c0] font-bold border-[#0070c0]/30' : 'text-gray-600'}
                                `}
                            >
                                <span className="truncate">{selectedDateLabel}</span>
                                <svg className={`w-3.5 h-3.5 ml-2 transition-transform shrink-0 ${isCalendarOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </button>

                            {isCalendarOpen && (
                                <Calendar
                                    onSelectDate={handleSelectDate}
                                    onClose={() => setIsCalendarOpen(false)}
                                />
                            )}
                        </div>
                        <div className="w-full sm:flex-1 lg:w-auto z-20">
                            <SearchableDropdown
                                options={INDONESIA_PROVINCES}
                                placeholder="Pilih Provinsi"
                                onSelect={(p) => console.log('Provinsi:', p)}
                            />
                        </div>

                        <div className="w-full sm:flex-1 lg:w-auto z-10">
                            <SearchableDropdown
                                options={DUMMY_CITIES}
                                placeholder="Pilih Kota"
                                showListInitially={false}
                                onSelect={(c) => console.log('Kota:', c)}
                            />
                        </div>

                        <button className="bg-[#ff7a00] hover:bg-[#e06b00] text-white font-bold text-[14px] px-8 py-3 sm:py-2.5 rounded-full transition-colors w-full sm:w-auto shadow-sm mt-2 sm:mt-0">
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {dummyPelatihan.map(item => (
                    <PelatihanCard
                        key={item.id}
                        data={item}
                        onClick={() => handleOpenModal(item)}
                    />
                ))}
            </div>

            {/* Pagination placeholder */}
            <div className="flex justify-center items-center mt-12 gap-2">
                <button className="w-8 h-8 rounded-full bg-[#0070c0]/10 text-[#0070c0] font-bold text-[13px] flex items-center justify-center transition-colors">1</button>
                <button className="w-8 h-8 rounded-full text-[#738294] hover:bg-gray-100 font-bold text-[13px] flex items-center justify-center transition-colors">2</button>
                <button className="w-8 h-8 rounded-full text-[#738294] hover:bg-gray-100 font-bold text-[13px] flex items-center justify-center transition-colors">3</button>
                <button className="w-8 h-8 rounded-full text-[#738294] hover:bg-gray-100 font-bold text-[13px] flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>

            <TrainingDetailModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                data={selectedTraining}
            />
        </div>
    );
};

export default PelatihanOnline;
