import React from 'react'
import { Platform, View, Text, StyleSheet, TouchableHighlight } from 'react-native'

const selectedColor = 'blueviolet'

const styles = StyleSheet.create({
  square: {
    width: '100%',
    height: '100%',
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: selectedColor,
    borderRightWidth: 1,
    borderBottomWidth: 1
  },
  squareSelected: {
    backgroundColor: selectedColor
  },
  text: {
    textAlign: 'center'
  },
  textSelected: {
    color: 'white'
  }
})

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
    let boxStyles = [
      styles.square,
      this.state.isSelected ? styles.squareSelected : null
    ]

    let label = (
      <Text style={[styles.text, this.state.isSelected ? styles.textSelected : null]}>
        {this.props.title}
      </Text>
    )

    if (Platform.OS === 'web') {
      return (
        <View style={boxStyles} onClick={e => this.handleClick(e)}>
          { label }
        </View>
      )
    } else { // mobile apps
      return (
        <TouchableHighlight style={boxStyles} onPress={e => this.handleClick(e)}>
          { label }
        </TouchableHighlight>
      )
    }
  }
}
