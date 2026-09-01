import React, { useState } from 'react';
import { SUPPORTED_LANGUAGES } from '../../constants/languages';
import { PERSONA_OPTIONS } from '../../constants/upload';

function formatFileSize(bytes) {
  if (!bytes || bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

export default function ReviewStep({
  file,
  persona,
  customPersona,
  language,
  onGoToStep,
  onResetWorkflow,
}) {
  const [isSimulatingAnalysis, setIsSimulatingAnalysis] = useState(false);
  const [showMilestoneModal, setShowMilestoneModal] = useState(false);

  // Lookups
  const personaObj = PERSONA_OPTIONS.find((p) => p.id === persona) || {
    title: persona || 'Not specified',
    subtitle: 'Custom Perspective',
    description: '',
  };

  const languageObj = SUPPORTED_LANGUAGES.find((l) => l.code === language) || {
    label: language,
    nativeLabel: '',
    flag: '🌐',
  };

  const handleAnalyzeClick = () => {
    setIsSimulatingAnalysis(true);
    // Simulates instant client-side state packaging before opening the milestone notice
    setTimeout(() => {
      setIsSimulatingAnalysis(false);
      setShowMilestoneModal(true);
    }, 600);
  };

  const analysisPayloadSummary = {
    document: {
      name: file?.name || 'No document loaded',
      sizeBytes: file?.size || 0,
      sizeFormatted: formatFileSize(file?.size || 0),
      format: 'PDF',
    },
    perspective: {
      id: persona,
      role: persona === 'other' && customPersona ? `${personaObj.title} (${customPersona})` : personaObj.title,
    },
    outputLanguage: {
      code: language,
      name: languageObj.label,
    },
    pipelineStatus: 'READY_FOR_GEMINI_INTEGRATION',
  };

  return (
    <div className="space-y-8">
      {/* Step Header */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Review & Configure Analysis
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
          Verify your document parameters, perspective, and output language before initiating the analysis workflow.
        </p>
      </div>

      {/* Review Summary Grid */}
      <div className="max-w-3xl mx-auto space-y-4">
        
        {/* Row 1: Document Details */}
        <div className="rounded-2xl bg-zinc-900/40 border border-white/[0.08] p-5 sm:p-6 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-zinc-700/80 transition-colors">
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-12 h-12 rounded-xl bg-red-950/50 border border-red-500/30 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 13h6m-6 4h4" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-0.5">
                01 • Selected Document
              </div>
              <div className="text-sm sm:text-base font-bold text-white truncate" title={file?.name}>
                {file?.name || 'No file selected'}
              </div>
              <div className="text-xs text-zinc-400 font-mono mt-0.5">
                {formatFileSize(file?.size || 0)} • Validated PDF
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onGoToStep(1)}
            className="px-3.5 py-1.5 rounded-xl text-xs font-medium text-indigo-300 hover:text-white bg-indigo-950/40 hover:bg-indigo-900/60 border border-indigo-500/30 transition-colors self-start sm:self-center cursor-pointer"
          >
            Change
          </button>
        </div>

        {/* Row 2: Persona Details */}
        <div className="rounded-2xl bg-zinc-900/40 border border-white/[0.08] p-5 sm:p-6 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-zinc-700/80 transition-colors">
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-12 h-12 rounded-xl bg-indigo-950/50 border border-indigo-500/30 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-0.5">
                02 • Analysis Perspective
              </div>
              <div className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <span>{personaObj.title}</span>
                {persona === 'other' && customPersona && (
                  <span className="text-xs font-normal text-indigo-300 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-500/30">
                    "{customPersona}"
                  </span>
                )}
              </div>
              <div className="text-xs text-zinc-400 mt-0.5 truncate">
                {personaObj.description || personaObj.subtitle}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onGoToStep(2)}
            className="px-3.5 py-1.5 rounded-xl text-xs font-medium text-indigo-300 hover:text-white bg-indigo-950/40 hover:bg-indigo-900/60 border border-indigo-500/30 transition-colors self-start sm:self-center cursor-pointer"
          >
            Change
          </button>
        </div>

        {/* Row 3: Language Details */}
        <div className="rounded-2xl bg-zinc-900/40 border border-white/[0.08] p-5 sm:p-6 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-zinc-700/80 transition-colors">
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-12 h-12 rounded-xl bg-sky-950/50 border border-sky-500/30 flex items-center justify-center shrink-0 text-2xl">
              {languageObj.flag}
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-0.5">
                03 • Output Language
              </div>
              <div className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <span>{languageObj.label}</span>
                {languageObj.nativeLabel && (
                  <span className="text-xs font-normal text-zinc-400 font-sans">
                    ({languageObj.nativeLabel})
                  </span>
                )}
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">
                Plain-language briefings & clause breakdowns will be rendered in {languageObj.label}.
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onGoToStep(3)}
            className="px-3.5 py-1.5 rounded-xl text-xs font-medium text-indigo-300 hover:text-white bg-indigo-950/40 hover:bg-indigo-900/60 border border-indigo-500/30 transition-colors self-start sm:self-center cursor-pointer"
          >
            Change
          </button>
        </div>

      </div>

      {/* Prominent Analyze Document Button Action */}
      <div className="max-w-3xl mx-auto flex flex-col items-center pt-4">
        <button
          type="button"
          onClick={handleAnalyzeClick}
          disabled={isSimulatingAnalysis || !file}
          className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 w-full sm:w-auto rounded-xl font-bold text-base text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-600 hover:from-indigo-500 hover:to-sky-500 shadow-[0_0_35px_rgba(99,102,241,0.45)] hover:shadow-[0_0_45px_rgba(99,102,241,0.65)] transition-all duration-300 transform active:scale-98 border border-indigo-400/40 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSimulatingAnalysis ? (
            <>
              <svg className="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              <span>Preparing Payload...</span>
            </>
          ) : (
            <>
              {/* Sparkle / Lens Icon */}
              <svg className="w-5 h-5 text-indigo-200 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Analyze Document</span>
              <svg className="w-4 h-4 text-indigo-200 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>

        <p className="mt-3 text-xs text-zinc-500 text-center font-mono">
          Ready for milestone pipeline dispatch • No remote transmission in this phase
        </p>
      </div>

      {/* Clearly Marked "AI Integration Scheduled for Next Milestone" Dialog Modal */}
      {showMilestoneModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl rounded-3xl bg-[#0c0e12] border border-indigo-500/40 p-6 sm:p-8 shadow-[0_0_60px_-10px_rgba(99,102,241,0.4)] text-left space-y-6">
            
            {/* Header Badge */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-300">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
                Next Milestone Ready
              </span>
              <button
                type="button"
                onClick={() => setShowMilestoneModal(false)}
                className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Title & Description */}
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Document Upload & Profile Configured
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                The document upload workflow is complete! The document parameters, user persona, and target language have been validated in React state and structured for the upcoming AI processing milestone.
              </p>
            </div>

            {/* Structured Conceptual Payload Box */}
            <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 space-y-2">
              <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider flex items-center justify-between">
                <span>Client-Side Analysis Package</span>
                <span className="text-emerald-400 font-semibold">100% Prepared</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800/50">
                  <span className="text-zinc-500 block text-[10px]">Document:</span>
                  <span className="text-zinc-200 truncate block">{analysisPayloadSummary.document.name}</span>
                </div>
                <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800/50">
                  <span className="text-zinc-500 block text-[10px]">Size:</span>
                  <span className="text-zinc-200 block">{analysisPayloadSummary.document.sizeFormatted}</span>
                </div>
                <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800/50">
                  <span className="text-zinc-500 block text-[10px]">Persona:</span>
                  <span className="text-indigo-300 block truncate">{analysisPayloadSummary.perspective.role}</span>
                </div>
                <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800/50">
                  <span className="text-zinc-500 block text-[10px]">Language:</span>
                  <span className="text-sky-300 block">{analysisPayloadSummary.outputLanguage.name} ({analysisPayloadSummary.outputLanguage.code})</span>
                </div>
              </div>
            </div>

            {/* Milestone Roadmap Callout */}
            <div className="p-3.5 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-200/90 leading-relaxed">
              <strong>Upcoming Milestone:</strong> LegalLens will connect the Express backend and Google Gemini API to perform clause-by-clause extraction, liability scoring, and plain-language briefings.
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onResetWorkflow}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-medium text-zinc-300 hover:text-white bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700/60 transition-colors cursor-pointer"
              >
                Upload Another Document
              </button>
              <button
                type="button"
                onClick={() => setShowMilestoneModal(false)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 shadow-md shadow-indigo-600/30 transition-all cursor-pointer"
              >
                Dismiss Notice
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
