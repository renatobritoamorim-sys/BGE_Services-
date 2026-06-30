import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { PHONE_NUMBER, PHONE_NUMBER_CLEAN } from '../constants';

const Header: React.FC = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: t.header.services, href: '#services' },
    { name: t.header.whyUs, href: '#why-us' },
    { name: t.header.faq, href: '#faq' },
    { name: t.header.contact, href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center group cursor-pointer">
          <a href="#" className="text-2xl font-bold font-sans text-gray-900 tracking-tighter group-hover:scale-105 transition-transform duration-300">
            BGE <span className="text-red-600">SERVICES</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-red-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1 border border-gray-300 rounded-full px-3 py-1 hover:bg-gray-100 hover:border-red-300 transition-all duration-300"
          >
            <Globe size={16} className="text-gray-600" />
            <span className="text-sm font-bold">{language === 'en' ? 'PT' : 'EN'}</span>
            {language === 'en' ? (
                 <span role="img" aria-label="Brazil Flag" className="text-lg ml-1">🇧🇷</span>
            ) : (
                <span role="img" aria-label="USA Flag" className="text-lg ml-1">🇺🇸</span>
            )}
          </button>

          <a
            href={`tel:${PHONE_NUMBER_CLEAN}`}
            className="bg-red-600 text-white px-5 py-2 rounded-lg font-bold hover:bg-red-700 transition-all duration-300 flex items-center shadow-md hover:shadow-red-500/30 hover:-translate-y-0.5 active:scale-95"
          >
            <Phone size={18} className="mr-2 animate-pulse" />
            {t.header.callNow}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
             <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 border border-gray-300 rounded-full px-2 py-1"
              >
                 <span className="text-sm font-bold">{language === 'en' ? 'PT' : 'EN'}</span>
                 {language === 'en' ? (
                     <span role="img" aria-label="Brazil Flag" className="text-sm">🇧🇷</span>
                ) : (
                    <span role="img" aria-label="USA Flag" className="text-sm">🇺🇸</span>
                )}
              </button>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-900">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in-up">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-800 font-medium text-lg border-b border-gray-100 pb-2 active:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={`tel:${PHONE_NUMBER_CLEAN}`}
              className="block w-full text-center bg-red-600 text-white py-3 rounded-lg font-bold text-lg active:scale-95 transition-transform"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.header.callNow}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
