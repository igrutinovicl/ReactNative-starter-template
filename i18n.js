import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';
import enTranslation from './translations/en/translation.json';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async (cb) => {
    const savedDataJSON = await AsyncStorage.getItem('user-language');
    const lng = savedDataJSON || Localization.locale;
    cb(lng);
  },
  init: () => {},
  cacheUserLanguage: async (lng) => {
    await AsyncStorage.setItem('user-language', lng);
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: enTranslation
      }
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
