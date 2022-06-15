import { StyleSheet } from 'react-native'
import texts from '../../../style/Texts'

export default StyleSheet.create({
  ...texts,
  image: {
    width: '100%',
    height: 200
  },
  dishesCard: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 10,
    elevation: 3
  },
  cardFooter: {
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  card: {
    backgroundColor: 'white',
    marginVertical: 5
  },
  title: {
    ...texts.cardTitle,
    textAlign: 'center',
    padding: 10
  }
})
