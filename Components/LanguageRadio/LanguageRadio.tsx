import React from 'react'
import { View } from 'react-native'

import  RadioButton from '../RadioButton'
import  MSNText from '../MSNText'

import styles from './LanguageRadio.Styles'

export type Props = {
  title: string;
  isSelected?: boolean;
  onPress(): null|void;
};

const LanguageRadio: React.FC<Props> = ({ title, isSelected, onPress }) => {
  return (
    <View style={styles.radioContainer}>
      <MSNText text={title} style={styles.text} />

      <RadioButton
        selected={isSelected}
        onPress={onPress}
      />
    </View>
  );
};

export default LanguageRadio;
