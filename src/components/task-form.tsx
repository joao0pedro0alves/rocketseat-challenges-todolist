import { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { Button } from './ui/button'
import { Input } from './ui/input'

interface TaskFormProps {
  onSubmit: (data: { name: string }) => void
}

export function TaskForm({ onSubmit }: TaskFormProps) {
  const [taskName, setTaskName] = useState('')

  function handleSubmit() {
    if (!taskName) return

    onSubmit({ name: taskName })
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
