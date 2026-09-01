import React from 'react';

export default function KeyObligations({ obligations = [], isDemoMode }) {
  return (
    <section aria-labelledby="obligations-heading" className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h2 id="obligations-heading" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Key Contractual Obligations
            </h2>
            <p className="text-xs text-zinc-400">
              Crucial performance duties, compliance mandates, and operational timelines extracted for review.
            </p>
          </div>
        </div>

        {isDemoMode && (
          <span className="text-[11px] font-mono text-zinc-500 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-full self-start sm:self-auto">
            Sample Obligations
          </span>
        )}
      </div>

      {/* Grid of Obligations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {obligations.map((ob) => {
          const isHighPriority = ob.priority === 'High';

          return (
            <div
              key={ob.id}
              className="rounded-2xl bg-zinc-900/40 border border-white/[0.08] p-5 backdrop-blur-xl hover:border-zinc-700/80 transition-colors flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400">
                    {ob.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                        isHighPriority
                          ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                          : 'bg-zinc-800 text-zinc-400 border-zinc-700'
                      }`}
                    >
                      {ob.priority} Priority
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 bg-zinc-950 px-1.5 py-0.5 rounded border border-zinc-800">
                      {ob.clauseRef}
                    </span>
                  </div>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  <span>{ob.title}</span>
                </h3>

                <p className="text-xs text-zinc-300 leading-relaxed mt-2 pl-5">
                  {ob.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
