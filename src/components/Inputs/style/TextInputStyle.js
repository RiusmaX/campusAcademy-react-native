import { StyleSheet } from 'react-native'
import colors from '../../../style/Colors'

export default StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 5,
    marginVertical: 15
  },
  input: {
    flex: 1,
    fontSize: 18,
    marginLeft: 5
  },
  icon: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderRightWidth: 1,
    borderRightColor: colors.secondary,
    backgroundColor: colors.light
  }
})
