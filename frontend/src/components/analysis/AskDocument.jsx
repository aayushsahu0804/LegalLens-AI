import React, { useState } from 'react';

export default function AskDocument({ sampleQuestions = [] }) {
  const [query, setQuery] = useState('');
  const [showNotice, setShowNotice] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState('');

  const handleAsk = (questionText) => {
    const textToAsk = questionText || query;
    if (!textToAsk.trim()) return;
    setActiveQuestion(textToAsk);
    setShowNotice(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAsk();
    }
  };

  return (
    <section aria-labelledby="ask-document-heading" className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <div>
            <h2 id="ask-document-heading" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Ask Questions About This Document
            </h2>
            <p className="text-xs text-zinc-400">
              Query specific clauses, cross-examine liabilities, or seek clarification on complex contract provisions.
            </p>
          </div>
        </div>

        <span className="text-[11px] font-mono text-zinc-500 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-full self-start sm:self-auto">
          Q&A Preview Mode
        </span>
      </div>

      {/* Main Interactive Chat Box Container */}
      <div className="rounded-3xl bg-gradient-to-b from-zinc-900/70 to-zinc-950/80 border border-white/[0.08] p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
        
        {/* Chat Input Bar */}
        <div className="relative flex items-center">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything about this document (e.g. 'Can they terminate me without pay?')..."
            className="w-full pl-12 pr-28 sm:pr-32 py-4 rounded-2xl bg-zinc-950 border border-zinc-700/80 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all shadow-inner"
          />

          <button
            type="button"
            onClick={() => handleAsk()}
            className="absolute right-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 shadow-md shadow-indigo-600/30 transition-all active:scale-95 cursor-pointer border border-indigo-400/30"
          >
            Ask AI
          </button>
        </div>

        {/* Sample Question Chips */}
        <div className="space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold block">
            Suggested Contract Inquiries:
          </span>
          <div className="flex flex-wrap gap-2">
            {sampleQuestions.map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setQuery(q);
                  handleAsk(q);
                }}
                className="px-3 py-1.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-xs text-zinc-300 hover:text-white transition-all text-left flex items-center gap-2 cursor-pointer group active:scale-98"
              >
                <span className="text-indigo-400 group-hover:translate-x-0.5 transition-transform">→</span>
                <span>{q}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Milestone Readiness Dialog Notice */}
        {showNotice && (
          <div className="p-4 sm:p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 space-y-2 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-300 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                <span>Document Q&A Pipeline Ready</span>
              </div>
              <button
                type="button"
                onClick={() => setShowNotice(false)}
                className="text-xs font-mono text-zinc-400 hover:text-white px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 cursor-pointer"
              >
                Dismiss
              </button>
            </div>

            <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
              You asked: <strong className="text-indigo-300 font-medium font-mono">"{activeQuestion}"</strong>
            </p>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Interactive chat and real-time grounding via Google Gemini will be connected in the upcoming AI processing milestone. Your query will be evaluated directly against the indexed clauses of your document.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
