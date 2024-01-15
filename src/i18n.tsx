import eng from './translate/eng.json';
import ru from './translate/ru.json';

import { initReactI18next } from 'react-i18next';
import i18next, { i18n } from 'i18next';


const resourses = {
  en: {
    tranlation: eng
  },
  ru: {
    translation: ru
  }
}

i18n.use(initReactI18next).init({resourses, lng:JSON.parse(localStorage.getItem('language')), fallbacking: 'ru'});

export default i18n;
