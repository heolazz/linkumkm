import React from 'react';

interface ChatPakarPageProps {
    coach?: {
        name: string;
        focus: string;
        image: string;
    };
    onBack: () => void;
}

const ChatPakarPage: React.FC<ChatPakarPageProps> = ({ coach, onBack }) => {
    // Default coach if none provided (fallback)
    const activeCoach = coach || {
        name: 'Hana Komala',
        focus: 'Tax Expert',
        image: '/Coaching-page/coaching/coaching1.png'
    };

    const messages = [
        { id: 1, text: "Halo! Saya " + activeCoach.name + ". Ada yang bisa saya bantu terkait " + activeCoach.focus + " usaha Anda?", sender: 'coach', time: '10:00' },
    ];

    return (
        <div className="bg-[#f8fbff] min-h-screen pt-20 flex flex-col">
            {/* Chat Header */}
            <div className="bg-white border-b border-gray-100 px-5 py-4 flex items-center gap-4 sticky top-20 z-20 shadow-sm">
                <button onClick={onBack} className="p-2 hover:bg-gray-50 rounded-full transition-colors">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100 bg-[#0a72cc]">
                    <img src={activeCoach.image} alt={activeCoach.name} className="w-full h-full object-cover" />
                </div>
                <div>
                    <h3 className="font-bold text-[#202E3E] text-[15px] leading-tight">{activeCoach.name}</h3>
                    <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-[12px] text-gray-500 font-medium">Online</span>
                    </div>
                </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-5 space-y-4 overflow-y-auto">
                <div className="flex justify-center mb-6">
                    <span className="bg-white border border-gray-100 px-4 py-1.5 rounded-full text-[12px] text-gray-400 font-medium shadow-sm">
                        Hari Ini
                    </span>
                </div>

                {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-4 rounded-2xl text-[14px] leading-relaxed shadow-sm ${msg.sender === 'user'
                                ? 'bg-[#0070c0] text-white rounded-tr-none'
                                : 'bg-white text-[#444] rounded-tl-none border border-gray-100'
                            }`}>
                            {msg.text}
                            <div className={`text-[10px] mt-1.5 font-medium ${msg.sender === 'user' ? 'text-white/70 text-right' : 'text-gray-400 text-left'}`}>
                                {msg.time}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Chat Input */}
            <div className="bg-white p-4 border-t border-gray-100 sticky bottom-0">
                <div className="max-w-[1440px] mx-auto flex items-center gap-3">
                    <button className="p-2.5 text-gray-400 hover:text-[#0070c0] transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            placeholder="Tulis pesan Anda disini..."
                            className="w-full bg-[#f8fbff] border border-gray-100 rounded-xl px-5 py-3 text-[14px] outline-none focus:border-[#0070c0] transition-all"
                        />
                    </div>
                    <button className="bg-[#ff7a00] p-3 rounded-xl text-white shadow-md active:scale-95 transition-all">
                        <svg className="w-5 h-5 transform rotate-90" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatPakarPage;
