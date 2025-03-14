import { useContext } from 'react'
import { TasksContext } from '../tasks/context'

export function useTasksContext() {
  const context = useContext(TasksContext)

  if (!context) {
    throw new Error(
      'useTasksContext only can be used inside a TasksContextProvider'
    )
  }

  return context
}
