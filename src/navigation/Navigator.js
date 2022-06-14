import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../screens/HomeScreen'
import RestaurantsScreen from '../screens/RestaurantsScreen'
import colors from '../style/Colors'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RestaurantScreen from '../screens/RestaurantScreen'

const TabNavigator = createBottomTabNavigator()

const StackNavigator = createNativeStackNavigator()

const RestaurantNavigator = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name='RestaurantsList' component={RestaurantsScreen} />
      <StackNavigator.Screen name='RestaurantDetails' component={RestaurantScreen} />
    </StackNavigator.Navigator>
  )
}

const MainNavigator = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          const iconSize = focused ? 30 : 25

          switch (route.name) {
            case ('Home'):
              iconName = focused ? 'home' : 'home-outline'
              break
            case ('Restaurants'):
              iconName = focused ? 'fast-food' : 'fast-food-outline'
              break
            default:
              break
          }

          return <Icon name={iconName} size={iconSize} color={colors.primary} />
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text
      })}
    >
      <TabNavigator.Screen name='Home' component={HomeScreen} />
      <TabNavigator.Screen
        name='Restaurants'
        component={RestaurantNavigator}
        options={{
          headerShown: false
        }}
      />
    </TabNavigator.Navigator>
  )
}

export default MainNavigator
