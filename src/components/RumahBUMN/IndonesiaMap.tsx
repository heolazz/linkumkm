import React from 'react';

const IndonesiaMap: React.FC = () => {
    return (
        <div className="relative w-full bg-slate-50/50 rounded-[40px] p-6 lg:p-12 overflow-hidden border border-slate-100/50 shadow-[0_20px_50px_rgba(0,112,192,0.05)]">
            <div className="absolute top-8 left-8 z-10">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff7a00] animate-pulse"></div>
                    <span className="text-sm font-bold text-slate-600 uppercase tracking-widest">Live Presence</span>
                </div>
                <h4 className="text-4xl  font-black text-slate-800">Indonesia</h4>
                <p className="text-slate-400 mt-1 max-w-[200px] text-sm">Jaringan Rumah BUMN yang tersebar di seluruh penjuru nusantara.</p>
            </div>

            <div className="mt-28 lg:mt-0 flex justify-center items-center">
                <img
                    src="/rumah-bumn-page/indonesia.svg"
                    alt="Peta Indonesia"
                    className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.05)]"
                />
            </div>

            {/* Map Statistics */}
            <div className="absolute bottom-8 right-8 flex gap-8 z-10 bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/50 shadow-xl">
                <div className="text-right">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Total UMKM</p>
                    <p className="text-2xl font-black text-[#0070c0]">2.4M+</p>
                </div>
                <div className="text-right">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Rumah BUMN</p>
                    <p className="text-2xl font-black text-[#ff7a00]">250+</p>
                </div>
            </div>
        </div>
    );
};

export default IndonesiaMap;
