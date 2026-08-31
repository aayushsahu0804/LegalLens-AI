import React from 'react';

const FEATURES = [
  {
    title: 'Precise Clause Extraction',
    description: 'Instantly identifies and isolates critical clauses including liability, termination, non-compete, and indemnification.',
    badge: 'Structure',
    icon: (
      <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    title: 'Unfavorable Term Detection',
    description: 'Detects ambiguous, one-sided, or commercially aggressive terms that present high operational or legal risk.',
    badge: 'Protection',
    icon: (
      <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: 'Plain-Language Summaries',
    description: 'Translates convoluted legalese into digestible executive takeaways, complete with clear action items.',
    badge: 'Clarity',
    icon: (
      <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    title: 'Multilingual Translation',
    description: 'Review contracts across supported regional and global languages while preserving original legal meaning.',
    badge: 'Global',
    icon: (
      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
  },
  {
    title: 'Fairness & Risk Scoring',
    description: 'Objective, automated risk rating to help legal, procurement, and individual users gauge contract balance.',
    badge: 'Scoring',
    icon: (
      <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Exportable Audit Reports',
    description: 'Generate clean, shareable analysis briefs with direct clause citations and flagged items ready for review.',
    badge: 'Reporting',
    icon: (
      <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 border-t border-white/[0.06] bg-[#07080a] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20">
            Intelligent Document Review
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineered for Uncompromising Legal Precision
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            LegalLens AI delivers deep, verifiable insights grounded directly in your contractual terms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feat) => (
            <div
              key={feat.title}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-white/[0.06] hover:border-zinc-700/80 transition-all duration-300 backdrop-blur-sm group hover:bg-zinc-900/70 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {feat.icon}
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800">
                    {feat.badge}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-zinc-100 group-hover:text-white transition-colors">
                  {feat.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
