import React, { useState } from 'react';

export default function ClauseCard({ clause, isDemoMode }) {
  const [isCopied, setIsCopied] = useState(false);

  const {
    clauseNumber,
    title,
    riskLevel,
    badgeLabel,
    originalText,
    plainLanguage,
    whyItMatters,
    recommendedAction,
    sourceRef,
  } = clause;

  const getRiskStyles = (level) => {
    switch (level) {
      case 'HIGH':
        return {
          border: 'border-red-500/40 hover:border-red-500/70',
          badge: 'bg-red-500/10 text-red-400 border-red-500/30',
          accent: 'text-red-400',
          glow: 'from-red-500/10 to-transparent',
        };
      case 'MODERATE':
        return {
          border: 'border-amber-500/40 hover:border-amber-500/70',
          badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
          accent: 'text-amber-400',
          glow: 'from-amber-500/10 to-transparent',
        };
      case 'LOW':
      case 'INFORMATIONAL':
      default:
        return {
          border: 'border-sky-500/40 hover:border-sky-500/70',
          badge: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
          accent: 'text-sky-400',
          glow: 'from-sky-500/10 to-transparent',
        };
    }
  };

  const style = getRiskStyles(riskLevel);

  const handleCopyClause = () => {
    navigator.clipboard?.writeText(originalText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div
      className={`rounded-2xl bg-zinc-900/50 border ${style.border} p-5 sm:p-7 backdrop-blur-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between space-y-5`}
    >
      {/* Background Subtle Gradient */}
      <div className={`absolute top-0 right-0 w-80 h-32 bg-gradient-to-bl ${style.glow} pointer-events-none rounded-2xl`} />

      {/* Clause Card Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 relative z-10">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-wider">
              Clause {clauseNumber}
            </span>
            <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${style.badge}`}>
              {badgeLabel || `${riskLevel} Risk`}
            </span>
            {isDemoMode && (
              <span className="text-[10px] font-mono text-zinc-500 bg-zinc-950 px-1.5 py-0.5 rounded border border-zinc-800">
                Sample
              </span>
            )}
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
            {title}
          </h3>
        </div>

        {/* Source citation badge */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-950/80 px-2.5 py-1 rounded-lg border border-zinc-800">
          <svg className="w-3.5 h-3.5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
          </svg>
          <span>{sourceRef}</span>
        </div>
      </div>

      {/* 1. Original Clause Text Box */}
      <div className="space-y-1.5 relative z-10">
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span className="font-mono uppercase text-[10px] tracking-wider text-zinc-500 font-semibold flex items-center gap-1.5">
            <svg className="w-3 h-3 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            Original Clause Extract
          </span>
          <button
            type="button"
            onClick={handleCopyClause}
            className="text-[11px] text-zinc-400 hover:text-white transition-colors cursor-pointer font-mono"
          >
            {isCopied ? '✓ Copied' : 'Copy Text'}
          </button>
        </div>

        <blockquote className="p-3.5 sm:p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs sm:text-sm text-zinc-300 font-mono leading-relaxed italic relative">
          "{originalText}"
        </blockquote>
      </div>

      {/* 2. Plain Language Explanation */}
      <div className="space-y-1.5 relative z-10">
        <span className="font-mono uppercase text-[10px] tracking-wider text-indigo-400 font-bold flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Plain-Language Breakdown
        </span>
        <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-normal bg-indigo-950/20 border border-indigo-500/20 p-3 rounded-xl">
          {plainLanguage}
        </p>
      </div>

      {/* 3. Why It Matters & Recommended Action Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10 pt-1">
        
        {/* Why It Matters */}
        <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800 space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>Why It Matters</span>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            {whyItMatters}
          </p>
        </div>

        {/* Recommended Action */}
        <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800 space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Recommended Counter-Action</span>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            {recommendedAction}
          </p>
        </div>

      </div>

    </div>
  );
}
