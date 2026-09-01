import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

export default function Navbar({ currentLanguage, onLanguageChange, onUploadClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isSubscriptionsPage = location.pathname === '/subscriptions';

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Features', href: '/#features' },
    { label: 'About', href: '/#about' },
  ];

  const handleNavClick = (e, href) => {
    setMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleCtaClick = () => {
    setMobileMenuOpen(false);
    if (onUploadClick) {
      onUploadClick();
    } else {
      navigate('/upload');
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.06] bg-[#08090c]/85 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        
        {/* Left: Brand Logo & Name */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/"
            className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 rounded-xl"
            aria-label="LegalLens AI Home"
            onClick={() => setMobileMenuOpen(false)}
          >
            {/* Custom LegalLens Brand Icon */}
            <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-zinc-700/60 shadow-inner group-hover:border-indigo-500/50 transition-colors duration-300">
              <div className="absolute inset-0 rounded-xl bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              <svg
                className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-indigo-400 group-hover:text-indigo-300 transition-colors"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Shield / Document geometry */}
                <path
                  d="M12 3L4 6.5V11.5C4 16.5 7.4 20.9 12 22C16.6 20.9 20 16.5 20 11.5V6.5L12 3Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-70"
                />
                {/* Optical Lens Focus Ring */}
                <circle
                  cx="12"
                  cy="12"
                  r="3.5"
                  stroke="#38bdf8"
                  strokeWidth="1.8"
                />
                <path
                  d="M14.5 14.5L17 17"
                  stroke="#38bdf8"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Wordmark: LegalLens AI (without Beta badge) */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-zinc-100 transition-colors">
                  Legal<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400">Lens</span>
                  <span className="ml-1.5 text-xs sm:text-sm font-semibold tracking-wider text-indigo-300 font-mono">
                    AI
                  </span>
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-zinc-900/40 border border-white/[0.05] shadow-inner"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Desktop Actions (Language, Subscriptions, CTA) */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4 shrink-0">
          <LanguageSelector
            selectedLanguage={currentLanguage}
            onSelectLanguage={onLanguageChange}
          />

          <Link
            to="/subscriptions"
            className={`px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
              isSubscriptionsPage
                ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/40'
                : 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'
            }`}
          >
            Subscriptions
          </Link>

          <button
            type="button"
            onClick={handleCtaClick}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs lg:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/35 transition-all duration-200 active:scale-95 cursor-pointer border border-indigo-400/30"
          >
            <span>Get Started</span>
            <svg
              className="w-3.5 h-3.5 text-indigo-200 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSelector
            selectedLanguage={currentLanguage}
            onSelectLanguage={onLanguageChange}
          />

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl text-zinc-400 hover:text-white bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/40 cursor-pointer"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-800/80 bg-[#0c0e12]/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-2.5 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <Link
              to="/subscriptions"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isSubscriptionsPage
                  ? 'bg-indigo-600/20 text-indigo-300 font-semibold'
                  : 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              Subscriptions
            </Link>
          </nav>

          <div className="pt-3 border-t border-zinc-800/60 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={handleCtaClick}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 shadow-lg shadow-indigo-600/25 transition-all active:scale-98 cursor-pointer"
            >
              <span>Get Started / Upload Document</span>
              <svg className="w-4 h-4 text-indigo-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
