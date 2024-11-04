import { Grid } from "@mui/material";
import { AddItemForm } from "../common/components/AddItemForm/AddItemForm";
import Container from "@mui/material/Container";

import { addTodolistAC } from "../features/todolists/model/todolists-reducer";
import { Todolists } from "../features/todolists/ui/Todolists/Todolists";
import { useAppDispatch } from "./hooks/useAppDispatch";

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

export type FilterValuesType = "all" | "active" | "completed";

export type TodolistType = {
  id: string;
  title: string;
  filter: FilterValuesType;
};

export type TasksStateType = {
  [key: string]: TaskType[];
};

export const Main = () => {
  const dispatch = useAppDispatch();

  const addTodolist = (title: string) => {
    const action = addTodolistAC(title);
    dispatch(action);
  };
  return (
    <Container fixed>
      <Grid container sx={{ mb: "30px" }}>
        <AddItemForm addItem={addTodolist} />
      </Grid>
      <Grid container spacing={1}>
        <Todolists />
      </Grid>
    </Container>
  );
};
