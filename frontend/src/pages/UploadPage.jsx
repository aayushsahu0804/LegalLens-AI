import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UploadProgressStepper from '../components/upload/UploadProgressStepper';
import DocumentUploadStep from '../components/upload/DocumentUploadStep';
import PersonaStep from '../components/upload/PersonaStep';
import LanguageStep from '../components/upload/LanguageStep';
import ReviewStep from '../components/upload/ReviewStep';

export default function UploadPage({ currentLanguage, onLanguageChange }) {
  // Workflow step state (1 to 4)
  const [currentStep, setCurrentStep] = useState(1);
  const [maxReachedStep, setMaxReachedStep] = useState(1);

  // Workflow data state (kept purely client-side in React state)
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState(null);
  const [persona, setPersona] = useState('student');
  const [customPersona, setCustomPersona] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage || 'en');

  // Step 1 File handlers
  const handleFileSelect = (selectedFile, error) => {
    setFile(selectedFile);
    setFileError(error);
  };

  const handleFileRemove = () => {
    setFile(null);
    setFileError(null);
  };

  // Step 2 Persona handler
  const handlePersonaSelect = (personaId) => {
    setPersona(personaId);
  };

  // Step 3 Language handler
  const handleLanguageSelect = (langCode) => {
    setSelectedLanguage(langCode);
    if (onLanguageChange) {
      onLanguageChange(langCode);
    }
  };

  // Navigation handlers
  const handleNextStep = () => {
    if (currentStep < 4) {
      const next = currentStep + 1;
      setCurrentStep(next);
      if (next > maxReachedStep) {
        setMaxReachedStep(next);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleDirectStepJump = (stepNumber) => {
    if (stepNumber <= maxReachedStep) {
      setCurrentStep(stepNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Step validation rules for Next button
  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return Boolean(file && !fileError);
      case 2:
        return Boolean(persona);
      case 3:
        return Boolean(selectedLanguage);
      case 4:
      default:
        return true;
    }
  };

  return (
    <div className="flex-1 py-10 sm:py-16 lg:py-20 relative overflow-hidden bg-[#08090c]">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-indigo-600/15 via-sky-500/10 to-transparent blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-indigo-900/10 blur-[110px] pointer-events-none rounded-full" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Top Breadcrumb / Return */}
        <div className="flex items-center justify-between mb-6 text-xs text-zinc-400">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to LegalLens Overview</span>
          </Link>

          <span className="hidden sm:inline font-mono text-[11px] text-zinc-500">
            Document Ingestion Pipeline • Step {currentStep} of 4
          </span>
        </div>

        {/* Workflow Progress Stepper */}
        <UploadProgressStepper
          currentStep={currentStep}
          onStepClick={handleDirectStepJump}
          maxReachedStep={maxReachedStep}
        />

        {/* Main Step Container Frame */}
        <div className="mt-8 rounded-3xl bg-zinc-950/70 border border-white/[0.08] p-6 sm:p-10 shadow-2xl backdrop-blur-2xl relative">
          
          {/* Step 1: Upload Document */}
          {currentStep === 1 && (
            <DocumentUploadStep
              file={file}
              error={fileError}
              onFileSelect={handleFileSelect}
              onFileRemove={handleFileRemove}
            />
          )}

          {/* Step 2: Personalize Profile */}
          {currentStep === 2 && (
            <PersonaStep
              selectedPersona={persona}
              customPersona={customPersona}
              onPersonaSelect={handlePersonaSelect}
              onCustomPersonaChange={setCustomPersona}
            />
          )}

          {/* Step 3: Preferred Language */}
          {currentStep === 3 && (
            <LanguageStep
              selectedLanguage={selectedLanguage}
              onLanguageSelect={handleLanguageSelect}
            />
          )}

          {/* Step 4: Review & Analyze */}
          {currentStep === 4 && (
            <ReviewStep
              file={file}
              persona={persona}
              customPersona={customPersona}
              language={selectedLanguage}
              onGoToStep={handleDirectStepJump}
            />
          )}

          {/* Workflow Bottom Navigation Bar (Steps 1, 2, 3) */}
          {currentStep < 4 && (
            <div className="mt-10 pt-6 border-t border-zinc-800/80 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
              
              {/* Back Button */}
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePreviousStep}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/60 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}

              {/* Next Step Button */}
              <button
                type="button"
                onClick={handleNextStep}
                disabled={!isStepValid()}
                className="w-full sm:w-auto px-7 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-600 hover:from-indigo-500 hover:to-sky-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none border border-indigo-400/30"
              >
                <span>
                  {currentStep === 1 && 'Next: Personalize Profile'}
                  {currentStep === 2 && 'Next: Select Language'}
                  {currentStep === 3 && 'Next: Review & Analyze'}
                </span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 5l7 7-7 7" />
                </svg>
              </button>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
