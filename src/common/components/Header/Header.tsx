import { changeThemeAC } from "../../../features/todolists/model/app-reducer";
import { AppBar, IconButton, Switch, Toolbar } from "@mui/material";
import { MenuButton } from "../MenuButton/MenuButton";
import { getTheme } from "../../../common/theme/theme";
import MenuIcon from "@mui/icons-material/Menu";
import { useAppDispatch } from "../../../app/hooks/useAppDispatch";
import { useAppSelector } from "../../../app/hooks/useAppSelector";

export const Header = () => {
  const themeMode = useAppSelector((state) => state.themeMode);
  const dispatch = useAppDispatch();
  const theme = getTheme(themeMode);

  const changeModeHandler = () => {
    dispatch(changeThemeAC({ themeMode: "dark" }));
  };
  return (
    <AppBar position="static" sx={{ mb: "30px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <div>
          <MenuButton>Login</MenuButton>
          <MenuButton>Logout</MenuButton>
          <MenuButton background={theme.palette.primary.dark}>Faq</MenuButton>
          <Switch color={"default"} onChange={changeModeHandler} />
        </div>
      </Toolbar>
    </AppBar>
  );
};
