import React from 'react';

interface FinancialNavProps {
    activeSection: 'Dashboard' | 'Jurnal' | 'Buku Besar' | 'Laporan';
    onSelect: (section: 'Dashboard' | 'Jurnal' | 'Buku Besar' | 'Laporan') => void;
}

const FinancialNav: React.FC<FinancialNavProps> = ({ activeSection, onSelect }) => {
    const navItems = [
        {
            id: 'Dashboard',
            label: 'Dashboard',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
            )
        },
        {
            id: 'Jurnal',
            label: 'Jurnal',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
            )
        },
        {
            id: 'Buku Besar',
            label: 'Buku',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
            )
        },
        {
            id: 'Laporan',
            label: 'Laporan',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
            )
        }
    ];

    return (
        <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur-2xl border border-white/20 z-50 px-8 py-3 flex justify-between items-center shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[2.5rem] animate-in slide-in-from-bottom-8 duration-700">
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => onSelect(item.id as any)}
                    className="flex flex-col items-center gap-1 transition-all relative"
                >
                    <div className={`p-2 rounded-2xl transition-all duration-500 transform ${activeSection === item.id
                        ? 'bg-black/5 scale-110 text-black opacity-100'
                        : 'bg-transparent scale-100 text-[#738294] opacity-40'
                        } active:scale-95`}>
                        {item.icon}
                    </div>
                    <span className={`text-[9px] uppercase tracking-[0.15em] transition-all duration-300 relative z-10 ${activeSection === item.id
                        ? 'font-semibold text-black opacity-100'
                        : 'font-medium text-[#738294] opacity-50'
                        }`}>
                        {item.label}
                    </span>

                    {/* Animated Indicator */}
                    {activeSection === item.id && (
                        <div className="absolute -bottom-1 w-1 h-1 bg-black rounded-full shadow-[0_0_8px_rgba(0,0,0,0.1)] animate-pulse"></div>
                    )}
                </button>
            ))}
        </div>
    );
};

export default FinancialNav;
