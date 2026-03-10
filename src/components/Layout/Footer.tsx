import React from 'react';

interface FooterProps {
    onNavigate: (tab: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    return (
        <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
            <div className="max-w-[1440px] mx-auto px-5">
                <div className="flex flex-col xl:flex-row gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="xl:w-[320px] shrink-0">
                        <div className="mb-6">
                            <img
                                src="/logo/logo-linkumkm.png"
                                alt="LinkUMKM Logo"
                                className="h-10 w-auto object-contain cursor-pointer transition-transform active:scale-95"
                                onClick={() => onNavigate('Beranda')}
                            />
                        </div>
                        <p className="text-[14px] text-[#55677B] mb-8 leading-[1.6] font-medium max-w-[280px]">
                            Tingkatkan keahlianmu dengan berbagai modul pelatihan UMKM, konsultasi dengan pakar, dan pahami kategori potensi bisnismu melalui penilaian skoring assesment naik kelas.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-[#2D333A] hover:text-[#0070c0] transition-colors group cursor-pointer">
                                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-50 group-hover:bg-[#0070c0] transition-all">
                                    <svg className="w-4 h-4 text-[#0070c0] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" /></svg>
                                </div>
                                <span className="text-[14px] font-bold">087889990829</span>
                            </div>
                            <div className="flex items-center gap-3 text-[#2D333A] hover:text-[#0070c0] transition-colors group cursor-pointer">
                                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-50 group-hover:bg-[#0070c0] transition-all">
                                    <svg className="w-4 h-4 text-[#0070c0] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <span className="text-[14px] font-bold">redaksi@bririns.or.id</span>
                            </div>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12">
                        {/* Rumah BUMN */}
                        <div>
                            <h4 className="text-[15px] font-bold text-[#2D333A] mb-6">Rumah BUMN</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-[13px] text-[#738294] hover:text-[#0070c0] transition-colors font-medium">Lokasi Rumah BUMN</a></li>
                                <li><a href="#" className="text-[13px] text-[#738294] hover:text-[#0070c0] transition-colors font-medium">Pelatihan Offline</a></li>
                                <li><a href="#" className="text-[13px] text-[#738294] hover:text-[#0070c0] transition-colors font-medium">Pelatihan Online</a></li>
                            </ul>
                        </div>

                        {/* Media */}
                        <div>
                            <h4 className="text-[15px] font-bold text-[#2D333A] mb-6">Media</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-[13px] text-[#738294] hover:text-[#0070c0] transition-colors font-medium">Berita</a></li>
                                <li><a href="#" className="text-[13px] text-[#738294] hover:text-[#0070c0] transition-colors font-medium">Video</a></li>
                                <li><a href="#" className="text-[13px] text-[#738294] hover:text-[#0070c0] transition-colors font-medium">Figur Inspiratif</a></li>
                                <li><a href="#" className="text-[13px] text-[#738294] hover:text-[#0070c0] transition-colors font-medium">Infografis</a></li>
                            </ul>
                        </div>

                        {/* Komunitas */}
                        <div>
                            <h4 className="text-[15px] font-bold text-[#2D333A] mb-6">Komunitas</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-[13px] text-[#738294] hover:text-[#0070c0] transition-colors font-medium">Komunitas</a></li>
                                <li><a href="#" className="text-[13px] text-[#738294] hover:text-[#0070c0] transition-colors font-medium">Etalase</a></li>
                            </ul>
                        </div>

                        {/* UMKM Smart */}
                        <div>
                            <h4 className="text-[15px] font-bold text-[#2D333A] mb-6">UMKM Smart</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-[13px] text-[#738294] hover:text-[#0070c0] transition-colors font-medium">Skoring UMKM</a></li>
                                <li><a href="#" className="text-[13px] text-[#738294] hover:text-[#0070c0] transition-colors font-medium">Modul Reguler</a></li>
                                <li><a href="#" className="text-[13px] text-[#738294] hover:text-[#0070c0] transition-colors font-medium">Modul Tematik</a></li>
                            </ul>
                        </div>

                        {/* Coaching Clinic */}
                        <div>
                            <h4 className="text-[15px] font-bold text-[#2D333A] mb-6">Coaching Clinic</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-[13px] text-[#738294] hover:text-[#0070c0] transition-colors font-medium">Coaching Clinic</a></li>
                            </ul>
                        </div>

                        {/* Bantuan */}
                        <div>
                            <h4 className="text-[15px] font-bold text-[#2D333A] mb-6">Bantuan</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-[13px] text-[#738294] hover:text-[#0070c0] transition-colors font-medium">Privacy Policy</a></li>
                                <li><a href="#" className="text-[13px] text-[#738294] hover:text-[#0070c0] transition-colors font-medium">Terms and Condition</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[13px] text-[#738294] font-medium font-sans">© 2025 LinkUMKM. All Rights Reserved.</p>
                    <div className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-4">
                        {[
                            { name: 'YT', icon: <svg className="w-5 h-5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg> },
                            { name: 'WA', icon: <svg className="w-5 h-5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg> },
                            { name: 'FB', icon: <svg className="w-5 h-5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg> },
                            { name: 'LI', icon: <svg className="w-5 h-5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg> },
                            { name: 'IG', icon: <svg className="w-5 h-5 md:w-4 md:h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg> },
                            { name: 'X', icon: <svg className="w-5 h-5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> }
                        ].map((social) => (
                            <a
                                key={social.name}
                                href="#"
                                className="w-10 h-10 md:w-9 md:h-9 bg-gray-50 hover:bg-[#0070c0] hover:text-white rounded-full flex items-center justify-center text-[#738294] transition-all shadow-sm hover:shadow-md"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
