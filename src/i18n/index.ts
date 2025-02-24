import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locale/en.json';
import ko from './locale/ko.json';

const resources = {
  en: { translation: en },
  ko: { translation: ko },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ko',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
