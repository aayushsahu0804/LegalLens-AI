import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/[0.06] bg-[#07080a] py-8 sm:py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          
          {/* Brand & Copyright */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-400">LegalLens AI</span>
            <span>•</span>
            <span>&copy; {currentYear} LegalLens AI. All rights reserved.</span>
          </div>

          {/* Privacy Note & Disclaimer */}
          <div className="flex items-center gap-4 text-center sm:text-right">
            <span className="text-zinc-500">
              Not a substitute for formal legal counsel.
            </span>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Systems Operational</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
