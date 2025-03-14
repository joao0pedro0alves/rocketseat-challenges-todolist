import { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { Button } from './ui/button'
import { Input } from './ui/input'
import { useTasksContext } from '@/context/hooks/useTasksContext'

export function TaskForm() {
  const [taskName, setTaskName] = useState('')

  const { addTask } = useTasksContext()

  function handleSubmit() {
    if (!taskName) return

    addTask({ name: taskName })
    setTaskName('')
  }

  return (
    <View style={styles.container}>
      <Input
        value={taskName}
        onChangeText={setTaskName}
        placeholder="Adicione uma nova tarefa"
      />

      <Button
        iconName="plus-circle"
        variant="SECONDARY"
        size="large"
        onPress={handleSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,

    marginTop: 40,
    marginBottom: -100,
  },
})
