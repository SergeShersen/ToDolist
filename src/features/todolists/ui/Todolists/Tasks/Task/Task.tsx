import { Checkbox, ListItem } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { EditableSpan } from "../../../../../../common/components/EditableSpan/EditableSpan";
import { TaskType, TodolistType } from "../../../../../../app/Main";
import { useDispatch } from "react-redux";
import {
  changeTaskStatusAC,
  changeTaskTitleAC,
  removeTaskAC,
} from "../../../../model/tasks-reducer";
import { ChangeEvent } from "react";
import { IconButton } from "@mui/material";
import { getListItemSx } from "../../Todolist/Todolist.styles";
import { useAppDispatch } from "../../../../../../app/hooks/useAppDispatch";

type Props = {
  tasks: TaskType;
  todolist: TodolistType;
};

export const Task = ({ tasks, todolist }: Props) => {
  const dispatch = useAppDispatch();

  const changeTaskTitleHandler = (title: string) => {
    dispatch(
      changeTaskTitleAC({
        taskId: tasks.id,
        title: title,
        todolistId: todolist.id,
      })
    );
  };

  const removeTaskHandler = () => {
    dispatch(removeTaskAC({ taskId: tasks.id, todolistId: todolist.id }));
  };

  const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newStatusValue = e.currentTarget.checked;
    dispatch(
      changeTaskStatusAC({
        taskId: tasks.id,
        isDone: newStatusValue,
        todolistId: todolist.id,
      })
    );
  };

  return (
    <ListItem key={tasks.id} sx={getListItemSx(tasks.isDone)}>
      <div>
        <Checkbox checked={tasks.isDone} onChange={changeTaskStatusHandler} />
        <EditableSpan value={tasks.title} onChange={changeTaskTitleHandler} />
      </div>

      <IconButton onClick={removeTaskHandler}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};
