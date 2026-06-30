import React, { useEffect } from 'react';
import { useLanguage } from './LanguageContext';

const SEOHelper: React.FC = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    // Keep the document title and description in sync with the active language
    // for a better user experience and for crawlers that DO execute JavaScript.
    document.title = t.meta.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t.meta.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', t.meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', t.meta.description);

    // Set language attribute on the HTML tag
    document.documentElement.lang = language === 'en' ? 'en-US' : 'pt-BR';
  }, [language, t]);

  // The complete, language-independent structured data (JSON-LD) now lives
  // statically in index.html so that search engines and AI/LLM crawlers that
  // do not run JavaScript can still read it. Nothing is injected here.
  return null;
};

export default SEOHelper;
