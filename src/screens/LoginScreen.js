import { View, Text, Image } from 'react-native'
import LoginForm from '../components/Forms/LoginForm'
import Images from '../images/Images'
import { loginUser } from '../services/Api'
import styles from './style/LoginScreenStyle'

function LoginScreen () {
  const handleSubmit = async (credentials) => {
    const result = await loginUser(credentials)
    console.log(JSON.stringify(result))
  }

  return (
    <View style={styles.container}>
      <Image
        source={Images.logo}
        style={styles.logo}
        resizeMode='contain'
      />
      <LoginForm onSubmit={handleSubmit} />
    </View>
  )
}

export default LoginScreen
