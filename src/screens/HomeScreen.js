import React from 'react'
import { ScrollView, useColorScheme, View } from 'react-native'
import { Colors, Header } from 'react-native/Libraries/NewAppScreen'
import Clock from '../components/Clock'

function HomeScreen () {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }

  return (
    <View>
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={backgroundStyle}
      >
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white
          }}
        >
          <Clock />
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen
