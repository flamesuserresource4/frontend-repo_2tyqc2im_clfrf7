import React from 'react';
import { Mail, Shield, Server } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white" id="settings">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-indigo-600 flex items-center justify-center text-white font-bold">FB</div>
              <span className="font-semibold text-gray-900">FlamesBlue HR</span>
            </div>
            <p className="mt-3 text-sm text-gray-600">Dibangun untuk kebutuhan HRIS+ERP dengan pengaturan lengkap: koordinat GPS, jam kerja, kebijakan, dan integrasi perbankan.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Keamanan & Infrastruktur</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2"><Shield size={16}/> HTTPS/TLS di hr.flamesblue.com</li>
              <li className="flex items-center gap-2"><Server size={16}/> Postgres, Redis, dan S3-compatible</li>
              <li>Backup harian ke region terpisah</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Hubungi</h4>
            <p className="mt-3 text-sm text-gray-600">Ingin demo atau konsultasi implementasi?</p>
            <a href="mailto:hello@flamesblue.com" className="mt-3 inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black"><Mail size={16}/> hello@flamesblue.com</a>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} FlamesBlue. All rights reserved.</div>
      </div>
    </footer>
  );
}
