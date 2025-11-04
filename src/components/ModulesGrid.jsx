import React from 'react';
import { Users, Shield, Clock, QrCode, Fingerprint, MapPin, Calendar, FileText, Banknote, Target, BookOpen, BarChart3, Settings } from 'lucide-react';

const modules = [
  { icon: Shield, title: 'Auth & Role', desc: 'Superadmin, HR, Payroll, Manager, OutletAdmin, Employee. Kontrol akses granular.', color: 'bg-indigo-50 text-indigo-700' },
  { icon: QrCode, title: 'Absensi QR', desc: 'Scan QR di lokasi untuk clock-in/out dengan validasi waktu.', color: 'bg-emerald-50 text-emerald-700' },
  { icon: Fingerprint, title: 'Fingerprint', desc: 'Integrasi perangkat on-premises via webhook aman atau impor CSV.', color: 'bg-fuchsia-50 text-fuchsia-700' },
  { icon: MapPin, title: 'GPS Geofence', desc: 'Batas koordinat per-outlet dengan radius dan jam kerja.', color: 'bg-orange-50 text-orange-700' },
  { icon: Calendar, title: 'Cuti & Izin', desc: 'Pengajuan cuti, sakit, izin, lembur, kasbon dengan approval chain.', color: 'bg-blue-50 text-blue-700' },
  { icon: Clock, title: 'Timeline 8-jam', desc: 'Rangkum aktivitas harian karyawan untuk compliance KSI.', color: 'bg-cyan-50 text-cyan-700' },
  { icon: BookOpen, title: 'LMS', desc: 'Materi, kuis, sertifikasi. Tracking progress karyawan.', color: 'bg-violet-50 text-violet-700' },
  { icon: Target, title: 'KPI', desc: 'Target per role dan penilaian periodik.', color: 'bg-rose-50 text-rose-700' },
  { icon: Banknote, title: 'Payroll', desc: 'Rumus lembur, ekspor template bank, komponen gaji fleksibel.', color: 'bg-lime-50 text-lime-700' },
  { icon: BarChart3, title: 'Dashboard', desc: 'Grafik interaktif & insight kehadiran, produktivitas, biaya.', color: 'bg-amber-50 text-amber-700' },
  { icon: Users, title: 'Organisasi', desc: 'Struktur, outlet, departemen, jabatan, level gaji.', color: 'bg-sky-50 text-sky-700' },
  { icon: Settings, title: 'Settings', desc: 'Jam kerja, kebijakan cuti, koordinat GPS, SLA lembur.', color: 'bg-slate-50 text-slate-700' },
];

export default function ModulesGrid() {
  return (
    <section id="modules" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Modul Utama</h2>
            <p className="text-gray-600 mt-2">Semua fitur HRIS+ERP yang dapat dikonfigurasi sesuai Peraturan Perusahaan KSI.</p>
          </div>
          <a href="#settings" className="hidden sm:inline text-sm text-indigo-600 hover:text-indigo-700 font-medium">Konfigurasi Admin →</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => (
            <div key={m.title} className="group rounded-xl border border-gray-200 hover:border-gray-300 bg-white p-5 shadow-sm hover:shadow transition">
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${m.color} mb-3`}>
                <m.icon size={20} />
              </div>
              <h3 className="font-semibold text-gray-900">{m.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{m.desc}</p>
              <div className="mt-4 text-indigo-600 text-sm opacity-0 group-hover:opacity-100 transition">Pelajari lebih lanjut →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
