import React, { useEffect, useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { getRestaurants } from '../services/Api'

function RestaurantScreen () {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await getRestaurants()
      setRestaurants(data)
    }
    getData()
  }, [])

  return (
    <ScrollView>
      <Text>{JSON.stringify(restaurants, null, 2)}</Text>
    </ScrollView>
  )
}

export default RestaurantScreen
