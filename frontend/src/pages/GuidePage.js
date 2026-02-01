import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Train, MapPin, Camera, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const GuidePage = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      icon: Train,
      title: t('guide.step1.title'),
      description: t('guide.step1.description')
    },
    {
      icon: MapPin,
      title: t('guide.step2.title'),
      description: t('guide.step2.description')
    },
    {
      icon: Camera,
      title: t('guide.step3.title'),
      description: t('guide.step3.description')
    },
    {
      icon: Download,
      title: t('guide.step4.title'),
      description: t('guide.step4.description')
    }
  ];

  return (
    <div data-testid="guide-page" className="pt-32 pb-24 bg-bone">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 data-testid="guide-header" className="font-display font-extrabold text-6xl md:text-8xl text-burgundy mb-4 uppercase tracking-tighter leading-[0.9]">
            {t('guide.title')}
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              data-testid={`process-step-${index + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 bg-terracotta mb-6">
                <step.icon className="text-bone" size={40} />
              </div>
              <h3 className="font-display font-bold text-2xl text-burgundy mb-3 uppercase">{step.title}</h3>
              <p className="font-body text-base text-charcoal leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <Link
            to="/contact"
            data-testid="guide-cta-button"
            className="btn-primary inline-block"
          >
            {t('guide.ctaButton')}
          </Link>
        </motion.div>

        <div className="bg-forest p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 data-testid="what-to-wear-title" className="font-display font-extrabold text-5xl md:text-7xl text-terracotta mb-4 text-center uppercase tracking-tighter leading-[0.9]">
              {t('guide.wearTitle')}
            </h2>
            <p className="font-body text-lg text-pastelGreen text-center mb-12">
              {t('guide.wearSubtitle')}
            </p>

            <div className="space-y-8 text-pastelGreen font-body">
              <div>
                <h3 className="font-display font-bold text-2xl text-terracotta mb-4 uppercase">1. Movement is Magic</h3>
                <p className="leading-relaxed mb-4">
                  The secret to a "whimsical" photo is movement. We want your clothes to catch the breeze and react when you twirl, walk, or run up the castle stairs.
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li><span className="font-bold">For Her:</span> Think long, flowy dresses, tulle skirts, or maxi skirts in light fabrics.</li>
                  <li><span className="font-bold">For Him:</span> A well-fitted coat or a nice neutral shirt and layering.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl text-terracotta mb-4 uppercase">2. The Royal Color Palette</h3>
                <p className="leading-relaxed mb-4">
                  Your colors should complement the château, not fight against it. Soft pastels, neutrals, or deep jewel tones work beautifully.
                </p>
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl text-terracotta mb-4 uppercase">3. Comfort is Key</h3>
                <p className="leading-relaxed">
                  We will be exploring! Bring comfortable shoes for walking between locations. You can swap to heels for the shots.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Borrow a Dress Section */}
        <div className="bg-terracotta p-16 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-5xl md:text-7xl text-bone mb-4 text-center uppercase leading-[0.9]">
              {t('guide.borrowTitle')}
            </h2>
            <p className="font-display text-2xl text-bone/90 text-center mb-12">
              {t('guide.borrowSubtitle')}
            </p>

            <div className="space-y-6 text-bone font-body">
              <p className="leading-relaxed text-lg">
                {t('guide.borrowText1')}
              </p>
              <p className="leading-relaxed text-lg">
                {t('guide.borrowText2')}
              </p>
              <p className="leading-relaxed text-lg">
                {t('guide.borrowText3')}
              </p>
              <p className="leading-relaxed text-lg">
                {t('guide.borrowText4')}
              </p>
              <p className="leading-relaxed text-lg font-bold">
                {t('guide.borrowText5')}
              </p>
            </div>

            {/* Dress Showcase Photos */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
              {[
                'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=85',
                'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=85',
                'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&q=85',
                'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=85',
                'https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=600&q=85',
                'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=85'
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
                    alt={`Dress ${index + 1}`}
                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-burgundy/0 group-hover:bg-burgundy/20 transition-all duration-500"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GuidePage;
