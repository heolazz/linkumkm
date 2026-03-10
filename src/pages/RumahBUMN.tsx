import React, { useState } from 'react';
import IndonesiaMap from '../components/RumahBUMN/IndonesiaMap';
import PelatihanOnline from '../components/RumahBUMN/PelatihanOnline';
import PelatihanOffline from '../components/RumahBUMN/PelatihanOffline';

const RumahBUMN: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Jadwal Pelatihan Offline');

    const tabs = ['Lokasi Rumah BUMN', 'Jadwal Pelatihan Online', 'Jadwal Pelatihan Offline'];

    return (
        <div className="bg-white min-h-screen pt-24 pb-20">
            {/* Page Header */}
            <div className="max-w-[1440px] mx-auto px-5 mb-12">
                <h1 className="text-3xl  font-bold text-[#333] text-center mb-10">Rumah BUMN</h1>

                {/* Tabs */}
                <div className="flex justify-start md:justify-center gap-6 md:gap-8 mb-10 md:mb-16 border-b border-gray-100 pb-2 overflow-x-auto whitespace-nowrap hide-scrollbar">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-[14px] md:text-[15px] font-bold transition-all relative pb-2 ${activeTab === tab ? 'text-[#ff7a00]' : 'text-[#738294] hover:text-[#333]'
                                }`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <div className="absolute bottom-[-2px] left-0 w-full h-[3px] bg-[#ff7a00] rounded-full" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Main Content Info - Keep it visible for both tabs as in the design or hide it? 
                    Based on the design, the illustration seems to be for the whole page or just "Lokasi". 
                    We will keep it for both unless it gets too long, but let's hide it for training to give more space if preferred. 
                    Wait, looking at the user's screenshot, it's visible on the Jadwal Pelatihan Online tab.
                */}
                {(activeTab === 'Lokasi Rumah BUMN' || activeTab === 'Jadwal Pelatihan Online') && (
                    <div className="flex flex-col lg:flex-row items-center gap-12 mb-20 lg:mb-24">
                        <div className="flex-1">
                            <h2 className="text-2xl lg:text-3xl  font-bold text-[#0070c0] leading-tight max-w-[600px]">
                                Rumah BUMN merupakan wadah untuk UMKM yang berorientasi pada pemberian akses pembiayaan dan pengembangan bisnis UMKM
                            </h2>
                        </div>
                        <div className="flex-1 flex justify-center lg:justify-end relative">
                            {/* Vector Illustration */}
                            <div className="relative w-full max-w-[500px]">
                                <img
                                    src="/rumah-bumn-page/vector-rb.png"
                                    alt="Rumah BUMN Illustration"
                                    className="w-full h-auto object-contain relative z-10"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Dynamic Content */}
                {activeTab === 'Lokasi Rumah BUMN' && (
                    <div className="space-y-12 animate-fade-in-up">
                        <h3 className="text-2xl  font-bold text-[#333]">Persebaran Rumah BUMN</h3>
                        <IndonesiaMap />
                    </div>
                )}

                {activeTab === 'Jadwal Pelatihan Online' && (
                    <div className="animate-fade-in-up">
                        <PelatihanOnline />
                    </div>
                )}

                {activeTab === 'Jadwal Pelatihan Offline' && (
                    <div className="animate-fade-in-up">
                        <PelatihanOffline />
                    </div>
                )}
            </div>
        </div>
    );
};

export default RumahBUMN;
