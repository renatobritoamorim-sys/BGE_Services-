import React from 'react';
import { useLanguage } from './LanguageContext';
import { Phone, MessageCircle, Clock, Zap, MapPin, Truck } from 'lucide-react';
import { HERO_IMAGE_URL, PHONE_NUMBER_CLEAN, WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative w-full h-[600px] lg:h-[750px] bg-gray-100 overflow-hidden">
      {/* Background Image - Scale animation slightly reduced for smoothness */}
      <div 
        className="absolute inset-0 w-full h-full brightness-90"
  style={{
    backgroundImage: `url('${HERO_IMAGE_URL}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
  aria-label="Car Hauling Truck"
      ></div>

      {/* NO OVERLAY - Image is fully visible */}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
        <div className="max-w-3xl space-y-6">
            
          {/* Trust Badges - Desktop */}
          {/* Added strong shadow to badges background to make them pop without overlay */}
          <div className="hidden md:flex flex-wrap gap-3 mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
             <span className="bg-red-600 shadow-[0_4px_6px_rgba(0,0,0,0.5)] px-3 py-1 rounded text-sm font-semibold flex items-center transform hover:scale-105 transition-transform"><Clock size={14} className="mr-1"/> {t.hero.badge247}</span>
             <span className="bg-black/40 backdrop-blur-sm shadow-[0_4px_6px_rgba(0,0,0,0.5)] px-3 py-1 rounded text-sm font-semibold flex items-center border border-white/20 hover:bg-black/60 transition-colors"><Zap size={14} className="mr-1"/> {t.hero.badgeFast}</span>
             <span className="bg-black/40 backdrop-blur-sm shadow-[0_4px_6px_rgba(0,0,0,0.5)] px-3 py-1 rounded text-sm font-semibold flex items-center border border-white/20 hover:bg-black/60 transition-colors"><MapPin size={14} className="mr-1"/> {t.hero.badgeLocal}</span>
          </div>

          {/* H1 with heavy text shadow for readability on any background */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight animate-fade-in-left opacity-0 drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)]" style={{ animationDelay: '0.3s' }}>
            {t.hero.h1}
          </h1>
          
          {/* Subheadline with heavy text shadow */}
          <p className="text-lg md:text-2xl text-white font-medium max-w-2xl animate-fade-in-right opacity-0 drop-shadow-[0_3px_3px_rgba(0,0,0,0.9)]" style={{ animationDelay: '0.5s' }}>
            {t.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.7s' }}>
            <a 
              href={`tel:${PHONE_NUMBER_CLEAN}`}
              className="group flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.5)] hover:shadow-red-600/50 transform hover:scale-105 active:scale-95 border border-white/10"
            >
              <Phone className="mr-2 group-hover:rotate-12 transition-transform" />
              {t.hero.ctaCall}
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.5)] hover:shadow-green-500/50 transform hover:scale-105 active:scale-95 border border-white/10"
            >
              <MessageCircle className="mr-2 group-hover:rotate-12 transition-transform" />
              {t.hero.ctaWhatsapp}
            </a>
          </div>

          {/* Trust Badges - Mobile Grid */}
           <div className="grid grid-cols-2 gap-2 mt-8 md:hidden text-xs text-center font-semibold text-white animate-fade-in-up opacity-0" style={{ animationDelay: '0.9s' }}>
             <div className="bg-black/60 p-2 rounded flex items-center justify-center gap-1 backdrop-blur-md border border-white/20 shadow-lg"><Clock size={12}/> {t.hero.badge247}</div>
             <div className="bg-black/60 p-2 rounded flex items-center justify-center gap-1 backdrop-blur-md border border-white/20 shadow-lg"><Zap size={12}/> {t.hero.badgeFast}</div>
             <div className="bg-black/60 p-2 rounded flex items-center justify-center gap-1 backdrop-blur-md border border-white/20 shadow-lg"><MapPin size={12}/> {t.hero.badgeLocal}</div>
             <div className="bg-black/60 p-2 rounded flex items-center justify-center gap-1 backdrop-blur-md border border-white/20 shadow-lg"><Truck size={12}/> {t.hero.badgePro}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
