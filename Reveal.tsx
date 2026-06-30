import React from 'react';
import { useLanguage } from './LanguageContext';
import { PhoneCall, CalendarCheck, Truck } from 'lucide-react';
import Reveal from './Reveal';

const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  const icons = [PhoneCall, CalendarCheck, Truck];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            {t.howItWorks.h2}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10 transform translate-y-4"></div>

          {t.howItWorks.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={index} delay={index * 200}>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center text-white mb-6 shadow-xl shadow-red-200 border-4 border-white relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-red-700 group-hover:shadow-2xl">
                    <Icon size={40} className="group-hover:animate-pulse" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold border-2 border-white transform transition-transform group-hover:scale-110 group-hover:rotate-12">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 max-w-xs">{step.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
