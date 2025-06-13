import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './en.json';
import zhTranslation from './zh.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: typeof enTranslation;
    };
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      zh: { translation: zhTranslation },
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },

    keySeparator: '.',
    nsSeparator: ':',
  })
  .then(() => {
    console.log('i18n initialized', {
      language: i18n.language,
      languages: i18n.languages,
      resources: i18n.options.resources
    });
  })
  .catch(console.error);

export default i18n;