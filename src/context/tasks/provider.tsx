import { useCallback, useState, type ReactNode } from 'react'
import { type InTask, TasksContext } from './context'

const mockTasks: InTask[] = [
  { id: '1', name: 'Correr 5km', isCompleted: false },
  { id: '2', name: 'Estudar React Native', isCompleted: true },
  { id: '3', name: 'Jantar', isCompleted: true },
  { id: '4', name: 'Trabalhar', isCompleted: false },
]

export function TasksContextProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<InTask[]>([...mockTasks])

  const addTask = useCallback((data: Pick<InTask, 'name'>) => {
    const { name } = data

    const newTask: InTask = {
      id: Date.now().toString(36), // Simple unique id
      name,
      isCompleted: false,
    }

    setTasks(prevState => [newTask, ...prevState])
  }, [])

  const removeTask = useCallback((taskId: string) => {
    setTasks(prevState => prevState.filter(task => task.id !== taskId))
  }, [])

  const toogleTaskCompletition = useCallback(
    (taskId: string, checked: boolean) => {
      setTasks(prevState =>
        prevState.map(task =>
          task.id !== taskId ? task : { ...task, isCompleted: checked }
        )
      )
    },
    []
  )

  return (
    <TasksContext.Provider
      value={{
        data: tasks,
        addTask,
        removeTask,
        toogleTaskCompletition,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
