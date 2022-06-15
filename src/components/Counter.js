import { Button, Text, View } from 'react-native'

const CounterValue = () => {
  return (
    <View>
      <Text>Valeur du compteur : </Text>
    </View>
  )
}

const CounterActions = () => {
  return (
    <View>
      <Button title='-' />
      <Button title='+' />
    </View>
  )
}

const Counter = () => {
  return (
    <View>
      <CounterValue />
      <CounterActions />
    </View>
  )
}

export default Counter
