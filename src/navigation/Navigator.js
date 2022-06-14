import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../screens/HomeScreen'
import RestaurantScreen from '../screens/RestaurantsScreen'

const TabNavigator = createBottomTabNavigator()

const MainNavigator = () => {
  return (
    <TabNavigator.Navigator>
      <TabNavigator.Screen name='Home' component={HomeScreen} />
      <TabNavigator.Screen name='Restaurants' component={RestaurantScreen} />
    </TabNavigator.Navigator>
  )
}

export default MainNavigator
