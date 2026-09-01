import React from 'react';

export default function ExecutiveSummary({ executiveSummary, isDemoMode }) {
  const { overview, whatYouAreAgreeingTo, keyResponsibilities = [], majorConcerns = [] } = executiveSummary;

  return (
    <section aria-labelledby="exec-summary-heading" className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 id="exec-summary-heading" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Executive Summary
          </h2>
        </div>

        {isDemoMode && (
          <span className="text-[11px] font-mono text-zinc-500 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-full">
            Sample Briefing
          </span>
        )}
      </div>

      {/* Main Container Card */}
      <div className="rounded-3xl bg-zinc-900/40 border border-white/[0.08] p-6 sm:p-8 backdrop-blur-xl space-y-6">
        
        {/* Document Overview */}
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold block">
            What This Document Is
          </span>
          <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-normal">
            {overview}
          </p>
        </div>

        {/* What You Are Agreeing To */}
        <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-300">
            <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span>What You Are Agreeing To (Contractual Scope)</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {whatYouAreAgreeingTo}
          </p>
        </div>

        {/* 2-Column Grid: Responsibilities vs Major Concerns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-zinc-800/80">
          
          {/* Key Responsibilities */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Important Responsibilities</span>
            </div>

            <ul className="space-y-2.5">
              {keyResponsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Major Concerns */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>Primary Risk Concerns</span>
            </div>

            <ul className="space-y-2.5">
              {majorConcerns.map((concern, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{concern}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
