import React from 'react';
import { useLanguage } from './LanguageContext';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { PHONE_NUMBER_CLEAN } from '../constants';
import Reveal from './Reveal';

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900">
            {t.services.h2}
          </h2>
        </Reveal>
        {t.services.subtitle && (
          <Reveal delay={100}>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              {t.services.subtitle}
            </p>
          </Reveal>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {t.services.items.map((service, index) => (
            <Reveal key={index} delay={index * 150} className="h-full">
              <div className="group bg-white rounded-xl shadow-md hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500 border-t-4 border-red-600 flex flex-col h-full transform hover:-translate-y-2 overflow-hidden">
                <div className="relative w-full h-52 md:h-56 overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    width={640}
                    height={360}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{service.desc}</p>

                  <ul className="space-y-3 mb-8">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={18} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`tel:${PHONE_NUMBER_CLEAN}`}
                    className="w-full block text-center bg-gray-900 hover:bg-red-600 text-white font-semibold py-4 rounded-lg transition-colors duration-300 flex justify-center items-center shadow-lg group-hover:shadow-red-600/20"
                  >
                    {service.cta}
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
