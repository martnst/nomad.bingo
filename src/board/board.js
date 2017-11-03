import React from 'react'
import Square from './square'
import './grid.css'
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
          <Square key={i} title={term} />,
          <div className='grid-spacer' key={'cell-spacer-' + i} />
        ]
      })
      .flatten()
      .slice(0, -1) // remove last spacer
      .value()

      rows.push(<div className='grid-row' key={'col' + index} size={1}>{squares}</div>)
      rows.push(<div className='grid-spacer' key={'row-spacer-' + index} />)
      termsIndex += boardSize
    }
    rows.pop() // remove last spacer

    return (
      <div style={this.props.style}>
        <div className='grid-container'>
          { rows }
        </div>
      </div>
    )
  }
}
