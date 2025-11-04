import React from 'react';
import { Rocket, Shield, CheckCircle2, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="pointer-events-none absolute -top-24 right-[-10%] h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-[-10%] h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-3 py-1 text-xs text-indigo-700 shadow-sm backdrop-blur">
              <Sparkles size={14} /> Modern • Casual • Secure
            </div>
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-transparent">HRIS + ERP</span>{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">yang terasa modern</span>
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Kelola absensi QR/GPS, pengajuan cuti/izin, payroll, KPI, dan LMS dari satu tempat. Dirancang untuk hr.flamesblue.com dengan rasa kasual namun tetap profesional.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#modules" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:from-indigo-700 hover:to-sky-600">
                <Rocket size={18} /> Jelajah Modul
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-full border border-slate-300/80 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-white shadow-sm">
                Lihat Demo
              </a>
            </div>
            <ul className="mt-6 grid sm:grid-cols-3 gap-2 text-sm text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={16}/> GPS Geofence</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={16}/> Payroll siap ekspor</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={16}/> RBAC terukur</li>
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-slate-200/80 bg-white/70 p-4 shadow-lg backdrop-blur-xl">
              <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-500 p-6 text-white">
                <div className="text-sm/5 opacity-90 flex items-center gap-2"><Shield size={16} className="opacity-90"/> Preview Dashboard</div>
                <div className="mt-2 text-2xl font-bold">FlamesBlue HR</div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {['Absensi','Pengajuan','Payroll','LMS','KPI','Settings'].map((k) => (
                    <div key={k} className="rounded-xl bg-white/20 p-3 text-center text-xs backdrop-blur hover:bg-white/25 transition">
                      {k}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white" />
    </section>
  );
}
