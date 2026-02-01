import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/services', label: t('nav.services') },
    { path: '/guide', label: t('nav.guide') },
    { path: '/portfolio', label: t('nav.portfolio') },
    { path: '/contact', label: t('nav.contact') }
  ];

  return (
    <>
      <nav
        data-testid="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-charcoal/95 backdrop-blur-md shadow-2xl py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link 
            to="/" 
            data-testid="logo-link" 
            className={`font-display font-extrabold text-2xl md:text-3xl uppercase tracking-tighter ${
              scrolled ? 'text-terracotta' : 'text-bone'
            }`}
          >
            SCARLETTE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
                className={`font-display uppercase tracking-widest text-xs font-bold transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-terracotta'
                    : scrolled
                    ? 'text-bone hover:text-terracotta'
                    : 'text-bone/80 hover:text-bone'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden z-50 ${scrolled ? 'text-terracotta' : 'text-bone'}`}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-charcoal z-40 md:hidden flex flex-col items-center justify-center"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                  className="text-bone font-display font-extrabold text-5xl mb-8 block hover:text-terracotta transition-colors duration-300 uppercase tracking-tighter"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
