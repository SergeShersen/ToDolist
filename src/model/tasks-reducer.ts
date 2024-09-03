import { title } from 'process'
import { TasksStateType } from '../App'
import { v1 } from 'uuid'


 
export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
  switch (action.type) {
    case 'REMOVE-TASK': {
      return {...state,
        [action.payload.todolistId]:state[action.payload.todolistId].filter(t=> t.id !== action.payload.taskId)
      }
    }
    case 'ADD-TASK': {
        const newTask = {
            id:v1(),
            title:action.payload.title,
            isDone:false
        }
        return {
            ...state,
            [action.payload.todolistId]: [newTask, ...state[action.payload.todolistId]]
        }
      }
      case 'CHANGE-TASK-STATUS': {
        return {
            ...state,
            [action.payload.todolistId]: state[action.payload.todolistId].map(t => t.id === action.payload.taskId ? {...t, isDone:action.payload.isDone}: t)
        }
      }
      case 'CHANGE-TASK-TITLE': {
        return {
            ...state,
            [action.payload.todolistId]: state[action.payload.todolistId].map(t => t.id === action.payload.taskId ? {...t, title:action.payload.title}: t)
        }
      }
      case 'ADD-TODOLIST': {
        return { ...state, [action.payload.todolistId]: [] }
      }
      case 'REMOVE-TODOLIST': {
        let copystate = {...state}
        delete copystate[action.payload.id]
        return copystate
      }
 
    default:
      throw new Error("I don't understand this type")
  }
}

// Action creators
export const someAC = (todolistId: string) => {
  return { type: '', payload: {} } as const
}
export const removeTaskAC = (payload: {taskId:string , todolistId:string}) => {
	return {type: 'REMOVE-TASK', payload} as const
}
export const addTaskAC = (payload: {title:string , todolistId:string}) => {
	return {type: 'ADD-TASK', payload} as const
}
export const changeTaskStatusAC = (payload: {isDone: boolean , todolistId:string, taskId:string}) => {
	return {type: 'CHANGE-TASK-STATUS', payload} as const
}
export const changeTaskTitleAC = (payload: {title: string , todolistId:string, taskId:string}) => {
	return {type: 'CHANGE-TASK-TITLE', payload} as const
}
export const addTodolistAC = ( title: string) => {
	return {type: 'ADD-TODOLIST', payload: {title, todolistId: v1()}} as const
}
export const removeTodolistAC = (todolistId: string) => {
	return {type: 'REMOVE-TODOLIST', payload: {id: todolistId}} as const
}

// Actions types
export type SomeActionType = ReturnType<typeof someAC>
export type RemoveTaskActionType = ReturnType<typeof removeTaskAC>
export type AddTaskActionType = ReturnType<typeof addTaskAC>
export type ChangeTaskStatusActionType = ReturnType<typeof changeTaskStatusAC>
export type ChangeTaskTitleActionType = ReturnType<typeof changeTaskTitleAC>
export type AddTodolistActionType = ReturnType<typeof addTodolistAC>
export type RemoveTodolistActionType = ReturnType<typeof removeTodolistAC>


type ActionsType = SomeActionType
| RemoveTaskActionType
| AddTaskActionType
| ChangeTaskStatusActionType
| ChangeTaskTitleActionType
| AddTodolistActionType
| RemoveTodolistActionType