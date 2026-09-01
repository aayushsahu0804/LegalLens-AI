import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { getAnalysisData } from '../constants/demoAnalysisData';
import AnalysisHeader from '../components/analysis/AnalysisHeader';
import RiskScoreCard from '../components/analysis/RiskScoreCard';
import ExecutiveSummary from '../components/analysis/ExecutiveSummary';
import FlaggedClauses from '../components/analysis/FlaggedClauses';
import KeyObligations from '../components/analysis/KeyObligations';
import ImportantTerms from '../components/analysis/ImportantTerms';
import RecommendedActions from '../components/analysis/RecommendedActions';
import DocumentEvidence from '../components/analysis/DocumentEvidence';
import AskDocument from '../components/analysis/AskDocument';
import AnalysisFooter from '../components/analysis/AnalysisFooter';

export default function AnalysisPage() {
  const location = useLocation();

  // Build normalized analysis data using router state if available
  const analysis = useMemo(() => {
    return getAnalysisData(location.state || {});
  }, [location.state]);

  // Client-side report download generator (zero network/API transmission)
  const handleDownloadReport = () => {
    const reportText = `================================================================================
LEGALLENS AI — DOCUMENT ANALYSIS REPORT [SAMPLE / DEMO]
================================================================================
Generated for: ${analysis.document.name}
File Size: ${analysis.document.sizeFormatted || '1.8 MB'}
Perspective: ${analysis.persona.title}
Output Language: ${analysis.language.label}
Status: ${analysis.status}
Notice: ${analysis.demoNotice}
================================================================================

OVERALL RISK ASSESSMENT
Score: ${analysis.overallRisk.score} / ${analysis.overallRisk.maxScore} (${analysis.overallRisk.level})
Summary: ${analysis.overallRisk.summary}

--------------------------------------------------------------------------------
EXECUTIVE SUMMARY
--------------------------------------------------------------------------------
${analysis.executiveSummary.overview}

WHAT YOU ARE AGREEING TO:
${analysis.executiveSummary.whatYouAreAgreeingTo}

KEY RESPONSIBILITIES:
${analysis.executiveSummary.keyResponsibilities.map((r, i) => `  ${i + 1}. ${r}`).join('\n')}

MAJOR CONCERNS:
${analysis.executiveSummary.majorConcerns.map((c, i) => `  ${i + 1}. ${c}`).join('\n')}

--------------------------------------------------------------------------------
FLAGGED CLAUSES (${analysis.flaggedClauses.length} DETECTED)
--------------------------------------------------------------------------------
${analysis.flaggedClauses
  .map(
    (clause) => `
[${clause.riskLevel} RISK] Clause ${clause.clauseNumber} — ${clause.title}
Source: ${clause.sourceRef}

ORIGINAL TEXT:
"${clause.originalText}"

PLAIN LANGUAGE BREAKDOWN:
${clause.plainLanguage}

WHY IT MATTERS:
${clause.whyItMatters}

RECOMMENDED ACTION:
${clause.recommendedAction}
`
  )
  .join('\n--------------------------------------------------------------------------------\n')}

--------------------------------------------------------------------------------
KEY OBLIGATIONS
--------------------------------------------------------------------------------
${analysis.obligations
  .map((o) => `• [${o.category} | ${o.priority} Priority] ${o.title} (${o.clauseRef}): ${o.description}`)
  .join('\n')}

--------------------------------------------------------------------------------
RECOMMENDED COUNTER-ACTIONS
--------------------------------------------------------------------------------
${analysis.recommendedActions
  .map((a, i) => `${i + 1}. [${a.priority}] ${a.title}\n   ${a.detail}`)
  .join('\n\n')}

================================================================================
Report generated client-side by LegalLens AI.
================================================================================`;

    const blob = new Blob([reportText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = window.document.createElement('a');
    link.href = url;
    link.download = `${analysis.document.name.replace(/\.[^/.]+$/, '')}_LegalLens_Analysis.txt`;
    window.document.body.appendChild(link);
    link.click();
    window.document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex-1 py-8 sm:py-12 lg:py-16 relative overflow-hidden bg-[#08090c]">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-indigo-600/15 via-sky-500/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-indigo-900/10 blur-[110px] pointer-events-none rounded-full" />
      <div className="absolute top-2/3 right-1/4 w-96 h-96 bg-amber-900/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-10">
        
        {/* Demo Mode Notice Banner */}
        {analysis.isDemoMode && (
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm flex items-start gap-3.5 backdrop-blur-md">
            <svg className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="flex-1 space-y-0.5">
              <span className="font-bold text-amber-300 block">
                Demonstration Mode Active
              </span>
              <p className="text-amber-200/90 leading-relaxed text-xs">
                {analysis.demoNotice} Selected document metadata (<code className="font-mono text-white">{analysis.document.name}</code>, <span className="text-indigo-300 font-semibold">{analysis.persona.title}</span>, <span className="text-sky-300 font-semibold">{analysis.language.label}</span>) is retained in client state.
              </p>
            </div>
          </div>
        )}

        {/* 1. Header with Metadata and Actions */}
        <AnalysisHeader
          analysis={analysis}
          onDownloadReport={handleDownloadReport}
        />

        {/* 2. Overall Risk Scorecard */}
        <RiskScoreCard
          overallRisk={analysis.overallRisk}
          isDemoMode={analysis.isDemoMode}
        />

        {/* 3. Executive Summary */}
        <ExecutiveSummary
          executiveSummary={analysis.executiveSummary}
          isDemoMode={analysis.isDemoMode}
        />

        {/* 4. Flagged Clauses */}
        <FlaggedClauses
          clauses={analysis.flaggedClauses}
          isDemoMode={analysis.isDemoMode}
        />

        {/* 5. Key Obligations */}
        <KeyObligations
          obligations={analysis.obligations}
          isDemoMode={analysis.isDemoMode}
        />

        {/* 6. Important Terms & Timeline */}
        <ImportantTerms
          importantTerms={analysis.importantTerms}
          isDemoMode={analysis.isDemoMode}
        />

        {/* 7. Recommended Actions & Counter-Proposals */}
        <RecommendedActions
          recommendedActions={analysis.recommendedActions}
          isDemoMode={analysis.isDemoMode}
        />

        {/* 8. Document-Grounded Evidence */}
        <DocumentEvidence
          evidence={analysis.evidence}
          isDemoMode={analysis.isDemoMode}
        />

        {/* 9. Ask Questions About This Document */}
        <AskDocument
          sampleQuestions={analysis.sampleQuestions}
        />

        {/* 10. Footer & Privacy Notice */}
        <AnalysisFooter
          onScrollToTop={scrollToTop}
        />

      </div>
    </div>
  );
}
