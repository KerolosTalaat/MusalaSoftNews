import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

import translationManager from '../../I18n';

const MSNText = ({ text, style, color = 'text', ...props }) => {
  const { colors } = useTheme();
  return (
    <Text {...props} style={[{ color: colors[color] }, style]} >
      {translationManager.translate(text)}
    </Text>
  );
};

export default MSNText;