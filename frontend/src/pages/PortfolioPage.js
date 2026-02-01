import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useLanguage } from '@/contexts/LanguageContext';

const PortfolioPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const portfolioImages = [
    {
      src: 'https://images.unsplash.com/photo-1637782148212-d4be0f1f67f0?w=1200&q=85',
      alt: 'Adventurous couple'
    },
    {
      src: 'https://images.unsplash.com/photo-1637782148244-21ac27bc1b91?w=1200&q=85',
      alt: 'Couple on bridge'
    },
    {
      src: 'https://images.pexels.com/photos/27184190/pexels-photo-27184190.jpeg?w=1200',
      alt: 'Château gardens'
    },
    {
      src: 'https://images.unsplash.com/photo-1707392573565-f1831cfc5099?w=1200&q=85',
      alt: 'Woman in forest'
    },
    {
      src: 'https://images.unsplash.com/photo-1765915481912-edff5fea6c62?w=1200&q=85',
      alt: 'Whimsical fashion'
    },
    {
      src: 'https://images.unsplash.com/photo-1761472084994-61d80b8f4053?w=1200&q=85',
      alt: 'Friends mountain'
    },
    {
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=85',
      alt: 'Elegant portrait'
    },
    {
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=85',
      alt: 'Couple dancing'
    },
    {
      src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&q=85',
      alt: 'Romantic moment'
    }
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div data-testid="portfolio-page" className="pt-32 pb-24 bg-charcoal">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 data-testid="portfolio-header" className="font-display font-extrabold text-7xl md:text-9xl text-terracotta mb-4 uppercase tracking-tighter leading-[0.9]">
            {t('portfolio.title')}
          </h1>
          <p className="font-body text-base md:text-lg text-bone/80">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {portfolioImages.map((image, index) => (
            <motion.div
              key={index}
              data-testid={`portfolio-image-${index + 1}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-95"
              />
              <div className="absolute inset-0 bg-terracotta/0 group-hover:bg-terracotta/30 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={currentIndex}
        slides={portfolioImages.map(img => ({ src: img.src, alt: img.alt }))}
      />
    </div>
  );
};

export default PortfolioPage;
