import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, User, Users, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesPage = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 'couples',
      icon: Heart,
      title: t('services.couples.title'),
      subtitle: t('services.couples.subtitle'),
      tagline: t('services.couples.tagline'),
      description: t('services.couples.description'),
      perfect: t('services.couples.perfect'),
      image: 'https://images.unsplash.com/photo-1637782148212-d4be0f1f67f0?w=1200&q=85'
    },
    {
      id: 'solo',
      icon: User,
      title: t('services.solo.title'),
      subtitle: t('services.solo.subtitle'),
      tagline: t('services.solo.tagline'),
      description: t('services.solo.description'),
      perfect: t('services.solo.perfect'),
      image: 'https://images.unsplash.com/photo-1707392573565-f1831cfc5099?w=1200&q=85'
    },
    {
      id: 'families',
      icon: Sparkles,
      title: t('services.families.title'),
      subtitle: t('services.families.subtitle'),
      tagline: t('services.families.tagline'),
      description: t('services.families.description'),
      perfect: t('services.families.perfect'),
      image: 'https://images.unsplash.com/photo-1637782148244-21ac27bc1b91?w=1200&q=85'
    },
    {
      id: 'groups',
      icon: Users,
      title: t('services.groups.title'),
      subtitle: t('services.groups.subtitle'),
      tagline: t('services.groups.tagline'),
      description: t('services.groups.description'),
      perfect: t('services.groups.perfect'),
      image: 'https://images.unsplash.com/photo-1761472084994-61d80b8f4053?w=1200&q=85'
    }
  ];

  return (
    <div data-testid="services-page" className="pt-32 pb-24 bg-bone">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 data-testid="services-header" className="font-display font-extrabold text-6xl md:text-8xl text-burgundy mb-4 uppercase tracking-tighter leading-[0.9]">
            {t('services.title')}
          </h1>
          <p className="font-body text-base md:text-lg text-charcoal">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              data-testid={`service-card-${service.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[500px] object-cover"
                />
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="mb-6">
                  <service.icon className="text-terracotta mb-4" size={48} />
                </div>
                <h2 className="font-display font-extrabold text-4xl md:text-6xl text-burgundy mb-3 uppercase tracking-tighter">
                  {service.title}
                </h2>
                <h3 className="font-display font-bold uppercase tracking-widest text-xs text-terracotta mb-4">
                  {service.subtitle}
                </h3>
                <p className="font-display font-medium text-xl text-forest mb-6">
                  {service.tagline}
                </p>
                <p className="font-body text-base leading-relaxed text-charcoal mb-4">
                  {service.description}
                </p>
                <p className="font-body text-sm text-charcoal">
                  <span className="font-bold">{t('guide.perfectFor')}</span> {service.perfect}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <p className="font-body text-lg text-charcoal mb-6">
            {t('services.cta')}
          </p>
          <Link
            to="/contact"
            data-testid="services-cta-button"
            className="btn-primary inline-block"
          >
            {t('services.ctaButton')}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
