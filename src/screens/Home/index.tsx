import { Image, StyleSheet, View } from 'react-native'

import logoImage from '@/assets/logo.png'
import { TaskForm } from '@/components/task-form'
import theme from '@/theme'

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImage} />

        <TaskForm />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.GRAY_600,
  },
  header: {
    height: 173,
    backgroundColor: theme.COLORS.GRAY_700,
    padding: 24,

    alignItems: 'center',
    justifyContent: 'center',
  },
})
