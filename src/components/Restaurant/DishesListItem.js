import { Image, Text, useWindowDimensions, View } from 'react-native'
import styles from './style/DishesStyle'

const STRAPI_URL = 'https://strapi.myidea.fr'

const ItemSeparator = () => {
  return (
    <View style={
      {
        height: '100%',
        width: 5
        // backgroundColor: 'red'
      }
  }
    />
  )
}

function DishesListItem ({ plat }) {
  const SCREEN_WIDTH = useWindowDimensions().width

  return (
    <View style={{
      width: SCREEN_WIDTH + 5,
      height: 'auto',
      flexDirection: 'row'
    }}
    >
      <ItemSeparator />
      <View style={styles.dishesCard}>
        {plat.photos[0] &&
          <Image
            style={styles.image}
            source={{ uri: `${STRAPI_URL}${plat.photos[0]?.url}` }}
            resizeMode='cover'
          />}
        <View style={styles.cardFooter}>
          <Text style={styles.cardTitle}>
            {plat.nom}
          </Text>
          <Text style={styles.description}>
            {plat.description}
          </Text>
        </View>
      </View>
      <ItemSeparator />
    </View>
  )
}

export default DishesListItem
