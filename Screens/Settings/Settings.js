import React, { Component } from 'react';
import { View } from 'react-native';

import { MSNText, LanguageRadio } from '../../Components'
import translationManager from '../../I18n'

import styles from './Settings.Styles';

class Settings extends Component {
	state = { language: translationManager.getLanguage() }
	render() {
		return (
			<View style={styles.container} >
				<MSNText text={'language'} style={styles.titleText} />
				<LanguageRadio title={"English"} isSelected={this.state.language === 'en'} onPress={() => {
					translationManager.changeLanguage('en')
					this.setState({ language: 'en' })
				}} />
				<LanguageRadio title={"български"} isSelected={this.state.language === 'bu'} onPress={() => {
					translationManager.changeLanguage('bu')
					this.setState({ language: 'bu' })
				}}
				/>
			</View>
		);
	};
};

export default Settings;