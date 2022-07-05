import { ImageBackground, Text, View } from 'react-native'
import styles from './style/HeaderRestaurantStyle'

const STRAPI_URL = 'https://strapi.myidea.fr'

function HeaderRestaurant ({ restaurant }) {
  return (
    <View>
      <ImageBackground
        source={{ uri: `${STRAPI_URL}${restaurant.photos[0]?.url}` }}
        style={styles.headerImage}
        resizeMode='cover'
      >
        <View style={styles.backdrop}>
          <Text style={styles.title}>{restaurant.title}</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default HeaderRestaurant
