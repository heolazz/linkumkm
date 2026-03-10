import React, { useState, useRef } from 'react';

const EtalasePage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('Semua Produk');
    const scrollRef = useRef<HTMLDivElement>(null);

    const mainFilters = [
        { name: 'Semua Produk', icon: '/etalase-page/market-icon.png' },
        { name: 'Produk Rekomendasi', icon: '/etalase-page/star-icon.png' },
        { name: 'Kemnaker', icon: '/etalase-page/Kemnaker.png' },
        { name: 'Aswa Pemari', icon: 'https://linkumkm.id/assets/img/etalase/icon-aswapemari.png' },
        { name: 'Perempuan IKN', icon: 'https://linkumkm.id/assets/img/etalase/icon-perempuan-ikn.png' },
        { name: 'DAP UK', icon: 'https://linkumkm.id/assets/img/etalase/icon-dap-uk.png' },
        { name: 'Brincubator', icon: 'https://linkumkm.id/assets/img/etalase/icon-brincubator.png' }
    ];

    const categories = [
        { title: 'Otomotif', icon: '/etalase-page/icon-produk/10_icon_otomotif.png' },
        { title: 'Buku dan Alat Tulis', icon: '/etalase-page/icon-produk/13_icon_buku_dan_alat_tulis.png' },
        { title: 'Kuliner', icon: '/etalase-page/icon-produk/1_icon_kuliner.png' },
        { title: 'Korajinan/Kriya', icon: '/etalase-page/icon-produk/4_icon_kerajinan_dan_kriya.png' },
        { title: 'Fashion & Aksesoris', icon: '/etalase-page/icon-produk/3_icon_fashion_dan_aksesoris.png' },
        { title: 'Kesehatan & Kecantikan', icon: '/etalase-page/icon-produk/5_icon_kesehatan_dan_kecantikan.png' },
        { title: 'Perlengkapan Anak & Mainan', icon: '/etalase-page/icon-produk/11_icon_perlengkapan_anak_dan_mainan.png' },
        { title: 'Jasa', icon: '/etalase-page/icon-produk/2_icon_jasa.png' },
        { title: 'Pertanian & Perkebunan', icon: '/etalase-page/icon-produk/6_icon_pertanian_dan_perkebunan.png' },
        { title: 'Komputer & Elektronik', icon: '/etalase-page/icon-produk/7_icon_komputer_dan_elektronik.png' },
    ];

    const products = [
        { id: 1, title: 'Pipa Hdpe 2 Inci 100Meter Vinilon', price: 'Rp.3.000.000', location: 'KOTA JAKARTA TIMUR', img: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=400&auto=format&fit=crop' },
        { id: 2, title: 'SEWA JAS COWO', price: 'Rp.100.000', location: 'KABUPATEN KUDUS', img: 'https://images.unsplash.com/photo-1594932224010-75f12ac2ebd1?q=80&w=400&auto=format&fit=crop' },
        { id: 3, title: 'import mesin', price: 'Rp.200.000', location: 'KOTA JAKARTA TIMUR', img: 'https://images.unsplash.com/photo-1565515007151-700195227a87?q=80&w=400&auto=format&fit=crop' },
        { id: 4, title: 'Sriyati jok variasi interior', price: 'Rp.500.000', location: 'KOTA MATARAM', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=400&auto=format&fit=crop' },
        { id: 5, title: 'PANEL DISTRIBUSI LISTRIK 1 PHASE...', price: 'Rp.2.000.000', location: 'KOTA MEDAN', img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=400&auto=format&fit=crop' },
        { id: 6, title: 'Jasa Import Lapangan Padel...', price: 'Rp.175.000', location: 'KOTA JAKARTA TIMUR', img: 'https://images.unsplash.com/photo-1554062614-697d51913db5?q=80&w=400&auto=format&fit=crop' },
        { id: 7, title: 'Jasa Import barang Jepang ke Jakarta...', price: 'Rp.220.000', location: 'KOTA JAKARTA TIMUR', img: 'https://images.unsplash.com/photo-1521334885634-9552f105e941?q=80&w=400&auto=format&fit=crop' },
        { id: 8, title: 'Jasa import door to door service', price: 'Rp.185.000', location: 'KOTA JAKARTA TIMUR', img: 'https://images.unsplash.com/photo-1586528116311-ad86d7735626?q=80&w=400&auto=format&fit=crop' },
        { id: 9, title: 'Jasa import barang dari USA to Jakarta...', price: 'Rp.200.000', location: 'KOTA JAKARTA TIMUR', img: 'https://images.unsplash.com/photo-1620440053702-60fc6477ee4f?q=80&w=400&auto=format&fit=crop' },
        { id: 10, title: 'Jasa Import Mesin Kapal Resmi...', price: 'Rp.150.000', location: 'KOTA JAKARTA TIMUR', img: 'https://images.unsplash.com/photo-1544216717-3bbf52512659?q=80&w=400&auto=format&fit=crop' },
        { id: 11, title: 'Jasa Import Spare Part Mesin Kapal...', price: 'Rp.150.000', location: 'KOTA JAKARTA TIMUR', img: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=400&auto=format&fit=crop' },
        { id: 12, title: 'Jasa Impor Barang Industri dan...', price: 'Rp.155.000', location: 'KOTA JAKARTA TIMUR', img: 'https://images.unsplash.com/photo-1586528116311-ad86d7735626?q=81&w=400&auto=format&fit=crop' },
    ];

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - (clientWidth * 0.4) : scrollLeft + (clientWidth * 0.4);
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-white min-h-screen pt-24 pb-20">
            <div className="max-w-6xl mx-auto px-5">
                <h1 className="text-3xl font-bold text-center text-[#333] mb-8 ">Etalase</h1>

                {/* Search and Filters Section */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
                    {/* Search Bar */}
                    <div className="relative max-w-[1100px] mx-auto mb-6">
                        <input
                            type="text"
                            placeholder="cari produk"
                            className="w-full pl-12 pr-6 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-[14px] focus:outline-none focus:ring-2 focus:ring-[#0070c0]/20 transition-all "
                        />
                        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    {/* Filter Icons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {mainFilters.map((filter) => (
                            <button
                                key={filter.name}
                                onClick={() => setActiveFilter(filter.name)}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all text-[13px] font-bold ${activeFilter === filter.name
                                    ? 'bg-[#e4f3fb] border-[#0070c0] text-[#0070c0] shadow-sm'
                                    : 'bg-white border-gray-100 text-gray-500 hover:border-gray-200 hover:bg-gray-50'
                                    }`}
                            >
                                <img src={filter.icon} alt={filter.name} className="w-5 h-5 object-contain" />
                                {filter.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Promo Banner */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-10 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-all">
                    <div className="flex items-center gap-6 text-left">
                        <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center shrink-0">
                            <img src="/etalase-page/market-icon.png" alt="market" className="w-10 h-10 object-contain" />
                        </div>
                        <div>
                            <h3 className="text-[16px] font-bold text-[#333] mb-1">Apakah Anda memiliki produk yang ingin dijual?</h3>
                            <p className="text-[14px] text-gray-500">Promosikan produk dan tingkatkan penjualan Anda bersama kami</p>
                        </div>
                    </div>
                    <button className="text-[#ff7a00] font-bold text-[15px] hover:translate-x-1 transition-transform flex items-center gap-2 group whitespace-nowrap">
                        Jual Produk Anda disini <span className="text-[20px] leading-none">›</span>
                    </button>
                </div>

                {/* Categories Section */}
                <div className="mb-12">
                    <h2 className="text-[18px] font-bold text-[#333] mb-8 text-left">kategori Produk</h2>

                    <div className="relative group/cats">
                        <div
                            ref={scrollRef}
                            className="flex gap-4 overflow-x-auto pb-4 no-scrollbar snap-x"
                        >
                            {categories.map((cat, idx) => (
                                <div key={idx} className="min-w-[155px] flex-shrink-0 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col items-center justify-between h-[160px] hover:shadow-md transition-all cursor-pointer group snap-start">
                                    <div className="w-16 h-16 flex items-center justify-center mb-2">
                                        <img src={cat.icon} alt={cat.title} className="w-14 h-14 object-contain group-hover:scale-110 transition-transform" />
                                    </div>
                                    <span className="text-[13px] font-bold text-[#333] text-center leading-tight">{cat.title}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-400 hover:text-[#0070c0] z-10 transition-all opacity-0 group-hover/cats:opacity-100 border border-gray-50"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-400 hover:text-[#0070c0] z-10 transition-all opacity-0 group-hover/cats:opacity-100 border border-gray-50"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="mb-14">
                    <h2 className="text-[18px] font-bold text-[#333] mb-8 text-left">Semua Produk</h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5">
                        {products.map((product) => (
                            <div key={product.id} className="bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition-all group">
                                <div className="aspect-square bg-gray-50 overflow-hidden">
                                    <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-4 flex flex-col items-start flex-1">
                                    <h4 className="text-[13px] font-bold text-[#333] line-clamp-2 text-left mb-2 h-10 leading-snug">
                                        {product.title}
                                    </h4>
                                    <p className="text-[14px] font-black text-gray-700 group-hover:text-[#ff7a00] transition-colors mb-3">{product.price}</p>
                                    <div className="mt-auto flex items-center gap-1.5 pt-2 border-t border-gray-50 w-full text-left">
                                        <div className="w-3.5 h-3.5 text-gray-400">
                                            <svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                        </div>
                                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tight truncate">{product.location}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center gap-2 mt-12">
                        <button className="w-8 h-8 flex items-center justify-center bg-[#e4f3fb] text-[#0070c0] rounded-lg text-[13px] font-bold">1</button>
                        <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-lg text-[13px] font-bold">2</button>
                        <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-lg text-[13px] font-bold">3</button>
                        <button className="w-8 h-8 flex items-center justify-center text-[#ff7a00] border border-gray-200 hover:bg-orange-50 rounded-lg">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EtalasePage;
