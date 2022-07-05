import { FlatList, Text, View } from 'react-native'
import DishesListItem from './DishesListItem'
import styles from './style/DishesStyle'

const categoriesTrad = {
  starter: 'Entrées',
  dish: 'Plats',
  dessert: 'Dessert',
  drink: 'Boissons'
}

function DishesList ({ dishes }) {
  const categories = [...new Set(dishes.map(d => d.category))]

  const renderItem = ({ item }) => (
    <DishesListItem plat={item} />
  )

  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.title}>Notre Carte</Text>
        {categories.map((c, i) => (
          <View key={i}>
            <Text style={styles.title}>{categoriesTrad[c]}</Text>
            <FlatList
              horizontal
              pagingEnabled
              legacyImplementation={false}
              data={dishes.filter(d => d.category === c)}
              keyExtractor={plat => plat._id}
              renderItem={renderItem}
            />
          </View>
        ))}
      </View>
    </View>
  )
}

export default DishesList
