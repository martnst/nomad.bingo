import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import sharedStyles from './Field.styles'
import colors from './../colors'

const styles = Object.assign({}, sharedStyles, StyleSheet.create({
  textCenter: {
    fontSize: 50,
    color: colors.bingoLetters.N
  }
}))

export default class FreeField extends React.Component {
  render () {
    return (
      <View style={[styles.square, styles.squareSelected, {borderWidth: 0}]} >
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
          { this.props.bingoLetter ? '' : '★' }
        </Text>
      </View>
    )
  }
}
