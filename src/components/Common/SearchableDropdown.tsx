import React, { useState, useRef, useEffect } from 'react';

interface SearchableDropdownProps {
    options: string[];
    placeholder: string;
    onSelect: (option: string) => void;
    showListInitially?: boolean;
}

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
    options,
    placeholder,
    onSelect,
    showListInitially = true
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        onSelect(option);
        setIsOpen(false);
        setSearchQuery('');
    };

    return (
        <div className="relative flex-1 lg:w-48" ref={containerRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full border border-gray-200 rounded-full px-5 py-2.5 text-[13px] outline-none text-left transition-all hover:border-gray-300 flex items-center justify-between
                    ${selectedOption ? 'text-[#0070c0] font-bold border-[#0070c0]/30' : 'text-gray-600'}
                `}
            >
                <span className="truncate">{selectedOption || placeholder}</span>
                <svg className={`w-3.5 h-3.5 ml-2 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-full mt-2 left-0 z-[110] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-slate-100 p-2 w-full min-w-[240px] animate-fade-in-up">
                    <div className="relative mb-2 p-1">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <input
                            ref={inputRef}
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full border border-gray-100 bg-slate-50 rounded-xl pl-10 pr-4 py-2 text-[13px] focus:outline-none focus:border-[#0070c0] transition-colors"
                            placeholder="Cari..."
                        />
                    </div>

                    <div className="max-h-[240px] overflow-y-auto no-scrollbar py-1">
                        {showListInitially || searchQuery ? (
                            filteredOptions.length > 0 ? (
                                filteredOptions.map((option, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => handleSelect(option)}
                                        className={`w-full text-left px-4 py-2.5 text-[13px] rounded-xl transition-colors hover:bg-slate-50
                                            ${selectedOption === option ? 'text-[#0070c0] font-bold bg-[#0070c0]/5' : 'text-slate-600'}
                                        `}
                                    >
                                        {option}
                                    </button>
                                ))
                            ) : (
                                <div className="px-4 py-3 text-[13px] text-slate-400 text-center italic">
                                    Tidak ditemukan
                                </div>
                            )
                        ) : (
                            <div className="px-4 py-6 text-[13px] text-slate-400 text-center">
                                Silakan ketik untuk mencari
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchableDropdown;
