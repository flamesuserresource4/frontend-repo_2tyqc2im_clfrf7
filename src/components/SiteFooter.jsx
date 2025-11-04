import React from 'react';
import { Mail, Shield, Server } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/80 backdrop-blur" id="settings">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-sky-500 text-white grid place-items-center font-bold">FB</div>
              <span className="font-semibold text-slate-900">FlamesBlue HR</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">Dibangun untuk HRIS+ERP modern: koordinat GPS, jam kerja, kebijakan, dan integrasi perbankan siap pakai.</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Keamanan & Infrastruktur</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><Shield size={16}/> HTTPS/TLS di hr.flamesblue.com</li>
              <li className="flex items-center gap-2"><Server size={16}/> Postgres, Redis, dan S3-compatible</li>
              <li>Backup harian ke region terpisah</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Hubungi</h4>
            <p className="mt-3 text-sm text-slate-600">Ingin demo atau konsultasi implementasi?</p>
            <a href="mailto:hello@flamesblue.com" className="mt-3 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-black"><Mail size={16}/> hello@flamesblue.com</a>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} FlamesBlue. All rights reserved.</div>
      </div>
    </footer>
  );
}
