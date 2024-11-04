import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getTheme } from "../common/theme/theme";
import { Header } from "../common/components/Header/Header";
import { Main } from "./Main";
import { useAppSelector } from "./hooks/useAppSelector";
import { selectThemeMod } from "../features/todolists/model/appSelectors";

function App() {
  const themeMode = useAppSelector(selectThemeMod);
  const theme = getTheme(themeMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;
