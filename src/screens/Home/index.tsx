import { StyleSheet, Text, View } from 'react-native'

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#FFF' }}>TODOS</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
