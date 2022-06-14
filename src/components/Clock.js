import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    return (
      <View style={styles.container}>
        <Icon name='clock' size={25} color='orange' />
        <Text style={styles.text}>Il est : {this.state.date.toLocaleTimeString()}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Clock
