export type ThemeMode = "dark" | "light";

const inicialState: ThemeMode = "light";

export const appReducer = (
  state: ThemeMode = inicialState,
  action: ActionsType
) => {
  switch (action.type) {
    case "CHANGE_THEME": {
      return state === action.payload.themeMode ? "light" : "dark";
    }
    default: {
      return state;
    }
  }
};

// Action types
export const changeThemeAC = (payload: { themeMode: ThemeMode }) => {
  return {
    type: "CHANGE_THEME",
    payload,
  } as const;
};

// Actions types
type ChangeThemeActionType = ReturnType<typeof changeThemeAC>;

export type ActionsType = ChangeThemeActionType;
