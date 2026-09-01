import React, { useState } from 'react';
import ClauseCard from './ClauseCard';

export default function FlaggedClauses({ clauses = [], isDemoMode }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const highRiskCount = clauses.filter((c) => c.riskLevel === 'HIGH').length;
  const moderateRiskCount = clauses.filter((c) => c.riskLevel === 'MODERATE').length;
  const lowRiskCount = clauses.filter((c) => c.riskLevel === 'LOW' || c.riskLevel === 'INFORMATIONAL').length;

  const filteredClauses = clauses.filter((c) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'HIGH') return c.riskLevel === 'HIGH';
    if (activeFilter === 'MODERATE') return c.riskLevel === 'MODERATE';
    if (activeFilter === 'LOW') return c.riskLevel === 'LOW' || c.riskLevel === 'INFORMATIONAL';
    return true;
  });

  return (
    <section aria-labelledby="flagged-clauses-heading" className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <h2 id="flagged-clauses-heading" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Flagged Clauses & Risk Breakdown
            </h2>
            <p className="text-xs text-zinc-400">
              Detailed analysis of clauses with highlighted liability shifts, restrictions, or unfavorable terms.
            </p>
          </div>
        </div>

        {isDemoMode && (
          <span className="text-[11px] font-mono text-zinc-500 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-full self-start sm:self-auto">
            Sample Extracted Clauses
          </span>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 backdrop-blur-md">
        <button
          type="button"
          onClick={() => setActiveFilter('ALL')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            activeFilter === 'ALL'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
          }`}
        >
          All Clauses ({clauses.length})
        </button>

        <button
          type="button"
          onClick={() => setActiveFilter('HIGH')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
            activeFilter === 'HIGH'
              ? 'bg-red-600 text-white shadow-md'
              : 'text-zinc-400 hover:text-red-300 hover:bg-zinc-800'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
          <span>High Risk ({highRiskCount})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveFilter('MODERATE')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
            activeFilter === 'MODERATE'
              ? 'bg-amber-600 text-white shadow-md'
              : 'text-zinc-400 hover:text-amber-300 hover:bg-zinc-800'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>Moderate Risk ({moderateRiskCount})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveFilter('LOW')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
            activeFilter === 'LOW'
              ? 'bg-sky-600 text-white shadow-md'
              : 'text-zinc-400 hover:text-sky-300 hover:bg-zinc-800'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
          <span>Low / Info ({lowRiskCount})</span>
        </button>
      </div>

      {/* Clauses Cards List */}
      <div className="space-y-4">
        {filteredClauses.map((clause) => (
          <ClauseCard
            key={clause.id}
            clause={clause}
            isDemoMode={isDemoMode}
          />
        ))}

        {filteredClauses.length === 0 && (
          <div className="text-center py-12 rounded-2xl bg-zinc-900/30 border border-zinc-800 text-zinc-500 text-sm">
            No clauses found for the selected risk filter.
          </div>
        )}
      </div>
    </section>
  );
}
