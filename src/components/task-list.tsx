import { useMemo } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import { Task } from './task'
import { TaskListEmpty } from './task-list-empty'
import { TaskFilter } from './task-filter'

export interface InTask {
  id: string
  name: string
  isCompleted: boolean
}

interface TaskListProps {
  data: InTask[]
}

export function TaskList({ data }: TaskListProps) {
  function handleToggleComplete(taskId: string, checked: boolean) {}

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
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}
        renderItem={({ item }) => (
          <Task
            name={item.name}
            isComplete={item.isCompleted}
            onToggleComplete={checked => handleToggleComplete(item.id, checked)}
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
