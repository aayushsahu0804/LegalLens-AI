import React from 'react';

function renderTermIcon(iconName) {
  const iconClasses = 'w-4 h-4 text-indigo-400';
  switch (iconName) {
    case 'calendar':
      return (
        <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case 'refresh':
      return (
        <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      );
    case 'clock':
      return (
        <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'currency':
      return (
        <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'scale':
    default:
      return (
        <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      );
  }
}

export default function ImportantTerms({ importantTerms = [], isDemoMode }) {
  return (
    <section aria-labelledby="important-terms-heading" className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h2 id="important-terms-heading" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Important Terms & Timeline
            </h2>
            <p className="text-xs text-zinc-400">
              Key operational parameters, renewal triggers, and formal notice deadlines.
            </p>
          </div>
        </div>

        {isDemoMode && (
          <span className="text-[11px] font-mono text-zinc-500 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-full self-start sm:self-auto">
            Sample Timeline Data
          </span>
        )}
      </div>

      {/* Grid of Compact Terms */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {importantTerms.map((term, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-zinc-900/40 border border-white/[0.08] p-4 backdrop-blur-xl flex flex-col justify-between hover:border-zinc-700/80 transition-colors space-y-2"
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-zinc-800/80 flex items-center justify-center border border-zinc-700/50 shrink-0">
                {renderTermIcon(term.icon)}
              </div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400 truncate">
                {term.label}
              </span>
            </div>

            <div>
              <div className="text-sm font-bold text-white tracking-tight">
                {term.value}
              </div>
              <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                {term.notes}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
