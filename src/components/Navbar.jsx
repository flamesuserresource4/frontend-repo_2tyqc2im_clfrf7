import React from 'react';
import { Home, Settings, Shield, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-sky-500 text-white grid place-items-center font-bold shadow-sm">FB</div>
            <span className="font-semibold tracking-tight">FlamesBlue HR</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#home" className="flex items-center gap-2 hover:text-slate-900 transition-colors"><Home size={18} /> Beranda</a>
            <a href="#modules" className="hover:text-slate-900 transition-colors">Modul</a>
            <a href="#features" className="hover:text-slate-900 transition-colors">Fitur</a>
            <a href="#settings" className="flex items-center gap-2 hover:text-slate-900 transition-colors"><Settings size={18} /> Pengaturan</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/60 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white shadow-sm">
              <Shield size={16} /> Admin
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-4 py-2 text-sm font-semibold text-white hover:from-indigo-700 hover:to-sky-600 shadow-sm">
              <User size={16} /> Karyawan
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
