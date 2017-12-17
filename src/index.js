import React from 'react'
import ReactDOM from 'react-dom'
import Board from './bingoGame/Board'
import Header from './Header'
import _ from 'underscore'
import terms from './terms.json'

class Game extends React.Component {
  render () {
    return (
      <div className='game'>
        <Board terms={_.shuffle(terms)} rowHeight='6em' />
      </div>
    )
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)

ReactDOM.render(
  <Header />,
  document.getElementsByTagName('header')[0]
)

