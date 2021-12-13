import React from 'react';
import { Text, StyleProp, TextStyle, TextProps  } from 'react-native';
import { useTheme } from '@react-navigation/native';

import translationManager from '../../I18n';

export type color = "background" | "card" | "text" | "primary" | "border" | "notification"

export type Props = {
  text?: string;
  color?: color;
  style: StyleProp<TextStyle>;
};

const MSNText: React.FC<Props & TextProps> = ({ text, style, color = 'text', ...props }) => {
  const { colors } = useTheme();
  return (
    <Text {...props} style={[{ color: colors[color] }, style]} >
      {translationManager.translate(text)}
    </Text>
  );
};

export default MSNText;