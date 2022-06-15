import { TextInput as BaseInput, View } from 'react-native'
import styles from './style/TextInputStyle'
import Icon from 'react-native-vector-icons/Ionicons'

function TextInput () {
  return (
    <View style={styles.container}>
      <Icon
        name='person-circle'
        size={30}
        style={styles.icon}
      />
      <BaseInput
        style={styles.input}
      />
    </View>
  )
}

export default TextInput
