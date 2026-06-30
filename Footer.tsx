import React from 'react';
import { useLanguage } from './LanguageContext';
import { Phone, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER_CLEAN, WHATSAPP_LINK } from '../constants';
import Reveal from './Reveal';

const FinalCTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-red-700 text-white relative overflow-hidden group">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] animate-[pulse_4s_ease-in-out_infinite]"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
            {t.finalCta.h2}
          </h2>
        </Reveal>
        
        <Reveal delay={200}>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a
              href={`tel:${PHONE_NUMBER_CLEAN}`}
              className="w-full md:w-auto bg-white text-red-700 font-bold text-xl py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 flex items-center justify-center"
            >
              <Phone className="mr-3" />
              {t.finalCta.btnCall}
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-green-500 text-white font-bold text-xl py-4 px-10 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 flex items-center justify-center border-2 border-white/20 hover:border-white/40"
            >
              <MessageCircle className="mr-3" />
              {t.finalCta.btnWhatsapp}
            </a>
          </div>
        </Reveal>
        
        <Reveal delay={400}>
          <p className="mt-8 opacity-80 font-medium">
              {t.finalCta.btnQuote} &bull; (860) 328-2011
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default FinalCTA;
