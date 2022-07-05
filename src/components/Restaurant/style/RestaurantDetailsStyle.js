import { StyleSheet } from 'react-native'
import colors from '../../../style/Colors'
import texts from '../../../style/Texts'

export default StyleSheet.create({
  ...texts,
  card: {
    backgroundColor: 'white',
    marginVertical: 5,
    elevation: 3
  },
  title: {
    ...texts.cardTitle,
    textAlign: 'center',
    padding: 10
  },
  description: {
    ...texts.description,
    padding: 10,
    textAlign: 'justify'
  },
  address: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.secondary,
    fontWeight: 'bold',
    marginHorizontal: 5,
    marginVertical: 10
  }
})
