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
    lng: 'ko',           // 기본 언어를 영어로 설정 (필요 시 'ko'로 변경)
    fallbackLng: 'en',   // 해당 언어가 없을 경우 fallback
    interpolation: {
      escapeValue: false // React는 이미 XSS 보호를 제공합니다.
    }
  });

export default i18n;
