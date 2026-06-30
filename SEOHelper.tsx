import React from 'react';
import { useLanguage } from './LanguageContext';
import { COMPANY_NAME, PHONE_NUMBER, EMAIL_ADDRESS } from '../constants';
import { Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">{COMPANY_NAME}</h3>
            <p className="text-sm leading-relaxed mb-4">
              {t.footer.about}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-red-500 transition">Services</a></li>
              <li><a href="#why-us" className="hover:text-red-500 transition">Why Us</a></li>
              <li><a href="#faq" className="hover:text-red-500 transition">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{t.footer.contact}</h3>
            <div className="space-y-3">
              <p className="flex items-center text-white">
                <Phone size={16} className="text-red-500 mr-2" />
                {PHONE_NUMBER}
              </p>
              <p className="flex items-center">
                <Mail size={16} className="text-red-500 mr-2" />
                {EMAIL_ADDRESS}
              </p>
              <p className="text-sm mt-4 text-gray-500">
                Newington, Connecticut
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
          <p>&copy; {year} {COMPANY_NAME}. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
