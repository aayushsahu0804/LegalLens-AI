import React from 'react';
import { PERSONA_OPTIONS } from '../../constants/upload';

function renderPersonaIcon(iconName, isSelected) {
  const iconClasses = `w-6 h-6 transition-colors ${
    isSelected ? 'text-indigo-400' : 'text-zinc-400 group-hover:text-zinc-200'
  }`;

  switch (iconName) {
    case 'student':
      return (
        <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 14v7" />
        </svg>
      );
    case 'employee':
      return (
        <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case 'freelancer':
      return (
        <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case 'tenant':
      return (
        <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      );
    case 'founder':
      return (
        <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case 'other':
    default:
      return (
        <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      );
  }
}

export default function PersonaStep({
  selectedPersona,
  customPersona,
  onPersonaSelect,
  onCustomPersonaChange,
}) {
  return (
    <div className="space-y-6">
      {/* Step Header */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Who are you?
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
          Select your perspective so LegalLens AI can highlight the risks, indemnities, and termination clauses most relevant to your legal position.
        </p>
      </div>

      {/* Persona Cards Grid */}
      <div
        role="radiogroup"
        aria-label="Select your user profile role"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {PERSONA_OPTIONS.map((option) => {
          const isSelected = selectedPersona === option.id;

          return (
            <div
              key={option.id}
              role="radio"
              aria-checked={isSelected}
              tabIndex={0}
              onClick={() => onPersonaSelect(option.id)}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  onPersonaSelect(option.id);
                }
              }}
              className={`group relative rounded-2xl p-5 cursor-pointer transition-all duration-300 flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                isSelected
                  ? 'bg-gradient-to-b from-indigo-950/60 via-zinc-900/90 to-zinc-950 border-2 border-indigo-500 shadow-[0_0_25px_-5px_rgba(99,102,241,0.4)]'
                  : 'bg-zinc-900/40 border border-white/[0.08] hover:border-zinc-700/80 hover:bg-zinc-900/70'
              }`}
            >
              {/* Header inside Card */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                      isSelected
                        ? 'bg-indigo-600/20 border-indigo-500/50'
                        : 'bg-zinc-800/80 border-zinc-700/60 group-hover:border-zinc-600'
                    }`}
                  >
                    {renderPersonaIcon(option.icon, isSelected)}
                  </div>

                  {/* Radio Indicator */}
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                      isSelected
                        ? 'border-indigo-400 bg-indigo-600'
                        : 'border-zinc-700 bg-zinc-900 group-hover:border-zinc-500'
                    }`}
                  >
                    {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                </div>

                <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                  <span>{option.title}</span>
                </h3>
                <span className="text-[11px] font-mono text-indigo-400/80 block mt-0.5">
                  {option.subtitle}
                </span>

                <p className="text-xs text-zinc-400 leading-relaxed mt-2.5">
                  {option.description}
                </p>
              </div>

              {/* Selection Status Badge */}
              <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">
                  Perspective
                </span>
                <span
                  className={`text-[11px] font-medium transition-colors ${
                    isSelected ? 'text-indigo-300 font-semibold' : 'text-zinc-500 group-hover:text-zinc-400'
                  }`}
                >
                  {isSelected ? 'Selected' : 'Click to select'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Custom Role Input if "Other" is chosen */}
      {selectedPersona === 'other' && (
        <div className="p-5 rounded-2xl bg-zinc-900/60 border border-indigo-500/30 space-y-2 animate-in fade-in duration-200">
          <label htmlFor="custom-role-input" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
            Specify Your Role / Perspective (Optional):
          </label>
          <input
            id="custom-role-input"
            type="text"
            value={customPersona}
            onChange={(e) => onCustomPersonaChange(e.target.value)}
            placeholder="e.g. Real Estate Investor, Consultant, Commercial Buyer..."
            maxLength={80}
            className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-700/80 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50"
          />
          <p className="text-[11px] text-zinc-500">
            This descriptor will be provided to the AI prompt in subsequent milestones.
          </p>
        </div>
      )}
    </div>
  );
}
