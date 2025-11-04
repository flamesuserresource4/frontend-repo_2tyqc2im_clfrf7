import React from 'react';
import { Users, Shield, Clock, QrCode, Fingerprint, MapPin, Calendar, FileText, Banknote, Target, BookOpen, BarChart3, Settings } from 'lucide-react';

const modules = [
  { icon: Shield, title: 'Auth & Role', desc: 'Superadmin, HR, Payroll, Manager, OutletAdmin, Employee. Kontrol akses granular.', hue: 'from-indigo-500 to-sky-500' },
  { icon: QrCode, title: 'Absensi QR', desc: 'Scan QR di lokasi untuk clock-in/out dengan validasi waktu.', hue: 'from-emerald-500 to-teal-500' },
  { icon: Fingerprint, title: 'Fingerprint', desc: 'Integrasi perangkat on-premises via webhook aman atau impor CSV.', hue: 'from-fuchsia-500 to-pink-500' },
  { icon: MapPin, title: 'GPS Geofence', desc: 'Batas koordinat per-outlet dengan radius dan jam kerja.', hue: 'from-orange-500 to-amber-500' },
  { icon: Calendar, title: 'Cuti & Izin', desc: 'Pengajuan cuti, sakit, izin, lembur, kasbon dengan approval chain.', hue: 'from-blue-500 to-cyan-500' },
  { icon: Clock, title: 'Timeline 8-jam', desc: 'Rangkum aktivitas harian karyawan untuk compliance KSI.', hue: 'from-cyan-500 to-sky-500' },
  { icon: BookOpen, title: 'LMS', desc: 'Materi, kuis, sertifikasi. Tracking progress karyawan.', hue: 'from-violet-500 to-indigo-500' },
  { icon: Target, title: 'KPI', desc: 'Target per role dan penilaian periodik.', hue: 'from-rose-500 to-red-500' },
  { icon: Banknote, title: 'Payroll', desc: 'Rumus lembur, ekspor template bank, komponen gaji fleksibel.', hue: 'from-lime-500 to-emerald-500' },
  { icon: BarChart3, title: 'Dashboard', desc: 'Grafik interaktif & insight kehadiran, produktivitas, biaya.', hue: 'from-amber-500 to-yellow-500' },
  { icon: Users, title: 'Organisasi', desc: 'Struktur, outlet, departemen, jabatan, level gaji.', hue: 'from-sky-500 to-blue-500' },
  { icon: Settings, title: 'Settings', desc: 'Jam kerja, kebijakan cuti, koordinat GPS, SLA lembur.', hue: 'from-slate-500 to-slate-700' },
];

export default function ModulesGrid() {
  return (
    <section id="modules" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Modul Utama</h2>
            <p className="text-slate-600 mt-2">Semua fitur HRIS+ERP yang fleksibel untuk kebutuhan organisasi modern.</p>
          </div>
          <a href="#settings" className="hidden sm:inline text-sm text-indigo-600 hover:text-indigo-700 font-medium">Konfigurasi Admin →</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => (
            <div key={m.title} className="group rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-sm hover:shadow-md backdrop-blur transition-all duration-200 hover:-translate-y-0.5">
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${m.hue} text-white shadow-sm mb-3`}>
                <m.icon size={20} />
              </div>
              <h3 className="font-semibold text-slate-900">{m.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{m.desc}</p>
              <div className="mt-4 text-indigo-600 text-sm opacity-0 group-hover:opacity-100 transition">Pelajari lebih lanjut →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
