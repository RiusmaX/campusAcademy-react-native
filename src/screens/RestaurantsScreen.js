import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import RestaurantsList from '../components/Restaurants/RestaurantsList'
import { getRestaurants } from '../services/Api'

function RestaurantsScreen () {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await getRestaurants()
      setRestaurants(data)
    }
    getData()
  }, [])

  return (
    <View>
      <RestaurantsList restaurants={restaurants} />
    </View>
  )
}

export default RestaurantsScreen
