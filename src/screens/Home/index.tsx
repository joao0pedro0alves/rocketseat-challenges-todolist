import { Image, StyleSheet, View } from 'react-native'

import logoImage from '@/assets/logo.png'
import theme from '@/theme'

import { TaskForm } from '@/components/task-form'
import { TaskList } from '@/components/task-list'
import { TasksContextProvider } from '@/context/tasks/provider'

export function Home() {
  return (
    <TasksContextProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logoImage} />

          <TaskForm />
        </View>

        <TaskList />
      </View>
    </TasksContextProvider>
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
