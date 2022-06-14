import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './style/RestaurantsListItemStyle'

const STRAPI_URL = 'https://strapi.myidea.fr'

function RestaurantsListItem ({ restaurant }) {
  const navigation = useNavigation()

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetails')}>
        <Image
          style={styles.image}
          source={{ uri: `${STRAPI_URL}${restaurant?.photos[0]?.url}` }}
          resizeMode='cover'
        />
        <View style={styles.cardFooter}>
          <Text style={styles.cardTitle}>
            {restaurant.title}
          </Text>
          <Text style={styles.description}>
            {`${restaurant.description.substring(0, 100)}...`}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default RestaurantsListItem
