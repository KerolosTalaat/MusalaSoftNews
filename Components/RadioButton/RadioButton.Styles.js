import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: colors => ({
    height: 20.1,
    width: 20.1,
    borderRadius: 10.5,
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid'
  }),
  selected: colors => ({
    height: 12.1,
    width: 12.1,
    borderRadius: 6.5,
    backgroundColor: colors.primary
  })
});
