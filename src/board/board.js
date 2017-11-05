import React from 'react'
import { View } from 'react-native'
import Button from './button'
import styles from './gridStyles'
import _ from 'underscore'

export default class Board extends React.Component {
  render () {
    const boardSize = 4
    var rows = []
    var termsIndex = 0

    for (var index = 0; index < boardSize; index++) {
      var terms = this.props.terms.slice(termsIndex, termsIndex + boardSize)
      var squares = _.chain(terms).map((term, i) => {
        return [
          <View style={[styles.cell, {height: this.props.rowHeight}]} key={'cell-' + i}>
            <Button key={'button-' + i} title={term} />
          </View>,
          <View style={styles.spacer} key={'cell-spacer-' + i} />
        ]
      })
      .flatten()
      .slice(0, -1) // remove last spacer
      .value()

      rows.push(<View style={styles.row} key={'col' + index} size={1}>{squares}</View>)
      rows.push(<View style={styles.spacer} key={'row-spacer-' + index} />)
      termsIndex += boardSize
    }
    rows.pop() // remove last spacer

    return (
      <View style={this.props.style}>
        <View style={styles.container}>
          { rows }
        </View>
      </View>
    )
  }
}
