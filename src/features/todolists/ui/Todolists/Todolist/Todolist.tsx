import { TodolistType } from "../../../../../app/Main";
import { AddItemForm } from "../../../../../common/components/AddItemForm/AddItemForm";
import { FilterTasksButtons } from "../FilterTasksButtons/FilterTasksButtons";
import { Tasks } from "../Tasks/Tasks";
import { TodolistTitle } from "../TodolistTitle/TodolistTitle";

type PropsType = {
  todolist: TodolistType;
  addTask: (title: string, todolistId: string) => void;
};

export const Todolist = (props: PropsType) => {
  const { todolist, addTask } = props;

  const addTaskCallback = (title: string) => {
    addTask(title, todolist.id);
  };

  return (
    <div>
      <TodolistTitle todolist={todolist} />
      <AddItemForm addItem={addTaskCallback} />
      <Tasks todolist={todolist} />
      <FilterTasksButtons todolist={todolist} />
    </div>
  );
};
