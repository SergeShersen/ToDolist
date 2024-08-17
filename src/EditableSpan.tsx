import { ChangeEvent, useState } from "react";
import TextField from "@mui/material/TextField";

type PropsType = {
  value: string;
  onChange: (newTitle: string) => void;
};

export const EditableSpan = ({ value, onChange }: PropsType) => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(value);

  const activateEditModeHandler = () => {
    setEditMode(true);
  };

  const changeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };
  const deactivateEditModeHandler = () => {
    setEditMode(false);
    onChange(title);
  };

  return (
    <>
      {editMode ? (
        <TextField
          variant={"outlined"}
          value={title}
          size={"small"}
          onChange={changeTitleHandler}
          onBlur={deactivateEditModeHandler}
          autoFocus
        />
      ) : (
        <span onDoubleClick={activateEditModeHandler}>{value}</span>
      )}
    </>
  );
};
