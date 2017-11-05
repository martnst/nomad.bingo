import { Platform, StyleSheet } from 'react-native'

const spacing = Platform.OS === 'web' ? '10px' : '1%'

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  cell: {
    flex: 1
  },
  spacer: {
    height: spacing,
    width: spacing
  }
})
