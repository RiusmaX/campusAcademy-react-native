import { StyleSheet } from 'react-native'
import colors from './Colors'

const texts = StyleSheet.create({
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.secondary
  },
  description: {
    fontSize: 18,
    color: colors.lightText
  }
})

export default texts
