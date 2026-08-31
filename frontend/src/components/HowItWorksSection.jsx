import React from 'react';

const STEPS = [
  {
    step: '01',
    title: 'Upload Document',
    description: 'Drag & drop contracts, agreements, or terms in PDF, DOCX, or TXT format. Stored with end-to-end client confidentiality.',
    accent: 'from-indigo-500/20 to-indigo-500/0',
  },
  {
    step: '02',
    title: 'Autonomous AI Analysis',
    description: 'LegalLens AI scans every clause, cross-referencing liability thresholds, indemnification traps, and one-sided clauses.',
    accent: 'from-sky-500/20 to-sky-500/0',
  },
  {
    step: '03',
    title: 'Plain-Language Briefing',
    description: 'Get an executive risk breakdown, actionable clause explanations, fairness scores, and recommended amendments.',
    accent: 'from-emerald-500/20 to-emerald-500/0',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 border-t border-white/[0.06] bg-[#08090c] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20">
            Streamlined Workflow
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            How LegalLens AI Works
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            Three simple steps to transform impenetrable legalese into clear, actionable intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {STEPS.map((item) => (
            <div
              key={item.step}
              className="relative p-6 sm:p-7 rounded-2xl bg-zinc-900/40 border border-white/[0.06] hover:border-zinc-700/80 transition-all duration-300 backdrop-blur-sm group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-black font-mono text-indigo-400/80 group-hover:text-indigo-300 transition-colors">
                    {item.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-indigo-500/50 group-hover:bg-indigo-400 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-100 mb-2 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
