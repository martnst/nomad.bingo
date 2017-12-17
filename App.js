import React from 'react'
import { StyleSheet, View } from 'react-native'
import Header from './src/Header'
import Board from './src/bingoGame/Board'
import terms from './src/terms.json'
import _ from 'underscore'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#170B2D'
  }
})

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Header />
        <Board
          terms={_.shuffle(terms)}
          style={{width: '100%', height: '60%', padding: '3%'}}
        />
      </View>
    )
  }
}
