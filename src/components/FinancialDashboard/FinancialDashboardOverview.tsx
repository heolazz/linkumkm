import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

interface DashboardOverviewProps {
    onNavigate: (section: 'Dashboard' | 'Jurnal' | 'Buku Besar' | 'Laporan') => void;
}

const FinancialDashboardOverview: React.FC<DashboardOverviewProps> = ({ onNavigate }) => {
    const [isLoading, setIsLoading] = React.useState(true);

    // Simulated Loading for Skeleton Effect
    React.useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    // Mock Data for Charts
    const trendData = [
        { name: '1 Mar', income: 4000, expense: 2400 },
        { name: '2 Mar', income: 3000, expense: 1398 },
        { name: '3 Mar', income: 2000, expense: 9800 },
        { name: '4 Mar', income: 2780, expense: 3908 },
        { name: '5 Mar', income: 1890, expense: 4800 },
        { name: '6 Mar', income: 2390, expense: 3800 },
        { name: '7 Mar', income: 3490, expense: 4300 },
    ];

    const cards = [
        {
            title: 'Saldo Kas',
            val: 'Rp 20.080.000',
            trend: '8.2%',
            isUp: true,
            bg: 'bg-white',
            textColor: 'text-black'
        },
        {
            title: 'Total Pendapatan',
            val: 'Rp 20.450.000',
            trend: '12.5%',
            isUp: true,
            bg: 'bg-white',
            textColor: 'text-black'
        },
        {
            title: 'Total Pengeluaran',
            val: 'Rp 370.000',
            trend: '4.1%',
            isUp: false,
            bg: 'bg-white',
            textColor: 'text-black'
        },
    ];

    return (
        <div className="space-y-6 md:space-y-8">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {isLoading ? (
                    [1, 2, 3].map(i => (
                        <div key={i} className="bg-white p-6 rounded-3xl border border-[#E9EFF5] h-32 animate-pulse flex flex-col justify-between shadow-sm">
                            <div className="w-12 h-12 bg-gray-100 rounded-2xl"></div>
                            <div className="space-y-2">
                                <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                                <div className="h-6 bg-gray-100 rounded w-3/4"></div>
                            </div>
                        </div>
                    ))
                ) : (
                    cards.map((card, idx) => (
                        <div key={idx} className={`${card.bg} p-5 md:p-7 rounded-[2.5rem] border border-[#E9EFF5] shadow-sm hover:shadow-md transition-all group relative overflow-hidden active:scale-[0.98]`}>
                            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gray-50 rounded-full opacity-20 group-hover:scale-125 transition-transform duration-500"></div>

                            <div className="flex justify-between items-start mb-5 relative z-10">
                                <div></div>
                                <div className={`flex items-center gap-1 text-[10px] md:text-xs font-semibold px-2.5 py-1.5 rounded-full ${card.isUp ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
                                    }`}>
                                    {card.isUp ? (
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                    ) : (
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                    )}
                                    {card.trend}
                                </div>
                            </div>
                            <div className="relative z-10">
                                <h4 className="text-md md:text-lg font-medium text-[#738294] tracking-[0.05em] mb-1">{card.title}</h4>
                                <p className={`text-xl md:text-2xl font-bold ${card.textColor} tracking-tight`}>{card.val}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Main Visual Section */}
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
                {/* Trend Chart */}
                <div className="lg:col-span-2 bg-white p-6 md:p-10 rounded-[2.5rem] border border-[#E9EFF5] shadow-sm relative overflow-hidden group">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 relative z-10">
                        <div>
                            <h3 className="text-xl font-bold text-black">Tren Arus Kas</h3>
                            <p className="text-xs md:text-sm text-text-muted font-medium">Performa keuangan 7 hari terakhir</p>
                        </div>
                        <div className="flex bg-bg-secondary p-1 rounded-xl border border-[#E9EFF5] w-full sm:w-auto">
                            <button className="flex-1 sm:flex-none px-4 py-2 bg-white rounded-lg text-xs font-bold text-black shadow-sm">Mingguan</button>
                            <button className="flex-1 sm:flex-none px-4 py-2 text-xs font-medium text-text-muted hover:text-black transition-colors">Bulanan</button>
                        </div>
                    </div>

                    <div className="h-[220px] md:h-[320px] w-full relative z-10 -ml-4 md:ml-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={trendData}>
                                <defs>
                                    <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#0059a4" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#0059a4" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F0F4F8" />
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 10, fontWeight: 500, fill: '#666666' }}
                                    dy={10}
                                />
                                <YAxis hide />
                                <Tooltip
                                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="income"
                                    stroke="#0059a4"
                                    strokeWidth={4}
                                    fillOpacity={1}
                                    fill="url(#colorIncome)"
                                />
                                <Area
                                    type="monotone"
                                    dataKey="expense"
                                    stroke="#f43f5e"
                                    strokeWidth={4}
                                    fillOpacity={1}
                                    fill="url(#colorExpense)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Key Metrics / Quick Actions */}
                <div className="flex flex-col gap-6">
                    {/* Net Profit Card */}
                    <div className="bg-white p-8 rounded-[2.5rem] border border-[#E9EFF5] shadow-sm relative overflow-hidden group active:scale-[0.98] transition-transform">
                        <div className="flex justify-between items-start mb-8 relative z-10">
                            <div className="flex flex-col gap-1">
                                <h4 className="text-xs md:text-md font-semibold uppercase tracking-[0.25em]">Net Profit</h4>
                                <span className="text-xs md:text-xs font-medium">PERIODE MARET 2026</span>
                            </div>
                        </div>
                        <div className="relative z-10">
                            <p className="text-3xl md:text-4xl font-bold mb-3 tracking-tighter leading-none text-black">Rp 20.080.000</p>
                            <div className="flex items-center gap-2">
                                <span className="flex items-center gap-1 bg-emerald-50 text-emerald-600 px-2 py-1 rounded-lg text-[10px] font-semibold underline">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                    15.4%
                                </span>
                                <span className="text-[10px] font-medium text-text-muted tracking-wide uppercase">Naik dari Feb</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Access List */}
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: 'Catat Masuk', icon: '/finance_dashboard/icon/catat-pemasukan.png', color: 'bg-emerald-50', action: () => onNavigate('Jurnal') },
                            { label: 'Catat Keluar', icon: '/finance_dashboard/icon/catat-biaya.png', color: 'bg-rose-50', action: () => onNavigate('Jurnal') },
                            { label: 'Cetak Laporan', icon: '/finance_dashboard/icon/lihat-laporan.png', color: 'bg-orange-50', action: () => onNavigate('Laporan') },
                            { label: 'Audit Akun', icon: '/finance_dashboard/icon/cek-buku.png', color: 'bg-indigo-50', action: () => onNavigate('Buku Besar') }
                        ].map((item, idx) => (
                            <button
                                key={idx}
                                onClick={item.action}
                                className="bg-white p-5 rounded-[2rem] border border-[#E9EFF5] shadow-sm hover:shadow-md active:scale-90 transition-all flex flex-col items-center gap-4 relative group"
                            >
                                <div className={`w-14 h-14 flex items-center justify-center rounded-2xl ${item.color} group-active:scale-110 transition-transform overflow-hidden p-2`}>
                                    <img src={item.icon} alt={item.label} className="w-full h-full object-contain" />
                                </div>
                                <span className="text-xs font-medium text-black/70 text-center">{item.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinancialDashboardOverview;
