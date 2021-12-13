import React from 'react'
import { View } from 'react-native'

import  RadioButton from '../RadioButton'
import  MSNText from '../MSNText'

import styles from './LanguageRadio.Styles'

function LanguageRadio({ title, isSelected, onPress }) {
  return (
    <View style={styles.radioContainer}>
      <MSNText text={title} style={styles.text} />

      <RadioButton
        selected={isSelected}
        style={styles.radio}
        onPress={onPress}
      />
    </View>
  );
};

export default LanguageRadio;
