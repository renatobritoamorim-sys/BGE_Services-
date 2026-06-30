import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const WhatsAppWidget: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Popup Message */}
      {isOpen && (
        <div className="bg-white shadow-2xl rounded-lg p-4 mb-3 max-w-xs border-l-4 border-green-500 relative animate-fade-in-up pointer-events-auto">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-1 right-1 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={16} />
          </button>
          <p className="text-gray-800 font-medium text-sm pr-4">
            {t.whatsappPopup.message}
          </p>
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45 border-r border-b border-gray-100"></div>
        </div>
      )}

      {/* Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-110 flex items-center justify-center animate-pulse-slow pointer-events-auto"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
};

export default WhatsAppWidget;
