import React from 'react';
import { Home, Settings, Shield, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-indigo-600 flex items-center justify-center text-white font-bold">FB</div>
            <span className="font-semibold text-gray-900">FlamesBlue HR</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#home" className="flex items-center gap-2 hover:text-gray-900 transition-colors"><Home size={18} /> Beranda</a>
            <a href="#modules" className="hover:text-gray-900 transition-colors">Modul</a>
            <a href="#features" className="hover:text-gray-900 transition-colors">Fitur</a>
            <a href="#settings" className="flex items-center gap-2 hover:text-gray-900 transition-colors"><Settings size={18} /> Pengaturan</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Shield size={16} /> Masuk Admin
            </button>
            <button className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700">
              <User size={16} /> Masuk Karyawan
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
