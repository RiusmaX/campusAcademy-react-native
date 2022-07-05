import { useEffect, useState } from 'react'
import { Text, View, ScrollView } from 'react-native'
import DishesList from '../components/Restaurant/DishesList'
import HeaderRestaurant from '../components/Restaurant/HeaderRestaurant'
import RestaurantDetails from '../components/Restaurant/RestaurantDetails'
import { getRestaurantById } from '../services/Api'

function RestaurantScreen ({ route, navigation }) {
  const [restaurant, setRestaurant] = useState()
  const { id } = route.params

  useEffect(() => {
    const getData = async () => {
      const data = await getRestaurantById(id)
      setRestaurant(data)
      navigation.setOptions({ title: data.title })
    }
    getData()
  })

  if (!restaurant) {
    return (
      <View>
        <Text>Chargement...</Text>
      </View>
    )
  }

  return (
    <ScrollView>
      <HeaderRestaurant restaurant={restaurant} />
      <RestaurantDetails restaurant={restaurant} />
      <DishesList dishes={restaurant.plats} />
    </ScrollView>
  )
}

export default RestaurantScreen
