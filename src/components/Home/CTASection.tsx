import React from 'react';

const CTASection: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-[1440px] mx-auto px-5">
                <div className="bg-[#e3f2fd] rounded-2xl flex flex-col lg:flex-row items-center relative overflow-hidden min-h-[320px]">
                    {/* Background Circle Decoration */}
                    <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[60%] bg-[#d1e9ff] rounded-l-full translate-x-1/4 scale-y-125 hidden lg:block"></div>

                    {/* Text Content */}
                    <div className="flex-1 p-8 lg:p-16 relative z-10 text-center lg:text-left">
                        <h2 className="text-2xl lg:text-3xl  font-bold text-[#333] mb-4 leading-tight">
                            Mulai Perjalanan Hebat UMKM Anda Hari Ini!
                        </h2>
                        <p className="text-sm lg:text-base text-[#555] mb-8 max-w-[500px] mx-auto lg:mx-0 leading-relaxed font-medium">
                            Bersama kami, mulai perjalanan hebat UMKM Anda hari ini dengan layanan pendampingan dan pelatihan yang siap membantu bisnis Anda
                        </p>
                        <button className="bg-[#0070c0] hover:bg-[#005ba1] text-white px-8 py-3 rounded-lg font-bold text-sm transition-all shadow-md active:scale-95">
                            Mulai Sekarang
                        </button>
                    </div>

                    {/* Illustration Content */}
                    <div className="flex-1 w-full lg:w-auto h-full flex justify-end items-end relative z-10 p-0">
                        <img
                            src="/Home-page/ilustrasi_banner_bawah.png"
                            alt="UMKM Illustration"
                            className="max-h-[320px] lg:max-h-[380px] w-auto object-contain object-bottom"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
