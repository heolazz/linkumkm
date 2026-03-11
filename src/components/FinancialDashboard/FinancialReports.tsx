import React, { useState, useEffect } from 'react';
import {
    ResponsiveContainer,
    Cell,
    PieChart,
    Pie,
    Tooltip,
    Legend
} from 'recharts';

const FinancialReports: React.FC = () => {
    const [activeReport, setActiveReport] = useState<'Laba Rugi' | 'Neraca' | 'Arus Kas' | 'Modal'>('Laba Rugi');
    const [transactions, setTransactions] = useState<any[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem('linkumkm_transactions');
        if (saved) {
            setTransactions(JSON.parse(saved));
        }
    }, []);

    const totalIncome = transactions.filter(t => t.type === 'Pemasukan').reduce((acc, curr) => acc + curr.amount, 0);
    const totalExpense = transactions.filter(t => t.type === 'Pengeluaran').reduce((acc, curr) => acc + curr.amount, 0);
    const netProfit = totalIncome - totalExpense;

    const categoryData = Object.values(
        transactions.filter(t => t.type === 'Pengeluaran').reduce((acc: any, curr) => {
            if (!acc[curr.category]) acc[curr.category] = { name: curr.category, value: 0 };
            acc[curr.category].value += curr.amount;
            return acc;
        }, {})
    );

    const COLORS = ['#0059a4', '#10b981', '#f43f5e', '#f59e0b', '#ff7a00', '#8b5cf6'];

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(val);
    };

    return (
        <div className="space-y-6 md:space-y-8 pb-10 px-1 md:px-0">
            {/* Report Selector */}
            <div className="flex bg-[#F8FBFF] p-1.5 rounded-[1.5rem] border border-[#E9EFF5] shadow-sm overflow-x-auto no-scrollbar whitespace-nowrap scroll-smooth">
                {(['Laba Rugi', 'Neraca', 'Arus Kas', 'Modal'] as const).map((report) => (
                    <button
                        key={report}
                        onClick={() => setActiveReport(report)}
                        className={`flex-1 min-w-[100px] px-4 py-2.5 rounded-xl font-bold text-[11px] md:text-sm transition-all uppercase tracking-wider ${activeReport === report
                            ? 'bg-white text-black shadow-sm scale-[1.02]'
                            : 'text-text-muted hover:text-black'
                            }`}
                    >
                        {report}
                    </button>
                ))}
            </div>

            {activeReport === 'Laba Rugi' ? (
                <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    {/* Summary Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {[
                            { title: 'Total Pendapatan', val: totalIncome, color: 'text-black', bg: 'bg-white' },
                            { title: 'Total Pengeluaran', val: totalExpense, color: 'text-black', bg: 'bg-white' },
                            { title: 'Laba/Rugi Bersih', val: netProfit, color: 'text-black', bg: 'bg-white' }
                        ].map((card, idx) => (
                            <div key={idx} className={`p-6 md:p-8 rounded-[2.5rem] border border-[#E9EFF5] ${card.bg} shadow-sm group relative overflow-hidden transition-all hover:shadow-md cursor-default`}>
                                <h4 className="text-[10px] md:text-[11px] font-bold text-[#738294] uppercase tracking-[0.2em] mb-4">{card.title}</h4>
                                <p className={`text-2xl md:text-3xl font-bold ${card.color} tracking-tight`}>
                                    {formatCurrency(card.val)}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
                        {/* Detail List */}
                        <div className="bg-white p-7 md:p-10 rounded-[2.5rem] border border-[#E9EFF5] shadow-sm flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg font-bold text-black mb-8">Detail Laba Rugi</h3>
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center pb-4 border-b border-gray-50">
                                        <span className="text-sm font-bold text-text-muted uppercase tracking-wider">Pendapatan Operasional</span>
                                        <span className="text-lg font-bold text-black">{formatCurrency(totalIncome)}</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-4 border-b border-gray-50">
                                        <span className="text-sm font-bold text-text-muted uppercase tracking-wider">Beban Operasional</span>
                                        <span className="text-lg font-bold text-black">{formatCurrency(totalExpense)}</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-2">
                                        <span className="text-sm font-bold text-black uppercase tracking-[0.15em]">Laba Bersih</span>
                                        <div className="bg-bg-secondary px-4 py-2 rounded-2xl border border-blue-50">
                                            <span className={`text-xl font-bold text-black`}>
                                                {formatCurrency(netProfit)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="mt-12 w-full py-4 bg-secondary hover:bg-secondary-hover text-white rounded-2xl font-bold text-xs uppercase tracking-[0.2em] shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                Unduh Laporan PDF
                            </button>
                        </div>

                        {/* Chart Illustration */}
                        <div className="bg-white p-7 md:p-10 rounded-[2.5rem] border border-[#E9EFF5] shadow-sm relative overflow-hidden group">
                            <h3 className="text-xl font-bold text-black mb-2 relative z-10">Alokasi Biaya</h3>
                            <p className="text-xs md:text-sm text-text-muted font-bold mb-8 relative z-10">Distribusi pengeluaran per kategori</p>

                            <div className="h-[280px] md:h-[320px] w-full">
                                {categoryData.length > 0 ? (
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={categoryData}
                                                cx="50%"
                                                cy="45%"
                                                innerRadius={60}
                                                outerRadius={100}
                                                paddingAngle={8}
                                                dataKey="value"
                                                stroke="none"
                                            >
                                                {categoryData.map((_, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip
                                                formatter={(val: any) => formatCurrency(Number(val))}
                                                contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                            />
                                            <Legend verticalAlign="bottom" height={36} iconType="circle" />
                                        </PieChart>
                                    </ResponsiveContainer>
                                ) : (
                                    <div className="flex items-center justify-center h-full text-[#AAB4C1] font-bold">Data Belum Tersedia</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="py-32 text-center space-y-6 animate-in fade-in duration-500 bg-white rounded-[2.5rem] border border-[#E9EFF5]">
                    <div className="w-20 h-20 bg-[#F8FBFF] rounded-full mx-auto flex items-center justify-center text-[#AAB4C1]">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z"></path></svg>
                    </div>
                    <p className="text-[#AAB4C1] font-bold uppercase tracking-[0.2em] text-xs">Laporan {activeReport}<br />Sedang Disiapkan</p>
                </div>
            )}

            {/* Hint Card */}
            <div className="bg-secondary p-8 md:p-10 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center gap-6 relative overflow-hidden group">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>
                </div>
                <div>
                    <h5 className="text-lg font-bold mb-1">Tips Keuangan Berkelanjutan</h5>
                    <p className="text-xs md:text-sm text-blue-100/90 font-bold leading-relaxed">
                        Analisis Laba Rugi membantu Anda membedakan mana akun yang merupakan aset dan mana yang merupakan beban. Pastikan margin keuntungan Anda tetap di atas 20% untuk kesehatan usaha jangka panjang.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FinancialReports;
