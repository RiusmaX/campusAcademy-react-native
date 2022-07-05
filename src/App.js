/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native'
import {
  SafeAreaView,
  StatusBar,
  useColorScheme
} from 'react-native'

import {
  Colors
} from 'react-native/Libraries/NewAppScreen'
import MainNavigator from './navigation/Navigator'

import OneSignal from 'react-native-onesignal'
import RNBootSplash from 'react-native-bootsplash'

// OneSignal Init Code
OneSignal.setLogLevel(6, 0)
OneSignal.setAppId('f80f3d83-bae4-4c63-8516-b96a96ed158d')
// END OneSignal Init Code

// Prompt for push on iOS
OneSignal.promptForPushNotificationsWithUserResponse(response => {
  console.log('Prompt response:', response)
})

// Method for handling notifications received while app in foreground
OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
  console.log('OneSignal: notification will show in foreground:', notificationReceivedEvent)
  const notification = notificationReceivedEvent.getNotification()
  console.log('notification: ', notification)
  const data = notification.additionalData
  console.log('additionalData: ', data)
  // Complete with null means don't show a notification.
  notificationReceivedEvent.complete(notification)
})

// Method for handling notifications opened
OneSignal.setNotificationOpenedHandler(notification => {
  console.log('OneSignal: notification opened:', notification)
})

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }

  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
      <SafeAreaView style={[{ height: '100%' }, backgroundStyle]}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <MainNavigator />
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App
