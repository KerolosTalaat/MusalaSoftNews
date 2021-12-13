import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';

import styles from './RadioButton.Styles';

const RadioButton = ({
  selected = null,
  onPress = () => null,
}) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={selected}
    >
      <View
        style={[
          styles.container(colors),
          !selected ? { borderColor: colors.text } : null,
        ]}
      >
        {selected ? (
          <View style={styles.selected(colors)} />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default RadioButton;
