import React, { useState, useRef, useEffect } from 'react';
import { SUPPORTED_LANGUAGES } from '../constants/languages';

export default function LanguageSelector({
  selectedLanguage,
  defaultLanguage = 'en',
  onSelectLanguage,
  dropdownPosition = 'right',
  className = '',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [internalLang, setInternalLang] = useState(defaultLanguage);
  const dropdownRef = useRef(null);

  const currentLang = selectedLanguage !== undefined ? selectedLanguage : internalLang;

  // Click outside and ESC key listeners
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const activeLanguageObj =
    SUPPORTED_LANGUAGES.find((lang) => lang.code === currentLang) ||
    SUPPORTED_LANGUAGES[0];

  const handleSelect = (code) => {
    setInternalLang(code);
    setIsOpen(false);
    if (onSelectLanguage) {
      onSelectLanguage(code);
    }
  };

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        id="language-selector-button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select language"
        className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-zinc-300 bg-zinc-900/80 hover:bg-zinc-800/90 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 backdrop-blur-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 cursor-pointer"
      >
        {/* Globe icon */}
        <svg
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-400 group-hover:text-indigo-400 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>

        <span className="text-xs text-zinc-400 mr-0.5">{activeLanguageObj.flag}</span>
        <span className="text-zinc-200 font-medium tracking-wide">
          {activeLanguageObj.label}
        </span>

        {/* Chevron icon */}
        <svg
          className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-zinc-200' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          id="language-dropdown-menu"
          role="menu"
          aria-orientation="vertical"
          className={`absolute ${dropdownPosition === 'left' ? 'left-0' : 'right-0'} mt-2 w-52 rounded-xl bg-[#111318]/95 border border-zinc-800/90 shadow-2xl backdrop-blur-xl z-50 py-1.5 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150`}
        >
          <div className="px-3 py-1.5 border-b border-zinc-800/60 mb-1">
            <p className="text-[11px] font-semibold tracking-wider uppercase text-zinc-500">
              Select Language
            </p>
          </div>
          <div className="max-h-60 overflow-y-auto py-0.5 space-y-0.5">
            {SUPPORTED_LANGUAGES.map((lang) => {
              const isSelected = lang.code === currentLang;
              return (
                <button
                  key={lang.code}
                  type="button"
                  role="menuitem"
                  onClick={() => handleSelect(lang.code)}
                  className={`w-full text-left px-3 py-2 text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-600/15 text-indigo-300 font-medium'
                      : 'text-zinc-300 hover:bg-zinc-800/60 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-sm">{lang.flag}</span>
                    <span className="font-normal">{lang.label}</span>
                    <span className="text-[11px] text-zinc-500 font-normal">
                      ({lang.nativeLabel})
                    </span>
                  </div>

                  {isSelected && (
                    <svg
                      className="w-4 h-4 text-indigo-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
