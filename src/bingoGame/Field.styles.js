import { StyleSheet, Platform } from 'react-native'
import colors from './../colors'

export default StyleSheet.create({
  square: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.selection,
    borderWidth: 1,
    overflow: 'hidden',
    borderRadius: 3
  },
  squareSelected: {
    backgroundColor: colors.background
  },
  text: {
    backgroundColor: 'rgba(0,0,0,0)',
    textAlign: 'center',
    fontFamily: 'Merriweather',
    fontSize: Platform.OS === 'web' ? '1em' : 11,
    color: '#77777B'
  },
  textSelected: {
    color: 'white'
  },
  bingoLetter: {
    fontFamily: 'Quicksand',
    fontSize: 60,
    position: 'absolute',
    opacity: 0.65,
    color: colors.selection
  }
})
