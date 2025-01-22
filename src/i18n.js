import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locale/en.json';
import es from './locale/es.json';

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        supportedLngs: ['en', 'es'],
        debug: process.env.NODE_ENV === 'development',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation:{
                    ...en
                }
            },
            es: {
                translation:{
                    ...es
                }
            },
        },
    });

export default i18next;