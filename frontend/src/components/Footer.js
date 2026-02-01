import React from 'react';
import { Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer data-testid="main-footer" className="bg-charcoal text-bone py-16">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display font-extrabold text-4xl mb-4 uppercase tracking-tighter text-terracotta">SCARLETTE</h3>
            <p className="font-body text-bone/80 leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-4">{t('footer.quickLinks')}</h4>
            <div className="space-y-2 font-body">
              <Link to="/services" data-testid="footer-link-services" className="block text-bone/80 hover:text-terracotta transition-colors">
                {t('nav.services')}
              </Link>
              <Link to="/guide" data-testid="footer-link-guide" className="block text-bone/80 hover:text-terracotta transition-colors">
                {t('nav.guide')}
              </Link>
              <Link to="/portfolio" data-testid="footer-link-portfolio" className="block text-bone/80 hover:text-terracotta transition-colors">
                {t('nav.portfolio')}
              </Link>
              <Link to="/contact" data-testid="footer-link-contact" className="block text-bone/80 hover:text-terracotta transition-colors">
                {t('nav.contact')}
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-4">{t('footer.connect')}</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-instagram"
                className="text-bone/80 hover:text-terracotta transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="mailto:lorettaperaldi@gmail.com"
                data-testid="footer-email"
                className="text-bone/80 hover:text-terracotta transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-bone/20 mt-12 pt-8 text-center text-bone/60 text-sm font-body">
          <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};
