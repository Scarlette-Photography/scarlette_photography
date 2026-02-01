import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HomePage = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-testid="home-page" className="overflow-hidden">
      {/* Hero Section - Bold & Modern */}
      <section
        data-testid="hero-section"
        className="relative min-h-screen flex items-center justify-center overflow-visible bg-burgundy pb-32"
      >
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: 'url(https://customer-assets.emergentagent.com/job_chateau-photos/artifacts/vqbmnua7_background%20scarlette.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-6xl mt-20"
        >
          <motion.h1 
            data-testid="hero-headline" 
            className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] text-pastelGreen mb-4 sm:mb-6 md:mb-8 uppercase leading-[0.85]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {t('home.heroTitle')}
          </motion.h1>
          
          <motion.h2 
            data-testid="hero-subheadline" 
            className="font-display text-lg sm:text-xl md:text-3xl lg:text-4xl text-bone mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {t('home.heroSubtitle')}
          </motion.h2>
          
          <motion.p 
            className="font-body text-sm sm:text-base md:text-lg text-bone/90 mb-8 sm:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            {t('home.heroTagline')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex justify-center"
          >
            <Link
              to="/contact"
              data-testid="hero-cta-button"
              className="inline-block"
            >
              <img
                src="https://customer-assets.emergentagent.com/job_chateau-photos/artifacts/6kdohp2c_image_replace_button.png"
                alt="Start your journey"
                className="h-auto w-auto max-w-full object-contain"
              />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Did You Know Section - Overlapping Title */}
      <section className="relative -mt-16 bg-pastelGreen z-10">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 pt-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-forest leading-tight max-w-5xl mx-auto uppercase">
              {t('home.didYouKnow')}
            </h2>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full pb-8"
        >
          <img
            src="https://customer-assets.emergentagent.com/job_chateau-photos/artifacts/a6q8vn01_image_H_2%20.png"
            alt="Château de Fontainebleau collage"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </section>

      {/* Destination Section - Large Photos with Small Text */}
      <section data-testid="destination-section" className="py-20 bg-bone">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 space-y-16">
          {/* Title */}
          <motion.h2 
            data-testid="destination-title" 
            className="font-display text-6xl md:text-8xl text-burgundy uppercase leading-[0.9]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('home.destinationTitle')}
          </motion.h2>

          {/* Large Photo + Small Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/27184190/pexels-photo-27184190.jpeg?w=1600&q=85"
              alt="Château de Fontainebleau"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-bone/90 backdrop-blur-sm p-6 max-w-md">
              <p className="font-body text-sm md:text-base text-charcoal leading-relaxed">
                {t('home.destinationText1')}
              </p>
            </div>
          </motion.div>

          {/* Grid of Photos with Text Overlays */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1637782148212-d4be0f1f67f0?w=800&q=85"
                alt="Couple exploring"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center"
            >
              <p className="font-body text-base md:text-lg text-charcoal leading-relaxed">
                {t('home.destinationText2')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Artist Section - Photos Dominant, Text Secondary */}
      <section data-testid="artist-section" className="py-20 bg-forest">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 space-y-16">
          <motion.h2 
            data-testid="artist-title" 
            className="font-display text-5xl md:text-7xl text-terracotta uppercase leading-[0.9]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('home.artistTitle')}
          </motion.h2>

          {/* Large Hero Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1707392573565-f1831cfc5099?w=1600&q=85"
              alt="Photographer in nature"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>

          {/* Text + Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-1 flex items-center"
            >
              <p className="font-body text-sm md:text-base text-pastelGreen leading-relaxed">
                {t('home.artistText1')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <img
                src="https://images.unsplash.com/photo-1758987016935-1f18b9780944?w=1000&q=85"
                alt="Photographer at work"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>

          {/* Another Photo + Text Combo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1637782148244-21ac27bc1b91?w=800&q=85"
                alt="Romantic château moment"
                className="w-full h-[450px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 flex flex-col justify-center"
            >
              <p className="font-body text-sm md:text-base text-pastelGreen leading-relaxed">
                {t('home.artistText2')}
              </p>
              <p className="font-body text-sm md:text-base text-pastelGreen leading-relaxed">
                {t('home.artistText3')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Showcase Section */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1765915481912-edff5fea6c62?w=600&q=85',
              'https://images.unsplash.com/photo-1761472084994-61d80b8f4053?w=600&q=85',
              'https://images.unsplash.com/photo-1615135795000-e402f3473b6b?w=600&q=85',
              'https://images.unsplash.com/photo-1500771309643-de18b0aea901?w=600&q=85'
            ].map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden group"
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-terracotta/0 group-hover:bg-terracotta/20 transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/portfolio"
              className="inline-block font-display text-xl text-terracotta hover:text-bone transition-colors uppercase"
            >
              VIEW FULL PORTFOLIO →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Bold Block */}
      <section className="py-32 bg-terracotta text-center">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-6xl md:text-8xl text-bone mb-12 uppercase leading-[0.9]">
              {t('home.ctaTitle')}
            </h2>
            <Link
              to="/contact"
              data-testid="bottom-cta-button"
              className="inline-block bg-charcoal text-bone px-10 py-5 font-display uppercase tracking-widest text-sm hover:bg-burgundy transition-all duration-300"
            >
              {t('home.ctaButton')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
