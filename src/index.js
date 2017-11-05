import React from 'react'
import ReactDOM from 'react-dom'
import Board from './board/board'
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

