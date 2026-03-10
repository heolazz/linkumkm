import React, { useRef } from 'react';

interface Category {
    title: string;
    count: string;
    icon: string;
}

const ProductSection: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const categories: Category[] = [
        { title: 'Kuliner', count: '13559 Produk', icon: '/Home-page/icon-produk/1_icon_kuliner.png' },
        { title: 'Jasa', count: '8927 Produk', icon: '/Home-page/icon-produk/2_icon_jasa.png' },
        { title: 'Fashion & Aksesoris', count: '4592 Produk', icon: '/Home-page/icon-produk/3_icon_fashion_dan_aksesoris.png' },
        { title: 'Kerajinan/Kriya', count: '2878 Produk', icon: '/Home-page/icon-produk/4_icon_kerajinan_dan_kriya.png' },
        { title: 'Kesehatan & Kecantikan', count: '2841 Produk', icon: '/Home-page/icon-produk/5_icon_kesehatan_dan_kecantikan.png' },
        { title: 'Pertanian & Perkebunan', count: '1954 Produk', icon: '/Home-page/icon-produk/6_icon_pertanian_dan_perkebunan.png' },
        { title: 'Komputer & Elektronik', count: '1422 Produk', icon: '/Home-page/icon-produk/7_icon_komputer_dan_elektronik.png' },
        { title: 'Perikanan & Peternakan', count: '1120 Produk', icon: '/Home-page/icon-produk/8_icon_perikanan_dan_peternakan.png' },
        { title: 'Rumah & Interior', count: '984 Produk', icon: '/Home-page/icon-produk/9_icon_rumah_dan_interior.png' },
        { title: 'Otomotif', count: '756 Produk', icon: '/Home-page/icon-produk/10_icon_otomotif.png' },
        { title: 'Perlengkapan Anak', count: '642 Produk', icon: '/Home-page/icon-produk/11_icon_perlengkapan_anak_dan_mainan.png' },
        { title: 'Handphone & Aksesoris', count: '589 Produk', icon: '/Home-page/icon-produk/12_icon_handphone_dan_aksesoris.png' },
        { title: 'Buku & Alat Tulis', count: '432 Produk', icon: '/Home-page/icon-produk/13_icon_buku_dan_alat_tulis.png' },
        { title: 'Hobi & Olahraga', count: '398 Produk', icon: '/Home-page/icon-produk/14_icon_hobi_dan_olahraga.png' },
        { title: 'Seni & Musik', count: '245 Produk', icon: '/Home-page/icon-produk/15_icon_seni_dan_musik.png' },
    ];

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - (clientWidth * 0.5) : scrollLeft + (clientWidth * 0.5);
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-10 md:py-24 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-5">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6 md:mb-12 gap-4">
                    <div className="w-full md:max-w-3xl">
                        <h2 className="text-2xl md:text-3xl  font-bold text-[#202E3E] mb-3 md:mb-4 leading-tight">
                            Hasil Produk UMKM
                        </h2>
                        <p className="w-full text-[13px] md:text-base text-[#738294] leading-relaxed font-sans font-medium">
                            Jelajahi berbagai kategori produk unggulan dari para pelaku UMKM binaan LinkUMKM di seluruh Indonesia.
                        </p>
                    </div>
                    <a href="#" className="hidden md:flex text-[#0059a4] font-bold text-base hover:underline items-center gap-1 group whitespace-nowrap font-sans">
                        Lihat Semua <span className="text-[1.3rem] group-hover:translate-x-1 transition-transform">›</span>
                    </a>
                </div>

                <div className="relative group">
                    <div
                        ref={scrollRef}
                        className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory no-scrollbar"
                    >
                        {categories.map((cat, index) => (
                            <div
                                key={index}
                                className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] lg:w-[calc(14.28%-14px)] min-w-[170px] flex-shrink-0 bg-white rounded-lg p-5 border border-gray-100 shadow-sm snap-start hover:shadow-md transition-all flex flex-col justify-between h-[185px] relative overflow-hidden cursor-pointer"
                            >
                                {/* Diagonal decoration pattern */}
                                <div
                                    className="absolute inset-0 z-0 opacity-40"
                                    style={{
                                        background: 'linear-gradient(135deg, white 60%, #f7f9fc 0%)'
                                    }}
                                />

                                <div className="relative z-10">
                                    <h3 className="text-sm lg:text-[14px] font-bold text-[#2d2d2d] mb-1 font-sans leading-tight">{cat.title}</h3>
                                    <p className="text-[11px] text-[#888] font-medium font-sans">{cat.count}</p>
                                </div>

                                <div className="flex justify-end items-end relative z-10 mt-auto">
                                    <img
                                        src={cat.icon}
                                        alt={cat.title}
                                        className="w-12 h-12 lg:w-14 lg:h-14 object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center text-gray-400 hover:text-secondary opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 z-30 flex"
                    >
                        ‹
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center text-gray-400 hover:text-secondary opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 z-30 flex"
                    >
                        ›
                    </button>
                </div>

                {/* Mobile Lihat Semua Button */}
                <div className="mt-6 md:hidden flex justify-center w-full pb-4">
                    <button className="w-full py-3.5 bg-white border border-gray-200 text-center text-[14px] font-bold text-[#0059a4] rounded-xl active:scale-95 transition-transform flex items-center justify-center gap-2 shadow-sm">
                        Lihat Semua Produk <span className="text-[1.2rem] leading-none mb-0.5">›</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
