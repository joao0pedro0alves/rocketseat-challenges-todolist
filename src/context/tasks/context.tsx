import { createContext } from 'react'

export interface InTask {
  id: string
  name: string
  isCompleted: boolean
}

interface TasksContextData {
  data: InTask[]
  addTask: (data: Pick<InTask, 'name'>) => void
  removeTask: (taskId: string) => void
  toogleTaskCompletition: (taskId: string, checked: boolean) => void
}

export const TasksContext = createContext({} as TasksContextData)
