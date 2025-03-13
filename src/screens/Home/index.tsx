import { StyleSheet, View } from 'react-native'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Task } from '@/components/task'

export function Home() {
  return (
    <View style={styles.container}>
      <Input placeholder="Adicione uma nova tarefa" />

      <Input placeholder="Adicione uma nova tarefa" value="ABC" />

      <Button iconName="trash-2" />

      <Button iconName="plus-circle" variant="SECONDARY" size="large" />

      <Task
        name="Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer."
      />

      <Task
        name="Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer."
        isComplete
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
})
