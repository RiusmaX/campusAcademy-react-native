import { Linking, Platform, View, Text, TouchableOpacity } from 'react-native'
import styles from './style/RestaurantDetailsStyle'

function RestaurantDetails ({ restaurant }) {
  const openMap = async () => {
    const destination = encodeURIComponent(`${restaurant.adresse.adresse} ${restaurant.adresse.code_postal} ${restaurant.adresse.ville} ${restaurant.adresse.pays}`)
    const provider = Platform.OS === 'ios' ? 'apple' : 'google'
    const link = `https://maps.${provider}.com/?q=${destination}`

    try {
      Linking.openURL(link)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View>
      <TouchableOpacity
        onPress={openMap}
        style={styles.card}
      >
        <Text style={styles.address}>{`${restaurant.adresse.adresse}, ${restaurant.adresse.code_postal} - ${restaurant.adresse.ville}`}</Text>
      </TouchableOpacity>
      <View style={styles.card}>
        <Text style={styles.description}>{restaurant.description}</Text>
      </View>
    </View>

  )
}

export default RestaurantDetails
