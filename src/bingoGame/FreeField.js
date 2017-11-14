import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import sharedStyles from './Field.styles'

const styles = Object.assign({}, sharedStyles, StyleSheet.create({
  textCenter: {
    fontSize: 50
  }
}))

export default class FreeField extends React.Component {
  render () {
    return (
      <View style={[styles.square, styles.squareSelected]} >
        <Text key='bingoLetter' style={styles.bingoLetter}>
          { this.props.bingoLetter }
        </Text>
        <Text
          key='label'
          style={[
            styles.text,
            styles.textSelected,
            this.props.bingoLetter ? null : styles.textCenter
          ]}>
          { this.props.bingoLetter ? '★ ★ ★' : '★' }
        </Text>
      </View>
    )
  }
}
