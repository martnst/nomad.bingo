import React from 'react'
import Square from './square'
import './board.css'

export default class Board extends React.Component {

  render () {
    const boardSize = 4
    var rows = []
    var termsIndex = 0

    for (var index = 0; index < boardSize; index++) {
      var terms = this.props.terms.slice(termsIndex, termsIndex + boardSize)
      var squares = terms.map((term, i) => <Square key={i} title={term} />)
      rows.push(<tr key={'row' + index}>{squares}</tr>)
      termsIndex += boardSize
    }

    return (
      <table className='game-board'>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}
