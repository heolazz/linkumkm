import React, { useState, useMemo } from 'react';

// --- Interfaces ---
interface Module {
    id: number;
    title: string;
    category: string;
    lessons: number;
    bg: string;
    type: string;
    locked?: boolean;
    recommended?: boolean;
    sector?: string[];
    specialTrack?: string;
    duration?: string;
}

interface LevelData {
    title: string;
    level: string;
    modules: Module[];
    locked?: boolean;
}

interface ModuleJourneyPathProps {
    levels: LevelData[];
    onModuleSelect?: (module: any) => void;
}

// --- Mission Data (Branded 'Link-' Tracks) ---
const MISSIONS = [
    {
        id: 'Link-Permodalan',
        title: 'Link-Permodalan',
        desc: 'Menghubungkan usaha Anda dengan akses pembiayaan bank (KUR) melalui tata kelola keuangan yang bankable.',
        color: 'emerald'
    },
    {
        id: 'Link-Global',
        title: 'Link-Global',
        desc: 'Membuka akses pasar internasional melalui pendalaman standar kualitas dan logistik ekspor.',
        color: 'blue'
    },
    {
        id: 'Link-Legalitas',
        title: 'Link-Legalitas',
        desc: 'Menghubungkan bisnis Anda dengan kepastian hukum melalui NIB, Sertifikasi Halal, hingga HAKI.',
        color: 'purple'
    },
    {
        id: 'Link-Pemasaran',
        title: 'Link-Pemasaran',
        desc: 'Menghubungkan produk Anda dengan pasar digital yang lebih luas melalui optimasi konten dan live selling.',
        color: 'orange'
    }
];

const ModuleJourneyPath: React.FC<ModuleJourneyPathProps> = ({ levels, onModuleSelect }) => {
    // --- Mock User Data (Replicating "Performance Belajar" Data Context) ---
    const userData = {
        sector: 'Kuliner',
        weaknesses: ['Manajemen Keuangan', 'Legalitas'],
        currentLevel: 'Tradisional Teladan',
        scoring: [
            { aspect: 'Keuangan', score: 35, icon: '💰' },
            { aspect: 'Legalitas', score: 42, icon: '⚖️' },
            { aspect: 'Pemasaran', score: 78, icon: '📢' },
            { aspect: 'Operasional', score: 65, icon: '⚙️' },
            { aspect: 'SDM', score: 50, icon: '👥' },
            { aspect: 'Inovasi', score: 88, icon: '💡' },
            { aspect: 'Pasar', score: 72, icon: '🎯' },
            { aspect: 'Sosial', score: 90, icon: '🌱' },
            { aspect: 'Kepemimpinan', score: 60, icon: '👑' },
            { aspect: 'Digitalisasi', score: 45, icon: '💻' },
            { aspect: 'Rantai Pasok', score: 55, icon: '🔗' },
        ]
    };

    // --- States ---
    const [selectedModuleId, setSelectedModuleId] = useState<number | string | null>(null);
    const [activeFilter, setActiveFilter] = useState<'focus' | 'sector' | 'special'>('focus');
    const [selectedMission, setSelectedMission] = useState<string | null>(null);

    // --- Data Enrichment ---
    const enrichedLevels = useMemo(() => {
        return levels.map((level, lIndex) => ({
            ...level,
            modules: level.modules.map((mod, mIndex) => {
                const globalIndex = lIndex * 10 + mIndex;
                const isPdfType = globalIndex % 2 === 0;
                return {
                    ...mod,
                    type: isPdfType ? 'Modul PDF' : 'Video Pelatihan',
                    duration: mod.lessons > 0 ? `${mod.lessons * 8 + 10}m` : "15m",
                    sector: globalIndex % 3 === 0 ? ["Kuliner", "Jasa"] : (globalIndex % 3 === 1 ? ["Fashion"] : ["Kriya", "Pertanian"]),
                    specialTrack: globalIndex % 4 === 1 ? "Link-Global" : (globalIndex % 4 === 3 ? "Link-Permodalan" : (globalIndex % 4 === 2 ? "Link-Legalitas" : (globalIndex % 5 === 0 ? "Link-Pemasaran" : null)))
                };
            })
        }));
    }, [levels]);

    // --- Filtering Logic ---
    const filteredLevels = useMemo(() => {
        return enrichedLevels.map(level => {
            const matches = level.modules.filter(mod => {
                if (activeFilter === 'focus') return userData.weaknesses.includes(mod.category);
                if (activeFilter === 'sector') return mod.sector?.includes(userData.sector);
                if (activeFilter === 'special') return mod.specialTrack === selectedMission;
                return true;
            });
            return { ...level, modules: matches };
        }).filter(level => level.modules.length > 0 || level.locked);
    }, [enrichedLevels, activeFilter, selectedMission, userData.sector, userData.weaknesses]);

    return (
        <div className="flex flex-col items-center py-4 relative w-full overflow-hidden min-h-screen bg-white">

            {/* 1. SELECTION HEADER - Enhanced Mapping Style */}
            <div className="w-full max-w-5xl px-4 z-[60] mb-8">
                <div className="bg-white border border-gray-100 rounded-xl p-1.5 flex flex-wrap md:flex-nowrap gap-1 shadow-sm relative">

                    {/* Track 1: Focus */}
                    <div className="flex-1 relative">
                        <button
                            onClick={() => setActiveFilter('focus')}
                            className={`w-full p-5 rounded-lg transition-all text-left flex flex-col justify-between h-[135px] relative overflow-hidden ${activeFilter === 'focus' ? 'bg-[#0070c0] text-white shadow-md' : 'bg-[#fdfdfd] border border-gray-50 hover:bg-gray-50'}`}
                        >
                            <div className="flex justify-between items-start">
                                <span className={`text-[11px] font-bold uppercase tracking-widest ${activeFilter === 'focus' ? 'text-white/80' : 'text-[#0070c0]'}`}>01. Fokus Personal</span>
                                <svg className={`w-5 h-5 ${activeFilter === 'focus' ? 'text-white/40' : 'text-gray-200'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <div>
                                <h4 className={`text-[17px] font-bold leading-tight ${activeFilter === 'focus' ? 'text-white' : 'text-[#333]'}`}>Perbaiki Kelemahan</h4>
                                <p className={`text-[12px] font-medium leading-relaxed mt-1 ${activeFilter === 'focus' ? 'text-white/70' : 'text-gray-400'}`}>
                                    Berdasarkan skormu: <span className={activeFilter === 'focus' ? 'text-white underline' : 'text-[#0070c0] underline'}>{userData.weaknesses.join(' & ')}</span>
                                </p>
                            </div>
                        </button>
                        {activeFilter === 'focus' && <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0070c0] rotate-45 z-10"></div>}
                    </div>

                    {/* Track 2: Sector */}
                    <div className="flex-1 relative">
                        <button
                            onClick={() => setActiveFilter('sector')}
                            className={`w-full p-5 rounded-lg transition-all text-left flex flex-col justify-between h-[135px] relative overflow-hidden ${activeFilter === 'sector' ? 'bg-[#0070c0] text-white shadow-md' : 'bg-[#fdfdfd] border border-gray-50 hover:bg-gray-50'}`}
                        >
                            <div className="flex justify-between items-start">
                                <span className={`text-[11px] font-bold uppercase tracking-widest ${activeFilter === 'sector' ? 'text-white/80' : 'text-[#0070c0]'}`}>02. Relevansi Sektor</span>
                                <svg className={`w-5 h-5 ${activeFilter === 'sector' ? 'text-white/40' : 'text-gray-200'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                            </div>
                            <div>
                                <h4 className={`text-[17px] font-bold leading-tight ${activeFilter === 'sector' ? 'text-white' : 'text-[#333]'}`}>Sektor {userData.sector}</h4>
                                <p className={`text-[12px] font-medium leading-relaxed mt-1 ${activeFilter === 'sector' ? 'text-white/70' : 'text-gray-400'}`}>
                                    Khusus usaha bidang <span className={activeFilter === 'sector' ? 'text-white underline' : 'text-[#0070c0] underline font-bold'}>{userData.sector}</span>.
                                </p>
                            </div>
                        </button>
                        {activeFilter === 'sector' && <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0070c0] rotate-45 z-10"></div>}
                    </div>

                    {/* Track 3: Special Track */}
                    <div className="flex-1 relative">
                        <button
                            onClick={() => {
                                setActiveFilter('special');
                                if (!selectedMission) setSelectedMission(MISSIONS[0].id);
                            }}
                            className={`w-full p-5 rounded-lg transition-all text-left flex flex-col justify-between h-[135px] relative overflow-hidden ${activeFilter === 'special' ? 'bg-[#0070c0] text-white shadow-md' : 'bg-[#fdfdfd] border border-gray-50 hover:bg-gray-50'}`}
                        >
                            <div className="flex justify-between items-start">
                                <span className={`text-[11px] font-bold uppercase tracking-widest ${activeFilter === 'special' ? 'text-white/80' : 'text-[#0070c0]'}`}>03. Misi Strategis</span>
                                <svg className={`w-5 h-5 ${activeFilter === 'special' ? 'text-white/40' : 'text-gray-200'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-7l.5.5" /></svg>
                            </div>
                            <div>
                                <h4 className={`text-[17px] font-bold leading-tight ${activeFilter === 'special' ? 'text-white' : 'text-[#333]'}`}>{selectedMission || 'Akselerasi Bisnis'}</h4>
                                <p className={`text-[12px] font-medium leading-relaxed mt-1 ${activeFilter === 'special' ? 'text-white/70' : 'text-gray-400'}`}>
                                    Tujuan percepatan naik kelas.
                                </p>
                            </div>
                        </button>
                        {activeFilter === 'special' && <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0070c0] rotate-45 z-10"></div>}
                    </div>

                </div>

                {/* Mission Selection Panel (Clean Cards, No Icons) */}
                {activeFilter === 'special' && (
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 animate-fade-in-up">
                        {MISSIONS.map((mission) => (
                            <button
                                key={mission.id}
                                onClick={() => setSelectedMission(mission.id)}
                                className={`p-5 rounded-xl border-2 flex flex-col gap-3 text-left transition-all relative ${selectedMission === mission.id
                                    ? 'bg-[#0070c0]/5 border-[#0070c0] shadow-md scale-[1.02]'
                                    : 'bg-white border-gray-100 hover:border-blue-100'}`}
                            >
                                <div className="flex justify-between items-center">
                                    <h5 className={`font-bold text-[15px] ${mission.id === selectedMission ? 'text-[#0070c0]' : 'text-[#333]'}`}>{mission.title}</h5>
                                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${mission.id === selectedMission ? 'border-[#0070c0] bg-[#0070c0]' : 'border-gray-200'}`}>
                                        {mission.id === selectedMission && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                                    </div>
                                </div>
                                <p className="text-[12px] text-gray-500 font-medium leading-relaxed italic">
                                    {mission.desc}
                                </p>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Selection Summary Overlay (The "Mapping" Anchor) - Fixed Spacing */}
            <div className="z-50 sticky top-[160px] mb-10 bg-white/80 backdrop-blur-md px-6 py-2.5 rounded-full border border-gray-100 shadow-sm flex items-center justify-between min-w-[300px] md:min-w-[450px] animate-fade-in">
                <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Jalur Aktif:</span>
                    <div className="flex items-center gap-2">
                        <span className="text-[12px] font-bold text-[#0070c0]">
                            {activeFilter === 'focus' ? '01. Fokus Personal' : (activeFilter === 'sector' ? '02. Relevansi Sektor' : '03. Misi Strategis')}
                        </span>
                        <span className="text-gray-300">/</span>
                        <span className="text-[12px] font-bold text-gray-600">
                            {activeFilter === 'focus' ? 'Perbaiki Kelemahan' : (activeFilter === 'sector' ? userData.sector : selectedMission)}
                        </span>
                    </div>
                </div>
                {activeFilter === 'focus' && (
                    <div className="hidden md:flex items-center gap-2 ml-4 pl-4 border-l border-gray-100">
                        <div className="w-2 h-2 rounded-full bg-[#0070c0] animate-pulse"></div>
                        <span className="text-[11px] font-bold text-[#0070c0] uppercase tracking-tight">Butuh Perhatian Utama</span>
                    </div>
                )}
            </div>

            {/* NEW: SKORING ASPEK PANEL (Only for Focus Track) */}
            {activeFilter === 'focus' && (
                <div className="w-full max-w-5xl px-4 mb-12 animate-fade-in-up">
                    <div className="bg-[#fcfcfc] border border-gray-100 rounded-3xl p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                            <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" /></svg>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                            <div>
                                <h3 className="text-[18px] font-bold text-[#333]">Statistik Kapasitas Usaha Anda</h3>
                                <p className="text-[13px] text-gray-500 mt-1">Analisis 11 parameter untuk peta perjalanan belajar Anda.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
                            {userData.scoring?.map((item, idx) => {
                                return (
                                    <div key={idx} className="flex flex-col gap-2">
                                        <div className="flex justify-between items-end">
                                            <span className="text-[12px] font-bold text-gray-600 truncate mr-2">{item.aspect}</span>
                                            <span className="text-[11px] font-black text-[#0070c0]">{item.score}%</span>
                                        </div>
                                        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                            <div
                                                className="h-full rounded-full transition-all duration-1000 bg-[#0070c0]"
                                                style={{ width: `${item.score}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-10 pt-6 border-t border-gray-200/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">Target Utama:</span>
                                <div className="flex gap-2">
                                    {userData.weaknesses.map((w, i) => (
                                        <span key={i} className="px-3 py-1 bg-blue-50 text-[#0070c0] text-[11px] font-black rounded-lg border border-blue-100 uppercase">{w}</span>
                                    ))}
                                </div>
                            </div>
                            <p className="text-[12px] text-gray-500 font-medium italic">
                                *Selesaikan modul di bawah untuk meningkatkan skor aspek yang rendah.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Journey Header Segment */}
            <div className="mb-10 text-center">
                <span className="text-[11px] font-black text-[#0070c0] uppercase tracking-[0.5em] opacity-40">Mulai Perjalanan</span>
            </div>

            {/* Main Journey Path Rendering */}
            <div className="relative w-full flex flex-col items-center">
                {/* BACKDROP for Closing Detail (Mobile-Friendly Close) */}
                {selectedModuleId && (
                    <div
                        className="fixed inset-0 z-[65] cursor-default bg-black/5"
                        onClick={() => setSelectedModuleId(null)}
                    ></div>
                )}
                <div className="absolute top-0 bottom-0 w-[2px] bg-gray-100 rounded-full left-1/2 -translate-x-1/2 z-0"></div>

                {filteredLevels.map((level, lIdx) => (
                    <div key={`lvl-${lIdx}`} className="w-full flex flex-col items-center relative py-10">
                        {/* Level Header (Simplified Branding) */}
                        <div className="z-20 mb-10">
                            <div className={`relative px-10 py-6 rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.03)] border flex flex-col items-center min-w-[300px] bg-white transition-all ${level.locked ? 'border-gray-100 grayscale opacity-70' : 'border-[#0070c0]/20'}`}>
                                <span className={`text-[11px] font-bold uppercase tracking-[0.3em] mb-1.5 ${level.locked ? 'text-gray-300' : 'text-[#0070c0]'}`}>{level.level}</span>
                                <h3 className="text-[24px] font-bold text-[#1c2127]">{level.title}</h3>
                                {!level.locked && (
                                    <div className="mt-4 flex gap-3">
                                        <div className="px-4 py-1.5 bg-[#f8f9fa] border border-gray-100 text-[#333] text-[11px] font-bold rounded-sm uppercase tracking-wider">{level.modules.length} Modul</div>
                                        <button className="px-4 py-1.5 bg-[#ff7a00] text-white text-[11px] font-bold rounded-sm uppercase tracking-wider shadow-sm hover:bg-orange-500">Ganti Level</button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Modules Flow */}
                        <div className="w-full flex flex-col items-center relative gap-4">
                            {level.modules.map((mod, mIdx) => {
                                const isLeft = mIdx % 2 === 0;
                                const xOffset = isLeft ? 'md:-translate-x-32 lg:-translate-x-44' : 'md:translate-x-32 lg:translate-x-44';
                                const isMatch = (activeFilter === 'special' && mod.specialTrack === selectedMission) ||
                                    (activeFilter === 'focus' && userData.weaknesses.includes(mod.category)) ||
                                    (activeFilter === 'sector' && mod.sector?.includes(userData.sector));
                                const isSelected = selectedModuleId === mod.id;

                                // Format color logic
                                const isVideo = mod.type?.toLowerCase().includes('video');
                                const isPDF = mod.type?.toLowerCase().includes('pdf') || mod.type?.toLowerCase().includes('modul');

                                return (
                                    <div key={`mod-${mod.id}`} onClick={(e) => { e.stopPropagation(); setSelectedModuleId(isSelected ? null : mod.id); }} className={`group flex flex-col items-center transition-all ${xOffset} ${isMatch ? 'scale-105' : 'scale-95 grayscale-[0.3]'} ${isSelected ? 'z-[80]' : 'z-10'}`}>
                                        <div className="relative">
                                            {/* Node Visual (Rectangular/Rounded like Catalog Cards) */}
                                            <div className={`w-28 h-28 rounded-2xl flex flex-col items-center justify-center transition-all shadow-md relative border-b-4 bg-white ${level.locked ? 'border-gray-100' : `${isMatch ? 'border-[#0070c0]' : 'border-gray-100'}`} ${isSelected ? 'shadow-[0_0_30px_rgba(0,112,192,0.2)]' : ''}`}>
                                                <div className={`w-12 h-12 rounded-lg mb-1.5 flex items-center justify-center ${level.locked ? 'bg-gray-50' : (mod.bg || 'bg-[#55B5E6]')}`}>
                                                    <div className="text-white font-black text-[18px]">{mIdx + 1}</div>
                                                </div>
                                                <span className="text-[10px] font-bold text-gray-400 group-hover:text-[#0070c0]">VIEW DETAILS</span>

                                                {/* Match Indicator Dot (Small, clean) */}
                                                {isMatch && !level.locked && (
                                                    <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#ff7a00] border-2 border-white shadow-sm"></div>
                                                )}
                                            </div>

                                            {/* Hover Detail Panel (Clean White Style) */}
                                            <div className={`absolute top-1/2 ${isLeft ? 'left-full ml-10' : 'right-full mr-10'} -translate-y-1/2 bg-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-gray-100 p-0 overflow-hidden min-w-[340px] transition-all z-[90] ${isSelected ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 hidden md:block'}`} onClick={(e) => e.stopPropagation()}>
                                                {/* Video Thumbnail Section (Conditional) */}
                                                {isVideo && (
                                                    <div className={`w-full aspect-video ${mod.bg || 'bg-[#55B5E6]'} relative flex items-center justify-center group/vid overflow-hidden`}>
                                                        {/* Play Button Icon Overlay */}
                                                        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transition-transform group-hover/vid:scale-110 shadow-lg">
                                                            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1.5"></div>
                                                        </div>
                                                        <div className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded">
                                                            VIDEO PELATIHAN
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="p-8">
                                                    <div className="flex flex-col gap-5">
                                                        <div className="flex flex-col gap-1.5">
                                                            <div className="flex flex-wrap gap-2 mb-1.5">
                                                                <div className="bg-[#f8f9fa] text-[#0070c0] text-[11px] font-bold px-4 py-1.5 rounded-sm uppercase tracking-wider">{mod.category}</div>
                                                                {mod.specialTrack && <div className="bg-emerald-50 text-emerald-600 text-[11px] font-bold px-4 py-1.5 rounded-sm uppercase tracking-wider">MISI: {mod.specialTrack.toUpperCase()}</div>}
                                                            </div>
                                                            <h5 className="font-bold text-[#333] text-[18px] leading-snug">{mod.title}</h5>
                                                        </div>

                                                        {/* Format & Duration info */}
                                                        <div className="flex items-center gap-4 py-4 border-t border-gray-50">
                                                            <div className={`px-3 py-1 rounded-sm text-[11px] font-black uppercase tracking-tight border ${isVideo ? 'bg-orange-50 border-orange-100 text-orange-600' : (isPDF ? 'bg-blue-50 border-blue-100 text-blue-600' : 'bg-gray-50 border-gray-100 text-gray-600')}`}>
                                                                {mod.type}
                                                            </div>
                                                            <span className="text-gray-200">|</span>
                                                            <span className="text-[13px] text-gray-400 font-bold">{mod.duration} Estimasi</span>
                                                        </div>

                                                        <button onClick={() => onModuleSelect && onModuleSelect(mod)} className="w-full py-4 bg-[#0070c0] text-white text-[13px] font-bold rounded-lg shadow-sm hover:bg-[#005fa3] transition-all uppercase tracking-widest">
                                                            {isVideo ? 'PUTAR VIDEO' : 'BACA MODUL'}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Name Label below the node */}
                                        <div className="mt-4 text-center px-4">
                                            <h4 className={`text-[14px] font-bold max-w-[180px] leading-tight mb-1.5 ${level.locked ? 'text-gray-300' : 'text-[#333]'}`}>{mod.title}</h4>
                                            {!level.locked && (
                                                <div className="flex flex-col items-center">
                                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{mod.category}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}

                {/* Final Goal (Clean) */}
                <div className="z-20 my-20">
                    <div className="relative p-12 bg-[#1c2127] rounded-[3.5rem] shadow-xl flex flex-col items-center border-[6px] border-white/5 transition-transform hover:scale-105">
                        <h3 className="text-white text-[28px] font-black uppercase tracking-tight text-center leading-[0.9]">MENJADI <br /><span className="text-[#ff7a00]">UMKM MODERN</span></h3>
                        <p className="text-gray-500 text-[11px] font-bold uppercase tracking-[0.4em] mt-5 opacity-50">TUJUAN UTAMA</p>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.4s ease-out forwards;
                }
                ::-webkit-scrollbar {
                  width: 6px;
                }
                ::-webkit-scrollbar-track {
                  background: transparent;
                }
                ::-webkit-scrollbar-thumb {
                  background: #e2e8f0;
                  border-radius: 10px;
                }
            `}</style>
        </div>
    );
};

export default ModuleJourneyPath;
