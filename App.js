import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Board from './src/board/board'
import terms from './src/terms.json'
import _ from 'underscore'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headline: {
    fontWeight: 'bold',
    fontSize: 30
  }
})

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Nomad Bingo</Text>
        <Board
          terms={_.shuffle(terms)}
          style={{width: '100%', height: '80%', padding: '3%'}}
        />
      </View>
    )
  }
}
