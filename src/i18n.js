import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
//import Cache from 'i18next-localstorage-cache';
//import LanguageDetector from 'i18next-browser-languagedetector';


i18n
.use(XHR)
  .init({
     lng: 'en',
    fallbackLng: 'en',
    // wait: true, // globally set to wait for loaded translations in translate hoc

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',

    debug: true,

    // cache: {
    //   enabled: true
    // },
  //  backend: {
      // path where resources get loaded from
 //     loadPath: 'https://gjulivanmedia.file.core.windows.net/gjulivanmedia/locales/{{lng}}/{{ns}}.json',
 //     crossDomain: true
  //  },
    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ',',
      format: function(value, format, lng) {
        if (format === 'uppercase') return value.toUpperCase();
        return value;
      }
    }
  });


export default i18n;
