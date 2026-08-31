import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import SubscriptionsPage from './pages/SubscriptionsPage';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const handleLanguageChange = (langCode) => {
    setCurrentLanguage(langCode);
  };

  const handleUploadClick = () => {
    console.log('Upload Document CTA triggered. Ready for document upload milestone.');
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#08090c] text-zinc-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
        {/* Top Navigation Bar */}
        <Navbar
          currentLanguage={currentLanguage}
          onLanguageChange={handleLanguageChange}
          onUploadClick={handleUploadClick}
        />

        {/* Main Routed Content */}
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<LandingPage onUploadClick={handleUploadClick} />} />
            <Route path="/subscriptions" element={<SubscriptionsPage />} />
            
            {/* Future Route Placeholders */}
            <Route path="/upload" element={<Navigate to="/" replace />} />
            <Route path="/analysis" element={<Navigate to="/" replace />} />
            <Route path="/chat" element={<Navigate to="/" replace />} />
            <Route path="/compare" element={<Navigate to="/" replace />} />
            <Route path="/profile" element={<Navigate to="/" replace />} />
            <Route path="/settings" element={<Navigate to="/" replace />} />
            
            {/* Catch-all fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;