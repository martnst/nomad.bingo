import React from 'react'

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
      <td className={className} onClick={e => this.handleClick(e)}>
        {this.props.title}
      </td>
    )
  }
}
