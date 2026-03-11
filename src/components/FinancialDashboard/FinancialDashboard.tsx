import React, { useState, useEffect } from 'react';
import {
    FinancialDashboardOverview,
    JournalTransactions,
    LedgerBook,
    FinancialReports,
    FinancialNav
} from './index';

const FinancialDashboard: React.FC = () => {
    const [activeSection, setActiveSection] = useState<'Dashboard' | 'Jurnal' | 'Buku Besar' | 'Laporan'>('Dashboard');
    const [isLocked, setIsLocked] = useState(true);
    const [pin, setPin] = useState('');

    // Mock user greeting
    const [greeting, setGreeting] = useState('');
    const [userName] = useState('UMKM Hebat');

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setGreeting('Selamat Pagi');
        else if (hour < 15) setGreeting('Selamat Siang');
        else if (hour < 18) setGreeting('Selamat Sore');
        else setGreeting('Selamat Malam');

        // Check if unlocked recently (session based)
        const unlocked = sessionStorage.getItem('linkumkm_fin_unlocked');
        if (unlocked) setIsLocked(false);
    }, []);

    const handleUnlock = (e: React.FormEvent) => {
        e.preventDefault();
        if (pin === '1234') {
            setIsLocked(false);
            sessionStorage.setItem('linkumkm_fin_unlocked', 'true');
        } else {
            alert('PIN Salah! (Coba: 1234)');
        }
    };

    if (isLocked) {
        return (
            <div className="flex items-center justify-center min-h-[50vh] py-12">
                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-[#E9EFF5] shadow-xl w-full max-w-md text-center animate-in zoom-in duration-300">
                    <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-secondary">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-text-main mb-2">Akses Terkunci</h3>
                    <p className="text-text-muted font-medium mb-10 text-sm">Masukkan PIN Keuangan Anda untuk melihat data laporan.</p>

                    <form onSubmit={handleUnlock} className="space-y-6">
                        <div className="flex justify-center gap-3">
                            <input
                                type="password"
                                maxLength={4}
                                placeholder="****"
                                className="w-32 h-16 text-center text-3xl font-bold bg-bg-secondary border-2 border-[#E9EFF5] focus:border-secondary rounded-2xl outline-none tracking-[0.5em] text-text-main"
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                                autoFocus
                            />
                        </div>
                        <button type="submit" className="w-full py-4 bg-secondary hover:bg-secondary-hover text-white rounded-2xl font-bold text-lg shadow-lg active:scale-95 transition-all">
                            Buka Laporan
                        </button>
                    </form>
                    <p className="mt-8 text-[11px] font-bold text-text-muted uppercase tracking-widest">Gunakan PIN default: 1234</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-[70vh] pb-32 lg:pb-10 relative animate-in fade-in duration-1000 scroll-smooth">
            {/* Header / Top Section - Premium Mobile Gradient */}
            <div className="px-1 md:px-0 mb-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-5 group">
                        <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-secondary to-secondary-hover flex items-center justify-center text-white shadow-xl transform group-hover:rotate-6 transition-transform duration-500">
                            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h2 className="text-2xl md:text-4xl font-bold text-black/70 tracking-tighter">
                                    {greeting},
                                </h2>
                                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse mt-1"></span>
                            </div>
                            <h2 className="text-xl md:text-3xl font-bold text-black/70 tracking-tight -mt-1 uppercase">
                                {userName}
                            </h2>
                            <div className="flex items-center gap-2 mt-1 bg-gray-100 w-fit px-2 py-0.5 rounded-lg border border-gray-200">
                                <span className="text-[10px] md:text-xs font-bold text-black/80 uppercase tracking-widest leading-none">
                                    Status: Profit +12%
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation - Hidden on Mobile */}
                    <div className="hidden lg:flex bg-bg-secondary p-2 rounded-3xl border border-[#E9EFF5] shadow-sm">
                        {(['Dashboard', 'Jurnal', 'Buku Besar', 'Laporan'] as const).map((section) => (
                            <button
                                key={section}
                                onClick={() => setActiveSection(section)}
                                className={`px-8 py-3 rounded-2xl font-bold text-sm transition-all ${activeSection === section
                                    ? 'bg-white text-black shadow-md scale-[1.02]'
                                    : 'text-text-muted hover:text-black'
                                    }`}
                            >
                                {section}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content Area - Optimized Padding */}
            <div className="flex-1 animate-in fade-in slide-in-from-bottom-2 duration-700">
                <div className="max-w-6xl mx-auto">
                    {activeSection === 'Dashboard' && <FinancialDashboardOverview onNavigate={setActiveSection} />}
                    {activeSection === 'Jurnal' && <JournalTransactions />}
                    {activeSection === 'Buku Besar' && <LedgerBook />}
                    {activeSection === 'Laporan' && <FinancialReports />}
                </div>
            </div>

            {/* Mobile-First Bottom Navigation */}
            <FinancialNav activeSection={activeSection} onSelect={setActiveSection} />
        </div>
    );
};

export default FinancialDashboard;
