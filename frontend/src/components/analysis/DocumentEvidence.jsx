import React from 'react';

export default function DocumentEvidence({ evidence = [], isDemoMode }) {
  return (
    <section aria-labelledby="evidence-heading" className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <h2 id="evidence-heading" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Document-Grounded Evidence
            </h2>
            <p className="text-xs text-zinc-400">
              Every finding and risk verdict is anchored directly to verbatim text excerpts from the source document.
            </p>
          </div>
        </div>

        {isDemoMode && (
          <span className="text-[11px] font-mono text-zinc-500 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-full self-start sm:self-auto">
            Sample Evidence Citations
          </span>
        )}
      </div>

      {/* Evidence Cards Table / Grid */}
      <div className="rounded-3xl bg-zinc-900/40 border border-white/[0.08] p-6 backdrop-blur-xl space-y-4">
        <div className="text-xs text-zinc-400 font-mono pb-2 border-b border-zinc-800/80 flex items-center justify-between">
          <span>Finding & Direct Citation Mapping</span>
          <span className="text-emerald-400 flex items-center gap-1 font-semibold">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Grounded Citations
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {evidence.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono text-indigo-400 font-bold uppercase tracking-wider">
                    {item.clauseRef}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                    {item.sourceLocation}
                  </span>
                </div>

                <h4 className="text-sm font-semibold text-white tracking-tight mb-2">
                  {item.finding}
                </h4>

                <blockquote className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800/60 text-xs font-mono text-zinc-300 italic leading-relaxed">
                  {item.excerpt}
                </blockquote>
              </div>

              <div className="pt-2 border-t border-zinc-900 text-[11px] text-zinc-400 flex items-center gap-1.5">
                <span className="text-amber-400 font-semibold">Impact:</span>
                <span>{item.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
