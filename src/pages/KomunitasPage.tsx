import React from 'react';

const KomunitasPage: React.FC = () => {
    const categories = [
        { name: 'Jasa', icon: '/komunitas-page/icon/icon_jasa.png' },
        { name: 'Kerajinan', icon: '/komunitas-page/icon/icon_kerajinan_dan_kriya.png' },
        { name: 'Perikanan', icon: '/komunitas-page/icon/icon_perikanan_dan_peternakan.png' },
        { name: 'Kuliner', icon: '/komunitas-page/icon/icon_kuliner.png' },
        { name: 'Teknologi', icon: '/komunitas-page/icon/icon_komputer_dan_elektronik.png' },
        { name: 'Pertanian', icon: '/komunitas-page/icon/icon_pertanian_dan_perkebunan.png' },
        { name: 'Fashion', icon: '/komunitas-page/icon/icon_fashion_dan_aksesoris.png' },
        { name: 'Hobi & Olahraga', icon: '/komunitas-page/icon/icon_hobi_dan_olahraga.png' },
    ];

    const popularCommunities = [
        { id: 1, name: 'Komunitas UKM Jawa Barat', image: '/komunitas-page/komunitas/ukm-jawa-barat.jpg' },
        { id: 2, name: 'Komunitas Produk Halal', image: '/komunitas-page/komunitas/produk-halal.png' },
        { id: 3, name: 'Paguyuban brilian', image: '/komunitas-page/komunitas/paguyuban-brilian.jpg' },
        { id: 4, name: 'Webinar MELATONIN...', image: '/komunitas-page/komunitas/webinar-melatonin.jpeg' },
        { id: 5, name: 'Komunitas UMKM DKI Jakarta', image: '/komunitas-page/komunitas/umkm-jakarta.jpg' },
        { id: 6, name: 'Komunitas RB BRI Selindo', image: '/komunitas-page/komunitas/rb-bri-selindo.jpg' },
    ];

    const newCommunities = [
        { id: 7, name: 'KOMUNITAS UMKM ALAS LEUSER', image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=400' },
        { id: 8, name: 'Balai Latihan Kerja (BLK) Alas Leuser', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400' },
        { id: 9, name: 'Gamer', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400' },
        { id: 10, name: 'Manajemen Rantai Pasok Cerdas...', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400' },
        { id: 11, name: 'UMKM Sumatra Barat', image: 'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=400' },
        { id: 12, name: 'UMKM Jambi', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400' },
        { id: 13, name: 'UMKM Go Cashless bersama BRI', image: 'https://images.unsplash.com/photo-1554224155-16974a44853b?auto=format&fit=crop&q=80&w=400' },
        { id: 14, name: 'Strategi Jitu UMKM Menguasai Pelua...', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400' },
        { id: 15, name: 'ASKKOPI JAWA TENGAH', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400' },
        { id: 16, name: 'Skincare herbal', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=400' },
        { id: 17, name: 'Webinar Peluang Baru bagi UMKM...', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
        { id: 18, name: 'Webinar Strategi Pemasaran hemat...', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400' },
    ];

    return (
        <div className="bg-white min-h-screen pt-24 pb-20 overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-[30%] left-[-100px] w-64 h-64 border border-[#bbdcf6] rounded-full sm:block hidden" style={{ borderRightWidth: '2px', borderBottomWidth: '2px' }} />
            <div className="absolute top-[40%] left-10 w-24 h-24 hidden sm:grid grid-cols-4 gap-2 opacity-50">
                {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-[#bbdcf6] rounded-full" />
                ))}
            </div>

            <div className="absolute bottom-[20%] right-[-50px] w-96 h-96 border border-[#bbdcf6] rounded-full sm:block hidden" style={{ borderLeftWidth: '2px', borderTopWidth: '2px' }} />
            <div className="absolute bottom-[30%] right-20 w-24 h-24 hidden sm:grid grid-cols-4 gap-2 opacity-50">
                {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-[#bbdcf6] rounded-full" />
                ))}
            </div>


            <div className="max-w-[1440px] mx-auto px-5 relative z-10">
                <h1 className="text-3xl  font-bold text-[#333] text-center mb-16">Komunitas</h1>

                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
                    <div className="max-w-2xl px-4 lg:px-12">
                        <h2 className="text-2xl md:text-[32px] leading-tight  font-bold text-[#0070c0] mb-4">
                            Temui seseorang dengan hobi atau profesi yang sama, setelah itu menjadi teman, sahabat dan keluarga, bersama komunitas LinkUMKM
                        </h2>
                    </div>
                    <div className="w-full lg:w-[450px]">
                        <img
                            src="/komunitas-page/vector-komunitas.png"
                            alt="Komunitas Illustration"
                            className="w-full h-auto object-contain rounded-2xl"
                        />
                    </div>
                </div>

                {/* Banner CTA */}
                <div className="bg-white border text-left border-gray-100 rounded-2xl p-6 mb-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-[#f0f8ff] rounded-full flex items-center justify-center p-2">
                            <img
                                src="/komunitas-page/komunitas-icon.png"
                                alt="Buat Komunitas"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <span className="text-[#738294] font-bold text-[15px]">Apakah Anda Ingin membuat komunitas?</span>
                    </div>
                    <button className="text-[#ff7a00] font-bold text-[15px] hover:underline flex items-center gap-2 transition-all">
                        Buat Komunitas Anda disini
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                </div>

                {/* Komunitas Umum */}
                <div className="bg-[#fcfdfd] border border-gray-100 rounded-[20px] p-8 mb-16 shadow-sm">
                    <h3 className="text-[17px] font-bold  text-[#55677B] mb-8 text-left">Komunitas Umum</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                        {categories.map((category, idx) => (
                            <div key={idx} className="flex flex-col items-center justify-center bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-gray-100">
                                <div className="w-14 h-14 mb-3 flex items-center justify-center">
                                    <img
                                        src={category.icon}
                                        alt={category.name}
                                        className="w-10 h-10 object-contain"
                                    />
                                </div>
                                <span className="text-[13px] text-[#55677B] font-medium text-center leading-tight">
                                    {category.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Komunitas Terpopuler */}
                <div className="mb-16">
                    <h3 className="text-xl font-bold  text-[#202E3E] mb-6 text-left">Komunitas Terpopuler</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {popularCommunities.map((community) => (
                            <div key={community.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col items-center p-6 cursor-pointer">
                                <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-100 mb-4 bg-white flex items-center justify-center">
                                    <img src={community.image} alt={community.name} className="w-full h-full object-cover" />
                                </div>
                                <h4 className="font-bold  text-[#202E3E] text-[14px] leading-snug text-center line-clamp-2">
                                    {community.name}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Komunitas Terbaru */}
                <div className="mb-12">
                    <h3 className="text-xl font-bold  text-[#202E3E] mb-6 text-left">Komunitas Terbaru</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                        {newCommunities.map((community) => (
                            <div key={community.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col items-center p-6 cursor-pointer">
                                <div className="w-24 h-24 rounded-xl overflow-hidden border border-gray-100 mb-4 bg-gray-50 flex items-center justify-center">
                                    <img src={community.image} alt={community.name} className="w-full h-full object-cover" />
                                </div>
                                <h4 className="font-bold  text-[#202E3E] text-[14px] leading-snug text-center line-clamp-2">
                                    {community.name}
                                </h4>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center mt-12 gap-2">
                        <button className="w-8 h-8 rounded-full bg-[#0070c0]/10 text-[#0070c0] font-bold text-[13px] flex items-center justify-center transition-colors">1</button>
                        <button className="w-8 h-8 rounded-full text-[#738294] hover:bg-gray-100 font-bold text-[13px] flex items-center justify-center transition-colors border border-transparent">2</button>
                        <button className="w-8 h-8 rounded-full text-[#738294] hover:bg-gray-100 font-bold text-[13px] flex items-center justify-center transition-colors border border-transparent">3</button>
                        <button className="w-8 h-8 rounded-full text-[#738294] hover:bg-gray-100 font-bold text-[13px] flex items-center justify-center transition-colors border border-gray-200">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default KomunitasPage;
