import { useMemo } from 'react'
import { Alert, FlatList, StyleSheet, View } from 'react-native'

import { Task } from './task'
import { TaskListEmpty } from './task-list-empty'
import { TaskFilter } from './task-filter'
import { useTasksContext } from '@/context/hooks/useTasksContext'

export function TaskList() {
  const { data, removeTask, toogleTaskCompletition } = useTasksContext()

  function handleToggleComplete(taskId: string, checked: boolean) {
    toogleTaskCompletition(taskId, checked)
  }

  function handleRemoveTask(taskId: string) {
    Alert.alert('Remover', 'Deseja remover a tarefa?', [
      {
        text: 'Sim',
        onPress: () => removeTask(taskId),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  const completedCount = useMemo(() => {
    return data.filter(task => task.isCompleted).length
  }, [data])

  const uncompletedCount = useMemo(() => {
    return data.filter(task => !task.isCompleted).length
  }, [data])

  return (
    <View style={styles.container}>
      <TaskFilter
        completedCount={completedCount}
        uncompletedCount={uncompletedCount}
      />

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={TaskListEmpty}
        contentContainerStyle={[
          { paddingBottom: 100 },
          data.length === 0 && {
            flex: 1,
          },
        ]}
        renderItem={({ item }) => (
          <Task
            name={item.name}
            isComplete={item.isCompleted}
            onToggleComplete={checked => handleToggleComplete(item.id, checked)}
            onRemove={() => handleRemoveTask(item.id)}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 55,
  },
})
