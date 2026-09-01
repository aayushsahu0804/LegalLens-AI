import React from 'react';
import { Link } from 'react-router-dom';

export default function AnalysisHeader({ analysis, onDownloadReport }) {
  const { document, persona, language, isDemoMode } = analysis;

  return (
    <div className="space-y-4 pb-6 border-b border-zinc-800/80">
      {/* Top navigation row */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
        <Link
          to="/upload"
          className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Upload</span>
        </Link>

        {/* Demo Status Pill */}
        {isDemoMode && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-medium font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>Sample Analysis • AI Processing Not Connected</span>
          </div>
        )}
      </div>

      {/* Main Document Details & Actions */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        
        {/* Document identity */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-[11px] font-semibold uppercase tracking-wider text-indigo-400">
              Document Analysis
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              {analysis.status || 'Analysis Complete'}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <span className="truncate max-w-xl" title={document.name}>
              {document.name}
            </span>
          </h1>

          {/* Metadata badges row */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-zinc-400 font-mono">
            <span className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
              {document.sizeFormatted || '1.8 MB'} • {document.fileType || 'PDF'}
            </span>
            <span>•</span>
            <span className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-indigo-300">
              Perspective: {persona.title}
            </span>
            <span>•</span>
            <span className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-sky-300 flex items-center gap-1.5">
              <span>{language.flag}</span>
              <span>{language.label}</span>
            </span>
          </div>
        </div>

        {/* Actions (Download Report & New Upload) */}
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onDownloadReport}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 shadow-sm transition-all duration-200 active:scale-98 cursor-pointer"
          >
            <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download Analysis</span>
          </button>

          <Link
            to="/upload"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 shadow-md shadow-indigo-600/30 transition-all duration-200 active:scale-98 border border-indigo-400/30"
          >
            <svg className="w-4 h-4 text-indigo-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            <span>Upload Another Document</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
