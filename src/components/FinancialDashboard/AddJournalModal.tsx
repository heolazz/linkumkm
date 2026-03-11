import React, { useState } from 'react';

interface JournalEntry {
    accountId: string;
    accountName: string;
    debit: number;
    credit: number;
}

interface AddJournalModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: any) => void;
    availableAccounts: string[];
}

const AddJournalModal: React.FC<AddJournalModalProps> = ({ isOpen, onClose, onSave, availableAccounts }) => {
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [evidenceNo, setEvidenceNo] = useState('BKM-001');
    const [description, setDescription] = useState('');
    const [entries, setEntries] = useState<JournalEntry[]>([
        { accountId: '', accountName: '', debit: 0, credit: 0 },
        { accountId: '', accountName: '', debit: 0, credit: 0 }
    ]);

    if (!isOpen) return null;

    const addAccountRow = () => {
        setEntries([...entries, { accountId: '', accountName: '', debit: 0, credit: 0 }]);
    };

    const removeAccountRow = (index: number) => {
        if (entries.length > 2) {
            setEntries(entries.filter((_, i) => i !== index));
        }
    };

    const updateEntry = (index: number, field: keyof JournalEntry, value: any) => {
        const newEntries = [...entries];
        const entry = { ...newEntries[index], [field]: value };

        // Enforce: Only Debit or Credit, not both
        if (field === 'debit' && value > 0) entry.credit = 0;
        if (field === 'credit' && value > 0) entry.debit = 0;

        newEntries[index] = entry;
        setEntries(newEntries);
    };

    const totalDebit = entries.reduce((sum, item) => sum + item.debit, 0);
    const totalCredit = entries.reduce((sum, item) => sum + item.credit, 0);
    const isBalanced = totalDebit === totalCredit && totalDebit > 0;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isBalanced) {
            onSave({ date, evidenceNo, description, entries, totalDebit });
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[2000] flex items-center justify-center p-4 pt-24 pb-10">
            <div className="bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-full animate-in zoom-in duration-300">
                {/* Header */}
                <div className="px-8 py-5 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
                    <div className="flex items-center gap-4">
                        <div className="w-11 h-11 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-black">Tambah Jurnal</h3>
                            <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Input transaksi jurnal umum</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 bg-gray-50 text-gray-400 hover:text-gray-600 rounded-full transition-colors active:scale-90">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6 scrollbar-thin scrollbar-thumb-gray-200">
                    {/* Info Message - Reminder */}
                    <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex items-start gap-3">
                        <div className="text-amber-600 mt-0.5 shrink-0">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                        </div>
                        <p className="text-[12px] font-bold text-amber-800 leading-relaxed">
                            Pastikan jurnal penginputan pada Debit dan Kredit sudah <span className="text-amber-900 underline decoration-2">Balance</span> sebelum Anda klik simpan. Setiap baris hanya boleh berisi nominal Debit atau Kredit, tidak keduanya.
                        </p>
                    </div>
                    {/* Date & Evidence */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-text-muted uppercase tracking-[0.2em] block px-1">Tanggal</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                </div>
                                <input
                                    type="date"
                                    className="w-full h-14 pl-12 pr-5 bg-bg-secondary border-2 border-[#E9EFF5] focus:border-black rounded-2xl outline-none font-bold text-black transition-all"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-text-muted uppercase tracking-[0.2em] block px-1">No. Bukti</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder="BKM-001"
                                    className="w-full h-14 pl-12 pr-5 bg-bg-secondary border-2 border-[#E9EFF5] focus:border-black rounded-2xl outline-none font-bold text-black transition-all"
                                    value={evidenceNo}
                                    onChange={(e) => setEvidenceNo(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Keterangan */}
                    <div className="space-y-2">
                        <label className="text-[11px] font-bold text-text-muted uppercase tracking-[0.2em] block px-1">Keterangan Transaksi</label>
                        <textarea
                            rows={3}
                            placeholder="Contoh: Pembayaran gaji karyawan bulan Oktober"
                            className="w-full p-5 bg-bg-secondary border-2 border-[#E9EFF5] focus:border-black rounded-2xl outline-none font-bold text-black transition-all resize-none"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    {/* Detail Akun */}
                    <div className="space-y-4">
                        <label className="text-[11px] font-bold text-text-muted uppercase tracking-[0.2em] block px-1">Detail Akun</label>
                        <div className="border border-[#E9EFF5] rounded-3xl overflow-hidden shadow-sm bg-white">
                            <table className="w-full">
                                <thead className="bg-gray-50/50 border-b border-[#E9EFF5]">
                                    <tr>
                                        <th className="px-5 py-4 text-[10px] font-bold text-text-muted uppercase tracking-widest text-left">Nama Akun</th>
                                        <th className="px-5 py-4 text-[10px] font-bold text-text-muted uppercase tracking-widest text-right w-[140px]">Debit (Rp)</th>
                                        <th className="px-5 py-4 text-[10px] font-bold text-text-muted uppercase tracking-widest text-right w-[140px]">Kredit (Rp)</th>
                                        <th className="w-16"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {entries.map((entry, idx) => (
                                        <tr key={idx} className="group hover:bg-gray-50/30 transition-colors">
                                            <td className="p-3">
                                                <select
                                                    className="w-full h-11 px-4 bg-white border border-[#E9EFF5] focus:border-black rounded-xl outline-none font-bold text-black transition-all appearance-none"
                                                    value={entry.accountName}
                                                    onChange={(e) => updateEntry(idx, 'accountName', e.target.value)}
                                                >
                                                    <option value="">Pilih Akun</option>
                                                    {availableAccounts.map(acc => (
                                                        <option key={acc} value={acc}>{acc}</option>
                                                    ))}
                                                </select>
                                            </td>
                                            <td className="p-3">
                                                <input
                                                    type="number"
                                                    className="w-full h-11 px-4 bg-white border border-[#E9EFF5] focus:border-black rounded-xl outline-none font-bold text-text-main text-right"
                                                    value={entry.debit || ''}
                                                    placeholder="0"
                                                    onChange={(e) => updateEntry(idx, 'debit', parseFloat(e.target.value) || 0)}
                                                />
                                            </td>
                                            <td className="p-3">
                                                <input
                                                    type="number"
                                                    className="w-full h-11 px-4 bg-white border border-[#E9EFF5] focus:border-black rounded-xl outline-none font-bold text-text-main text-right"
                                                    value={entry.credit || ''}
                                                    placeholder="0"
                                                    onChange={(e) => updateEntry(idx, 'credit', parseFloat(e.target.value) || 0)}
                                                />
                                            </td>
                                            <td className="p-3 text-center">
                                                <button
                                                    onClick={() => removeAccountRow(idx)}
                                                    className="text-[#AAB4C1] hover:text-rose-500 p-2 transition-colors disabled:opacity-30"
                                                    disabled={entries.length <= 2}
                                                >
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot className="bg-gray-50/20 border-t border-[#E9EFF5]">
                                    <tr>
                                        <td colSpan={4} className="p-3">
                                            <button
                                                onClick={addAccountRow}
                                                className="flex items-center gap-2 text-secondary font-bold text-[13px] hover:translate-x-1 transition-transform ml-2"
                                            >
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                                TAMBAH AKUN
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="border-t border-[#E9EFF5]">
                                        <td className="px-5 py-4 font-bold text-black text-sm uppercase">Total</td>
                                        <td className="px-5 py-4 font-bold text-black text-right text-sm">Rp {totalDebit.toLocaleString('id-ID')}</td>
                                        <td className="px-5 py-4 font-bold text-black text-right text-sm">Rp {totalCredit.toLocaleString('id-ID')}</td>
                                        <td></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>

                        {/* Info Message */}
                        <div className="bg-bg-secondary border border-[#E9EFF5] rounded-2xl p-4 flex items-center gap-3">
                            <div className="text-secondary">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                            </div>
                            <p className="text-[13px] font-bold text-text-muted">
                                Masukkan nominal debit dan kredit pada baris akun di atas.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Action */}
                <div className="p-8 bg-white border-t border-gray-100 sticky bottom-0">
                    <button
                        onClick={handleSubmit}
                        disabled={!isBalanced}
                        className={`w-full py-5 rounded-2xl font-bold text-lg transition-all shadow-xl active:scale-[0.98] ${isBalanced
                            ? 'bg-primary text-white hover:bg-primary-hover'
                            : 'bg-[#E9EFF5] text-text-muted cursor-not-allowed'
                            }`}
                    >
                        {isBalanced ? 'Simpan Jurnal Umum' : 'Debit & Kredit Belum Seimbang'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddJournalModal;
