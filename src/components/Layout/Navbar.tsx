import React, { useState } from 'react';

interface NavbarProps {
  activeTab: string;
  onNavigate: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, onNavigate }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    'Beranda',
    'Rumah BUMN',
    'Media',
    'Komunitas',
    'UMKM Smart',
    'Konsultasi',
    'Etalase',
    'Layanan Lainnya'
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[1000]">
      {/* Main Navbar */}
      <nav className="h-20 bg-white border-b border-gray-100 flex items-center relative z-[1001] shadow-sm">
        <div className="max-w-[1440px] mx-auto px-5 flex justify-between items-center w-full">
          <div className="flex items-center">
            <img src="/logo/logo-linkumkm.png" alt="LinkUMKM Logo" className="h-10 w-auto object-contain" />
          </div>

          <ul className="hidden lg:flex list-none gap-8 h-full items-center">
            {menuItems.map((item) => (
              <li key={item} className="h-full flex items-center relative group">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item);
                  }}
                  className={`text-sm font-bold transition-all duration-300 relative py-2 ${activeTab === item ? 'text-[#333]' : 'text-[#738294] hover:text-[#333]'
                    }`}
                >
                  {item}
                  {activeTab === item && (
                    <div className="absolute bottom-[-2px] left-0 w-full h-[4px] bg-[#ff7a00] rounded-full"></div>
                  )}
                  <div className={`absolute bottom-[-2px] left-0 w-0 h-[4px] bg-[#ff7a00] rounded-full transition-all duration-300 group-hover:w-full ${activeTab === item ? 'hidden' : 'block opacity-30'}`}></div>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => { setIsSearchOpen(!isSearchOpen); setIsMobileMenuOpen(false); }}
              className={`p-2 rounded-full transition-all duration-300 ${isSearchOpen ? 'bg-gray-100 text-[#ff7a00]' : 'text-[#738294] hover:text-[#333]'}`}
            >
              {isSearchOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              )}
            </button>
            <button className="hidden sm:block bg-[#ff7a00] hover:bg-[#e66e00] text-white px-7 py-2.5 rounded-xl font-bold text-sm shadow-[0_4px_12px_rgba(255,122,0,0.2)] transition-all active:scale-95">
              Masuk / Daftar
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen); setIsSearchOpen(false); }}
              className="lg:hidden p-2 text-[#738294] hover:text-[#333] transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden absolute left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out transform z-[990] overflow-hidden ${isMobileMenuOpen ? 'top-20 max-h-screen opacity-100 pointer-events-auto' : 'top-10 max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col py-4 px-6 gap-2 max-h-[70vh] overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                onNavigate(item);
                setIsMobileMenuOpen(false);
              }}
              className={`text-left text-sm font-bold py-3.5 border-b border-gray-50 transition-colors ${activeTab === item ? 'text-[#0070c0]' : 'text-gray-600'}`}
            >
              {item}
            </button>
          ))}
          <button className="sm:hidden mt-4 w-full bg-[#ff7a00] hover:bg-[#e66e00] text-white px-7 py-3 rounded-xl font-bold text-sm shadow-[0_4px_12px_rgba(255,122,0,0.2)] transition-all active:scale-95">
            Masuk / Daftar
          </button>
        </div>
      </div>

      {/* Slide-down Search Bar */}
      <div className={`absolute left-0 top-20 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-500 ease-in-out transform z-[1000] ${isSearchOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="max-w-[1440px] mx-auto px-5 py-8">
          <div className="relative flex items-center">
            <svg className="absolute left-6 text-[#AAB4C1]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Cari berita, modul, atau layanan LinkUMKM..."
              className="w-full h-16 pl-16 pr-32 bg-[#F8FBFF] border-2 border-[#E9EFF5] focus:border-[#ff7a00] rounded-2xl outline-none text-lg font-medium text-[#202E3E] transition-all placeholder-[#AAB4C1] shadow-inner"
              autoFocus={isSearchOpen}
            />
            <button className="absolute right-4 bg-[#ff7a00] hover:bg-[#e66e00] text-white px-8 py-3 rounded-xl font-bold transition-all shadow-md active:scale-95">
              Cari
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 items-center">
            <span className="text-sm font-semibold text-[#738294]">Pencarian Populer:</span>
            {['Modul UMKM', 'Rumah BUMN', 'Scoring', 'Pojok Inspirasi'].map((tag) => (
              <button key={tag} className="text-sm font-bold text-[#333] px-4 py-1.5 bg-gray-50 border border-gray-100 rounded-full hover:bg-gray-100 transition-colors">
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search Overlay/Dimmer */}
      {(isSearchOpen || isMobileMenuOpen) && (
        <div
          onClick={() => { setIsSearchOpen(false); setIsMobileMenuOpen(false); }}
          className="fixed inset-0 bg-black/20 z-[900] transition-opacity duration-300 lg:hidden block mt-20"
        />
      )}
    </header>
  );
};

export default Navbar;
