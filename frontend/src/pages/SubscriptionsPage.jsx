import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TIERS = [
  {
    id: 'free',
    name: 'Free',
    tagline: 'Essential clarity for individuals and simple contracts.',
    priceMonthly: '$0',
    priceAnnual: '$0',
    period: 'forever',
    recommended: false,
    ctaText: 'Get Started Free',
    ctaVariant: 'outline',
    features: [
      'Basic document analysis',
      'Limited document analyses (3 / month)',
      'Basic risk detection',
      'Ask questions about a document',
    ],
    limitations: [
      'Standard processing queue',
      'Single language summaries only',
      'No contract comparison',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'Deep intelligence for professionals, freelancers & small teams.',
    priceMonthly: '$29',
    priceAnnual: '$24',
    period: 'per month',
    recommended: true,
    badge: 'Recommended',
    ctaText: 'Start Pro Trial',
    ctaVariant: 'primary',
    features: [
      'More document analyses (25 / month)',
      'Advanced risk detection',
      'Detailed clause analysis',
      'Multilingual analysis (8+ languages)',
      'Downloadable reports (PDF / DOCX)',
      'Contract comparison',
    ],
    limitations: [],
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'Unrestricted legal intelligence for high-volume teams & enterprises.',
    priceMonthly: '$79',
    priceAnnual: '$65',
    period: 'per month',
    recommended: false,
    badge: 'Maximum Power',
    ctaText: 'Upgrade to Premium',
    ctaVariant: 'outline',
    features: [
      'Highest usage limits (Unlimited analyses)',
      'Advanced personalized analysis',
      'Priority processing pipeline',
      'Advanced contract comparison (multi-version)',
      'Full analysis & customizable audit reports',
      'Dedicated support & audit logging',
    ],
    limitations: [],
  },
];

export default function SubscriptionsPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlanNotice, setSelectedPlanNotice] = useState(null);

  const handlePlanSelect = (tier) => {
    setSelectedPlanNotice(
      `You selected the ${tier.name} plan. Payment gateway integration will be available in an upcoming milestone.`
    );
  };

  return (
    <div className="flex-1 py-12 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-indigo-600/15 via-sky-500/10 to-transparent blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Title & Tagline */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-6">
            Transparent Pricing
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Flexible Plans for Every Legal Need
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Choose the right tier to analyze, audit, and decode your contracts with confidence. Transparent pricing with no hidden lock-ins.
          </p>

          {/* Billing Toggle (Monthly / Annual) */}
          <div className="mt-8 inline-flex items-center p-1 rounded-full bg-zinc-900/90 border border-zinc-800 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                billingCycle === 'annual'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Informational Banner */}
        {selectedPlanNotice ? (
          <div className="mt-8 max-w-xl mx-auto p-4 rounded-xl bg-indigo-950/50 border border-indigo-500/30 text-indigo-200 text-xs sm:text-sm text-center animate-in fade-in duration-200 flex items-center justify-between gap-3">
            <span>{selectedPlanNotice}</span>
            <button
              type="button"
              onClick={() => setSelectedPlanNotice(null)}
              className="text-zinc-400 hover:text-white text-xs font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 cursor-pointer shrink-0"
            >
              Dismiss
            </button>
          </div>
        ) : (
          <div className="mt-6 max-w-md mx-auto text-center">
            <p className="text-xs text-zinc-500 font-mono">
              [Preview Mode: Payment processing & Stripe integration scheduled for next milestone]
            </p>
          </div>
        )}

        {/* Pricing Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {TIERS.map((tier) => {
            const price = billingCycle === 'annual' ? tier.priceAnnual : tier.priceMonthly;

            return (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 backdrop-blur-xl ${
                  tier.recommended
                    ? 'bg-gradient-to-b from-indigo-950/40 via-zinc-900/90 to-zinc-950 border-2 border-indigo-500/60 shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)] lg:-translate-y-2'
                    : 'bg-zinc-900/40 border border-white/[0.08] hover:border-zinc-700/80 hover:bg-zinc-900/60'
                }`}
              >
                {/* Highlight Badge for Recommended Plan */}
                {tier.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-md">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {tier.name}
                    </h3>
                    {!tier.recommended && tier.badge && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                        {tier.badge}
                      </span>
                    )}
                  </div>
                  
                  <p className="mt-2 text-xs sm:text-sm text-zinc-400 min-h-[40px] leading-relaxed">
                    {tier.tagline}
                  </p>

                  {/* Pricing Display */}
                  <div className="mt-6 pb-6 border-b border-zinc-800/80 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
                      {price}
                    </span>
                    <span className="text-xs sm:text-sm text-zinc-400">
                      / {tier.period}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="mt-6 space-y-3.5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Included Capabilities:
                    </p>
                    <ul className="space-y-3">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                          <svg
                            className={`w-4 h-4 mt-0.5 shrink-0 ${
                              tier.recommended ? 'text-indigo-400' : 'text-sky-400'
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Exclusions / Limitations for Free */}
                    {tier.limitations && tier.limitations.length > 0 && (
                      <div className="pt-3 border-t border-zinc-800/60 space-y-2">
                        {tier.limitations.map((limit, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-500 list-none">
                            <span className="w-3.5 h-3.5 mt-0.5 text-center text-zinc-600 font-bold shrink-0">
                              –
                            </span>
                            <span>{limit}</span>
                          </li>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div className="mt-8 pt-6 border-t border-zinc-800/80">
                  <button
                    type="button"
                    onClick={() => handlePlanSelect(tier)}
                    className={`w-full py-3.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      tier.recommended
                        ? 'text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-600 hover:from-indigo-500 hover:to-sky-500 shadow-[0_0_25px_rgba(99,102,241,0.4)] active:scale-98 border border-indigo-400/30'
                        : 'text-zinc-200 bg-zinc-800/80 hover:bg-zinc-700/80 hover:text-white border border-zinc-700/60 active:scale-98'
                    }`}
                  >
                    {tier.ctaText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Back Link / Additional FAQ notice */}
        <div className="mt-16 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-400 hover:text-indigo-300 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to LegalLens AI Overview</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
