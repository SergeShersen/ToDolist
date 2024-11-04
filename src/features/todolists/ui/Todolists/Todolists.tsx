import { addTaskAC } from "../../model/tasks-reducer";
import { Grid, Paper } from "@mui/material";
import { Todolist } from "../Todolists/Todolist/Todolist";
import { useAppDispatch } from "../../../../app/hooks/useAppDispatch";
import { useAppSelector } from "../../../../app/hooks/useAppSelector";
import { selectTodolist } from "../../model/todolistsSelectors";

export const Todolists = () => {
  const todolists = useAppSelector(selectTodolist);

  const dispatch = useAppDispatch();

  const addTask = (title: string, todolistId: string) => {
    dispatch(addTaskAC({ title, todolistId }));
  };

  return (
    <Grid container spacing={-1}>
      {todolists.map((tl) => {
        return (
          <Grid sx={{ mr: "10px" }}>
            <Paper sx={{ p: "0 20px 20px 20px" }}>
              <Todolist key={tl.id} todolist={tl} addTask={addTask} />
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
};
