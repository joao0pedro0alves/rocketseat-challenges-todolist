import { useCallback, useState, type ReactNode } from 'react'
import { type InTask, TasksContext } from './context'

const mockTasks: InTask[] = [
  { id: '1', name: 'Correr 5km', isCompleted: false },
  { id: '2', name: 'Estudar React Native', isCompleted: true },
  { id: '3', name: 'Jantar', isCompleted: true },
  { id: '4', name: 'Trabalhar', isCompleted: false },
]

export function TasksContextProvider({ children }: { children: ReactNode }) {
  const [tasks] = useState<InTask[]>([...mockTasks])

  const onAdd = useCallback(() => {}, [])

  const onRemove = useCallback(() => {}, [])

  const onToogleCompleted = useCallback(() => {}, [])

  return (
    <TasksContext.Provider
      value={{
        data: tasks,
        addTask: onAdd,
        removeTask: onRemove,
        toogleTaskCompletition: onToogleCompleted,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
