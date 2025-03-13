import { ActivityIndicator, StyleSheet, View } from 'react-native'
import theme from '../theme'

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={46} color={theme.COLORS.BLUE} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
