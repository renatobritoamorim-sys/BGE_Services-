import React from 'react';
import { useLanguage } from './LanguageContext';
import { MapPin } from 'lucide-react';
import { SERVICE_AREAS } from '../constants';

const ServiceArea: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {t.serviceArea.h2}
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          {t.serviceArea.desc}
        </p>

        <div className="bg-gray-800 rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl border border-gray-700">
          <h3 className="text-xl font-semibold mb-6 text-red-500 uppercase tracking-wider">
            {t.serviceArea.listTitle}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {SERVICE_AREAS.map((city) => (
              <span 
                key={city} 
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full flex items-center transition cursor-default"
              >
                <MapPin size={16} className="text-red-500 mr-2" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
