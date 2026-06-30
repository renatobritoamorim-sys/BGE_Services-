import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
            <div className="inline-block p-3 bg-red-100 rounded-full mb-4 text-red-600">
                <HelpCircle size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t.faq.h2}
            </h2>
        </div>

        <div className="space-y-4">
          {t.faq.items.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-lg text-gray-900 pr-4">{item.q}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-red-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
