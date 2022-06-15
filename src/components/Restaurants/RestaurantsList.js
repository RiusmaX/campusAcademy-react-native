import { FlatList } from 'react-native'
import RestaurantsListItem from './RestaurantsListItem'

function RestaurantsList ({ restaurants }) {
  const renderItem = ({ item }) => (
    <RestaurantsListItem restaurant={item} />
  )

  return (
    <FlatList
      data={restaurants}
      renderItem={renderItem}
      keyExtractor={item => item._id}
    />
  )
}

export default RestaurantsList
