import React from 'react'
import './square.css'

export default class Square extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isSelected: false
    }
  }

  handleClick () {
    this.setState({ isSelected: !this.state.isSelected })
  }

  render () {
    var className = this.state.isSelected ? 'selected' : ''
    return (
      <div className={['grid-cell square ' + className]} onClick={e => this.handleClick(e)}>
        <div>
          <span>{this.props.title}</span>
        </div>
      </div>
    )
  }
}
