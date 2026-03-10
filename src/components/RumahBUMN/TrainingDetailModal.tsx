import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface TrainingData {
    id: number;
    title: string;
    provider: string;
    description: string;
    date: string;
    time: string;
    image: string;
    link?: string;
}

interface TrainingDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: TrainingData | null;
}

const TrainingDetailModal: React.FC<TrainingDetailModalProps> = ({ isOpen, onClose, data }) => {
    const [timeLeft, setTimeLeft] = useState({ hari: '00', jam: '00', menit: '00', detik: '00' });
    const [mounted, setMounted] = useState(false);

    // Ensure portal only renders on client
    useEffect(() => {
        setMounted(true);
    }, []);

    // Funksi untuk memparsing string tanggal Indonesia ke Date object
    // Format input: "Kamis, 12 Februari 2026"
    const parseIndonesianDate = (dateStr: string, timeStr: string) => {
        try {
            const months: { [key: string]: number } = {
                'Januari': 0, 'Februari': 1, 'Maret': 2, 'April': 3, 'Mei': 4, 'Juni': 5,
                'Juli': 6, 'Agustus': 7, 'September': 8, 'Oktober': 9, 'November': 10, 'Desember': 11
            };

            const parts = dateStr.split(', ')[1].split(' ');
            const day = parseInt(parts[0]);
            const month = months[parts[1]];
            const year = parseInt(parts[2]);
            const timeParts = timeStr.split(' ')[0].split(':');
            const hours = parseInt(timeParts[0]);
            const minutes = parseInt(timeParts[1]);

            return new Date(year, month, day, hours, minutes);
        } catch (e) {
            return new Date(2026, 1, 12, 13, 0); // Fallback
        }
    };

    // prevent body scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            // Optional: prevent scroll on html too for iOS Safari
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }

        // Cleanup function to ensure scroll is restored if component unmounts
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen || !data) return;

        const targetDate = parseIndonesianDate(data.date, data.time);

        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                const d = Math.floor(difference / (1000 * 60 * 60 * 24));
                const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const m = Math.floor((difference / 1000 / 60) % 60);
                const s = Math.floor((difference / 1000) % 60);

                setTimeLeft({
                    hari: d.toString().padStart(2, '0'),
                    jam: h.toString().padStart(2, '0'),
                    menit: m.toString().padStart(2, '0'),
                    detik: s.toString().padStart(2, '0')
                });
            } else {
                setTimeLeft({ hari: '00', jam: '00', menit: '00', detik: '00' });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [isOpen, data]);

    if (!isOpen || !data || !mounted) return null;

    // Extract day, month, year for the UI
    const dateParts = data.date.split(', ');
    const dayName = dateParts[0];
    const fullDate = dateParts[1].split(' ');
    const dayNum = fullDate[0];
    const monthAndYear = `${fullDate[1]} ${fullDate[2]}`;

    const modalContent = (
        <div
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/50 backdrop-blur-[2px] transition-opacity duration-300"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-full overflow-hidden flex flex-col relative animate-fade-in-up pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="p-5 flex items-start justify-between border-b border-gray-100 shrink-0">
                    <h2 className="text-[#00aaff] text-xl font-bold leading-tight pr-8">
                        {data.title}
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-1 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600 outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div className="overflow-y-auto overflow-x-hidden flex-1 no-scrollbar bg-white">
                    <div className="w-full relative aspect-[16/9] overflow-hidden bg-gray-50">
                        <img
                            src={data.image}
                            alt={data.title}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className="p-5 space-y-6">
                        {/* Info Row: Date, Time, Link and Countdown */}
                        <div className="bg-[#f8fbff] rounded-xl p-4 flex flex-col md:flex-row gap-5 items-center md:items-start shrink-0">
                            {/* Left Side: Date, Time, Link */}
                            <div className="flex-1 w-full space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex flex-col">
                                        <span className="text-[11px] text-gray-500 uppercase font-bold tracking-wider">{dayName}</span>
                                        <div className="flex items-baseline gap-1.5">
                                            <span className="text-[#0070bb] text-2xl font-black">{dayNum}</span>
                                            <span className="text-[#0070bb] text-[13px] font-bold">{monthAndYear}</span>
                                        </div>
                                    </div>
                                    <div className="w-[1px] h-8 bg-gray-200 mx-1"></div>
                                    <div className="flex flex-col">
                                        <span className="text-[11px] text-gray-500 uppercase font-bold tracking-wider">Pukul</span>
                                        <span className="text-[#0070bb] text-[15px] font-black mt-0.5">{data.time}</span>
                                    </div>
                                </div>

                                {data.link && (
                                    <div className="flex items-center gap-2 text-[#0070c0] text-[13px] font-semibold hover:underline cursor-pointer group">
                                        <div className="bg-[#00aaff] rounded-full p-1.5 shadow-sm group-hover:scale-110 transition-transform">
                                            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                            </svg>
                                        </div>
                                        <span className="truncate max-w-[250px]">{data.link}</span>
                                    </div>
                                )}
                            </div>

                            {/* Right Side: Countdown */}
                            <div className="flex gap-2 shrink-0">
                                {[
                                    { label: 'Hari', value: timeLeft.hari },
                                    { label: 'Jam', value: timeLeft.jam },
                                    { label: 'Menit', value: timeLeft.menit },
                                    { label: 'Detik', value: timeLeft.detik }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex flex-col items-center">
                                        <div className="bg-white border border-gray-100 rounded-lg w-12 h-14 flex items-center justify-center shadow-sm">
                                            <span className="text-gray-700 font-extrabold text-lg">{item.value}</span>
                                        </div>
                                        <span className="text-[9px] text-gray-400 mt-1 uppercase font-black tracking-tight">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-2 shrink-0">
                            <button className="w-full bg-[#28a745] hover:bg-[#218838] text-white font-bold py-4 rounded-xl shadow-[0_4px_15px_rgba(40,167,69,0.3)] transition-all transform hover:scale-[1.01] active:scale-[0.98]">
                                Detail Pelatihan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};

export default TrainingDetailModal;

