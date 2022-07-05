import { StyleSheet } from 'react-native'
import colors from '../../../style/Colors'

export default StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 200
  },
  backdrop: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 45,
    color: colors.light,
    fontWeight: 'bold'
  }
})
