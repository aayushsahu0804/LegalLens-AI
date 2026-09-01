import React from 'react';

const STEPS = [
  { number: '01', key: 1, label: 'Document', shortLabel: 'Doc' },
  { number: '02', key: 2, label: 'Profile', shortLabel: 'Profile' },
  { number: '03', key: 3, label: 'Language', shortLabel: 'Language' },
  { number: '04', key: 4, label: 'Review', shortLabel: 'Review' },
];

export default function UploadProgressStepper({ currentStep, onStepClick, maxReachedStep }) {
  return (
    <nav aria-label="Upload Progress" className="w-full max-w-3xl mx-auto mb-8 sm:mb-12">
      <div className="flex items-center justify-between relative">
        {/* Connecting track line */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[2px] bg-zinc-800/80 -z-0" />
        
        {/* Active progress track bar */}
        <div
          className="absolute top-1/2 left-0 -translate-y-1/2 h-[2px] bg-gradient-to-r from-indigo-500 via-sky-500 to-indigo-500 transition-all duration-500 ease-out -z-0"
          style={{
            width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%`,
          }}
        />

        {STEPS.map((step) => {
          const isCompleted = step.key < currentStep;
          const isActive = step.key === currentStep;
          const isClickable = step.key <= maxReachedStep && !isActive;

          return (
            <div key={step.key} className="relative z-10 flex flex-col items-center group">
              <button
                type="button"
                disabled={!isClickable}
                onClick={() => isClickable && onStepClick(step.key)}
                className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-tr from-indigo-600 to-sky-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.6)] ring-4 ring-indigo-500/20 scale-110'
                    : isCompleted
                    ? 'bg-zinc-900 border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-950/40 cursor-pointer'
                    : 'bg-zinc-900 border border-zinc-800 text-zinc-500 cursor-not-allowed'
                }`}
                aria-current={isActive ? 'step' : undefined}
                aria-label={`Step ${step.number}: ${step.label}`}
              >
                {isCompleted ? (
                  <svg className="w-4 h-4 text-indigo-400 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className="font-mono">{step.number}</span>
                )}
              </button>

              {/* Step Label */}
              <div className="absolute top-10 sm:top-12 flex flex-col items-center whitespace-nowrap">
                <span
                  className={`text-[11px] sm:text-xs font-medium transition-colors ${
                    isActive
                      ? 'text-white font-semibold'
                      : isCompleted
                      ? 'text-zinc-300 group-hover:text-white'
                      : 'text-zinc-500'
                  }`}
                >
                  <span className="hidden sm:inline">{step.number} </span>
                  <span>{step.label}</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
