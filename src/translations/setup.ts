import main_ru from './ru/main.json';
import sidebar_ru from './ru/sidebar.json';

import main_en from './en/main.json';
import sidebar_en from './en/sidebar.json';

import i18next from 'i18next';
import { getLangFromLocalStorage } from '../local-storage/languages';

const currLang: string = getLangFromLocalStorage() || 'ru'

void i18next.init({
  interpolation: { escapeValue: false },
  lng: currLang,
  resources: {
    ru: {
      main: main_ru,
      sidebar: sidebar_ru,
    },
    en: {
      main: main_en,
      sidebar: sidebar_en,
    },
  },
});

export default i18next;
