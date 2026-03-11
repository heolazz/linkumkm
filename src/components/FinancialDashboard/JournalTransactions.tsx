import React, { useState, useEffect } from 'react';
import { AddJournalModal } from './index';

interface Transaction {
    id: string;
    date: string;
    description: string;
    amount: number;
    type: 'Pemasukan' | 'Pengeluaran';
    category: string;
    account: string;
    evidenceNo?: string;
}

const JournalTransactions: React.FC = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const availableAccounts = ['Kas', 'Modal', 'Beban Gaji', 'Beban Sewa', 'Piutang', 'Penjualan', 'Biaya Operasional'];

    // Load from LocalStorage
    useEffect(() => {
        const saved = localStorage.getItem('linkumkm_transactions');
        if (saved) {
            setTransactions(JSON.parse(saved));
        } else {
            const initial: Transaction[] = [
                { id: '1', date: new Date().toISOString(), description: 'Penjualan Kripik Pisang', amount: 450000, type: 'Pemasukan', category: 'Penjualan', account: 'Kas', evidenceNo: 'BKM-001' },
                { id: '2', date: new Date().toISOString(), description: 'Beli Bahan Baku Plastik', amount: 120000, type: 'Pengeluaran', category: 'Bahan Baku', account: 'Kas', evidenceNo: 'BKK-001' },
                { id: '3', date: new Date().toISOString(), description: 'Bayar Listrik Toko', amount: 250000, type: 'Pengeluaran', category: 'Operasional', account: 'Kas', evidenceNo: 'BKK-002' }
            ];
            setTransactions(initial);
            localStorage.setItem('linkumkm_transactions', JSON.stringify(initial));
        }
    }, []);

    const saveTransactions = (newItems: Transaction[]) => {
        setTransactions(newItems);
        localStorage.setItem('linkumkm_transactions', JSON.stringify(newItems));
    };

    const handleSaveJournal = (data: any) => {
        const newTx: Transaction = {
            id: Date.now().toString(),
            date: data.date,
            description: data.description,
            amount: data.totalDebit,
            type: data.entries[0].debit > 0 ? 'Pemasukan' : 'Pengeluaran', // Simple heuristic for display
            category: data.entries[0].accountName,
            account: data.entries[0].accountName,
            evidenceNo: data.evidenceNo
        };
        saveTransactions([newTx, ...transactions]);
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            alert(`Simulasi: File ${file.name} berhasil diunggah! Data massal telah diproses.`);
            // Reset input
            e.target.value = '';
        }
    };

    const filteredTransactions = transactions.filter(tx =>
        tx.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tx.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (tx.evidenceNo && tx.evidenceNo.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(val);
    };

    return (
        <div className="max-w-5xl mx-auto pb-10 px-1 md:px-0">
            {/* Action Bar & Search */}
            <div className="flex flex-col md:flex-row gap-5 justify-between items-stretch md:items-center mb-8">
                <div className="relative flex-1 group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-black transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Cari transaksi, kategori, atau no. bukti..."
                        className="w-full h-12 pl-12 pr-5 bg-white border border-[#E9EFF5] focus:border-black rounded-xl outline-none font-bold text-sm text-black transition-all shadow-sm"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="flex gap-3">
                    <label className="flex-1 md:flex-none">
                        <div className="bg-white border border-[#E9EFF5] text-[#738294] px-5 py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm hover:bg-gray-50 active:scale-95 transition-all cursor-pointer">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                            <span className="hidden sm:inline">Upload Massal (CSV)</span>
                            <span className="sm:hidden">Upload</span>
                        </div>
                        <input type="file" accept=".csv,.xlsx" className="hidden" onChange={handleFileUpload} />
                    </label>

                    <button
                        onClick={() => setIsAddOpen(true)}
                        className="flex-1 md:text-md text-xs md:flex-none bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        Tambah Jurnal
                    </button>
                </div>
            </div>

            {/* Transactions Feed */}
            <div className="space-y-4">
                <div className="flex items-center justify-between mb-2 px-2">
                    <h3 className="text-lg font-bold text-black">Data Jurnal Umum</h3>
                    <p className="text-[11px] font-bold text-text-muted uppercase tracking-widest">{filteredTransactions.length} Transaksi</p>
                </div>

                {filteredTransactions.length === 0 ? (
                    <div className="py-24 text-center bg-white rounded-[2.5rem] border border-[#E9EFF5] shadow-sm animate-in fade-in zoom-in duration-500">
                        <div className="w-20 h-20 bg-bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-text-muted">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                        </div>
                        <p className="text-text-muted font-bold uppercase tracking-wider text-xs">Jurnal Umum Masih Kosong</p>
                    </div>
                ) : (
                    filteredTransactions.map((tx, index) => (
                        <div
                            key={tx.id}
                            className="bg-white p-4 md:p-6 rounded-[2rem] border border-[#E9EFF5] shadow-sm hover:shadow-md hover:translate-x-1 active:scale-[0.98] transition-all flex items-center justify-between group animate-in slide-in-from-right-4 duration-500"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <div className="flex items-center gap-4 md:gap-5 min-w-0">
                                {/* Type Icon - Smaller for mobile */}
                                <div className={`w-11 h-11 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-white/50 bg-bg-secondary text-black`}>
                                    {tx.type === 'Pemasukan' ? (
                                        <svg width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                                    ) : (
                                        <svg width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>
                                    )}
                                </div>
                                <div className="text-left truncate">
                                    <div className="flex items-center gap-2 mb-1 overflow-hidden">
                                        <h4 className="font-bold text-black text-[15px] md:text-lg truncate">{tx.description}</h4>
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-text-muted">
                                        <span className="shrink-0">{new Date(tx.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}</span>
                                        <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                                        <span className="uppercase text-text-muted tracking-wider truncate">{tx.category}</span>
                                        {tx.evidenceNo && (
                                            <>
                                                <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                                                <span className="text-secondary">{tx.evidenceNo}</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="text-right shrink-0 ml-3">
                                <p className={`text-[16px] md:text-xl font-bold text-black`}>
                                    {tx.type === 'Pemasukan' ? '+' : '-'}{formatCurrency(tx.amount).replace('Rp', '').trim()}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <AddJournalModal
                isOpen={isAddOpen}
                onClose={() => setIsAddOpen(false)}
                onSave={handleSaveJournal}
                availableAccounts={availableAccounts}
            />
        </div>
    );
};

export default JournalTransactions;
