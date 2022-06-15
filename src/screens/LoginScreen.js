import { View, Text, Image } from 'react-native'
import LoginForm from '../components/Forms/LoginForm'
import Images from '../images/Images'
import styles from './style/LoginScreenStyle'

function LoginScreen () {
  return (
    <View style={styles.container}>
      <Image
        source={Images.logo}
        style={styles.logo}
        resizeMode='contain'
      />
      <LoginForm />
    </View>
  )
}

export default LoginScreen
