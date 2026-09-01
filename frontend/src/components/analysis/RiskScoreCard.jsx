import React from 'react';

export default function RiskScoreCard({ overallRisk, isDemoMode }) {
  const { score, maxScore = 100, level, summary, breakdown = [] } = overallRisk;

  // Determine color scheme based on score
  const getScoreColor = (value) => {
    if (value >= 75) return { text: 'text-red-400', bg: 'bg-red-500', gradient: 'from-red-500 to-rose-600', ring: 'border-red-500/40', glow: 'shadow-red-500/20' };
    if (value >= 50) return { text: 'text-amber-400', bg: 'bg-amber-500', gradient: 'from-amber-500 to-orange-500', ring: 'border-amber-500/40', glow: 'shadow-amber-500/20' };
    return { text: 'text-emerald-400', bg: 'bg-emerald-500', gradient: 'from-emerald-500 to-teal-500', ring: 'border-emerald-500/40', glow: 'shadow-emerald-500/20' };
  };

  const scoreTheme = getScoreColor(score);

  return (
    <div className="rounded-3xl bg-zinc-900/60 border border-white/[0.08] p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl">
      {/* Background ambient gradient glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        
        {/* Left: Score Gauge & Risk Verdict */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 min-w-0 flex-1">
          
          {/* Radial / Numerical Meter Indicator */}
          <div className="relative flex items-center justify-center shrink-0">
            <div className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 ${scoreTheme.ring} bg-zinc-950/80 flex flex-col items-center justify-center shadow-lg ${scoreTheme.glow}`}>
              <span className={`text-3xl sm:text-4xl font-extrabold font-mono tracking-tight ${scoreTheme.text}`}>
                {score}
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase tracking-wider">
                out of {maxScore}
              </span>
            </div>

            {/* Subtle Pulse Halo */}
            <div className={`absolute inset-0 rounded-full border border-dashed ${scoreTheme.ring} animate-spin-slow opacity-40 pointer-events-none`} />
          </div>

          {/* Verdict Text */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Overall Risk Assessment
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider border ${scoreTheme.ring} ${scoreTheme.text} bg-zinc-950`}>
                {level}
              </span>
              {isDemoMode && (
                <span className="text-[10px] font-mono text-zinc-500 bg-zinc-800/80 px-2 py-0.5 rounded">
                  [Sample Score]
                </span>
              )}
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
              {summary}
            </h2>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl">
              LegalLens detected high liability shifts, aggressive non-compete covenants, and unilateral cancellation clauses that warrant strategic renegotiation.
            </p>
          </div>

        </div>

        {/* Right: Category Breakdown Bars */}
        <div className="w-full lg:w-80 shrink-0 space-y-3 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-zinc-800/80 lg:pl-8">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">
            <span>Risk Breakdown by Area</span>
            <span className="text-zinc-500 font-mono">Sample</span>
          </div>

          {breakdown.map((item, idx) => {
            const itemColor = getScoreColor(item.score);
            return (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-300 truncate max-w-[190px]">{item.category}</span>
                  <span className={`font-mono font-semibold ${itemColor.text}`}>{item.score}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${itemColor.gradient} transition-all duration-500`}
                    style={{ width: `${item.score}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
