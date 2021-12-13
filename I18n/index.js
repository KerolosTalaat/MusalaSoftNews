import AsyncStorage from '@react-native-async-storage/async-storage';
import I18n from 'i18n-js';

import en from './Languages/en';
import bu from './Languages/bu';

class translationManager {
	constructor() {
		I18n.translations = {
			en,
			bu
		};
		AsyncStorage.getItem('lang').then(value => {
			if (value) { this.changeLanguage(value) }
			else { this.changeLanguage('en') }
		});
	};

	changeLanguage = (lang) =>  {
		I18n.locale = lang;
		AsyncStorage.setItem('lang', lang);
	};

	translate = (text) => {
		return I18n.t(text, { defaultValue: text });
	};

	getLanguage = () => {
		return I18n.locale
	};
};

export default new translationManager();