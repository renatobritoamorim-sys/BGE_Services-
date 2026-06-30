import React from 'react';
import { useLanguage } from './LanguageContext';
import { Clock, Zap, ShieldCheck, DollarSign, MapPin, Languages } from 'lucide-react';
import Reveal from './Reveal';

const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  const icons = [Clock, Zap, ShieldCheck, DollarSign, MapPin, Languages];

  return (
    <section id="why-us" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            {t.whyChoose.h2}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.whyChoose.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={index} delay={index * 100}>
                <div className="group flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:border-red-100 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-red-100 p-4 rounded-full mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 group-hover:scale-110">
                    <Icon className="w-8 h-8 transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
