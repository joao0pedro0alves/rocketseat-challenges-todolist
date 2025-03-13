import { Image, StyleSheet, View } from 'react-native'

import logoImage from '@/assets/logo.png'
import theme from '@/theme'

import { TaskForm } from '@/components/task-form'
import { type InTask, TaskList } from '@/components/task-list'

const mockTasks: InTask[] = [
  { id: '1', name: 'Correr 5km', isCompleted: false },
  { id: '2', name: 'Estudar React Native', isCompleted: true },
  { id: '3', name: 'Jantar', isCompleted: true },
  { id: '4', name: 'Trabalhar', isCompleted: false },
]

export function Home() {
  function handleSave(data: { name: string }) {
    console.log(data)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImage} />

        <TaskForm onSubmit={handleSave} />
      </View>

      <TaskList data={mockTasks} />
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
