import React from 'react'
import { Text, View } from 'react-native'

function RestaurantScreen ({ route }) {
  const { id } = route.params
  console.log(id)
  return (
    <View>
      <Text>RESTAURANT SCREEN</Text>
      <Text>{id}</Text>
    </View>
  )
}

export default RestaurantScreen
