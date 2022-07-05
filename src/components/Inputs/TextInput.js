import { TextInput as BaseInput, View } from 'react-native'
import styles from './style/TextInputStyle'
import Icon from 'react-native-vector-icons/Ionicons'

function TextInput (props) {
  return (
    <View style={styles.container}>
      {
        props.iconName && (
          <Icon
            name={props.iconName}
            size={30}
            style={styles.icon}
          />
        )
      }
      <BaseInput
        {...props}
        style={styles.input}
      />
    </View>
  )
}

export default TextInput
