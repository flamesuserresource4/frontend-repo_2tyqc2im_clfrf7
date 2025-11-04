import React from 'react';
import { Rocket, Shield, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-emerald-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs text-indigo-700">
              <Shield size={14} /> Compliance KSI • TLS by default
            </div>
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              HRIS + ERP terpadu untuk perusahaan modern
            </h1>
            <p className="mt-4 text-gray-600 text-base sm:text-lg">
              Kelola absensi QR/GPS, pengajuan cuti/izin, payroll, KPI, dan LMS dari satu tempat. Didesain untuk hr.flamesblue.com dengan keamanan enterprise.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#modules" className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-700">
                <Rocket size={18} /> Lihat Modul
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50">Coba Demo</a>
            </div>
            <ul className="mt-6 grid sm:grid-cols-3 gap-2 text-sm text-gray-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={16}/> GPS Geofence</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={16}/> Payroll export bank</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={16}/> Role-based access</li>
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-500 p-6 text-white">
                <div className="text-sm opacity-90">Preview Dashboard</div>
                <div className="mt-2 text-2xl font-bold">FlamesBlue HR</div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {['Absensi','Pengajuan','Payroll','LMS','KPI','Settings'].map((k) => (
                    <div key={k} className="rounded-lg bg-white/15 p-3 text-center text-xs backdrop-blur">
                      {k}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white"></div>
    </section>
  );
}
