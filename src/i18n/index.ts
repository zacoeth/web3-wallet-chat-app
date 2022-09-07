import I18n from 'i18n-js';
import * as locales from './locales';
import * as Localization from 'expo-localization';

I18n.translations = locales;
I18n.fallbacks = true;
I18n.defaultLocale = 'en';
I18n.locale = Localization.locale;
I18n.currentLocale();

export default I18n;