import { StyleSheet } from 'react-native'

const selectedColor = 'blueviolet'

export default StyleSheet.create({
  square: {
    width: '100%',
    height: '100%',
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: selectedColor,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    overflow: 'hidden'
  },
  squareSelected: {
    backgroundColor: selectedColor
  },
  text: {
    backgroundColor: 'rgba(0,0,0,0)',
    textAlign: 'center'
  },
  textSelected: {
    color: 'white'
  },
  bingoLetter: {
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 80,
    fontWeight: 'bold',
    position: 'absolute',
    opacity: 0.5,
    color: 'white'
  }
})
