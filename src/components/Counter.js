import { Button, Text, View } from 'react-native'
import { actionTypes, CounterProvider, useCounter } from '../contexts/CounterContext'

const CounterValue = () => {
  const { state: { counter } } = useCounter()
  return (
    <View>
      <Text>Valeur du compteur : {counter}</Text>
    </View>
  )
}

const CounterActions = () => {
  const { dispatch } = useCounter()

  const handlePlus = () => {
    dispatch({
      type: actionTypes.INCREMENT
    })
  }

  const handleMinus = () => {
    dispatch({
      type: actionTypes.DECREMENT
    })
  }

  return (
    <View>
      <Button title='-' onPress={handleMinus} />
      <Button title='+' onPress={handlePlus} />
    </View>
  )
}

const Counter = () => {
  return (
    <CounterProvider>
      <View>
        <CounterValue />
        <CounterActions />
      </View>
    </CounterProvider>
  )
}

export default Counter
