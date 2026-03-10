import React, { useState } from 'react';

interface CalendarProps {
    onSelectDate: (date: Date) => void;
    onClose: () => void;
}

const Calendar: React.FC<CalendarProps> = ({ onSelectDate, onClose }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

    const monthNames = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const handleDateClick = (day: number) => {
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        setSelectedDate(date);
        onSelectDate(date);
    };

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const totalDays = daysInMonth(year, month);
    const startDay = firstDayOfMonth(year, month);

    const days = [];
    for (let i = 0; i < startDay; i++) {
        days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
    }
    for (let i = 1; i <= totalDays; i++) {
        const isToday = new Date().toDateString() === new Date(year, month, i).toDateString();
        const isSelected = selectedDate?.toDateString() === new Date(year, month, i).toDateString();

        days.push(
            <div
                key={i}
                onClick={() => handleDateClick(i)}
                className={`h-10 w-10 flex items-center justify-center rounded-full cursor-pointer transition-all text-sm font-medium
                    ${isSelected ? 'bg-[#0070c0] text-white' : isToday ? 'text-[#0070c0] border border-[#0070c0]/30' : 'text-slate-600 hover:bg-slate-100'}
                `}
            >
                {i}
            </div>
        );
    }

    return (
        <div className="absolute top-full mt-2 left-0 z-[100] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-slate-100 p-5 w-[320px] animate-fade-in-up">
            <div className="flex items-center justify-between mb-4">
                <button onClick={prevMonth} className="p-2 hover:bg-slate-50 rounded-full transition-colors">
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <div className="text-slate-800 font-bold">
                    {monthNames[month]} {year}
                </div>
                <button onClick={nextMonth} className="p-2 hover:bg-slate-50 rounded-full transition-colors">
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
                {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map(day => (
                    <div key={day} className="h-10 w-10 flex items-center justify-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
                {days}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-50 flex justify-end">
                <button
                    onClick={onClose}
                    className="text-xs font-bold text-slate-400 hover:text-slate-600 px-3 py-1 transition-colors"
                >
                    Tutup
                </button>
            </div>
        </div>
    );
};

export default Calendar;
