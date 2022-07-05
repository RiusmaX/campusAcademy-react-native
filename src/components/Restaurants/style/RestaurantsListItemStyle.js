import { StyleSheet } from 'react-native'
import colors from '../../../style/Colors'
import texts from '../../../style/Texts'

export default StyleSheet.create({
  ...texts,
  card: {
    flex: 1,
    backgroundColor: 'white',
    width: '95%',
    elevation: 2,
    alignSelf: 'center',
    marginVertical: 10
  },
  cardFooter: {
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  image: {
    height: 200
  }
})
