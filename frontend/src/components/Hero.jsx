import React from 'react';
import { useNavigate } from 'react-router-dom';
import TrustIndicators from './TrustIndicators';

export default function Hero({ onUploadClick }) {
  const navigate = useNavigate();

  const handleUploadClick = (e) => {
    e.preventDefault();
    if (onUploadClick) {
      onUploadClick();
    } else {
      navigate('/upload');
    }
  };

  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32 overflow-hidden">
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-indigo-600/15 via-sky-500/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-indigo-900/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-sky-900/10 blur-[100px] pointer-events-none rounded-full" />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Content */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          {/* Subtle Tag / Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-medium text-zinc-300 shadow-sm backdrop-blur-md mb-8 hover:border-zinc-700 transition-colors">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-zinc-400">Next-Gen Legal Intelligence</span>
            <span className="text-zinc-600">•</span>
            <span className="text-indigo-400 font-semibold">AI Risk Analysis</span>
          </div>

          {/* Hero Heading Hierarchy */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              See Beyond the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-200 to-indigo-400">
                Fine Print.
              </span>
            </h1>
            <p className="text-lg sm:text-2xl lg:text-3xl font-semibold text-zinc-200 tracking-tight">
              Understand Your Documents. Protect Your Interests.
            </p>
          </div>

          {/* Supporting Text */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-zinc-400 leading-relaxed max-w-2xl font-normal">
            LegalLens AI analyzes complex legal documents, identifies hidden risks and unfavorable clauses, and explains legal obligations in clear, plain language.
          </p>

          {/* Prominent "Upload Document" CTA */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              type="button"
              id="hero-upload-cta"
              onClick={handleUploadClick}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 w-full sm:w-auto rounded-xl font-semibold text-base text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-600 hover:from-indigo-500 hover:to-sky-500 shadow-[0_0_30px_-5px_rgba(99,102,241,0.45)] hover:shadow-[0_0_35px_0px_rgba(99,102,241,0.6)] transition-all duration-300 transform active:scale-[0.98] border border-indigo-400/30 cursor-pointer"
            >
              {/* Document upload icon */}
              <svg
                className="w-5 h-5 text-indigo-100 group-hover:-translate-y-0.5 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <span>Upload Document</span>
              
              {/* Subtle arrow */}
              <svg
                className="w-4 h-4 text-indigo-200 group-hover:translate-x-0.5 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <p className="mt-3 text-xs text-zinc-500 font-medium">
            Supports PDF, DOCX, & TXT • Confidential & Grounded Analysis
          </p>
        </div>

        {/* LegalLens Interactive Visual Showcase Card */}
        <div className="mt-14 sm:mt-16 max-w-4xl mx-auto">
          <div className="relative rounded-2xl p-1 bg-gradient-to-b from-zinc-700/40 via-zinc-800/20 to-transparent shadow-2xl">
            <div className="rounded-[15px] bg-[#0c0e12]/90 border border-white/[0.06] p-5 sm:p-7 backdrop-blur-xl">
              
              {/* Card Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-zinc-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  </div>
                  <span className="text-xs font-mono text-zinc-400 ml-2 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Master_Services_Agreement_v2.pdf
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Analysis Ready
                  </span>
                </div>
              </div>

              {/* Sample Analysis Preview Grid */}
              <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-4">
                
                {/* Left: Clause Extract */}
                <div className="lg:col-span-7 rounded-xl bg-zinc-950/60 p-4 border border-zinc-800/60 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                      <span className="font-semibold text-zinc-300">Clause 8.4 — Indemnification & Liability</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        Moderate Risk
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed font-mono bg-zinc-900/50 p-2.5 rounded-lg border border-zinc-800/40">
                      "Client shall unconditionally indemnify Service Provider against all third-party claims, regardless of fault or contributory negligence..."
                    </p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-zinc-800/50 flex items-center gap-2 text-[11px] text-zinc-400">
                    <span className="text-indigo-400 font-medium">Plain-Language Insight:</span>
                    <span>This clause shifts 100% liability to you even if the provider is negligent.</span>
                  </div>
                </div>

                {/* Right: Metrics & Risk Score Summary */}
                <div className="lg:col-span-5 rounded-xl bg-zinc-950/60 p-4 border border-zinc-800/60 flex flex-col justify-between gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-zinc-400">Clarity & Fairness Score</span>
                    <span className="text-xs font-bold text-sky-400">84 / 100</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-sky-400 w-[84%]" />
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-center text-xs">
                    <div className="p-2 rounded-lg bg-zinc-900/60 border border-zinc-800/50">
                      <div className="text-zinc-500 text-[10px]">Key Obligations</div>
                      <div className="font-semibold text-zinc-200 mt-0.5">14 Identified</div>
                    </div>
                    <div className="p-2 rounded-lg bg-zinc-900/60 border border-zinc-800/50">
                      <div className="text-zinc-500 text-[10px]">Flagged Clauses</div>
                      <div className="font-semibold text-amber-400 mt-0.5">2 Action Items</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Three Trust Indicators */}
        <div className="mt-14 sm:mt-20">
          <TrustIndicators />
        </div>

      </div>
    </section>
  );
}
