import React from 'react';
import SkoringQuestionnaire from '../components/UMKMSmart/SkoringQuestionnaire';

interface SkoringPageProps {
    onBack?: () => void;
    onFinish: () => void;
}

const SkoringPage: React.FC<SkoringPageProps> = ({ onBack, onFinish }) => {
    return (
        <div className="bg-white min-h-screen pt-20 pb-20">
            {/* Header / Navigation bar for Questionnaire */}
            <div className="bg-white border-b border-gray-100 sticky top-16 md:top-20 z-[50] py-4 shadow-sm px-6">
                <div className="max-w-[1440px] mx-auto">
                    <div className="flex flex-col gap-1">
                        <button
                            onClick={onBack}
                            className="flex items-center gap-2 text-[#2D333A] hover:text-[#0070c0] transition-colors w-fit"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                <polyline points="12 19 5 12 12 5"></polyline>
                            </svg>
                            <span className="text-lg font-bold">Skoring</span>
                        </button>

                        {/* Breadcrumbs */}
                        <div className="flex items-center gap-2 text-[13px] text-[#738294] ml-0 md:ml-6">
                            <span>UMKM Smart</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                            <span>Skoring UMKM</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                            <span className="text-[#0070c0] font-medium">Skoring</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <SkoringQuestionnaire onFinish={onFinish} />
            </div>
        </div>
    );
};

export default SkoringPage;
