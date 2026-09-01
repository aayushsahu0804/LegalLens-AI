import React from 'react';
import { Link } from 'react-router-dom';

export default function AnalysisFooter({ onScrollToTop }) {
  return (
    <div className="pt-8 border-t border-zinc-800/80 space-y-6">
      {/* Privacy Notice Box */}
      <div className="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-zinc-400">
        <div className="flex items-start gap-3 max-w-3xl">
          <svg className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <div className="space-y-1">
            <span className="font-bold text-zinc-300 block">
              Document Privacy & Pipeline Notice
            </span>
            <p className="leading-relaxed">
              Your analysis is generated from your selected document context. Document processing, validation, and retention policies will be enforced by the backend in the production pipeline.
            </p>
          </div>
        </div>

        <span className="shrink-0 font-mono text-[11px] text-zinc-500 bg-zinc-900 px-2.5 py-1 rounded-lg border border-zinc-800">
          Grounded Analysis Model
        </span>
      </div>

      {/* Action Links Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/upload"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span>← Upload Another Contract</span>
          </Link>
          <span>•</span>
          <Link
            to="/subscriptions"
            className="hover:text-white transition-colors"
          >
            View Pricing & Capabilities
          </Link>
          <span>•</span>
          <Link
            to="/"
            className="hover:text-white transition-colors"
          >
            LegalLens AI Home
          </Link>
        </div>

        <button
          type="button"
          onClick={onScrollToTop}
          className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <span>Back to Top</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
