import React from 'react';

interface CardProps {
    id?: number;
    image?: string;
    category?: string;
    title: string;
    date: string;
    expert?: string;
}

const Card: React.FC<CardProps> = ({ image, title, date }) => {
    return (
        <div className="bg-white rounded-[10px] overflow-hidden border border-[#F1F5F9] shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 h-full flex flex-col group cursor-pointer">
            {/* Image Container - Leveled up radius & spacing */}
            <div className="relative w-full overflow-hidden bg-white">
                <img
                    src={image || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}
                    alt={title}
                    className="w-full h-auto block object-contain transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Bottom Part - Leveled up fonts & padding */}
            <div className="p-5 lg:p-6 flex-1 flex flex-col">
                <h3 className="text-base lg:text-lg font-bold text-[#202E3E] mb-3 line-clamp-2 leading-[1.3] font-sans transition-colors group-hover:text-[#0070c0]">
                    {title}
                </h3>
                <p className="text-[13px] lg:text-[14px] text-[#738294] font-semibold font-sans mt-auto">
                    {date}
                </p>
            </div>
        </div>
    );
};

export default Card;
