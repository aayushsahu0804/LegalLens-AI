import React from 'react';
import Hero from '../components/Hero';
import HowItWorksSection from '../components/HowItWorksSection';
import FeaturesSection from '../components/FeaturesSection';
import AboutSection from '../components/AboutSection';

export default function LandingPage({ onUploadClick }) {
  return (
    <div className="flex-1 flex flex-col">
      <Hero onUploadClick={onUploadClick} />
      <HowItWorksSection />
      <FeaturesSection />
      <AboutSection />
    </div>
  );
}
