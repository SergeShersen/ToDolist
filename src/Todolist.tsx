import {FilterValuesType, TaskType} from "./App";
import {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button} from "./Button";
import { AddItemForm } from "./AddItemForm";
import { EditableSpan } from "./EditableSpan";

type PropsType = {
	title: string
	tasks: TaskType[]
	todolistId:string
	removeTask: (taskId: string, todolistId:string) => void
	changeFilter: (filter: FilterValuesType,  todolistId:string) => void
	addTask: (title: string, todolistId:string) => void
	changeTaskStatus: (taskId: string, taskStatus: boolean, todolistId:string) => void
	filter: FilterValuesType
	removeTodolist: (todolistId: string) => void
	updateTask: (todolistId: string, taskId: string, title: string) => void
	updateTodolist: (todolistId: string, title: string) => void
}

export const Todolist = (props: PropsType) => {
	const {title, tasks, filter, removeTask, changeFilter, addTask, changeTaskStatus,todolistId,removeTodolist,updateTask,updateTodolist} = props

	const [taskTitle, setTaskTitle] = useState('')
	const [error, setError] = useState<string | null>(null)
	
	const addTaskHandler = () => {
		if (taskTitle.trim() !== '') {
			addTask(taskTitle.trim(), todolistId)
			setTaskTitle('')
		} else {
			setError('Title is required')
		}
	}

	const removeTodolistHandler = () => {
		removeTodolist(todolistId)
	  }

	const changeTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setTaskTitle(event.currentTarget.value)
	}

	const addTaskOnKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
		setError(null)
		if (event.key === 'Enter') {
			addTaskHandler()
		}
	}

	const changeFilterTasksHandler = (filter: FilterValuesType) => {
		changeFilter(filter,todolistId)
	}
	const addTaskCallback = (title: string) => {
		addTask(title, todolistId)
	  }

	  const updateTodolistHandler = (title: string) => {
		updateTodolist(todolistId, title)
	  }

	return (
		<div>
			<div className={'todolist-title-container'}>
				<EditableSpan value={title} onChange={updateTodolistHandler} />
				<Button title={'x'} onClick={removeTodolistHandler} />
			</div>
			
			<div>
				<AddItemForm addItem={addTaskCallback} />
				{error && <div className={'error-message'}>{error}</div> }
			</div>
			{
				tasks.length === 0
					? <p>Тасок нет</p>
					: <ul>
						{tasks.map((task) => {
							const changeTaskTitleHandler = (title: string) => {
								updateTask(todolistId, task.id, title)
							  }

							const removeTaskHandler = () => {
								removeTask(task.id,todolistId)
							}

							const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
								const newStatusValue = e.currentTarget.checked
								changeTaskStatus(task.id, newStatusValue, todolistId)
							}

							return <li key={task.id} className={task.isDone ? 'is-done' : ''}>
								<input type="checkbox" checked={task.isDone} onChange={changeTaskStatusHandler}/>
								<EditableSpan value={task.title} onChange={changeTaskTitleHandler} />
								<Button onClick={removeTaskHandler} title={'x'}/>
							</li>
						})}
					</ul>
			}
			
			<div>
				<Button className={filter === 'all' ? 'active-filter' : '' } title={'All'} onClick={()=> changeFilterTasksHandler('all')}/>
				<Button className={filter === 'active' ? 'active-filter' : '' } title={'Active'} onClick={()=> changeFilterTasksHandler('active')}/>
				<Button className={filter === 'completed' ? 'active-filter' : '' } title={'Completed'} onClick={()=> changeFilterTasksHandler('completed')}/>
			</div>
		</div>
	)
}