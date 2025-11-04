import React from 'react';
import { Users, Clock, CheckCircle2, Banknote } from 'lucide-react';

const stats = [
  { label: 'Hadir Hari Ini', value: 124, change: '+4.2%', icon: CheckCircle2, color: 'text-emerald-600' },
  { label: 'Terlambat', value: 11, change: '-1.1%', icon: Clock, color: 'text-amber-600' },
  { label: 'Cuti/Izin', value: 8, change: '+0.5%', icon: Users, color: 'text-indigo-600' },
  { label: 'Total Payroll Bulan Ini', value: 'Rp 1.24M', change: '+2.3%', icon: Banknote, color: 'text-lime-600' },
];

export default function DashboardHighlights() {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Ringkasan Cepat</h2>
        <p className="text-gray-600 mt-2">Pantau metrik HR penting secara real-time.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-lg bg-white ${s.color}`}>
                  <s.icon size={22} />
                </div>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">{s.change}</span>
              </div>
              <div className="mt-4 text-2xl font-bold text-gray-900">{s.value}</div>
              <div className="text-sm text-gray-600">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Tren Kehadiran Mingguan</h3>
            <span className="text-xs text-gray-500">Realtime</span>
          </div>
          <div className="h-40 w-full">
            <svg viewBox="0 0 300 100" className="h-full w-full">
              <defs>
                <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#6366F1" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 70 C 30 50, 60 60, 90 40 S 150 30, 180 45 S 240 60, 300 35" fill="none" stroke="#6366F1" strokeWidth="3" />
              <path d="M0 100 L 0 70 C 30 50, 60 60, 90 40 S 150 30, 180 45 S 240 60, 300 35 L 300 100 Z" fill="url(#grad)" />
            </svg>
          </div>
          <div className="mt-3 flex justify-between text-xs text-gray-500">
            <span>Sen</span><span>Sel</span><span>Rab</span><span>Kam</span><span>Jum</span><span>Sab</span><span>Min</span>
          </div>
        </div>
      </div>
    </section>
  );
}
