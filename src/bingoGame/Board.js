import React from 'react'
import { View, Platform, StyleSheet } from 'react-native'
import Button from './Button'
import FreeField from './FreeField'
import _ from 'underscore'

const boardSize = 5
const boardCenter = 2
const spacing = Platform.OS === 'web' ? '10px' : '1%'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  cell: {
    flex: 1
  },
  spacer: {
    height: spacing,
    width: spacing
  }
})

const BingoSeriesDirection = {
  ROW: { positions: (offset) => _.range(boardSize).map(index => [offset, index]) },
  COLUMN: { positions: (offset) => _.range(boardSize).map(index => [index, offset]) },
  DIAGONAL: {
    positions: (offset) => _.range(boardSize).map(index => {
      return [
        index,
        Math.abs((boardSize - 1) * offset - index)
      ]
    })
  }
}

class BingoSeries {
  constructor (direction, offset) {
    this.direction = direction
    this.offset = offset
  }
  positions () {
    return this.direction.positions(this.offset)
  }
}

export default class Board extends React.Component {
  constructor () {
    super()
    this.selections = {}
    this.state = {
      isBingo: false
    }
    this.selections[[boardCenter, boardCenter]] = true
    this.completedSeries = undefined
    this.serieses = _.flatten([
      [0, 1].map(offset => new BingoSeries(BingoSeriesDirection.DIAGONAL, offset)),
      _.range(boardSize).map(offset => new BingoSeries(BingoSeriesDirection.ROW, offset)),
      _.range(boardSize).map(offset => new BingoSeries(BingoSeriesDirection.COLUMN, offset))
    ])
  }
  updateIsBingo () {
    this.completedSeries = _.find(this.serieses, bingoRow => {
      return _.select(bingoRow.positions(), position => {
        return this.selections[position] === true
      }).length === boardSize
    })
    this.setState({isBingo: this.completedSeries !== undefined})
  }

  handleSquareSelectionChanged (position, isSelected) {
    this.selections[position] = isSelected
    this.updateIsBingo()
    this.setState({buttonClickCounter: this.state.buttonClickCounter + 1})
  }

  render () {
    var rows = []
    var termsIndex = 0
    var bingoLetters = {}
    if (this.completedSeries) {
      this.completedSeries.positions().forEach((pos, index) => {
        bingoLetters[pos] = 'BINGO'.slice(index, index + 1)
      })
    }

    for (var rowIndex = 0; rowIndex < boardSize; rowIndex++) {
      var squares = []
      for (var columnIndex = 0; columnIndex < boardSize; columnIndex++) {
        let position = [rowIndex, columnIndex]
        let item = rowIndex === boardCenter && columnIndex === boardCenter
          ? <FreeField
            key='center'
            bingoLetter={bingoLetters[position]}
          />
          : <Button
            key={['button', rowIndex, columnIndex].join('-')}
            position={position}
            title={this.props.terms[termsIndex]}
            bingoLetter={bingoLetters[position]}
            onChangeSelection={this.handleSquareSelectionChanged.bind(this)}
          />
        termsIndex++
        squares.push(
          <View style={[styles.cell, {height: this.props.rowHeight}]} key={'cell-' + columnIndex}>
            { item }
          </View>)
        squares.push(<View style={styles.spacer} key={'cell-spacer-' + columnIndex} />)
      }
      squares.pop() // remove last spacer

      rows.push(<View style={styles.row} key={'row' + rowIndex} size={1}>{squares}</View>)
      rows.push(<View style={styles.spacer} key={'row-spacer-' + rowIndex} />)
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
