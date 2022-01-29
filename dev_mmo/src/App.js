import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { MMOGamesProvider } from "./contexts/MMOGames/MMOGamesProvider";
import { Router } from "./routes/Router";
import { GlobaStyle } from "./themes/GlobalStyles";
import { defaultTheme, lightTheme } from "./themes/themes";

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
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
