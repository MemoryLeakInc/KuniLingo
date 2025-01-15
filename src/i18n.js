import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


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
                translation: {
                    welcome: "Welcome!",
                    sectionText: "I'm a section",
                    buttonLabel: "Click me",
                },
            },
            es: {
                translation: {
                    welcome: "¡Bienvenido!",
                    sectionText: "Soy una sección",
                    buttonLabel: "Haz click aquí",
                },
            },
        },
    });

export default i18next;