import { useState } from 'react'
import { Button, Text, View } from 'react-native'
import colors from '../../style/Colors'
import TextInput from '../Inputs/TextInput'

function LoginForm ({ onSubmit }) {
  const [credentials, setCredentials] = useState({
    identifier: 'test@test.fr',
    password: 'testtest'
  })

  return (
    <View>
      <Text>Se connecter</Text>
      <TextInput
        iconName='person-circle'
        value={credentials.identifier}
        onChangeText={(text) => {
          setCredentials({ ...credentials, identifier: text })
        }}
      />
      <TextInput
        secureTextEntry
        iconName='lock-closed'
        value={credentials.password}
        onChangeText={(text) => {
          setCredentials({ ...credentials, password: text })
        }}
      />
      <Button
        color={colors.secondary}
        title='Se connecter'
        onPress={() => onSubmit(credentials)}
      />
    </View>
  )
}

export default LoginForm
