import React from 'react';

const TRUST_ITEMS = [
  {
    id: 'grounded',
    title: 'Document-grounded',
    description: 'Direct citations & verifiable evidence tied straight to your document clauses.',
    icon: (
      <svg
        className="w-5 h-5 text-indigo-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M9 9h1"
        />
      </svg>
    ),
    badge: 'Zero Hallucination',
  },
  {
    id: 'multilingual',
    title: 'Multilingual',
    description: 'Instant plain-language breakdowns translated across global & regional languages.',
    icon: (
      <svg
        className="w-5 h-5 text-sky-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
    ),
    badge: 'Native Translation',
  },
  {
    id: 'privacy',
    title: 'Privacy-focused',
    description: 'Confidential client-first processing with zero data retention for training.',
    icon: (
      <svg
        className="w-5 h-5 text-emerald-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    badge: 'Encrypted & Safe',
  },
];

export default function TrustIndicators({ className = '' }) {
  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5">
        {TRUST_ITEMS.map((item) => (
          <div
            key={item.id}
            className="group relative p-4 sm:p-5 rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/70 border border-white/[0.06] hover:border-zinc-700/80 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
          >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700/50 group-hover:scale-105 transition-transform duration-200">
                  {item.icon}
                </div>
                <span className="text-[10px] font-medium tracking-wide px-2 py-0.5 rounded-full bg-zinc-800/60 text-zinc-400 border border-zinc-700/40">
                  {item.badge}
                </span>
              </div>

              <h2 className="text-sm sm:text-base font-semibold text-zinc-100 mb-1.5 group-hover:text-white transition-colors">
                {item.title}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Bottom active line accent */}
            <div className="mt-4 pt-2 flex items-center gap-1.5 text-[11px] font-medium text-zinc-500 group-hover:text-zinc-400 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-indigo-400 transition-colors" />
              <span>Verified Guarantee</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
