import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList,
    LineChart, Line, Dot
} from 'recharts';

const SkoringTab = ({ onNavigate }: { onNavigate?: (tab: string) => void }) => {
    // Dummy Data for the bar chart
    const dataBarChart = [
        { subject: 'Skala Usaha', A: 0.33, B: 0, fullMark: 10 },
        { subject: 'Pemahaman Industri & Pasar', A: 4.17, B: 0, fullMark: 10 },
        { subject: 'Manajemen Rantai Pasok', A: 1.67, B: 0, fullMark: 10 },
        { subject: 'Kepemimpinan', A: 6.67, B: 0, fullMark: 10 },
        { subject: 'Budaya Inovasi', A: 2.5, B: 0, fullMark: 10 },
        { subject: 'Manajemen Pemasaran', A: 3.33, B: 0, fullMark: 10 },
        { subject: 'Manajemen Operasional', A: 0, B: 0, fullMark: 10 },
        { subject: 'Manajemen Keuangan', A: 7.5, B: 0, fullMark: 10 },
        { subject: 'Manajemen SDM', A: 1.25, B: 0, fullMark: 10 },
        { subject: 'Legalitas dan Kepatuhan', A: 2.5, B: 0, fullMark: 10 },
        { subject: 'Kepedulian Sosial dan Lingkungan', A: 0, B: 0, fullMark: 10 },
    ]; // Top to Bottom order

    // Dummy Data for line chart
    const dataLineChart = [
        { name: '1 Desember 2025', score: 2.73 },
    ];

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-md text-sm">
                    <p className="font-semibold text-gray-700">{label}</p>
                    {payload.map((entry: any, index: number) => (
                        <p key={`item-${index}`} style={{ color: entry.color }}>
                            {entry.name === 'A' ? 'Skoring Terbaru' : 'Skoring Sebelumnya'}: {entry.value}
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <div className="w-full">
            {/* Header / Meta Info */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-3 md:gap-4 px-1">
                <div>
                    <h2 className="text-xl md:text-2xl font-bold  text-[#333]">Skoring</h2>
                    <p className="text-sm md:text-md text-gray-500">Hasil Skoring Anda untuk mengukur Skill UMKM Anda</p>
                </div>
                <div className="text-[12px] md:text-[13px] text-gray-500 bg-gray-50 px-4 py-2 rounded-full border border-gray-100 w-full md:w-auto text-center md:text-left">
                    Skoring Terakhir : <span className="font-semibold text-gray-700">1 Desember 2025</span>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 mb-16">
                {/* Left Column - Bar Chart */}
                <div className="w-full lg:w-3/5">
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full shadow-sm">
                        <h3 className="text-sm font-semibold text-center text-gray-600 mb-6">Grafik perbandingan Skoring terbaru dengan sebelumnya</h3>

                        <div className="flex justify-center items-center gap-6 mb-8 text-[12px] text-gray-600">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#0070c0]"></div>
                                <span>Skoring Terbaru</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-blue-100"></div>
                                <span>Skoring Sebelumnya</span>
                            </div>
                        </div>

                        <div className="w-full h-[500px] md:h-[600px] -ml-8 md:-ml-16">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    layout="vertical"
                                    data={dataBarChart}
                                    margin={{ top: 0, right: 15, left: -20, bottom: 0 }}
                                    barSize={12}
                                >
                                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E5E7EB" />
                                    <XAxis type="number" domain={[0, 10]} ticks={[0, 2, 4, 6, 8, 10]} axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#6B7280' }} />
                                    <YAxis
                                        type="category"
                                        dataKey="subject"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 10, fill: '#aaaeb4ff', width: 120, dx: -5 }}
                                        width={130}
                                    />
                                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                                    <Bar dataKey="A" fill="#0070c0" radius={[0, 4, 4, 0]}>
                                        <LabelList dataKey="A" position="right" fill="#0070c0" fontSize={10} offset={8} formatter={(val: any) => val === 0 ? '0' : val} />
                                    </Bar>
                                    <Bar dataKey="B" fill="#DBEAFE" radius={[0, 4, 4, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Right Column - Results, Strengths, Weaknesses */}
                <div className="w-full lg:w-2/5 flex flex-col gap-6">
                    {/* Hasil Skoring summary box */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-[#333] mb-2">Hasil Skoring</h3>
                        <p className="text-md text-gray-500 mb-6 leading-relaxed">
                            Nilai indeks kesiapan Anda adalah <strong className="text-[#0070c0]">2.73</strong> sehingga Anda masuk kedalam level <strong className="text-[#0070c0]">Tradisional Teladan</strong>
                        </p>

                        <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                {/* Vector Certificate Icon */}
                                <div className="w-8 h-8 rounded bg-transparent text-[#0070c0] flex items-center justify-center shrink-0">
                                    <img src="/umkm-smart-page/icon_sertifikat_penilaian.png" alt="Sertifikat Penilaian" className="w-full h-full object-contain" />
                                </div>
                                <span className="text-xs md:text-sm font-medium text-gray-700 leading-tight">Hasil Sertifikat Penilaian Anda</span>
                            </div>
                            <button className="bg-[#ff7a00] hover:bg-[#e66e00] text-white text-[11px] font-bold py-2.5 px-5 rounded-lg transition-all active:scale-95 shadow-sm">
                                Lihat Sertifikat
                            </button>
                        </div>
                    </div>

                    {/* Kelebihan Table */}
                    <div>
                        <h3 className="text-[16px] font-bold text-[#333] mb-3">Kelebihan</h3>
                        <div className="overflow-x-auto rounded-xl border border-gray-200">
                            <table className="w-full text-left text-[12px]">
                                <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-200">
                                    <tr>
                                        <th className="py-3 px-4 w-12 text-center">No.</th>
                                        <th className="py-3 px-4">Skill</th>
                                        <th className="py-3 px-4 text-center">Nilai Baru</th>
                                        <th className="py-3 px-4 text-center">Nilai Sebelumnya</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-100 last:border-0 bg-white">
                                        <td className="py-3 px-4 text-center text-gray-400">1.</td>
                                        <td className="py-3 px-4 font-medium text-green-600">Pemahaman Industri & Pasar</td>
                                        <td className="py-3 px-4 text-center font-semibold text-green-600">4.17 <span className="text-[10px]">↑</span></td>
                                        <td className="py-3 px-4 text-center text-gray-400">-</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 last:border-0 bg-white">
                                        <td className="py-3 px-4 text-center text-gray-400">2.</td>
                                        <td className="py-3 px-4 font-medium text-green-600">Kepemimpinan</td>
                                        <td className="py-3 px-4 text-center font-semibold text-green-600">6.67 <span className="text-[10px]">↑</span></td>
                                        <td className="py-3 px-4 text-center text-gray-400">-</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 last:border-0 bg-white">
                                        <td className="py-3 px-4 text-center text-gray-400">3.</td>
                                        <td className="py-3 px-4 font-medium text-green-600">Manajemen Keuangan</td>
                                        <td className="py-3 px-4 text-center font-semibold text-green-600">7.5 <span className="text-[10px]">↑</span></td>
                                        <td className="py-3 px-4 text-center text-gray-400">-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Kelemahan Table */}
                    <div>
                        <h3 className="text-[16px] font-bold text-[#333] mb-3">Kelemahan</h3>
                        <div className="overflow-x-auto rounded-xl border border-gray-200">
                            <table className="w-full text-left text-[12px]">
                                <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-200">
                                    <tr>
                                        <th className="py-3 px-4 w-12 text-center">No.</th>
                                        <th className="py-3 px-4">Skill</th>
                                        <th className="py-3 px-4 text-center">Nilai Baru</th>
                                        <th className="py-3 px-4 text-center">Nilai Sebelumnya</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-100 last:border-0 bg-white">
                                        <td className="py-3 px-4 text-center text-gray-400">1.</td>
                                        <td className="py-3 px-4 font-medium text-orange-500">Manajemen Operasional</td>
                                        <td className="py-3 px-4 text-center font-semibold text-orange-500">0 =</td>
                                        <td className="py-3 px-4 text-center text-gray-400">-</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 last:border-0 bg-white">
                                        <td className="py-3 px-4 text-center text-gray-400">2.</td>
                                        <td className="py-3 px-4 font-medium text-orange-500">Kepedulian sosial dan lingkungan</td>
                                        <td className="py-3 px-4 text-center font-semibold text-orange-500">0 =</td>
                                        <td className="py-3 px-4 text-center text-gray-400">-</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 last:border-0 bg-white">
                                        <td className="py-3 px-4 text-center text-gray-400">3.</td>
                                        <td className="py-3 px-4 font-medium text-green-600">Skala Usaha</td>
                                        <td className="py-3 px-4 text-center font-semibold text-green-600">0.33 <span className="text-[10px]">↑</span></td>
                                        <td className="py-3 px-4 text-center text-gray-400">-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Siap Naik Level */}
                    <div className="mt-4">
                        <h3 className="text-lg font-bold text-[#333] mb-2">Siap Naik Level?</h3>
                        <p className="text-md text-gray-500 mb-6 leading-relaxed">
                            Untuk mencapai level Berkembang, Anda harus <span className="font-semibold text-[#0070c0]">membutuhkan skor minimal 3.21</span>. Tingkatkan kompetensi Anda melalui modul pembelajaran yang tersedia, lalu lakukan skoring ulang untuk naik ke level selanjutnya.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                            <button
                                onClick={() => onNavigate?.('Mulai Skoring')}
                                className="flex-1 border border-[#ff7a00] text-[#ff7a00] hover:bg-[#fff5eb] font-bold text-sm md:text-md py-3 rounded-xl transition-all active:scale-95 order-2 sm:order-1"
                            >
                                Skoring Ulang
                            </button>
                            <button className="flex-1 bg-[#ff7a00] hover:bg-[#e66e00] text-white font-bold text-sm md:text-md py-3 rounded-xl transition-all active:scale-95 shadow-md hover:shadow-lg order-1 sm:order-2">
                                Pelajari Modul
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Riwayat Skoring */}
            <div className="mb-16">
                <h3 className="text-xl font-bold  text-[#333] mb-1">Riwayat Skoring Anda</h3>
                <p className="text-md text-gray-500 mb-6">Semua hasil pengujian Skoring UMKM Anda</p>

                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-12">
                    <h4 className="text-lg text-gray-500 font-medium mb-6">Perkembangan Skoring Anda</h4>
                    <div className="h-[250px] w-full pl-6 pr-6">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={dataLineChart} margin={{ top: 20, right: 30, left: -20, bottom: 10 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 11, fill: '#6B7280' }}
                                    dy={10}
                                />
                                <YAxis
                                    domain={[0, 4]}
                                    ticks={[0, 2, 4]}
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 12, fill: '#6B7280' }}
                                />
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Line
                                    type="linear"
                                    dataKey="score"
                                    stroke="#00A2E9"
                                    strokeWidth={2}
                                    dot={<Dot r={5} fill="#00A2E9" stroke="white" strokeWidth={2} />}
                                    activeDot={{ r: 7 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Tabel Riwayat */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-[16px] text-gray-700 font-semibold">Tabel Riwayat Skoring Anda</h4>
                        <select className="border border-gray-200 text-gray-600 text-[13px] rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239CA3AF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-no-repeat bg-[position:right_10px_center] pr-8 cursor-pointer shadow-sm">
                            <option>Semua Tahun</option>
                            <option>2025</option>
                            <option>2024</option>
                        </select>
                    </div>

                    {/* Mobile View: Cards */}
                    <div className="md:hidden space-y-4">
                        {[1].map((item) => (
                            <div key={item} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-4">
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Tanggal Penilaian</span>
                                        <span className="text-sm font-bold text-gray-700">1 Desember 2025</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1 block">Nilai</span>
                                        <span className="text-sm font-bold text-[#0070c0]">2.73</span>
                                    </div>
                                </div>

                                <div>
                                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-2 block">Tingkat UMKM</span>
                                    <span className="bg-[#d4a024] text-white text-[12px] font-bold px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm">
                                        Tradisional Teladan
                                    </span>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-50">
                                    <div>
                                        <span className="text-[10px] uppercase tracking-wider text-green-500 font-bold mb-2 block">Keunggulan</span>
                                        <ol className="text-[11px] text-gray-600 space-y-1 list-decimal pl-4">
                                            <li>Pemahaman Industri & Pasar</li>
                                            <li>Kepemimpinan</li>
                                            <li>Manaj. Keuangan</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase tracking-wider text-orange-500 font-bold mb-2 block">Kekurangan</span>
                                        <ol className="text-[11px] text-gray-600 space-y-1 list-decimal pl-4">
                                            <li>Manaj. Operasional</li>
                                            <li>Kepedulian Sosial</li>
                                            <li>Skala Usaha</li>
                                        </ol>
                                    </div>
                                </div>

                                <button className="w-full border border-[#ff7a00] text-[#ff7a00] hover:bg-[#fff5eb] font-bold text-[12px] py-2.5 rounded-xl transition-all active:scale-[0.98]">
                                    Lihat Sertifikat
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Desktop View: Table */}
                    <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-left text-[13px]">
                            <thead className="bg-[#f8fafc] text-[#55677b] font-medium border-b border-gray-200">
                                <tr>
                                    <th className="py-4 px-6 w-16 text-center">No.</th>
                                    <th className="py-4 px-6">Tanggal Penilaian</th>
                                    <th className="py-4 px-6">Nilai Penilaian</th>
                                    <th className="py-4 px-6">Tingkat UMKM</th>
                                    <th className="py-4 px-6 min-w-[200px]">Keunggulan</th>
                                    <th className="py-4 px-6 min-w-[200px]">Kekurangan</th>
                                    <th className="py-4 px-6 text-center">Tindakan</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white hover:bg-gray-50 transition-colors">
                                    <td className="py-4 px-6 text-center text-gray-500">1.</td>
                                    <td className="py-4 px-6 text-gray-700">1 Desember 2025</td>
                                    <td className="py-4 px-6 text-gray-700">2.73</td>
                                    <td className="py-4 px-6">
                                        <span className="bg-[#d4a024] text-white text-md font-bold px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm">
                                            Tradisional Teladan
                                            <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-gray-600">
                                        <ol className="list-decimal pl-4 space-y-1">
                                            <li>Pemahaman Industri & Pasar</li>
                                            <li>Kepemimpinan</li>
                                            <li>Manajemen Keuangan</li>
                                        </ol>
                                    </td>
                                    <td className="py-4 px-6 text-gray-600">
                                        <ol className="list-decimal pl-4 space-y-1">
                                            <li>Manajemen Operasional</li>
                                            <li>Kepedulian sosial dan lingkungan</li>
                                            <li>Skala Usaha</li>
                                        </ol>
                                    </td>
                                    <td className="py-4 px-6 text-center">
                                        <button className="border border-[#ff7a00] text-[#ff7a00] hover:bg-[#fff5eb] font-semibold text-[11px] py-1.5 px-4 rounded-lg transition-colors whitespace-nowrap">
                                            Lihat Sertifikat
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkoringTab;
