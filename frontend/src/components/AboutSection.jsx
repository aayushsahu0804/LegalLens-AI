import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 border-t border-white/[0.06] bg-[#07080a] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-zinc-900/70 to-zinc-950/90 border border-white/[0.08] backdrop-blur-xl relative overflow-hidden">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="relative">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20">
              About LegalLens AI
            </span>

            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Democratizing Legal Clarity for Everyone
            </h2>

            <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
              Standard legal documents and service agreements are often deliberately dense, making it difficult for individuals, freelancers, and growing businesses to spot unfavorable liabilities and hidden obligations.
            </p>

            <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
              <strong className="text-zinc-200">LegalLens AI</strong> was built to restore balance. By combining state-of-the-art legal intelligence models with rigorous document-grounded verification, our platform empowers you to see beyond the fine print, negotiate with confidence, and protect your commercial interests.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-zinc-800/80">
              <div>
                <div className="text-2xl font-bold text-white font-mono">100%</div>
                <div className="text-xs text-zinc-500 mt-0.5">Document Grounded</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-indigo-400 font-mono">8+</div>
                <div className="text-xs text-zinc-500 mt-0.5">Supported Languages</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-sky-400 font-mono">Zero</div>
                <div className="text-xs text-zinc-500 mt-0.5">Data Training Storage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
