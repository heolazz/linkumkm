import React, { useState, useEffect } from 'react';

interface Transaction {
    id: string;
    date: string;
    description: string;
    amount: number;
    type: 'Pemasukan' | 'Pengeluaran';
    account: string;
}

const LedgerBook: React.FC = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [filterAccount, setFilterAccount] = useState('Semua Akun');
    const [accounts, setAccounts] = useState(['Kas', 'Modal', 'Beban Gaji', 'Beban Sewa', 'Piutang']);
    const [isAddAccountOpen, setIsAddAccountOpen] = useState(false);
    const [newAccountName, setNewAccountName] = useState('');

    useEffect(() => {
        const saved = localStorage.getItem('linkumkm_transactions');
        if (saved) {
            setTransactions(JSON.parse(saved));
        }
    }, []);

    const filteredTransactions = transactions
        .filter(tx => filterAccount === 'Semua Akun' || tx.account === filterAccount)
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    // Calculate running balance
    let currentBalance = 0;
    const ledgerItems = filteredTransactions.map(tx => {
        if (tx.type === 'Pemasukan') currentBalance += tx.amount;
        else currentBalance -= tx.amount;
        return { ...tx, runningBalance: currentBalance };
    });

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(val);
    };

    const handleAddAccount = (e: React.FormEvent) => {
        e.preventDefault();
        if (newAccountName && !accounts.includes(newAccountName)) {
            setAccounts([...accounts, newAccountName]);
            setNewAccountName('');
            setIsAddAccountOpen(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h3 className="text-xl font-bold text-[#202E3E]">Buku Besar</h3>
                    <p className="text-sm text-[#738294] font-medium">Lacak detil mutasi setiap akun bisnis Anda.</p>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <button
                        onClick={() => setIsAddAccountOpen(true)}
                        className="bg-white border border-[#E9EFF5] p-2.5 rounded-xl text-secondary hover:bg-bg-secondary transition-colors shadow-sm"
                        title="Tambah Akun Baru"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </button>
                    <div className="relative flex-1 md:flex-none min-w-[180px]">
                        <select
                            className="w-full bg-white border border-[#E9EFF5] px-4 py-2.5 rounded-xl font-medium text-sm text-black outline-none focus:border-black transition-colors appearance-none pr-10 shadow-sm"
                            value={filterAccount}
                            onChange={(e) => setFilterAccount(e.target.value)}
                        >
                            <option>Semua Akun</option>
                            {accounts.map(acc => <option key={acc}>{acc}</option>)}
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                    </div>
                </div>
            </div>

            {isAddAccountOpen && (
                <div className="bg-bg-secondary p-6 rounded-[2rem] border border-blue-100 flex flex-col md:flex-row items-center gap-4 animate-in slide-in-from-top-2 duration-300">
                    <div className="flex-1 w-full">
                        <label className="text-xs font-medium text-black uppercase tracking-widest block mb-2 px-1">Nama Akun Baru</label>
                        <input
                            type="text"
                            className="w-full h-12 px-5 bg-white border-2 border-blue-50 focus:border-black rounded-xl outline-none text-md font-medium text-black transition-all"
                            placeholder="Misal: Modal Usaha, Beban Sewa"
                            value={newAccountName}
                            onChange={(e) => setNewAccountName(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2 w-full md:w-auto md:self-end">
                        <button onClick={() => setIsAddAccountOpen(false)} className="flex-1 md:flex-none px-6 py-3 rounded-xl font-bold text-sm text-text-muted hover:text-text-main">Batal</button>
                        <button onClick={handleAddAccount} className="flex-1 md:flex-none px-8 py-3 bg-secondary hover:bg-secondary-hover text-white rounded-xl font-bold text-sm shadow-md active:scale-95 transition-all">Tambah Akun</button>
                    </div>
                </div>
            )}

            <div className="bg-white rounded-[2.5rem] border border-[#E9EFF5] shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="overflow-x-auto no-scrollbar scroll-smooth">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                            <tr className="bg-[#F8FBFF]">
                                <th className="px-6 py-6 text-[10px] font-bold text-[#738294] uppercase tracking-[0.25em] border-b border-[#E9EFF5]">Tanggal</th>
                                <th className="px-6 py-6 text-[10px] font-bold text-[#738294] uppercase tracking-[0.25em] border-b border-[#E9EFF5]">Deskripsi</th>
                                <th className="px-6 py-6 text-[10px] font-bold text-[#738294] uppercase tracking-[0.25em] border-b border-[#E9EFF5] text-right">Debit</th>
                                <th className="px-6 py-6 text-[10px] font-bold text-[#738294] uppercase tracking-[0.25em] border-b border-[#E9EFF5] text-right">Kredit</th>
                                <th className="px-6 py-6 text-[10px] font-bold text-[#738294] uppercase tracking-[0.25em] border-b border-[#E9EFF5] text-right">Saldo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ledgerItems.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-24 text-center">
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="w-16 h-16 bg-[#F8FBFF] rounded-full flex items-center justify-center text-[#AAB4C1]">
                                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                                            </div>
                                            <p className="text-[#AAB4C1] font-medium text-sm">Tidak ada transaksi ditemukan</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                ledgerItems.reverse().map((item, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors border-b border-gray-50 last:border-none group">
                                        <td className="px-6 py-6">
                                            <div className="flex flex-col gap-0.5">
                                                <span className="text-[13px] font-bold text-[#202E3E]">
                                                    {new Date(item.date).toLocaleDateString('id-ID', { day: '2-digit', month: 'short' })}
                                                </span>
                                                <span className="text-[10px] font-medium text-[#AAB4C1]">
                                                    {new Date(item.date).getFullYear()}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6">
                                            <div className="flex flex-col">
                                                <span className="text-[14px] font-bold text-black group-hover:text-black transition-colors">{item.description}</span>
                                                <span className="text-[9px] font-medium text-text-muted uppercase tracking-widest">{item.account}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6 text-right">
                                            <span className="text-[14px] font-bold text-black">
                                                {item.type === 'Pemasukan' ? formatCurrency(item.amount).replace('Rp', '').trim() : '-'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-6 text-right">
                                            <span className="text-[14px] font-bold text-black">
                                                {item.type === 'Pengeluaran' ? formatCurrency(item.amount).replace('Rp', '').trim() : '-'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-6 text-right">
                                            <span className="text-[15px] font-bold text-black bg-bg-secondary px-2 py-1 rounded-lg">
                                                {formatCurrency(item.runningBalance).replace('Rp', '').trim()}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Mobile Horizontal Scroll Indicator */}
            <div className="flex justify-center items-center gap-2 lg:hidden text-[#AAB4C1] text-[10px] font-medium uppercase tracking-widest">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="15 18 9 12 15 6"></polyline></svg>
                Geser untuk detil
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
        </div>
    );
};

export default LedgerBook;
