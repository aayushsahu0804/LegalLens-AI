import React from 'react';

export default function RecommendedActions({ recommendedActions = [], isDemoMode }) {
  const getPriorityStyle = (priority) => {
    switch (priority) {
      case 'Urgent':
        return 'bg-red-500/10 text-red-400 border-red-500/30';
      case 'Recommended':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'Standard':
      default:
        return 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30';
    }
  };

  return (
    <section aria-labelledby="actions-heading" className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h2 id="actions-heading" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Recommended Counter-Actions & Negotiation Guide
            </h2>
            <p className="text-xs text-zinc-400">
              Suggested amendments and counter-proposals to protect your interests before signing.
            </p>
          </div>
        </div>

        {isDemoMode && (
          <span className="text-[11px] font-mono text-zinc-500 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-full self-start sm:self-auto">
            Sample Action Checklist
          </span>
        )}
      </div>

      {/* Action Items List */}
      <div className="rounded-3xl bg-zinc-900/40 border border-white/[0.08] p-6 backdrop-blur-xl space-y-3">
        {recommendedActions.map((action, idx) => (
          <div
            key={action.id || idx}
            className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-indigo-500/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-mono font-bold text-zinc-300 shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                  {action.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  {action.detail}
                </p>
              </div>
            </div>

            <span className={`self-start sm:self-center shrink-0 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${getPriorityStyle(action.priority)}`}>
              {action.priority}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
