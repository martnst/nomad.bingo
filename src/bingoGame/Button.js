import React from 'react'
import { Platform, View, Text, TouchableHighlight } from 'react-native'
import styles from './Field.styles'

export default class Button extends React.Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.onChangeSelection = (props.onChangeSelection || (() => {})).bind(this)

    this.state = {
      isSelected: false
    }
  }

  handleClick () {
    this.setState({ isSelected: !this.state.isSelected })
    this.onChangeSelection(this.props.position, !this.state.isSelected)
  }

  render () {
    let boxStyles = [
      styles.square,
      this.state.isSelected ? styles.squareSelected : null
    ]

    let bingoLetter = <Text key='bingoLetter' style={styles.bingoLetter}>{ this.props.bingoLetter }</Text>
    let labelStyles = [
      styles.text,
      this.state.isSelected ? styles.textSelected : null
    ]
    let label = <Text key='label' style={labelStyles}>{ this.props.title }</Text>

    if (Platform.OS === 'web') {
      return (
        <View style={boxStyles} onClick={this.handleClick}>
          { [bingoLetter, label] }
        </View>
      )
    } else { // mobile apps
      return (
        <TouchableHighlight onPress={this.handleClick}>
          <View style={boxStyles}>{ [bingoLetter, label] }</View>
        </TouchableHighlight>
      )
    }
  }
}
