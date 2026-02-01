import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      data-testid="language-switcher"
      onClick={toggleLanguage}
      className="fixed bottom-6 right-6 z-[9999] backdrop-blur-md bg-white/10 border border-white/20 px-4 py-2 flex items-center gap-2 hover:bg-white/20 transition-all duration-300 shadow-2xl"
      aria-label="Toggle language"
    >
      <Globe size={16} className="text-burgundy" />
      <span className="text-xs font-display font-bold uppercase tracking-wider text-burgundy">
        {language === 'en' ? 'EN' : 'FR'}
      </span>
    </button>
  );
};
