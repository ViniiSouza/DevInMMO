import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { MMOGamesProvider } from "./contexts/MMOGames/MMOGamesProvider";
import { Router } from "./routes/Router";
import { GlobaStyle } from "./themes/GlobalStyles";
import { darkTheme, defaultTheme, lightTheme } from "./themes/themes";

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobaStyle />
        <BrowserRouter>
          <MMOGamesProvider>
            <Router />
          </MMOGamesProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
