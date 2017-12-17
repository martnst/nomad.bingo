import React from 'react'
import { StyleSheet, View, Text, Platform } from 'react-native'
import colors from './colors'

const verticalBingoOffset = 35
const nomadHeadlineHeight = Platform.OS === 'web' ? 100 : 80

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  headline: {
    fontFamily: 'Quicksand',
    fontSize: nomadHeadlineHeight,
    color: 'white',
    textAlign: 'center'
  },
  headlineBingoContainer: {
    width: 340,
    height: 140
  },
  headlineNomad: {
    height: nomadHeadlineHeight + 2,
    lineHeight: nomadHeadlineHeight
  },
  headlineBingo: {
    backgroundColor: 'rgba(0,0,0,0)',
    position: 'absolute',
    fontSize: 120
  },
  headlineB: {
    transform: [{ rotate: '-13deg' }],
    color: colors.bingoLetters.B,
    top: 1 - verticalBingoOffset,
    left: 5
  },
  headlineI: {
    transform: [{ rotate: '2deg' }],
    color: colors.bingoLetters.I,
    top: 5 - verticalBingoOffset,
    left: 80
  },
  headlineN: {
    transform: [{ rotate: '16deg' }],
    color: colors.bingoLetters.N,
    top: 0 - verticalBingoOffset,
    left: 108
  },
  headlineG: {
    transform: [{ rotate: '-8deg' }],
    color: colors.bingoLetters.G,
    top: 6 - verticalBingoOffset,
    left: 188,
    zIndex: 1
  },
  headlineO: {
    transform: [{ rotate: '6deg' }],
    color: colors.bingoLetters.O,
    top: 5 - verticalBingoOffset,
    left: 248
  }
})

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={[styles.headline, styles.headlineNomad]}>Nomad</Text>
        <View style={styles.headlineBingoContainer}>
          <Text style={[styles.headline, styles.headlineBingo, styles.headlineB]}>B</Text>
          <Text style={[styles.headline, styles.headlineBingo, styles.headlineI]}>I</Text>
          <Text style={[styles.headline, styles.headlineBingo, styles.headlineN]}>N</Text>
          <Text style={[styles.headline, styles.headlineBingo, styles.headlineG]}>G</Text>
          <Text style={[styles.headline, styles.headlineBingo, styles.headlineO]}>O</Text>
        </View>
      </View>
    )
  }
}
