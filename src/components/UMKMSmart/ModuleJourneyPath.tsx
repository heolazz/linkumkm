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
    completed?: boolean;
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
                    specialTrack: globalIndex % 4 === 1 ? "Link-Global" : (globalIndex % 4 === 3 ? "Link-Permodalan" : (globalIndex % 4 === 2 ? "Link-Legalitas" : (globalIndex % 5 === 0 ? "Link-Pemasaran" : null))),
                    completed: globalIndex < 4 // Dummy: mark first 4 modules as read
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

    // --- Detail Module Data ---
    const selectedModuleData = useMemo(() => {
        if (!selectedModuleId) return null;
        for (const level of filteredLevels) {
            const found = level.modules.find(m => m.id === selectedModuleId);
            if (found) return found;
        }
        return null;
    }, [selectedModuleId, filteredLevels]);

    return (
        <div className="flex flex-col items-center py-4 relative w-full overflow-hidden min-h-screen bg-white">

            {/* 1. SELECTION HEADER - Enhanced Mapping Style */}
            <div className="w-full max-w-5xl px-4 z-[60] mb-8">
                <div className="bg-white border border-gray-100 rounded-xl p-1.5 flex flex-wrap md:flex-nowrap gap-1 shadow-sm relative">

                    {/* Track 1: Focus */}
                    <div className="flex-1 relative min-w-[140px]">
                        <button
                            onClick={() => setActiveFilter('focus')}
                            className={`w-full p-4 md:p-5 rounded-lg transition-all text-left flex flex-col justify-between h-[110px] md:h-[135px] relative overflow-hidden ${activeFilter === 'focus' ? 'bg-[#0070c0] text-white shadow-md' : 'bg-[#fdfdfd] border border-gray-50 hover:bg-gray-50'}`}
                        >
                            <div className="flex justify-between items-start">
                                <span className={`text-[9px] md:text-[11px] font-bold uppercase tracking-widest ${activeFilter === 'focus' ? 'text-white/80' : 'text-[#0070c0]'}`}>Fokus Personal</span>
                            </div>
                            <div>
                                <h4 className={`text-[14px] md:text-[17px] font-bold leading-tight ${activeFilter === 'focus' ? 'text-white' : 'text-[#333]'}`}>Tingkatkan Kompetensi</h4>
                                <p className={`text-[10px] md:text-[12px] font-medium leading-relaxed mt-0.5 md:mt-1 ${activeFilter === 'focus' ? 'text-white/70' : 'text-gray-400'} line-clamp-1`}>
                                    Ayo perbaiki aspek {userData.weaknesses.join(' & ')}
                                </p>
                            </div>
                        </button>
                        {activeFilter === 'focus' && <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0070c0] rotate-45 z-10 hidden md:block"></div>}
                    </div>

                    {/* Track 2: Sector */}
                    <div className="flex-1 relative min-w-[140px]">
                        <button
                            onClick={() => setActiveFilter('sector')}
                            className={`w-full p-4 md:p-5 rounded-lg transition-all text-left flex flex-col justify-between h-[110px] md:h-[135px] relative overflow-hidden ${activeFilter === 'sector' ? 'bg-[#0070c0] text-white shadow-md' : 'bg-[#fdfdfd] border border-gray-50 hover:bg-gray-50'}`}
                        >
                            <div className="flex justify-between items-start">
                                <span className={`text-[9px] md:text-[11px] font-bold uppercase tracking-widest ${activeFilter === 'sector' ? 'text-white/80' : 'text-[#0070c0]'}`}>Relevansi Sektor</span>
                            </div>
                            <div>
                                <h4 className={`text-[14px] md:text-[17px] font-bold leading-tight ${activeFilter === 'sector' ? 'text-white' : 'text-[#333]'}`}>Kuasai {userData.sector}</h4>
                                <p className={`text-[10px] md:text-[12px] font-medium leading-relaxed mt-0.5 md:mt-1 ${activeFilter === 'sector' ? 'text-white/70' : 'text-gray-400'} line-clamp-1`}>
                                    Pelajari ilmu spesifik di bidang ini.
                                </p>
                            </div>
                        </button>
                        {activeFilter === 'sector' && <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0070c0] rotate-45 z-10 hidden md:block"></div>}
                    </div>

                    {/* Track 3: Special Track */}
                    <div className="flex-1 relative min-w-[140px]">
                        <button
                            onClick={() => {
                                setActiveFilter('special');
                                if (!selectedMission) setSelectedMission(MISSIONS[0].id);
                            }}
                            className={`w-full p-4 md:p-5 rounded-lg transition-all text-left flex flex-col justify-between h-[110px] md:h-[135px] relative overflow-hidden ${activeFilter === 'special' ? 'bg-[#0070c0] text-white shadow-md' : 'bg-[#fdfdfd] border border-gray-50 hover:bg-gray-50'}`}
                        >
                            <div className="flex justify-between items-start">
                                <span className={`text-[9px] md:text-[11px] font-bold uppercase tracking-widest ${activeFilter === 'special' ? 'text-white/80' : 'text-[#0070c0]'}`}>Misi Strategis</span>
                            </div>
                            <div>
                                <h4 className={`text-[14px] md:text-[17px] font-bold leading-tight ${activeFilter === 'special' ? 'text-white' : 'text-[#333]'}`}>{selectedMission?.split('-')[1] || 'Akselerasi'}</h4>
                                <p className={`text-[10px] md:text-[12px] font-medium leading-relaxed mt-0.5 md:mt-1 ${activeFilter === 'special' ? 'text-white/70' : 'text-gray-400'} line-clamp-1`}>
                                    Tujuan naik kelas terukur.
                                </p>
                            </div>
                        </button>
                        {activeFilter === 'special' && <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0070c0] rotate-45 z-10 hidden md:block"></div>}
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
            <div className={`z-[100] sticky top-[120px] md:top-[160px] mb-10 bg-white/90 backdrop-blur-md px-5 md:px-6 py-2 rounded-full border border-gray-100 shadow-lg flex items-center justify-between min-w-[280px] md:min-w-[450px] animate-fade-in transition-all ${selectedModuleId ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Jalur Aktif:</span>
                    <div className="flex items-center gap-2">
                        <span className="text-[12px] font-bold text-[#0070c0]">
                            {activeFilter === 'focus' ? 'Fokus Personal' : (activeFilter === 'sector' ? 'Relevansi Sektor' : 'Misi Strategis')}
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
                {/* BACKDROP for Closing Detail (Responsive) */}
                {selectedModuleId && (
                    <div
                        className="fixed inset-0 z-[110] md:z-[65] cursor-default bg-black/60 md:bg-black/5 backdrop-blur-sm md:backdrop-blur-none animate-fade-in"
                        onClick={() => setSelectedModuleId(null)}
                    ></div>
                )}
                <div className="absolute top-0 bottom-0 w-[2px] bg-gray-100 rounded-full left-1/2 -translate-x-1/2 z-0"></div>
                {/* Orange Progress Line (Dummy: 35% height for demo) */}
                <div className="absolute top-0 w-[2px] bg-[#ff7a00] shadow-[0_0_10px_rgba(255,122,0,0.3)] rounded-full left-1/2 -translate-x-1/2 z-0 transition-all duration-1000" style={{ height: '35%' }}></div>

                {filteredLevels.map((level, lIdx) => (
                    <div key={`lvl-${lIdx}`} className="w-full flex flex-col items-center relative py-10">
                        {/* Level Header (Simplified Branding) */}
                        <div className="z-20 mb-8 md:mb-10 px-4">
                            <div className={`relative px-6 md:px-10 py-5 md:py-6 rounded-2xl shadow-sm border flex flex-col items-center min-w-[280px] md:min-w-[340px] lg:min-w-[400px] bg-white transition-all ${level.locked ? 'border-gray-100 grayscale opacity-70' : 'border-[#0070c0]/20'}`}>
                                <span className={`text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] mb-1 ${level.locked ? 'text-gray-300' : 'text-[#0070c0]'}`}>{level.level}</span>
                                <h3 className="text-[20px] md:text-[24px] font-bold text-[#1c2127] text-center">{level.title}</h3>
                                {!level.locked && (
                                    <div className="mt-4 flex gap-2 md:gap-3">
                                        <div className="px-3 md:px-4 py-1.5 bg-[#f8f9fa] border border-gray-100 text-[#333] text-[10px] md:text-[11px] font-bold rounded-sm uppercase tracking-wider">{level.modules.length} Modul</div>
                                        <button className="px-3 md:px-4 py-1.5 bg-[#ff7a00] text-white text-[10px] md:text-[11px] font-bold rounded-sm uppercase tracking-wider shadow-sm hover:bg-orange-500 transition-colors">Leveling</button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Modules Flow */}
                        <div className="w-full flex flex-col items-center relative gap-4">
                            {level.modules.map((mod, mIdx) => {
                                const isLeft = mIdx % 2 === 0;
                                const xOffset = isLeft ? '-translate-x-8 md:-translate-x-32 lg:-translate-x-44' : 'translate-x-8 md:translate-x-32 lg:translate-x-44';
                                const isMatch = (activeFilter === 'special' && mod.specialTrack === selectedMission) ||
                                    (activeFilter === 'focus' && userData.weaknesses.includes(mod.category)) ||
                                    (activeFilter === 'sector' && mod.sector?.includes(userData.sector));
                                const isSelected = selectedModuleId === mod.id;

                                // Format color logic
                                const isVideo = mod.type?.toLowerCase().includes('video');
                                const isPDF = mod.type?.toLowerCase().includes('pdf') || mod.type?.toLowerCase().includes('modul');

                                return (
                                    <div key={`mod-${mod.id}`} onClick={(e) => { e.stopPropagation(); setSelectedModuleId(isSelected ? null : mod.id); }} className={`group flex flex-col items-center transition-all ${xOffset} ${isMatch ? 'scale-105' : 'scale-95 grayscale-[0.3]'} ${isSelected ? 'z-[80]' : 'z-10 hover:z-[85]'}`}>
                                        <div className="relative">
                                            {/* Node Visual (Rectangular/Rounded like Catalog Cards) */}
                                            <div className={`w-24 h-24 md:w-28 md:h-28 rounded-2xl flex flex-col items-center justify-center transition-all shadow-md relative border-b-4 bg-white ${level.locked ? 'border-gray-100' : `${isMatch ? (mod.completed ? 'border-orange-200' : 'border-[#0070c0]') : 'border-gray-100'}`} ${isSelected ? 'shadow-[0_0_30px_rgba(0,112,192,0.2)]' : ''}`}>
                                                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg mb-1 flex md:mb-1.5 items-center justify-center ${level.locked ? 'bg-gray-50' : (mod.completed ? 'bg-orange-500' : (mod.bg || 'bg-[#55B5E6]'))}`}>
                                                    <div className="text-white font-black text-[16px] md:text-[18px]">
                                                        {mod.completed ? (
                                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                        ) : (
                                                            activeFilter === 'special' ? '' : mIdx + 1
                                                        )}
                                                    </div>
                                                </div>
                                                <span className="text-[9px] md:text-[10px] font-bold text-gray-400 group-hover:text-[#0070c0] uppercase">{mod.completed ? 'Selesai' : 'Detail'}</span>
                                            </div>

                                            {/* DESKTOP ONLY Hover/Click Detail Panel (Clean White Style) */}
                                            <div className={`
                                                hidden md:block
                                                ${isSelected ? 'md:opacity-100 md:scale-100 md:pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none md:group-hover:opacity-100 md:group-hover:scale-100 md:group-hover:pointer-events-auto md:group-hover:delay-150'}
                                                bg-white transition-all duration-300 ease-out z-[120] overflow-hidden
                                                shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-gray-100
                                                md:absolute md:top-1/2 md:-translate-y-1/2 md:rounded-xl md:w-[340px]
                                                ${isLeft ? 'md:left-full md:ml-2' : 'md:right-full md:mr-2'} 
                                            `} onClick={(e) => e.stopPropagation()}>
                                                {/* Visual bridge to prevent hover loss on Desktop */}
                                                <div className={`absolute top-0 bottom-0 ${isLeft ? '-left-6 w-6' : '-right-6 w-6'} bg-transparent`}></div>
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

                                                <div className="p-6 md:p-8">
                                                    <div className="flex flex-col gap-4 md:gap-5">
                                                        <div className="flex flex-col gap-1.5">
                                                            <div className="flex flex-wrap gap-2 mb-1">
                                                                <div className="bg-[#f8f9fa] text-[#0070c0] text-[10px] md:text-[11px] font-bold px-3 md:px-4 py-1.5 rounded-sm uppercase tracking-wider">{mod.category}</div>
                                                                {mod.specialTrack && <div className="bg-emerald-50 text-emerald-600 text-[10px] md:text-[11px] font-bold px-3 md:px-4 py-1.5 rounded-sm uppercase tracking-wider">MISI: {mod.specialTrack.toUpperCase()}</div>}
                                                            </div>
                                                            <h5 className="font-bold text-[#333] text-[16px] md:text-[18px] leading-snug">{mod.title}</h5>
                                                        </div>

                                                        {/* Format & Duration info */}
                                                        <div className="flex items-center gap-4 py-3 md:py-4 border-t border-gray-50">
                                                            <div className={`px-3 py-1 rounded-sm text-[10px] md:text-[11px] font-black uppercase tracking-tight border ${isVideo ? 'bg-orange-50 border-orange-100 text-orange-600' : (isPDF ? 'bg-blue-50 border-blue-100 text-blue-600' : 'bg-gray-50 border-gray-100 text-gray-600')}`}>
                                                                {mod.type}
                                                            </div>
                                                            <span className="text-gray-200">|</span>
                                                            <span className="text-[12px] md:text-[13px] text-gray-400 font-bold">{mod.duration} Estimasi</span>
                                                        </div>

                                                        <button onClick={() => onModuleSelect && onModuleSelect(mod)} className="w-full py-3.5 md:py-4 bg-[#0070c0] text-white text-[12px] md:text-[13px] font-bold rounded-xl shadow-md hover:bg-[#005fa3] transition-all uppercase tracking-widest active:scale-[0.98]">
                                                            {isVideo ? 'PUTAR VIDEO' : 'BACA MODUL'}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Name Label below the node */}
                                        <div className="mt-2 md:mt-4 text-center px-3 py-1.5 md:py-2 bg-white/90 backdrop-blur-md rounded-xl relative z-10 mx-auto max-w-[150px] md:max-w-[190px]">
                                            <h4 className={`text-[12px] md:text-[14px] font-bold leading-tight mb-1 md:mb-1.5 ${level.locked ? 'text-gray-300' : 'text-[#333]'}`}>{mod.title}</h4>
                                            {!level.locked && (
                                                <div className="flex flex-col items-center">
                                                    <p className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">{mod.category}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}

                {/* Final Goal (Branded Style) */}
                <div className="z-20 my-24 group">
                    <div className="relative p-12 bg-gradient-to-br from-[#0070c0] to-[#005fa3] rounded-[3.5rem] shadow-[0_20px_50px_rgba(0,112,192,0.3)] flex flex-col items-center border-[8px] border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-[0_30px_60px_rgba(0,112,192,0.4)] overflow-hidden">
                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform"></div>

                        <h3 className="text-white text-[32px] font-black uppercase tracking-tight text-center leading-[0.9] relative z-10">
                            MENJADI <br />
                            <span className="text-[#ff7a00] drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">UMKM MODERN</span>
                        </h3>
                        <div className="mt-6 flex flex-col items-center relative z-10">
                            <div className="w-12 h-1 bg-white/30 rounded-full mb-4"></div>
                            <p className="text-white/60 text-[11px] font-bold uppercase tracking-[0.5em] text-center">Tujuan Utama Perjalanan</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* MOBILE ONLY GLOBAL BOTTOM SHEET */}
            <div className={`md:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.15)] z-[120] transition-transform duration-300 ease-out overflow-hidden flex flex-col max-h-[85vh] ${selectedModuleId && selectedModuleData ? 'translate-y-0' : 'translate-y-full'}`} onClick={(e) => e.stopPropagation()}>
                <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mt-4 mb-2 shrink-0"></div>

                {selectedModuleData && (
                    <div className="overflow-y-auto no-scrollbar pb-8">
                        {/* Video Thumbnail Section (Conditional) */}
                        {selectedModuleData.type?.toLowerCase().includes('video') && (
                            <div className={`w-full aspect-video ${selectedModuleData.bg || 'bg-[#55B5E6]'} relative flex items-center justify-center group/vid overflow-hidden`}>
                                {/* Play Button Icon Overlay */}
                                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-lg">
                                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1.5"></div>
                                </div>
                                <div className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded">
                                    VIDEO PELATIHAN
                                </div>
                            </div>
                        )}

                        <div className="p-6">
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-wrap gap-2 mb-1">
                                    <div className="bg-[#f8f9fa] text-[#0070c0] text-[10px] font-bold px-3 py-1.5 rounded-sm uppercase tracking-wider">{selectedModuleData.category}</div>
                                    {selectedModuleData.specialTrack && <div className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-3 py-1.5 rounded-sm uppercase tracking-wider">MISI: {selectedModuleData.specialTrack.toUpperCase()}</div>}
                                </div>
                                <h5 className="font-bold text-[#333] text-[16px] leading-snug">{selectedModuleData.title}</h5>

                                {/* Format & Duration info */}
                                <div className="flex items-center gap-4 py-3 border-t border-gray-50 mt-1">
                                    <div className={`px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-tight border ${selectedModuleData.type?.toLowerCase().includes('video') ? 'bg-orange-50 border-orange-100 text-orange-600' : 'bg-blue-50 border-blue-100 text-blue-600'}`}>
                                        {selectedModuleData.type}
                                    </div>
                                    <span className="text-gray-200">|</span>
                                    <span className="text-[12px] text-gray-400 font-bold">{selectedModuleData.duration} Estimasi</span>
                                </div>

                                <button onClick={() => { onModuleSelect && onModuleSelect(selectedModuleData); setSelectedModuleId(null); }} className="w-full py-3.5 bg-[#0070c0] text-white text-[12px] font-bold rounded-xl shadow-md hover:bg-[#005fa3] transition-all uppercase tracking-widest active:scale-[0.98] mt-2">
                                    {selectedModuleData.type?.toLowerCase().includes('video') ? 'PUTAR VIDEO' : 'BACA MODUL'}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
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
