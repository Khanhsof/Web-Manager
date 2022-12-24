import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/topbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "./scenes/global/sidebar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;